import { motion } from "framer-motion";
import { Section } from "../../components/section";

const process = [
  { step: "01", title: "Discovery", desc: "We listen, audit, and translate brand vision into a creative brief." },
  { step: "02", title: "Strategy", desc: "Storyboards, references, and a production blueprint." },
  { step: "03", title: "Design", desc: "Style frames, look-dev, and concept rounds." },
  { step: "04", title: "Production", desc: "Modeling, animation, lighting, and render orchestration." },
  { step: "05", title: "Delivery", desc: "Final cut, master files, and post-launch support." },
];

export function ServicesPanelProcess() {
  return (
    <Section
      eyebrow="Process"
      title={<>How We <span className="text-gradient">Deliver</span></>}
      subtitle="A studio process tuned for speed and craft."
    >
      <div className="relative">
        <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-pink via-violet to-blue md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10">
          {process.map((p, i) => (
            <motion.div
              key={p.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative grid grid-cols-[48px_1fr] md:grid-cols-2 gap-8 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className={i % 2 ? "md:pl-12" : "md:pr-12 md:text-right"}>
                <div className="absolute left-6 md:left-1/2 h-3 w-3 rounded-full bg-gradient-brand pulse-glow" />
                <div className="hidden md:block">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phase {p.step}</div>
                  <h3 className="mt-1 text-2xl font-semibold">{p.title}</h3>
                </div>
              </div>

              <div className={`glass border-gradient rounded-2xl p-6 ${i % 2 ? "" : "md:pl-12"}`}>
                <div className="md:hidden text-xs uppercase text-muted-foreground">Phase {p.step}</div>
                <h4 className="md:hidden mt-1 text-xl font-semibold">{p.title}</h4>
                <p className="text-sm md:text-base text-muted-foreground">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
