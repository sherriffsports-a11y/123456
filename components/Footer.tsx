import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-sisCharcoal text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6 text-sm">
        <div>
          <div className="font-bold">SIS Equipment Group</div>
          <div className="mt-1 text-sisSteelLight">Mining &amp; Industrial Equipment Specialists</div>
          <div className="mt-2">Operated by Sherriff Industry Solutions Pty Ltd</div>
          <div>ABN 81 668 877 183</div>
          <div className="mt-2">Brisbane, Queensland, Australia</div>
        </div>
        <nav aria-label="Footer">
          <ul className="space-y-1">
            <li><a href="#privacy" className="block text-sisSteelLight hover:text-white hover:underline">Privacy Policy</a></li>
            <li><a href="#terms" className="block text-sisSteelLight hover:text-white hover:underline">Terms &amp; Conditions</a></li>
            <li><a href="#contact" className="block text-sisSteelLight hover:text-white hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
