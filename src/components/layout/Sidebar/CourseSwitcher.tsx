import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import { ChevronsUpDown, GalleryVerticalEnd } from 'lucide-react'

export function CourseSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem title="Alterar curso">
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="bg-muted">
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-primary text-sidebar-primary-foreground">
                <GalleryVerticalEnd className="size-4" />
              </div>

              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-semibold text-xs">
                  Engenharia de Software
                </span>

                <span className="uppercase hidden">fc2021002</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            className="w-[--radix-dropdown-menu-trigger-width]"
            align="start"
          >
            <DropdownMenuItem>Análise de sistemas</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
