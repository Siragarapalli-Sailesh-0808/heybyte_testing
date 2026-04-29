import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ImageContentSectionInvert from '@/components/ImageContentSectionInvert'
import AboutTeam from '@/components/AboutTeam'
import FinalCTASection from '@/components/FinalCTASection'
import Metrics from '@/components/Metrics'

export const metadata: Metadata = {
  title: 'About Us - HeyByte',
  description: 'Learn more about our team and vision.',
}

export default function AboutUsPage() {
  return (
    <div className="relative isolate bg-white min-h-screen flex flex-col">
      <svg
        aria-hidden="true"
        className="absolute inset-0 right-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 opacity-70"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="about-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#about-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>
      <Header />
      
      <main className="flex-grow overflow-x-hidden w-full">
        <AboutTeam />
        <Metrics />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  )
}
