import { Metadata } from 'next'
import { QuadroDeHorariosContent } from './components/Content'

export const metadata: Metadata = {
  title: 'Portal V2 | Quadro de horários',
}

export default function QuadroDeHorariosPage() {
  return <QuadroDeHorariosContent />
}
