'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'

interface ProcessStep {
  id: string
  number: string
  title: string
  description: string
  bullets: string[]
  icon: React.ReactNode
}

const steps: ProcessStep[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery',
    description: 'We understand your business, users, goals, and technical landscape to define the right foundation.',
    bullets: [
      'Business and user requirement analysis',
      'Technical feasibility review',
      'Clear project scope and success metrics'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-indigo-600" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: 'planning',
    number: '02',
    title: 'Planning',
    description: 'We convert insights into a practical roadmap with architecture, milestones, and delivery strategy.',
    bullets: [
      'Product roadmap creation',
      'System architecture planning',
      'Timeline and sprint structure'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-indigo-600" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    )
  },
  {
    id: 'development',
    number: '03',
    title: 'Development',
    description: 'We build with clean code, scalable architecture, and continuous feedback throughout the process.',
    bullets: [
      'Agile development workflow',
      'Regular demos and feedback loops',
      'Quality-focused engineering'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-indigo-600" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  {
    id: 'deployment',
    number: '04',
    title: 'Deployment',
    description: 'We test, optimize, and launch the product smoothly with production-ready reliability.',
    bullets: [
      'Testing and performance checks',
      'Secure production deployment',
      'Post-launch support readiness'
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-indigo-600" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.96 5.96m0 0A14.926 14.926 0 013.67 14.37m5.96 5.96V10.8c0-1.229.475-2.391 1.33-3.247M15.59 14.37a6 6 0 00-4.23-1.77" />
      </svg>
    )
  }
]

const StepCard = ({ step, index }: { step: ProcessStep; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-[60vh] md:min-h-screen flex flex-col justify-center py-20 md:py-0"
      id={`step-${index}`}
    >
      <div className="bg-white p-8 md:p-16 rounded-3xl border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.02)] relative overflow-hidden group">
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50/30 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-110" />
        
        <div className="relative z-10">
          <div className="w-16 h-16 md:w-20 md:h-20 bg-indigo-50 rounded-2xl p-4 md:p-5 mb-8 md:mb-10 flex items-center justify-center">
            {step.icon}
          </div>
          
          <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">
            {step.title}
          </h3>
          
          <p className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed font-display font-light max-w-xl">
            {step.description}
          </p>
          
          <div className="space-y-4">
            {step.bullets.map((bullet, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0" />
                <span className="text-gray-600 text-base md:text-lg font-display">{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Large Decorative Number */}
        <div className="absolute bottom-8 right-8 text-[8rem] md:text-[12rem] font-black text-gray-50/50 select-none font-display leading-none pointer-events-none">
          {step.number}
        </div>
      </div>
    </motion.div>
  )
}

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(0)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Track active step based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const stepElements = steps.map((_, i) => document.getElementById(`step-${i}`))
      const scrollPosition = window.scrollY + window.innerHeight / 2

      stepElements.forEach((el, i) => {
        if (el && scrollPosition >= el.offsetTop && scrollPosition <= el.offsetTop + el.offsetHeight) {
          setActiveStep(i)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={containerRef} className="relative w-full bg-white py-24 md:py-40">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ 
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '48px 48px' 
      }} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.5em] text-indigo-600 mb-6 block font-display">WORKFLOW</span>
            <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-8 font-display tracking-tightest leading-tight">
              Our Development Process
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 font-display leading-relaxed font-light max-w-2xl">
              A clear, structured process that turns ideas into reliable digital products.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row gap-20">
          {/* Left Side: Sticky Navigation */}
          <div className="hidden md:block w-1/3 relative">
            <div className="sticky top-40 space-y-12">
              <div className="relative pl-8">
                {/* Vertical Progress Line */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gray-100">
                  <motion.div 
                    style={{ scaleY, originY: 0 }}
                    className="w-full h-full bg-indigo-600"
                  />
                </div>

                {/* Steps Navigation */}
                <div className="space-y-16">
                  {steps.map((step, i) => (
                    <motion.div 
                      key={step.id}
                      animate={{ 
                        opacity: activeStep === i ? 1 : 0.3,
                        x: activeStep === i ? 10 : 0
                      }}
                      className="group cursor-default"
                    >
                      <div className="text-sm font-black text-indigo-600 mb-2 font-display">{step.number}</div>
                      <div className="text-2xl font-bold text-gray-900 font-display transition-colors group-hover:text-indigo-600">{step.title}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Scrollable Cards */}
          <div className="flex-1">
            {steps.map((step, i) => (
              <StepCard key={step.id} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
