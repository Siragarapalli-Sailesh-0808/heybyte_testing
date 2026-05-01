'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Target, Users, Zap } from 'lucide-react'

const cards = [
  {
    number: '01',
    icon: Shield,
    title: 'Reliable & Secure',
    description:
      'Built on proven architectures with security and stability integrated at every level of our development process.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Fast Delivery',
    description:
      'We move fast with precision - delivering on time without ever compromising on quality.',
  },
  {
    number: '03',
    icon: Users,
    title: 'Dedicated Team',
    description:
      'A focused team that works closely with you, ensuring absolute clarity and accountability.',
  },
  {
    number: '04',
    icon: Target,
    title: 'Tailored Solutions',
    description:
      'Every solution is crafted around your specific business goals and technical needs.',
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -1470])
  const brandColor = useTransform(
    scrollYProgress,
    [0, 0.35, 0.7, 1],
    ['#E5E5E5', '#4F46E5', '#E5E5E5', '#4F46E5']
  )

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center px-4">
          <motion.div
            style={{ color: brandColor }}
            className="select-none whitespace-nowrap text-center font-display text-[18vw] font-black leading-none tracking-tight sm:text-[15vw] lg:text-[12vw]"
          >
            HeyByte
          </motion.div>
        </div>

        <div className="relative z-10 flex h-full items-center">
          <motion.div
            style={{ x }}
            className="flex w-max gap-10 px-[calc((100vw-450px)/2)] max-sm:px-[9vw]"
          >
            {cards.map((card) => (
              <article
                key={card.number}
                className="relative flex h-[450px] w-[450px] shrink-0 flex-col justify-between rounded-[2rem] border border-white/70 bg-white/80 p-9 shadow-[0_30px_90px_rgba(15,23,42,0.12)] backdrop-blur-xl max-sm:h-[420px] max-sm:w-[82vw] max-sm:p-7"
              >
                <div className="absolute -left-4 -top-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-sm font-black tracking-[0.18em] text-white shadow-[0_18px_35px_rgba(79,70,229,0.35)]">
                  {card.number}
                </div>

                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50/90 shadow-inner shadow-white">
                    <card.icon className="h-8 w-8 text-indigo-600 stroke-[1.7]" />
                  </div>

                  <h3 className="mt-12 max-w-sm font-display text-4xl font-black leading-[1.05] tracking-tight text-gray-950 max-sm:text-3xl">
                    {card.title}
                  </h3>
                  <p className="mt-6 font-display text-base font-light leading-8 text-gray-600 max-sm:text-sm max-sm:leading-7">
                    {card.description}
                  </p>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
