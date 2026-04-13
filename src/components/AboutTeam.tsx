const teamMembers = [
  {
    name: "Teja Davuluri",
    role: "Founder & CEO",
    image: "/Teja-Davuluri.jpeg",
    whatsapp: "https://wa.me/1234567890",
  },
  {
    name: "Rahul Sharma",
    role: "Lead Engineer",
    image: "/person.jpg",
    whatsapp: "https://wa.me/1234567891",
  },
  {
    name: "Priya Nair",
    role: "UI/UX Designer",
    image: "/person.jpg",
    whatsapp: "https://wa.me/1234567892",
  },
  {
    name: "Arjun Reddy",
    role: "DevOps Engineer",
    image: "/person.jpg",
    whatsapp: "https://wa.me/1234567893",
  },
];

export default function AboutTeam() {
  return (
    <section className="font-display w-full bg-gray-100 pt-[77px] sm:pt-[91px] md:pt-[104px] pb-14 sm:pb-16 md:pb-20 px-4 sm:px-8 md:px-16 lg:px-24">
      {/* Top header row */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-12">
        {/* Left */}
        <div className="max-w-md">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Our Team <span className="text-indigo-600">[{teamMembers.length}]</span>
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-indigo-600 leading-tight">
            The People Behind the Vision
          </h2>
        </div>

        {/* Right */}
        <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-md md:pt-8">
          Our team is a blend of engineers, designers, and problem-solvers dedicated to
          building products that matter. We come together with one shared goal: to turn
          your ideas into software that works beautifully.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-2xl overflow-hidden flex flex-col"
          >
            {/* Photo */}
            <div className="w-full aspect-[16/16] overflow-hidden bg-gray-200">
              <img
                src={member.image}
                alt={member.name}
                width={300}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                // className="grayscale"
              />
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold mb-0.5">
                  {member.role}
                </p>
                <h3 className="text-base font-bold text-indigo-600">{member.name}</h3>
              </div>

              {/* CTA button */}
              {/* <a
                href={member.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1.5 text-xs font-semibold text-gray-700 hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all duration-200"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                Talk With {member.name.split(" ")[0]}
              </a> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
