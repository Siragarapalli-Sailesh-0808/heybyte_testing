'use client'

import React, { useState, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface TeamMember {
  id: number
  name: string
  role: string
  image: string
  quote: string
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Teja Davuluri",
    role: "Founder & CEO",
    image: "/Teja-Davuluri.jpeg",
    quote: "Building Heybyte has been about bridging the gap between complex engineering and intuitive user experiences. We don't just write code; we solve problems."
  },
  {
    id: 2,
    name: "Bhuvana",
    role: "Founder’s Office Associate",
    image: "/Bhuvana.png",
    quote: "Operational excellence is at the heart of everything we do. Ensuring our vision translates into seamless execution for every client."
  },
  {
    id: 3,
    name: "Krishna Manohar",
    role: "Backend Developer",
    image: "/Krishna-Manohar.png",
    quote: "Scalability and security aren't just features; they're the foundation. I focus on building robust systems that grow with our clients' ambitions."
  },
  {
    id: 4,
    name: "Sailesh Siragarapalli",
    role: "Frontend Developer",
    image: "/Sailesh.png",
    quote: "Crafting digital experiences that feel alive. I'm passionate about performance, accessibility, and pixel-perfect implementation."
  }
]

const FlipCard = ({ member, index }: { member: TeamMember; index: number }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  
  // Dramatically pushed vertical offsets for a stronger wave effect
  const offsets = [
    "translate-y-[20px] md:translate-y-[40px]", 
    "translate-y-[-30px] md:translate-y-[-60px]",
    "translate-y-[40px] md:translate-y-[80px]", 
    "translate-y-[-25px] md:translate-y-[-50px]",
    "translate-y-[45px] md:translate-y-[90px]", 
    "translate-y-[-35px] md:translate-y-[-70px]"
  ];
  const offset = offsets[index % offsets.length];
  
  // Responsive sizes: Smaller for mobile, standard for desktop
  const dimensions = [
    "w-[220px] h-[300px] md:w-[260px] md:h-[360px]", 
    "w-[220px] h-[280px] md:w-[260px] md:h-[320px]", 
    "w-[220px] h-[320px] md:w-[260px] md:h-[380px]", 
    "w-[220px] h-[290px] md:w-[260px] md:h-[340px]", 
    "w-[220px] h-[310px] md:w-[260px] md:h-[370px]", 
    "w-[220px] h-[285px] md:w-[260px] md:h-[330px]"
  ];
  const dimension = dimensions[index % dimensions.length];

  return (
    <div 
      className={`relative ${dimension} ${offset} perspective-1000 group cursor-pointer transition-transform duration-500`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="relative w-full h-full transition-all duration-500 preserve-3d"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        {/* Front Side: Image */}
        <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-xl">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80" />
          <div className="absolute bottom-6 left-6 right-6">
            <h4 className="text-xl font-bold text-white font-display leading-tight">{member.name}</h4>
            <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[0.2em] mt-1 font-display">
              {member.role}
            </p>
          </div>
        </div>

        {/* Back Side: Quote */}
        <div
          className="absolute inset-0 backface-hidden rounded-2xl bg-white shadow-2xl p-8 flex flex-col justify-between border border-gray-100"
          style={{ transform: 'rotateY(180deg)' }}
        >
          <div>
            <div className="w-8 h-[2px] bg-indigo-600 mb-6" />
            <p className="text-sm sm:text-base text-gray-600 font-display leading-relaxed font-light italic">
              "{member.quote}"
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-gray-900 font-display">{member.name}</h4>
            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-[0.15em] mt-0.5 font-display">
              {member.role}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function AboutTeam() {
  const [isPaused, setIsPaused] = useState(false)

  // Infinite Marquee Logic
  const doubleMembers = [...teamMembers, ...teamMembers]

  return (
    <section className="relative w-full py-20 md:py-28 bg-white overflow-hidden">
      {/* Header Section */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 mb-10 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-left"
          >
            <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-gray-900 font-display leading-[1.1] tracking-tight">
              Heybyte grows <br /> with <span className="text-indigo-600">you.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4 md:justify-end"
          >
            <div className="w-8 h-[1px] bg-gray-200 hidden sm:block mb-2" />
            <div className="text-left md:text-right">
              <span className="text-3xl md:text-4xl font-black text-gray-900 font-display block leading-none">50+</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] font-display">Projects Delivered</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Carousel Container */}
      <div 
        className="relative w-full py-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Fade Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 sm:w-64 z-10 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 sm:w-64 z-10 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />

        <div className="flex overflow-hidden py-12">
          <motion.div 
            className="flex gap-8 px-4"
            animate={{ x: isPaused ? undefined : "-50%" }}
            transition={{
              duration: 25, 
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: 'fit-content' }}
          >
            {doubleMembers.map((member, i) => (
              <div key={i} className="flex-shrink-0">
                <FlipCard member={member} index={i} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Custom Styles for 3D */}
      <style jsx global>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </section>
  )
}
