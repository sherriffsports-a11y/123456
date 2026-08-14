import React from 'react'
import ChipGrid from './ChipGrid'

const industries = [
  'Mining',
  'Power Generation',
  'Manufacturing',
  'Mineral Processing',
  'Water',
  'Sugar',
  'Marine',
  'Cruise',
  'Heavy Industry',
  'Infrastructure',
  'Quarrying',
]

const Industries: React.FC = () => {
  return (
    <section id="industries" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Industries We Support</h2>
        <p className="mt-2 text-sisSteel max-w-3xl">We provide specialist services and supply channels across a broad range of heavy industry sectors.</p>

        <div className="mt-6">
          <ChipGrid items={industries} columns={5} chipClassName="min-h-16 px-3 py-4" />
        </div>
      </div>
    </section>
  )
}

export default Industries
