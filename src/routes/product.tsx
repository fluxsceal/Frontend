import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SystemOverview";
import { CTA } from "@/components/site/CTA";
import { Cpu, Network, Layers, Shield, Zap, GitBranch, CheckCircle, Users, Clock, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

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
    title: "Distributed Training Made Simple",
    body: "Scale your AI models effortlessly. Our platform handles the complexity of distributing training across thousands of GPUs, so you can focus on building better models. From single experiments to massive production training runs.",
  },
  {
    icon: Cpu,
    title: "Intelligent GPU Orchestration",
    body: "Every GPU in our cluster works together seamlessly. Our smart scheduling optimizes for performance, automatically placing workloads to maximize speed and minimize costs. Your training jobs complete faster and more reliably.",
  },
  {
    icon: Layers,
    title: "Complete AI Infrastructure",
    body: "Everything you need in one platform: training, experimentation, collaboration, and deployment. Built for teams that need to move fast while maintaining enterprise-grade reliability and security.",
  },
];

const specs = [
  { icon: Zap, k: "Performance", v: "Up to 3.4 TB/s aggregate bandwidth" },
  { icon: Shield, k: "Security", v: "SOC2 compliant · Enterprise-grade" },
  { icon: GitBranch, k: "Frameworks", v: "PyTorch · JAX · TensorFlow" },
  { icon: Cpu, k: "GPU Types", v: "H100 · A100 · L40S clusters" },
];

function ProductPage() {
  return (
    <>
      <section className="relative pt-36 pb-16">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-4">/ The Product</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter">
            <span className="text-gradient">FluxScael TensorGrid</span> — Enterprise AI Training Platform
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-3xl mx-auto">
            Accelerate your AI innovation with our distributed training platform. Scale from single GPUs to massive clusters while maintaining simplicity and performance.
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="https://app.fluxscael.com"
              className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-medium text-white shadow-lg transition hover:opacity-90"
              style={{
                backgroundColor: "#2E1E9E",
                boxShadow: "0 10px 28px -8px rgba(46,30,158,0.55)",
              }}
            >
              Launch TensorGrid
              <ArrowRight size={20} />
            </a>
          </div>
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

      {/* Why Choose FluxScael */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Why Choose <span className="text-gradient">FluxScael TensorGrid</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for enterprises that demand performance, reliability, and simplicity in AI training.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-[#2E1E9E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp size={32} className="text-[#2E1E9E]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Accelerate Innovation</h3>
            <p className="text-muted-foreground">
              Reduce training time from weeks to days. Focus on model development, not infrastructure complexity.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-[#0E31F6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield size={32} className="text-[#0E31F6]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Enterprise-Grade Reliability</h3>
            <p className="text-muted-foreground">
              SOC2 compliant with fault-tolerant architecture. Your training jobs run to completion, guaranteed.
            </p>
          </div>
          <div className="glass rounded-2xl p-8 text-center">
            <div className="w-16 h-16 bg-[#973BF6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-[#973BF6]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Team Collaboration</h3>
            <p className="text-muted-foreground">
              Share models, datasets, and experiments across your organization with built-in version control.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="mx-auto max-w-6xl px-6 py-16 bg-[#0D0D1A]/50 rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Key Benefits
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to scale AI training without the headaches.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Zero-Config Scaling</h3>
                <p className="text-muted-foreground">
                  Automatically distribute your training across thousands of GPUs. No manual configuration required.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Cost Optimization</h3>
                <p className="text-muted-foreground">
                  Pay only for what you use with our flexible pricing. No upfront infrastructure costs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Real-Time Monitoring</h3>
                <p className="text-muted-foreground">
                  Track training progress, resource usage, and performance metrics in real-time.
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Framework Agnostic</h3>
                <p className="text-muted-foreground">
                  Works with PyTorch, JAX, TensorFlow, and more. Use your preferred tools.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Expert Support</h3>
                <p className="text-muted-foreground">
                  Get help from our team of AI infrastructure experts whenever you need it.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CheckCircle size={24} className="text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold mb-2">Secure & Compliant</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade security with VPC isolation and end-to-end encryption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Perfect For
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organizations pushing the boundaries of AI research and development.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#E95D61]/10 rounded-lg flex items-center justify-center mb-6">
              <Users size={24} className="text-[#E95D61]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Research Teams</h3>
            <p className="text-muted-foreground mb-4">
              Train larger models faster. Experiment with architectures that were previously impossible.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Large language models</li>
              <li>• Multimodal AI</li>
              <li>• Scientific computing</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#2E1E9E]/10 rounded-lg flex items-center justify-center mb-6">
              <TrendingUp size={24} className="text-[#2E1E9E]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Enterprises</h3>
            <p className="text-muted-foreground mb-4">
              Scale AI initiatives across your organization with confidence and control.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Production ML pipelines</li>
              <li>• Custom model development</li>
              <li>• AI product teams</li>
            </ul>
          </div>
          <div className="glass rounded-2xl p-8">
            <div className="w-12 h-12 bg-[#0E31F6]/10 rounded-lg flex items-center justify-center mb-6">
              <Clock size={24} className="text-[#0E31F6]" />
            </div>
            <h3 className="text-xl font-bold mb-4">Startups</h3>
            <p className="text-muted-foreground mb-4">
              Access world-class AI infrastructure without the capital expense.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Rapid prototyping</li>
              <li>• MVP development</li>
              <li>• Competitive advantage</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Overview */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter mb-4">
            Technical Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powered by industry-leading technologies for maximum performance and reliability.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-[#2E1E9E] mb-2">NVIDIA</div>
            <div className="text-sm font-medium mb-1">NeMo Framework</div>
            <div className="text-xs text-muted-foreground">Distributed Training Engine</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-[#0E31F6] mb-2">NVIDIA</div>
            <div className="text-sm font-medium mb-1">TensorRT</div>
            <div className="text-xs text-muted-foreground">Inference Optimization</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-[#973BF6] mb-2">NVIDIA</div>
            <div className="text-sm font-medium mb-1">DALI</div>
            <div className="text-xs text-muted-foreground">GPU Data Processing</div>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-2xl font-bold text-[#E95D61] mb-2">NVIDIA</div>
            <div className="text-sm font-medium mb-1">Morpheus</div>
            <div className="text-xs text-muted-foreground">Real-Time Monitoring</div>
          </div>
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
