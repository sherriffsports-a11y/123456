import coreWebVitals from 'eslint-config-next/core-web-vitals'
import typescript from 'eslint-config-next/typescript'

export default [
  {
    ignores: ['.next/**', 'out/**', 'next-env.d.ts'],
  },
  ...coreWebVitals,
  ...typescript,
]
