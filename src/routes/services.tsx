import { PageShell } from "../components/page-shell";
import { ServicesPanelHero } from "./services/panel-1-hero";
import { ServicesPanelServices } from "./services/panel-2-services";
import { ServicesPanelProcess } from "./services/panel-3-process";
import { ServicesPanelIndustries } from "./services/panel-5-industries";
import { ServicesPanelTools } from "./services/panel-6-tools";
import { ServicesPanelWhy } from "./services/panel-7-why";
import { ServicesPanelFaq } from "./services/panel-8-faq";
import { ServicesPanelCta } from "./services/panel-4-cta";

export default function Services() {
  return (
    <PageShell>
      <ServicesPanelHero />
      <ServicesPanelServices />
      <ServicesPanelProcess />
      <ServicesPanelIndustries />
      <ServicesPanelTools />
      <ServicesPanelWhy />
      <ServicesPanelFaq />
      <ServicesPanelCta />
    </PageShell>
  );
}
