import { PageShell } from "../components/page-shell";
import { AboutPanelHero } from "./about/panel-1-hero";
import { AboutPanelTimeline } from "./about/panel-2-timeline";
import { AboutPanelStory } from "./about/panel-3-story";
import { AboutPanelValues } from "./about/panel-6-values";
import { AboutPanelTeam } from "./about/panel-4-team";
import { AboutPanelPress } from "./about/panel-7-press";
import { AboutPanelCta } from "./about/panel-5-cta";

export default function About() {
  return (
    <PageShell>
      <AboutPanelHero />
    {/* <AboutPanelTimeline /> */}
      <AboutPanelStory />
      <AboutPanelValues />
      <AboutPanelTeam />
      <AboutPanelPress />
      <AboutPanelCta />
    </PageShell>
  );
}
