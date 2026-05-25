import { motion } from "framer-motion";
import { Section } from "../../components/section";

const awards = [
  {
    year: "2026",
    title: "Short Shorts Festival",
    subtitle: "Official Selection",
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/shortshortslaurel.webp",
  },
  {
    year: "2025",
    title: "AUTS Winner",
    subtitle: "Best Creative Experience",
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/AUTS_2025_WinnerLaurels13.png",
  },
];

export function HomePanelAwards() {
  return (
    <Section
      eyebrow="Awards & Recognition"
      title={<>Recognition Through <span className="text-gradient">Creative Excellence</span></>}
      subtitle="A collection of international recognitions, festival selections, and creative achievements earned through cinematic storytelling and immersive visual experiences."
    >
      <div className="relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,128,0.10),transparent_45%)] blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl"
        >
          <div className="absolute -top-24 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-pink/20 blur-3xl" />
          <div className="absolute inset-0 opacity-10">
            <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-pink/20 bg-pink/10 px-5 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-pink pulse-glow" />
              <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">International Recognition</span>
            </div>

            <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h3 className="text-4xl sm:text-5xl xl:text-6xl font-semibold leading-tight">
                  Award Winning<br />
                  <span className="text-gradient">Creative Studio</span>
                </h3>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                  Our projects continue to earn recognition across international film festivals,
                  animation showcases, and realtime visual production platforms.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: "12+", label: "Awards" },
                  { value: "180+", label: "Projects" },
                  { value: "40+", label: "Brands" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-5 text-center backdrop-blur-xl">
                    <div className="text-3xl font-semibold text-gradient">{item.value}</div>
                    <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {awards.map((award, i) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-1 hover:border-pink/20"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-transparent to-blue/10" />
              </div>

              <div className="relative flex items-center justify-between">
                <div className="inline-flex rounded-full border border-white/10 bg-black/20 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                  {award.year}
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-brand text-white glow-brand">✦</div>
              </div>

              <div className="relative mt-10 flex min-h-[280px] items-center justify-center rounded-[28px] border border-white/10 bg-black/20 p-10 backdrop-blur-xl">
                <img src={award.image} alt={award.title} className="max-h-48 object-contain transition-transform duration-700 group-hover:scale-105" />
              </div>

              <div className="relative mt-8">
                <h4 className="text-3xl font-semibold">{award.title}</h4>
                <p className="mt-3 text-base text-muted-foreground">{award.subtitle}</p>
                <div className="mt-8 h-px w-full bg-gradient-to-r from-pink via-violet to-blue opacity-40" />
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-gradient-brand" />
                    Global Recognition
                  </div>
                  <span className="text-sm text-white/70">Creative Excellence</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
