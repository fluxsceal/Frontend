"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  iconSrc: string;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [viewMode, setViewMode] = useState<"orbital">("orbital");
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [radius, setRadius] = useState(200);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setRadius(120);
      } else if (width < 1024) {
        setRadius(160);
      } else {
        setRadius(200);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate && viewMode === "orbital") {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate, viewMode]);

  const centerViewOnNode = (nodeId: number) => {
    if (viewMode !== "orbital" || !nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-white bg-[#0E31F6] border-white";
      case "in-progress":
        return "text-white bg-[#E95D61] border-white";
      case "pending":
        return "text-white bg-[#973BF6] border-white/50";
      default:
        return "text-white bg-black/40 border-white/50";
    }
  };

  return (
    <div
      className="w-full h-full min-h-[450px] sm:min-h-[600px] flex flex-col items-center justify-center overflow-hidden py-12 rounded-[2.5rem] bg-[#0A0A16] border border-white/5"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-[500px] flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          <div className="absolute z-10 flex items-center justify-center" style={{ width: radius * 1.2, height: radius * 1.2 }}>
            <div 
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 animate-ping opacity-70"
              style={{ width: radius * 1.4, height: radius * 1.4 }} 
            />
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5 animate-ping opacity-50"
              style={{ animationDelay: "0.5s", width: radius * 1.6, height: radius * 1.6 }}
            />
            <div 
              className="relative overflow-hidden rounded-full border border-white/5 animate-pulse"
              style={{ width: radius * 1.2, height: radius * 1.2 }}
            >
              <img
                src="/Intelligent Cluster Lifecycle.png"
                alt="Intelligent cluster lifecycle"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div 
            className="absolute rounded-full border border-white/5 bg-[#0D0D1A]/50"
            style={{ width: radius * 1.9, height: radius * 1.9 }}
          ></div>

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];

            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
              opacity: isExpanded ? 1 : position.opacity,
            };

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
              >
                <div
                  className={`absolute rounded-full -inset-1 ${
                    isPulsing ? "animate-pulse duration-1000" : ""
                  }`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)`,
                    width: `${item.energy * 0.5 + 40}px`,
                    height: `${item.energy * 0.5 + 40}px`,
                    left: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                    top: `-${(item.energy * 0.5 + 40 - 40) / 2}px`,
                  }}
                ></div>

                <div
                  className={`
                  w-12 h-12 rounded-full flex items-center justify-center
                  ${
                    isExpanded
                      ? "bg-primary text-primary-foreground ring-2 ring-primary/60 ring-offset-2 ring-offset-[#0A0A16]"
                      : isRelated
                      ? "bg-white/50 text-black"
                      : "bg-[#111122] text-white"
                  }
                  border-2 
                  ${
                    isExpanded
                      ? "border-primary-foreground/25 shadow-[0_0_28px_rgba(46,30,158,0.75)]"
                      : isRelated
                      ? "border-[#0E31F6] animate-pulse"
                      : "border-white/20"
                  }
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-125" : "hover:scale-110 hover:border-[#E95D61]"}
                `}
                >
                  <img
                    src={item.iconSrc}
                    alt=""
                    className="h-7 w-7 object-contain pointer-events-none"
                  />
                </div>

                <div
                  className={`
                  absolute top-14 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-sm font-ultra italic uppercase tracking-widest
                  transition-all duration-300
                  ${isExpanded ? "text-white scale-110" : "text-white/50"}
                `}
                >
                  {item.title}
                </div>

              </div>
            );
          })}
        </div>

        {/* Central Expanded Card Overlay */}
        <AnimatePresence>
          {activeNodeId && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute z-[1000] flex items-center justify-center pointer-events-none"
            >
              {(() => {
                const item = timelineData.find(i => i.id === activeNodeId);
                if (!item) return null;
                return (
                  <Card className="w-[300px] sm:w-[350px] bg-[#0D0D1A]/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-[#2E1E9E]/40 overflow-visible pointer-events-auto">
                    <CardHeader className="pb-3 border-b border-white/5 relative">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleItem(item.id);
                        }}
                        className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white/50 hover:text-white transition-colors z-20"
                      >
                        <X size={14} />
                      </button>
                      <div className="flex justify-between items-center mb-2">
                        <Badge
                          className={`px-2 py-0.5 text-[10px] uppercase font-mono tracking-widest ${getStatusStyles(
                            item.status
                          )}`}
                        >
                          {item.status === "completed"
                            ? "COMPLETE"
                            : item.status === "in-progress"
                            ? "IN PROGRESS"
                            : "PENDING"}
                        </Badge>
                        <span className="text-[10px] font-mono text-white/40">
                          {item.date}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-ultra italic uppercase tracking-tight text-white leading-tight">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-5 text-sm text-white/70 font-light max-h-[300px] overflow-y-auto custom-scrollbar">
                      <p className="leading-relaxed">{item.content}</p>

                      <div className="mt-5 pt-4 border-t border-white/5">
                        <div className="flex justify-between items-center text-xs mb-2">
                          <span className="flex items-center text-white/60 font-mono uppercase tracking-widest text-[10px]">
                            <Zap size={12} className="mr-1.5 text-[#E95D61]" />
                            Compute Power
                          </span>
                          <span className="font-mono text-[10px] text-white/80">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-[#0E31F6] to-[#E95D61]"
                            style={{ width: `${item.energy}%` }}
                          ></div>
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-5 pt-4 border-t border-white/5">
                          <div className="flex items-center mb-3">
                            <Link size={12} className="text-white/40 mr-2" />
                            <h4 className="text-[10px] font-mono uppercase tracking-widest text-white/50">
                              Connected Nodes
                            </h4>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find(
                                (i) => i.id === relatedId
                              );
                              return (
                                <Button
                                  key={relatedId}
                                  variant="outline"
                                  size="sm"
                                  className="flex items-center h-7 px-3 py-0 text-[10px] font-mono uppercase tracking-widest rounded-full border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-all"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    toggleItem(relatedId);
                                  }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight
                                    size={10}
                                    className="ml-2 text-[#973BF6]"
                                  />
                                </Button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
