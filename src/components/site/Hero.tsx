import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(46,30,158,0.15),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-[#0E31F6] mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[#0E31F6] opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0E31F6]" />
              </span>
              Enterprise v2.4 · Global GPU Cluster
            </motion.div>

            <h1 className="leading-[1.05] font-ultra text-5xl md:text-7xl text-white tracking-tight">
              Train AI Models at Massive Scale with
              <br />
              <span style={{ color: "#E95D61" }}>Intelligent Distributed Compute.</span>
            </h1>
          </div>

          <div className="lg:col-span-5 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
            >
              <p className="text-base text-muted-foreground leading-relaxed max-w-sm">
              FluxScael is building the next generation of AI training infrastructure designed to simplify large-scale model development, accelerate compute-intensive workflows, and help organizations scale AI innovation through intelligent distributed systems.

              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.22 }}
              className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3 max-w-sm"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/25 hover:bg-white/10"
              >
                Contact
                <ArrowUpRight size={16} aria-hidden />
              </Link>
              <Link
                to="/product"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-lg transition hover:opacity-90"
                style={{
                  backgroundColor: "#2E1E9E",
                  boxShadow: "0 10px 28px -8px rgba(46,30,158,0.55)",
                }}
              >
                FluxScael Platform
                <ArrowUpRight size={16} aria-hidden />
              </Link>
            </motion.div>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[420px]">

          {/* LEFT: Large image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-5 relative rounded-3xl overflow-hidden bg-[#0D0D1A] border border-white/5 group"
          >
            <img
              src="/Hero.png"
              alt="FluxScael AI Core"
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <span
                className="px-5 py-2 rounded-full text-xs font-bold text-white uppercase tracking-widest backdrop-blur-xl border border-white/20"
                style={{ backgroundColor: 'rgba(46,30,158,0.7)' }}
              >
                AI Compute
              </span>
            </div>
          </motion.div>

          {/* MIDDLE: Stacked cards */}
          <div className="md:col-span-4 flex flex-col gap-4">

            {/* Top metric — PRIMARY Indigo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-[0.45] rounded-3xl p-7 flex flex-col justify-center relative overflow-hidden"
              style={{ backgroundColor: '#2E1E9E' }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(14,49,246,0.4)' }} />
              <span className="font-ultra text-5xl text-white tracking-tighter leading-none relative z-10">10K+</span>
              <p className="text-sm font-bold text-white/70 uppercase tracking-widest mt-2 relative z-10">H100 GPU Hours</p>
            </motion.div>

            {/* Bottom social — PRIMARY Electric Blue */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex-[0.55] rounded-3xl p-7 flex flex-col justify-center relative overflow-hidden"
              style={{ backgroundColor: '#0E31F6' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_60%)]" />
              <div className="relative z-10">
                <h4 className="text-lg font-bold text-white leading-snug uppercase italic">
                  We have the best<br />GPU infrastructure
                </h4>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Tall abstract card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="md:col-span-3 rounded-3xl bg-[#0D0D1A] border border-white/10 overflow-hidden relative flex flex-col justify-between p-7 group"
          >
            {/* Geometric shapes */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Large Indigo triangle */}
              <svg className="absolute top-10 left-1/2 -translate-x-1/2 w-36 h-36 opacity-80" viewBox="0 0 100 100">
                <polygon points="50,8 95,88 5,88" fill="#2E1E9E" />
              </svg>
              {/* Coral plus — SECONDARY accent */}
              <svg
                className="absolute top-8 right-6 w-14 h-14 opacity-90 group-hover:rotate-90 transition-transform duration-700"
                viewBox="0 0 100 100"
                style={{ color: '#E95D61' }}
              >
                <rect x="43" y="8" width="14" height="84" fill="currentColor" rx="7" />
                <rect x="8" y="43" width="84" height="14" fill="currentColor" rx="7" />
              </svg>
              {/* Purple dot — SECONDARY accent */}
              <div
                className="absolute bottom-28 left-7 w-7 h-7 rounded-full opacity-70 animate-pulse"
                style={{ backgroundColor: '#973BF6' }}
              />
            </div>

            <div className="relative z-10">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                <Zap size={18} style={{ color: '#973BF6' }} />
              </div>
              <h3 className="text-2xl font-ultra italic text-white uppercase leading-[0.9] tracking-tighter">
                Ready to<br />Launch<br />Your Cluster?
              </h3>
            </div>

            {/* CTA — SECONDARY Coral */}
            <motion.a
              href="#dashboard"
              whileHover={{ scale: 0.97 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 w-full h-14 rounded-full text-white flex items-center justify-center gap-2 font-ultra text-lg tracking-tighter uppercase italic transition-all"
              style={{ backgroundColor: '#E95D61', boxShadow: '0 12px 32px -8px rgba(233,93,97,0.5)' }}
            >
              Try Free
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
