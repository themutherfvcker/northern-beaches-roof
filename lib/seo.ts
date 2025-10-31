import { Metadata } from 'next'

interface SEOParams {
  title: string
  description: string
  suburb?: string
  canonical?: string
}

export function generateSEO({ title, description, suburb, canonical }: SEOParams): Metadata {
  const fullTitle = suburb 
    ? `${suburb} Roof Restoration | ${title}`
    : title

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      type: 'website',
      locale: 'en_AU',
      siteName: 'Northern Beaches Roof Restoration'
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description
    },
    alternates: {
      canonical: canonical || '/'
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export function generateSuburbSchema(suburb: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Northern Beaches Roof Restoration - ${suburb}`,
    description: `Professional roof restoration services in ${suburb}, Northern Beaches Sydney`,
    areaServed: {
      '@type': 'City',
      name: suburb,
      containedIn: {
        '@type': 'State',
        name: 'New South Wales'
      }
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '200'
    },
    priceRange: '$$'
  }
}
