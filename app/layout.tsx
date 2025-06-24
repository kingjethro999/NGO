import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NWAOKWU CARE FOUNDATION (NCF) - Making a Difference Together',
  description: 'Join us in our mission to create positive change in communities worldwide. Support our initiatives through donations and volunteer work.',
  keywords: 'NGO, charity, donation, community service, humanitarian aid, volunteer, NCF, NWAOKWU CARE FOUNDATION',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 