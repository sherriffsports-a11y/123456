import React from 'react'
import Link from 'next/link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-sisCharcoal text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6 text-sm">
        <div>
          <div className="font-bold">SIS Equipment Group</div>
          <div className="mt-1 text-sisSteelLight">Mining &amp; Industrial Equipment Specialists</div>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-1">
            <li><Link href="/privacy" className="block text-sisSteelLight hover:text-white hover:underline">Privacy Policy</Link></li>
            <li><Link href="/terms" className="block text-sisSteelLight hover:text-white hover:underline">Terms &amp; Conditions</Link></li>
            <li><Link href="/#contact" className="block text-sisSteelLight hover:text-white hover:underline">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
