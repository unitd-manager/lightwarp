import { PageShell } from "../components/page-shell";
import { HomePanelHero } from "./home/panel-1-hero";
import { HomePanelStats } from "./home/panel-2-stats";
import { HomePanelServices } from "./home/panel-3-services";
import { HomePanelWork } from "./home/panel-4-work";
import { HomePanelPartners } from "./home/panel-5-partners";
import { HomePanelAwards } from "./home/panel-6-awards";
import { HomePanelTestimonials } from "./home/panel-7-testimonials";
import { HomePanelShowcase } from "./home/panel-8-showcase";
import { HomePanelCta } from "./home/panel-9-cta";

export default function Home() {
  return (
    <PageShell>
      <HomePanelHero />
      <HomePanelWork />
      <HomePanelStats />
      <HomePanelServices />
      <HomePanelPartners />
      <HomePanelAwards />
      <HomePanelTestimonials />
      <HomePanelShowcase />
      <HomePanelCta />
    </PageShell>
  );
}
