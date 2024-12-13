import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GreadeDetails } from './GreadeDetails'
import { ClassStatus } from './ClassStatus'

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
            <ClassStatus code={1} name="Concluida" status="concluida" />
            <ClassStatus code={1} name="Pendente" status="pendente" />
            <ClassStatus code={1} name="Não Concluída" status="naoConcluida" />
            <ClassStatus code={1} name="Equivalente" />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
