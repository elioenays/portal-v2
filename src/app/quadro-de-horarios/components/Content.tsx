import { Card, CardContent } from '@/components/ui/card'
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select'
import { ClassCard, ClassType } from '../components/ClassCard'
import { WeekDayColumn } from '../components/WeekDayColumn'

const weekDays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']

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

const thursdayClasses: ClassType[] = [
  { name: 'Estágio', teacher: 'Professor 4' },
]

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
        <span className="font-medium">Quadro de Horário</span>

        <Select>
          <SelectTrigger className="w-[180px]" title="Período letivo">
            <SelectValue placeholder="2024/2" />
          </SelectTrigger>
        </Select>
      </div>

      <Card>
        <div className="grid grid-cols-6 px-6 mb-1 max-xl:hidden gap-3">
          {weekDays.map((day) => (
            <WeekDayColumn day={day} key={day} />
          ))}
        </div>

        <CardContent className="grid grid-cols-6 max-xl:flex max-xl:flex-col gap-3">
          <div>
            <div className="gap-3 flex flex-col">
              <span className="hidden max-xl:block font-medium">Segunda</span>

              {mondayClasses &&
                mondayClasses.map((mondayClass) => (
                  <ClassCard matter={mondayClass} key={mondayClass.name} />
                ))}
            </div>
          </div>

          <div>
            <div className="gap-3 flex flex-col">
              <span className="hidden max-xl:block font-medium">Terça</span>

              {tuesdayClasses &&
                tuesdayClasses.map((tuesdayClass) => (
                  <ClassCard matter={tuesdayClass} key={tuesdayClass.name} />
                ))}
            </div>
          </div>

          <div>
            <div className="gap-3 flex flex-col">
              <span className="hidden max-xl:block font-medium">Quarta</span>

              {wednesdayClasses &&
                wednesdayClasses.map((wednesdayClass) => (
                  <ClassCard
                    matter={wednesdayClass}
                    key={wednesdayClass.name}
                  />
                ))}
            </div>
          </div>

          <div>
            <div className="gap-3 flex flex-col">
              <span className="hidden max-xl:block font-medium">Quinta</span>

              {thursdayClasses &&
                thursdayClasses.map((thursdayClass) => (
                  <ClassCard matter={thursdayClass} key={thursdayClass.name} />
                ))}
            </div>
          </div>

          <div>
            <div className="gap-3 flex flex-col">
              <span className="hidden max-xl:block font-medium">Sexta</span>

              {fridayClasses &&
                fridayClasses.map((fridayClass) => (
                  <ClassCard matter={fridayClass} key={fridayClass.name} />
                ))}
            </div>
          </div>

          <div>
            <div className="gap-3 flex flex-col">
              <span className="hidden max-xl:block font-medium">Sábado</span>

              {saturdayClasses &&
                saturdayClasses.map((saturdayClass) => (
                  <ClassCard matter={saturdayClass} key={saturdayClass.name} />
                ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
