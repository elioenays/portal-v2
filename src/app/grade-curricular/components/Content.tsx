'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GreadeDetails } from './GreadeDetails'
import { ClassStatus, ClassStatusProps } from './ClassStatus'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ClassesContent } from './ClassesContent'
import { classes } from './classes'
import { useMemo } from 'react'
import { ClassesFilter } from './Filter'
import { useFilter } from '../providers/FilterClassesByStatusProvider'

const classStatuses = {
  Concluída: 1,
  Pendente: 2,
  'Não Concluída': 3,
  Equivalente: 4,
}

export function GradeCurricularContent() {
  const { filterByCategory } = useFilter()

  const periodsFiltered = useMemo(() => {
    if (filterByCategory === 'todas') {
      return classes
    }

    return classes.filter((classe) => classe.categoria === filterByCategory)
  }, [filterByCategory])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grande Curricular</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col gap-3">
          <GreadeDetails />

          <div className="flex gap-3">
            {Object.entries(classStatuses).map(([key, value]) => (
              <ClassStatus
                key={key}
                code={value}
                name={key}
                status={value as ClassStatusProps['status']}
              />
            ))}
          </div>

          <ClassesFilter />

          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="todas"
          >
            {periodsFiltered.map((classe) => (
              <AccordionItem value={classe.nome} key={classe.id}>
                <AccordionTrigger>{classe.nome}</AccordionTrigger>

                <ClassesContent classes={classe.classes} />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </CardContent>
    </Card>
  )
}
