import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import EquipmentCatalog from '../components/EquipmentCatalog'
import QuoteCalculator from '../components/QuoteCalculator'
import WhyChooseUs from '../components/WhyChooseUs'
import FAQSection from '../components/FAQSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import MobileStickyBar from '../components/MobileStickyBar'
import { COMPANY_INFO, BANGALORE_SERVICE_AREAS } from '../data/equipment'

export default function Home() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/#business",
        "name": COMPANY_INFO.name,
        "alternateName": COMPANY_INFO.legalName,
        "url": "https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/",
        "logo": "https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/assets/brands/canon.svg",
        "image": "https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/assets/brand-photos/epson-printer-1.webp",
        "telephone": COMPANY_INFO.phone,
        "email": COMPANY_INFO.email,
        "priceRange": "Quote on Request",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, UPI, Net Banking, Credit Card",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Konanakunte",
          "addressLocality": "Bangalore",
          "postalCode": "560062",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": COMPANY_INFO.geo.lat,
          "longitude": COMPANY_INFO.geo.lng
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "opens": "09:00",
            "closes": "20:00"
          }
        ],
        "areaServed": BANGALORE_SERVICE_AREAS.map(area => ({
          "@type": "Place",
          "name": `${area}, Bangalore`
        }))
      }
    ]
  }

  return (
    <>
      <Head>
        {/* Core Primary Meta */}
        <title>Sravya Tech Rentals – IT &amp; AV Equipment Rentals Bangalore | Printers, Projectors, PA Systems</title>
        <meta
          name="description"
          content="Rent commercial printers, laser projectors, screens, and PA sound systems across Bangalore. Same-day delivery to Whitefield, Koramangala, Indiranagar, Electronic City & Konanakunte."
        />
        <meta name="keywords" content="IT equipment rental Bangalore, printer rental Bangalore, projector rental Bangalore, projector screen rental Bangalore, sound system rental Bangalore, speaker mic rental Bangalore, commercial copier on rent, tech rentals Bangalore" />
        <meta name="author" content="Sravya Tech Rentals" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/" />
        
        {/* Bangalore Geo Meta Tags */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka, India" />
        <meta name="geo.position" content="12.8848;77.5683" />
        <meta name="ICBM" content="12.8848, 77.5683" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sravya Tech Rentals – IT &amp; AV Equipment Rentals in Bangalore" />
        <meta property="og:description" content="Commercial printers, projectors, and PA systems on rent across Bangalore with same-day delivery." />
        <meta property="og:url" content="https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/" />
        <meta property="og:site_name" content="Sravya Tech Rentals" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="/assets/brand-photos/canon-printer-1.webp" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sravya Tech Rentals – IT &amp; AV Equipment Rentals in Bangalore" />
        <meta name="twitter:description" content="Rent commercial printers, projectors, screens, and audio setups at affordable daily &amp; monthly rates across Bangalore." />
        <meta name="twitter:image" content="/assets/brand-photos/canon-printer-1.webp" />

        {/* JSON-LD Structured Data Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <EquipmentCatalog />
          <QuoteCalculator />
          <WhyChooseUs />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
        <MobileStickyBar />
      </div>
    </>
  )
}
