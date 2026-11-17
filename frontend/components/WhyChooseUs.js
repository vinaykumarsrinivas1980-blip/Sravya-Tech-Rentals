import React from 'react'
import { Truck, ShieldCheck, Wrench, Clock, RefreshCw, FileText } from 'lucide-react'

export default function WhyChooseUs() {
  const features = [
    {
      icon: Truck,
      title: "Same-Day Bangalore Delivery",
      description: "Direct dispatch from our Konanakunte hub to Whitefield, Indiranagar, Electronic City, Koramangala, and across the city in under 3 hours."
    },
    {
      icon: Wrench,
      title: "Free On-Site Installation",
      description: "Our certified hardware technician delivers, unpacks, connects network cables, installs drivers, and tests every machine before leaving."
    },
    {
      icon: ShieldCheck,
      title: "Zero Maintenance Overhead",
      description: "You never pay for maintenance, toner cartridge replacements, or drum wear. We take full responsibility for equipment uptime."
    },
    {
      icon: RefreshCw,
      title: "Instant Standby Replacement",
      description: "If any printer, projector, or speaker runs into hardware faults, we replace it with an equivalent standby unit immediately."
    },
    {
      icon: Clock,
      title: "Flexible Rental Horizons",
      description: "From a single-day corporate seminar or product launch to multi-year corporate IT fleet leasing with customized monthly billing."
    },
    {
      icon: FileText,
      title: "100% Compliant GST Invoicing",
      description: "Legitimate corporate tax invoices provided with complete GST input credit support for business accounts."
    }
  ]

  return (
    <section id="why" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            The Sravya Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why 500+ Bangalore Businesses Choose Us
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Hardware ownership ties up capital and burdens your team with maintenance. Renting from Sravya gives you enterprise-grade equipment on demand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => {
            const Icon = feat.icon
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow duration-200 space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
