'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Service {
  title: string
  description: string
  features: string[]
  badges: string[]
  color: string
  lightColor: string
}

const services: Service[] = [
  {
    title: 'Cloud Architecture',
    description: 'Design and implement scalable, secure, and cost-effective cloud infrastructure that grows with your business needs and ensures high availability.',
    features: ['Multi-Cloud Strategy (AWS/Azure/GCP)', 'Microservices Architecture', 'Serverless Computing Solutions', 'Automated Cloud Migration'],
    badges: ['AWS', 'Terraform', 'Kubernetes', 'Docker'],
    color: 'from-blue-600 to-indigo-700',
    lightColor: 'bg-blue-50',
  },
  {
    title: 'Mobile Solutions',
    description: 'Create stunning native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.',
    features: ['Native iOS & Android Apps', 'React Native & Flutter Development', 'Mobile UI/UX Design', 'Performance Optimization'],
    badges: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
    color: 'from-indigo-600 to-purple-700',
    lightColor: 'bg-indigo-50',
  },
  {
    title: 'Web Applications',
    description: 'Develop modern, responsive web applications using cutting-edge frameworks and technologies for optimal performance and scalability.',
    features: ['Next.js & React Applications', 'Progressive Web Apps (PWA)', 'Real-time Web Systems', 'Enterprise Dashboard Design'],
    badges: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    color: 'from-purple-600 to-pink-700',
    lightColor: 'bg-purple-50',
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Streamline your development pipeline with automated testing, continuous integration, and high-velocity deployment strategies.',
    features: ['Automated CI/CD Pipelines', 'Infrastructure as Code (IaC)', 'Zero-downtime Deployments', 'System Monitoring & Logging'],
    badges: ['GitHub Actions', 'Jenkins', 'Prometheus', 'Grafana'],
    color: 'from-pink-600 to-rose-700',
    lightColor: 'bg-pink-50',
  },
  {
    title: 'Technical Consulting',
    description: 'Expert guidance on technology strategy, digital transformation, and architectural decisions to future-proof your business.',
    features: ['Technology Roadmaps', 'Architecture & Security Audit', 'Scalability Strategy', 'Technical Due Diligence'],
    badges: ['Strategy', 'Audit', 'Scalability', 'Security'],
    color: 'from-rose-600 to-orange-700',
    lightColor: 'bg-rose-50',
  },
]

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <div 
      className="sticky top-24 md:top-32 w-full mb-10 md:mb-20 last:mb-0"
      style={{ zIndex: index + 1 }}
    >
      <div className="bg-white rounded-[2rem] sm:rounded-[3rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col md:flex-row transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)]">
        {/* Left Content */}
        <div className="flex-1 p-8 sm:p-12 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-indigo-600 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-4 block font-display">
              SERVICE 0{index + 1}
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-display leading-tight">
              {service.title}
            </h3>
            <p className="text-gray-500 text-base sm:text-lg mb-8 leading-relaxed max-w-xl font-display font-light">
              {service.description}
            </p>
            
            <div className="space-y-4 mb-10">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`} />
                  <span className="text-gray-700 font-medium text-sm sm:text-base font-display">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-10">
              {service.badges.map((badge, i) => (
                <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-400 text-[10px] sm:text-xs font-bold rounded-full uppercase tracking-wider font-display">
                  {badge}
                </span>
              ))}
            </div>

            <a 
              href="#" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-bold text-sm sm:text-base hover:bg-indigo-600 transition-all duration-300 group font-display"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right Panel / Abstract Area */}
        <div className={`hidden md:flex flex-1 relative bg-gradient-to-br ${service.color} items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 opacity-20" style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '32px 32px' 
          }} />
          
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 bg-white/10 backdrop-blur-3xl rounded-[3rem] border border-white/20 flex items-center justify-center"
          >
            <div className="text-white text-7xl lg:text-9xl font-black opacity-20 font-display">
              {service.title.charAt(0)}
            </div>
            {/* You could add more complex SVG abstract art here */}
          </motion.div>

          {/* Floating Blobs */}
          <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        </div>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section className="relative w-full py-20 sm:py-32 bg-white overflow-hidden">
      {/* Light Grid Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
        backgroundImage: `radial-gradient(circle at 2px 2px, #4f46e5 1px, transparent 0)`,
        backgroundSize: '40px 40px' 
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 mb-6 font-display tracking-tight uppercase">
              Our <span className="text-indigo-600">Services</span>
            </h2>
            <p className="mx-auto max-w-2xl text-base sm:text-xl text-gray-500 font-display leading-relaxed">
              Discover the full spectrum of technology solutions we offer. Our team delivers expertise to help you achieve your digital goals.
            </p>
          </motion.div>
        </div>

        {/* Stacked Cards Container */}
        <div className="flex flex-col gap-0">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
