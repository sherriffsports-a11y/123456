import React from 'react'

const brandGroups = [
  {
    id: 'motor-brands',
    title: 'Electric Motors',
    blurb: 'LV and HV motors we supply, rewind, overhaul and replace.',
    brands: [
      'WEG',
      'ABB',
      'Siemens',
      'TECO',
      'CMG',
      'Brook Crompton',
      'Toshiba',
      'Nidec',
      'Marathon',
      'SEW-EURODRIVE',
    ],
  },
  {
    id: 'pump-brands',
    title: 'Pumps',
    blurb: 'Industrial, process and slurry pumps we repair, overhaul and source.',
    brands: [
      'Grundfos',
      'KSB',
      'Sulzer',
      'Flowserve',
      'Ebara',
      'Xylem / Lowara',
      'Wilo',
      'Davey',
      'Warman',
      'Goulds',
      'Calpeda',
    ],
  },
]

const Brands: React.FC = () => {
  return (
    <section id="brands" className="bg-gray-50 border-y border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Brands We Work With</h2>
        <p className="mt-2 text-sisSteel max-w-3xl">
          We supply, repair and source equipment across the manufacturers you already run on site,
          including OEM and aftermarket replacements where the original is no longer available.
        </p>

        <div className="mt-10 space-y-10">
          {brandGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-xl font-semibold">{group.title}</h3>
              <p className="mt-1 text-sm text-sisSteel">{group.blurb}</p>

              <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {group.brands.map((brand) => (
                  <li
                    key={brand}
                    className="flex min-h-16 items-center justify-center rounded border border-gray-200 bg-white px-3 py-4 text-center text-sm font-semibold leading-snug text-sisCharcoal"
                  >
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs text-sisSteel max-w-3xl">
          All brand names and trademarks are the property of their respective owners. They are listed
          to describe the equipment we supply, repair, overhaul and source, and do not imply
          affiliation with, or endorsement or authorisation by, those manufacturers.
        </p>

        <div className="mt-6">
          <a
            href="#request-quote"
            className="inline-block bg-sisAccent text-sisCharcoal font-semibold px-5 py-3 rounded"
          >
            ENQUIRE ABOUT YOUR BRAND
          </a>
        </div>
      </div>
    </section>
  )
}

export default Brands
