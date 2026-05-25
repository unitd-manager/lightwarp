import { motion } from "framer-motion";
import { Section } from "../../components/section";

const partners = [
  {
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/StrayerPicturesLogoWhiteTransparentDROPSHADOW2-scaled.png",
    name: "Strayer Pictures",
  },
  {
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/TAM-Stacked-AllWhite.png",
    name: "TAM",
  },
  {
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/StrayerPicturesLogoWhiteTransparentDROPSHADOW2-scaled.png",
    name: "Strayer Pictures",
  },
  {
    image: "https://lightwarp3d.com/wp-content/uploads/2026/01/TAM-Stacked-AllWhite.png",
    name: "TAM",
  },
];

export function HomePanelPartners() {
  return (
    <Section
      eyebrow="Partners & Clients"
      title={<>Brands We've <span className="text-gradient">Illuminated</span></>}
      subtitle="Collaborating with visionary studios, creative agencies, and global brands to craft immersive visual experiences."
    >
      <div className="relative overflow-hidden py-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="marquee-track flex items-center gap-12 whitespace-nowrap">
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              className="group relative flex h-[140px] min-w-[260px] shrink-0 items-center justify-center overflow-hidden rounded-[32px] border border-white/10 bg-white/[0.03] px-10 backdrop-blur-2xl transition-all duration-500 hover:border-pink/20"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-pink/10 via-transparent to-blue/10" />
              </div>
              <img
                src={partner.image}
                alt={partner.name}
                className="relative max-h-20 w-auto object-contain opacity-70 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
              />
              <div className="absolute bottom-0 left-1/2 h-20 w-32 -translate-x-1/2 rounded-full bg-pink/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
