import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AppProviders } from '@/components/providers'
import { AppSidebar } from '@/components/layout/Sidebar'
import { AppHeader } from '@/components/layout/AppHeader'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portal V2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${font.className} antialiased`}>
        <AppProviders>
          <AppSidebar />

          <main className="flex flex-col w-full">
            <AppHeader />

            <div className="p-3">{children}</div>
          </main>
        </AppProviders>
      </body>
    </html>
  )
}
