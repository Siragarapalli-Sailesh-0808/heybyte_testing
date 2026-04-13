const features = [
  {
    name: 'Built with Next.js 15',
    description:
      "heybyte is a well-structured, thoughtfully componentized Next.js 15 project, giving you a codebase that's productive and enjoyable to work in.",
  },
  {
    name: 'TypeScript 5',
    description:
      'Authored with the latest version of TypeScript by nerds who get way too much satisfaction out of getting the types just right, giving you the best possible developer experience.',
  },
  {
    name: 'Tailwind CSS 4',
    description:
      'You can trust that all the code follows Tailwind CSS best practices. Everything is styled with utility classes, directly in the markup. There are no complex configuration variables or CSS to manage.',
  },
  {
    name: 'HeadlessUI React',
    description:
      'HeadlessUI React provides excellent components. These components have been carefully designed and developed to be keyboard accessible, ensuring the template provides users with the best possible screen reader experience.',
  },
  {
    name: 'Simple to deploy',
    description:
      'The template is carefully tested and production-ready, making it easy to deploy to any platform that supports Next.js applications, such as Vercel, Netlify, AWS, etc.',
  },
  {
    name: '100% responsive',
    description:
      'heybyte is designed to be responsive on all devices, from mobile to desktop. heybyte is built with the latest Tailwind CSS 4, which is a mobile-first CSS framework.',
  },
  {
    name: 'RTL support',
    description:
      'heybyte supports right-to-left languages out of the box, so you can easily localize your site for a global audience.',
  },
  {
    name: 'Easy to customize',
    description:
      "heybyte is designed to be easy to customize to your liking, with a well-organized file structure and clean code.",
  },
]

export default function Features() {
  return (
    <>
      <section className="bg-white min-h-[80vh] sm:min-h-[70vh] lg:min-h-screen flex items-center justify-center" id="features">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div className="col-span-2">
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl font-display">
                What&apos;s included
              </h2>
              <p className="mt-6 text-base/7 text-gray-600 font-nav">
                heybyte comes with everything you need to get started building a beautiful, modern blog, news and magazine
                websites. Here are just a few of the features you&apos;ll find in the template that make it a great choice
                for your next project.
              </p>
            </div>
            <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-9">
                  <dt className="font-semibold text-gray-900 font-display">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="absolute top-1 left-0 size-5 text-indigo-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 font-nav">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <hr className="border-slate-200" />
      </div>
    </>
  )
}
