'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  User, 
  Mail, 
  Phone, 
  Briefcase, 
  MapPin, 
  DollarSign, 
  Clock, 
  MessageSquare, 
  Send,
  MessageCircle,
  ShieldCheck,
  Zap
} from 'lucide-react'

interface FormData {
  fullName: string
  email: string
  phone: string
  inquiry: string
  state: string
  budget: string
  timeline: string
  message: string
  contactMethod: 'Email' | 'Phone' | 'WhatsApp'
}

const initialData: FormData = {
  fullName: '',
  email: '',
  phone: '',
  inquiry: '',
  state: '',
  budget: '',
  timeline: '',
  message: '',
  contactMethod: 'Email'
}

const steps = [
  { id: 1, title: 'Basic Info', fields: ['fullName', 'email', 'phone'] },
  { id: 2, title: 'Project Details', fields: ['inquiry', 'state', 'budget', 'timeline'] },
  { id: 3, title: 'Message', fields: ['message', 'contactMethod'] },
  { id: 4, title: 'Review', fields: [] }
]

export default function ContactForm() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialData)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Using Web3Forms for direct email delivery to hi@heybyte.in
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '6b1c4b3c-5feb-4474-b1e9-3e573127bb61', // Public key for heybyte testing
        subject: `New Project Inquiry from ${formData.fullName}`,
        from_name: 'Heybyte Website',
        ...formData
      })
    })

    const result = await response.json()
    if (result.success) {
      setIsSubmitted(true)
    } else {
      alert('Something went wrong. Please try again or email us directly at hi@heybyte.in')
    }
    setIsSubmitting(false)
  }

  const progress = (step / 4) * 100

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-[2.5rem] p-12 md:p-20 shadow-[0_30px_100px_rgba(0,0,0,0.05)] text-center flex flex-col items-center justify-center min-h-[600px]"
      >
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-8">
          <Check className="w-12 h-12 text-green-500 stroke-[3]" />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6 font-display">Request received!</h2>
        <p className="text-xl text-gray-500 font-display font-light max-w-md mx-auto">
          We've successfully captured your details. Our team will contact you within <span className="text-gray-900 font-bold">24 hours</span> to discuss the next steps.
        </p>
        <button 
          onClick={() => { setIsSubmitted(false); setStep(1); setFormData(initialData); }}
          className="mt-12 px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold font-display hover:bg-indigo-600 transition-all duration-500"
        >
          Send another request
        </button>
      </motion.div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
      {/* Left Intro Panel */}
      <div className="flex-1">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-8">
            <MessageCircle className="w-4 h-4 text-indigo-600" />
            <span className="text-xs font-black uppercase tracking-widest text-indigo-600 font-display">Get In Touch</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-10 font-display tracking-tightest leading-[1.1]">
            Let's build something <br className="hidden md:block" />
            <span className="text-indigo-600">exceptional.</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-400 font-display font-light leading-relaxed mb-12 max-w-xl">
            Tell us about your project and our team will get back to you within 24 hours with a clear roadmap.
          </p>

          <div className="space-y-6">
             {[
               { icon: Zap, label: 'Free Consultation', color: 'text-amber-500' },
               { icon: ShieldCheck, label: 'NDA Available', color: 'text-indigo-600' },
               { icon: Clock, label: 'Quick Response', color: 'text-green-500' }
             ].map((badge, i) => (
               <div key={i} className="flex items-center gap-4 group">
                 <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <badge.icon className={`w-5 h-5 ${badge.color}`} />
                 </div>
                 <span className="font-bold text-gray-900 font-display text-sm tracking-wide">{badge.label}</span>
               </div>
             ))}
          </div>

          {/* Floating Action Badges */}
          <div className="mt-16 flex flex-wrap gap-4">
            {['Call Us', 'Email', 'WhatsApp'].map((method, i) => (
              <div key={i} className="px-6 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center gap-3 cursor-pointer hover:shadow-md hover:border-indigo-100 transition-all duration-300">
                <div className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-indigo-500' : i === 1 ? 'bg-purple-500' : 'bg-green-500'}`} />
                <span className="text-sm font-bold text-gray-700 font-display">{method}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Right Animated Form Card */}
      <div className="flex-1 relative">
        {/* Background Accents */}
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60 -z-10" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-purple-50 rounded-full blur-3xl opacity-60 -z-10" />

        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.04)] overflow-hidden">
          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-gray-50 overflow-hidden">
            <motion.div 
              className="h-full bg-indigo-600"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between mb-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full font-display">
                Step 0{step} / 04
              </span>
              <h4 className="text-sm font-bold text-gray-400 font-display">{steps[step-1].title}</h4>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="min-h-[350px]"
              >
                {step === 1 && (
                  <div className="space-y-6">
                    <FormField icon={User} label="Full Name" value={formData.fullName} onChange={(v: string) => handleInputChange('fullName', v)} placeholder="John Doe" />
                    <FormField icon={Mail} label="Email Address" value={formData.email} onChange={(v: string) => handleInputChange('email', v)} placeholder="john@example.com" type="email" />
                    <FormField icon={Phone} label="Phone Number" value={formData.phone} onChange={(v: string) => handleInputChange('phone', v)} placeholder="+1 (555) 000-0000" />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <FormField icon={Briefcase} label="Inquiry About" value={formData.inquiry} onChange={(v: string) => handleInputChange('inquiry', v)} placeholder="Web App, Mobile App, Cloud..." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField icon={MapPin} label="State / Location" value={formData.state} onChange={(v: string) => handleInputChange('state', v)} placeholder="New York, CA..." />
                      <FormField icon={DollarSign} label="Project Budget" value={formData.budget} onChange={(v: string) => handleInputChange('budget', v)} placeholder="$10k - $50k" />
                    </div>
                    <FormField icon={Clock} label="Timeline" value={formData.timeline} onChange={(v: string) => handleInputChange('timeline', v)} placeholder="2 Months, 6 Months..." />
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="relative group">
                      <div className="absolute top-4 left-4">
                        <MessageSquare className="w-5 h-5 text-gray-300 group-focus-within:text-indigo-600 transition-colors" />
                      </div>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-indigo-100 focus:border-indigo-300 transition-all duration-300 min-h-[150px] font-display text-sm"
                        placeholder="Tell us about your vision..."
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 font-display">Preferred Contact Method</label>
                      <div className="flex gap-3">
                        {['Email', 'Phone', 'WhatsApp'].map((m) => (
                          <button
                            key={m}
                            onClick={() => handleInputChange('contactMethod', m as any)}
                            className={`flex-1 py-3 rounded-xl border font-bold font-display text-xs transition-all duration-300 ${
                              formData.contactMethod === m ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-100' : 'bg-white border-gray-100 text-gray-500 hover:border-indigo-200'
                            }`}
                          >
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <h5 className="text-sm font-bold text-gray-900 font-display">Summary Review</h5>
                    <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                      <SummaryRow label="Name" value={formData.fullName} />
                      <SummaryRow label="Email" value={formData.email} />
                      <SummaryRow label="Project" value={formData.inquiry} />
                      <SummaryRow label="Budget" value={formData.budget} />
                      <SummaryRow label="Contact via" value={formData.contactMethod} />
                    </div>
                    <p className="text-[10px] text-gray-400 font-display leading-relaxed text-center px-4">
                      By submitting, you agree to our privacy policy and terms of service. We will use your data solely for project consultation.
                    </p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="mt-12 flex items-center justify-between gap-4">
              {step > 1 ? (
                <button 
                  onClick={prevStep}
                  className="px-8 py-4 rounded-2xl border border-gray-100 text-gray-400 font-bold font-display text-sm hover:bg-gray-50 hover:text-gray-900 transition-all flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              ) : <div />}

              {step < 4 ? (
                <button 
                  onClick={nextStep}
                  className="px-10 py-4 bg-gray-900 text-white rounded-2xl font-bold font-display text-sm hover:bg-indigo-600 transition-all duration-500 flex items-center gap-3 shadow-xl shadow-gray-200"
                >
                  Continue
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button 
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-10 py-4 bg-indigo-600 text-white rounded-2xl font-bold font-display text-sm transition-all duration-500 flex items-center gap-3 shadow-xl shadow-indigo-100 ${isSubmitting ? 'opacity-70 cursor-not-allowed scale-95' : 'hover:bg-indigo-700'}`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Request'}
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Zap className="w-4 h-4" />
                    </motion.div>
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface FormFieldProps {
  icon: React.ElementType
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  type?: string
}

function FormField({ icon: Icon, label, value, onChange, placeholder, type = "text" }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 font-display ml-1">{label}</label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Icon className="w-4 h-4 text-gray-300 group-focus-within:text-indigo-600 transition-colors" />
        </div>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-100 bg-gray-50 focus:bg-white focus:ring-4 focus:ring-indigo-100 focus:border-indigo-300 transition-all duration-300 font-display text-sm placeholder:text-gray-300"
        />
        {value.length > 3 && (
          <div className="absolute inset-y-0 right-4 flex items-center">
            <Check className="w-4 h-4 text-green-500" />
          </div>
        )}
      </div>
    </div>
  )
}

function SummaryRow({ label, value }: { label: string, value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0 last:pb-0">
      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{label}</span>
      <span className="text-sm font-bold text-gray-900 font-display truncate max-w-[200px]">{value || 'Not provided'}</span>
    </div>
  )
}
