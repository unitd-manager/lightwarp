import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";
import { LighthouseBeam, ScanLine } from "../components/lighthouse-beam";
import { LighthouseScene } from "../components/lighthouse-scene";
import { Particles } from "../components/particles";

const fullServices = [
  { title: "3D Animation", desc: "Story-driven motion crafted at 24fps, rendered for cinema and screens alike.", icon: "◐" },
  { title: "Product Visualization", desc: "Photoreal hero shots and turntables that beat any photoshoot.", icon: "◇" },
  { title: "Motion Graphics", desc: "Kinetic typography, brand systems, and explainer cinema.", icon: "▲" },
  { title: "VFX", desc: "Compositing, simulations, and effects that disappear into the frame.", icon: "✦" },
  { title: "CGI", desc: "Bespoke environments and assets, built from the polygon up.", icon: "◉" },
  { title: "Architectural Viz", desc: "Spaces walked through before they're ever poured.", icon: "▣" },
  { title: "Character Animation", desc: "Performance-grade rigging, mocap, and hand-keyed acting.", icon: "✶" },
  { title: "Realtime / Unreal", desc: "Interactive 3D for product, virtual production, and configurators.", icon: "◭" },
];

const process = [
  { step: "01", title: "Discovery", desc: "We listen, audit, and translate brand vision into a creative brief." },
  { step: "02", title: "Strategy", desc: "Storyboards, references, and a production blueprint." },
  { step: "03", title: "Design", desc: "Style frames, look-dev, and concept rounds." },
  { step: "04", title: "Production", desc: "Modeling, animation, lighting, and render orchestration." },
  { step: "05", title: "Delivery", desc: "Final cut, master files, and post-launch support." },
];

export default function Services() {
  return (
    <PageShell>

{/* NEW SERVICES HERO SECTION */}

     <section className="relative -mt-28 min-h-screen flex items-center overflow-hidden">
  {/* Background Effects */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,128,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(0,140,255,0.18),transparent_35%)]" />

  <Particles count={80} />
  <ScanLine />

  {/* Animated Beam */}
  <div className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 opacity-70">
    <LighthouseBeam intensity="strong" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* TOP LABEL */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-8 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl"
    >
      <span className="h-2 w-2 rounded-full bg-gradient-brand pulse-glow" />
      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Creative Digital Services
      </span>
    </motion.div>

    {/* MAIN CONTENT */}
    <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.9fr]">

      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-5xl sm:text-6xl xl:text-8xl font-semibold leading-[0.92]">
          We Create
          <br />
          <span className="text-gradient">
            Visual Experiences
          </span>
          <br />
          That Move Brands
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          From cinematic 3D animation and CGI to immersive realtime
          experiences, we help brands stand out through powerful visual
          storytelling and next-generation digital production.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            to="/contact"
            className="group relative overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand transition-all hover:scale-[1.03]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Project
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
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

        {/* SERVICE PILLS */}
        <div className="mt-14 flex flex-wrap gap-3">
          {[
            "3D Animation",
            "CGI Production",
            "VFX",
            "Motion Graphics",
            "Realtime Unreal",
            "Product Visualization",
          ].map((item) => (
            <div
              key={item}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-muted-foreground backdrop-blur-xl"
            >
              {item}
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT SIDE LIGHTHOUSE DESIGN */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >

        {/* Outer Glow */}
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-pink/20 via-violet/10 to-blue/20 blur-3xl" />

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">

          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* Lighthouse Scene */}
          <div className="relative h-[620px]">
            <LighthouseScene className="h-full w-full" />

            {/* Rotating Beam Glow */}
            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/10 blur-3xl animate-pulse" />
          </div>

          {/* Floating Service Cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Services
            </div>

            <div className="mt-1 text-3xl font-semibold text-gradient">
              8+
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute bottom-6 right-6 rounded-2xl border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-xl"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Projects Delivered
            </div>

            <div className="mt-1 text-3xl font-semibold text-gradient">
              180+
            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute right-10 top-1/2 rounded-full border border-pink/20 bg-pink/10 px-5 py-3 backdrop-blur-xl"
          >
            <span className="text-sm font-medium text-white">
              Creative Studio
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
      {/* SERVICES */}
      <Section
        eyebrow="Services"
        title={<>Lightwarp Has <span className="text-gradient">You Covered</span></>}
        subtitle="A complete creative stack under one studio roof."
      >

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {fullServices.map((s, i) => (

            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5, delay: i * .05 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-violet/40 hover:-translate-y-2 transition-all"
            >

              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-pink/20 to-violet/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-2xl text-white shadow-lg">
                {s.icon}
              </div>

              <h3 className="text-2xl font-semibold">{s.title}</h3>

              <p className="mt-3 text-base leading-7 text-muted-foreground">
                {s.desc}
              </p>

              <div className="mt-8 text-sm font-medium text-orange-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
                Explore Service →
              </div>

            </motion.div>

          ))}

        </div>

      </Section>


      {/* PROCESS */}
      <Section
        eyebrow="Process"
        title={<>How We <span className="text-gradient">Deliver</span></>}
        subtitle="A studio process tuned for speed and craft."
      >

        <div className="relative">

          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-pink via-violet to-blue md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">

            {process.map((p, i) => (

              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .6, delay: i * .08 }}
                className={`relative grid grid-cols-[48px_1fr] md:grid-cols-2 gap-8 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
              >

                <div className={i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}>

                  <div className="absolute left-6 md:left-1/2 h-3 w-3 rounded-full bg-gradient-brand pulse-glow" />

                  <div className="hidden md:block">
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Phase {p.step}
                    </div>

                    <h3 className="mt-1 text-2xl font-semibold">
                      {p.title}
                    </h3>
                  </div>

                </div>


                <div className={`glass border-gradient rounded-2xl p-6 ${i % 2 ? "" : "md:pl-12"}`}>

                  <div className="md:hidden text-xs uppercase text-muted-foreground">
                    Phase {p.step}
                  </div>

                  <h4 className="md:hidden mt-1 text-xl font-semibold">
                    {p.title}
                  </h4>

                  <p className="text-sm md:text-base text-muted-foreground">
                    {p.desc}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </Section>


      {/* CTA */}
      <Section>

        <div className="relative overflow-hidden rounded-3xl glass border-gradient p-12 sm:p-16 text-center">

          <LighthouseBeam intensity="strong" />

          <div className="relative">

            <h2 className="text-4xl sm:text-5xl font-semibold">
              Ready To <span className="text-gradient">Get Started?</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Bring the brief. We'll bring the light.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand pulse-glow"
            >
              Start a Project →
            </Link>

          </div>

        </div>

      </Section>

    </PageShell>
  );
}