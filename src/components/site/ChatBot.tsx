import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, User, Sparkles, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "bot";
  text: string;
}

const KNOWLEDGE_BASE = [
  { keywords: ["price", "cost", "plan", "subscription"], answer: "We offer three main plans: Sandbox ($0), Starter ($49/mo), and Professional ($299/mo). For larger needs, we have custom Enterprise solutions. Check our Pricing section for more details!" },
  { keywords: ["gpu", "h100", "a100", "hardware"], answer: "FluxScael provides direct access to H100 and A100 clusters with high-speed NVLink interconnects, optimized specifically for large-scale AI training." },
  { keywords: ["distributed", "scale", "nodes"], answer: "Our platform supports seamless distributed training across up to 4096 GPUs with zero-config orchestration and automatic fault tolerance." },
  { keywords: ["contact", "support", "help"], answer: "You can reach our support team at support@fluxscael.com or via the Contact page. Our Enterprise clients also get 24/7 white-glove support." },
  { keywords: ["hello", "hi", "hey"], answer: "Hello! I'm the FluxScael AI Assistant. How can I help you with your distributed training infrastructure today?" },
];

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Welcome to FluxScael TensorGrid™. How can I assist with your compute orchestration today?" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setInput("");
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      let botResponse = "I'm still learning about that specific topic. Would you like to speak with a human engineer? You can contact us at info@fluxscael.com.";
      
      const lowerInput = userMessage.toLowerCase();
      for (const item of KNOWLEDGE_BASE) {
        if (item.keywords.some(kw => lowerInput.includes(kw))) {
          botResponse = item.answer;
          break;
        }
      }

      setMessages(prev => [...prev, { role: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-[101] h-14 w-14 rounded-full bg-gradient-to-tr from-neon-blue to-neon-purple text-white shadow-[0_0_20px_rgba(14,49,246,0.4)] flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-[101] w-full max-w-[380px] h-[520px] glass-strong border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 border-b border-white/10 bg-gradient-to-r from-neon-blue/20 to-transparent flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neon-cyan">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-ultra text-xs uppercase tracking-widest text-white italic">AI Assistant</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-tighter">System Online</span>
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-thin scrollbar-thumb-white/10"
            >
              {messages.map((msg, i) => (
                <motion.div
                  initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-2xl p-3.5 text-xs leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-neon-blue/20 border border-neon-blue/30 text-white' 
                      : 'bg-white/5 border border-white/10 text-white/80'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-3.5 flex items-center gap-2">
                    <Loader2 size={12} className="animate-spin text-white/40" />
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Processing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white/5 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about H100s, pricing, scale..."
                  className="w-full h-11 bg-black/40 border border-white/10 rounded-xl px-4 pr-12 text-xs text-white placeholder:text-white/20 focus:outline-none focus:border-neon-blue/50 transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isTyping}
                  className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7 rounded-lg bg-white/5 flex items-center justify-center text-white/40 hover:text-white hover:bg-neon-blue transition-all disabled:opacity-50"
                >
                  <Send size={14} />
                </button>
              </div>
              <div className="mt-3 flex items-center gap-2 opacity-30 text-[8px] font-mono uppercase tracking-[0.2em] text-white">
                <Sparkles size={8} className="text-neon-cyan" />
                <span>Powered by FluxScael Core Intelligence</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
