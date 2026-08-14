import React from 'react'
import Image from 'next/image'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-black text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1920&auto=format&fit=crop"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      <div className="relative max-w-6xl mx-auto py-28 px-6 lg:py-36">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">SIS EQUIPMENT GROUP</h1>
        <h2 className="mt-4 text-xl lg:text-2xl font-semibold">Mining &amp; Industrial Equipment Specialists</h2>
        <p className="mt-4 text-sisSteelLight max-w-3xl">Electric Motors • Pumps • Gearboxes • Transformers • VSDs • Mining Components</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#request-quote" className="bg-sisAccent text-sisCharcoal font-semibold px-6 py-3 rounded text-center">REQUEST A QUOTE</a>
          <a href="tel:+61447553353" className="border border-white px-6 py-3 rounded text-center">CALL NOW</a>
        </div>

        <p className="mt-6 text-sm text-sisSteelLight max-w-2xl">SIS Equipment Group provides equipment supply, repair, overhaul and sourcing solutions for mining, power generation and heavy industrial customers throughout Australia.</p>

        <div className="mt-6 text-sm tracking-widest text-white/90">SUPPLY | REPAIR | EXCHANGE | SOURCE</div>
      </div>
    </section>
  )
}

export default Hero
