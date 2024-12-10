import { ReactNode } from 'react'
import { AppSidebarProvider } from './AppSidebarProvider'
import { ThemeProvider } from './ThemeProvider'

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AppSidebarProvider>{children}</AppSidebarProvider>
    </ThemeProvider>
  )
}
