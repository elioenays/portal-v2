import { NextLink } from '@/components/NextLink'
import { SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar'
import { usePathname } from 'next/navigation'
import { SidebarItemType } from './sidebarItens'

export function SidebarItem({ item }: { item: SidebarItemType }) {
  const pathname = usePathname()

  return (
    <SidebarMenuItem title={item.title}>
      <SidebarMenuButton
        asChild
        isActive={item.url === pathname}
        disabled={item.disabled}
      >
        <NextLink
          href={item.url}
          data-disabled={item.disabled}
          className="data-[disabled=true]:opacity-50 data-[disabled=true]:pointer-events-none"
        >
          <item.icon />

          <span>{item.title}</span>
        </NextLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
