import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import dynamic from 'next/dynamic'
import './globals.css'
import ScrollProgressBar from '@/components/shared/ScrollProgressBar'

const CommandPalette = dynamic(() => import('@/components/shared/CommandPalette'))
import { ToastProvider } from '@/components/shared/ToastContainer'
import Footer from '@/components/layouts/Footer'
import AutoHideHeader from '@/components/layouts/AutoHideHeader'

// Configure Inter font for body text
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// Configure JetBrains Mono for code snippets
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Rommel Porras - DevOps Consultant & Software Engineer',
  description:
    'DevOps Consultant with 10+ years of experience specializing in AWS, cloud infrastructure, automation, and infrastructure as code. Explore homelab infrastructure, DevOps insights, and self-hosted projects. Currently at Hexagon AB.',
  keywords: [
    'DevOps',
    'Software Engineer',
    'AWS Certified',
    'Cloud Architecture',
    'Infrastructure as Code',
    'Terraform',
    'Docker',
    'Kubernetes',
    'Python',
    'Automation',
    'CI/CD',
    'GitLab CI/CD',
    'SRE',
    'EKS',
    'Blog',
    'Homelab',
    'Self-Hosted',
    'Philippines',
    'Santa Rosa Laguna',
  ],
  authors: [{ name: 'Rommel Porras', url: 'https://rommelporras.com' }],
  creator: 'Rommel Porras',
  publisher: 'Rommel Porras',
  metadataBase: new URL('https://rommelporras.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rommelporras.com',
    siteName: 'Rommel Porras Portfolio',
    title: 'Rommel Porras - DevOps Consultant & Software Engineer',
    description:
      'DevOps Consultant with 10+ years of experience specializing in AWS, cloud infrastructure, automation, and infrastructure as code. 3x AWS Certified.',
    images: [
      {
        url: '/og-home.png',
        width: 1200,
        height: 630,
        alt: 'Rommel Porras - DevOps Engineer & Cloud Infrastructure Consultant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rommel Porras - DevOps Consultant & Software Engineer',
    description: 'DevOps Consultant with 10+ years of experience. 3x AWS Certified.',
    images: ['/og-home.png'],
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Rommel Porras',
    url: 'https://rommelporras.com',
    image: 'https://rommelporras.com/favicon.svg',
    jobTitle: 'DevOps Consultant',
    worksFor: {
      '@type': 'Organization',
      name: 'Hexagon AB',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Santa Rosa',
      addressRegion: 'Laguna',
      addressCountry: 'Philippines',
    },
    email: 'hello@rommelporras.com',
    telephone: '+639171136771',
    sameAs: ['https://www.linkedin.com/in/rommelporras', 'https://github.com/rommelporras'],
    knowsAbout: [
      'DevOps',
      'AWS',
      'Cloud Architecture',
      'Infrastructure as Code',
      'Terraform',
      'Docker',
      'Kubernetes',
      'Python',
      'Automation',
      'CI/CD',
      'Homelab',
      'Self-Hosted Infrastructure',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'STI College Southwoods',
    },
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AWS Certified AI Practitioner',
        credentialCategory: 'certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Amazon Web Services',
        },
        url: 'https://www.credly.com/badges/e8b95b1f-e420-4959-ad9b-0541fecf71e2/',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'AWS Certified Developer – Associate',
        credentialCategory: 'certification',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Amazon Web Services',
        },
        url: 'https://www.credly.com/badges/4346793e-94ce-4d67-9965-7e74fa98503a/',
      },
    ],
  }

  return (
    <html lang="en" className={`${GeistSans.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={`${inter.className} antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VZKWF8Y4PZ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VZKWF8Y4PZ');
          `}
        </Script>

        <AutoHideHeader />
        <ToastProvider>
          <ScrollProgressBar />
          <CommandPalette />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <Footer />
        </ToastProvider>
      </body>
    </html>
  )
}
