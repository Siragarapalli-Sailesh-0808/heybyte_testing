'use client'

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const technologies = [
  { name: "React", logo: "/technologies/React.png", desc: "Modern Frontend UI" },
  { name: "Node.js", logo: "/technologies/Node-Js.png", desc: "Scalable Backend Systems" },
  { name: "Python", logo: "/technologies/Python.png", desc: "AI & Data Processing" },
  { name: "AWS", logo: "/technologies/AWS.png", desc: "Cloud Infrastructure" },
  { name: "Azure", logo: "/technologies/Azure.png", desc: "Enterprise Solutions" },
  { name: "Docker", logo: "/technologies/Docker.png", desc: "Containerization" },
  { name: "Kubernetes", logo: "/technologies/Kubernetes.png", desc: "Orchestration" },
  { name: "Go", logo: "/technologies/Go.png", desc: "High Performance" },
  { name: "Java", logo: "/technologies/Java.png", desc: "Enterprise Core" },
  { name: "Jenkins", logo: "/technologies/Jenkins.png", desc: "Continuous Delivery" },
  { name: "Cloud", logo: "/technologies/cloud.png", desc: "Hybrid Ecosystems" },
]

export default function TechnoShowcase() {
  const [activeMobileIndex, setActiveMobileIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Detect mobile for behavior switching
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Mobile Auto-loop
  useEffect(() => {
    if (!isMobile || isPaused) return
    
    const interval = setInterval(() => {
      setActiveMobileIndex((prev) => (prev + 1) % technologies.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [isMobile, isPaused])

  const handleManualTap = (index: number) => {
    if (!isMobile) return
    setActiveMobileIndex(index)
    setIsPaused(true)
    setTimeout(() => setIsPaused(false), 3000)
  }

  // Define bento spans to create that "scattered" premium look
  const getSpans = (index: number) => {
    const desktopSpans = [
      "md:col-span-2 md:row-span-1", // React
      "md:col-span-1 md:row-span-1", // Node
      "md:col-span-1 md:row-span-2", // Python (Tall)
      "md:col-span-1 md:row-span-1", // AWS
      "md:col-span-2 md:row-span-2", // Azure (Large)
      "md:col-span-1 md:row-span-1", // Docker
      "md:col-span-1 md:row-span-1", // Kubernetes
      "md:col-span-1 md:row-span-2", // Go (Tall)
      "md:col-span-1 md:row-span-1", // Java
      "md:col-span-1 md:row-span-1", // Jenkins
      "md:col-span-2 md:row-span-1", // Cloud
    ]
    return desktopSpans[index] || "md:col-span-1 md:row-span-1"
  }

  return (
    <section className="font-display w-full bg-white py-24 md:py-40 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Header */}
      <div className="mb-16 md:mb-24 max-w-xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-indigo-600 mb-6 block">
            OUR TECHNOLOGIES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tightest">
            The tools we use to build <br className="hidden md:block" />
            modern solutions.
          </h2>
        </motion.div>
      </div>

      {/* Scattered Bento Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-6 auto-rows-[140px] md:auto-rows-[160px]">
        {technologies.map((tech, index) => {
          const isActiveMobile = isMobile && activeMobileIndex === index

          return (
            <motion.div
              key={tech.name}
              onMouseEnter={() => !isMobile && setHoveredIndex(index)}
              onMouseLeave={() => !isMobile && setHoveredIndex(null)}
              onClick={() => handleManualTap(index)}
              className={`
                relative rounded-[2rem] p-6 flex flex-col items-center justify-center transition-all duration-500 cursor-pointer group
                ${getSpans(index)}
                ${(isActiveMobile || (!isMobile && hoveredIndex === index))
                  ? 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] ring-1 ring-gray-100 -translate-y-2' 
                  : 'bg-gray-50 md:hover:bg-white md:hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] md:hover:ring-1 md:hover:ring-gray-100 md:hover:-translate-y-2'}
              `}
            >
              <div className="flex-grow flex items-center justify-center w-full">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className={`
                    w-12 md:w-16 h-12 md:h-16 object-contain transition-all duration-500
                    ${(isActiveMobile || (!isMobile && hoveredIndex === index)) ? 'grayscale-0 scale-110' : 'md:grayscale group-hover:grayscale-0 grayscale'}
                  `}
                />
              </div>
              
              <div className="w-full mt-4">
                  <p className={`
                    text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-500
                    ${(isActiveMobile || (!isMobile && hoveredIndex === index)) ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600'}
                  `}>
                   {tech.name}
                 </p>
                                  <AnimatePresence>
                    {(isActiveMobile || (!isMobile && hoveredIndex === index)) && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-[9px] text-gray-400 font-display mt-1 line-clamp-1 text-center"
                      >
                        {tech.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
              </div>

              {/* Desktop Hover Gradient Accent */}
              {!isMobile && (
                 <div className="absolute inset-0 rounded-[2rem] bg-indigo-50/0 group-hover:bg-indigo-50/5 transition-colors duration-500 -z-10" />
              )}
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
