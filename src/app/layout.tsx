import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'wellwich.com',
  description: 'wellwich\'s portfolio site.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-gray-400 lg:m-64 lg:mt-0 font-mono'>
        <h1 className='text-6xl lg:text-8xl font-bold'>wellwich.com</h1>
        {children}
        <footer>
          <p className='text-center h-16'>© wellwich.</p>
        </footer>
      </body>
    </html>
  )
}

export const runtime = 'edge';