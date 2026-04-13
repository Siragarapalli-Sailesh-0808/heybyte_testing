const services = [

  {
    title: 'Cloud Architecture',
    description:
      'Design and implement scalable, secure, and cost-effective cloud infrastructure that grows with your business needs and ensures high availability.',
    features: [
      'Multi-cloud strategy and migration',
      'Serverless architecture design',
      'Container orchestration with Kubernetes',
      'Cloud security and compliance',
      'Auto-scaling and load balancing',
      'Disaster recovery planning',
    ],
    technologies: [
      'AWS',
      'Azure',
      'Google Cloud',
      'Docker',
      'Kubernetes',
      'Terraform',
    ],
    learnMore: '#',
  },
  {
    title: 'Mobile Solutions',
    description:
      'Create stunning native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.',
    features: [
      'Native iOS and Android development',
      'Cross-platform React Native apps',
      'Progressive Web Apps (PWA)',
      'Mobile UI/UX design',
      'App Store optimization',
      'Push notifications and analytics',
    ],
    technologies: [
      'React Native',
      'Swift',
      'Kotlin',
      'Flutter',
      'Firebase',
      'Expo',
    ],
    learnMore: '#',
  },
  {
    title: 'Web Applications',
    description:
      'Build modern, responsive web applications with cutting-edge frameworks that provide seamless experiences across all devices and browsers.',
    features: [
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'E-commerce platforms',
      'Content Management Systems',
      'Real-time collaboration tools',
      'API development and integration',
    ],
    technologies: [
      'React',
      'Next.js',
      'Vue.js',
      'Node.js',
      'GraphQL',
      'PostgreSQL',
    ],
    learnMore: '#',
  },
  {
    title: 'DevOps & CI/CD',
    description:
      'Streamline your development workflow with automated testing, continuous integration, and deployment pipelines that accelerate time-to-market.',
    features: [
      'CI/CD pipeline setup and optimization',
      'Infrastructure as Code (IaC)',
      'Automated testing frameworks',
      'Monitoring and logging solutions',
      'Security scanning and compliance',
      'Performance optimization',
    ],
    technologies: [
      'Jenkins',
      'GitLab CI',
      'GitHub Actions',
      'Ansible',
      'Prometheus',
      'Grafana',
    ],
    learnMore: '#',
  },
  {
    title: 'Technical Consulting',
    description:
      'Get expert guidance on technology strategy, architecture decisions, and digital transformation initiatives from our seasoned consultants.',
    features: [
      'Technology stack evaluation',
      'Architecture review and optimization',
      'Digital transformation roadmap',
      'Technical due diligence',
      'Team training and mentorship',
      'Best practices implementation',
    ],
    technologies: [
      'Agile',
      'Scrum',
      'TOGAF',
      'AWS Well-Architected',
      'ITIL',
      'SAFe',
    ],
    learnMore: '#',
  },
]

export default function ServicesDetailed() {
  return (
    <>
      <section className="bg-transparent min-h-[80vh] sm:min-h-[70vh] lg:min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-all duration-300 group flex flex-col">
                <h4 className="text-xl font-bold text-gray-900 mb-3 font-display">{service.title}</h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed font-nav">{service.description}</p>
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-indigo-600 mb-2 font-display">Key Features</h5>
                  <ul className="list-disc list-inside space-y-1 font-nav text-gray-600 text-sm">
                    {service.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-indigo-600 mb-2 font-display">Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, i) => (
                      <span key={i} className="inline-block rounded bg-indigo-50 text-indigo-700 px-3 py-1 text-xs font-semibold font-nav">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a href={service.learnMore} className="mt-auto inline-block text-indigo-600 font-semibold font-nav hover:underline">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Development Process Section */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-base font-semibold text-indigo-600 mb-2 font-display">Our Development Process</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-display">A proven methodology that delivers exceptional results</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg ring-1 ring-gray-900/10 p-6 relative h-full">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mb-2">1</div>
                <h4 className="font-semibold text-lg text-gray-900 mb-1 font-display">Discovery</h4>
                <p className="text-gray-600 text-sm font-nav mb-2">We start by understanding your business goals, technical requirements, and project constraints through detailed consultations.</p>
                <span className="text-xs text-indigo-600 font-semibold font-nav">1-2 weeks</span>
                {/* Arrow to next step */}
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12h36m0 0l-6-6m6 6l-6 6" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg ring-1 ring-gray-900/10 p-6 relative h-full">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mb-2">2</div>
                <h4 className="font-semibold text-lg text-gray-900 mb-1 font-display">Planning</h4>
                <p className="text-gray-600 text-sm font-nav mb-2">Our team creates a comprehensive project roadmap, technical architecture, and detailed specifications for your approval.</p>
                <span className="text-xs text-indigo-600 font-semibold font-nav">1-2 weeks</span>
                {/* Arrow to next step */}
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12h36m0 0l-6-6m6 6l-6 6" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg ring-1 ring-gray-900/10 p-6 relative h-full">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mb-2">3</div>
                <h4 className="font-semibold text-lg text-gray-900 mb-1 font-display">Development</h4>
                <p className="text-gray-600 text-sm font-nav mb-2">Agile development sprints with regular demos and feedback loops ensure your vision comes to life exactly as planned.</p>
                <span className="text-xs text-indigo-600 font-semibold font-nav">8-16 weeks</span>
                {/* Arrow to next step */}
                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 12h36m0 0l-6-6m6 6l-6 6" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex flex-col items-center text-center bg-white rounded-2xl shadow-lg ring-1 ring-gray-900/10 p-6 h-full">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center text-2xl font-bold mb-2">4</div>
                <h4 className="font-semibold text-lg text-gray-900 mb-1 font-display">Deployment</h4>
                <p className="text-gray-600 text-sm font-nav mb-2">Rigorous testing, optimization, and smooth deployment to production with comprehensive documentation and training.</p>
                <span className="text-xs text-indigo-600 font-semibold font-nav">1-2 weeks</span>
              </div>
            </div>
          </div>
        </section>
        
    </>
  )
}
