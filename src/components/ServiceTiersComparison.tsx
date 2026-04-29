'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, Info, Star, ArrowRight, Layers, Shield, Zap, Target } from 'lucide-react'

interface Feature {
  name: string
  category: 'Strategy' | 'Development' | 'Support' | 'Performance'
  heybyte: boolean
  others: boolean
  tooltip: string
}

const features: Feature[] = [
  {
    name: 'Strategic Product Planning',
    category: 'Strategy',
    heybyte: true,
    others: true,
    tooltip: 'In-depth analysis of business goals and user needs.'
  },
  {
    name: 'Technical Feasibility Audit',
    category: 'Strategy',
    heybyte: true,
    others: false,
    tooltip: 'Deep dive into technical constraints before coding.'
  },
  {
    name: 'Tailored Engineering Solutions',
    category: 'Development',
    heybyte: true,
    others: true,
    tooltip: 'Custom code built for your specific requirements.'
  },
  {
    name: 'Cloud-Native Architecture',
    category: 'Development',
    heybyte: true,
    others: false,
    tooltip: 'Infrastructure built to scale automatically.'
  },
  {
    name: 'Automated CI/CD Pipelines',
    category: 'Development',
    heybyte: true,
    others: false,
    tooltip: 'Seamless, automated updates to your application.'
  },
  {
    name: 'Dedicated Post-Launch Support (30 Days)',
    category: 'Support',
    heybyte: true,
    others: true,
    tooltip: 'Hyper-care period after the initial launch.'
  },
  {
    name: '24/7 Priority Engineering Support',
    category: 'Support',
    heybyte: true,
    others: false,
    tooltip: 'Direct access to senior engineers anytime.'
  },
  {
    name: 'Enterprise-Grade Security Audit',
    category: 'Performance',
    heybyte: true,
    others: false,
    tooltip: 'Rigorous security testing and hardening.'
  },
  {
    name: 'Performance Optimization (Lighthouse 90+)',
    category: 'Performance',
    heybyte: true,
    others: false,
    tooltip: 'Guaranteed high-speed loading and responsiveness.'
  }
]

const categories = ['Strategy', 'Development', 'Support', 'Performance']

