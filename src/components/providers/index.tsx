import { ReactNode } from 'react'
import { AppSidebarProvider } from './AppSidebarProvider'

export function AppProviders({ children }: { children: ReactNode }) {
  return <AppSidebarProvider>{children}</AppSidebarProvider>
}
