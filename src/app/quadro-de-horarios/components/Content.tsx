import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ClassCard, ClassType } from '../components/ClassCard'
import { WeekDayColumn } from '../components/WeekDayColumn'

const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado']

const mondayClasses: ClassType[] = []

const tuesdayClasses: ClassType[] = [
  { name: 'Estatistica', teacher: 'Professora 1' },
]

const wednesdayClasses: ClassType[] = [
  {
    name: 'Práticas Profissionais em Construção de Software',
    teacher: 'Professor 2',
  },
]

const thursdayClasses: ClassType[] = []

const fridayClasses: ClassType[] = []

const saturdayClasses: ClassType[] = [
  {
    name: 'Pesquisa Operacional e Teoria dos Jogos',
    teacher: 'Professor 3',
  },
]

export function QuadroDeHorariosContent() {
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
          <div className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              {mondayClasses &&
                mondayClasses.map((mondayClass) => (
                  <ClassCard matter={mondayClass} key={mondayClass.name} />
                ))}
            </CardContent>
          </div>

          <div className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              {tuesdayClasses &&
                tuesdayClasses.map((tuesdayClass) => (
                  <ClassCard matter={tuesdayClass} key={tuesdayClass.name} />
                ))}
            </CardContent>
          </div>

          <div className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              {wednesdayClasses &&
                wednesdayClasses.map((wednesdayClass) => (
                  <ClassCard
                    matter={wednesdayClass}
                    key={wednesdayClass.name}
                  />
                ))}
            </CardContent>
          </div>

          <div className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              {thursdayClasses &&
                thursdayClasses.map((thursdayClass) => (
                  <ClassCard matter={thursdayClass} key={thursdayClass.name} />
                ))}
            </CardContent>
          </div>

          <div className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              {fridayClasses &&
                fridayClasses.map((fridayClass) => (
                  <ClassCard matter={fridayClass} key={fridayClass.name} />
                ))}
            </CardContent>
          </div>

          <div className="max-w-60">
            <CardContent className="gap-3 flex flex-col">
              {saturdayClasses &&
                saturdayClasses.map((saturdayClass) => (
                  <ClassCard matter={saturdayClass} key={saturdayClass.name} />
                ))}
            </CardContent>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
