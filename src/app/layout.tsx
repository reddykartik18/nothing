import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
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
    <html lang='en'>
      <body className={`${inter.className}  antialiased lg:max-w-screen-lg mx-auto`}>
        <main>{children}</main>
      </body>
    </html>
  )
}
