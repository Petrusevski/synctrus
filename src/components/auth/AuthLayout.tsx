import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <main className="min-h-[80vh] grid lg:grid-cols-2">
      {/* Left: Value props / branding */}
      <section className="hidden lg:flex flex-col justify-between bg-gradient-to-br from-indigo-50 via-white to-cyan-50 border-r">
        <header className="p-8">
          <Link to="/" className="inline-flex items-center gap-2">
            <span className="h-7 w-7 rounded-md bg-black" />
            <span className="font-extrabold tracking-tight">Synctrus</span>
          </Link>
        </header>

        <div className="px-16 pb-16 space-y-6">
          <h2 className="text-3xl font-bold">Your loyalty lab.</h2>
          <ul className="grid gap-3 text-neutral-700">
            <li>✅ Learn with hands-on courses & case studies</li>
            <li>✅ Track progress and earn completion badges</li>
            <li>✅ Submit solutions and build a portfolio</li>
          </ul>
          <p className="text-sm text-neutral-500">By continuing you agree to our&nbsp;
            <Link to="/terms" className="underline">Terms</Link> and&nbsp;
            <Link to="/privacy" className="underline">Privacy</Link>.
          </p>
        </div>
      </section>

      {/* Right: Form */}
      <section className="flex items-center justify-center py-12 px-6">
        <div className="w-full max-w-md">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">{title}</h1>
            {subtitle ? (
              <p className="text-neutral-600 mt-1">{subtitle}</p>
            ) : null}
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">{children}</div>
          {footer ? <div className="mt-4 text-center">{footer}</div> : null}
        </div>
      </section>
    </main>
  );
}
