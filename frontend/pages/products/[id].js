import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ArrowLeft, CheckCircle, MessageCircle, Phone, ShieldCheck, Truck, Clock } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import MobileStickyBar from '../../components/MobileStickyBar'
import { EQUIPMENT_CATALOG, COMPANY_INFO } from '../../data/equipment'

export async function getStaticPaths() {
  const paths = EQUIPMENT_CATALOG.map(item => ({
    params: { id: item.id }
  }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const product = EQUIPMENT_CATALOG.find(item => item.id === params.id) || null
  return { props: { product } }
}

export default function ProductDetailPage({ product }) {
  if (!product) return null

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.tagline,
    brand: {
      '@type': 'Brand',
      name: product.brand
    },
    image: `https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev${product.imagePath}`,
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      offerCount: 3,
      offers: [
        {
          '@type': 'Offer',
          name: 'Daily Rental',
          availability: 'https://schema.org/InStock'
        },
        {
          '@type': 'Offer',
          name: 'Weekly Rental',
          availability: 'https://schema.org/InStock'
        },
        {
          '@type': 'Offer',
          name: 'Monthly Corporate Lease',
          availability: 'https://schema.org/InStock'
        }
      ]
    }
  }

  const whatsappMessage = `Hello Sravya Tech Rentals! I would like to check availability and get a customized quote for the ${product.name}. Delivery location in Bangalore:`
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <>
      <Head>
        <title>{`${product.name} on Rent in Bangalore | Sravya Tech Rentals`}</title>
        <meta
          name="description"
          content={`Rent the ${product.name} (${product.brand}) in Bangalore. Flexible daily, weekly, and monthly corporate leasing options with same-day delivery and on-site technician.`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/products/${product.id}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
      </Head>

      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Navbar />

        <main className="flex-1 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            {/* Back link */}
            <Link
              href="/#catalog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Equipment Catalog</span>
            </Link>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                
                {/* Product Image */}
                <div className="lg:col-span-5 bg-slate-100 rounded-2xl p-8 aspect-[4/3] flex items-center justify-center border border-slate-200/80">
                  <img
                    src={product.imagePath}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="lg:col-span-7 space-y-6">
                  
                  <div>
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full uppercase tracking-wider">
                      {product.brand} • {product.category.toUpperCase()}
                    </span>
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                      {product.name}
                    </h1>
                    <p className="text-base text-slate-600 mt-2">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Flexible Terms Matrix */}
                  <div className="grid grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="text-center p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                      <span className="text-xs text-slate-500 font-medium block">Daily Rental</span>
                      <span className="text-sm font-bold text-slate-900 mt-1 block">Events &amp; Shoots</span>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-white border border-slate-100 shadow-sm">
                      <span className="text-xs text-slate-500 font-medium block">Weekly Package</span>
                      <span className="text-sm font-bold text-slate-900 mt-1 block">Project Teams</span>
                    </div>
                    <div className="text-center p-3 rounded-xl bg-white border border-emerald-200 shadow-sm">
                      <span className="text-xs text-emerald-700 font-medium block">Monthly Lease</span>
                      <span className="text-sm font-bold text-emerald-700 mt-1 block">Corporate Fleet</span>
                    </div>
                  </div>

                  {/* Pricing Callout Pill */}
                  <div className="flex items-center justify-between p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-xs sm:text-sm">
                    <div>
                      <span className="font-bold text-emerald-950 block">Best Competitive Rates in Bangalore</span>
                      <span className="text-emerald-800 text-xs">Customized quotes tailored to duration, fleet size, and location.</span>
                    </div>
                    <span className="font-extrabold text-emerald-800 uppercase tracking-wide bg-white px-3 py-1 rounded-lg border border-emerald-200 text-xs shadow-sm flex-shrink-0">
                      Quote on Request
                    </span>
                  </div>

                  {/* Specifications */}
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Features &amp; Technical Capabilities
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {product.specs.map((spec, i) => (
                        <div key={i} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium">
                          <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Trust Highlights */}
                  <div className="grid grid-cols-3 gap-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                    <div className="flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-emerald-600" />
                      <span>Same-Day Delivery</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      <span>Zero Maintenance</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span>On-Call Support</span>
                    </div>
                  </div>

                  {/* Call to Actions */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all hover:scale-[1.01]"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Get Quote via WhatsApp</span>
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors"
                    >
                      <Phone className="w-4 h-4 text-emerald-600" />
                      <span>Call {COMPANY_INFO.phoneFormatted}</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </main>

        <Footer />
        <MobileStickyBar />
      </div>
    </>
  )
}
