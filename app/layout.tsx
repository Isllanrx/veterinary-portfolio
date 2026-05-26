import type { Metadata, Viewport } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: 'Vitor Casagrande | Medicina Veterinária',
  description: 'Portfólio profissional de Vitor Casagrande Andrade - Estudante de Medicina Veterinária focado em Saúde Pública e Bem-Estar Animal',
  keywords: ['Medicina Veterinária', 'Saúde Pública', 'Bem-Estar Animal', 'Vila Velha', 'Inspeção Sanitária', 'Vitor Casagrande Andrade'],
  authors: [{ name: 'Vitor Casagrande Andrade' }],
  creator: 'Vitor Casagrande Andrade',
  publisher: 'Vitor Casagrande Andrade',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Vitor Casagrande | Medicina Veterinária',
    description: 'Estudante de Medicina Veterinária focado em Saúde Pública e Bem-Estar Animal em Vila Velha, ES.',
    url: 'https://vitorcasagrande.com.br',
    siteName: 'Vitor Casagrande Portfolio',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitor Casagrande | Medicina Veterinária',
    description: 'Estudante de Medicina Veterinária focado em Saúde Pública e Bem-Estar Animal.',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
  },
  manifest: '/manifest.json',
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`bg-background ${inter.variable}`}>
      <body className="font-sans antialiased">
        <LanguageProvider>
          {children}
          {process.env.NODE_ENV === 'production' && <Analytics />}
        </LanguageProvider>
      </body>
    </html>
  )
}
