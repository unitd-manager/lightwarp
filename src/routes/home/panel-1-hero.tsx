import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LighthouseScene } from "../../components/lighthouse-scene";
import { Particles } from "../../components/particles";
import { LighthouseBeam, ScanLine } from "../../components/lighthouse-beam";

export function HomePanelHero() {
  return (
    <section className="relative -mt-28 min-h-screen flex items-center overflow-hidden">
      <LighthouseBeam intensity="strong" />
      <Particles count={70} />
      <ScanLine />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand pulse-glow" />
            Real-Time 3D Studio
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold leading-[0.95]">
            A New Age Creative{" "}
            <span className="text-gradient">3D Studio.</span>{" "}
            Powered by Real-Time Technology
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
            Creative, impactful 3D animation built to engage, convert, and
            perform — powered by a proprietary real-time pipeline.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-white glow-brand transition-transform hover:scale-[1.03]"
            >
              <span className="relative z-10">Our Recent Work</span>
              <span className="relative z-10">→</span>
              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-white/[0.08]"
            >
              Connect With Us
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </motion.div>

        <div className="relative h-[560px]">
          <LighthouseScene className="h-full w-full" />
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        Scroll
        <div className="h-10 w-px bg-gradient-to-b from-pink to-transparent" />
      </div>
    </section>
  );
}
