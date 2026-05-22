import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";
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
