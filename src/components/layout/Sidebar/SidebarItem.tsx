import { NextLink } from '@/components/NextLink'
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import { SidebarItemType } from './sidebarItens'

export function SidebarItem({ item }: { item: SidebarItemType }) {
  const pathname = usePathname()

  return (
    <SidebarMenuItem title={item.title}>
      <SidebarMenuButton asChild isActive={item.url === pathname}>
        <NextLink href={item.url}>
          <item.icon />

          <span>{item.title}</span>
        </NextLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
