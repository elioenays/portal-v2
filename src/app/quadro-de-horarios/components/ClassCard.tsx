import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function ClassCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Estatistica</CardTitle>
        <CardDescription className="text-xs">
          29/07/2024 - 14/12/2024
        </CardDescription>
      </CardHeader>
    </Card>
  )
}
