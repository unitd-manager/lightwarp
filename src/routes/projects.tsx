import { PageShell } from "../components/page-shell";
import { ProjectsPanelHero } from "./projects/panel-1-hero";
import { ProjectsPanelFeatured } from "./projects/panel-2-featured";
import { ProjectsPanelCapabilities } from "./projects/panel-3-capabilities";

export default function Projects() {
  return (
    <PageShell>
      <ProjectsPanelHero />
      <ProjectsPanelFeatured />
      <ProjectsPanelCapabilities />
    </PageShell>
  );
}
