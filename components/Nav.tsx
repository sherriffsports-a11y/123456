import React from 'react'

const Nav: React.FC = () => {
  return (
    <header className="bg-sisCharcoal text-white sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <a href="#home" className="font-bold text-xl">SIS Equipment Group</a>
        <ul className="hidden md:flex gap-6 items-center text-sm">
          <li><a href="#home" className="hover:underline">HOME</a></li>
          <li><a href="#capabilities" className="hover:underline">CAPABILITIES</a></li>
          <li><a href="#equipment" className="hover:underline">EQUIPMENT</a></li>
          <li><a href="#industries" className="hover:underline">INDUSTRIES</a></li>
          <li><a href="#about" className="hover:underline">ABOUT</a></li>
          <li><a href="#contact" className="hover:underline">CONTACT</a></li>
        </ul>
        <div className="flex items-center gap-3">
          <a href="#request-quote" className="hidden md:inline-block bg-sisAccent text-white px-4 py-2 rounded">REQUEST A QUOTE</a>
          <a href="tel:+61447553353" className="text-sm border border-sisSteel px-3 py-2 rounded hover:bg-white/5">CALL NOW</a>
        </div>
      </nav>
    </header>
  )
}

export default Nav
