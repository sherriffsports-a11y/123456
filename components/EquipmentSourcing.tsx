import React from 'react'

const EquipmentSourcing: React.FC = () => {
  const categories = ['CAT Components','Komatsu Components','Mining Electrical Components','Electric Motors','Pumps','Gearboxes','Transformers','VSDs','Industrial Electrical Equipment']
  return (
    <section id="equipment" className="max-w-6xl mx-auto py-16 px-6">
      <h2 className="text-3xl font-bold">Need Equipment or Components?</h2>
      <p className="mt-2 text-sisSteel max-w-3xl">Tell us what you need and we&apos;ll assist with sourcing suitable equipment through Australian and international supplier networks.</p>

      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {categories.map(cat => (
          <div key={cat} className="border rounded p-3 text-sm text-sisCharcoal bg-white">{cat}</div>
        ))}
      </div>

      <div className="mt-6">
        <a href="#request-quote" className="bg-sisAccent text-sisCharcoal font-semibold px-5 py-3 rounded">SOURCE EQUIPMENT FOR ME</a>
      </div>
    </section>
  )
}

export default EquipmentSourcing
