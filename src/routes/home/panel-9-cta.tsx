import { Link } from "react-router-dom";
import { Section } from "../../components/section";
import { LighthouseBeam } from "../../components/lighthouse-beam";

export function HomePanelCta() {
  return (
    <Section className="relative">
      <div className="relative overflow-hidden rounded-3xl glass border-gradient p-10 sm:p-16 text-center">
        <LighthouseBeam />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 h-60 w-[120%] rounded-[100%] bg-pink/20 blur-3xl" />
        <div className="relative">
          <div className="mb-4 text-xs uppercase tracking-[0.3em] text-muted-foreground">Let's build</div>
          <h2 className="mx-auto max-w-3xl text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight">
            We Are Excited <br />
            To <span className="text-gradient">Work With You</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Tell us about your project. We'll send a beam back within a day.
          </p>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-8 py-4 text-sm font-medium text-white glow-brand pulse-glow transition-transform hover:scale-105"
          >
            Start a Project →
          </Link>
        </div>
      </div>
    </Section>
  );
}
