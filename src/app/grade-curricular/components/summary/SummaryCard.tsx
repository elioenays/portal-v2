import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export function SummaryCard({ title }: { title: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-col">
          <span>CH Curso: 3200</span>

          <span>CH Integralizada: 3060</span>
        </div>
      </CardContent>
    </Card>
  )
}
