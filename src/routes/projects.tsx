import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";
import { Link } from "react-router-dom";
import { LighthouseScene } from "../components/lighthouse-scene";
import { Particles } from "../components/particles";
import { LighthouseBeam, ScanLine } from "../components/lighthouse-beam";
import image1 from "../assets/images/image 1.png";
import image2 from "../assets/images/image 2.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image 4.png";
const projects = [
  {
    title: "Lush Victorian Garden Final Render ",
    client: "Nova Timepieces",
    tags: ["CGI", "Product"],
    videoSrc: "https://www.youtube.com/embed/b-qRx-LlB1A", // YouTube
  },
  {
    title: "Stuffed (Summer Industry Course) Remastered CutHelios Sneaker",
    client: "Orbital",
    tags: ["Animation", "VFX"],
    videoSrc: "https://www.youtube.com/embed/bzCrjcqWliU", // YouTube
  },
  {
    title: "Breaking Benjamin - Awaken (Official Music Video)Vanta Headset",
    client: "Vanta Audio",
    tags: ["Product Viz"],
    videoSrc: "https://www.youtube.com/embed/w0GfewGYR3g?t=1s", // YouTube
  },
  {
    title: "Samsung S7 Ad - Blender 3D Animated Commercial Concept",
    client: "Helios Realty",
    tags: ["Arch Viz"],
    videoSrc: "https://www.youtube.com/embed/4Esie0f7HVw", // YouTube
  },
  {
    title: "True To Texas - Let's Bring Productions HomeEcho Companion",
    client: "Echo Labs",
    tags: ["Character"],
    videoSrc: "https://www.youtube.com/embed/bpgrUK9EGjI", // YouTube
  },
  {
    title: "Caught Off Guard - VIZ Vertical Studio Fall 2021",
    client: "Kairos",
    tags: ["CGI", "Motion"],
    videoSrc: "https://www.youtube.com/embed/7iZBroHtizk", // YouTube
  },
];

/*const capabilities = ["CGI", "VFX", "Motion", "Product Rendering", "3D Design", "Character", "Realtime", "Compositing"];*/


const capabilities = [
  {
    title: "CGI Production",
    description:
      "Photorealistic CGI crafted for commercials, films, and digital experiences.",
    image: image1,
  },
  {
    title: "VFX & Compositing",
    description:
      "Seamless integration of visual effects with cinematic storytelling.",
    image: image2,
  },
  {
    title: "Product Rendering",
    description:
      "High-end product visualization with studio-quality lighting and materials.",
    image: image3,
  },
  {
    title: "Character Animation",
    description:
      "Expressive characters brought to life through detailed animation workflows.",
    image: image4,
  },
];

