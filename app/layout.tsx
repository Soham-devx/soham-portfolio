import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Providers } from '@/components/providers'
import './globals.css'

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans', display: 'swap' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono', display: 'swap' })

const title = 'Soham Vade — Engineering Ideas Into Intelligent Systems'
const description =
  'Portfolio of Soham Vade, a Computer Science student specializing in Data Science. Systems programming, Java, networking, and AI/ML projects.'

export const metadata: Metadata = {
  title,
  description,
  generator: 'v0.app',
  authors: [{ name: 'Soham Vade', url: 'https://github.com/Soham-devx' }],
  keywords: ['Soham Vade', 'Computer Science', 'Data Science', 'Java', 'C', 'Systems Programming', 'Portfolio'],
  openGraph: {
    title,
    description,
    type: 'website',
    siteName: 'Soham Vade',
  },
  twitter: { card: 'summary', title, description },
  icons: { icon: [{ url: '/icon.svg', type: 'image/svg+xml' }] },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#121210',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        <Providers>{children}</Providers>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
