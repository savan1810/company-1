import Footer from '@/components/Footer'
import './globals.css'

import Navbar from '@/components/Navbar'



export const metadata = {
  title: 'Artist Solution',
  description: 'IT company',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='' >
      <Navbar/>
      {children}
      <Footer/>
      </body>
    </html>
  )
}
