import { motion } from "framer-motion";
import { PageShell } from "../components/page-shell";
import { Section } from "../components/section";

const projects = [
  { title: "Aurora Watch", client: "Nova Timepieces", tags: ["CGI", "Product"], hue: "from-pink/40 to-violet/40" },
  { title: "Helios Sneaker", client: "Orbital", tags: ["Animation", "VFX"], hue: "from-blue/40 to-pink/40" },
  { title: "Vanta Headset", client: "Vanta Audio", tags: ["Product Viz"], hue: "from-violet/40 to-blue/40" },
  { title: "Lumen Tower", client: "Helios Realty", tags: ["Arch Viz"], hue: "from-pink/30 to-blue/40" },
  { title: "Echo Companion", client: "Echo Labs", tags: ["Character"], hue: "from-violet/40 to-pink/40" },
  { title: "Strata Engine", client: "Kairos", tags: ["CGI", "Motion"], hue: "from-blue/40 to-violet/40" },
];

const capabilities = ["CGI", "VFX", "Motion", "Product Rendering", "3D Design", "Character", "Realtime", "Compositing"];

export default function Projects() {
  return (
    <PageShell>
      <Section
        eyebrow="Selected Work"
        title={<>Featured <span className="text-gradient">Projects</span></>}
        subtitle="A reel of recent collaborations. Hover to feel the frame breathe."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl glass border-gradient"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* Faux preview */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.hue}`} />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.25),transparent_60%)]" />
                <div
                  className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-60"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.08) 0 2px, transparent 2px 16px)",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                {/* Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-all duration-500 group-hover:h-20 group-hover:w-20 group-hover:bg-gradient-brand group-hover:glow-brand">
                    <div className="ml-1 h-0 w-0 border-y-[10px] border-l-[16px] border-y-transparent border-l-white" />
                  </div>
                </div>
                {/* Sweep on hover */}
                <div className="absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[400%] group-hover:opacity-100" />
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{p.client}</div>
                  <h3 className="mt-1 text-2xl font-semibold">{p.title}</h3>
                </div>
                <div className="flex flex-wrap justify-end gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Capabilities"
        title={<>Our <span className="text-gradient">Capabilities</span></>}
        subtitle="Drag, scroll, explore — every discipline under one beam."
      >
        <div className="relative -mx-6 overflow-x-auto px-6 py-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 pb-4">
            {capabilities.map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative h-64 w-72 shrink-0 overflow-hidden rounded-2xl glass border-gradient p-6"
              >
                <div className="absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-gradient-brand opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-50" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="text-5xl font-display font-semibold text-gradient">0{i + 1}</div>
                  <div>
                    <h4 className="text-2xl font-semibold">{c}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Engineered, art-directed, and rendered in-house.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
