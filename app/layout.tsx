import { Analytics } from "@vercel/analytics/react"
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from "@/components/ui/toaster"
import { cn } from '@/lib/utils'
import './globals.css'
// import VisitCounter from '@/components/visit-counter'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://vasupradha.vercel.app'),
  title: 'Vasupradha - Portfolio',
  description: 'Building agentic solutions — Voice AI, multi-agent systems, and full-stack products.',
  openGraph: {
    title: 'Vasupradha R — Building Agentic Solutions',
    description: 'Voice AI, multi-agent systems, and full-stack products built end-to-end.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vasupradha R — Building Agentic Solutions',
    description: 'Voice AI, multi-agent systems, and full-stack products built end-to-end.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if ('serviceWorker' in navigator) navigator.serviceWorker.getRegistrations().then(r => r.forEach(sw => sw.unregister()));` }} />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          disableTransitionOnChange
        >
          {children}
          {/* <VisitCounter /> */}
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

