import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mahdi Jamaludin - Full Stack Developer Portfolio',
  description: 'Portfolio Mahdi Jamaludin, Full Stack Developer dari Binus University Malang. Spesialisasi React, Next.js, Golang, dan Laravel. Lihat project SaveBite dan portfolio lengkap.',
  keywords: 'Mahdi Jamaludin, Full Stack Developer, React Developer, Next.js, Golang, Laravel, Portfolio, Web Development, Malang, Indonesia',
  authors: [{ name: 'Mahdi Jamaludin' }],
  creator: 'Mahdi Jamaludin',
  publisher: 'Mahdi Jamaludin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mahdijamaludin.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mahdi Jamaludin - Full Stack Developer Portfolio',
    description: 'Portfolio Mahdi Jamaludin, Full Stack Developer dari Binus University Malang. Spesialisasi React, Next.js, Golang, dan Laravel.',
    url: 'https://mahdijamaludin.vercel.app',
    siteName: 'Mahdi Jamaludin Portfolio',
    images: [
      {
        url: '/mahdi2.jpg',
        width: 800,
        height: 600,
        alt: 'Mahdi Jamaludin - Full Stack Developer',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahdi Jamaludin - Full Stack Developer Portfolio',
    description: 'Portfolio Mahdi Jamaludin, Full Stack Developer dari Binus University Malang.',
    images: ['/mahdi2.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        {/* Structured Data for Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Mahdi Jamaludin",
              "jobTitle": "Full Stack Developer",
              "alumniOf": {
                "@type": "Organization",
                "name": "Binus University Malang"
              },
              "knowsAbout": [
                "React", "Next.js", "Golang", "Laravel", "TypeScript", "Tailwind CSS"
              ],
              "url": "https://mahdijamaludin.vercel.app",
              "sameAs": [
                "https://github.com/Mahdryyy",
                "https://www.linkedin.com/in/mahdi-jamaludin-755239380/",
                "https://www.instagram.com/mahhbroo"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Malang",
                "addressRegion": "East Java",
                "addressCountry": "ID"
              }
            })
          }}
        />
        
        {/* Preconnect untuk performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
