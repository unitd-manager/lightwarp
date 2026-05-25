import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import images1 from "../../assets/images/beacon.jpg";

export function ServicesPanelHero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,140,255,0.14),transparent_30%),linear-gradient(to_bottom,#050816,#090b1a)]" />

      <div className="absolute inset-0 opacity-[0.06]">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="absolute left-[-120px] top-[120px] h-[320px] w-[320px] rounded-full bg-pink/20 blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full bg-blue/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-gradient-brand pulse-glow" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Premium Creative Services</span>
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-semibold leading-[0.95]">
              Creative Services
              <br />
              <span className="text-gradient">Built For Modern Brands</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              From cinematic 3D animation and CGI to immersive realtime
              experiences, we craft visuals that elevate brands,
              products, and digital storytelling.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand transition-all hover:scale-[1.03]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your Project
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              <Link
                to="/projects"
                className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium backdrop-blur-xl transition-all hover:bg-white/[0.08]"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-3">
              {["3D Animation", "CGI", "VFX", "Motion Graphics", "Realtime Unreal", "Product Visualization"].map((item) => (
                <div
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl transition-all hover:border-pink/30 hover:text-white"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[640px] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.18),transparent_35%),linear-gradient(to_bottom,#050816,#090d1f)]" />
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-3xl" />

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-500/20"
            />

            <motion.img
              animate={{ y: [0, -12, 0], rotate: [0, 2, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
              src={images1}
              alt="Beacon Core"
              className="absolute left-1/2 top-1/2 z-20 w-[90%] max-w-[680px] -translate-x-1/2 -translate-y-1/2 object-contain"
            />

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute left-8 top-10 z-30 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Creative Engine</div>
              <div className="mt-3 text-2xl font-semibold">CGI + Animation</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
