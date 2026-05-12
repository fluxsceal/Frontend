import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { iconSrc: "/Distributed Model Training icon.png", title: "Distributed Training Engine", desc: "Run large AI training workloads across multiple compute nodes with synchronized execution designed for speed, stability, and scale.", type: "coral" },
  { iconSrc: "/GPU Orchestration icon.png", title: "Smart Compute Orchestration", desc: "Intelligently manages and distributes workloads across available resources to ensure optimal performance and maximum efficiency.", type: "subtle" },
  { iconSrc: "/Performance Engine icon.png", title: "High-Throughput Training Pipelines", desc: "Accelerates model training cycles with optimized pipelines that reduce latency and improve iteration speed for AI development.", type: "vibrant" },
  { iconSrc: "/Experiment Tracking icon.png", title: "Real-Time Training Intelligence", desc: "Continuously tracks training progress, system performance, and workload behavior to provide actionable operational insights.", type: "gradient" },
  { iconSrc: "/Real-Time Analytics icon.png", title: "Experiment Lifecycle Management", desc: "Organize, track, and manage all training experiments, model versions, and configurations in a structured development workflow.", type: "coral" },
  { iconSrc: "/Model Management icon.png", title: "Scalable AI Infrastructure Layer", desc: "A flexible compute foundation that adapts to growing AI demands, supporting everything from small experiments to enterprise-scale training systems.", type: "gradient" },
] as const;

export function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-20 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(151,59,246,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,49,246,0.10),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 relative h-auto md:h-[750px]">
          {/* HEADER GAPS */}
          <div className="md:row-start-1 md:col-start-1 md:col-span-2 flex flex-col justify-center pr-12">
            <span className="font-mono text-[10px] text-neon-cyan uppercase tracking-[0.3em] mb-4">Core Capabilities</span>
            <h2 className="font-ultra text-4xl md:text-6xl text-white leading-[0.9] tracking-tighter">
              ENTERPRISE-GRADE CAPABILITIES <br />
              <span className="text-gradient">FOR AI DEVELOPMENT</span>
            </h2>
          </div>

          <div className="md:row-start-2 md:col-start-1 flex flex-col justify-start pt-2">
            <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
              A powerful set of intelligent systems that simplify distributed AI training, optimize compute usage, and accelerate large-scale model development.
            </p>
          </div>

          {/* F0: Bottom Left */}
          <FeatureCard f={features[0]} className="md:row-start-3 md:col-start-1" />
          
          {/* F1: Bottom Middle */}
          <FeatureCard f={features[1]} className="md:row-start-3 md:col-start-2" />
          
          {/* F2: Bottom Right */}
          <FeatureCard f={features[2]} className="md:row-start-3 md:col-start-3" />
          
          {/* F3: Middle Middle */}
          <FeatureCard f={features[3]} className="md:row-start-2 md:col-start-2" />
          
          {/* F4: Middle Right */}
          <FeatureCard f={features[4]} className="md:row-start-2 md:col-start-3" />
          
          {/* F5: Top Right */}
          <FeatureCard f={features[5]} className="md:row-start-1 md:col-start-3" />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ f, className }: { f: (typeof features)[number]; className?: string }) {
  const getStyle = () => {
    switch (f.type) {
      case "gradient":
        return "bg-gradient-to-br from-neon-blue to-neon-purple text-white border-white/10";
      case "vibrant":
        return "bg-neon-blue text-white border-white/10";
      case "coral":
        return "bg-[#E95D61]/10 border-[#E95D61]/30 text-white hover:bg-[#E95D61]/20";
      default:
        return "bg-white/5 text-white/90 border-white/5 hover:bg-white/10";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`group rounded-3xl p-6 border flex flex-col justify-between transition-all duration-500 hover:-translate-y-0.5 ${getStyle()} ${className}`}
    >
      <div>
        <div className="mb-4 opacity-80 transition-all origin-left group-hover:scale-110 group-hover:opacity-100">
          <img src={f.iconSrc} alt="" className="h-20 w-20 object-contain md:h-24 md:w-24" />
        </div>
        <h3 className="font-ultra text-xl mb-3 leading-tight uppercase tracking-tight">{f.title}</h3>
        <p className={`text-[13px] leading-relaxed ${f.type === 'subtle' ? 'text-muted-foreground' : 'text-white/80'}`}>
          {f.desc}
        </p>
      </div>
      
      <div className="mt-6 flex items-center justify-between">
         <span className="text-[9px] font-mono opacity-40 uppercase tracking-widest">Active System</span>
         <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </motion.div>
  );
}


