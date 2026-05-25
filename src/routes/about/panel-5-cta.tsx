import { Link } from "react-router-dom";
import { Section } from "../../components/section";
import { LighthouseBeam } from "../../components/lighthouse-beam";

export function AboutPanelCta() {
  return (
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
  );
}
