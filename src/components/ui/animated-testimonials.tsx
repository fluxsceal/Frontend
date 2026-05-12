"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
  color?: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: string[]
  trustedCompaniesTitle?: string
  className?: string
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  const activeColor = testimonials[activeIndex]?.color || "#2E1E9E";

  return (
    <section ref={sectionRef} id="testimonials" className={`py-20 overflow-hidden ${className || ""}`}>
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-12 w-full md:grid-cols-2 lg:gap-20"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-5">
              {badgeText && (
                <div 
                  className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-white/5 border transition-colors duration-500"
                  style={{ color: activeColor, borderColor: `${activeColor}33` }}
                >
                  <Star className="mr-2 h-3 w-3" style={{ fill: activeColor }} />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-3xl font-ultra tracking-tight sm:text-4xl md:text-5xl text-white uppercase leading-[1.1]">{title}</h2>

              <p className="max-w-[600px] text-muted-foreground md:text-base leading-relaxed">{subtitle}</p>

              <div className="flex items-center gap-2.5 pt-3">
                {testimonials.map((t, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="h-1.5 rounded-full transition-all duration-500"
                    style={{ 
                      width: activeIndex === index ? "48px" : "6px",
                      backgroundColor: activeIndex === index ? activeColor : "rgba(255,255,255,0.1)",
                      boxShadow: activeIndex === index ? `0 0 15px ${activeColor}80` : "none"
                    }}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} className="relative h-full min-h-[350px] md:min-h-[450px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="glass border border-white/10 shadow-2xl rounded-[2rem] p-8 h-full flex flex-col justify-between overflow-hidden relative group">
                  {/* Dynamic background glow */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 blur-3xl -z-10 opacity-20 group-hover:opacity-30 transition-all duration-700"
                    style={{ backgroundColor: testimonial.color || activeColor }}
                  />
                  
                  <div>
                    <div className="mb-6 flex gap-1">
                      {Array(testimonial.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5" style={{ fill: testimonial.color || activeColor, color: testimonial.color || activeColor }} />
                        ))}
                    </div>

                    <div className="relative mb-6">
                      <Quote className="absolute -top-4 -left-4 h-10 w-10 rotate-180 opacity-10" style={{ color: testimonial.color || activeColor }} />
                      <p className="relative z-10 text-lg md:text-xl font-medium leading-relaxed text-white/90 italic font-sans">
                        "{testimonial.content}"
                      </p>
                    </div>
                  </div>

                  <div>
                    <Separator className="my-6 bg-white/5" />

                    <div className="flex items-center gap-4">
                      <Avatar 
                        className="h-12 w-12 border p-0.5 transition-colors duration-500"
                        style={{ borderColor: `${testimonial.color || activeColor}33` }}
                      >
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} className="rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                        <AvatarFallback className="bg-white/5 text-white text-xs">{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-bold text-white text-base tracking-tight">{testimonial.name}</h3>
                        <p className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest mt-0.5">
                          {testimonial.role} <span className="mx-1" style={{ color: testimonial.color || activeColor }}>@</span> {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl -z-20 animate-pulse"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-400/5 blur-3xl -z-20 animate-pulse delay-700"></div>
          </motion.div>
        </motion.div>

        {/* Logo cloud */}
        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} initial="hidden" animate={controls} className="mt-32 text-center border-t border-white/5 pt-20">
            <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-muted-foreground mb-12">{trustedCompaniesTitle}</h3>
            <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
              {trustedCompanies.map((company) => (
                <div key={company} className="text-2xl font-ultra text-white/20 hover:text-white/40 transition-colors cursor-default tracking-tighter">
                  {company}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
