import React from 'react'
import Image from 'next/image'
import heroImage from '../public/hero-electric-motor.jpg'
import { ENQUIRY_MAILTO } from '../lib/contact'

// The scrim keeps average contrast high, but a photograph can always put a
// specular highlight directly behind a glyph, so the text carries its own
// shadow. That keeps the hero legible whichever image is dropped in.
const overlaidText = '[text-shadow:0_1px_3px_rgba(0,0,0,0.9)]'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt=""
          aria-hidden="true"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover opacity-80"
        />
        {/* Darkest on the left, where the copy sits, so the equipment stays
            visible on the right. */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40"></div>
      </div>
      <div className="relative max-w-6xl mx-auto py-28 px-6 lg:py-36">
        <h1 className={`text-4xl lg:text-6xl font-bold tracking-tight ${overlaidText}`}>SIS EQUIPMENT GROUP</h1>
        <h2 className={`mt-4 text-xl lg:text-2xl font-semibold ${overlaidText}`}>Mining &amp; Industrial Equipment Specialists</h2>
        <p className={`mt-4 text-sisSteelLight max-w-3xl ${overlaidText}`}>Electric Motors • Generators • Pumps • Gearboxes • Transformers • VSDs • Cables • Mining Components</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#request-quote" className="bg-sisAccent text-sisCharcoal font-semibold px-6 py-3 rounded text-center">REQUEST A QUOTE</a>
          <a href={ENQUIRY_MAILTO} className="border border-white px-6 py-3 rounded text-center bg-black/30">ENQUIRE BY EMAIL</a>
        </div>

        <p className={`mt-6 text-sm text-sisSteelLight max-w-2xl ${overlaidText}`}>SIS Equipment Group provides equipment supply, repair, overhaul and sourcing solutions for mining, power generation and heavy industrial customers throughout Australia.</p>

        <div className={`mt-6 text-sm tracking-widest text-white/90 ${overlaidText}`}>SUPPLY | REPAIR | EXCHANGE | SOURCE</div>
      </div>
    </section>
  )
}

export default Hero
