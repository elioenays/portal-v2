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
  disabled: boolean
}

export type SidebarItemType = {
  title: string
  url: string
  icon: LucideIcon
  collapsible: boolean
  disabled: boolean
  subitens?: SubItem[]
}

export const sidebarItens: SidebarItemType[] = [
  {
    title: 'Mural',
    url: '/',
    icon: Monitor,
    collapsible: false,
    disabled: false,
  },
  {
    title: 'Grade Curricular',
    url: '/grade-curricular',
    icon: Grid2X2,
    collapsible: false,
    disabled: false,
  },
  {
    title: 'Quadro de Horários',
    url: '/quadro-de-horarios',
    icon: Clock,
    collapsible: false,
    disabled: false,
  },
  {
    title: 'Matrícula online',
    url: '#',
    icon: UserPlus,
    collapsible: false,
    disabled: true,
  },
  {
    title: 'Central do Aluno',
    url: '#',
    icon: GraduationCap,
    collapsible: true,
    disabled: true,
    subitens: [
      {
        title: 'Faltas',
        url: '#',
        disabled: true,
      },
      {
        title: 'Notas',
        url: '#',
        disabled: true,
      },
    ],
  },
  {
    title: 'Relatórios de Outros',
    url: '#',
    icon: Link,
    collapsible: true,
    disabled: true,
    subitens: [
      {
        title: 'TCC',
        url: '#',
        disabled: true,
      },
      {
        title: 'AVA',
        url: '#',
        disabled: true,
      },
      {
        title: 'Geração do Boleto',
        url: '#',
        disabled: true,
      },
      {
        title: 'Relatórios VBI',
        url: '#',
        disabled: true,
      },
    ],
  },
  {
    title: 'Secretaria',
    url: '#',
    icon: Clipboard,
    collapsible: true,
    disabled: true,
    subitens: [
      {
        title: 'Solicitações',
        url: '#',
        disabled: true,
      },
    ],
  },
  {
    title: 'Oportunidades',
    url: '#',
    icon: Lightbulb,
    collapsible: true,
    disabled: true,
    subitens: [
      {
        title: 'Atividades Curriculares',
        url: '#',
        disabled: true,
      },
    ],
  },
  {
    title: 'Financeiro',
    url: '#',
    icon: Receipt,
    collapsible: false,
    disabled: true,
  },
  {
    title: 'Negociação on-line',
    url: '#',
    icon: Handshake,
    collapsible: false,
    disabled: true,
  },
  {
    title: 'Avaliação Institucional',
    url: '#',
    icon: MessageCircle,
    collapsible: false,
    disabled: true,
  },
  {
    title: 'Acelerador de carreiras',
    url: '#',
    icon: Rocket,
    collapsible: false,
    disabled: true,
  },
]
