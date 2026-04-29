'use client'

import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

interface Metric {
  value: number
  label: string
  subtext: string
  suffix: string
}

const metrics: Metric[] = [
  { value: 50, label: 'Projects', subtext: 'Delivered across industries', suffix: '+' },
  { value: 25, label: 'Clients', subtext: 'Trusted by growing businesses', suffix: '+' },
  { value: 6, label: 'Experience', subtext: 'Building since 2018', suffix: '+' }
]

function CountUp({ value, suffix }: { value: number, suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const spring = useSpring(0, {
    stiffness: 40,
    damping: 20,
  })

  const display = useTransform(spring, (current) => Math.floor(current).toString())

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}

export default function Metrics() {
  return (
    <section className="relative w-full py-24 md:py-40 bg-white overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
        backgroundImage: `radial-gradient(circle at 2px 2px, #000 1px, transparent 0)`,
        backgroundSize: '48px 48px' 
      }} />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="relative group flex flex-col items-center text-center"
            >
              {/* Vertical Separator for Desktop */}
              {i !== 0 && (
                <div className="absolute left-[-15%] top-1/4 bottom-1/4 w-px bg-gray-100 hidden lg:block" />
              )}

              <div className="relative mb-6">
                 {/* Subtle Glow Behind Numbers */}
                <div className="absolute inset-0 bg-indigo-400/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
                
                <h3 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tightest font-display text-gray-900 group-hover:text-indigo-600 transition-colors duration-500">
                  <CountUp value={metric.value} suffix={metric.suffix} />
                </h3>
              </div>

              <div className="space-y-2">
                <span className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-[0.2em] font-display">
                  {metric.label}
                </span>
                <p className="text-xs md:text-sm text-gray-400 font-display font-light">
                  {metric.subtext}
                </p>
              </div>

              {/* Animated Underline */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '40px' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 + (i * 0.2) }}
                className="h-1 bg-indigo-600 mt-8 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
