'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Shield, Target, Users, Zap } from 'lucide-react'

const features = [
  {
    id: 'reliability',
    icon: Shield,
    title: 'Reliable & Secure',
    description: 'Built on proven architectures with security and stability integrated at every level of our development process.',
    hasFooter: true,
  },
  {
    id: 'delivery',
    icon: Zap,
    title: 'Fast Delivery',
    description: 'We move fast with precision - delivering on time without ever compromising on quality.',
  },
  {
    id: 'team',
    icon: Users,
    title: 'Dedicated Team',
    description: 'A focused team that works closely with you, ensuring absolute clarity and accountability.',
  },
  {
    id: 'tailored',
    icon: Target,
    title: 'Tailored Solutions',
    description: 'Every solution is crafted around your specific business goals and technical needs.',
  },
]

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [cardPositions, setCardPositions] = useState<number[]>(features.map(() => 0))

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  const scrollStops = features.map((_, index) => index / (features.length - 1))
  const cardsX = useTransform(scrollYProgress, scrollStops, cardPositions)

  useEffect(() => {
    const updateCardPositions = () => {
      const track = trackRef.current
      if (!track) return

      const firstCard = track.firstElementChild
      if (!(firstCard instanceof HTMLElement)) return

      const styles = window.getComputedStyle(track)
      const gap = Number.parseFloat(styles.columnGap || styles.gap || '0')
      const viewportWidth = window.innerWidth
      const cardWidth = firstCard.offsetWidth
      const cardStep = cardWidth + gap
      const centeredStart = viewportWidth / 2 - cardWidth / 2

      setCardPositions(features.map((_, index) => centeredStart - index * cardStep))
    }

    updateCardPositions()
    window.addEventListener('resize', updateCardPositions)

    const observer = new ResizeObserver(updateCardPositions)
    if (trackRef.current) observer.observe(trackRef.current)

    return () => {
      window.removeEventListener('resize', updateCardPositions)
      observer.disconnect()
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative h-[400vh] w-full bg-white">
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 flex items-center justify-center px-4">
          <div className="select-none text-center font-display text-[clamp(7rem,18vw,18rem)] font-black uppercase leading-[0.74] tracking-tight text-[#4F46E5] opacity-20">
            <div>HEY</div>
            <div>BYTE</div>
          </div>
        </div>

        <div className="relative z-10 flex h-full items-center overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x: cardsX }}
            className="flex w-max items-center gap-8 sm:gap-10 lg:gap-12"
          >
            {features.map((feature) => (
              <article
                key={feature.id}
                className="flex h-[min(580px,74vh)] w-[min(560px,calc(100vw-3rem))] shrink-0 flex-col justify-between rounded-[2rem] border border-white/70 bg-white/85 p-7 shadow-[0_28px_90px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:p-9 lg:p-10"
              >
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-indigo-100 bg-indigo-100/80 shadow-[0_16px_30px_rgba(79,70,229,0.16)]">
                    <feature.icon className="h-7 w-7 text-indigo-600 stroke-[1.65]" />
                  </div>

                  <div className="mt-20 sm:mt-24">
                    <h3 className="text-4xl font-bold leading-tight tracking-tight text-gray-950 font-display sm:text-5xl">
                      {feature.title}
                    </h3>
                    <p className="mt-6 text-base font-light leading-8 text-gray-600 font-display sm:text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {feature.hasFooter ? (
                  <div className="border-t border-gray-200/70 pt-7">
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex -space-x-3">
                        <span className="h-8 w-8 rounded-full border-2 border-white bg-gray-200" />
                        <span className="h-8 w-8 rounded-full border-2 border-white bg-indigo-100" />
                        <span className="h-8 w-8 rounded-full border-2 border-white bg-violet-100" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-gray-500 font-display">
                        Trusted by industry leaders
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-px w-full bg-gray-200/70" />
                )}
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
