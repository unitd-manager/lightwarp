import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Particles } from "../../components/particles";
import { LighthouseBeam, ScanLine } from "../../components/lighthouse-beam";
import proj from "../../assets/images/proj.jpg";

export function ProjectsPanelHero() {
  return (
    <section className="relative -mt-28 min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.18),transparent_35%)]" />

      <Particles count={90} />
      <ScanLine />

      <div className="absolute inset-0 opacity-70">
        <LighthouseBeam intensity="strong" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-10 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl"
        >
          <span className="h-2 w-2 rounded-full bg-gradient-brand pulse-glow" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Selected Projects</span>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-5xl sm:text-6xl xl:text-8xl font-semibold leading-[0.92]">
              Stories Crafted
              <br />
              Through
              <br />
              <span className="text-gradient">Light, Motion & Vision</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Explore a collection of cinematic 3D experiences,
              immersive animations, product visualizations, and
              cutting-edge digital productions created for brands,
              startups, and global campaigns.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand transition-all hover:scale-[1.03]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start A Project
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              <Link
                to="/services"
                className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium backdrop-blur-xl transition-all hover:bg-white/[0.08]"
              >
                Our Services
              </Link>
            </div>

            <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6">
              {[
                { value: "180+", label: "Projects" },
                { value: "40+", label: "Brands" },
                { value: "12", label: "Awards" },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                  <div className="text-3xl font-semibold text-gradient">{item.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[640px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.18),transparent_35%),linear-gradient(to_bottom,#050816,#090d1f)]" />

            <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-3xl" />

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/20"
            />

            <motion.img
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              src={proj}
              alt="Projects Observatory"
              className="absolute left-1/2 bottom-0 z-20 w-[92%] max-w-[760px] -translate-x-1/2 object-contain"
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute right-8 top-10 z-30 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Featured Work</div>
              <div className="mt-3 text-2xl font-semibold">Cinematic Projects</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
