import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GreadeDetails } from './GreadeDetails'
import { ClassStatus } from './ClassStatus'

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
        </div>
      </CardContent>
    </Card>
  )
}
