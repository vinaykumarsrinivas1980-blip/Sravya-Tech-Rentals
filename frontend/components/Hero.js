import React from 'react'
import { ShieldCheck, Truck, Clock, Sparkles, ArrowRight, MessageCircle, CheckCircle2 } from 'lucide-react'
import { COMPANY_INFO } from '../data/equipment'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-100/80 via-white to-slate-50">
      
      {/* Background Glow Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-emerald-100/40 via-teal-50/20 to-sky-100/40 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Bangalore&apos;s #1 Verified IT &amp; AV Equipment Rental Hub</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Commercial Printers, Projectors &amp; PA Systems <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-600 to-sky-700">
                On Rent in Bangalore
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
              Same-day delivery across Whitefield, Koramangala, Indiranagar, Electronic City &amp; Konanakunte. 
              Verified brand hardware with full on-site setup, test guarantee, and zero maintenance overhead.
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Same-Day Bangalore Delivery &amp; Setup</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Zero Toner &amp; Servicing Charges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Flexible Daily, Weekly &amp; Monthly Leases</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>24/7 On-Call Technical Support</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#catalog"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base shadow-lg shadow-slate-900/10 transition-all hover:-translate-y-0.5"
              >
                <span>Browse Equipment</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Sravya Tech Rentals! I need an immediate equipment quote for an upcoming requirement in Bangalore.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-base shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant WhatsApp Quote</span>
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">500+</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Bangalore Events Powered</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">&lt; 3 Hrs</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Express Dispatch Available</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900">100%</div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Pre-Tested Hardware</div>
              </div>
            </div>

          </div>

          {/* Hero Right Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-white border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Ready for Dispatch
                </span>
                <span className="text-xs text-slate-500 font-medium">Konanakunte Hub</span>
              </div>

              {/* Featured Visual Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 flex items-center justify-center">
                <img
                  src="/assets/brand-photos/canon-printer-1.webp"
                  alt="Commercial heavy-duty Canon network printer on rent in Bangalore"
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Highlight Card Details */}
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Commercial Network Copier</h3>
                    <p className="text-sm text-slate-500">Canon &amp; Epson Heavy-Duty A3/A4 Fleets</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Rental Plans</div>
                    <div className="text-base sm:text-lg font-extrabold text-emerald-700">Daily &amp; Monthly<span className="text-xs text-slate-500 font-normal block">Corporate Leases</span></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <Truck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Free Local Setup</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Free Toner Cartridges</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Same-Day Replacement</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>GST Invoicing Available</span>
                  </div>
                </div>

                <a
                  href="#quote"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-colors"
                >
                  <span>Build Custom Rental Package</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
