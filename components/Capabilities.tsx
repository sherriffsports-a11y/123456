import React from 'react'

const capabilities = [
  {
    id: 'motors',
    title: 'Electric Motors',
    items: [
      'New electric motor supply',
      'Motor rewinds',
      'Motor overhauls',
      'LV and HV motors',
      'Bearing replacement',
      'Testing',
      'Dynamic balancing',
      'Replacement motor sourcing'
    ],
    cta: 'Motor Repair Enquiry'
  },
  {
    id: 'pumps',
    title: 'Pumps & Gearboxes',
    items: [
      'Industrial pump repairs',
      'Pump overhauls',
      'Hydraulic pumps',
      'Mechanical seals',
      'Industrial gearbox repairs',
      'Bearings',
      'Gears',
      'Shafts',
      'Seals',
      'Rebuilds'
    ],
    cta: 'Request Repair Quote'
  },
  {
    id: 'transformers',
    title: 'Transformers',
    items: [
      'High-voltage transformers',
      'Power transformers',
      'Distribution transformers',
      'Transformer inspection',
      'Electrical testing',
      'Condition assessment',
      'Oil testing',
      'Diagnostic testing',
      'Repairs',
      'Refurbishment',
      'Overhaul support',
      'Field service',
      'Transformer sourcing and replacement'
    ],
    cta: 'Transformer Enquiry'
  },
  {
    id: 'mining',
    title: 'Mining Equipment & Components',
    items: [
      'Haul truck electrical components',
      'Alternators',
      'Wheel motors',
      'Grid boxes',
      'Grid blowers',
      'HV control cabinets',
      'Operator cabins',
      'Service exchange components',
      'OEM components',
      'Aftermarket components',
      'New and rebuilt assemblies'
    ],
    cta: 'Source Mining Components'
  },
  {
    id: 'vsd',
    title: 'VSDs & Electrical',
    items: [
      'Variable Speed Drives',
      'VSD repairs',
      'VSD supply',
      'Industrial drives',
      'Electrical control equipment',
      'Fault diagnosis',
      'Replacement equipment'
    ],
    cta: 'VSD Enquiry'
  },
  {
    id: 'field',
    title: 'Field & Workshop Services',
    items: [
      'Workshop inspection',
      'Strip and assess',
      'Mechanical inspection',
      'Electrical testing',
      'Breakdown support',
      'Installation',
      'Commissioning',
      'Motor change-outs',
      'Laser alignment',
      'Shutdown support',
      'Machine audits',
      'Preventative maintenance'
    ],
    cta: 'Book an Assessment'
  }
]

const Capabilities: React.FC = () => {
  return (
    <section id="capabilities" className="max-w-7xl mx-auto py-16 px-6">
      <h3 className="text-sisSteel text-sm font-semibold">CAPABILITIES</h3>
      <h2 className="text-3xl font-bold mt-2">What We Do</h2>
      <p className="mt-4 text-sisSteel max-w-3xl">Specialist services across electric motors, pumps, gearboxes, transformers and industrial components for major mining, power and industrial customers.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map(cap => (
          <article key={cap.id} className="bg-white border shadow-sm rounded p-6">
            <h4 className="font-semibold text-xl">{cap.title}</h4>
            <ul className="mt-3 text-sm space-y-1 text-sisSteel">
              {cap.items.slice(0, 8).map((it, idx) => <li key={idx}>• {it}</li>)}
            </ul>
            <div className="mt-4">
              <a href="#request-quote" className="inline-block bg-sisCharcoal text-white px-4 py-2 rounded">{cap.cta}</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Capabilities
