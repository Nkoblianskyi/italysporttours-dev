import { Suspense } from 'react'
import ContattiContent from './contatti-content'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contatti — Italy Sport Tours',
  description: 'Contatta Italy Sport Tours per informazioni sui tour sportivi in Italia e in Europa. Rispondiamo entro 24 ore.',
}

export default function ContattiPage() {
  return (
    <Suspense fallback={null}>
      <ContattiContent />
    </Suspense>
  )
}
