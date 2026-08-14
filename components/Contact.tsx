import React from 'react'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h3 className="font-bold text-xl">SIS Equipment Group</h3>
          <p className="text-sm text-sisSteel mt-2">Brisbane, Queensland, Australia</p>
          <p className="text-sm mt-2">Phone: <a href="tel:+61447553353" className="text-sisCharcoal">+61 447 553 353</a></p>
          <p className="text-sm mt-1">Email: <a href="mailto:info@sherriffindustrysolutions.com" className="text-sisCharcoal">info@sherriffindustrysolutions.com</a></p>
          <div className="mt-4 flex gap-3">
            <a href="tel:+61447553353" className="bg-sisAccent text-black px-4 py-2 rounded">CALL NOW</a>
            <a href="mailto:info@sherriffindustrysolutions.com" className="border px-4 py-2 rounded">EMAIL US</a>
          </div>
        </div>

        <div className="text-sm text-sisSteel">
          <h4 className="font-semibold">Opening Hours</h4>
          <p className="mt-2">Mon - Fri: 8:00 - 17:00</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
