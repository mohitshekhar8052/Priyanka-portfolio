import './globals.css'
import { Poppins } from 'next/font/google'
import Script from 'next/script'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Priyanka Singh Sengar - Computer Science Student & Developer Portfolio',
  description: 'Priyanka Singh Sengar - Computer Science student at Maharana Pratap Engineering College. Skilled in Python, JavaScript, C++, HTML, CSS, and MySQL. View my projects and get in touch!',
  keywords: 'Priyanka Singh Sengar, Computer Science, Web Developer, Python, JavaScript, Portfolio, Student Developer',
  author: 'Priyanka Singh Sengar',
  openGraph: {
    title: 'Priyanka Singh Sengar - Developer Portfolio',
    description: 'Computer Science student passionate about technology and development',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="icon" type="image/png" href="/Logo.PNG" />
        <Script 
          src="https://kit.fontawesome.com/6140d5223c.js" 
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <link 
          href="https://unpkg.com/aos@2.3.1/dist/aos.css" 
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script 
          src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"
          strategy="beforeInteractive"
        />
        <Script 
          src="https://unpkg.com/aos@2.3.1/dist/aos.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  )
}
