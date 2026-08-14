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
import { ENQUIRY_EMAIL } from '../lib/contact'

const description =
  'SIS Equipment Group provides electric motor, pump, gearbox, transformer, VSD and mining equipment supply, repair, overhaul and sourcing solutions throughout Australia.'

// Set NEXT_PUBLIC_SITE_URL once the production domain is known so the
// canonical link and structured data point at real URLs.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SIS Equipment Group',
  description,
  ...(siteUrl ? { url: siteUrl, logo: `${siteUrl}/logo.svg` } : {}),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Brisbane',
    addressRegion: 'QLD',
    addressCountry: 'AU',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: ENQUIRY_EMAIL,
      contactType: 'customer service',
      areaServed: 'AU',
    },
  ],
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>SIS Equipment Group | Mining &amp; Industrial Equipment Australia</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SIS Equipment Group | Mining &amp; Industrial Equipment Australia" />
        <meta property="og:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        {siteUrl && <link rel="canonical" href={siteUrl} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
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
      <a href="#request-quote" className="fixed right-4 bottom-6 bg-sisAccent text-sisCharcoal font-semibold px-4 py-3 rounded shadow-lg lg:hidden">REQUEST A QUOTE</a>
    </div>
  )
}
