import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TechBand } from "@/components/site/TechBand";
import { SystemOverview } from "@/components/site/SystemOverview";
import { Features } from "@/components/site/Features";
import { CommandCenter } from "@/components/site/CommandCenter";
import { Metrics } from "@/components/site/Metrics";
import { HowItWorks } from "@/components/site/HowItWorks";
import { UseCases } from "@/components/site/UseCases";
import { Pricing } from "@/components/site/Pricing";
import { CTA } from "@/components/site/CTA";
import { TopologyTimeline } from "@/components/site/TopologyTimeline";
export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TechBand />
      <SystemOverview />
      <Features />
      <CommandCenter />
      <TopologyTimeline />
      <Metrics />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <CTA />
    </>
  );
}

