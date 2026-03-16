import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Cashlytic Capital | Expert Loan Solutions in Prayagraj',
  description: 'Expert guidance for Home, Business, and Personal Loans in Prayagraj. Get the best quotes from top banks with Cashlytic Capital - Your trusted DSA.',
  generator: 'VardhanFlow',
  keywords: 'home loan, business loan, personal loan, car loan, construction loan, Prayagraj, loan DSA',
  icons: {
    icon: '/logo.jpeg', // This points to your new logo
    apple: '/logo.jpeg',
  },
  openGraph: {
    title: 'Cashlytic Capital | Best Loan Solutions',
    description: 'Expert guidance for all types of loans with access to India\'s leading banks',
    type: 'website',
    images: ['/logo.jpeg']
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}