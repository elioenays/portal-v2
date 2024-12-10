import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export type ClassType = { name: string; teacher: string }

export function ClassCard({ matter }: { matter: ClassType }) {
  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{matter.name}</CardTitle>

        <CardDescription className="text-xs">{matter.teacher}</CardDescription>
      </CardHeader>
    </Card>
  )
}