export default function Projects() {
  return (
    <PageShell>
{/* HERO */}
      {/* PROJECTS HERO SECTION */}
     <section className="relative -mt-28 min-h-screen flex items-center overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,128,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.18),transparent_35%)]" />

  <Particles count={90} />
  <ScanLine />

  {/* Lighthouse Beam */}
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
        Selected Projects
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
          Stories Crafted
          <br />
          Through
          <br />
          <span className="text-gradient">
            Light, Motion & Vision
          </span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Explore a collection of cinematic 3D experiences,
          immersive animations, product visualizations, and
          cutting-edge digital productions created for brands,
          startups, and global campaigns.
        </p>

        {/* CTA */}
        <div className="mt-10 flex flex-wrap gap-4">

          <Link
            to="/contact"
            className="group relative overflow-hidden rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand transition-all hover:scale-[1.03]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start A Project
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
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

        {/* STATS */}
        <div className="mt-16 grid max-w-2xl grid-cols-3 gap-6">

          {[
            { value: "180+", label: "Projects" },
            { value: "40+", label: "Brands" },
            { value: "12", label: "Awards" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <div className="text-3xl font-semibold text-gradient">
                {item.value}
              </div>

              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {item.label}
              </div>
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

        {/* Glow */}
        <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-pink/20 via-violet/10 to-blue/20 blur-3xl" />

        {/* Main Visual Card */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl">

          {/* Grid Overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          {/* LIGHTHOUSE VISUAL */}
          <div className="relative h-[640px]">

            <LighthouseScene className="h-full w-full scale-110" />

            {/* Large Beam Glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/10 blur-3xl animate-pulse" />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
          </div>

          {/* Floating Project Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="absolute left-6 top-6 w-[240px] rounded-3xl border border-white/10 bg-black/40 p-5 backdrop-blur-xl"
          >
            <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Featured Work
            </div>

            <h3 className="mt-3 text-xl font-semibold">
              Future Motion Campaign
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              Cinematic CGI & realtime visuals crafted for a next-gen
              technology launch.
            </p>
          </motion.div>

          {/* Bottom Card */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="absolute bottom-6 right-6 rounded-3xl border border-white/10 bg-black/40 px-6 py-5 backdrop-blur-xl"
          >
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Creative Impact
            </div>

            <div className="mt-2 text-3xl font-semibold text-gradient">
              Global Reach
            </div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ repeat: Infinity, duration: 7 }}
            className="absolute right-10 top-1/2 rounded-full border border-pink/20 bg-pink/10 px-5 py-3 backdrop-blur-xl"
          >
            <span className="text-sm font-medium text-white">
              Award Winning Studio
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
    
    <Section
  eyebrow="Selected Work"
  title={<>Featured <span className="text-gradient">Projects</span></>}
  subtitle="A reel of recent collaborations. Hover to feel the frame breathe."
>
  <div className="grid gap-6 md:grid-cols-2">
    {projects.map((p, i) => (
      <motion.article
        key={p.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: i * 0.07 }}
        className="group relative overflow-hidden rounded-3xl glass border-gradient"
      >
        {/* Video Embed */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
          <iframe
            src={p.videoSrc}
            title={p.title}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Project Title Only */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold">{p.title}</h3>
        </div>
      </motion.article>
    ))}
  </div>
</Section>



      {/*<Section
        eyebrow="Capabilities"
        title={<>Our <span className="text-gradient">Capabilities</span></>}
        subtitle="Drag, scroll, explore — every discipline under one beam."
      >
        <div className="relative -mx-6 overflow-x-auto px-6 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 pb-4">
           {capabilities.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative h-64 w-72 shrink-0 overflow-hidden rounded-2xl glass border-gradient p-6"
              >
                <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-gradient-brand opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-50" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="text-5xl font-display font-semibold text-gradient">0{i + 1}</div>
                  <div>
                    <h4 className="text-2xl font-semibold">{c}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Engineered, art-directed, and rendered in-house.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>*/}

<Section
  eyebrow="Capabilities"
  title={
    <>
      Our <span className="text-gradient">Capabilities</span>
    </>
  }
  subtitle="Every frame crafted with precision and cinematic quality."
>
  <div className="space-y-10 w-full">
    {capabilities.map((item, index) => (
      <motion.div
        key={item.title}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid items-center gap-8 lg:grid-cols-2"
      >
        {/* Text */}
        <div
          className={`${
            index % 2 === 1 ? "lg:order-2" : ""
          }`}
        >
        
          <div className="text-7xl lg:text-8xl font-black leading-none text-gradient opacity-90">
            0{index + 1}
          </div>

          <h3 className="mt-3 text-4xl font-bold">
            {item.title}
          </h3>

          <p className="mt-4 max-w-2xl text-xl text-muted-foreground">
            {item.description}
          </p>

          {/*<button className="mt-6 rounded-full bg-gradient-brand px-6 py-3 text-white">
            Explore More
          </button>*/}
        </div>

        {/* Image */}
        <div
          className={`${
            index % 2 === 1 ? "lg:order-1" : ""
          }`}
        >
          <div className="group overflow-hidden rounded-3xl border border-white/10">
            <img
              src={item.image}
              alt={item.title}
              className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</Section>
</PageShell>
  );
}
