import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonialData = [
  {
    id: 1,
    name: "Dr. Elara Venn",
    role: "ML Director",
    company: "Research Labs",
    content: "FluxScael completely changed how we run large-scale training. What used to take days now feels like a continuous, fluid process. The system just works at scale.",
    rating: 5,
    avatar: "/m1.png",
    color: "#2E1E9E",
  },
  {
    id: 2,
    name: "Adrian Kova",
    role: "Infrastructure Lead",
    company: "AI Startup",
    content: "We stopped worrying about infrastructure bottlenecks. FluxScael gives us a unified environment where we can focus purely on model improvement.",
    rating: 5,
    avatar: "/w1.png",
    color: "#E95D61",
  },
  {
    id: 3,
    name: "Mira Solberg",
    role: "MLOps Architect",
    company: "Tensor Research",
    content: "The visibility into training workflows is incredible. We finally understand what’s happening across our compute systems in real time.",
    rating: 5,
    avatar: "/m2.png",
    color: "#973BF6",
  },
  {
    id: 4,
    name: "Jonah Reyes",
    role: "Chief Scientist",
    company: "Neural Systems",
    content: "Scaling AI used to mean complexity and downtime. With FluxScael, scaling feels automatic and completely seamless.",
    rating: 5,
    avatar: "/w2.png",
    color: "#0E31F6",
  },
  {
    id: 5,
    name: "Selena Arkwright",
    role: "Lead Data Scientist",
    company: "Quantum Logic",
    content: "It’s rare to find a platform that feels both powerful and simple. FluxScael removes so much friction from our daily ML workflow.",
    rating: 5,
    avatar: "/m3.png",
    color: "#E95D61",
  },
  {
    id: 6,
    name: "Kai Thorne",
    role: "Infrastructure Engineer",
    company: "Nebula AI",
    content: "The performance gains were immediate. Faster training cycles, better resource usage, and far less engineering overhead overall.",
    rating: 5,
    avatar: "/w3.png",
    color: "#973BF6",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 bg-[#050511] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_top,oklch(0.55_0.27_270/0.5),transparent_70%)] opacity-70" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_bottom,oklch(0.70_0.18_22/0.55),transparent_70%)] opacity-70" />
      </div>

      <AnimatedTestimonials
        title="What AI Teams Are Saying"
        subtitle="From research labs to fast-growing AI startups, teams using FluxScael share one thing in common — a dramatic improvement in training speed, infrastructure control, and development efficiency."
        badgeText="Production-grade at scale"
        testimonials={testimonialData}
        trustedCompanies={["NVIDIA", "Anthropic", "Mistral", "DeepMind", "OpenAI"]}
        trustedCompaniesTitle="Silently embedded inside the stacks of leading research labs"
        className="relative"
      />
    </section>
  );
}
