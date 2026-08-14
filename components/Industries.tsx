import React from 'react'

const Industries: React.FC = () => {
  const items = ['Mining','Power Generation','Manufacturing','Mineral Processing','Water','Sugar','Marine','Heavy Industry','Infrastructure','Quarrying']
  return (
    <section id="industries" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Industries We Support</h2>
        <p className="mt-2 text-sisSteel max-w-3xl">We provide specialist services and supply channels across a broad range of heavy industry sectors.</p>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
          {items.map(it => (
            <div key={it} className="bg-white border rounded p-4 text-sm text-sisCharcoal flex items-center justify-center">{it}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
