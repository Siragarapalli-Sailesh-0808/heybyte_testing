import Header from '@/components/Header'
import ServicesDetailed from '@/components/ServicesDetailed'
import ServiceTiersComparison from '@/components/ServiceTiersComparison'
import ServicesHero from '@/components/ServicesHero'
import Footer from '@/components/Footer'
import FinalCTASection from '@/components/FinalCTASection'
import Image from "next/image";
import TechStack from '@/components/TechStack'


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
        <ServicesDetailed />
        
        <TechStack />

        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
