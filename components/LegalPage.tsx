import React from 'react'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'

type LegalPageProps = {
  title: string
  description: string
  lastUpdated: string
  children: React.ReactNode
}

const proseClasses = [
  'mt-8 space-y-8 pb-4',
  '[&_h2]:text-xl [&_h2]:font-semibold',
  '[&_p]:mt-2 [&_p]:text-sisSteel',
  '[&_ul]:mt-2 [&_ul]:space-y-1 [&_ul]:list-disc [&_ul]:list-inside [&_ul]:text-sisSteel',
  '[&_a]:text-sisCharcoal [&_a]:underline',
].join(' ')

const LegalPage: React.FC<LegalPageProps> = ({ title, description, lastUpdated, children }) => {
  return (
    <div className="flex min-h-full flex-col">
      <Head>
        <title>{`${title} | SIS Equipment Group`}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <Nav />

      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="mt-2 text-sm text-sisSteel">Last updated: {lastUpdated}</p>
          <div className={proseClasses}>{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default LegalPage
