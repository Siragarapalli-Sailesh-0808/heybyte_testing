import Header from '@/components/Header'
import ServicesDetailed from '@/components/ServicesDetailed'
import ServiceTiersComparison from '@/components/ServiceTiersComparison'
import ServicesHero from '@/components/ServicesHero'
import Footer from '@/components/Footer'
import FinalCTASection from '@/components/FinalCTASection'
import Image from "next/image";


export default function ServicesPage() {
  return (
    <div className="relative isolate bg-white scroll-smooth">
      {/* SVG grid pattern background (EXACT from Home) */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 right-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 opacity-70"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <Header />
      <main>
        <ServicesHero />
        <ServicesDetailed />
        <ServiceTiersComparison />

        {/* Our Technology Stack Section */}
        <section className="py-20 sm:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-base font-semibold text-indigo-600 mb-2 font-display">Our Technology Stack</h2>
              <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-display">Cutting-edge tools and frameworks powering our solutions</h3>
            </div>
            <div className="space-y-10 flex flex-col items-center">
              {/* Frontend */}
              <div className="w-full flex flex-col items-center">
                <h4 className="text-lg font-semibold text-indigo-600 mb-4 font-display text-center">Frontend</h4>
                <div className="flex flex-wrap gap-6 items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2" ><Image src="/technologies/React.png" alt="React" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">React</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Next-Js.png" alt="Next.js" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Next.js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Vue-Js.png" alt="Vue.js" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Vue.js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Angular.png" alt="Angular" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Angular</span>
                  </div>
                </div>
              </div>
              {/* Backend */}
              <div className="w-full flex flex-col items-center">
                <h4 className="text-lg font-semibold text-indigo-600 mb-4 font-display text-center">Backend</h4>
                <div className="flex flex-wrap gap-6 items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Node-Js.png" alt="Node.js" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Node.js</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Python.png" alt="Python" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Python</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Java.png" alt="Java" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Java</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Go.png" alt="Go" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Go</span>
                  </div>
                </div>
              </div>
              {/* Database */}
              <div className="w-full flex flex-col items-center">
                <h4 className="text-lg font-semibold text-indigo-600 mb-4 font-display text-center">Database</h4>
                <div className="flex flex-wrap gap-6 items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/postgressql.png" alt="PostgreSQL" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">PostgreSQL</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/MongoDB.png" alt="MongoDB" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">MongoDB</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Redis.png" alt="Redis" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Redis</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/MySQL.png" alt="MySQL" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">MySQL</span>
                  </div>
                </div>
              </div>
              {/* Cloud */}
              <div className="w-full flex flex-col items-center">
                <h4 className="text-lg font-semibold text-indigo-600 mb-4 font-display text-center">Cloud</h4>
                <div className="flex flex-wrap gap-6 items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/AWS.png" alt="AWS" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">AWS</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Azure.png" alt="Azure" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Azure</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/cloud.png" alt="Google Cloud" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Google Cloud</span>
                  </div>
                </div>
              </div>
              {/* DevOps */}
              <div className="w-full flex flex-col items-center">
                <h4 className="text-lg font-semibold text-indigo-600 mb-4 font-display text-center">DevOps</h4>
                <div className="flex flex-wrap gap-6 items-center justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Docker.png" alt="Docker" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Docker</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Kubernetes.png" alt="Kubernetes" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Kubernetes</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24  rounded flex items-center justify-center mb-2"><Image src="/technologies/Jenkins.png" alt="Jenkins" width={100} height={100} /></div>
                    <span className="font-nav text-gray-800">Jenkins</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <FinalCTASection />

        
        
      </main>
      <Footer />
    </div>
  )
}
