import { motion } from "framer-motion";

export function TechBand() {
  const words = ["DISTRIBUTED TRAINING", "GPU ORCHESTRATION", "MODEL PARALLELISM", "INFRASTRUCTURE", "COMPUTE ENGINE"];
  
  return (
    <section className="relative py-14 overflow-hidden bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(46,30,158,0.12),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(233,93,97,0.10),transparent_70%)]" />

      {/* Top slanted band */}
      <motion.div 
        style={{ rotate: -2 }}
        className="relative z-10 flex whitespace-nowrap bg-neon-blue py-6 border-y border-white/20 shadow-[0_18px_70px_-40px_rgba(14,49,246,0.9)]"
      >
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {words.map((w) => (
                <span key={w} className="font-ultra text-4xl md:text-6xl text-white opacity-90">{w}</span>
              ))}
              <span className="text-white opacity-40 text-4xl" aria-hidden>✦</span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom slanted band */}
      <motion.div 
        style={{ rotate: 1 }}
        className="relative z-0 -mt-10 flex whitespace-nowrap bg-neon-purple py-4 border-y border-white/20 shadow-[0_18px_70px_-40px_rgba(151,59,246,0.9)]"
      >
        <motion.div 
          animate={{ x: [-1000, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex gap-12 items-center">
              {words.map((w) => (
                <span key={w} className="font-display italic text-3xl md:text-5xl text-white opacity-80">{w}</span>
              ))}
              <span className="text-white opacity-30 text-3xl" aria-hidden>✦</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
