'use client'

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
import { SidebarItem } from './SidebarItem'
import { sidebarItens } from './sidebarItens'
import { ChevronDown } from 'lucide-react'

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
                    {!item.collapsible && <SidebarItem item={item} />}

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
