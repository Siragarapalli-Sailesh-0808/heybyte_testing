const tiers = [
  {
    name: 'others',
    features: [true, true, true, true, true, true, false, false, false, false, false, false],
  },
  // {
  //   name: 'Professional',
  //   features: [true, true, true, true, true, true, true, true, false, true, false, true],
  // },
  {
    name: 'heybyte',
    features: [true, true, true, true, true, true, true, true, true, true, true, true],
  },
]

const features = [
  'Project Planning & Strategy',
  'Custom Development',
  'Quality Assurance Testing',
  'Deployment & Launch',
  'Documentation',
  'Post-Launch Support (30 days)',
  'Performance Optimization',
  'Security Audit',
  'Dedicated Account Manager',
  'Priority Support (24/7)',
  'Custom SLA Agreement',
  'Training & Knowledge Transfer',
]

export default function ServiceTiersComparison() {
  return (
    <section className="bg-transparent py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg ring-1 ring-gray-900/5 p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold text-indigo-600 mb-2 font-display">Service Tiers Comparison</h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 font-display">Choose the right service level for your project needs</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-2">
              <thead>
                <tr>
                  <th className="text-left text-sm font-semibold text-gray-700 font-display py-3 px-2">Feature</th>
                  {tiers.map((tier) => (
                    <th key={tier.name} className="text-center text-sm font-semibold text-gray-700 font-display py-3 px-2">{tier.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, i) => (
                  <tr key={feature} className="border-b border-gray-100 last:border-0">
                    <td className="text-left text-gray-700 font-nav py-3 px-2 text-base">{feature}</td>
                    {tiers.map((tier, j) => (
                      <td key={tier.name} className="text-center py-3 px-2">
                        {tier.features[i] ? (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 text-emerald-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-100 text-rose-500">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
