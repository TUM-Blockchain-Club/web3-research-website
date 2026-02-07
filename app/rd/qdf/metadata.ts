import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quantitative DeFi (QDF) | TBC Research & Development',
  description: 'Quantitative research wing focused on DeFi protocols, AMM efficiency, lending solutions, and derivatives markets. Launching Summer Semester 2026.',
  keywords: ['DeFi', 'Quantitative Finance', 'AMM', 'Lending Protocols', 'Blockchain Research', 'Web3'],
  openGraph: {
    title: 'Quantitative DeFi (QDF) | TBC R&D',
    description: 'Advancing decentralized finance through quantitative research and mathematical analysis.',
    url: 'https://tbc-research.com/rd/qdf',
    siteName: 'TBC Research & Development',
    images: [
      {
        url: '/og-image-qdf.png',
        width: 1200,
        height: 630,
        alt: 'TBC QDF Research Wing',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quantitative DeFi (QDF) | TBC R&D',
    description: 'Advancing decentralized finance through quantitative research and mathematical analysis.',
    images: ['/og-image-qdf.png'],
  },
}
