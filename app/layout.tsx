import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Madura Dias',
  description: 'Madura Dias - Software Engineer specializing in Mobile App Development',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
