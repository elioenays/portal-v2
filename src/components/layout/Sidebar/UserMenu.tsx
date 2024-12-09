'use client'

import { NextLink } from '@/components/NextLink'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar'
import { BadgeCheck, ChevronsUpDown, LogOut } from 'lucide-react'

export function UserMenu() {
  const { isMobile } = useSidebar()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg  text-sidebar-primary-foreground">
                <Avatar className="size-8 rounded-lg">
                  <AvatarImage
                    src="https://github.com/elioenays.png"
                    alt="@elioenays"
                  />

                  <AvatarFallback>ES</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold text-xs">Elioenay Silva</span>

                <span className="uppercase">fc2021002</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
            side={isMobile ? 'bottom' : 'right'}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="size-8 rounded-lg">
                  <AvatarImage
                    src="https://github.com/elioenays.png"
                    alt="@elioenays"
                  />

                  <AvatarFallback>ES</AvatarFallback>
                </Avatar>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">
                    Elioenay Rodrigues da Silva
                  </span>

                  <span className="truncate text-xs">
                    elioenay.rodrigues@a.catolica-to.edu.br
                  </span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />

            <DropdownMenuSeparator />

            <DropdownMenuGroup>
              <DropdownMenuItem asChild className="cursor-pointer">
                <NextLink href="#">
                  <BadgeCheck />
                  Perfil
                </NextLink>
              </DropdownMenuItem>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
              <LogOut />
              Sair
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
