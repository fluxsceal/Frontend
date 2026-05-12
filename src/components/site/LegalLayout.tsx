export function LegalLayout({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <div className="pt-32 pb-16 mx-auto max-w-3xl px-6">
      <div className="text-center mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-3">/ Legal</p>
        <h1 className="font-display text-5xl font-bold tracking-tighter">{title}</h1>
        {subtitle && <p className="mt-3 text-sm text-muted-foreground font-mono">{subtitle}</p>}
      </div>
      <div className="space-y-8">{children}</div>
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl p-7">
      <h2 className="font-display text-xl font-semibold">{title}</h2>
      <div className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </div>
  );
}
