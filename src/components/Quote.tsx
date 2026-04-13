import React from "react";

const Quote: React.FC = () => (
  <>
    <hr className="border-slate-200" />
    <section className="bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          ***<br />
          Ready to scale your product?
          <br />
          Let's talk.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4 sm:gap-x-5">
          <a
            className="group inline-flex items-center justify-center rounded-xl py-3 px-7 text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-700 transition-colors duration-150"
            href="/services"
            rel="noopener noreferrer"
          >
            View Services
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="ml-2 h-5 w-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            className="group inline-flex items-center justify-center rounded-xl py-3 px-7 text-base font-semibold border-2 border-indigo-600 text-indigo-600 bg-white hover:bg-indigo-50 active:bg-indigo-100 transition-colors duration-150"
            href="/contact"
            rel="noopener noreferrer"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
    <hr className="border-slate-200" />
  </>
);

export default Quote;
