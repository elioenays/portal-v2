import {
  Clipboard,
  Clock,
  GraduationCap,
  Grid2X2,
  Handshake,
  Lightbulb,
  Link,
  LucideIcon,
  MessageCircle,
  Monitor,
  Receipt,
  Rocket,
  UserPlus,
} from 'lucide-react'

type SubItem = {
  title: string
  url: string
}

export type SidebarItemType = {
  title: string
  url: string
  icon: LucideIcon
  collapsible: boolean
  subitens?: SubItem[]
}

export const sidebarItens: SidebarItemType[] = [
  {
    title: 'Mural',
    url: '/',
    icon: Monitor,
    collapsible: false,
  },
  {
    title: 'Grade Curricular',
    url: 'grade-curricular',
    icon: Grid2X2,
    collapsible: false,
  },
  {
    title: 'Quadro de Horários',
    url: '/quadro-de-horarios',
    icon: Clock,
    collapsible: false,
  },
  {
    title: 'Matrícula online',
    url: '#',
    icon: UserPlus,
    collapsible: false,
  },
  {
    title: 'Central do Aluno',
    url: '#',
    icon: GraduationCap,
    collapsible: true,
    subitens: [
      {
        title: 'Faltas',
        url: '#',
      },
      {
        title: 'Notas',
        url: '#',
      },
    ],
  },
  {
    title: 'Relatórios de Outros',
    url: '#',
    icon: Link,
    collapsible: true,
    subitens: [
      {
        title: 'TCC',
        url: '#',
      },
      {
        title: 'AVA',
        url: '#',
      },
      {
        title: 'Geração do Boleto',
        url: '#',
      },
      {
        title: 'Relatórios VBI',
        url: '#',
      },
    ],
  },
  {
    title: 'Secretaria',
    url: '#',
    icon: Clipboard,
    collapsible: true,
    subitens: [
      {
        title: 'Solicitações',
        url: '#',
      },
    ],
  },
  {
    title: 'Oportunidades',
    url: '#',
    icon: Lightbulb,
    collapsible: true,
    subitens: [
      {
        title: 'Atividades Curriculares',
        url: '#',
      },
    ],
  },
  {
    title: 'Financeiro',
    url: '#',
    icon: Receipt,
    collapsible: false,
  },
  {
    title: 'Negociação on-line',
    url: '#',
    icon: Handshake,
    collapsible: false,
  },
  {
    title: 'Avaliação Institucional',
    url: '#',
    icon: MessageCircle,
    collapsible: false,
  },
  {
    title: 'Acelerador de carreiras',
    url: '#',
    icon: Rocket,
    collapsible: false,
  },
]
