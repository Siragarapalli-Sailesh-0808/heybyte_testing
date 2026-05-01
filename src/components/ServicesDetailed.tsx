'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface Service {
  title: string
  description: string
  features: string[]
  technologies: string[]
  image: string
  mobileImage?: string
  accentColor: string
}

const services: Service[] = [
  {
    title: 'Cloud Architecture',
    description: 'Design and implement scalable, secure, and cost-effective cloud infrastructure that grows with your business needs and ensures high availability.',
    features: [
      'Multi-cloud strategy and migration',
      'Serverless architecture design',
      'Container orchestration (Kubernetes)',
      'Cloud security and compliance',
      'Disaster recovery planning'
    ],
    technologies: ['AWS', 'Azure', 'Docker', 'Terraform', 'Kubernetes'],
    image: '/cloud-service-web.jpg',
    mobileImage: '/cloud-service-mobile-web.jpg',
    accentColor: 'text-blue-600'
  },
  {
    title: 'Mobile Solutions',
    description: 'Create stunning native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.',
    features: [
      'Native iOS & Android development',
      'Cross-platform React Native apps',
      'Progressive Web Apps (PWA)',
      'Mobile UI/UX design',
      'App Store optimization'
    ],
    technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Firebase'],
    image: '/mobile-service-web.jpg',
    mobileImage: '/mobile-service-mobile-web.jpg',
    accentColor: 'text-indigo-600'
  },
  {
    title: 'Web Applications',
    description: 'Build modern, responsive web applications with cutting-edge frameworks that provide seamless experiences across all devices and browsers.',
    features: [
      'Single Page Applications (SPA)',
      'E-commerce platforms',
      'Content Management Systems',
      'Real-time collaboration tools',
      'API development and integration'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
    image: '/web-service-web.jpg',
    mobileImage: '/web-service-mobile-web.jpg',
    accentColor: 'text-purple-600'
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Streamline your development workflow with automated testing, continuous integration, and deployment pipelines that accelerate time-to-market.',
    features: [
      'CI/CD pipeline optimization',
      'Infrastructure as Code (IaC)',
      'Automated testing frameworks',
      'Monitoring and logging solutions',
      'Performance optimization'
    ],
    technologies: ['Jenkins', 'GitHub Actions', 'Ansible', 'Prometheus', 'Grafana'],
    image: '/devops-service-web.jpg',
    mobileImage: '/devops-service-mobile-web.jpg',
    accentColor: 'text-pink-600'
  },
  {
    title: 'Technical Consulting',
    description: 'Get expert guidance on technology strategy, architecture decisions, and digital transformation initiatives from our seasoned consultants.',
    features: [
      'Technology stack evaluation',
      'Architecture review & optimization',
      'Digital transformation roadmap',
      'Technical due diligence',
      'Team training and mentorship'
    ],
    technologies: ['Agile', 'Scrum', 'TOGAF', 'Security Audit', 'Scalability'],
    image: '/consulting-service-web.jpg',
    mobileImage: '/consulting-service-mobile-web.jpg',
    accentColor: 'text-rose-600'
  }
]

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  return (
    <div 
      className="sticky top-20 md:top-24 w-full mb-12 md:mb-20 last:mb-0 px-4 sm:px-6 lg:px-8 group"
      style={{ zIndex: index + 1 }}
    >
      <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] border border-gray-100 shadow-[0_30px_70px_rgba(0,0,0,0.04)] overflow-hidden min-h-[580px] md:min-h-[560px] md:h-[calc(100vh-170px)] md:max-h-[680px] flex flex-col md:flex-row transition-all duration-700 hover:shadow-[0_50px_100px_rgba(0,0,0,0.08)]">
        {/* Visual Panel - Premium Image */}
        <div className="h-[250px] md:h-auto md:flex-1 relative bg-white overflow-hidden order-1 md:order-2">
          <picture>
            <source media="(max-width: 767px)" srcSet={service.mobileImage ?? service.image} />
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 h-full w-full object-cover object-center"
              loading={index < 2 ? 'eager' : 'lazy'}
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-white/15 via-transparent to-transparent md:bg-gradient-to-r md:from-white/10 md:via-transparent md:to-transparent pointer-events-none" />
        </div>

        {/* Content Area */}
        <div className="flex-[1.2] p-8 sm:p-12 md:p-12 lg:p-16 flex flex-col justify-center bg-white order-2 md:order-1">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8 font-display tracking-tightest leading-tight">
              {service.title}
            </h3>
            
              <p className="text-base md:text-lg lg:text-xl text-gray-500 mb-8 lg:mb-12 leading-relaxed max-w-2xl font-display font-light">
              {service.description}
            </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 lg:gap-y-4 mb-8 lg:mb-12">
              {service.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-2 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                  <span className="text-gray-600 font-medium text-xs md:text-sm font-display leading-snug">{feature}</span>
                </div>
              ))}
            </div>

              <div className="flex flex-wrap gap-2 mb-10 lg:mb-12">
              {service.technologies.map((tech, i) => (
                <span key={i} className="px-3 md:px-5 py-1.5 md:py-2 bg-gray-50 text-gray-500 text-[10px] md:text-xs font-bold rounded-full uppercase tracking-wider font-display border border-gray-100/50 group-hover:border-indigo-100 transition-colors">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-auto">
              <a 
                href="/contact" 
                className="inline-flex items-center gap-3 px-8 md:px-12 py-4 md:py-5 bg-gray-900 text-white rounded-2xl font-bold text-sm md:text-lg hover:bg-indigo-600 transition-all duration-500 group font-display shadow-xl hover:shadow-indigo-500/20 w-full sm:w-auto justify-center sm:justify-start"
              >
                Start Project
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

import { ArrowRight } from 'lucide-react'

import ProcessSection from './ProcessSection'
import ServiceTiersComparison from './ServiceTiersComparison'

export default function ServicesDetailed() {
  return (
    <section className="relative w-full py-28 sm:py-48 bg-white">
      {/* Ultra-Light Market-Standard Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ 
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: '64px 64px' 
      }} />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="px-4 sm:px-6 lg:px-8 mb-24 sm:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-12"
          >
            <div className="max-w-4xl">
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold text-gray-900 mb-10 font-display tracking-tightest leading-[0.9]">
                Our <span className="text-indigo-600">Services</span>
              </h2>
              <p className="text-xl sm:text-2xl text-gray-400 font-display leading-relaxed font-light max-w-3xl">
                We bridge the gap between vision and reality through high-performance engineering and sophisticated design architectures.
              </p>
            </div>
            <div className="hidden md:block pb-4">
              <div className="flex items-center gap-4 text-xs font-black text-gray-300 uppercase tracking-[0.5em] font-display">
                Scroll to explore
                <div className="w-16 h-[1px] bg-gray-100" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stacked Showcase */}
        <div className="flex flex-col">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Development Process Integration - New Premium Version */}
        <ProcessSection />

        {/* Service Tiers Comparison - New Premium Version */}
        <ServiceTiersComparison />
      </div>
    </section>
  )
}
