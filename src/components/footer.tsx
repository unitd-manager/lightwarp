import { Link } from "react-router-dom";
import { LogoMark } from "./lighthouse-logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-pink/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <LogoMark />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A 3D animation studio illuminating brands through cinematic visuals,
            CGI, and immersive storytelling.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/projects" className="hover:text-gradient">Projects</Link></li>
            <li><Link to="/services" className="hover:text-gradient">Services</Link></li>
            <li><Link to="/about" className="hover:text-gradient">About</Link></li>
            <li><Link to="/contact" className="hover:text-gradient">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Signal</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>hello@lightwarp.studio</li>
            <li>+1 (415) 555-0142</li>
            <li>San Francisco · Lisbon</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Lightwarp Studio — Guiding vision into light.
      </div>
    </footer>
  );
}