export default function ServiceTiersComparison() {
  const [view, setView] = useState<'card' | 'compare'>('card')

  return (
    <section className="relative w-full py-24 md:py-40 bg-white overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-indigo-50/30 rounded-full blur-3xl opacity-50 -z-10" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-black uppercase tracking-[0.5em] text-indigo-600 mb-6 block font-display">Service Tiers</span>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8 font-display tracking-tightest leading-tight">
              Choose the right service level <br className="hidden md:block" /> for your project
            </h2>
            <p className="text-lg md:text-xl text-gray-400 font-display leading-relaxed font-light max-w-2xl mx-auto">
              Our tiered approach ensures you get the exact expertise and performance your business requires.
            </p>
          </motion.div>

          {/* Toggle Switch */}
          <div className="mt-12 flex justify-center">
            <div className="bg-gray-50 p-1.5 rounded-full flex items-center border border-gray-100 shadow-sm">
              <button 
                onClick={() => setView('card')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold font-display transition-all duration-300 ${view === 'card' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Card View
              </button>
              <button 
                onClick={() => setView('compare')}
                className={`px-8 py-2.5 rounded-full text-sm font-bold font-display transition-all duration-300 ${view === 'compare' ? 'bg-white text-gray-900 shadow-md' : 'text-gray-400 hover:text-gray-600'}`}
              >
                Compare View
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {view === 'card' ? (
            <motion.div 
              key="card-view"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto"
            >
              {/* Others Card */}
              <div className="bg-white p-10 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col transition-all duration-500 hover:shadow-xl group">
                <div className="mb-10">
                  <h3 className="text-3xl font-bold text-gray-400 font-display mb-2">Others</h3>
                  <p className="text-gray-400 font-display text-sm">Standard agency model</p>
                </div>

                <div className="space-y-8 flex-1">
                  {categories.map((cat) => (
                    <div key={cat}>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-5 font-display">{cat}</h4>
                      <div className="space-y-4">
                        {features.filter(f => f.category === cat).map((f, i) => (
                          <div key={i} className="flex items-center justify-between group/feature">
                            <span className="text-gray-400 text-sm font-display">{f.name}</span>
                            {f.others ? <Check className="w-5 h-5 text-gray-200" /> : <X className="w-5 h-5 text-gray-100" />}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Heybyte Card */}
              <div className="relative group">
                {/* Animated Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-[2.6rem] blur opacity-10 group-hover:opacity-20 transition duration-1000 animate-pulse" />
                
                <div className="relative bg-white p-10 md:p-14 rounded-[2.5rem] border border-indigo-100 shadow-[0_30px_70px_rgba(79,70,229,0.08)] flex flex-col h-full transition-all duration-500 hover:-translate-y-2">
                  <div className="absolute top-8 right-8">
                    <span className="bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg shadow-indigo-200">
                      <Star className="w-3 h-3 fill-white" />
                      Recommended
                    </span>
                  </div>

                  <div className="mb-10">
                    <h3 className="text-3xl font-bold text-gray-900 font-display mb-2">Heybyte</h3>
                    <p className="text-indigo-600 font-bold font-display text-sm tracking-wide">Elite Engineering Partner</p>
                  </div>

                  <div className="space-y-8 flex-1">
                    {categories.map((cat) => (
                      <div key={cat}>
                        <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-5 font-display flex items-center gap-2">
                           {cat === 'Strategy' && <Target className="w-3 h-3 text-indigo-500" />}
                           {cat === 'Development' && <Layers className="w-3 h-3 text-indigo-500" />}
                           {cat === 'Support' && <Zap className="w-3 h-3 text-indigo-500" />}
                           {cat === 'Performance' && <Shield className="w-3 h-3 text-indigo-500" />}
                           {cat}
                        </h4>
                        <div className="space-y-4">
                          {features.filter(f => f.category === cat).map((f, i) => (
                            <motion.div 
                              key={i} 
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center justify-between group/feature cursor-help"
                            >
                              <span className="text-gray-700 text-sm font-bold font-display group-hover/feature:text-indigo-600 transition-colors flex items-center gap-2">
                                {f.name}
                                <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity">
                                  <Info className="w-3.5 h-3.5 text-gray-300" />
                                </div>
                              </span>
                              <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center">
                                <Check className="w-4 h-4 text-indigo-600 stroke-[3]" />
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-14">
                    <button className="w-full py-5 bg-gray-900 text-white rounded-2xl font-bold font-display text-lg flex items-center justify-center gap-3 hover:bg-indigo-600 transition-all duration-500 shadow-xl hover:shadow-indigo-500/25 group/btn">
                      Select Elite Tier
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              key="compare-view"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-5xl mx-auto"
            >
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                {/* Sticky Header */}
                <div className="grid grid-cols-12 bg-gray-50/50 p-6 border-b border-gray-100 sticky top-0 z-20 backdrop-blur-md">
                   <div className="col-span-6 text-xs font-black uppercase tracking-widest text-gray-400 font-display">Feature Set</div>
                   <div className="col-span-3 text-center text-xs font-black uppercase tracking-widest text-gray-400 font-display">Others</div>
                   <div className="col-span-3 text-center text-xs font-black uppercase tracking-widest text-indigo-600 font-display">Heybyte</div>
                </div>

                <div className="divide-y divide-gray-50">
                  {features.map((f, i) => (
                    <div key={i} className="grid grid-cols-12 p-6 hover:bg-gray-50/30 transition-colors group">
                      <div className="col-span-6 flex flex-col">
                        <span className="text-gray-900 font-bold font-display text-sm">{f.name}</span>
                        <span className="text-gray-400 text-[10px] uppercase font-bold tracking-wider mt-1">{f.category}</span>
                      </div>
                      <div className="col-span-3 flex justify-center items-center">
                        {f.others ? <Check className="w-5 h-5 text-gray-300" /> : <X className="w-5 h-5 text-gray-100" />}
                      </div>
                      <div className="col-span-3 flex justify-center items-center">
                        <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center">
                          <Check className="w-5 h-5 text-indigo-600 stroke-[3]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
