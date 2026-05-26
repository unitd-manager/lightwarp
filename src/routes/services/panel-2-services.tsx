import { motion } from "framer-motion";
import { Section } from "../../components/section";
import { Film, Package, Lightbulb, Settings2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const fullServices: {
  title: string;
  tagline: string;
  desc: string;
  bullets: string[];
  Icon: LucideIcon;
}[] = [
  {
    Icon: Film,
    title: "3D Commercials & Cinematics",
    tagline: "Creative, Impactful 3D animation. Built to engage, convert, and perform.",
    desc: "We deliver fully animated commercial campaigns spanning 30-second to 2-minute formats. Every project is crafted with pristine artistry, design, and rendering quality to boost brand engagement and drive measurable results.",
    bullets: [
      "30-second to 2-minute commercial formats",
      "High-quality animated campaign production",
      "Brand engagement and conversion-focused storytelling",
      "Broadcast, digital, and social-ready delivery",
    ],
  },
  {
    Icon: Package,
    title: "3D Asset Services",
    tagline: "Production-ready 3D assets built for games, film, and real-time worlds.",
    desc: "We produce stunning, optimized 3D assets for games, film, and virtual production pipelines. From environment builds to hero assets, our work is production-ready for both real-time and cinematic applications.",
    bullets: [
      "Environment builds and hero asset creation",
      "Look development, modeling, and texturing",
      "Optimized for real-time (Unreal/Unity) and cinematic render",
      "Full pipeline integration and hand-off support",
    ],
  },
  {
    Icon: Lightbulb,
    title: "Original IP & Content",
    tagline: "Iconic characters and immersive stories that audiences remember.",
    desc: "We create original characters, rich backstories, and full intellectual property development. Our team builds iconic character designs, immersive storylines, and engaging narratives that work across animation, games, comics, and merchandise.",
    bullets: [
      "Original character design and world-building",
      "Story development and narrative scripting",
      "IP adaptable across animation, games, and comics",
      "Merchandise and brand extension ready",
    ],
  },
  {
    Icon: Settings2,
    title: "Creative & Technical Consulting",
    tagline: "From concept to scale — real-time production done right.",
    desc: "We offer expert guidance on real-time production, pipeline development, and workflow optimization. Our team specializes in Unreal Engine rendering workflows, helping studios plan and execute from concept through delivery at scale.",
    bullets: [
      "Real-time pipeline architecture and setup",
      "Unreal Engine workflow optimization",
      "Project planning from concept to delivery",
      "Multi-disciplinary team integration support",
    ],
  },
];

export function ServicesPanelServices() {
  return (
    <Section
      eyebrow="Services"
      title={<>Lightwarp Has <span className="text-gradient">You Covered</span></>}
      subtitle="Our cutting-edge pipeline is built with production scalability, real-time rendering, and multi-disciplinary artists in mind — leveraging OpenUSD, ACES, Blender, Unreal Engine, and cloud workflows."
    >
      <div className="space-y-6 max-w-6xl mx-auto">
        {fullServices.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:border-pink/30 transition-all"
          >
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-pink/15 to-violet/15 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative grid gap-8 lg:grid-cols-[auto_1fr_1fr]">
              {/* Icon */}
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg">
                <s.Icon size={28} strokeWidth={1.5} />
              </div>

              {/* Title + description */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-pink mb-2">{s.tagline}</p>
                <h3 className="text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>

              {/* Bullet points */}
              <ul className="space-y-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
