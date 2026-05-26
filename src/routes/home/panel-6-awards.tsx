import { motion } from "framer-motion";
import { Section } from "../../components/section";

const awards = [
  {
    year: "2025",
    title: "AUTS Winner",
    subtitle: "Best Creative Experience",
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/AUTS_2025_WinnerLaurels13.png",
  },
  {
    year: "2026",
    title: "Short Shorts Film Festival",
    subtitle: "Official Selection",
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/shortshortslaurel.webp",
  },
  {
    year: "2024",
    title: "Digital World Awards",
    subtitle: "DWA — Outstanding Animation",
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/shortshortslaurel.webp",
  },
  {
    year: "2023",
    title: "WDAS Recognition",
    subtitle: "Walt Disney Animation Studios",
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/AUTS_2025_WinnerLaurels13.png",
  },
];

export function HomePanelAwards() {
  return (
    <Section
      eyebrow="Awards & Accolades"
      title={<>International <span className="text-gradient">Recognition</span></>}
      subtitle="Recognized across international film festivals, animation showcases, and real-time visual production platforms."
    >
      <div className="grid gap-8 sm:grid-cols-2">
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

            <div className="relative mt-8 flex min-h-[260px] items-center justify-center rounded-[28px] border border-white/10 bg-black/20 p-10 backdrop-blur-xl">
              <img
                src={award.image}
                alt={award.title}
                className="max-h-44 object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            <div className="relative mt-6">
              <h4 className="text-2xl font-semibold">{award.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{award.subtitle}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-pink via-violet to-blue opacity-40" />
              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-gradient-brand" />
                Global Recognition
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
