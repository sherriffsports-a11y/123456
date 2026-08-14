import React from 'react'
import Link from 'next/link'
import { ENQUIRY_MAILTO } from '../lib/contact'

const Contact: React.FC = () => {
  return (
    <section id="contact" className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6">
        <div>
          <h3 className="font-bold text-xl">SIS Equipment Group</h3>
          <p className="text-sm text-sisSteel mt-2 max-w-md">
            Send us your equipment details and we&apos;ll review your requirement and respond.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={ENQUIRY_MAILTO} className="bg-sisAccent text-sisCharcoal font-semibold px-4 py-2 rounded">ENQUIRE BY EMAIL</a>
            <Link href="/#request-quote" className="border border-sisSteel px-4 py-2 rounded hover:bg-white">REQUEST A QUOTE</Link>
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
