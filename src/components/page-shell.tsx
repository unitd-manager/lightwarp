import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { MouseLight } from "./mouse-light";

export function PageShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  return (
    <div className="relative min-h-screen">
      <MouseLight />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="relative"
        >
          {/* Lighthouse beam sweep on page transition */}
          <motion.div
            key={pathname + "-sweep"}
            initial={{ x: "-120%", opacity: 0.9 }}
            animate={{ x: "120%", opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="pointer-events-none fixed inset-y-0 left-0 z-40 w-1/3 mix-blend-screen"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,77,205,0.25), rgba(138,92,255,0.35), rgba(77,159,255,0.25), transparent)",
              filter: "blur(20px)",
            }}
          />
          <div className="pt-28">{children}</div>
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
