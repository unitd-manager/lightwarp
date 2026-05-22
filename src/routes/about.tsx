import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";
import { LighthouseBeam, ScanLine } from "../components/lighthouse-beam";
import { Link } from "react-router-dom";
import images from "../assets/images/image 5.png";
import images1 from "../assets/images/OctopusStill.png";
import { LighthouseScene } from "../components/lighthouse-scene";
import { Particles } from "../components/particles";

const timeline = [
  { year: "2018", title: "First Beam", desc: "Two friends, one render farm in a garage." },
  { year: "2020", title: "Studio Founded", desc: "Lightwarp opens its San Francisco doors." },
  { year: "2022", title: "Lisbon Annex", desc: "European studio expands the practice across timezones." },
  { year: "2024", title: "Realtime Lab", desc: "Unreal-powered virtual production division." },
  { year: "2026", title: "Today", desc: "180+ shipped projects. 12 awards. Still illuminating." },
];

const team = [
  { name: "Maya Cole", role: "Creative Director", initials: "MC" },
  { name: "Ren Okafor", role: "Head of CGI", initials: "RO" },
  { name: "Saoirse Lin", role: "VFX Supervisor", initials: "SL" },
  { name: "Adrian Vega", role: "Animation Lead", initials: "AV" },
  { name: "Iris Tan", role: "Art Director", initials: "IT" },
  { name: "Kofi Mensah", role: "Tech Director", initials: "KM" },
];

