import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import workshopMotorImage from '../public/equipment/motor-workshop.jpg'

const capabilities = [
  {
    id: 'motors',
    title: 'Electric Motors',
    items: [
      'Electric motor repairs',
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
    id: 'generators',
    title: 'Generators',
    items: [
      'Generator repairs',
      'Generator overhauls',
      'Alternator rewinds',
      'Bearing replacement',
      'Testing',
      'New generator supply',
      'Replacement generator sourcing'
    ],
    cta: 'Generator Enquiry'
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
    id: 'vsd',
    title: 'VSDs & Electrical',
    items: [
      'VSD repairs',
      'VSD supply',
      'Variable Speed Drives',
      'Industrial drives',
      'Electrical control equipment',
      'Fault diagnosis',
      'Replacement equipment'
    ],
    cta: 'VSD Repair Enquiry'
  },
  {
    id: 'cables',
    title: 'Cable Repair & Supply',
    items: [
      'Cable repairs',
      'Cable jointing',
      'Cable terminations',
      'LV and HV cable',
      'Testing',
      'Replacement cable supply'
    ],
    cta: 'Cable Repair Enquiry'
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
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sisSteel text-sm font-semibold">CAPABILITIES</p>
          <h2 className="text-3xl font-bold mt-2">What We Do</h2>
          <p className="mt-4 text-sisSteel max-w-3xl">Specialist services across electric motors, generators, pumps, gearboxes, transformers, VSDs, cables and industrial components for major mining, power and industrial customers.</p>
        </div>
        <div className="">
          <Link href="/capabilities-statement" className="inline-block bg-sisAccent text-sisCharcoal font-semibold px-4 py-2 rounded">Download Capabilities Statement</Link>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {capabilities.map(cap => (
          <article key={cap.id} className="flex flex-col bg-white border shadow-sm rounded p-6">
            <h3 className="font-semibold text-xl">{cap.title}</h3>
            <ul className="mt-3 text-sm space-y-1 text-sisSteel">
              {cap.items.map(item => <li key={item}>• {item}</li>)}
            </ul>
            {/* Pushed to the bottom so the buttons line up across cards of
                differing lengths. */}
            <div className="mt-auto pt-4">
              <a href="#request-quote" className="inline-block bg-sisCharcoal text-white px-4 py-2 rounded">{cap.cta}</a>
            </div>
          </article>
        ))}

        {/* Eight cards across three columns leaves one cell empty on the last
            row. This fills it; the image stretches to whatever height the row
            takes so it lines up with the cards beside it. */}
        <figure className="relative aspect-[4/3] md:aspect-auto md:min-h-64 overflow-hidden bg-white border shadow-sm rounded">
          <Image
            src={workshopMotorImage}
            alt="Pale grey industrial electric motor with a finned frame, terminal box and drive shaft"
            fill
            placeholder="blur"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
          <figcaption className="absolute inset-x-0 bottom-0 bg-white/95 px-6 py-4 text-sm font-semibold text-sisCharcoal">
            Motor repairs, rewinds and overhauls
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Capabilities
