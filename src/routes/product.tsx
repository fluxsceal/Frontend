import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SystemOverview";
import { CTA } from "@/components/site/CTA";
import { Cpu, Network, Layers, Shield, Zap, GitBranch } from "lucide-react";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — FluxScael Distributed Training Platform" },
      { name: "description", content: "Deep dive into FluxScael's distributed training, GPU orchestration, and system architecture." },
      { property: "og:title", content: "FluxScael Product Architecture" },
      { property: "og:description", content: "How FluxScael orchestrates thousands of GPUs into a single training surface." },
    ],
  }),
  component: ProductPage,
});

const sections = [
  {
    icon: Network,
    title: "Distributed Training",
    body: "FluxScael implements ZeRO-3 optimizer state sharding, pipeline parallelism, and tensor parallelism out of the box. Gradient compression and overlap-of-communication-with-compute are enabled by default — you simply describe your model in PyTorch or JAX and we handle the rest. Convergence is bit-identical to single-node baselines.",
  },
  {
    icon: Cpu,
    title: "GPU Orchestration",
    body: "Our scheduler is topology-aware: it places ranks to maximize NVLink bandwidth and minimize cross-rack hops over InfiniBand. Preemption-safe checkpointing means a node failure costs you seconds, not hours. Every H100, A100, and L40S is exposed through a uniform compute fabric.",
  },
  {
    icon: Layers,
    title: "System Architecture",
    body: "A control plane written in Rust drives a per-region data plane. Telemetry flows through a streaming time-series store with sub-second resolution. Artifacts (datasets, weights, configs) are content-addressed and replicated. Everything is observable — including the scheduler itself.",
  },
];

const specs = [
  { icon: Zap, k: "Throughput", v: "Up to 3.4 TB/s aggregate NVLink" },
  { icon: Shield, k: "Security", v: "VPC isolation · SOC2 · in-flight encryption" },
  { icon: GitBranch, k: "Frameworks", v: "PyTorch · JAX · TensorFlow · DeepSpeed" },
  { icon: Cpu, k: "GPU Pool", v: "H100 SXM · A100 80GB · L40S" },
];

function ProductPage() {
  return (
    <>
      <section className="relative pt-36 pb-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-4">/ The Product</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">
            A <span className="text-gradient">single platform</span> for distributed deep learning.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            FluxScael abstracts the messy parts of multi-GPU, multi-node training — without hiding the levers you need to optimize.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-4 gap-3">
          {specs.map((s) => (
            <div key={s.k} className="glass rounded-xl p-5">
              <s.icon size={18} className="text-neon-cyan" />
              <p className="mt-3 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{s.k}</p>
              <p className="mt-1 text-sm font-medium">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 space-y-16">
        {sections.map((s, i) => (
          <div key={s.title} className={`grid md:grid-cols-12 gap-8 items-center ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="md:col-span-5">
              <div className="glass-strong rounded-2xl p-8 aspect-square relative overflow-hidden">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.62_0.26_300/0.4),transparent_70%)]" />
                <div className="relative h-full flex items-center justify-center">
                  <s.icon size={120} className="text-neon-cyan/70 animate-float" strokeWidth={1} />
                </div>
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="font-mono text-xs text-neon-cyan uppercase tracking-widest mb-3">/ 0{i+1}</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold">{s.title}</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed text-lg">{s.body}</p>
            </div>
          </div>
        ))}
      </section>

      <SectionHeader eyebrow="Reference Architecture" title="Inside a FluxScael cluster." />
      <section className="mx-auto max-w-6xl px-6 mt-12">
        <div className="glass-strong rounded-3xl p-8 font-mono text-xs leading-relaxed overflow-x-auto">
          <pre className="text-muted-foreground">
{`┌─────────────────────────────────────────────────────────────────────────┐
│                         FLUXSCAEL CONTROL PLANE                          │
│   scheduler · placement · checkpointing · telemetry · artifact store     │
└────────────────────────────┬────────────────────────────────────────────┘
                             │ gRPC / mTLS
       ┌─────────────────────┼─────────────────────┐
       ▼                     ▼                     ▼
   ┌───────┐             ┌───────┐             ┌───────┐
   │ POD-A │◄──NVLink──► │ POD-B │◄──NVLink──► │ POD-C │
   │ 8×H100│             │ 8×H100│             │ 8×H100│
   └───┬───┘             └───┬───┘             └───┬───┘
       └────── InfiniBand · 400 Gb/s · RoCEv2 ─────┘`}
          </pre>
        </div>
      </section>

      <CTA />
    </>
  );
}
