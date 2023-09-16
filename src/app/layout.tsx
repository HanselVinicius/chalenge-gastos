import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chalenge Expenses',
  description: 'created by Vinicius Hansel',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <link rel='icon' href='/sense_data_fvc.jpg'></link>
      <body>{children}</body>
    </html>
  )
}
