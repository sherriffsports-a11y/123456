import React from 'react'

// Column counts are keys rather than computed, because Tailwind needs the class
// strings to exist literally in the source. Gaps are gap-3 (0.75rem), so an
// n-column row subtracts (n-1) * 0.75rem before dividing.
const basisByColumns = {
  4: 'basis-[calc((100%_-_0.75rem)/2)] sm:basis-[calc((100%_-_1.5rem)/3)] lg:basis-[calc((100%_-_2.25rem)/4)]',
  5: 'basis-[calc((100%_-_0.75rem)/2)] sm:basis-[calc((100%_-_1.5rem)/3)] lg:basis-[calc((100%_-_3rem)/5)]',
} as const

const baseChipClasses =
  'flex items-center justify-center rounded border border-gray-200 bg-white text-center text-sm leading-snug text-sisCharcoal'

type ChipGridProps = {
  items: string[]
  columns: keyof typeof basisByColumns
  /** Padding, min-height and font weight — kept out of the base classes so
   *  callers cannot collide with them. */
  chipClassName: string
}

/** A wrapping row of equal-width labels. Full rows fill the width and a
 *  trailing partial row centres, so no single item is ever stranded. */
const ChipGrid: React.FC<ChipGridProps> = ({ items, columns, chipClassName }) => {
  return (
    <ul className="flex flex-wrap justify-center gap-3">
      {items.map((item) => (
        <li
          key={item}
          className={`${baseChipClasses} ${basisByColumns[columns]} ${chipClassName}`}
        >
          {item}
        </li>
      ))}
    </ul>
  )
}

export default ChipGrid
