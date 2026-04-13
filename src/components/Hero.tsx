export default function Hero() {
  return (
    <div className="flex flex-col justify-center min-h-[70vh] sm:min-h-[70vh] lg:min-h-screen py-24 sm:py-48">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 overflow-hidden text-center w-full">
        <div className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-1.5 text-sm font-medium ring-1 ring-gray-500/10 ring-inset">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="-ml-1.5 size-5 text-indigo-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          <span className="text-gray-700">Built with secure, modern tech stack</span>
        </div>
        <h1 className="mx-auto mt-2 max-w-3xl text-[48px] leading-[1.1em] font-medium tracking-tight text-slate-900 sm:text-5xl sm:leading-tight lg:text-7xl lg:max-w-4xl">
          <span className="font-display">We Develop Amazing </span>{' '}
          <span className="relative text-indigo-600 lg:whitespace-nowrap">
            <svg
              aria-hidden="true"
              viewBox="0 0 418 42"
              className="absolute top-1/2 left-0 h-[0.58em] w-full fill-indigo-300/70 lg:top-2/3"
              preserveAspectRatio="none"
            >
              <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
            </svg>
            <span className="relative font-display">Software For Your Business</span>
          </span>
        </h1>
        <p className="mx-auto mt-12 max-w-3xl text-xl tracking-tight text-slate-700">From MVP to enterprise‑grade platforms, we handle architecture, development, and long‑term support so your team can focus on growth.</p>
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
    </div>
  )
}
