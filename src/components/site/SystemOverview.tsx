import { motion } from "framer-motion";

const proof = [
  { val: "3.2×", label: "faster than on-prem", color: "#E95D61" },
  { val: "68%",  label: "lower cost per epoch", color: "#0E31F6" },
  { val: "45s",  label: "avg cluster spin-up",  color: "#973BF6" },
  { val: "14",   label: "global regions",        color: "#2E1E9E" },
];

export function SystemOverview() {
  return (
    <section id="why-fluxscael" className="relative py-28 overflow-hidden">
      {/* Background ambient */}
      <div className="absolute inset-0 grid-bg opacity-5" />
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(46,30,158,0.08),transparent_70%)] pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(233,93,97,0.06),transparent_70%)] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">

        {/* ── HEADER ── */}
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] mb-5"
              style={{ color: "#0E31F6" }}
            >
              <span className="h-px w-8 inline-block" style={{ backgroundColor: "#0E31F6" }} />
              Why FluxScael
              <span className="h-px w-8 inline-block" style={{ backgroundColor: "#0E31F6" }} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-ultra text-5xl md:text-7xl text-white leading-[1.0] tracking-tight"
            >
              What makes us<br />
              <span style={{ color: "#E95D61" }}>different.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 lg:pb-2"
          >
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              FluxScael isn’t just another AI infrastructure platform — it’s a rethinking of how large-scale AI training should work: simpler, faster, and built as one unified system from the ground up.
            </p>
          </motion.div>
        </div>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 auto-rows-auto gap-6 mb-14">
          
          {/* CARD 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:row-span-2 relative border border-dashed border-white/20 rounded-xl overflow-hidden bg-[#2E1E9E] min-h-[280px] flex flex-col justify-between group"
          >
            <CornerPlusIcons />
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <img
              src="/hardware native.png"
              alt="Hardware Native Performance"
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
            />
            <div className="relative z-10 flex flex-col h-full justify-between p-6">
               <div className="h-12 w-12 rounded-2xl flex items-center justify-center border mb-6 bg-white border-black/10 shadow-sm group-hover:scale-110 transition-transform duration-500 p-2">
                 <img src="/hardware native icon.png" alt="" className="h-full w-full object-contain" />
               </div>
               <div>
                 <h3 className="text-3xl md:text-4xl font-ultra italic text-white uppercase tracking-tight mb-3">01. A Truly<br/>Unified AI System</h3>
                 <p className="text-white/80 text-base font-light leading-relaxed max-w-xl">Instead of relying on multiple disconnected tools, FluxScael brings training, orchestration, and monitoring into one seamless environment.</p>
               </div>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 lg:row-span-1 relative border border-dashed border-white/20 rounded-xl overflow-hidden bg-[#0D0D1A] min-h-[180px] flex flex-col justify-center group hover:bg-[#111122] transition-colors"
          >
            <CornerPlusIcons />
            <img
              src="/no vendor lock-in.png"
              alt="No Vendor Lock-In"
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
            />
            <div className="relative z-10 p-6">
               <div className="h-10 w-10 rounded-xl flex items-center justify-center border mb-4 bg-white border-black/10 shadow-sm group-hover:scale-110 transition-transform duration-500 p-1.5">
                 <img src="/no vendor lock-in icon.png" alt="" className="h-full w-full object-contain" />
               </div>
               <h3 className="text-xl font-ultra italic text-white uppercase tracking-tight mb-2">02. Built for Real AI Workflows</h3>
               <p className="text-white/50 text-xs font-light leading-relaxed">We design around how AI teams actually work — from experimentation to large-scale training — not around traditional infrastructure limitations.</p>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 lg:row-span-1 relative border border-dashed border-white/30 rounded-xl overflow-hidden bg-[#E95D61] min-h-[180px] flex flex-col justify-center group"
          >
            <CornerPlusIcons />
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
            </div>
            <img
              src="/45-second provisioning.png"
              alt="45-Second Provisioning"
              className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700"
            />
            <div className="relative z-10 p-6">
               <div className="h-10 w-10 rounded-xl flex items-center justify-center border mb-4 bg-white border-black/10 shadow-sm group-hover:scale-110 transition-transform duration-500 p-1.5">
                 <img src="/45-second provisioning icon.png" alt="" className="h-full w-full object-contain" />
               </div>
               <h3 className="text-xl font-ultra italic text-white uppercase tracking-tight mb-2">03. Less Infra, More Innovation</h3>
               <p className="text-white/90 text-xs font-light leading-relaxed">We remove the complexity of managing distributed systems so teams can focus fully on building, testing, and improving AI models.</p>
            </div>
          </motion.div>

          {/* CARD 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 lg:row-span-1 relative border border-dashed border-white/20 rounded-xl overflow-hidden bg-[#0D0D1A] min-h-[160px] flex flex-col justify-center group hover:bg-[#111122] transition-colors"
          >
            <CornerPlusIcons />
            <img
              src="/fault - tolerant by design.png"
              alt="Fault-Tolerant by Design"
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700"
            />
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-start p-6">
               <div className="h-10 w-10 shrink-0 rounded-xl flex items-center justify-center border bg-white border-black/10 shadow-sm group-hover:rotate-12 transition-transform duration-500 p-1.5">
                 <img src="/fault - tolerant by design icon.png" alt="" className="h-full w-full object-contain" />
               </div>
               <div>
                 <h3 className="text-xl font-ultra italic text-white uppercase tracking-tight mb-2">04. Designed for Scale Without Friction</h3>
                 <p className="text-white/50 text-xs font-light leading-relaxed">As workloads grow, FluxScael expands naturally without requiring system redesigns, migrations, or operational disruptions.</p>
               </div>
            </div>
          </motion.div>

          {/* CARD 5 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-3 lg:row-span-1 relative border border-dashed border-white/30 rounded-xl overflow-hidden bg-[#973BF6] min-h-[160px] flex flex-col justify-center group"
          >
            <CornerPlusIcons />
            <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <img
              src="/SOC2 + VPC isolation.png"
              alt="SOC2 + VPC Isolation"
              className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-700"
            />
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 items-start p-6">
               <div className="h-10 w-10 shrink-0 rounded-xl flex items-center justify-center border bg-white border-black/10 shadow-sm group-hover:-rotate-12 transition-transform duration-500 p-1.5">
                 <img src="/SOC2 + VPC isolation icon.png" alt="" className="h-full w-full object-contain" />
               </div>
               <div>
                 <h3 className="text-xl font-ultra italic text-white uppercase tracking-tight mb-2">05. Performance-First by Default</h3>
                 <p className="text-white/90 text-xs font-light leading-relaxed">Every layer of the platform is engineered to maximize speed, efficiency, and compute utilization for demanding AI training tasks.</p>
               </div>
            </div>
          </motion.div>

        </div>

        {/* ── PROOF STRIP ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] bg-[#0D0D1A] border border-white/5 px-10 py-7 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {proof.map((p, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <p className="font-ultra text-4xl tracking-tighter text-white mb-1" style={{ color: p.color }}>{p.val}</p>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/30">{p.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`${align === "center" ? "text-center max-w-3xl mx-auto" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 text-xs font-mono text-neon-cyan uppercase tracking-widest mb-4"
      >
        <span className="h-px w-8 bg-neon-cyan/50" />
        {eyebrow}
        {align === "center" && <span className="h-px w-8 bg-neon-cyan/50" />}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-ultra text-4xl md:text-6xl text-white leading-[1.1] tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-muted-foreground text-lg leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className={`text-white/50 size-5 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);

const CornerPlusIcons = () => (
  <>
    <PlusIcon className="absolute -top-[10px] -left-[10px] z-20" />
    <PlusIcon className="absolute -top-[10px] -right-[10px] z-20" />
    <PlusIcon className="absolute -bottom-[10px] -left-[10px] z-20" />
    <PlusIcon className="absolute -bottom-[10px] -right-[10px] z-20" />
  </>
);
