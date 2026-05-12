import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { iconSrc: "/upload dataset icon.png", title: "Upload Dataset", desc: "Stream from S3, GCS, or push directly. Versioned, sharded, and ready for massive compute.", color: "#2E1E9E" },
  { iconSrc: "/configure training icon.png", title: "Configure Training", desc: "Pick a recipe or define your own. Hyperparams, model, optimizer with full control.", color: "#E95D61" },
  { iconSrc: "/distributed execution icon.png", title: "Distributed Execution", desc: "Scheduler picks topology, allocates GPUs, and starts training with linear scaling.", color: "#0E31F6" },
  { iconSrc: "/Monitor optimize icon.png", title: "Monitor & Optimize", desc: "Watch live telemetry. Auto-tune kernels. Dynamic rollback on performance drift.", color: "#973BF6" },
];

export function HowItWorks() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(46,30,158,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 top-2/3 h-[620px] w-[620px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(151,59,246,0.10),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER SECTION */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-7">
            <h2 className="font-ultra text-5xl md:text-7xl text-white leading-[1.1] tracking-tight">
              Design that delivers <br />
              <span className="text-gradient">uncommonly good speed.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 pt-4">
            <p className="text-muted-foreground text-lg mb-8 max-w-sm leading-relaxed">
              We don't just provide compute, we partner with you to achieve measurable training outcomes at record pace.
            </p>
            <a 
              href="#dashboard" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all group"
            >
              <span className="text-sm font-semibold">Our Clusters</span>
              <div className="h-6 w-6 rounded-full bg-white text-black flex items-center justify-center group-hover:translate-x-1 transition-transform">
                <ArrowRight size={14} />
              </div>
            </a>
          </div>
        </div>

        {/* STEPS SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="mb-8">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">00{i+1}</span>
              </div>
              
              <div
                className="h-40 w-full rounded-[2rem] bg-white/5 border border-white/10 flex items-center justify-center mb-8 transition-all duration-500 overflow-hidden relative group-hover:-translate-y-0.5"
              >
                {/* Localized Icon Glow */}
                <div 
                  className="absolute w-20 h-20 rounded-full blur-[40px] opacity-0 group-hover:opacity-40 transition-opacity duration-700"
                  style={{ backgroundColor: s.color }}
                />
                
                <img
                  src={s.iconSrc}
                  alt=""
                  className="relative z-10 h-24 w-24 object-contain opacity-80 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100 md:h-28 md:w-28"
                />
              </div>
              
              <div>
                <h3 className="font-display italic text-2xl text-white mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

