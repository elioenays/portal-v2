import {
  ChevronDown,
  Clipboard,
  Clock,
  GraduationCap,
  Grid2X2,
  Handshake,
  Lightbulb,
  Link,
  MessageCircle,
  Monitor,
  Receipt,
  Rocket,
  UserPlus,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '../../ui/sidebar'
import { NextLink } from '../../NextLink'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../../ui/collapsible'
import { CourseSwitcher } from './CourseSwitcher'
import { Fragment } from 'react'
import { UserMenu } from './UserMenu'

const sidebarItens = [
  {
    title: 'Mural',
    url: '#',
    icon: Monitor,
    collapsible: false,
  },
  {
    title: 'Grade Curricular',
    url: '#',
    icon: Grid2X2,
    collapsible: false,
  },
  {
    title: 'Quadro de Horários',
    url: '#',
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

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <CourseSwitcher />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItens.map((item) => {
                return (
                  <Fragment key={item.title}>
                    {!item.collapsible && (
                      <SidebarMenuItem title={item.title}>
                        <SidebarMenuButton asChild>
                          <NextLink href={item.url}>
                            <item.icon />

                            <span>{item.title}</span>
                          </NextLink>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )}

                    {item.collapsible && (
                      <Collapsible defaultOpen className="group/collapsible">
                        <SidebarMenuItem key={item.title} title={item.title}>
                          <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                              <item.icon />

                              <span>{item.title}</span>
                              <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                            </SidebarMenuButton>
                          </CollapsibleTrigger>

                          {item.subitens && (
                            <CollapsibleContent>
                              <SidebarMenuSub>
                                {item.subitens.map((subitem) => (
                                  <SidebarMenuSubItem key={subitem.title}>
                                    <SidebarMenuSubButton asChild>
                                      <NextLink href={subitem.url}>
                                        <span>{subitem.title}</span>
                                      </NextLink>
                                    </SidebarMenuSubButton>
                                  </SidebarMenuSubItem>
                                ))}
                              </SidebarMenuSub>
                            </CollapsibleContent>
                          )}
                        </SidebarMenuItem>
                      </Collapsible>
                    )}
                  </Fragment>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <UserMenu />
      </SidebarFooter>
    </Sidebar>
  )
}
