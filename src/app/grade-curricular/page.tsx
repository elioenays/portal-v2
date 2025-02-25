import { GradeCurricularContent } from './components/Content'
import { SummaryContent } from './components/summary'
import { FilterProvider } from './providers/FilterClassesByStatusProvider'

export default function GradeCurricularPage() {
  return (
    <FilterProvider>
      <GradeCurricularContent />

      <SummaryContent />
    </FilterProvider>
  )
}
