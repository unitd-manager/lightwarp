import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";
import { LighthouseScene } from "../components/lighthouse-scene";
import { Particles } from "../components/particles";
import { LighthouseBeam, ScanLine } from "../components/lighthouse-beam";
import gif1 from "../assets/images/gif1.gif";
import gif2 from "../assets/images/gif2.gif";
import gif3 from "../assets/images/gif3.gif";
import gif4 from "../assets/images/gif4.gif";
import gif5 from "../assets/images/gif5.gif";
import gif6 from "../assets/images/gif6.gif";
import gif7 from "../assets/images/gif 7.gif";
import gif8 from "../assets/images/gif8.gif";

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
    title: "Shell You Be Mine?",
  label: "Short Film",
    desc: "A creative short film showcasing artistry, mood, and character in motion.",    // ✅ YouTube embed format
    src: "https://www.youtube.com/embed/yinRrmEpfr4",
    highlight: "+28% audience recall",
  },
  {
    title: "Lightwarp Studios Capabilities Reel",
   label: "Studio Project",
    desc:  "An immersive brand visual crafted with detail and atmosphere",

    // ✅ Vimeo embed format
    src: "https://player.vimeo.com/video/1153379831",
  },
  {
    title: "The jab",
    label: "Short Flim ",
    desc: "A short case film highlighting our scene creation, lighting, and atmosphere work in a polished edit.",
    // ✅ Another YouTube embed format
    src: "https://www.youtube.com/embed/4d27i10x2wI?t=3s",
  },
  {
    title: "Cyberia 2084 - Blender EEVEE 3D Animated Short Film",
    label: "Animation",
    desc: "A character-centric demo reel showcasing emotion, gesture, and performance animation.",
    // ✅ Your new YouTube embed format
    src: "https://www.youtube.com/embed/pTmzrHqdS_4",
  },
];

const creativeGifs = [
  gif8,
  gif2,
  gif3,
  gif4,
  gif5,
  gif6,
  gif7,
  gif1,
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

           {/*} <div className="mt-14 grid max-w-md grid-cols-3 gap-6">
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
            </div>*/}
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
                {/*<div className="mt-6 inline-flex items-center gap-1.5 text-xs text-gradient">
                  Learn more <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>*/}
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
      <Section eyebrow="Partners & Clients" title={<>Brands we've <span className="text-gradient">illuminated</span></>}>
        <div className="relative overflow-hidden py-4">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
          <div className="marquee-track flex gap-16 whitespace-nowrap">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-3 font-display text-2xl font-semibold tracking-[0.15em] text-white/40 transition-all duration-300 hover:text-white hover:[text-shadow:0_0_30px_rgba(255,77,205,0.6)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-brand" />
                {p}
              </div>
            ))}
          </div>
        </div>
      </Section>
{/* TESTIMONIALS */}
<Section
  eyebrow="Testimonials"
  title={<>Voices of <span className="text-gradient">Trust</span></>}
  subtitle="What our clients say about working with us."
>
  <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {[
      {
        name: "Sophia Patel",
        role: "Marketing Manager",
        quote:
          "Working with this studio was seamless. The visuals exceeded expectations and boosted our campaign.",
        img: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Rahul Verma",
        role: "Product Lead",
        quote:
          "Their creativity and professionalism stood out. The 3D animation helped us connect with our audience.",
        img: "https://randomuser.me/api/portraits/men/32.jpg",
      },
      {
        name: "Emily Johnson",
        role: "Creative Director",
        quote:
          "A fantastic team that truly understands storytelling. The final output was polished and impactful.",
        img: "https://randomuser.me/api/portraits/women/68.jpg",
      },
    ].map((t, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.55, delay: i * 0.06 }}
        className="rounded-2xl bg-white/[0.05] border border-white/10 p-6 shadow-lg hover:-translate-y-1 transition-transform"
      >
        <div className="flex items-center gap-4 mb-4">
          <img
            src={t.img}
            alt={t.name}
            className="w-12 h-12 rounded-full object-cover border border-gradient"
          />
          <div>
            <div className="font-semibold text-gradient">{t.name}</div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              {t.role}
            </div>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">“{t.quote}”</p>
      </motion.div>
    ))}
  </div>
</Section>


{/* INFINITE FRAMES SECTION */}
<Section
  eyebrow="Creative Showcase"
  title={
    <>
      Infinite <span className="text-gradient">Frames of Creativity</span>
    </>
  }
  subtitle="A curated collection of motion, imagination, and immersive visual storytelling."
>
  <div className="space-y-6">

    {/* ROW 1 */}
    <div className="grid gap-6 md:grid-cols-3">
      {creativeGifs.slice(0, 3).map((gif, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <img
            src={gif}
            alt={`gif-${index}`}
            className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>

    {/* ROW 2 */}
    <div className="grid gap-6 md:grid-cols-2">
      {creativeGifs.slice(3, 5).map((gif, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <img
            src={gif}
            alt={`gif-${index}`}
            className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      ))}
    </div>

    {/* ROW 3 */}
    <div className="grid gap-6 md:grid-cols-3">
      {creativeGifs.slice(5, 8).map((gif, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
        >
          <img
            src={gif}
            alt={`gif-${index}`}
            className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
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
