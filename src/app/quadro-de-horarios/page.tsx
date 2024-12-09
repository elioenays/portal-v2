import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ClassCard } from './components/ClassCard'
import { WeekDayColumn } from './components/WeekDayColumn'

const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

export default function QuadroDeHorariosPage() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3 items-center">
        <span>Quadro de Horário</span>

        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="2024/2" />
          </SelectTrigger>
        </Select>
      </div>

      <Card>
        <div className="grid grid-cols-6 px-6 font-medium mb-1">
          {weekDays.map((day) => (
            <WeekDayColumn day={day} key={day} />
          ))}
        </div>

        <CardContent className="grid grid-cols-6">
          <Card className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              <ClassCard />
              <ClassCard />
              <ClassCard />
            </CardContent>
          </Card>

          <Card className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              <ClassCard />
              <ClassCard />
              <ClassCard />
            </CardContent>
          </Card>

          <Card className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              <ClassCard />
              <ClassCard />
              <ClassCard />
            </CardContent>
          </Card>

          <Card className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              <ClassCard />
              <ClassCard />
              <ClassCard />
            </CardContent>
          </Card>

          <Card className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              <ClassCard />
              <ClassCard />
              <ClassCard />
            </CardContent>
          </Card>

          <Card className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              <ClassCard />
              <ClassCard />
              <ClassCard />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
