import Head from 'next/head'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Capabilities from '../components/Capabilities'
import TransformerFeature from '../components/TransformerFeature'
import EquipmentSourcing from '../components/EquipmentSourcing'
import Industries from '../components/Industries'
import WhyUs from '../components/WhyUs'
import QuoteForm from '../components/QuoteForm'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SIS Equipment Group | Mining & Industrial Equipment Australia</title>
        <meta name="description" content="SIS Equipment Group provides electric motor, pump, gearbox, transformer, VSD and mining equipment supply, repair, overhaul and sourcing solutions throughout Australia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "SIS Equipment Group",
          "url": "https://example.com",
          "logo": "https://example.com/logo.png",
          "contactPoint": [{"@type": "ContactPoint","telephone": "+61 447 553 353","contactType": "customer service","areaServed": "AU"}]
        }` }} />
      </Head>

      <Nav />
      <main className="overflow-x-hidden">
        <Hero />
        <Capabilities />
        <TransformerFeature />
        <EquipmentSourcing />
        <Industries />
        <WhyUs />
        <QuoteForm />
        <Contact />
      </main>
      <Footer />

      {/* Sticky Request a Quote */}
      <a href="#request-quote" className="fixed right-4 bottom-6 bg-sisAccent text-white px-4 py-3 rounded shadow-lg lg:hidden">REQUEST A QUOTE</a>
    </div>
  )
}
