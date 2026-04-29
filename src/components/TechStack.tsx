'use client'

import React, { useState, useRef } from 'react'
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
  { name: 'Tailwind CSS', logo: '/technologies/React.png', description: 'Utility-first CSS framework for rapid UI development.', category: 'Frontend' }, // Placeholder logo if tailwind missing
  
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
  { name: 'Google Cloud', logo: '/technologies/cloud.png', description: 'High-performance cloud services for modern applications.', category: 'Cloud' },
  
  // DevOps
  { name: 'Docker', logo: '/technologies/Docker.png', description: 'Containerization for consistent deployment environments.', category: 'DevOps' },
  { name: 'Kubernetes', logo: '/technologies/Kubernetes.png', description: 'Orchestration for automated container scaling.', category: 'DevOps' },
  { name: 'Jenkins', logo: '/technologies/Jenkins.png', description: 'Automated CI/CD server for continuous integration.', category: 'DevOps' }
]

const categories = ['Frontend', 'Backend', 'Database', 'Cloud', 'DevOps']

const TechCard = ({ item }: { item: TechItem }) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white rounded-2xl border border-gray-100 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] hover:border-indigo-100 flex flex-col items-center text-center h-full"
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(79, 70, 229, 0.05), transparent 80%)`
          ),
        }}
      />

      <div className="relative z-10">
        <div className="w-16 h-16 mb-6 flex items-center justify-center grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110">
          <Image src={item.logo} alt={item.name} width={64} height={64} className="object-contain" />
        </div>
        
        <h4 className="text-lg font-bold text-gray-900 mb-3 font-display">{item.name}</h4>
        
        <p className="text-gray-400 text-xs leading-relaxed font-display font-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          {item.description}
        </p>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-indigo-600 rounded-full transition-all duration-500 group-hover:w-1/2" />
    </motion.div>
  )
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState('Frontend')

  return (
    <section className="relative w-full py-24 md:py-40 bg-white">
      {/* Subtle Background Elements */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-50/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-50/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.5em] text-indigo-600 mb-6 block font-display">TECH STACK</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 font-display tracking-tightest leading-tight">
              Cutting-edge tools <br className="hidden md:block" /> powering our solutions
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-display leading-relaxed font-light max-w-2xl mx-auto">
              A modern, scalable, and reliable technology ecosystem tailored for performance.
            </p>
          </motion.div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-start md:justify-center mb-16 md:mb-20 overflow-x-auto no-scrollbar pb-4 px-4 sm:px-0">
          <div className="flex bg-gray-50/50 p-1.5 rounded-full border border-gray-100 backdrop-blur-sm whitespace-nowrap mx-auto md:mx-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 md:px-10 py-3 rounded-full text-sm font-bold font-display transition-all duration-300 relative ${
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
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {techStack
                .filter((item) => item.category === activeCategory)
                .map((item, index) => (
                  <motion.div
                    key={item.name}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <TechCard item={item} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
