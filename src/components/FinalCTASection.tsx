import React from "react";

const FinalCTASection: React.FC = () => (
  <>
    <hr className="border-slate-200" />

    <section className="bg-transparent py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-display">
            Ready To Transform Your Digital Future?
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600 mb-10" style={{ fontFamily: 'var(--font-nav)' }}>
            Let&apos;s discuss how heybyte can help you achieve your technology goals. Schedule a free consultation with our experts today.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white text-base font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Schedule Consultation
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 ring-1 ring-indigo-600 text-indigo-600 text-base font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
              style={{ fontFamily: 'var(--font-nav)' }}
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Consultation */}
          <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-indigo-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-nav)' }}>
              Free Consultation
            </h3>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-nav)' }}>
              No commitment required. Let&apos;s explore possibilities together.
            </p>
          </div>

          {/* Quick Response */}
          <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-indigo-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-nav)' }}>
              Quick Response
            </h3>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-nav)' }}>
              We&apos;ll get back to you within 24 hours with next steps.
            </p>
          </div>

          {/* NDA Available */}
          <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-900/5 text-center">
            <div className="flex items-center justify-center w-14 h-14 rounded-full bg-indigo-100 mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7 text-indigo-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-nav)' }}>
              NDA Available
            </h3>
            <p className="text-sm text-gray-600" style={{ fontFamily: 'var(--font-nav)' }}>
              Your ideas are safe. We sign NDAs before discussions.
            </p>
          </div>
        </div>
      </div>
    </section>
    <hr className="border-slate-200" />

  </>
);

export default FinalCTASection;
