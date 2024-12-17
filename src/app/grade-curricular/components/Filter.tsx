import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { useFilter } from '../providers/FilterClassesByStatusProvider'
import { Separator } from '@/components/ui/separator'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
        className="self-start flex-wrap max-sm:hidden"
        defaultValue="0"
        onValueChange={(value) => value && setFilterByStatus(Number(value))}
      >
        {Object.entries(classStatus).map(([key, value]) => (
          <ToggleGroupItem value={key} key={key}>
            {value}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <Select
        onValueChange={(value) => value && setFilterByStatus(Number(value))}
        defaultValue="0"
      >
        <SelectTrigger className="max-sm:flex hidden">
          <SelectValue placeholder="Filtro por status" />
        </SelectTrigger>

        <SelectContent>
          {Object.entries(classStatus).map(([key, value]) => (
            <SelectItem value={key} key={key}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Separator />

      <ToggleGroup
        type="single"
        className="self-start flex-wrap max-sm:hidden"
        defaultValue="todas"
        onValueChange={(value) => value && setFilterByCategory(value)}
      >
        {Object.entries(classCategories).map(([key, value]) => (
          <ToggleGroupItem key={key} value={key}>
            {value}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <Select
        onValueChange={(value) => value && setFilterByCategory(value)}
        defaultValue="todas"
      >
        <SelectTrigger className="max-sm:flex hidden">
          <SelectValue placeholder="Filtro por categoria" />
        </SelectTrigger>

        <SelectContent>
          {Object.entries(classCategories).map(([key, value]) => (
            <SelectItem key={key} value={key}>
              {value}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}
