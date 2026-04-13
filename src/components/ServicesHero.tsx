export default function ServicesHero() {
  return (
    <section className="flex flex-col justify-center min-h-[80vh] sm:min-h-[60vh] lg:min-h-[70vh] bg-gradient-to-br from-indigo-50 via-white to-white text-center w-full pt-16 pb-10 sm:py-0">
      <div className="mx-auto max-w-4xl px-2 sm:px-8">
        <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 font-display">
          Our Services
        </h1>
        <p className="mx-auto max-w-xs xs:max-w-md sm:max-w-2xl text-base xs:text-lg sm:text-xl text-gray-600 font-nav mb-6 sm:mb-8">
          Discover the full spectrum of technology solutions we offer. From AI-powered innovation to cloud, mobile, web, and DevOps, our team delivers expertise to help you achieve your digital goals.
        </p>
        <div className="flex flex-wrap justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-6">
          <span className="inline-block rounded-full bg-indigo-100 text-indigo-700 px-3 py-1.5 text-xs xs:text-sm font-semibold font-nav">AI/ML Development</span>
          <span className="inline-block rounded-full bg-indigo-100 text-indigo-700 px-3 py-1.5 text-xs xs:text-sm font-semibold font-nav">Cloud Architecture</span>
          <span className="inline-block rounded-full bg-indigo-100 text-indigo-700 px-3 py-1.5 text-xs xs:text-sm font-semibold font-nav">Mobile Solutions</span>
          <span className="inline-block rounded-full bg-indigo-100 text-indigo-700 px-3 py-1.5 text-xs xs:text-sm font-semibold font-nav">Web Applications</span>
          <span className="inline-block rounded-full bg-indigo-100 text-indigo-700 px-3 py-1.5 text-xs xs:text-sm font-semibold font-nav">DevOps</span>
          <span className="inline-block rounded-full bg-indigo-100 text-indigo-700 px-3 py-1.5 text-xs xs:text-sm font-semibold font-nav">Consulting</span>
        </div>
      </div>
    </section>
  )
}
