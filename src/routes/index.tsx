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

const partners = ["NOVA", "AURORA", "PRISM", "ORBITAL", "HELIOS", "VANTA", "ECHO", "LUMEN", "STRATA", "KAIROS"];

const workVideos = [
  {
    title: "Featured Project Reel",
    label: "Studio Project",
    desc: "A flagship project video created by our team to showcase client storytelling, motion design, and polished visual execution.",
    // ✅ YouTube embed format
    src: "https://www.youtube.com/embed/yinRrmEpfr4",
    highlight: "+28% audience recall",
  },
  {
    title: "Product Motion Reel",
    label: "Product Visuals",
    desc: "A product-focused video that shows material detail, animation, and a cohesive branded look.",
    // ✅ Vimeo embed format
    src: "https://player.vimeo.com/video/1153379831",
  },
  {
    title: "Immersive Scene Breakdown",
    label: "Environment",
    desc: "A short case film highlighting our scene creation, lighting, and atmosphere work in a polished edit.",
    // ✅ Another YouTube embed format
    src: "https://www.youtube.com/embed/a8RHqN93qfo",
  },
  {
    title: "Character Spotlight",
    label: "Animation",
    desc: "A character-centric demo reel showcasing emotion, gesture, and performance animation.",
    // ✅ Your new YouTube embed format
    src: "https://www.youtube.com/embed/pTmzrHqdS_4",
  },
];



 

