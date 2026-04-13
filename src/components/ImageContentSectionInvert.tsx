import React from "react";


interface ImageContentSectionProps {
  bgClass?: string;
  imgSrc?: string;
}
const ImageContentSection: React.FC<ImageContentSectionProps> = ({ bgClass = "bg-white", imgSrc = "/Teja-Davuluri.jpeg" }) => (
  <>
    <hr className="border-slate-200" />

    <section className={`${bgClass} py-20 sm:py-28`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imgSrc}
            alt="Showcase"
            className="rounded-2xl shadow-lg w-full max-w-xs md:max-w-md object-contain transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-display">Why Choose Us?</h2>
          <p className="text-lg text-gray-700 mb-6 font-nav">
            We ship production-ready software 40% faster than agencies, using Next.js, Node.js, and battle-tested cloud infrastructure. Our engineers solve complex problems so your team doesn't have to.
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
            <li>100% client retention, 98% on-time delivery</li>
            <li>Fixed-bid projects, no surprises</li>
            <li>Next.js, React Native, Node.js, PostgreSQL</li>
            <li>24/7 monitoring and 1-hour support SLA</li>
          </ul>
        </div>
      </div>
    </section>
    <hr className="border-slate-200" />

  </>
);

export default ImageContentSection;
