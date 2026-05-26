import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Section } from "../../components/section";
import { Film, Package, Lightbulb, Settings2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const services: { title: string; Icon: LucideIcon }[] = [
  { Icon: Film,      title: "3D Commercials & Cinematics"    },
  { Icon: Package,   title: "3D Asset Services"               },
  { Icon: Lightbulb, title: "Original IP & Content"           },
  { Icon: Settings2, title: "Creative & Technical Consulting" },
];

export function HomePanelServices() {
  return (
    <Section
      eyebrow="What We Do"
      title={<>Our <span className="text-gradient">Services</span></>}
      subtitle="A full real-time creative practice — from commercial animation to original IP."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
          >
            <Link
              to="/services"
              className="group relative flex flex-col items-start overflow-hidden rounded-2xl glass border-gradient p-6 transition-all hover:-translate-y-1 hover:border-pink/40 block"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-pink/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative w-full">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand text-white transition-transform group-hover:rotate-12">
                  <s.Icon size={22} strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-semibold leading-snug">{s.title}</h3>
                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-pink opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-1">
                  Learn More →
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-white/[0.08]"
        >
          View All Services →
        </Link>
      </div>
    </Section>
  );
}
