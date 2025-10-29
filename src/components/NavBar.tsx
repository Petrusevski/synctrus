import { NavLink } from "react-router-dom";
import Container from "./ui/Container";
import ThemeToggle from "./ui/ThemeToggle";

export default function NavBar(){
  const nav = "px-3 py-2 rounded-md text-sm font-medium hover:underline";
  const active = ({isActive}:{isActive:boolean}) => isActive ? nav + " underline" : nav;
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-neutral-200">
      <Container className="flex items-center justify-between h-16">
        <a href="/" className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-blue block" />
          <span className="font-extrabold tracking-tight">Synctrus</span>
        </a>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/services" className={active}>Services</NavLink>
          <NavLink to="/case-studies" className={active}>Case Studies</NavLink>
          <NavLink to="/about" className={active}>About</NavLink>
          <NavLink to="/pricing" className={active}>Pricing</NavLink>
          <NavLink to="/contact" className={active}>Contact</NavLink>
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="/contact" className="hidden md:inline-flex items-center rounded-xl bg-black text-white px-4 py-2.5 font-semibold border border-black hover:bg-neutral-900">Talk to us</a>
        </div>
      </Container>
    </header>
  );
}
