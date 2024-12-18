import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SummaryCard } from './SummaryCard'

export function SummaryContent() {
  return (
    <Card className="mt-3">
      <CardHeader>
        <CardTitle>Resumo</CardTitle>
      </CardHeader>

      <CardContent className="flex gap-3 flex-wrap">
        <SummaryCard title="Integralização" />
        <SummaryCard title="Disciplinas Obrigatórias" />
        <SummaryCard title="Disciplinas Optativas" />
        <SummaryCard title="Disciplinas Eletivas" />
        <SummaryCard title="Componentes Curriculares" />
      </CardContent>
    </Card>
  )
}
