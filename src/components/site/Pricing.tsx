import { SectionHeader } from "./SystemOverview";
import PricingPage from "@/components/ui/pricing-page";
import { Sparkles, Briefcase, Building } from "lucide-react";

const fluxPlans = [
  {
    planName: "Starter",
    description: "For rapid prototyping & testing",
    price: "$0",
    priceDescription: "/ forever",
    icon: Sparkles,
    iconColor: "#0E31F6",
    features: [
      "5 GPU-hours / month",
      "Shared T4/L4 resources",
      "Community support",
      "Public model registry",
      "Basic experiment tracking",
    ],
    buttonText: "Get Started",
    isPopular: false,
  },
  {
    planName: "Professional",
    description: "For solo builders & startups",
    price: "$49",
    priceDescription: "/ month",
    icon: Briefcase,
    iconColor: "#E95D61",
    features: [
      "100 GPU-hours / month",
      "Up to 4× A100 nodes",
      "Priority email support",
      "Private model registry",
      "Advanced experiment tracking",
    ],
    buttonText: "Subscribe Now",
    isPopular: true,
  },
  {
    planName: "Enterprise",
    description: "For mission-critical workloads",
    price: "Custom",
    priceDescription: "Pricing",
    icon: Building,
    iconColor: "#FFFFFF",
    features: [
      "Custom GPU pools",
      "Dedicated cluster region",
      "24/7 white-glove support",
      "On-prem & hybrid deploys",
      "SOC2 + HIPAA compliance",
      "Custom SLAs",
    ],
    buttonText: "Contact Sales",
    isPopular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-32 overflow-hidden bg-[#0A0A1B]">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(46,30,158,0.05)_0%,transparent_70%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(14,49,246,0.10),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 top-2/3 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(233,93,97,0.08),transparent_70%)]" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <SectionHeader 
          eyebrow="Pricing" 
          title="Compute-First Economics" 
          subtitle="Pay for the compute you use, not the infrastructure complexity you don't. Transparent, scalable, and built for AI teams."
        />
        
        <div className="mt-10">
          <PricingPage plans={fluxPlans} />
        </div>
      </div>
    </section>
  );
}

