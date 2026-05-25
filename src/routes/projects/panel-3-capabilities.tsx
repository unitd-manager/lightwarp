import { motion } from "framer-motion";
import { Section } from "../../components/section";
import image1 from "../../assets/images/image 1.png";
import image2 from "../../assets/images/image 2.png";
import image3 from "../../assets/images/image3.png";
import image4 from "../../assets/images/image 4.png";

const capabilities = [
  {
    title: "CGI Production",
    description: "Photorealistic CGI crafted for commercials, films, and digital experiences.",
    image: image1,
  },
  {
    title: "VFX & Compositing",
    description: "Seamless integration of visual effects with cinematic storytelling.",
    image: image2,
  },
  {
    title: "Product Rendering",
    description: "High-end product visualization with studio-quality lighting and materials.",
    image: image3,
  },
  {
    title: "Character Animation",
    description: "Expressive characters brought to life through detailed animation workflows.",
    image: image4,
  },
];

export function ProjectsPanelCapabilities() {
  return (
    <Section
      eyebrow="Capabilities"
      title={<>Our <span className="text-gradient">Capabilities</span></>}
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
            <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <div className="text-7xl lg:text-8xl font-black leading-none text-gradient opacity-90">
                0{index + 1}
              </div>
              <h3 className="mt-3 text-4xl font-bold">{item.title}</h3>
              <p className="mt-4 max-w-2xl text-xl text-muted-foreground">{item.description}</p>
            </div>

            <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
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
  );
}
