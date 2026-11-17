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
        "name": "Sravya Tech Rentals",
        "alternateName": "Sravya Suppliers Bangalore",
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
          "streetAddress": "08, Kokila Building, Ground Floor, Coconut Garden, Old Bank Colony, Konanakunte",
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
            "closes": "19:00"
          }
        ],
        "areaServed": [
          "Bangalore", "Konanakunte", "JP Nagar", "Jayanagar", "Bannerghatta Road", 
          "Electronic City", "Whitefield", "Koramangala", "Indiranagar", "HSR Layout"
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Rental Catalog",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Commercial Printer Rental (Laser / Inkjet / Multifunction Heavy Duty)",
                "description": "High-speed laser & all-in-one printers for corporate offices, events, exams, and projects."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Full HD / 4K Laser Projector Rental",
                "description": "High-lumen crystal clear projectors for conferences, seminars, movie screenings, and corporate presentations."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Motorized & Tripod Projector Screen Rental",
                "description": "Wide viewing angle high-contrast projection screens from 6ft to 12ft."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "PA System, Speaker & Cordless Collar/Handheld Mic Rental",
                "description": "Professional sound systems, wireless microphones, and portable active speakers for indoor and outdoor events."
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How quickly can you deliver tech equipment in Bangalore?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We provide same-day fast delivery across South Bangalore (Konanakunte, JP Nagar, Jayanagar, Bannerghatta Road, HSR) and scheduled delivery across Greater Bangalore including Whitefield and Electronic City."
            }
          },
          {
            "@type": "Question",
            "name": "What rental duration options are available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer daily rentals (1–3 days for events and shoots), weekly rentals (up to 30 days for short projects), and monthly corporate rental contracts with customized pricing and complimentary maintenance."
            }
          },
          {
            "@type": "Question",
            "name": "Do you provide on-site setup and testing?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Every projector, sound system, and printer is inspected before dispatch. Our technical team handles complete on-site installation, connectivity testing, and guidance so your event or office operation runs seamlessly."
            }
          },
          {
            "@type": "Question",
            "name": "What equipment is available for rent at Sravya Tech Rentals?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our inventory includes commercial Laser & Inkjet Printers (Canon, HP, Epson, Brother, Xerox), high-lumen Projectors (BenQ, Epson, Acer, ViewSonic), Projection Screens, and Sound Systems with wireless mics (JBL, Sony, Panasonic, Philips)."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book or request a rental quote?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can message us directly on WhatsApp at +91 99864 10966, email Sravyasuppliers@gmail.com, or fill out the enquiry form on our website with your event dates and required items."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <Head>
        {/* Core Primary Meta */}
        <title>Sravya Tech Rentals – IT &amp; AV Equipment Rentals in Bangalore | Printers, Projectors &amp; Sound</title>
        <meta
          name="description"
          content="Bangalore's trusted partner for IT &amp; AV equipment rentals. Rent commercial printers, laser projectors, projector screens, and PA sound systems across JP Nagar, Jayanagar, Electronic City, Whitefield &amp; Konanakunte. Fast delivery, 100% verified equipment. Call +91 99864 10966."
        />
        <meta name="keywords" content="IT equipment rental Bangalore, printer rental Bangalore, projector rental Bangalore, projector screen rental Bangalore, sound system rental Bangalore, speaker mic rental Bangalore, audio equipment rental Bangalore, commercial printer on rent, tech rentals Bangalore" />
        <meta name="author" content="Sravya Tech Rentals" />
        <meta name="google-site-verification" content="googleaea003a7e3ee87f3" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <link rel="canonical" href="https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/" />
        
        {/* Bangalore Geo Meta Tags */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka, India" />
        <meta name="geo.position" content="12.8848;77.5683" />
        <meta name="ICBM" content="12.8848, 77.5683" />

        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content="Sravya Tech Rentals – IT &amp; AV Equipment Rentals in Bangalore" />
        <meta property="og:description" content="Rent commercial printers, laser projectors, projector screens, and PA sound systems across Bangalore with same-day delivery and testing." />
        <meta property="og:url" content="https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/" />
        <meta property="og:site_name" content="Sravya Tech Rentals" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:image" content="https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/assets/brands/canon.svg" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sravya Tech Rentals – IT &amp; AV Equipment Rentals in Bangalore" />
        <meta name="twitter:description" content="Bangalore's trusted equipment rental partner. Rent printers, projectors, screens, and audio setups at affordable daily &amp; monthly rates." />
        <meta name="twitter:image" content="https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/assets/brands/canon.svg" />

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
