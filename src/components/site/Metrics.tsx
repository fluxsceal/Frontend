import { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./SystemOverview";

const metrics = [
  { label: "Training Speed", value: 8.4, suffix: "×", desc: "faster than baseline DDP" },
  { label: "Cost Efficiency", value: 62, suffix: "%", desc: "lower cost per epoch" },
  { label: "GPU Utilization", value: 94, suffix: "%", desc: "average across cluster" },
  { label: "Models Trained", value: 1240, suffix: "+", desc: "production checkpoints" },
];

export function Metrics() {
  return (
    <section className="relative py-28">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -left-32 top-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(14,49,246,0.10),transparent_70%)]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(233,93,97,0.08),transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader eyebrow="Performance" title="Numbers that compound." />
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="glass-strong rounded-3xl p-7 relative overflow-hidden border border-white/10 hover:border-white/15 transition">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-neon-purple/20 blur-3xl" />
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{m.label}</p>
              <div className="mt-3 font-display text-5xl font-bold text-gradient">
                <Counter to={m.value} />{m.suffix}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to }: { to: number }) {
  const [v, setV] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let started = false;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const start = performance.now();
          const dur = 1400;
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / dur);
            setV(to * (1 - Math.pow(1 - t, 3)));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [to]);
  const display = to >= 100 ? Math.round(v) : v.toFixed(1);
  return <span ref={ref}>{display}</span>;
}
