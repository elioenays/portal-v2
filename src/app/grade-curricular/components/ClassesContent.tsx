import { AccordionContent } from '@/components/ui/accordion'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Classe } from './classes'
import { ClassStatus, ClassStatusProps } from './ClassStatus'
import { useFilter } from '../providers/FilterClassesByStatusProvider'
import { useMemo } from 'react'

export function ClassesContent({ classes: classe }: { classes: Classe[] }) {
  const { filterByStatus } = useFilter()

  const classesFiltered = useMemo(() => {
    if (filterByStatus === 0) {
      return classe
    }

    return classe.filter((classe) => classe.status === filterByStatus)
  }, [classe, filterByStatus])

  return (
    <AccordionContent>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Período Letivo</TableHead>
            <TableHead>Código</TableHead>
            <TableHead>Disciplina</TableHead>
            <TableHead>Situação</TableHead>
            <TableHead>Nota/Conc.</TableHead>
            <TableHead>Faltas</TableHead>
            <TableHead>Créditos</TableHead>
            <TableHead title="Carga horária">CH</TableHead>
            <TableHead>CH integr.</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {classesFiltered.map((classe) => (
            <TableRow key={classe.id}>
              <TableCell>
                <ClassStatus
                  code={classe.status}
                  status={classe.status as ClassStatusProps['status']}
                />
              </TableCell>

              <TableCell>{classe.periodo_letivo}</TableCell>

              <TableCell>{classe.codigo}</TableCell>

              <TableCell>{classe.disciplina}</TableCell>

              <TableCell>{classe.situacao}</TableCell>

              <TableCell>{classe.nota}</TableCell>

              <TableCell>{classe.faltas}</TableCell>

              <TableCell>{classe.creditos}</TableCell>

              <TableCell>{classe.cargaHoraria}</TableCell>

              <TableCell>{classe.cargaHorariaIntegralizada}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </AccordionContent>
  )
}
