import { Link } from "react-router-dom";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import lightwarpLogo from "../assets/images/lightwarp_transparent.png";

const studioLinks = [
  { to: "/projects", label: "Projects" },
  { to: "/services", label: "Services" },
  { to: "/about",    label: "About"    },
  { to: "/contact",  label: "Contact"  },
];

function XIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L2.25 2.25h6.928l4.27 5.646 4.796-5.646Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
    </svg>
  );
}

function TikTokIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function VimeoIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 12.4C4.603 9.813 3.834 8.515 3.01 8.515c-.179 0-.806.378-1.881 1.132L0 8.039c1.185-1.044 2.351-2.084 3.501-3.128C5.08 3.312 6.266 2.58 7.055 2.504c1.847-.177 2.982.922 3.4 3.651.483 2.968.756 4.799.831 5.498.44 2.909.919 4.363 1.441 4.363.407 0 1.019-.643 1.832-1.927.814-1.285 1.25-2.264 1.305-2.935.116-1.108-.32-1.663-1.305-1.663-.464 0-.943.101-1.432.313 1.002-3.271 2.88-4.861 5.643-4.811 2.06.038 3.049 1.43 2.957 4.131" />
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/lightwarp3d",     icon: <Instagram  size={16} strokeWidth={1.75} /> },
  { label: "YouTube",   href: "https://www.youtube.com/@lightwarpstudios", icon: <Youtube    size={16} strokeWidth={1.75} /> },
  { label: "TikTok",    href: "https://www.tiktok.com/@lightwarp3d",       icon: <TikTokIcon size={16} /> },
  { label: "X",         href: "https://twitter.com/lightwarp3d",           icon: <XIcon      size={16} /> },
  { label: "LinkedIn",  href: "https://www.linkedin.com/company/lightwarp",icon: <Linkedin   size={16} strokeWidth={1.75} /> },
  { label: "Vimeo",     href: "https://vimeo.com/lightwarp",               icon: <VimeoIcon  size={16} /> },
];

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/10">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-pink/50 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">

        {/* Logo + description + social icons */}
        <div className="md:col-span-2">
          <img src={lightwarpLogo} alt="Lightwarp" className="h-24 w-auto object-contain" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            A new age creative 3D studio powered by real-time technology —
            illuminating brands through cinematic animation and immersive storytelling.
          </p>
          <div className="mt-6 flex items-center gap-2">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-all hover:border-pink/40 hover:bg-pink/10 hover:text-white"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Studio links */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Studio</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {studioLinks.map(({ to, label }) => (
              <li key={to}>
                <Link to={to} className="transition hover:text-pink-400">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Signal</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>info@lightwarp3d.com</li>
            <li>newbiz@lightwarp3d.com</li>
            <li>(615) 571-9395</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-xs text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Lightwarp LLC. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="transition hover:text-white">Privacy Policy</Link>
            <Link to="/terms"   className="transition hover:text-white">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
