import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, Link } from "react-router-dom";
import Container from "./ui/Container";
import { useAuth } from "@/context/AuthContext";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const { user, profile, signOut } = useAuth();

  const links = [
    { to: "/services", label: "Services" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/about", label: "About" },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
    { to: "/academy", label: "Academy" },
  ];

  // lock scroll when menu open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev || "";
    };
  }, [open]);

  // focus first link when opened
  useEffect(() => {
    if (open && firstLinkRef.current) firstLinkRef.current.focus();
  }, [open]);

  const close = () => setOpen(false);

  const initials = (() => {
    const source = profile?.full_name || user?.email || "";
    const parts = source.split(/[^\p{L}\p{N}]+/u).filter(Boolean);
    const chars = (parts[0]?.[0] || "") + (parts[1]?.[0] || "");
    return chars.toUpperCase() || "U";
  })();

  const DesktopNav = () => (
    <nav className="hidden md:flex items-center gap-1">
      {links.map((l) => (
        <NavLink
          key={l.to}
          to={l.to}
          className={({ isActive }) =>
            (isActive ? "underline " : "") +
            "px-3 py-2 rounded-md text-sm font-medium hover:underline"
          }
        >
          {l.label}
        </NavLink>
      ))}
    </nav>
  );

  // --- Mobile Menu rendered via portal ---
  const MobileMenu = () =>
    createPortal(
      <div
        className="fixed inset-0 z-[100] md:hidden"
        role="dialog"
        aria-modal="true"
        onKeyDown={(e) => e.key === "Escape" && close()}
      >
        {/* Backdrop */}
        <button
          className="absolute inset-0 bg-black/40"
          aria-label="Close menu"
          onClick={close}
        />
        {/* Panel */}
        <div
          id="mobile-menu"
          className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white shadow-xl border-l border-neutral-200 flex flex-col animate-in slide-in-from-right duration-200"
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-neutral-200">
            <span className="font-extrabold tracking-tight">Menu</span>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-black"
              aria-label="Close menu"
              onClick={close}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <nav className="p-2">
            {links.map((l, i) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  (isActive ? "underline " : "") +
                  "block w-full text-left px-4 py-3 rounded-md text-base font-medium hover:bg-neutral-100"
                }
                onClick={close}
                ref={i === 0 ? firstLinkRef : undefined}
              >
                {l.label}
              </NavLink>
            ))}

            {/* Auth actions (mobile) */}
            {user ? (
              <>
                <Link
                  to="/account"
                  onClick={close}
                  className="mt-2 mx-4 inline-flex items-center justify-center rounded-xl border px-4 py-2.5 font-semibold hover:bg-neutral-100 w-[calc(100%-2rem)]"
                >
                  Account
                </Link>
                <button
                  onClick={() => {
                    close();
                    signOut();
                  }}
                  className="mt-2 mx-4 inline-flex items-center justify-center rounded-xl bg-neutral-100 px-4 py-2.5 font-semibold hover:bg-neutral-200 w-[calc(100%-2rem)]"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/auth/sign-in"
                  onClick={close}
                  className="mt-2 mx-4 inline-flex items-center justify-center rounded-xl border px-4 py-2.5 font-semibold hover:bg-neutral-100 w-[calc(100%-2rem)]"
                >
                  Sign in
                </Link>
                <Link
                  to="/auth/sign-up"
                  onClick={close}
                  className="mt-2 mx-4 inline-flex items-center justify-center rounded-xl bg-black text-white px-4 py-2.5 font-semibold border border-black hover:bg-neutral-900 w-[calc(100%-2rem)]"
                >
                  Sign up
                </Link>
              </>
            )}

            {/* CTA (mobile) */}
            <Link
              to="/contact"
              onClick={close}
              className="mt-3 mx-4 inline-flex items-center justify-center rounded-xl bg-black text-white px-4 py-2.5 font-semibold border border-black hover:bg-neutral-900 w-[calc(100%-2rem)]"
            >
              Talk to us
            </Link>
          </nav>
        </div>
      </div>,
      document.body
    );

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <Container className="flex items-center justify-between h-16">
        {/* Logo → Link (no full reload) */}
        <Link to="/" className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-blue block" />
          <span className="font-extrabold tracking-tight">Synctrus</span>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-3">
          {/* Desktop auth actions */}
          {user ? (
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/account"
                className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium hover:bg-neutral-50"
                title={profile?.full_name || user.email || "Account"}
              >
                <span className="h-7 w-7 grid place-content-center rounded-full bg-neutral-200 text-[11px] font-semibold">
                  {initials}
                </span>
                <span className="hidden lg:inline">Account</span>
              </Link>
              <button
                onClick={signOut}
                className="inline-flex items-center rounded-xl bg-neutral-100 px-3 py-2 text-sm font-medium hover:bg-neutral-200"
              >
                Sign out
              </button>
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-2">
              <Link
                to="/auth/sign-in"
                className="inline-flex items-center rounded-xl border px-3 py-2 text-sm font-medium hover:bg-neutral-50"
              >
                Sign in
              </Link>
              <Link
                to="/auth/sign-up"
                className="inline-flex items-center rounded-xl bg-indigo-600 text-white px-3 py-2 text-sm font-semibold hover:bg-indigo-700"
              >
                Sign up
              </Link>
            </div>
          )}

          {/* CTA (desktop) */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center rounded-xl bg-black text-white px-4 py-2.5 font-semibold border border-black hover:bg-neutral-900"
          >
            Talk to us
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>

      {open ? <MobileMenu /> : null}
    </header>
  );
}
