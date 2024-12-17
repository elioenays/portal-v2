import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useFilter } from '../providers/FilterClassesByStatusProvider'
import { Separator } from '@/components/ui/separator'

const classCategories = {
  todas: 'Todas',
  'disciplina-obrigatorias': 'Disciplina Obrigatórias',
  'disciplinas-eletivas-optativas': 'Disciplinas Eletivas/Optativas',
  'disciplinas-equivalentes': 'Disciplinas Equivalentes',
  'componentes-curriculares': 'Componentes Curriculares',
  'disciplinas-extras': 'Disciplinas Extras',
}

const classStatus = {
  0: 'Todas',
  2: 'Em curso',
  3: 'Pendentes',
  1: 'Concluidos',
}

export function ClassesFilter() {
  const { setFilterByStatus, setFilterByCategory } = useFilter()

  return (
    <>
      <ToggleGroup
        type="single"
        className="self-start"
        defaultValue="0"
        onValueChange={(value) => value && setFilterByStatus(Number(value))}
      >
        {Object.entries(classStatus).map(([key, value]) => (
          <ToggleGroupItem value={key} key={key}>
            {value}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <Separator />

      <ToggleGroup
        type="single"
        className="self-start"
        defaultValue="todas"
        onValueChange={(value) => value && setFilterByCategory(value)}
      >
        {Object.entries(classCategories).map(([key, value]) => (
          <ToggleGroupItem key={key} value={key}>
            {value}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </>
  )
}
