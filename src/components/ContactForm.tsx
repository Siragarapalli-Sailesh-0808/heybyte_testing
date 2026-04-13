'use client'

export default function ContactForm() {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl font-nav">
      <form className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-900 font-display">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="block w-full rounded-xl border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm font-nav"
          />
        </div>

        {/* Email and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 font-display">Your Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="block w-full rounded-xl border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm font-nav"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 font-display">Phone Number</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="block w-full rounded-xl border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm font-nav"
            />
          </div>
        </div>

        {/* Inquiry About and State as text fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 font-display">Inquiry About</label>
            <input
              type="text"
              placeholder="e.g. General, Support, Sales, Partnership"
              className="block w-full rounded-xl border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm font-nav"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 font-display">State</label>
            <input
              type="text"
              placeholder="e.g. California, New York"
              className="block w-full rounded-xl border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm font-nav"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-sm font-semibold text-gray-900 font-display">Message</label>
          <textarea
            rows={6}
            placeholder="Message..."
            className="block w-full rounded-xl border-0 px-4 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm resize-none font-nav"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full rounded-xl py-4 px-6 text-base font-semibold text-white shadow-sm transition-all duration-200 font-display"
          style={{ backgroundColor: '#4f46e5' }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = '#3730a3')}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = '#4f46e5')}
          onMouseDown={e => (e.currentTarget.style.backgroundColor = '#312e81')}
          onMouseUp={e => (e.currentTarget.style.backgroundColor = '#4f46e5')}
        >
          Send your Request
        </button>
      </form>
    </div>
  )
}
