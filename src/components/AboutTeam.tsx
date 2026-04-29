import React from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Teja Davuluri",
    role: "Founder & CEO",
    image: "/Teja-Davuluri.jpeg",
  },
  {
    name: "Bhuvana",
    role: "Founder’s Office Associate",
    image: "/Bhuvana.png",
  },
  {
    name: "Krishna Manohar",
    role: "Backend Developer",
    image: "/Krishna-Manohar.png",
  },
  {
    name: "Sailesh Siragarapalli",
    role: "Frontend Developer",
    image: "/Sailesh.png",
  },
];

const TeamMemberCard = ({ member }: { member: TeamMember }) => {
  return (
    <div className="flex flex-col items-center gap-6 group transition-all duration-300 px-8 sm:px-12 md:px-16">
      <div className="relative">
        {/* Soft glowing ring on hover */}
        <div className="absolute inset-0 rounded-full bg-indigo-600/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110" />
        
        <div className="relative w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] md:w-[180px] md:h-[180px] rounded-full overflow-hidden border-2 border-white shadow-sm transition-all duration-500 scale-100 group-hover:scale-105 group-hover:border-indigo-600/50">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 font-display">
          {member.name}
        </h3>
        <p className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-[0.15em] mt-1 font-display">
          {member.role}
        </p>
      </div>
    </div>
  );
};

const TeamMarquee = () => {
  // Triple members to ensure enough coverage for infinite scroll
  const displayMembers = [...teamMembers, ...teamMembers, ...teamMembers, ...teamMembers];

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Gradient Fade Edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-r from-[#F5F6FA] via-[#F5F6FA]/80 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 z-10 bg-gradient-to-l from-[#F5F6FA] via-[#F5F6FA]/80 to-transparent pointer-events-none" />

      <div className="flex animate-marquee pause-on-hover whitespace-nowrap w-fit">
        {displayMembers.map((member, index) => (
          <div key={index} className="inline-block">
            <TeamMemberCard member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default function AboutTeam() {
  return (
    <section className="bg-[#F5F6FA] py-20 sm:py-32 lg:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 mb-20 sm:mb-28">
          <div className="max-w-2xl">
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] text-gray-400 mb-6 font-display">
              OUR TEAM <span className="text-indigo-600">[{teamMembers.length}]</span>
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-600 font-display leading-[1.1] tracking-tight">
              The People Behind <br className="hidden sm:block" /> the Vision
            </h2>
          </div>
          <div className="max-w-md lg:pb-2">
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed font-display font-light">
              Our team is a blend of engineers, designers, and problem-solvers dedicated to building products that matter. We come together with one shared goal: to turn your ideas into software that works beautifully.
            </p>
          </div>
        </div>
      </div>

      <TeamMarquee />
    </section>
  );
}
