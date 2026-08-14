import React from 'react'

const TransformerFeature: React.FC = () => {
  return (
    <section id="transformer" className="bg-sisCharcoal text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">High Voltage Transformer Support</h2>
        <p className="mt-2 text-sisSteelLight max-w-3xl">SIS Equipment Group supports industrial, mining and power generation customers with transformer inspection, testing, repair, overhaul and replacement requirements.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h4 className="font-semibold">Testing & Diagnostics</h4>
            <ul className="mt-2 text-sisSteelLight text-sm">
              <li>Insulation testing</li>
              <li>Oil sampling</li>
              <li>Condition assessment</li>
              <li>Electrical diagnostics</li>
              <li>Maintenance planning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Repairs & Overhauls</h4>
            <ul className="mt-2 text-sisSteelLight text-sm">
              <li>Inspection</li>
              <li>Repairs</li>
              <li>Refurbishment</li>
              <li>Component replacement</li>
              <li>Overhaul coordination</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Field Service</h4>
            <ul className="mt-2 text-sisSteelLight text-sm">
              <li>Site inspections</li>
              <li>Planned maintenance</li>
              <li>Shutdown support</li>
              <li>Fault investigation</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Supply & Replacement</h4>
            <ul className="mt-2 text-sisSteelLight text-sm">
              <li>Replacement transformers</li>
              <li>Transformer sourcing</li>
              <li>Technical comparison</li>
              <li>Project support</li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <a href="#contact" className="bg-sisAccent text-sisCharcoal font-semibold px-5 py-3 rounded">DISCUSS YOUR TRANSFORMER REQUIREMENT</a>
        </div>
      </div>
    </section>
  )
}

export default TransformerFeature
