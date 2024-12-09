'use client'

import { ReactNode } from 'react'
import { SidebarProvider } from '../ui/sidebar'

export function AppSidebarProvider({ children }: { children: ReactNode }) {
  return <SidebarProvider>{children}</SidebarProvider>
}
