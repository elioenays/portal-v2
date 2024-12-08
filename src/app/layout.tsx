import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const font = Inter()

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
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  )
}
