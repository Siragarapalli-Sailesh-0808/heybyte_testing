'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'

interface TechItem {
  name: string
  logo: string
  description: string
  category: string
}

const techStack: TechItem[] = [
  // Frontend
  { name: 'React', logo: '/technologies/React.png', description: 'Component-based UI library for scalable frontend systems.', category: 'Frontend' },
  { name: 'Next.js', logo: '/technologies/Next-Js.png', description: 'The React framework for production-grade web applications.', category: 'Frontend' },
  { name: 'Vue.js', logo: '/technologies/Vue-Js.png', description: 'Versatile progressive framework for modern web interfaces.', category: 'Frontend' },
  { name: 'Angular', logo: '/technologies/Angular.png', description: 'Enterprise-grade platform for complex application development.', category: 'Frontend' },
  { name: 'Tailwind', logo: '/technologies/React.png', description: 'Utility-first CSS framework for rapid UI development.', category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', logo: '/technologies/Node-Js.png', description: 'High-performance backend runtime for scalable APIs.', category: 'Backend' },
  { name: 'Python', logo: '/technologies/Python.png', description: 'Powerful language for AI, data science, and backend logic.', category: 'Backend' },
  { name: 'Java', logo: '/technologies/Java.png', description: 'Robust, object-oriented language for enterprise systems.', category: 'Backend' },
  { name: 'Go', logo: '/technologies/Go.png', description: 'Static, efficient language for high-concurrency services.', category: 'Backend' },
  
  // Database
  { name: 'PostgreSQL', logo: '/technologies/postgressql.png', description: 'Advanced open-source relational database system.', category: 'Database' },
  { name: 'MongoDB', logo: '/technologies/MongoDB.png', description: 'Flexible NoSQL database for modern JSON-like data.', category: 'Database' },
  { name: 'Redis', logo: '/technologies/Redis.png', description: 'Fast, in-memory data store for caching and real-time apps.', category: 'Database' },
  { name: 'MySQL', logo: '/technologies/MySQL.png', description: 'World-renowned relational database for web applications.', category: 'Database' },
  
  // Cloud
  { name: 'AWS', logo: '/technologies/AWS.png', description: 'Comprehensive cloud computing platform for global scale.', category: 'Cloud' },
  { name: 'Azure', logo: '/technologies/Azure.png', description: 'Microsoft-powered cloud for enterprise-ready infrastructure.', category: 'Cloud' },
  { name: 'GCP', logo: '/technologies/cloud.png', description: 'High-performance cloud services for modern applications.', category: 'Cloud' },
  
  // DevOps
  { name: 'Docker', logo: '/technologies/Docker.png', description: 'Containerization for consistent deployment environments.', category: 'DevOps' },
  { name: 'Kubernetes', logo: '/technologies/Kubernetes.png', description: 'Orchestration for automated container scaling.', category: 'DevOps' },
  { name: 'Jenkins', logo: '/technologies/Jenkins.png', description: 'Automated CI/CD server for continuous integration.', category: 'DevOps' }
]

const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps']

const TechCard = ({ item, isActive, isMobile, onClick }: { item: TechItem, isActive: boolean, isMobile: boolean, onClick?: () => void }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    if (isMobile) return
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      onClick={onClick}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isActive ? 1 : (isMobile ? 0.6 : 1), 
        y: isActive ? -8 : 0,
        scale: isActive ? 1.05 : 1,
        borderColor: isActive ? '#4f46e5' : '#f3f4f6'
      }}
      transition={{ duration: 0.5 }}
      className={`group relative bg-white rounded-2xl border p-6 md:p-8 flex flex-col items-center text-center h-full cursor-pointer transition-shadow duration-500 ${
        isActive ? 'shadow-[0_20px_60px_rgba(79,70,229,0.1)] border-indigo-100' : 'border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.02)]'
      }`}
    >
      {/* Spotlight Effect (Desktop Only) */}
      {!isMobile && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useTransform(
              [mouseX, mouseY],
              ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(79, 70, 229, 0.05), transparent 80%)`
            ),
          }}
        />
      )}

      <div className="relative z-10 w-full flex flex-col items-center">
        <div className={`w-12 h-12 md:w-16 md:h-16 mb-4 md:mb-6 flex items-center justify-center transition-all duration-500 ${
          isActive ? 'grayscale-0 scale-110' : 'grayscale group-hover:grayscale-0 group-hover:scale-110'
        }`}>
          <Image src={item.logo} alt={item.name} width={64} height={64} className="object-contain" />
        </div>
        
        <h4 className={`text-sm md:text-lg font-bold transition-colors duration-300 ${
          isActive ? 'text-indigo-600' : 'text-gray-900 group-hover:text-indigo-600'
        } font-display mb-2`}>{item.name}</h4>
        
        {/* Category Badge on Mobile */}
        {isMobile && isActive && (
          <span className="text-[8px] font-black uppercase tracking-widest text-indigo-400 mb-2">
            {item.category}
          </span>
        )}

        <p className={`text-gray-400 text-[10px] md:text-xs leading-relaxed font-display font-light transition-all duration-300 ${
          isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
        }`}>
          {item.description}
        </p>
      </div>

      {/* Bottom Accent */}
      <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-indigo-600 rounded-full transition-all duration-500 ${
        isActive ? 'w-1/2' : 'w-0 group-hover:w-1/2'
      }`} />
    </motion.div>
  )
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('Frontend')
  const [activeIndex, setActiveIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  
  const filteredTech = techStack.filter((item) => item.category === activeCategory)

  // Detect Mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    // Run immediately on mount
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-loop on Mobile
  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % filteredTech.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [isMobile, filteredTech.length])

  // Reset active index when category changes
  useEffect(() => {
    setActiveIndex(0)
  }, [activeCategory])

  return (
    <section className="relative w-full py-24 md:py-40 bg-white">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-50/20 rounded-full blur-[80px] md:blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-50/20 rounded-full blur-[80px] md:blur-[120px] -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.5em] text-indigo-600 mb-6 block font-display">TECH STACK</span>
            <h2 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6 md:mb-8 font-display tracking-tightest leading-tight">
              Cutting-edge tools <br className="hidden md:block" /> powering our solutions
            </h2>
            <p className="text-base md:text-xl text-gray-400 font-display leading-relaxed font-light max-w-2xl mx-auto">
              A modern, scalable, and reliable technology ecosystem tailored for performance.
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12 md:mb-20 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4">
          <div className="flex bg-gray-50/50 p-1.5 rounded-full border border-gray-100 backdrop-blur-sm whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 md:px-10 py-2.5 md:py-3 rounded-full text-[10px] md:text-sm font-bold font-display transition-all duration-300 relative ${
                  activeCategory === cat ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {activeCategory === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white rounded-full shadow-md"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredTech.map((item, index) => (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                    onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                  >
                    <TechCard 
                      item={item} 
                      isActive={isMobile ? activeIndex === index : hoveredIndex === index}
                      isMobile={isMobile}
                      onClick={() => isMobile && setActiveIndex(index)}
                    />
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