export default function Home() {
  return (
    <PageShell>
      {/* HERO */}
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
              Cinematic 3D Studio
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-semibold leading-[0.95]">
              Guiding Your Vision Into{" "}
              <span className="text-gradient">Extraordinary</span> 3D Experiences
            </h1>
            <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
              We create immersive 3D animation and visual experiences that
              illuminate brands.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-medium text-white glow-brand transition-transform hover:scale-[1.03]"
              >
                <span className="relative z-10">Explore Projects</span>
                <span className="relative z-10">→</span>
                <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-medium backdrop-blur transition-colors hover:bg-white/[0.08]"
              >
                Get Started
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <div className="mt-14 grid max-w-md grid-cols-3 gap-6">
              {[
                { k: "180+", v: "Projects" },
                { k: "12", v: "Awards" },
                { k: "40+", v: "Brands" },
              ].map((s) => (
                <div key={s.v}>
                  <div className="text-2xl font-display font-semibold text-gradient">{s.k}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[560px]">
            <LighthouseScene className="h-full w-full" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Scroll
          <div className="h-10 w-px bg-gradient-to-b from-pink to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <Section
        eyebrow="What we do"
        title={<>Our <span className="text-gradient">Services</span></>}
        subtitle="A full-stack visual practice — from concept to final render. Every pixel calibrated, every frame intentional."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl glass border-gradient p-6 transition-transform hover:-translate-y-1"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-xl text-white transition-transform group-hover:rotate-12">
                  {s.icon}
                </div>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs text-gradient">
                  Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* OUR WORK */}
     {/* OUR WORK */}
<Section
  eyebrow="Our Work"
  title={<>Studio <span className="text-gradient">Videos</span></>}
  subtitle="Every card is a video produced by our team — no placeholder case study card, just real work in motion."
>
  <div className="grid gap-6 sm:grid-cols-2">
    {workVideos.map((video) => (
      <article
        key={video.title}
        className="group relative overflow-hidden rounded-3xl backdrop-blur-xl bg-white/[0.03] border border-gradient p-2 hover:shadow-[0_0_40px_rgba(255,77,205,0.4)] transition-transform hover:-translate-y-1"
      >
        {/* YouTube / Vimeo embed */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden">
          <iframe
            src={video.src}
            title={video.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="p-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            {video.label}
          </div>
          <h4 className="text-xl font-semibold text-gradient">{video.title}</h4>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{video.desc}</p>
          {video.highlight && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-brand" />
              {video.highlight}
            </div>
          )}
        </div>
      </article>
    ))}
  </div>

  <div className="mt-12 flex justify-center">
    <Link
      to="/projects"
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand transition-transform hover:scale-[1.03]"
    >
      <span className="relative z-10">See More Videos</span>
      <span className="relative z-10">→</span>
      <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
    </Link>
  </div>
</Section>


      {/* PARTNERS */}
      {/* PARTNERS */}
<Section
  eyebrow="Partners & Clients"
  title={
    <>
      Brands We've{" "}
      <span className="text-gradient">
        Illuminated
      </span>
    </>
  }
  subtitle="Collaborating with visionary studios, creative agencies, and global brands to craft immersive visual experiences."
>
  <div className="relative overflow-hidden py-6">

    {/* Fade Sides */}
    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />

    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

    {/* Marquee */}
    <div className="marquee-track flex items-center gap-12 whitespace-nowrap">

      {[
        {
          image:
            "https://lightwarp3d.com/wp-content/uploads/2026/01/StrayerPicturesLogoWhiteTransparentDROPSHADOW2-scaled.png",
          name: "Strayer Pictures",
        },
        {
          image:
            "https://lightwarp3d.com/wp-content/uploads/2026/01/TAM-Stacked-AllWhite.png",
          name: "TAM",
        },
        {
          image:
            "https://lightwarp3d.com/wp-content/uploads/2026/01/StrayerPicturesLogoWhiteTransparentDROPSHADOW2-scaled.png",
          name: "Strayer Pictures",
        },
        {
          image:
            "https://lightwarp3d.com/wp-content/uploads/2026/01/TAM-Stacked-AllWhite.png",
          name: "TAM",
        },
      ].map((partner, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -4 }}
          className="group relative flex h-[140px] min-w-[260px] shrink-0 items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] px-10 backdrop-blur-2xl transition-all duration-500 hover:border-pink/20"
        >

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-transparent to-blue/10" />
          </div>

          {/* Logo */}
          <img
            src={partner.image}
            alt={partner.name}
            className="relative max-h-20 w-auto object-contain opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
          />

          {/* Bottom Glow */}
          <div className="absolute bottom-0 left-1/2 h-20 w-32 -translate-x-1/2 rounded-full bg-pink/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </motion.div>
      ))}
    </div>
  </div>
</Section>
{/* AWARDS SECTION */}
{/* PREMIUM AWARDS SECTION */}
<Section
  eyebrow="Awards & Recognition"
  title={
    <>
      Recognition Through{" "}
      <span className="text-gradient">
        Creative Excellence
      </span>
    </>
  }
  subtitle="A collection of international recognitions, festival selections, and creative achievements earned through cinematic storytelling and immersive visual experiences."
>
  <div className="relative">

    {/* Background Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,128,0.10),transparent_45%)] blur-3xl" />

    {/* TOP FEATURE */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
    >

      {/* Glow */}
      <div className="absolute -top-24 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-pink/20 blur-3xl" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative">

        {/* TOP BADGE */}
        <div className="inline-flex items-center gap-2 rounded-full border border-pink/20 bg-pink/10 px-5 py-2 backdrop-blur-xl">
          <span className="h-2 w-2 rounded-full bg-pink pulse-glow" />

          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            International Recognition
          </span>
        </div>

        {/* HEADING */}
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div>
            <h3 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight">
              Award Winning
              <br />
              <span className="text-gradient">
                Creative Studio
              </span>
            </h3>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Our projects continue to earn recognition across
              international film festivals, animation showcases,
              and realtime visual production platforms.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">

            {[
              {
                value: "12+",
                label: "Awards"
              },
              {
                value: "180+",
                label: "Projects"
              },
              {
                value: "40+",
                label: "Brands"
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center backdrop-blur-xl"
              >
                <div className="text-3xl font-semibold text-gradient">
                  {item.value}
                </div>

                <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>

    {/* AWARDS GRID */}
    <div className="mt-10 grid gap-8 lg:grid-cols-2">

      {[
        {
          year: "2026",
          title: "Short Shorts Festival",
          subtitle: "Official Selection",
          image:
            "https://lightwarp3d.com/wp-content/uploads/2026/01/shortshortslaurel.webp",
        },
        {
          year: "2025",
          title: "AUTS Winner",
          subtitle: "Best Creative Experience",
          image:
            "https://lightwarp3d.com/wp-content/uploads/2026/01/AUTS_2025_WinnerLaurels13.png",
        },
      ].map((award, i) => (
        <motion.div
          key={award.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.1 }}
          className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-pink/20"
        >

          {/* Hover Glow */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-transparent to-blue/10" />
          </div>

          {/* Top */}
          <div className="relative flex items-center justify-between">

            <div className="inline-flex rounded-full border border-white/10 bg-black/20 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              {award.year}
            </div>

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-white glow-brand">
              ✦
            </div>
          </div>

          {/* Image */}
          <div className="relative mt-10 flex min-h-[280px] items-center justify-center rounded-[28px] border border-white/10 bg-black/20 p-10 backdrop-blur-xl">

            <img
              src={award.image}
              alt={award.title}
              className="max-h-48 object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="relative mt-8">

            <h4 className="text-3xl font-semibold">
              {award.title}
            </h4>

            <p className="mt-3 text-base text-muted-foreground">
              {award.subtitle}
            </p>

            {/* Divider */}
            <div className="mt-8 h-px w-full bg-gradient-to-r from-pink via-violet to-blue opacity-40" />

            {/* Footer */}
            <div className="mt-6 flex items-center justify-between">

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-gradient-brand" />
                Global Recognition
              </div>

              <span className="text-sm text-white/70">
                Creative Excellence
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</Section>
      {/* CTA */}
      <Section className="relative">
        <div className="relative overflow-hidden rounded-3xl glass border-gradient p-10 sm:p-16 text-center">
          <LighthouseBeam />
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-60 w-[120%] rounded-[100%] bg-pink/20 blur-3xl" />
          <div className="relative">
            <div className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Let's build</div>
            <h2 className="mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
              We Are Excited <br />
              To <span className="text-gradient">Work With You</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
              Tell us about your project. We'll send a beam back within a day.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand pulse-glow transition-transform hover:scale-105"
            >
              Start a Project →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
