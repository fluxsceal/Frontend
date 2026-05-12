import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ShieldCheck } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:max-w-md z-[100]"
        >
          <div className="glass-strong border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden group">
            {/* Background glow */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl pointer-events-none group-hover:bg-neon-purple/20 transition-colors duration-700" />
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="mt-1 h-10 w-10 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-cyan">
                <Cookie size={20} />
              </div>
              
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-ultra text-sm uppercase tracking-wider text-white italic">Cookie Preferences</h3>
                  <button 
                    onClick={() => setIsVisible(false)}
                    className="text-white/20 hover:text-white transition-colors"
                  >
                    <X size={16} />
                  </button>
                </div>
                
                <p className="text-xs text-white/50 leading-relaxed mb-4">
                  We use cookies to optimize compute allocation and improve your orchestration experience. By continuing, you agree to our <Link to="/privacy" className="text-neon-cyan hover:underline">Privacy Policy</Link>.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptCookies}
                    className="flex-1 h-10 rounded-lg bg-white text-[#0A0A1B] font-ultra text-[10px] uppercase tracking-widest hover:bg-neutral-200 transition-colors"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={() => setIsVisible(false)}
                    className="flex-1 h-10 rounded-lg border border-white/10 text-white font-ultra text-[10px] uppercase tracking-widest hover:bg-white/5 transition-colors"
                  >
                    Settings
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 opacity-30 group-hover:opacity-60 transition-opacity">
              <ShieldCheck size={10} className="text-neon-cyan" />
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-white">SOC2 Compliant Platform</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
