import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Particles } from "../../components/particles";
import { LighthouseBeam, ScanLine } from "../../components/lighthouse-beam";

export function ContactPanelHero() {
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
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Contact Lightwarp</span>
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-4xl sm:text-5xl xl:text-7xl font-semibold leading-[0.92]">
              Let's Build
              <br />
              Something
              <br />
              <span className="text-gradient">Extraordinary Together</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Whether you need cinematic 3D visuals, immersive brand
              storytelling, or cutting-edge digital experiences, our team
              is ready to illuminate your next big idea.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group relative overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand transition-all hover:scale-[1.03]"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View Our Work
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
              </Link>

              <Link
                to="/services"
                className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium backdrop-blur-xl transition-all hover:bg-white/[0.08]"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-16 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Email", desc: "info@lightwarp3d.com" },
                { title: "Phone", desc: "(615) 571-9395" },
                { title: "Availability", desc: "Open For Projects" },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-pink/20 via-violet/10 to-blue/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">
              <div className="absolute inset-0 opacity-20">
                <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
              </div>

              <div className="relative h-[520px] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.18),transparent_35%),linear-gradient(to_bottom,#050816,#0a0d1d)]" />

                <div className="absolute inset-0 opacity-10">
                  <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                <motion.div
                  animate={{ scale: [1, 1.08, 1], y: [0, -12, 0] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                  className="absolute left-1/2 top-1/2 z-20 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-pink-500/30 via-violet-500/20 to-blue-500/30 shadow-[0_0_120px_rgba(255,0,128,0.35)] backdrop-blur-3xl"
                >
                  <div className="absolute inset-6 rounded-full border border-white/10" />
                  <div className="absolute inset-12 rounded-full border border-white/10" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -18, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 7 }}
                  className="absolute left-10 top-16 z-30 flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.05] text-4xl backdrop-blur-xl"
                >
                  ✉
                </motion.div>

                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ repeat: Infinity, duration: 6 }}
                  className="absolute right-10 top-20 z-30 rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
                >
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Response Time</div>
                  <div className="mt-2 text-2xl font-semibold text-gradient">Within 24hrs</div>
                </motion.div>

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
                  className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                />

                <motion.div
                  animate={{ rotate: [360, 0] }}
                  transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
                  className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-pink-500/10"
                />

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="absolute bottom-10 left-10 z-30 w-[250px] rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
                >
                  <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Start A Conversation</div>
                  <h3 className="mt-3 text-xl font-semibold">Let's Build Together</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Share your ideas, goals, and creative vision with our team.</p>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 5 }}
                  className="absolute bottom-20 right-16 h-24 w-24 rounded-full bg-blue-500/30 blur-2xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
                className="absolute left-6 top-6 w-[260px] rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
              >
                <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Start A Conversation</div>
                <h3 className="mt-3 text-xl font-semibold">Your Vision Matters</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Share your ideas, goals, and creative challenges — we'll help bring them to life.
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
                className="absolute bottom-6 right-6 rounded-3xl border border-white/10 bg-black/40 px-6 py-5 backdrop-blur-xl"
              >
                <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Response Time</div>
                <div className="mt-2 text-3xl font-semibold text-gradient">Within 24hrs</div>
              </motion.div>

              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 7 }}
                className="absolute right-10 top-1/2 rounded-full border border-pink/20 bg-pink/10 px-5 py-3 backdrop-blur-xl"
              >
                <span className="text-sm font-medium text-white">Let's Create</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
