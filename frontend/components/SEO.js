import Head from 'next/head'

export default function SEO({
  title = 'Sravya Tech Rentals | Rent Printers, Speakers & Tech Equipment',
  description = 'Affordable tech rentals for events, offices, and studios. Rent commercial printers, high-output sound systems, and audio equipment with fast delivery.',
  canonical,
  ogImage = '/logo-placeholder.svg',
  schema
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sravyatechrentals.vercel.app'
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      {/* JSON-LD Structured Data Schema for Google */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </Head>
  )
}
