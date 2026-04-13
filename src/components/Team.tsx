import Image from 'next/image'

export default function Team() {
  const teamMembers = [
    {
      name: 'Dr. Emily Watson',
      role: 'Chief Technology Officer',
      specialty: 'AI & Machine Learning',
      image: '/person.jpg',
      alt: 'Professional woman with short brown hair in navy blazer smiling confidently in modern office'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Cloud Architecture',
      specialty: 'Cloud Infrastructure',
      image: '/person.jpg',
      alt: 'African American man in gray suit with warm smile in corporate setting'
    },
    {
      name: 'Sophia Martinez',
      role: 'Lead Mobile Developer',
      specialty: 'Cross-Platform Development',
      image: '/person.jpg',
      alt: 'Hispanic woman with long dark hair in professional attire with friendly expression'
    },
    {
      name: 'David Kim',
      role: 'DevOps Director',
      specialty: 'CI/CD & Automation',
      image: '/person.jpg',
      alt: 'Asian man in business casual attire with glasses looking professional and approachable'
    }
  ]

  return (
    <section className="bg-transparent min-h-[80vh] sm:min-h-[70vh] lg:min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-600 mb-2 font-display">
            Our Team
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-display">
            Meet The Innovators Behind VortexSoft
          </h3>
          <p className="mx-auto max-w-3xl text-lg text-gray-600 font-nav">
            A diverse team of experts passionate about pushing the boundaries of technology
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-900/5 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                <Image
                  src={member.image}
                  alt={member.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1 font-display">
                  {member.name}
                </h4>
                <p className="text-sm font-semibold text-indigo-600 mb-3 font-display">
                  {member.role}
                </p>
                <div className="flex items-start gap-2 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                  </svg>
                  <span className="text-sm text-gray-600 font-nav">
                    {member.specialty}
                  </span>
                </div>

                {/* Connect Button */}
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
                  style={{ fontFamily: 'var(--font-nav)' }}
                >
                  Connect
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
