import { PageShell } from "../components/page-shell";
import { ProjectsPanelHero } from "./projects/panel-1-hero";
import { ProjectsPanelFeatured } from "./projects/panel-2-featured";
import { ProjectsPanelCapabilities } from "./projects/panel-3-capabilities";
import { ProjectsPanelJourney } from "./projects/panel-4-journey";
import { ProjectsPanelDeliverables } from "./projects/panel-5-deliverables";
import { ProjectsPanelCta } from "./projects/panel-6-cta";

export default function Projects() {
  return (
    <PageShell>
      <ProjectsPanelHero />
      <ProjectsPanelFeatured />
      <ProjectsPanelCapabilities />
      <ProjectsPanelJourney />
      <ProjectsPanelDeliverables />
      <ProjectsPanelCta />
    </PageShell>
  );
}
