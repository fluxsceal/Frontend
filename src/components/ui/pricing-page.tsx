import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Sparkles, Briefcase, Building, Check, Loader2, X, ShieldCheck, Zap, CreditCard, Lock, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// --- PricingCard Component ---
function PricingCard({
  planName,
  description,
  price,
  priceDescription,
  features,
  icon: Icon,
  iconColor,
  isPopular,
  buttonText,
  onSelect
}) {
  const cardStyle = {
    backgroundColor: "hsla(240, 15%, 9%, 1)",
    backgroundImage:
      `radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),` +
      ` radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),` +
      ` radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),` +
      ` radial-gradient(at 0% 64%, ${iconColor}33 0px, transparent 85%),` +
      ` radial-gradient(at 41% 94%, ${iconColor}22 0px, transparent 85%),` +
      ` radial-gradient(at 100% 99%, ${iconColor}44 0px, transparent 85%)`,
    boxShadow: "0px -16px 24px 0px rgba(255, 255, 255, 0.05) inset",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="relative glass-strong border border-white/5 hover:border-white/20 transition-all duration-500 group rounded-[2.5rem] p-8 flex flex-col w-full max-w-[22rem] h-full"
      style={cardStyle}
    >
      {isPopular && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 z-30">
          <span className="bg-gradient-to-r from-[#2E1E9E] to-[#973BF6] text-white text-[10px] font-mono font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl">
            MOST POPULAR
          </span>
        </div>
      )}

      {/* Rotating Border Effect */}
      <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-32 animate-[spin_8s_linear_infinite]"
          style={{ backgroundImage: `linear-gradient(0deg, transparent 0%, ${iconColor} 40%, ${iconColor} 60%, transparent 100%)`, transformOrigin: 'center' }}
        />
        <div className="absolute inset-[1px] bg-[#0A0A1B] rounded-[2.5rem] z-10" />
      </div>

      <div className="relative z-20 flex-grow">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div
              className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center transition-transform group-hover:scale-110 duration-500"
              style={{ color: iconColor }}
            >
              <Icon size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-ultra tracking-tight text-white uppercase italic">
                {planName}
              </h3>
              <p className="text-[10px] font-mono uppercase tracking-widest text-white/40">{description}</p>
            </div>
          </div>
          <div className="h-6 w-6 rounded-full border-2 border-white/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-ultra italic tracking-tighter text-white">
              {price}
            </span>
            <span className="text-sm font-mono text-white/40 uppercase">
              {priceDescription}
            </span>
          </div>
          <p className="text-[10px] text-white/30 mt-2 font-mono uppercase tracking-widest">
            Automatic scaling enabled
          </p>
        </div>

        <ul className="space-y-4 text-sm text-neutral-300">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-4">
              <div
                className="flex items-center justify-center w-5 h-5 rounded-full shrink-0 mt-0.5"
                style={{ backgroundColor: `${iconColor}22`, border: `1px solid ${iconColor}44` }}
              >
                <Check size={12} style={{ color: iconColor }} />
              </div>
              <span className="text-white/70 leading-snug">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 relative z-20">
        <button 
          onClick={() => onSelect({ planName, price, iconColor })}
          className="w-full h-14 rounded-2xl font-ultra uppercase tracking-widest text-xs transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
          style={{ 
            backgroundColor: isPopular ? 'white' : 'transparent',
            color: isPopular ? '#0A0A1B' : 'white',
            border: isPopular ? 'none' : '1px solid rgba(255,255,255,0.1)',
            boxShadow: isPopular ? '0 0 30px rgba(255,255,255,0.1)' : 'none'
          }}
        >
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
}