export default function About() {
  return (
    <PageShell>
{/* HERO */}
      {/* ABOUT HERO SECTION */}
{/* <section className="relative overflow-hidden pt-36 pb-28"> */}
     <section className="relative -mt-28 min-h-screen flex items-center overflow-hidden">
  {/* BACKGROUND GLOW */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.18),transparent_35%)]" />

  <Particles count={85} />
  <ScanLine />

  {/* LIGHTHOUSE BEAM */}
  <div className="absolute inset-0 opacity-70">
    <LighthouseBeam intensity="strong" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* TOP LABEL */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="mx-auto mb-10 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2 backdrop-blur-xl"
    >
      <span className="h-2 w-2 rounded-full bg-gradient-brand pulse-glow" />

      <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        About Lightwarp
      </span>
    </motion.div>

    <div className="grid items-center gap-16 lg:grid-cols-[1fr_0.95fr]">

      {/* LEFT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >

        <h1 className="text-5xl sm:text-6xl xl:text-8xl font-semibold leading-[0.92]">
          We Don't Just
          <br />
          Create Visuals —
          <br />
          <span className="text-gradient">
            We Craft Experiences
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Lightwarp is a cinematic 3D studio blending creativity,
          storytelling, and technology to build immersive digital
          experiences for visionary brands around the world.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            to="/projects"
            className="group relative overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand transition-all hover:scale-[1.03]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Our Work
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>

            <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
          </Link>

          <Link
            to="/contact"
            className="rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-medium backdrop-blur-xl transition-all hover:bg-white/[0.08]"
          >
            Get In Touch
          </Link>
        </div>

        {/* VALUES */}
        <div className="mt-16 grid gap-4 sm:grid-cols-3">

          {[
            {
              title: "Creative",
              desc: "Driven by cinematic storytelling"
            },
            {
              title: "Innovative",
              desc: "Powered by modern realtime tech"
            },
            {
              title: "Global",
              desc: "Collaborating across industries"
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* RIGHT VISUAL */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >

        {/* OUTER GLOW */}
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-pink/20 via-violet/10 to-blue/20 blur-3xl" />

        {/* MAIN CARD */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">

          {/* GRID OVERLAY */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* LIGHTHOUSE SCENE */}
          <div className="relative h-[640px]">

            <LighthouseScene className="h-full w-full scale-110" />

            {/* LARGE GLOW */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/10 blur-3xl animate-pulse" />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          {/* FLOATING STORY CARD */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute left-6 top-6 w-[250px] rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Since 2018
            </div>

            <h3 className="mt-3 text-xl font-semibold">
              Built From Passion
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Started with a vision to transform storytelling through
              cinematic digital experiences.
            </p>
          </motion.div>

          {/* FLOATING STATS */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute bottom-6 right-6 rounded-3xl border border-white/10 bg-black/40 px-6 py-5 backdrop-blur-xl"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Creative Journey
            </div>

            <div className="mt-2 text-3xl font-semibold text-gradient">
              180+ Projects
            </div>
          </motion.div>

          {/* FLOATING BADGE */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
            className="absolute right-10 top-1/2 rounded-full border border-pink/20 bg-pink/10 px-5 py-3 backdrop-blur-xl"
          >
            <span className="text-sm font-medium text-white">
              Creative Lighthouse
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
      <Section
        eyebrow="About"
        title={<>Our <span className="text-gradient">Story</span></>}
        subtitle="A studio born on the coast, obsessed with light. We treat every frame like a lighthouse: a focused beam guiding attention through darkness."
      >
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-pink via-violet to-blue md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-brand pulse-glow" />
                <div className={`${i % 2 ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="text-sm font-display font-semibold text-gradient">{t.year}</div>
                  <h3 className="mt-1 text-2xl font-semibold">{t.title}</h3>
                </div>
                <div className={`${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"} mt-2 md:mt-0`}>
                  <p className="text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

<Section
  eyebrow="About"
  title={
    <>
      Our <span className="text-gradient">Story</span>
    </>
  }
>
  <div className="w-full lg:w-[70%]">
    <div
      className="
        relative overflow-hidden rounded-[32px]
        bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90
        backdrop-blur-xl
        border border-white/10
        p-8 md:p-12
        shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        transition-all duration-500
        hover:-translate-y-1
        hover:shadow-[0_40px_100px_rgba(0,0,0,0.6)]
      "
    >
      {/* Glow Effects */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Glass Shine */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%)]" />

      {/* Crab Image */}
      <img
        src={images}
        alt="Mascot"
        className="
          absolute 
          right-[-20px] 
          top-[10px]
          w-[300px] md:w-[280px]
          opacity-90
          pointer-events-none
          select-none
        "
      />


      <img
        src={images1}
        alt="Mascot"
        className="
          absolute 
          right-[0px] 
          bottom-[20px]
          w-[240px] md:w-[240px]
          opacity-90
          pointer-events-none
          select-none
        "
      />


      <div className="relative z-10 max-w-[78%]">
        <p className="text-lg md:text-xl leading-relaxed text-white/90">
          A studio born on the coast, obsessed with light. We treat every frame
          like a lighthouse: a focused beam guiding attention through darkness.
        </p>

        <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-300">
          Started by an alum of Texas A&M University, Lightwarp 3D Studio was
          built on a vision of using real-time rendering with tools like Unreal
          Engine and Blender to create high-quality 3D stories and visuals at
          blazing fast speed.
        </p>

        <p className="mt-5 text-base md:text-lg leading-relaxed text-slate-300">
          With our proprietary real-time pipeline and workflows, we create,
          iterate, and deliver results fast with cinematic quality. Backed by
          industry experience from major animation studios and a talented
          associate team, we combine creativity, technology, and efficiency to
          deliver exceptional results for every client.
        </p>
      </div>
    </div>
  </div>
</Section>
  

      <Section
        eyebrow="The Crew"
        title={<>Meet Our <span className="text-gradient">Team</span></>}
        subtitle="Lightkeepers. Artists. Engineers. The hands behind every render."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl glass border-gradient p-6 text-center transition-transform hover:-translate-y-1"
            >
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-pink/30 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-brand text-3xl font-display font-semibold text-white glow-brand">
                {m.initials}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{m.name}</h3>
              <p className="text-sm text-muted-foreground">{m.role}</p>
              <div className="mt-5 flex justify-center gap-3">
                {["IG", "X", "Be"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] text-muted-foreground transition-all hover:bg-gradient-brand hover:text-white hover:glow-brand"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="relative overflow-hidden rounded-3xl glass border-gradient p-12 sm:p-16 text-center">
          <LighthouseBeam intensity="strong" />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-semibold">
              Let's <span className="text-gradient">Work Together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Got a story worth illuminating? Send it our way.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand pulse-glow">
              Get in Touch →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}   