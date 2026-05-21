import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";
import { LighthouseScene } from "../components/lighthouse-scene";
import { Particles } from "../components/particles";
import { LighthouseBeam, ScanLine } from "../components/lighthouse-beam";

const services = [
  { title: "3D Animation", desc: "Cinematic narratives rendered frame by frame.", icon: "◐" },
  { title: "Product Visualization", desc: "Hero shots that sell before a word is said.", icon: "◇" },
  { title: "Motion Graphics", desc: "Kinetic typography and brand-defining motion.", icon: "▲" },
  { title: "VFX", desc: "Invisible effects, visible impact.", icon: "✦" },
  { title: "CGI", desc: "Photoreal worlds that didn't exist yesterday.", icon: "◉" },
  { title: "Architectural Viz", desc: "Spaces explored before the first brick.", icon: "▣" },
  { title: "Character Animation", desc: "Believable performers, pixel deep.", icon: "✶" },
];

export default function Home() {
  return (
    <PageShell>

      {/* HERO */}
      <section className="relative -mt-28 min-h-[80vh] flex items-center overflow-hidden">

        <LighthouseBeam intensity="strong" />
        <Particles count={70} />
        <ScanLine />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-1 px-6 pt-10 pb-0 lg:grid-cols-[1.1fr_0.9fr]">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >

            {/* BADGE */}
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand pulse-glow" />
              Cinematic 3D Studio
            </div>

            {/* TITLE */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold leading-[0.88]">
              Guiding Your Vision Into{" "}
              <span className="text-gradient">
                Extraordinary
              </span>{" "}
              3D Experiences
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-2 max-w-xl text-base sm:text-lg text-muted-foreground">
              We create immersive 3D animation and visual experiences that
              illuminate brands.
            </p>

            {/* BUTTONS */}
            <div className="mt-3 flex flex-wrap items-center gap-2">

              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-6 py-3 text-sm font-medium text-white glow-brand transition-transform hover:scale-[1.03]"
              >
                <span className="relative z-10">
                  Explore Projects
                </span>

                <span className="relative z-10">
                  →
                </span>

                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-white/[0.08]"
              >
                Get Started

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </div>

          </motion.div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[320px]">
            <LighthouseScene className="h-full w-full" />
          </div>

        </div>

        {/* SCROLL */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">

          Scroll

          <div className="h-6 w-px bg-gradient-to-b from-pink to-transparent" />

        </div>

      </section>

    {/* COUNTER SECTION */}
     {/* <Section className="py-1 mt-0">

        <div className="mx-auto flex max-w-6xl justify-center rounded-3xl glass border-gradient px-4 py-7">

          <div className="grid w-full grid-cols-1 gap-1 text-center sm:grid-cols-3">

            {[
              { k: "180+", v: "Projects" },
              { k: "12", v: "Awards" },
              { k: "40+", v: "Brands" },
            ].map((s) => (

              <div
                key={s.v}
                className="flex flex-col items-center justify-center"
              >

                <div className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-gradient leading-none">
                  {s.k}
                </div>

                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {s.v}
                </div>

              </div>

            ))}

          </div>

        </div>
      </Section>*/}


<Section className="py-8">
  <div className="mx-auto max-w-7xl">
    <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-black/40 backdrop-blur-xl p-5 lg:p-6">

      {/* Background Glow */}
      <div className="absolute -top-20 left-1/4 h-30 w-30 rounded-full bg-pink-500/20 blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 h-30 w-30 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 relative z-10">

        {[
          {
            k: "180+",
            v: "Projects",
            icon: "🚀",
          },
          {
            k: "12",
            v: "Awards",
            icon: "🏆",
          },
          {
            k: "40+",
            v: "Brands",
            icon: "✨",
          },
        ].map((s) => (
          <div
            key={s.v}
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_40px_rgba(236,72,153,0.2)]"
          >
            <div className="text-3xl mb-4">
              {s.icon}
            </div>

            <div className="text-6xl lg:text-7xl font-bold leading-none bg-gradient-to-r from-pink-500 via-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {s.k}
            </div>

            <div className="mt-3 text-sm uppercase tracking-[0.25em] text-white/60">
              {s.v}
            </div>

            <div className="mt-4 h-[2px] w-0 bg-gradient-to-r from-pink-500 to-violet-500 transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </div>
  </div>
</Section>



      {/* SERVICES */}
      {/*<Section
        className="py-1 mt-0"*/}
        <Section className="-mt-30 pt-0 pb-0"
        eyebrow="What we do"
        title={
          <>
            Our <span className="text-gradient">Services</span>
          </>
        }
        subtitle="A full-stack visual practice — from concept to final render."
      >

        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((s, i) => (

            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass border-gradient p-4 transition-transform hover:-translate-y-1"
            >

              <div className="absolute right-10 top-10 h-32 w-32 rounded-full bg-pink/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative">

                {/* ICON */}
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-brand text-lg text-white transition-transform group-hover:rotate-12">
                  {s.icon}
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-semibold">
                  {s.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="mt-1 text-sm text-muted-foreground">
                  {s.desc}
                </p>

                {/* LEARN MORE */}
                <div className="mt-2 inline-flex items-center gap-1 text-xs text-gradient">

                  Learn more

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </Section>

    </PageShell>
  );
}