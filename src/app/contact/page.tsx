import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, ShieldCheck, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Heybyte',
  description: 'Get in touch with the Heybyte team to discuss your next high-performance engineering project.',
}

export default function ContactPage() {
  return (
    <div className="relative isolate bg-white min-h-screen flex flex-col">
      {/* Premium Background Pattern */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 right-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-100 opacity-50"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="contact-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#contact-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      <Header />

      <main className="flex-grow">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 lg:pt-48 pb-24 lg:pb-32">
          {/* New Clean Layout: Integrated Contact Experience */}
          <ContactForm />

          {/* Senior Level Service Commitments */}
          <div className="mt-40">
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 font-display mb-6 tracking-tightest">
                Our Service <span className="text-indigo-600">Commitment</span>
              </h2>
              <p className="text-xl text-gray-400 font-display font-light max-w-2xl mx-auto">
                We bridge the gap between high-level vision and technical execution with guaranteed professional response times.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  icon: CheckCircle2, 
                  title: 'Initial Response', 
                  desc: 'First acknowledgment of your inquiry with direct access to a lead engineer.',
                  time: 'Within 2 hours'
                },
                { 
                  icon: Zap, 
                  title: 'Technical Review', 
                  desc: 'In-depth assessment of your stack and architectural requirements.',
                  time: 'Within 24 hours'
                },
                { 
                  icon: Clock, 
                  title: 'Strategy Session', 
                  desc: 'Face-to-face consultation to align project goals and technical roadmaps.',
                  time: 'Within 48 hours'
                },
                { 
                  icon: ShieldCheck, 
                  title: 'Final Proposal', 
                  desc: 'Comprehensive breakdown of budget, timeline, and engineering milestones.',
                  time: 'Within 5 days'
                }
              ].map((item, i) => (
                <div key={i} className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-indigo-100 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <item.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 font-display">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-display font-light leading-relaxed mb-6">
                    {item.desc}
                  </p>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gray-50 rounded-full border border-gray-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 font-display">
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
