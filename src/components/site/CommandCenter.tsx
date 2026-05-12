import { useEffect, useState } from "react";
import { Upload, Settings, Cpu, Activity, CircleCheck, ArrowRight, Server, Shield, Zap, Network } from "lucide-react";
import { SectionHeader } from "./SystemOverview";
import { motion, AnimatePresence } from "framer-motion";

export function CommandCenter() {
  const [activeTab, setActiveTab] = useState("monitor");
  const [isTraining, setIsTraining] = useState(false);
  const [throughput, setThroughput] = useState(0);
  const [latency, setLatency] = useState(0);
  const [logs, setLogs] = useState<string[]>([
    "READY_FOR_PAYLOAD",
    "ALL_NODES_STANDBY",
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isTraining) {
        setThroughput(prev => parseFloat((4.2 + (Math.random() * 0.4 - 0.2)).toFixed(2)));
        setLatency(prev => parseFloat((1.24 + (Math.random() * 0.04 - 0.02)).toFixed(2)));
        
        const events = [
          "KERNEL_FUSION_OPTIMIZED",
          "TENSOR_PARALLEL_SYNC",
          "GRADIENT_ACCUMULATION_STEP",
          "CHECKPOINT_SAVED_S3",
          "NODE_HEALTH_CHECK_PASSED"
        ];
        if (Math.random() > 0.6) {
          setLogs(prev => [events[Math.floor(Math.random() * events.length)], ...prev.slice(0, 8)]);
        }
      } else {
        setThroughput(0);
        setLatency(0);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [isTraining]);

  return (
    <section id="dashboard" className="relative py-12 overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--c-indigo),transparent_50%)] opacity-20" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="max-w-xl">
            <h2 className="font-ultra text-4xl text-white mb-2 uppercase tracking-tight">Mission Control</h2>
            <p className="text-muted-foreground text-sm font-mono uppercase tracking-widest opacity-60">Global Cluster Orchestration</p>
          </div>
          <div className="flex gap-3">
             <div className="glass px-4 py-2 rounded-xl border-white/5 flex items-center gap-3">
                <span className={`h-2 w-2 rounded-full ${isTraining ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                <span className="text-[11px] text-white font-bold font-mono uppercase">{isTraining ? 'TRAINING_ACTIVE' : 'STANDBY'}</span>
             </div>
             <button 
               onClick={() => {
                 setIsTraining(!isTraining);
                 if (!isTraining) setLogs(prev => ["INIT_TRAINING_SEQUENCE", "LOADING_SHARDS...", ...prev]);
               }}
               className={`px-6 py-2 rounded-xl font-bold font-mono text-[11px] transition-all ${
                 isTraining ? 'bg-rose-500/20 text-rose-500 border border-rose-500/30' : 'bg-neon-cyan text-black shadow-[0_0_20px_rgba(6,182,212,0.3)]'
               }`}
             >
               {isTraining ? 'TERMINATE' : 'START_RUN'}
             </button>
          </div>
        </div>

        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            {/* Main Console Window */}
            <div className="glass-strong rounded-[2rem] border-white/10 shadow-[0_0_100px_-20px_rgba(46,30,158,0.3)] overflow-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-6 py-3 border-b border-white/5 bg-white/5">
                <div className="flex items-center gap-6">
                  <div className="flex gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <nav className="flex items-center gap-4 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                    <button onClick={() => setActiveTab("monitor")} className={`hover:text-white transition-colors ${activeTab === "monitor" ? "text-neon-cyan" : ""}`}>Monitor</button>
                    <button onClick={() => setActiveTab("config")} className={`hover:text-white transition-colors ${activeTab === "config" ? "text-neon-cyan" : ""}`}>Config</button>
                    <button onClick={() => setActiveTab("logs")} className={`hover:text-white transition-colors ${activeTab === "logs" ? "text-neon-cyan" : ""}`}>Logs</button>
                  </nav>
                </div>
                <div className="font-mono text-[10px] text-emerald-400 flex items-center gap-1.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className={`absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 ${isTraining ? 'animate-ping' : ''}`} />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  LIVE_FEED
                </div>
              </div>

              {/* Console Body */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTab}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                  className="p-5 h-[450px] overflow-hidden"
                >
                  {activeTab === "monitor" && (
                    <div className="grid grid-cols-12 gap-5 h-full">
                      {/* LEFT: Controls */}
                      <div className="col-span-12 lg:col-span-3 space-y-3">
                        <Panel title="Data Shard" icon={<Upload size={12} />}>
                          <div 
                            onClick={() => setIsTraining(!isTraining)}
                            className={`border border-dashed rounded-xl p-4 text-center transition-all cursor-pointer group ${
                              isTraining ? 'border-neon-cyan/50 bg-neon-cyan/5' : 'border-white/10 bg-white/2 hover:border-white/20'
                            }`}
                          >
                            <div className={`mx-auto w-8 h-8 rounded-full flex items-center justify-center mb-2 ${isTraining ? 'bg-neon-cyan/20' : 'bg-white/5'}`}>
                              <Upload size={14} className={isTraining ? 'text-neon-cyan' : 'text-white/40'} />
                            </div>
                            <p className="text-[11px] font-medium text-white">imagenet_h100_v1.sh</p>
                            <div className="mt-3 h-1 rounded-full bg-white/5 overflow-hidden">
                              <motion.div 
                                animate={{ width: isTraining ? "100%" : "0%" }}
                                transition={{ duration: 0.5 }}
                                className="h-full bg-neon-cyan" 
                              />
                            </div>
                          </div>
                        </Panel>

                        <Panel title="H100 Clusters" icon={<Cpu size={12} />}>
                          <div className="grid grid-cols-8 gap-1">
                            {Array.from({ length: 32 }).map((_, i) => (
                              <motion.div 
                                key={i} 
                                animate={{ 
                                  opacity: isTraining ? (i < 24 ? [0.6, 1, 0.6] : 0.1) : 0.2,
                                  scale: isTraining && i < 24 ? [1, 1.1, 1] : 1
                                }}
                                transition={{ duration: 1.5 + Math.random(), repeat: Infinity }}
                                className={`aspect-square rounded-[1px] ${i < 24 && isTraining ? "bg-neon-cyan shadow-[0_0_8px_rgba(6,182,212,0.4)]" : "bg-white/10"}`} 
                              />
                            ))}
                          </div>
                          <p className="mt-3 text-[9px] font-mono text-muted-foreground uppercase text-center">
                            {isTraining ? '24/32 ACTIVE' : 'CLUSTER_IDLE'}
                          </p>
                        </Panel>
                      </div>

                      {/* CENTER: Main Visualization */}
                      <div className="col-span-12 lg:col-span-6 space-y-3">
                        <Panel title="Convergence" badge={isTraining ? "ACTIVE" : "PAUSED"}>
                          <div className="relative h-56 bg-white/2 rounded-2xl border border-white/5 p-4 overflow-hidden">
                            {isTraining ? <LossChart /> : (
                              <div className="h-full flex items-center justify-center text-white/20 font-mono text-xs italic">
                                WAITING_FOR_SEQUENCE_START
                              </div>
                            )}
                          </div>
                        </Panel>
                        <div className="grid grid-cols-2 gap-3">
                           <MetricCard label="Throughput" value={throughput.toString()} unit="tps" trend={isTraining ? "+12%" : "0"} icon={<Zap size={12} className="text-amber-400" />} />
                           <MetricCard label="Latency" value={latency.toString()} unit="ms" trend={isTraining ? "-0.2ms" : "0"} icon={<Activity size={12} className="text-neon-blue" />} />
                        </div>
                      </div>

                      {/* RIGHT: Health */}
                      <div className="col-span-12 lg:col-span-3 space-y-3">
                        <Panel title="Infrastructure" icon={<Server size={12} />}>
                          <div className="space-y-3">
                            {[{ n: "EU-WEST-1", v: isTraining ? 88 : 0 }, { n: "US-EAST-2", v: isTraining ? 74 : 0 }].map((w) => (
                              <div key={w.n}>
                                <div className="flex justify-between text-[9px] font-mono mb-1 uppercase">
                                  <span className="text-white/60">{w.n}</span>
                                  <span className="text-neon-cyan">{w.v}%</span>
                                </div>
                                <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                                  <motion.div animate={{ width: `${w.v}%` }} className="h-full bg-neon-cyan" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </Panel>
                        <div className="glass rounded-2xl p-4 border-white/5 h-[155px] overflow-hidden">
                           <div className="flex items-center gap-2 mb-3">
                              <Shield size={12} className="text-emerald-400" />
                              <span className="text-[9px] font-mono text-muted-foreground uppercase">Safety Logs</span>
                           </div>
                           <div className="space-y-1.5 opacity-50">
                              {logs.slice(0, 4).map((l, i) => (
                                <div key={i} className="text-[9px] font-mono truncate">{`> ${l}`}</div>
                              ))}
                           </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "config" && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <Panel title="Cluster Config" icon={<Settings size={12} />}>
                        <div className="space-y-3">
                           <ConfigRow k="Orchestrator" v="Kubernetes_v1.28" />
                           <ConfigRow k="Compute Pool" v="H100_HIGH_MEMORY" />
                           <ConfigRow k="Interconnect" v="NVLINK_GEN4" />
                           <ConfigRow k="Auto-Scale" v="ENABLED" />
                        </div>
                      </Panel>
                      <Panel title="Runtime Specs" icon={<Sliders size={12} />}>
                        <div className="space-y-3">
                           <ConfigRow k="Base Model" v="Llama-3-70B" />
                           <ConfigRow k="Precision" v="BFLOAT16" />
                           <ConfigRow k="Flash Attention" v="v2.5.4" />
                           <ConfigRow k="Checkpointing" v="60_MIN_INTERVAL" />
                        </div>
                      </Panel>
                    </div>
                  )}

                  {activeTab === "logs" && (
                    <div className="h-full glass rounded-2xl p-5 font-mono text-[10px] overflow-y-auto space-y-1.5 custom-scrollbar bg-black/20">
                      {logs.map((log, i) => (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={i} className="flex gap-3">
                          <span className="text-white/20">[{new Date().toLocaleTimeString()}]</span>
                          <span className={log.includes("TRAINING") ? "text-neon-cyan" : "text-white/60"}>
                            {`$ fluxscael exec --cmd ${log}`}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>


          {/* Decorative background blur */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-neon-purple/10 blur-[100px] -z-10" />
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-neon-blue/10 blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
}


function Panel({ title, children, badge, icon }: { title: string; children: React.ReactNode; badge?: string; icon?: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-5 border-white/5 hover:border-white/10 transition-colors">
      <div className="flex items-center justify-between mb-4">
        <h4 className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
          {icon && <span className="p-1.5 bg-white/5 rounded-md">{icon}</span>}
          {title}
        </h4>
        {badge && (
          <span className="text-[9px] font-mono text-neon-cyan bg-neon-cyan/10 px-2 py-0.5 rounded border border-neon-cyan/20">
            {badge}
          </span>
        )}
      </div>
      {children}
    </div>
  );
}

function ConfigRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between py-2 text-[11px] border-b border-white/5 last:border-0">
      <span className="text-muted-foreground font-sans">{k}</span>
      <span className="font-mono text-white/90">{v}</span>
    </div>
  );
}

function MetricCard({ label, value, unit, trend, icon }: { label: string; value: string; unit: string; trend: string; icon: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-5 border-white/5 hover:bg-white/5 transition-all">
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</p>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="font-display italic text-3xl font-bold text-white leading-none">{value}</span>
        <span className="text-xs text-muted-foreground font-mono">{unit}</span>
      </div>
      <div className="mt-2 text-[10px] font-mono text-emerald-400">
        <span className="inline-block mr-1">▲</span> {trend}
      </div>
    </div>
  );
}

function LossChart() {
  const points = Array.from({ length: 60 }, (_, i) => {
    const x = i * (500 / 59);
    const y = 120 - Math.exp(-i / 15) * 80 - Math.sin(i * 0.4) * 5;
    return `${x},${y}`;
  }).join(" ");
  
  return (
    <div className="w-full h-full">
      <svg viewBox="0 0 500 150" className="w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lossGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--c-blue)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="var(--c-blue)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <motion.polyline 
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          points={points} 
          fill="none" 
          stroke="var(--c-blue)" 
          strokeWidth="2" 
        />
        <motion.path 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          d={`M 0 150 L ${points} L 500 150 Z`} 
          fill="url(#lossGradient)" 
        />
      </svg>
    </div>
  );
}

function ClusterGraph() {
  const nodes = [
    { x: 50, y: 50 }, { x: 50, y: 120 }, { x: 50, y: 190 },
    { x: 200, y: 85 }, { x: 200, y: 155 },
    { x: 350, y: 50 }, { x: 350, y: 120 }, { x: 350, y: 190 },
  ];
  const edges: [number, number][] = [[0,3],[1,3],[1,4],[2,4],[3,5],[3,6],[4,6],[4,7]];
  
  return (
    <svg viewBox="0 0 400 240" className="w-full h-full p-4">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      {edges.map(([a,b], i) => (
        <motion.line 
          key={i} 
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="var(--c-purple)" 
          strokeWidth="1" 
        />
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <motion.circle 
            animate={{ r: [12, 14, 12], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
            cx={n.x} cy={n.y} r="14" fill="var(--c-cyan)" 
          />
          <circle cx={n.x} cy={n.y} r="5" fill="var(--c-cyan)" filter="url(#glow)" />
        </g>
      ))}
    </svg>
  );
}