// --- Main PricingPage Component ---
export default function PricingPage({ plans = [] }) {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [step, setStep] = useState('idle'); // idle, checkout, processing, success
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSelect = (plan) => {
    if (plan.planName === 'Starter' || plan.planName === 'Enterprise') {
      window.location.href = '/contact';
      return;
    }
    
    setSelectedPlan(plan);
    setStep('checkout');
  };

  const handlePayment = () => {
    setStep('processing');
    setTimeout(() => {
      setStep('success');
    }, 2500);
  };

  const modalContent = (
    <AnimatePresence>
      {step !== 'idle' && (
        <div className="fixed inset-0 z-[9999] flex items-start md:items-center justify-center p-4 md:p-6 overflow-y-auto py-10 md:py-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-[#050511]/90 backdrop-blur-xl"
            onClick={() => step === 'success' && setStep('idle')}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-lg glass-strong border border-white/10 rounded-[2.5rem] p-8 md:p-12 text-center overflow-y-auto max-h-[90vh] custom-scrollbar mt-20 md:mt-0 shadow-2xl"
          >
            <div 
              className="absolute top-0 left-0 w-full h-1"
              style={{ backgroundColor: selectedPlan?.iconColor }}
            />

            {step === 'checkout' && (
              <div className="text-left">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-ultra italic text-white uppercase tracking-tight">Checkout</h3>
                  <button onClick={() => setStep('idle')} className="text-white/20 hover:text-white"><X size={20}/></button>
                </div>
                
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-mono text-white/40 uppercase tracking-widest">{selectedPlan?.planName} Plan</span>
                    <span className="text-lg font-ultra italic text-white">{selectedPlan?.price}</span>
                  </div>
                  <p className="text-[10px] text-white/20 font-mono uppercase tracking-[0.2em]">Billed monthly · Automated provisioning</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-mono text-white/40 uppercase tracking-widest mb-2 ml-1">Card Details</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="4242 4242 4242 4242"
                        className="w-full h-14 bg-black/40 border border-white/10 rounded-xl px-12 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-white/20 transition-colors"
                      />
                      <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="MM / YY"
                      className="w-full h-14 bg-black/40 border border-white/10 rounded-xl px-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-white/20 transition-colors"
                    />
                    <input 
                      type="text" 
                      placeholder="CVC"
                      className="w-full h-14 bg-black/40 border border-white/10 rounded-xl px-4 text-sm text-white placeholder:text-white/10 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                </div>

                <button 
                  onClick={handlePayment}
                  className="w-full h-16 rounded-2xl bg-white text-[#0A0A1B] font-ultra uppercase tracking-widest text-xs hover:bg-neutral-200 transition-all mt-10 flex items-center justify-center gap-3 group"
                >
                  <span>Secure Payment</span>
                  <Lock size={14} className="group-hover:scale-110 transition-transform" />
                </button>
                
                <div className="mt-6 flex items-center justify-center gap-2 opacity-20">
                  <ShieldCheck size={12} className="text-white" />
                  <span className="text-[9px] font-mono uppercase tracking-widest text-white">Stripe Verified · AES-256 Encryption</span>
                </div>
              </div>
            )}

            {step === 'processing' && (
              <div className="py-12">
                <div className="relative mx-auto w-24 h-24 mb-8">
                  <Loader2 className="w-full h-full text-white animate-spin opacity-20" />
                  <div 
                    className="absolute inset-0 border-2 border-transparent border-t-current rounded-full animate-spin"
                    style={{ color: selectedPlan?.iconColor }}
                  />
                </div>
                <h3 className="text-2xl font-ultra italic text-white uppercase tracking-tight mb-2">
                  Securing Compute...
                </h3>
                <p className="text-white/40 text-sm font-mono uppercase tracking-widest">
                  Verifying secure payment tunnel
                </p>
              </div>
            )}

            {step === 'success' && (
              <div className="py-12">
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="mx-auto w-24 h-24 rounded-full bg-green-500/10 border border-green-500/50 flex items-center justify-center mb-8"
                >
                  <ShieldCheck className="w-12 h-12 text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-ultra italic text-white uppercase tracking-tight mb-2">
                  Cluster Provisioned
                </h3>
                <p className="text-white/40 text-sm font-mono uppercase tracking-widest mb-10">
                  Professional workspace is now live
                </p>
                
                <button 
                  onClick={() => window.location.href = '/product'}
                  className="w-full h-16 rounded-2xl bg-white text-[#0A0A1B] font-ultra uppercase tracking-widest text-xs hover:bg-neutral-200 transition-colors"
                >
                  Enter Console
                </button>
                
                <button 
                  onClick={() => setStep('idle')}
                  className="mt-6 text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] hover:text-white/40 transition-colors"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  return (
    <div className="w-full py-20 flex flex-col items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-center gap-8 px-6 max-w-7xl">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} onSelect={handleSelect} />
        ))}
      </div>
      {isMounted && createPortal(modalContent, document.body)}
    </div>
  );
}
