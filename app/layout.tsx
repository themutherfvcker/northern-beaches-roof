import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Northern Beaches Roof Restoration | Sydney Roof Experts',
  description: 'Professional roof restoration, repairs, and painting across Northern Beaches Sydney. 15-year warranty, 500+ happy customers. Free quotes.',
  keywords: 'roof restoration northern beaches, roof repair sydney, roof painting manly, roof cleaning dee why',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
