import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-black text-white">
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1920&auto=format&fit=crop" alt="Heavy industrial mining equipment" className="w-full h-full object-cover opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
      </div>
      <div className="relative max-w-6xl mx-auto py-28 px-6 lg:py-36 lg:px-0">
        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">SIS EQUIPMENT GROUP</h1>
        <h2 className="mt-4 text-xl lg:text-2xl font-semibold">Mining & Industrial Equipment Specialists</h2>
        <p className="mt-4 text-sisSteel max-w-3xl">Electric Motors • Pumps • Gearboxes • Transformers • VSDs • Mining Components</p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a href="#request-quote" className="bg-sisAccent text-black font-semibold px-6 py-3 rounded">REQUEST A QUOTE</a>
          <a href="tel:+61447553353" className="border border-white px-6 py-3 rounded">CALL NOW</a>
        </div>

        <p className="mt-6 text-sm text-sisSteel max-w-2xl">SIS Equipment Group provides equipment supply, repair, overhaul and sourcing solutions for mining, power generation and heavy industrial customers throughout Australia.</p>

        <div className="mt-6 text-sm tracking-widest text-white/80">SUPPLY | REPAIR | EXCHANGE | SOURCE</div>
      </div>
    </section>
  )
}

export default Hero
