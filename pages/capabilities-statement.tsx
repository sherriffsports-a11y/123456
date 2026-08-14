import Head from 'next/head'
import Nav from '../components/Nav'

export default function CapabilitiesStatement() {
  return (
    <div>
      <Head>
        <title>SIS Equipment Group — Capabilities Statement</title>
        <meta name="description" content="Capabilities statement for SIS Equipment Group — supply, repair, overhaul and sourcing of mining and industrial equipment across Australia." />
      </Head>

      <Nav />

      <main className="max-w-4xl mx-auto p-6">
        <header className="flex items-start justify-between gap-6">
          <div>
            <img src="/logo.png" alt="SIS Equipment Group logo" className="h-16 w-auto" />
            <h1 className="text-2xl font-bold mt-4">Capabilities Statement</h1>
            <p className="text-sm text-sisSteel mt-2">SIS Equipment Group — Mining & Industrial Equipment Specialists</p>
            <p className="text-sm text-sisSteel">Operated by Sherriff Industry Solutions Pty Ltd · ABN 81 668 877 183</p>
            <p className="text-sm text-sisSteel mt-1">Brisbane, Queensland, Australia · Phone: +61 447 553 353 · info@sherriffindustrysolutions.com</p>
          </div>

          <div className="flex-shrink-0">
            <button onClick={() => window.print()} className="bg-sisAccent text-black px-4 py-2 rounded">Download / Print</button>
          </div>
        </header>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Executive Summary</h2>
          <p className="mt-2 text-sisSteel">SIS Equipment Group provides supply, repair, overhaul and sourcing solutions for critical mining and heavy industrial electrical and rotating equipment throughout Australia. We support mining operations, power generation sites, industrial plants and infrastructure projects by delivering technically-focused commercial outcomes — repair, overhaul, exchange or replacement — using experienced engineering resource and trusted industry partners where specialist accreditation or field capabilities are required.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Core Capabilities</h2>

          <div className="mt-4 space-y-4">
            <div>
              <h3 className="font-semibold">Electric Motors</h3>
              <ul className="list-disc list-inside text-sisSteel">
                <li>New motor supply (LV & HV)</li>
                <li>Motor rewinds and overhauls</li>
                <li>Bearing replacement, dynamic balancing and testing</li>
                <li>Replacement motor sourcing (OEM & aftermarket)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Pumps & Gearboxes</h3>
              <ul className="list-disc list-inside text-sisSteel">
                <li>Industrial pump repairs and overhauls</li>
                <li>Hydraulic pump servicing and mechanical seals</li>
                <li>Industrial gearbox repair, bearing, gear and shaft work</li>
                <li>Rebuilds and service exchange solutions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Transformers</h3>
              <ul className="list-disc list-inside text-sisSteel">
                <li>High-voltage, power and distribution transformer provision and sourcing</li>
                <li>Condition assessment, oil testing and diagnostic support (coordinated with specialist testing providers)</li>
                <li>Inspection, refurbishment, repairs and overhaul coordination</li>
                <li>Field service and shutdown support coordination</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Mining Equipment & Components</h3>
              <ul className="list-disc list-inside text-sisSteel">
                <li>Haul truck electrical components, alternators, wheel motors and assemblies</li>
                <li>HV control cabinets, grid boxes, grid blowers and operator cabins</li>
                <li>OEM and aftermarket component sourcing and rebuilds</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">VSDs & Electrical</h3>
              <ul className="list-disc list-inside text-sisSteel">
                <li>Variable speed drive supply and repairs</li>
                <li>Industrial drive fault diagnosis and replacement</li>
                <li>Electrical control equipment support</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold">Field & Workshop Services</h3>
              <ul className="list-disc list-inside text-sisSteel">
                <li>Workshop inspection, strip & assess and mechanical inspection</li>
                <li>Electrical testing, machine audits and preventative maintenance</li>
                <li>Breakdown response, installation, commissioning and shutdown support</li>
                <li>Laser alignment, motor change-outs and service exchange management</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Transformer Feature</h2>
          <p className="mt-2 text-sisSteel">SIS Equipment Group supports transformer requirements including inspection, testing, repair, overhaul and supply. For specialist testing and accredited diagnostic services we coordinate with suitably qualified partner organisations to ensure compliant and traceable results.</p>
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4 text-sisSteel">
            <div>
              <h4 className="font-semibold">Testing & Diagnostics</h4>
              <ul className="list-disc list-inside">
                <li>Insulation testing</li>
                <li>Oil sampling and analysis</li>
                <li>Condition assessment and electrical diagnostics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Repairs & Supply</h4>
              <ul className="list-disc list-inside">
                <li>Refurbishment, component replacement and overhaul coordination</li>
                <li>Transformer sourcing, technical comparison and project support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Industries & Clients</h2>
          <p className="mt-2 text-sisSteel">We support mining, power generation, manufacturing, mineral processing, water, sugar, marine, heavy industry, infrastructure and quarrying operations across Australia. Our experience is focused on critical rotating and electrical plant where uptime and technical rigour are essential.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Quality, Safety & Partners</h2>
          <p className="mt-2 text-sisSteel">SIS Equipment Group operates with robust safety and quality awareness. Where specialist accreditation, certified testing or laboratory services are required (for example high-voltage transformer testing), we coordinate with qualified and accredited partners to deliver compliant outcomes. We will provide details of partners, testing laboratories and certifications on request for project-specific scopes.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Commercial & Contractual</h2>
          <p className="mt-2 text-sisSteel">We offer flexible commercial models including repair-to-assess, time & materials, fixed-price repairs/overhauls and supply/exchange programs. Our proposals include scope definition, risk assessment and clear timelines to support procurement and maintenance planning.</p>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2 text-sisSteel">For enquiries, technical discussions or to request a capability briefing and quotations please contact:</p>
          <p className="mt-2 font-semibold">Email: <a href="mailto:info@sherriffindustrysolutions.com" className="text-sisCharcoal">info@sherriffindustrysolutions.com</a></p>
          <p className="mt-1 font-semibold">Phone: <a href="tel:+61447553353" className="text-sisCharcoal">+61 447 553 353</a></p>
        </section>

        <footer className="mt-10 text-sm text-sisSteel">This capabilities statement is provided for information purposes. SIS Equipment Group does not claim specialist laboratory accreditations on this document; where accredited testing is required we will coordinate with accredited providers and disclose partner credentials as part of the project scope.</footer>
      </main>
    </div>
  )
}
