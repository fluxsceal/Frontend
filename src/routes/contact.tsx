import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Send, ChevronLeft, ChevronRight, Facebook, Twitter, Youtube } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollInterval = useRef<NodeJS.Timeout | null>(null);

  const scrollToNext = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = 400;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const nextScroll = container.scrollLeft + cardWidth;
      
      if (nextScroll >= maxScroll) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
        setActiveFaq(0);
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
        const newIndex = Math.round((container.scrollLeft + cardWidth) / cardWidth);
        setActiveFaq(Math.min(newIndex, faqs.length - 1));
      }
    }
  };

  const scrollToPrev = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = 400;
      container.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      const newIndex = Math.max(0, Math.round((container.scrollLeft - cardWidth) / cardWidth));
      setActiveFaq(newIndex);
    }
  };

  useEffect(() => {
    autoScrollInterval.current = setInterval(scrollToNext, 5000);
    return () => {
      if (autoScrollInterval.current) clearInterval(autoScrollInterval.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const container = scrollRef.current;
        const cardWidth = 400;
        const scrollPosition = container.scrollLeft;
        const newIndex = Math.round(scrollPosition / cardWidth);
        setActiveFaq(newIndex);
      }
    };

    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleFaqClick = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = 400;
      scrollRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
      setActiveFaq(index);
    }
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current);
      autoScrollInterval.current = setInterval(scrollToNext, 5000);
    }
  };

  const cardColors = [
    { bg: 'from-[#2E1E9E] via-[#4A3FBF] to-[#6B5FDF]', border: 'border-[#2E1E9E]', topBorder: 'bg-[#2E1E9E]' },
    { bg: 'from-[#0E31F6] via-[#3D5FF7] to-[#6B8DF9]', border: 'border-[#0E31F6]', topBorder: 'bg-[#0E31F6]' },
    { bg: 'from-[#973BF6] via-[#B066F8] to-[#C991FA]', border: 'border-[#973BF6]', topBorder: 'bg-[#973BF6]' },
    { bg: 'from-[#E95D61] via-[#ED8185] to-[#F1A5A8]', border: 'border-[#E95D61]', topBorder: 'bg-[#E95D61]' },
  ];
  return (
    <div className="pt-32 pb-16 mx-auto max-w-7xl px-6">
      {/* ── FAQ ── */}
      <div className="mb-24">
        <div className="flex items-start justify-between gap-8 mb-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-[#2E1E9E] text-white text-[10px] font-mono uppercase tracking-widest border border-[#973BF6]/30">
                FAQ
              </span>
              <span className="px-3 py-1 rounded-full bg-[#0E31F6]/20 text-[#00E5FF] text-[10px] font-mono uppercase tracking-widest border border-[#0E31F6]/30">
                ANSWERS
              </span>
            </div>
            <h2 className="font-ultra text-5xl md:text-7xl text-white tracking-tight leading-[1.0] mb-2">
              Frequently
            </h2>
            <h2 className="font-ultra text-5xl md:text-7xl tracking-tight leading-[1.0]">
              <span className="text-[#973BF6] italic">Asked</span>{" "}
              <span className="text-[#00E5FF] italic">Questions</span>
            </h2>
          </div>
          <div className="flex-1 max-w-md">
            <p className="text-white/50 text-base leading-relaxed mb-6">
              Find answers to common questions about our platform, engineering services, and technical expertise.
            </p>
            <div className="flex gap-3">
              <button
                onClick={scrollToPrev}
                className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#973BF6]/50 transition-all"
              >
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button
                onClick={scrollToNext}
                className="h-12 w-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#973BF6]/50 transition-all"
              >
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={scrollRef}
          id="faq-scroll"
          className="flex gap-6 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {faqs.map((faq, i) => {
            const isActive = activeFaq === i;
            const colorScheme = cardColors[i % 4];
            
            return (
              <div
                key={i}
                onClick={() => handleFaqClick(i)}
                className={`snap-start shrink-0 w-[380px] rounded-2xl border transition-all duration-500 cursor-pointer ${
                  isActive
                    ? `bg-gradient-to-br ${colorScheme.bg} ${colorScheme.border} shadow-2xl scale-105`
                    : 'bg-[#0D0D1A]/80 border-white/5 hover:border-white/20'
                }`}
              >
                <div className={`h-1 rounded-t-2xl ${isActive ? colorScheme.topBorder : 'bg-transparent'}`} />
                <div className="p-8">
                  <div className="h-full flex flex-col">
                    <h3 className="font-ultra italic text-xl text-white tracking-tight leading-tight mb-4">
                      {faq.q}
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className={`pt-4 border-t ${
                        isActive ? 'border-white/20' : 'border-transparent'
                      }`}>
                        <p className="text-sm leading-relaxed text-white/90">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                    {!isActive && (
                      <div className="mt-4 text-white/40 text-xs font-mono uppercase tracking-widest">
                        Scroll to view answer
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center mt-10 text-white/30 text-sm">
          Still have questions?{" "}
          <a href="mailto:info@fluxscael.com" className="text-[#0E31F6] hover:text-[#973BF6] transition-colors underline underline-offset-4">
            Email us directly
          </a>
        </p>
      </div>

      {/* ── CONTACT FORM ── */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-neon-cyan mb-3">/ Contact</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold tracking-tighter">
          Let's <span className="text-gradient">build it</span> together.
        </h1>
        <p className="mt-5 text-muted-foreground">
          Whether you're scaling to 10k GPUs or launching your first training job, we'd love to hear from you.
        </p>
      </div>

      <div className="mt-16 grid md:grid-cols-5 gap-6">
        <div className="md:col-span-3 glass-strong rounded-2xl p-8">
          {sent ? (
            <div className="text-center py-16">
              <div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center">
                <Send size={24} className="text-white" />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">Transmission received.</h3>
              <p className="mt-2 text-sm text-muted-foreground">An engineer will be in touch within 24 hours.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-5"
            >
              <Field label="Name" id="name"><input id="name" required className="w-full bg-transparent border-b border-border focus:border-neon-purple outline-none py-2 text-sm" /></Field>
              <Field label="Email" id="email"><input id="email" type="email" required className="w-full bg-transparent border-b border-border focus:border-neon-purple outline-none py-2 text-sm" /></Field>
              <Field label="Company" id="company"><input id="company" className="w-full bg-transparent border-b border-border focus:border-neon-purple outline-none py-2 text-sm" /></Field>
              <Field label="Message" id="message"><textarea id="message" rows={5} required className="w-full bg-transparent border-b border-border focus:border-neon-purple outline-none py-2 text-sm resize-none" /></Field>
              <button type="submit" className="w-full py-3.5 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium shadow-neon hover:shadow-glow transition flex items-center justify-center gap-2">
                Send Message <Send size={16} />
              </button>
            </form>
          )}
        </div>

        <div className="md:col-span-2 space-y-4">
          <InfoBlock icon={Mail} label="Email" value="info@fluxscael.com" />
          <InfoBlock icon={Phone} label="Phone" value="+1 (415) 731-6408" />
          <InfoBlock icon={MapPin} label="HQ" value="655 Montgomery Street, San Francisco, CA 94111, USA" />
          <div className="glass rounded-xl p-5 flex flex-col gap-4">
            <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Follow Us</p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, url: "https://www.facebook.com/Fluxscael/" },
                { 
                  Icon: () => (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
                    </svg>
                  ), 
                  url: "https://x.com/Fluxscael" 
                },
                { 
                  Icon: () => (
                    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.965 1.406-5.965s-.359-.718-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                    </svg>
                  ), 
                  url: "https://www.pinterest.com/Fluxscael/" 
                },
                { Icon: Youtube, url: "https://www.youtube.com/@Fluxscael" },
              ].map(({ Icon, url }, i) => (
                <a 
                  key={i} 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-purple/30 flex items-center justify-center hover:bg-neon-purple/20 transition-all text-neon-cyan"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <div className="glass-strong rounded-2xl overflow-hidden h-64 relative">
            <div className="absolute inset-0 grid-bg opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,oklch(0.62_0.27_265/0.4),transparent_60%)]" />
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-neon-purple animate-ping opacity-50" />
                <div className="relative h-4 w-4 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple shadow-neon" />
              </div>
            </div>
            <div className="absolute bottom-3 left-3 font-mono text-[10px] text-muted-foreground">LAT 37.789 · LON -122.401</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const faqs = [
  {
    q: "How fast can I spin up a GPU cluster?",
    a: "FluxScael provisions H100 and A100 clusters in under 45 seconds on average. Our hardware-native scheduler pre-warms capacity across all 14 global regions so your job starts the moment you submit it — no cold-start queues.",
  },
  {
    q: "Which cloud providers do you support?",
    a: "FluxScael is cloud-agnostic. You can run workloads on AWS, GCP, Azure, or your own on-prem hardware. We handle topology mapping and networking across all of them from a single control plane.",
  },
  {
    q: "What happens if a node fails mid-training?",
    a: "Our fault-tolerant runtime automatically detects node failures, restores from the latest live checkpoint, and re-shards the job across healthy nodes — all without manual intervention. Your training run continues with minimal disruption.",
  },
  {
    q: "Is FluxScael compliant with enterprise security standards?",
    a: "Yes. FluxScael is SOC 2 Type II certified and supports full VPC isolation, private networking, and HIPAA-ready infrastructure. Every workload runs in an isolated environment with complete audit trails.",
  },
  {
    q: "How is pricing calculated?",
    a: "You pay only for the GPU-hours you consume. There are no seat licenses or platform fees on the Starter and Growth tiers. Enterprise plans include reserved capacity, SLA guarantees, and dedicated support — reach out for a custom quote.",
  },
  {
    q: "Can I bring my own model weights and datasets?",
    a: "Absolutely. FluxScael never takes ownership of your data or models. You can mount private S3 buckets, GCS buckets, or NFS volumes directly into your training environment. Data never leaves your VPC unless you explicitly configure it to.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes — new accounts receive $500 in free compute credits, enough to run a full fine-tuning job on a 4×H100 cluster. No credit card required to start.",
  },
];

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{label}</label>
      <div className="mt-1">{children}</div>
    </div>
  );
}

function InfoBlock({ icon: Icon, label, value }: { icon: React.ComponentType<{ size?: number; className?: string }>; label: string; value: string }) {
  return (
    <div className="glass rounded-xl p-5 flex items-center gap-4">
      <div className="h-11 w-11 rounded-lg bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 border border-neon-purple/30 flex items-center justify-center shrink-0">
        <Icon size={18} className="text-neon-cyan" />
      </div>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{label}</p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  );
}
