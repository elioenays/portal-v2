import { GradeCurricularContent } from './components/Content'
import { FilterProvider } from './providers/FilterClassesByStatusProvider'

export default function GradeCurricularPage() {
  return (
    <FilterProvider>
      <GradeCurricularContent />
    </FilterProvider>
  )
}
