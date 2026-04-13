import {
  BoltIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/solid";

const reasons = [
  {
    icon: BoltIcon,
    title: "Fast Delivery",
    description:
      "We move quickly without cutting corners — from kickoff to launch, our streamlined process keeps your project on time and on budget.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Reliable & Secure",
    description:
      "Security and stability are baked into everything we build. Your product is built to last with industry best practices at every layer.",
  },
  {
    icon: UserGroupIcon,
    title: "Dedicated Team",
    description:
      "You get a focused team that's fully invested in your success — not a ticket queue. We communicate clearly and stay accountable.",
  },
  {
    icon: CubeTransparentIcon,
    title: "Tailored Solutions",
    description:
      "We don't do one-size-fits-all. Every solution is crafted around your specific goals, users, and technical requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="font-display w-full bg-transparent py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Badge */}
      <div className="flex justify-center mb-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs font-semibold text-gray-500 uppercase tracking-widest shadow-sm">
          <span className="text-indigo-500">✦</span>
          Why Choose Us
        </span>
      </div>

      {/* Heading */}
      <div className="text-center mb-8 md:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-900 leading-tight">
          We build products that
        </h2>
        <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-indigo-600 leading-tight">
          actually work.
        </h2>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-4xl mx-auto">
        {reasons.map((reason) => {
          const Icon = reason.icon;
          return (
            <div
              key={reason.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-4"
            >
              {/* Icon circle */}
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-indigo-600" />
              </div>

              {/* Text */}
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1.5">
                  {reason.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
