import { motion } from "framer-motion";
import { Section } from "../../components/section";

const tools = [
  { name: "Blender", category: "3D & Animation" },
  { name: "Unreal Engine", category: "Real-time Render" },
  { name: "Cinema 4D", category: "Motion Design" },
  { name: "Houdini", category: "VFX & Simulation" },
  { name: "After Effects", category: "Motion & Comp" },
  { name: "DaVinci Resolve", category: "Color & Grading" },
  { name: "Substance 3D", category: "Texturing" },
  { name: "ZBrush", category: "Sculpting" },
  { name: "Nuke", category: "VFX Compositing" },
  { name: "Marvelous Designer", category: "Cloth Simulation" },
  { name: "Midjourney", category: "Concept Dev" },
  { name: "Figma", category: "Design System" },
];

export function ServicesPanelTools() {
  return (
    <Section
      eyebrow="Toolkit"
      title={
        <>
          The Stack Behind <span className="text-gradient">Every Frame</span>
        </>
      }
      subtitle="Industry-grade software, wielded by artists who know it cold."
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 text-center hover:border-pink/40 hover:-translate-y-1 transition-all"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-pink/5 to-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <p className="font-semibold text-foreground">{tool.name}</p>
              <p className="mt-1 text-xs text-muted-foreground">{tool.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
