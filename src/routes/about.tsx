import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";
import { LighthouseBeam } from "../components/lighthouse-beam";

const timeline = [
  { year: "2018", title: "First Beam", desc: "Two friends, one render farm in a garage." },
  { year: "2020", title: "Studio Founded", desc: "Lightwarp opens its San Francisco doors." },
  { year: "2022", title: "Lisbon Annex", desc: "European studio expands the practice across timezones." },
  { year: "2024", title: "Realtime Lab", desc: "Unreal-powered virtual production division." },
  { year: "2026", title: "Today", desc: "180+ shipped projects. 12 awards. Still illuminating." },
];

const team = [
  { name: "Maya Cole", role: "Creative Director", initials: "MC" },
  { name: "Ren Okafor", role: "Head of CGI", initials: "RO" },
  { name: "Saoirse Lin", role: "VFX Supervisor", initials: "SL" },
  { name: "Adrian Vega", role: "Animation Lead", initials: "AV" },
  { name: "Iris Tan", role: "Art Director", initials: "IT" },
  { name: "Kofi Mensah", role: "Tech Director", initials: "KM" },
];

export default function About() {
  return (
    <PageShell>
      <Section
        eyebrow="About"
        title={<>Our <span className="text-gradient">Story</span></>}
        subtitle="A studio born on the coast, obsessed with light. We treat every frame like a lighthouse: a focused beam guiding attention through darkness."
      >
        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-pink via-violet to-blue md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-12">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="relative md:grid md:grid-cols-2 md:gap-12"
              >
                <div className="absolute left-3 md:left-1/2 -translate-x-1/2 h-3 w-3 rounded-full bg-gradient-brand pulse-glow" />
                <div className={`${i % 2 ? "md:order-2 md:pl-12" : "md:pr-12 md:text-right"}`}>
                  <div className="text-sm font-display font-semibold text-gradient">{t.year}</div>
                  <h3 className="mt-1 text-2xl font-semibold">{t.title}</h3>
                </div>
                <div className={`${i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"} mt-2 md:mt-0`}>
                  <p className="text-muted-foreground">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

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

      <Section>
        <div className="relative overflow-hidden rounded-3xl glass border-gradient p-12 sm:p-16 text-center">
          <LighthouseBeam intensity="strong" />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl font-semibold">
              Let's <span className="text-gradient">Work Together</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Got a story worth illuminating? Send it our way.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand pulse-glow"
            >
              Get in Touch →
            </Link>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
