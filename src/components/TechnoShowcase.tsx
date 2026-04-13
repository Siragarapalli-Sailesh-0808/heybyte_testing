import React from "react";

const technologies: ({ name: string; logo: string } | null)[] = [
  { name: "React", logo: "/technologies/React.png" },
  null,
  { name: "Node.js", logo: "/technologies/Node-Js.png" },
  { name: "Python", logo: "/technologies/Python.png" },
  null,
  { name: "AWS", logo: "/technologies/AWS.png" },
  null,
  { name: "Azure", logo: "/technologies/Azure.png" },
  null,
  { name: "Docker", logo: "/technologies/Docker.png" },
  { name: "Kubernetes", logo: "/technologies/Kubernetes.png" },
  null,
  null,
  { name: "Go", logo: "/technologies/Go.png" },
  { name: "Java", logo: "/technologies/Java.png" },
  null,
  { name: "Jenkins", logo: "/technologies/Jenkins.png" },
  { name: "Cloud", logo: "/technologies/cloud.png" },
];

export default function TechnoShowcase() {
  return (
    <section className="font-display w-full bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Header */}
      <div className="mb-8 sm:mb-10 md:mb-12 max-w-xl">
        <p className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2 sm:mb-3">
          Our Technologies
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          The tools we use to build modern solutions.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4">
        {technologies.map((tech, index) =>
          tech === null ? (
            <div key={`empty-${index}`} style={{ height: "140px" }} className="hidden md:block rounded-sm" />
          ) : (
          <div
            key={tech.name}
            style={{ height: "140px" }}
            className="bg-gray-100 rounded-sm flex flex-col items-center justify-between p-4 group hover:bg-gray-200 transition-colors duration-200"
          >
            <div className="flex-1 flex items-center justify-center w-full overflow-hidden">
              <img
                src={tech.logo}
                alt={tech.name}
                width={56}
                height={56}
                style={{ width: 56, height: 56, objectFit: "contain" }}
                className="md:grayscale group-hover:grayscale-0 transition-all duration-200"
              />
            </div>
            <p className="mt-2 text-[9px] font-semibold tracking-widest text-gray-500 uppercase self-start leading-tight">
              {tech.name}
            </p>
          </div>
          )
        )}
      </div>
    </section>
  );
}
