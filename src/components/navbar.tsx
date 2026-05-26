import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import lightwarpLogo from "../assets/images/lightwarp_transparent.png";

const links = [
  { to: "/",          label: "Home"      },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/projects",  label: "Projects"  },
  { to: "/services",  label: "Services"  },
  { to: "/about",     label: "About"     },
] as const;

const socialNav = [
  { label: "Instagram", href: "https://www.instagram.com/lightwarp3d",     Icon: Instagram },
  { label: "YouTube",   href: "https://www.youtube.com/@lightwarpstudios", Icon: Youtube   },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/lightwarp", Icon: Linkedin  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const { pathname }            = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky -top-4 z-50 py-4 transition-all duration-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ── Desktop nav ── */}
        <nav
          className={`relative flex items-center justify-between rounded-3xl border border-white/10 bg-slate-700/60 px-6 py-4 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-500 ${
            scrolled ? "shadow-[0_12px_50px_rgba(236,72,153,0.15)]" : ""
          }`}
        >
          {/* Logo */}
          <Link to="/" className="z-10">
            <div className="relative">
              <img
                src={lightwarpLogo}
                alt="Lightwarp"
                className="h-12 w-auto max-w-[220px] object-contain"
                decoding="async"
                draggable={false}
              />
              <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-brand opacity-10 blur-xl" />
            </div>
          </Link>

          {/* Center nav links */}
          <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to} className="relative">
                  <Link
                    to={l.to}
                    className="group relative px-4 py-2 text-sm text-foreground/80 transition-colors hover:text-white"
                  >
                    <span className="relative z-10">{l.label}</span>
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full border border-white/10 bg-white/5"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-brand transition-all duration-300 group-hover:w-2/3" />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side: social icons + Contact + hamburger */}
          <div className="flex items-center gap-2">

            {/* Social icons — desktop only */}
            <div className="hidden items-center gap-1 md:flex">
              {socialNav.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-pink/40 hover:bg-pink/10 hover:text-white"
                >
                  <Icon size={14} strokeWidth={1.75} />
                </a>
              ))}
            </div>

            {/* Contact button */}
            <Link
              to="/contact"
              className="relative hidden items-center gap-2 rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-white pulse-glow transition-transform hover:scale-105 sm:inline-flex"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
              Contact
            </Link>

            {/* Hamburger — mobile only */}
            <button
              aria-label="Toggle menu"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 md:hidden"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block h-0.5 w-4 bg-white before:block before:h-0.5 before:w-4 before:-translate-y-1.5 before:bg-white after:block after:h-0.5 after:w-4 after:translate-y-1 after:bg-white" />
            </button>
          </div>
        </nav>

        {/* ── Mobile menu ── */}
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mt-2 rounded-2xl p-3 md:hidden"
          >
            <ul className="flex flex-col">
              {links.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="block rounded-lg px-4 py-2.5 text-sm hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/contact"
                  className="mt-1 block rounded-lg bg-gradient-brand px-4 py-2.5 text-center text-sm font-medium text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>

            {/* Social icons row in mobile menu */}
            <div className="mt-3 flex items-center justify-center gap-3 border-t border-white/10 pt-3">
              {socialNav.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:text-white"
                >
                  <Icon size={16} strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </header>
  );
}
