import { motion } from "framer-motion";
import { Section } from "../../components/section";

const team = [
  { name: "Maya Cole", role: "Creative Director", initials: "MC" },
  { name: "Ren Okafor", role: "Head of CGI", initials: "RO" },
  { name: "Saoirse Lin", role: "VFX Supervisor", initials: "SL" },
  { name: "Adrian Vega", role: "Animation Lead", initials: "AV" },
  { name: "Iris Tan", role: "Art Director", initials: "IT" },
  { name: "Kofi Mensah", role: "Tech Director", initials: "KM" },
];

export function AboutPanelTeam() {
  return (
    <Section
      eyebrow="The Crew"
      title={<>Meet Our <span className="text-gradient">Team</span></>}
      subtitle="Lightkeepers. Artists. Engineers. The hands behind every render."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl glass border-gradient p-6 text-center transition-transform hover:-translate-y-1"
          >
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-pink/30 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-brand text-3xl font-display font-semibold text-white glow-brand">
              {m.initials}
            </div>
            <h3 className="mt-5 text-xl font-semibold">{m.name}</h3>
            <p className="text-sm text-muted-foreground">{m.role}</p>
            <div className="mt-5 flex justify-center gap-3">
              {["IG", "X", "Be"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] text-muted-foreground transition-all hover:bg-gradient-brand hover:text-white hover:glow-brand"
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
