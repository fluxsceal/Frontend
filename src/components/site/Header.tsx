import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/#features", label: "Features" },
  { to: "/#why-fluxscael", label: "Why Us" },
  { to: "/#pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mt-4">
        <nav className="glass-strong rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src="/Logo.png" alt="FluxScael Logo" className="h-14 w-auto hover:opacity-80 transition-opacity" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link to="/product" className="relative text-sm font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-neon hover:opacity-90 transition">
              TensorGrid™
            </Link>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="md:hidden glass-strong rounded-2xl mt-2 p-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-sm text-muted-foreground" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
