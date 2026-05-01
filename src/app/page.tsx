// Vercel deployment trigger - Premium Redesign
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Quote from '@/components/Quote'
import TechnologiesMarquee from '@/components/TechnologiesMarquee'
import TechnoShowcase from '@/components/TechnoShowcase'
import WhyChooseUs from '@/components/WhyChooseUs'
import ImageContentSection from '@/components/ImageContentSection'
import FinalCTASection from '@/components/FinalCTASection'
import ImageContentSectionInvert from '@/components/ImageContentSectionInvert'

export default function Home() {
  return (
    <div className="relative isolate bg-white scroll-smooth">
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
      <main className="pt-16 sm:pt-20">
        <Hero />

        <Quote />

        {/* <TechnologiesMarquee /> */}

        <TechnoShowcase />

        <WhyChooseUs />

        {/* <ImageContentSection imgSrc='/Teja-Davuluri.jpeg' /> */}
        {/* <ImageContentSectionInvert bgClass="bg-transparent" /> */}


        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
