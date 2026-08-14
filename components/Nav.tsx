import React, { useState } from 'react'
import Link from 'next/link'

// Root-relative so the anchors also resolve from /capabilities-statement.
const sections = [
  { href: '/#home', label: 'HOME' },
  { href: '/#capabilities', label: 'CAPABILITIES' },
  { href: '/#equipment', label: 'EQUIPMENT' },
  { href: '/#industries', label: 'INDUSTRIES' },
  { href: '/#about', label: 'ABOUT' },
  { href: '/#contact', label: 'CONTACT' },
]

const Nav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-sisCharcoal text-white sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto flex items-center justify-between gap-4 p-4" aria-label="Main">
        <Link href="/#home" className="font-bold text-xl">SIS Equipment Group</Link>

        <ul className="hidden md:flex gap-6 items-center text-sm">
          {sections.map((section) => (
            <li key={section.href}>
              <Link href={section.href} className="hover:underline">{section.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link href="/#request-quote" className="hidden md:inline-block bg-sisAccent text-sisCharcoal font-semibold px-4 py-2 rounded">REQUEST A QUOTE</Link>
          <a href="tel:+61447553353" className="text-sm border border-sisSteelLight px-3 py-2 rounded hover:bg-white/10">CALL NOW</a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            className="md:hidden border border-sisSteelLight rounded p-2"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {menuOpen ? (
                <path d="M4 4l12 12M16 4L4 16" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul id="mobile-menu" className="md:hidden border-t border-white/10 px-4 pb-4 text-sm">
          {sections.map((section) => (
            <li key={section.href}>
              <Link
                href={section.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:underline"
              >
                {section.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#request-quote"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-block bg-sisAccent text-sisCharcoal font-semibold px-4 py-2 rounded"
            >
              REQUEST A QUOTE
            </Link>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Nav
