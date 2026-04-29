'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageSquare, Zap, Shield, Sparkles } from 'lucide-react'

const FinalCTASection: React.FC = () => {
  return (
    <section className="relative w-full py-24 md:py-40 bg-white overflow-hidden">
      {/* Background Orbs & Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1440px] -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 md:gap-24">
          
          {/* Left Content */}
          <div className="max-w-3xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
                <Sparkles className="w-4 h-4 text-indigo-600" />
                <span className="text-xs font-black uppercase tracking-widest text-indigo-600 font-display">Let's Build Together</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-10 font-display tracking-tightest leading-[1.1]">
                Ready to transform your <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">digital future?</span>
              </h2>

              <p className="text-xl md:text-2xl text-gray-500 font-display font-light leading-relaxed mb-12 max-w-2xl lg:mx-0 mx-auto">
                Move your ideas forward with clarity. Talk to our experts and discover how <span className="text-gray-900 font-bold">Heybyte</span> can turn your vision into exceptional engineering reality.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
                <motion.a
                  href="/contact"
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group px-10 py-5 bg-gray-900 text-white rounded-2xl font-bold font-display text-lg shadow-2xl shadow-gray-200 hover:bg-indigo-600 transition-all duration-500 flex items-center gap-3 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="relative z-10">Schedule a Consultation</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </motion.a>

                <motion.a
                  href="/services"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-900 font-bold font-display group"
                >
                  Explore Services
                  <div className="w-10 h-[1px] bg-gray-200 group-hover:w-14 group-hover:bg-indigo-600 transition-all duration-500" />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Trust Badges */}
          <div className="w-full lg:w-auto flex flex-col gap-6">
            {[
              { icon: MessageSquare, title: 'Free Consultation', desc: 'No commitment required to start.' },
              { icon: Zap, title: 'Quick Response', desc: 'Expert feedback within 24 hours.' },
              { icon: Shield, title: 'NDA Available', desc: 'Your intellectual property is safe.' }
            ].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (i * 0.1), duration: 0.6 }}
                whileHover={{ x: -10, backgroundColor: 'rgba(255,255,255,1)' }}
                className="bg-white/50 backdrop-blur-md border border-gray-100 p-6 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.02)] flex items-start gap-5 w-full md:w-[400px] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                  <badge.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900 mb-1 font-display">{badge.title}</h4>
                  <p className="text-gray-400 text-sm font-display font-light leading-snug">{badge.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* Decorative Line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-100 to-transparent" />
    </section>
  )
}

export default FinalCTASection
