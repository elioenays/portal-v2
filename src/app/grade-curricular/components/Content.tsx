import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GreadeDetails } from './GreadeDetails'
import { ClassStatus } from './ClassStatus'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Separator } from '@/components/ui/separator'

type ClassStatuses = {
  status?: 'concluida' | 'pendente' | 'naoConcluida' | 'default'
  code: number
  name: string
}

const classStatuses: ClassStatuses[] = [
  { code: 1, name: 'Concluída', status: 'concluida' },
  { code: 2, name: 'Pendente', status: 'pendente' },
  { code: 3, name: 'Não Concluída', status: 'naoConcluida' },
  { code: 4, name: 'Equivalente', status: 'default' },
]

const classCategories = [
  { name: 'Todas', value: 'todas' },
  { name: 'Disciplina Obrigatórias', value: 'disciplina-obrigatorias' },
  {
    name: 'Disciplinas Eletivas/Optativas',
    value: 'disciplinas-eletivas-optativas',
  },
  {
    name: 'Disciplinas Equivalentes',
    value: 'disciplinas-equivalentes',
  },
  {
    name: 'Componentes Curriculares',
    value: 'componentes-curriculares',
  },
  {
    name: 'Disciplinas Extras',
    value: 'disciplinas-extras',
  },
]

export function GradeCurricularContent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Grande Curricular</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-3">
          <GreadeDetails />

          <div className="flex gap-3">
            {classStatuses.map((classStatus) => (
              <ClassStatus
                key={classStatus.name}
                code={classStatus.code}
                name={classStatus.name}
                status={classStatus.status}
              />
            ))}
          </div>

          <ToggleGroup
            type="single"
            className="self-start"
            defaultValue="todas"
          >
            <ToggleGroupItem value="todas">Todas</ToggleGroupItem>

            <ToggleGroupItem value="em-curso">Em curso</ToggleGroupItem>

            <ToggleGroupItem value="pendentes">Pendentes</ToggleGroupItem>

            <ToggleGroupItem value="concluidos">Concluídos</ToggleGroupItem>
          </ToggleGroup>

          <Separator />

          <ToggleGroup
            type="single"
            className="self-start"
            defaultValue="todas"
          >
            {classCategories.map((classCategory) => (
              <ToggleGroupItem
                value={classCategory.value}
                key={classCategory.name}
              >
                {classCategory.name}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="todas"
          >
            {classCategories.map((classCategory) => (
              <AccordionItem
                value={classCategory.value}
                key={classCategory.name}
              >
                <AccordionTrigger>{classCategory.name}</AccordionTrigger>

                <AccordionContent></AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  )
}
