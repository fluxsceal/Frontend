import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "./SystemOverview";

const cases = [
  {
    id: "startup",
    iconSrc: "/AI Startups icon.png",
    title: "AI Startups",
    desc: "Easily ship, edit, and enhance models using AI-powered tools that streamline your workflow.",
    image: "/AI Startups.png",
    color: "#0E31F6", // Electric Blue
    hue: "0deg",
  },
  {
    id: "research",
    iconSrc: "/Research Teams icon.png",
    title: "Research Teams",
    desc: "Reproducible experiments, lineage, and burst capacity for massive-scale ablations.",
    image: "/Research Teams.png",
    color: "#973BF6", // Vibrant Purple
    hue: "45deg",
  },
  {
    id: "enterprise",
    iconSrc: "/Enterprise AI icon.png",
    title: "Enterprise AI",
    desc: "VPC-isolated, SOC2, and compliance-grade audit trails on every compute run.",
    image: "/Enterprise AI.png",
    color: "#E95D61", // Coral
    hue: "160deg",
  },
  {
    id: "engineer",
    iconSrc: "/ML Engineers icon.png",
    title: "ML Engineers",
    desc: "PyTorch & JAX-native. No YAML maze, no cluster babysitting. Pure orchestration.",
    image: "/ML Engineers.png",
    color: "#2E1E9E", // Indigo
    hue: "-30deg",
  },
];

const BRAND_CORAL = "#E95D61";

export function UseCases() {
  const [activeTab, setActiveTab] = useState(cases[0]);

  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Dynamic Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-[150px] opacity-10 transition-colors duration-1000"
        style={{ backgroundColor: activeTab.color }}
      />
      
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="mb-20">
           <SectionHeader eyebrow="Built For" title="Whoever ships intelligence." align="left" />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch md:h-[500px]">
          {/* LEFT: Tabs */}
          <div className="lg:col-span-4 space-y-4">
            {cases.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveTab(c)}
                className={`w-full text-left p-6 rounded-2xl border transition-[colors,box-shadow] duration-300 group relative overflow-hidden ${
                  activeTab.id === c.id 
                    ? "bg-white/5 border-white/10 shadow-xl" 
                    : "bg-transparent border-transparent hover:bg-white/2"
                }`}
              >
                {activeTab.id === c.id && (
                  <motion.div 
                    layoutId="active-bg"
                    className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent -z-10"
                  />
                )}
                <div className="flex gap-4 items-start relative z-10">
                  <div
                    className="flex shrink-0 items-center justify-center rounded-xl border p-3 transition-[background-color,border-color] duration-300"
                    style={{
                      backgroundColor:
                        activeTab.id === c.id ? `${c.color}22` : "rgba(255,255,255,0.05)",
                      borderColor:
                        activeTab.id === c.id ? `${c.color}44` : "rgba(255,255,255,0.05)",
                    }}
                  >
                    <div
                      className={`h-7 w-7 shrink-0 transition-opacity duration-300 md:h-8 md:w-8 ${
                        activeTab.id === c.id ? "opacity-100" : "opacity-40"
                      }`}
                      style={{
                        backgroundColor: BRAND_CORAL,
                        WebkitMaskImage: `url(${encodeURI(c.iconSrc)})`,
                        maskImage: `url(${encodeURI(c.iconSrc)})`,
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                      }}
                      aria-hidden
                    />
                  </div>
                  <div>
                    <h3 className={`font-display text-xl mb-2 transition-colors ${
                      activeTab.id === c.id ? "text-white" : "text-white/60 group-hover:text-white/80"
                    }`}>
                      {c.title}
                    </h3>
                    {activeTab.id === c.id && (
                      <motion.p 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {c.desc}
                      </motion.p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* MIDDLE: Metrics */}
          <div className="lg:col-span-4 glass-strong rounded-[2.5rem] p-8 flex flex-col justify-between border-white/5 relative overflow-hidden group">
            <div 
              className="absolute inset-0 opacity-20 transition-all duration-1000 blur-3xl -z-10"
              style={{ background: `radial-gradient(circle at center, ${activeTab.color}, transparent)` }}
            />
            <div className="absolute inset-0 grid-bg opacity-10" />
            
            <div className="relative z-10">
              <motion.span 
                key={activeTab.id + "-num"}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="block font-ultra text-8xl md:text-9xl text-white leading-none mb-8 tracking-tighter"
              >
                98%
              </motion.span>
              
              <div className="mt-auto">
                <div className="flex -space-x-3 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-10 w-10 rounded-full border-2 border-[#0A0A1B] bg-[#1A1B2E] overflow-hidden ring-2 ring-background">
                      <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="user" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" />
                    </div>
                  ))}
                  <div 
                    className="h-10 w-10 rounded-full border-2 border-[#0A0A1B] flex items-center justify-center text-[10px] font-bold text-white ring-2 ring-background transition-colors duration-500"
                    style={{ backgroundColor: activeTab.color }}
                  >
                    160+
                  </div>
                </div>
                
                <h4 className="font-display italic text-2xl text-white mb-2 uppercase tracking-tighter">Verified Efficiency</h4>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[280px]">
                  Engineered to reduce training overhead and maximize GPU utilization for {activeTab.title}.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Image */}
          <div className="lg:col-span-4 relative rounded-[2.5rem] overflow-hidden bg-[#0A0A1B] border border-white/5 group">
            <div 
              className="absolute inset-0 z-10 opacity-30 pointer-events-none transition-all duration-1000"
              style={{ background: `radial-gradient(circle at center, ${activeTab.color}, transparent 70%)` }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "circOut" }}
                className="absolute inset-0"
              >
                <img 
                  src={activeTab.image} 
                  alt={activeTab.title} 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  style={{ filter: `hue-rotate(${activeTab.hue}) brightness(1.2) contrast(1.1)` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1B] via-transparent to-transparent opacity-80" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}


