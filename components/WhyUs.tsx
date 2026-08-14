import React from 'react'

const WhyUs: React.FC = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold">Responsive Industrial Support</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Equipment Expertise</h4>
          <p className="text-sm text-sisSteel mt-2">Experience across critical mining, electrical and rotating equipment.</p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Responsive Service</h4>
          <p className="text-sm text-sisSteel mt-2">Practical support for breakdowns, planned maintenance and equipment sourcing.</p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Repair or Replace</h4>
          <p className="text-sm text-sisSteel mt-2">We help customers assess whether repair, overhaul or replacement provides the best commercial outcome.</p>
        </div>
        <div className="p-4 border rounded">
          <h4 className="font-semibold">Local & International Sourcing</h4>
          <p className="text-sm text-sisSteel mt-2">Access to Australian and international equipment and component supply channels.</p>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
