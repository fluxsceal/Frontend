export function CTA() {
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-[#050510]/95 px-6 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_top,oklch(0.55_0.27_270/0.55),transparent_70%)]" />
            <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_bottom,oklch(0.70_0.18_22/0.7),transparent_70%)]" />
          </div>

          <div className="relative grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1.1fr)] items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-mono uppercase tracking-[0.2em] text-[#0E31F6]">
                <span className="h-px w-4 bg-[#0E31F6]" />
                Ready to ship your next run?
              </p>
              <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl tracking-tight text-white">
                Launch a distributed<br />
                training job in{" "}
                <span className="text-gradient">under 90 seconds.</span>
              </h2>
              <p className="mt-5 max-w-xl text-sm text-white/65">
                Connect your existing cloud, point FluxScael at your repo, and watch the TensorGrid™ orchestrate GPUs
                across regions. No bespoke YAML, no cluster babysitting.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2E1E9E] px-7 py-3 text-sm font-medium text-white shadow-[0_22px_60px_-28px_rgba(46,30,158,1)] transition hover:opacity-90"
                >
                  Start free pilot
                  <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/70">3 clusters · 30 days</span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Talk to an engineer
                </a>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-[11px] text-white/50">
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#0E31F6]" />
                  NCCL-optimized out of the box
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#E95D61]" />
                  SOC2-ready control plane
                </span>
                <span className="inline-flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-[#973BF6]" />
                  Supports PyTorch · JAX · TensorFlow
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-10 rounded-[2.5rem] bg-[conic-gradient(from_180deg_at_50%_0%,rgba(14,49,246,0.1),rgba(151,59,246,0.28),rgba(233,93,97,0.25),transparent_65%)] opacity-80 blur-3xl" />
              <div className="relative rounded-[1.8rem] border border-white/12 bg-black/70 p-5 shadow-[0_26px_60px_-34px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">
                      Upcoming launch window
                    </p>
                    <p className="mt-1 text-sm text-white">
                      us-east-cuda · 256× H100
                    </p>
                  </div>
                  <div className="rounded-full bg-[#0E31F6]/90 px-3 py-1 text-[11px] font-medium text-white shadow-[0_10px_30px_-18px_rgba(14,49,246,1)]">
                    T-minus 00:45s
                  </div>
                </div>

                <div className="mt-6 space-y-3 text-xs text-white/70 font-mono">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-white/60">Topology mapping</span>
                    <div className="relative h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-3/4 rounded-full bg-[#973BF6]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-white/60">Shard placement</span>
                    <div className="relative h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-2/3 rounded-full bg-[#0E31F6]" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-white/60">Checkpoint mesh</span>
                    <div className="relative h-1.5 w-40 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-1/2 rounded-full bg-[#E95D61]" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between text-[11px] text-white/55">
                  <span>Failure domain: &lt; 8 nodes</span>
                  <span>Estimated speedup: 13.4×</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
