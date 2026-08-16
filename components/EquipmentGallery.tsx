import React from 'react'
import Image from 'next/image'
import electricMotorImage from '../public/equipment/electric-motor.jpg'
import gearboxImage from '../public/equipment/gearbox.jpg'
import pumpImage from '../public/equipment/pump.jpg'
import transformerImage from '../public/equipment/transformer.jpg'

const equipment = [
  {
    title: 'Electric Motors',
    image: electricMotorImage,
    alt: 'Industrial three-phase electric motor with a finned frame, terminal box and drive shaft',
  },
  {
    title: 'Gearboxes',
    image: gearboxImage,
    alt: 'Aluminium bevel-helical geared motor with a hollow-bore output flange and a mounted electric motor',
  },
  {
    title: 'Pumps',
    image: pumpImage,
    alt: 'Horizontal centrifugal process pump mounted on a steel baseplate',
  },
  {
    title: 'Transformers',
    image: transformerImage,
    alt: 'Oil-filled distribution transformer with cooling fins and porcelain bushings',
  },
]

const EquipmentGallery: React.FC = () => {
  return (
    <section id="equipment-types" className="bg-gray-50 border-y border-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold">Equipment We Work On</h2>
        <p className="mt-2 text-sisSteel max-w-3xl">
          Rotating and electrical plant we supply, repair, overhaul and source for mining, power
          generation and heavy industrial sites.
        </p>

        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {equipment.map((item) => (
            <figure
              key={item.title}
              className="overflow-hidden rounded border border-gray-200 bg-white"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-3 py-3 text-sm font-semibold text-sisCharcoal">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EquipmentGallery
