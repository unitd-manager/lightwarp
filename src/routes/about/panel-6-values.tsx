import { motion } from "framer-motion";
import { Section } from "../../components/section";

const values = [
  {
    icon: "◐",
    title: "Craft First",
    desc: "We obsess over every frame. Quality isn't a checkbox — it's the baseline we build from.",
  },
  {
    icon: "✦",
    title: "Client-Led Vision",
    desc: "Your story drives everything. We listen deeply and translate your goals into visuals that exceed them.",
  },
  {
    icon: "◉",
    title: "Radical Transparency",
    desc: "Clear timelines, honest pricing, open communication. No surprises — just a smooth creative partnership.",
  },
  {
    icon: "◭",
    title: "Always Evolving",
    desc: "The tools change. The techniques change. We invest relentlessly in staying ahead so your work stays cutting-edge.",
  },
];

export function AboutPanelValues() {
  return (
    <Section
      eyebrow="Our Values"
      title={
        <>
          What We <span className="text-gradient">Stand For</span>
        </>
      }
      subtitle="Behind every render is a set of principles that guide how we work, communicate, and create."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative overflow-hidden rounded-2xl glass border-gradient p-7 transition-transform hover:-translate-y-1"
          >
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-pink/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-xl text-white">
                {v.icon}
              </div>
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
