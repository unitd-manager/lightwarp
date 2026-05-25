import { motion } from "framer-motion";
import { Section } from "../../components/section";

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

export function ServicesPanelServices() {
  return (
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
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-violet/40 hover:-translate-y-2 transition-all"
          >
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-pink/20 to-violet/20 blur-3xl opacity-0 group-hover:opacity-100 transition" />

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-brand text-2xl text-white shadow-lg">
              {s.icon}
            </div>

            <h3 className="text-2xl font-semibold">{s.title}</h3>

            <p className="mt-3 text-base leading-7 text-muted-foreground">{s.desc}</p>

            <div className="mt-8 text-sm font-medium text-orange-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition">
              Explore Service →
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
