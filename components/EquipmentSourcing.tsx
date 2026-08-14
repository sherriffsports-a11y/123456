import React from 'react'
import ChipGrid from './ChipGrid'

const categories = [
  'CAT Components',
  'Komatsu Components',
  'Mining Electrical Components',
  'Electric Motors',
  'Pumps',
  'Gearboxes',
  'Transformers',
  'Generators',
  'VSDs',
  'Cables',
  'Industrial Electrical Equipment',
]

const EquipmentSourcing: React.FC = () => {
  return (
    <section id="equipment" className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold">Need Equipment or Components?</h2>
      <p className="mt-2 text-sisSteel max-w-3xl">Tell us what you need and we&apos;ll assist with sourcing suitable equipment through Australian and international supplier networks.</p>

      <div className="mt-6">
        <ChipGrid items={categories} columns={4} chipClassName="px-3 py-3" />
      </div>

      <div className="mt-6">
        <a href="#request-quote" className="bg-sisAccent text-sisCharcoal font-semibold px-5 py-3 rounded">SOURCE EQUIPMENT FOR ME</a>
      </div>
    </section>
  )
}

export default EquipmentSourcing
