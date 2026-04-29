'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Zap, Shield, Users, Target } from 'lucide-react'

const features = [
  {
    id: 'reliability',
    icon: Shield,
    title: "Reliable & Secure",
    description: "Built on proven architectures with security and stability integrated at every level of our development process.",
    featured: true
  },
  {
    id: 'delivery',
    icon: Zap,
    title: "Fast Delivery",
    description: "We move fast with precision — delivering on time without ever compromising on quality.",
    featured: false
  },
  {
    id: 'team',
    icon: Users,
    title: "Dedicated Team",
    description: "A focused team that works closely with you, ensuring absolute clarity and accountability.",
    featured: false
  },
  {
    id: 'tailored',
    icon: Target,
    title: "Tailored Solutions",
    description: "Every solution is crafted around your specific business goals and technical needs.",
    featured: false
  }
]

export default function WhyChooseUs() {
  const featured = features.find(f => f.featured)
  const rest = features.filter(f => !f.featured)

  return (
    <section className="relative w-full py-24 md:py-40 bg-white overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1440px] opacity-[0.03] pointer-events-none -z-10" style={{ 
        backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
        backgroundSize: '48px 48px' 
      }} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-20 md:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-indigo-600 mb-6 block font-display">
              WHY CHOOSE US
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 font-display tracking-tightest leading-tight">
              We build products that <br className="hidden md:block" />
              <span className="text-indigo-600 underline decoration-indigo-100 decoration-8 underline-offset-8">actually work.</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-display font-light max-w-xl leading-relaxed">
              Engineered for performance, scalability, and long-term reliability. We don't just write code; we build digital foundations.
            </p>
          </motion.div>
        </div>

        {/* Asymmetric Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          
          {/* Left: Featured Card */}
          {featured && (
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-[45%]"
            >
              <div className="h-full bg-white rounded-[2rem] border border-gray-100 p-10 md:p-16 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-500 group flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500">
                    <featured.icon className="w-8 h-8 text-indigo-600 stroke-[1.5]" />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 font-display tracking-tightest">
                    {featured.title}
                  </h3>
                  <p className="text-xl text-gray-400 font-display font-light leading-relaxed">
                    {featured.description}
                  </p>
                </div>
                
                <div className="mt-16 pt-10 border-t border-gray-50">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-2">
                       {[1,2,3].map(i => (
                         <div key={i} className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white" />
                       ))}
                    </div>
                    <span className="text-xs font-bold text-gray-400 uppercase tracking-widest font-display">Trusted by Industry Leaders</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Right: Stacked Cards */}
          <div className="lg:w-[55%] flex flex-col gap-8 lg:gap-10">
            {rest.map((feature, i) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + (i * 0.1) }}
                className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:-translate-y-1 transition-all duration-500 group flex flex-col sm:flex-row gap-8 items-start sm:items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center shrink-0 group-hover:bg-indigo-50 transition-colors duration-500">
                  <feature.icon className="w-6 h-6 text-gray-400 group-hover:text-indigo-600 stroke-[1.5] transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 font-display font-light text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
