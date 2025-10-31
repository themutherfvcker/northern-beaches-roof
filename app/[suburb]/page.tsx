import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NORTHERN_BEACHES_SUBURBS, getSuburbFromSlug } from '@/lib/suburbs'
import { generateSEO, generateSuburbSchema } from '@/lib/seo'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

interface SuburbPageProps {
  params: { suburb: string }
}

export async function generateMetadata({ params }: SuburbPageProps): Promise<Metadata> {
  const suburb = getSuburbFromSlug(params.suburb)
  
  return generateSEO({
    title: `Roof Restoration ${suburb}`,
    description: `Expert roof restoration in ${suburb}. Complete restorations, repairs, painting & cleaning. 15-year warranty. Free quotes. Call today!`,
    suburb,
    canonical: `/${params.suburb}`
  })
}

export async function generateStaticParams() {
  return NORTHERN_BEACHES_SUBURBS.map(suburb => ({
    suburb: suburb.toLowerCase().replace(/\s+/g, '-')
  }))
}

export default function SuburbPage({ params }: SuburbPageProps) {
  const suburb = getSuburbFromSlug(params.suburb)
  
  if (!NORTHERN_BEACHES_SUBURBS.includes(suburb as any)) {
    notFound()
  }

  const schema = generateSuburbSchema(suburb)

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Hero suburb={suburb} />
      <Services />
      <Gallery suburb={suburb} />
      <Testimonials suburb={suburb} />
      <Footer />
    </main>
  )
}
