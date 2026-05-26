import { motion } from "framer-motion";
import { Section } from "../../components/section";

const founderPhoto = "https://lightwarp3d.com/wp-content/uploads/2026/01/HeadShot.jpg";

const founder = {
  name: "Adithya Sathyanarayanan",
  role: "Founder & Chief Creative Officer",
  initials: "AS",
};

const associates = [
  { name: "Alyssa Curran",   role: "Look Development Artist",     initials: "AC" },
  { name: "Cristina Kovacs", role: "Character Designer",          initials: "CK" },
  { name: "Diego Romero",    role: "Pipeline Technical Director",  initials: "DR" },
  { name: "Dominic Nguyen",  role: "Visual Development Artist",   initials: "DN" },
  { name: "Ethan Umanos",    role: "Animator",                    initials: "EU" },
  { name: "Magnus Haarseth", role: "3D Asset Artist",             initials: "MH" },
  { name: "Melanie Riojas",  role: "Story Artist",                initials: "MR" },
  { name: "Nimi Parmar",     role: "3D Asset Artist",             initials: "NP" },
  { name: "Robert Harweth",  role: "3D Environment Artist",       initials: "RH" },
  { name: "Spencer Bryant",  role: "Rigging & CFX Artist",        initials: "SB" },
  { name: "Theron Smith",    role: "Animator",                    initials: "TS" },
  { name: "Travis Rainford", role: "VFX Artist",                  initials: "TR" },
];

export function AboutPanelTeam() {
  return (
    <Section
      eyebrow="The Crew"
      title={<>Meet Our <span className="text-gradient">Team</span></>}
      subtitle="Real artists, technicians, and production staff with passion, vision, and intention — ready to bring your 3D vision to life."
    >
      {/* ── Founder ── */}
      <div className="mb-10 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group relative w-full max-w-sm overflow-hidden rounded-2xl glass border-gradient p-6 text-center transition-transform hover:-translate-y-1"
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full bg-pink/30 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full ring-2 ring-pink/40 ring-offset-2 ring-offset-black/20">
            <img
              src={founderPhoto}
              alt="Adithya Sathyanarayanan"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                const next = t.nextElementSibling as HTMLElement | null;
                if (next) next.style.display = "flex";
              }}
            />
            {/* fallback initials */}
            <div
              className="hidden h-full w-full items-center justify-center bg-gradient-brand text-3xl font-semibold text-white"
            >
              AS
            </div>
          </div>
          <h3 className="mt-5 text-xl font-semibold">{founder.name}</h3>
          <p className="text-sm text-muted-foreground">{founder.role}</p>
          <div className="mt-4 flex justify-center gap-2">
            {["IG", "X", "Be"].map((s) => (
              <a
                key={s}
                href="#"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] text-muted-foreground transition-all hover:bg-gradient-brand hover:text-white"
              >
                {s}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Associates ── */}
      <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {associates.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group relative overflow-hidden rounded-2xl glass border-gradient p-5 text-center transition-transform hover:-translate-y-1"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-24 w-24 rounded-full bg-pink/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-brand text-lg font-semibold text-white">
              {m.initials}
            </div>
            <h3 className="mt-4 text-sm font-semibold">{m.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
