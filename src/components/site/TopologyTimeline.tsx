"use client";

import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const timelineData = [
  {
    id: 1,
    title: "Cluster Provisioning",
    date: "T-Minus 45s",
    content: "Instant allocation of H100 GPU clusters globally. Zero cold-start latency.",
    category: "Infrastructure",
    iconSrc: "/Cluster provisioning icon.png",
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Topology Mapping",
    date: "T-Minus 30s",
    content: "Hardware-native topology optimization across available regions for maximum bandwidth.",
    category: "Network",
    iconSrc: "/Topology Mapping icon.png",
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Distributed Training",
    date: "Active",
    content: "Executing large-scale AI model training across isolated VPC environments.",
    category: "Compute",
    iconSrc: "/Distributed Training icon.png",
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Live Checkpointing",
    date: "Continuous",
    content: "Automatic fault-tolerant state preservation without interrupting workflows.",
    category: "Security",
    iconSrc: "/Live check pointing icon.png",
    relatedIds: [3, 5],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 5,
    title: "Global Deployment",
    date: "Next Phase",
    content: "Scaling inference endpoints to 14 global regions seamlessly.",
    category: "Deployment",
    iconSrc: "/Global department icon.png",
    relatedIds: [4],
    status: "pending" as const,
    energy: 15,
  },
];

export function TopologyTimeline() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#0A0A16]">
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="absolute left-0 top-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(46,30,158,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute right-0 bottom-1/4 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(233,93,97,0.06),transparent_70%)] pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] mb-5 text-[#0E31F6]">
            <span className="h-px w-8 inline-block bg-[#0E31F6]" />
            Lifecycle Tracking
            <span className="h-px w-8 inline-block bg-[#0E31F6]" />
          </div>
          <h2 className="font-ultra text-4xl md:text-6xl text-white leading-[1.05] tracking-tight mb-6">
            <span className="block">Intelligent&nbsp;Cluster</span>
            <span className="block text-[#973BF6] italic">Lifecycle.</span>
          </h2>
          <p className="text-white/50 text-base leading-relaxed">
            Monitor the entire lifecycle of your distributed training workloads in real-time. From 45-second provisioning to global inference deployment, visualize how FluxScael manages hardware topology.
          </p>
        </div>

        <div className="w-full h-[450px] sm:h-[600px] border border-white/5 rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          <RadialOrbitalTimeline timelineData={timelineData} />
        </div>
      </div>
    </section>
  );
}
