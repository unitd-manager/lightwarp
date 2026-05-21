{/*import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import lightwarpLogo from "../assets/images/lightwarp.jpeg";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
   {/* <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`glass relative flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glow-brand" : ""
          }`}
        >
          <Link to="/" className="z-10">
            <div className="relative">
              <img
                src={lightwarpLogo}
                alt="Lightwarp"
                className="h-10 w-auto max-w-[190px] object-contain"
                decoding="async"
                draggable={false}
              />
              <div className="absolute -inset-3 rounded-2xl bg-gradient-brand opacity-10 blur-xl -z-10" />
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to} className="relative">
                  <Link
                    to={l.to}
                    className="relative px-4 py-2 text-sm text-foreground/80 hover:text-white transition-colors group"
                  >
                    <span className="relative z-10">{l.label}</span>
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="absolute left-1/2 -bottom-0.5 h-px w-0 -translate-x-1/2 bg-gradient-brand transition-all duration-300 group-hover:w-2/3" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex relative items-center gap-2 rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-white pulse-glow transition-transform hover:scale-105"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
              Contact
            </Link>
            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block h-0.5 w-4 bg-white before:block before:h-0.5 before:w-4 before:-translate-y-1.5 before:bg-white after:block after:h-0.5 after:w-4 after:translate-y-1 after:bg-white" />
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass mt-2 rounded-2xl p-3"
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
          </motion.div>
        )}
      </div>
    </header>);
    }*/}


import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import lightwarpLogo from "../assets/images/lightwarp_transparent.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`sticky -top-4 z-50 transition-all duration-500 ${
        scrolled ? "py-4" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-7 sm:px-4">
        {/*<nav
          className={`glass relative flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glow-brand" : ""
          }`}
        >*/}


         <nav
      className={`relative flex items-center justify-between rounded-3xl
      px-6 py-4
      bg-slate-700/60 backdrop-blur-xl
      border border-white/10
      shadow-[0_8px_40px_rgba(0,0,0,0.45)]
      transition-all duration-500
      ${scrolled ? "shadow-[0_12px_50px_rgba(236,72,153,0.15)]" : ""}
      `}
    >
          <Link to="/" className="z-10">
            <div className="relative">
              <img
                src={lightwarpLogo}
                alt="Lightwarp"
                className="h-12 w-auto max-w-[220px] object-contain"
                decoding="async"
                draggable={false}
              />
              <div className="absolute -inset-3 rounded-2xl bg-gradient-brand opacity-10 blur-xl -z-10" />
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {links.map((l) => {
              const active = pathname === l.to;
              return (
                <li key={l.to} className="relative">
                  <Link
                    to={l.to}
                    className="relative px-4 py-2 text-sm text-foreground/80 hover:text-white transition-colors group"
                  >
                    <span className="relative z-10">{l.label}</span>
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-white/5 border border-white/10"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="absolute left-1/2 -bottom-0.5 h-px w-0 -translate-x-1/2 bg-gradient-brand transition-all duration-300 group-hover:w-2/3" />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex relative items-center gap-2 rounded-full bg-gradient-brand px-5 py-2 text-sm font-medium text-white pulse-glow transition-transform hover:scale-105"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_8px_white]" />
              Contact
            </Link>
            <button
              aria-label="Toggle menu"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block h-0.5 w-4 bg-white before:block before:h-0.5 before:w-4 before:-translate-y-1.5 before:bg-white after:block after:h-0.5 after:w-4 after:translate-y-1 after:bg-white" />
            </button>
          </div>
        </nav>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass mt-2 rounded-2xl p-3"
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
          </motion.div>
        )}
      </div>
    </header>
  );}