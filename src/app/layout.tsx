import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'
import ThemeProvider from '@/components/themeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'nothing',
  description: 'A company profile',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning={true} lang='en'>
      <body suppressHydrationWarning={true} className={`${inter.className} antialiased lg:max-w-screen-lg mx-auto p-5`}>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem={true} disableTransitionOnChange>
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
