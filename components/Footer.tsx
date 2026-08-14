import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-sisCharcoal text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-6 text-sm">
        <div>
          <div className="font-bold">SIS Equipment Group</div>
          <div className="mt-1 text-sisSteel">Mining & Industrial Equipment Specialists</div>
          <div className="mt-2">Operated by Sherriff Industry Solutions Pty Ltd</div>
          <div>ABN 81 668 877 183</div>
          <div className="mt-2">Brisbane, Queensland, Australia</div>
        </div>
        <div className="space-y-1">
          <a href="#privacy" className="text-sisSteel">Privacy Policy</a>
          <a href="#terms" className="text-sisSteel">Terms & Conditions</a>
          <a href="#contact" className="text-sisSteel">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
