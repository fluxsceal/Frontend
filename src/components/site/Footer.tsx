import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Cpu, Network, Facebook, Youtube, Twitter } from "lucide-react";

export function Footer() {
  const clusters = [
    { label: "us-east-cuda", load: "72%", status: "Healthy" },
    { label: "eu-west-vllm", load: "54%", status: "Scaling" },
    { label: "ap-south-gpu", load: "31%", status: "Idle" },
  ];

  return (
    <footer className="relative mt-24 px-4 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Status strip */}
        <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-black/40 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#0E31F6]">
            <span className="h-px w-6 bg-[#0E31F6]" />
            Live Cluster Telemetry
          </div>
          <div className="flex flex-wrap gap-2">
            {clusters.map((cluster) => (
              <div
                key={cluster.label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/80"
              >
                <span className="inline-flex h-2 w-2 rounded-full bg-[#0E31F6]" />
                <span className="font-mono">{cluster.label}</span>
                <span className="text-white/50">·</span>
                <span>{cluster.load}</span>
                <span className="text-white/50">·</span>
                <span className="text-[#E95D61]">{cluster.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main footer card */}
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-[#05050C]/95 p-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.4fr)] lg:p-8">
          {/* Left: brand + CTA */}
          <div className="flex flex-col justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/60 px-4 py-2">
                <Cpu size={16} className="text-[#0E31F6]" />
                <span className="text-xs font-mono uppercase tracking-[0.18em] text-white/70">
                  FluxScael TensorGrid™
                </span>
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl tracking-tight text-white">
                Scale training<br />without losing control.
              </h2>
              <p className="mt-4 max-w-md text-sm text-white/60">
                FluxScael is an AI infrastructure platform that unifies distributed training and compute orchestration, helping teams build and scale models faster with less complexity and maximum efficiency.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2E1E9E] px-6 py-2.5 text-sm font-medium text-white shadow-[0_18px_45px_-20px_rgba(46,30,158,0.9)] transition hover:opacity-90"
                >
                  Talk to an engineer
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  to="/product"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/85 transition hover:bg-white/10"
                >
                  Explore product
                </Link>
              </div>
              <p className="text-[11px] text-white/45">
                Zero-commitment demo · No credit card required.
              </p>
            </div>
          </div>

          {/* Right: navigation + socials */}
          <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/50">Product</p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  <li>
                    <Link to="/product" className="hover:text-[#973BF6]">
                      Overview
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="hover:text-[#973BF6]">
                      Pricing
                    </Link>
                  </li>
                  <li>
                    <Link to="/product" className="hover:text-[#973BF6]">
                      TensorGrid™
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/50">Company</p>
                <ul className="mt-3 space-y-2 text-sm text-white/75">
                  <li>
                    <Link to="/contact" className="hover:text-[#973BF6]">
                      Contact
                    </Link>
                  </li>
                  
                  
                  <li>
                    <Link to="/privacy" className="hover:text-[#973BF6]">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="hover:text-[#973BF6]">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.18em] text-white/50">Signal</p>
                <p className="mt-3 text-sm text-white/70">
                  Weekly telemetry on large-scale training, infra incidents, and GPU economics. Straight from the
                  FluxScael control plane.
                </p>
                <div className="mt-4 space-y-1 text-xs text-white/60">
                  <p>Isabella Fernando · Founder &amp; CEO</p>
                  <p>655 Montgomery Street, San Francisco, CA 94111, USA</p>
                  <p>+1 (415) 731-6408 · info@fluxscael.com</p>
                  <a href="https://fluxscael.com" className="text-[#973BF6] hover:text-white transition">
                    fluxscael.com
                  </a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {[
                  { Icon: Facebook, url: "https://www.facebook.com/Fluxscael/" },
                  { 
                    Icon: () => (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
                      </svg>
                    ), 
                    url: "https://x.com/Fluxscael" 
                  },
                  { 
                    Icon: () => (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
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
                    className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-4 py-2 text-xs font-medium text-white/85 transition hover:bg-white/10"
                  >
                    <Icon size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-4 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} FluxScael Systems · All rights reserved.</p>
          <p className="font-mono">
            v2.4.1 · control-plane latency &lt; 120ms · encrypted
          </p>
        </div>
      </div>
    </footer>
  );
}
