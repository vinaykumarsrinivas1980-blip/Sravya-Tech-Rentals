import React, { useState } from 'react'
import { Printer, Video, Volume2, Monitor, CheckCircle, MessageCircle, Info, Sparkles, X, Phone } from 'lucide-react'
import { EQUIPMENT_CATALOG, COMPANY_INFO } from '../data/equipment'

export default function EquipmentCatalog() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filteredItems = activeCategory === 'all'
    ? EQUIPMENT_CATALOG
    : EQUIPMENT_CATALOG.filter(item => item.category === activeCategory)

  const categories = [
    { id: 'all', label: 'All Equipment', icon: Sparkles },
    { id: 'printers', label: 'Printers & Copiers', icon: Printer },
    { id: 'projectors', label: 'Laser Projectors', icon: Video },
    { id: 'audio', label: 'PA Sound Systems', icon: Volume2 },
    { id: 'screens', label: 'Projector Screens', icon: Monitor },
  ]

  return (
    <section id="catalog" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Available Inventory
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Commercial Hardware Ready for Immediate Dispatch
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Pre-tested, sanitized, and configured for plug-and-play operation. Available on daily, weekly, or long-term monthly corporate leasing terms.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map(cat => {
              const Icon = cat.icon
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10'
                      : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-emerald-400' : 'text-slate-500'}`} />
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Equipment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col overflow-hidden group"
            >
              
              {/* Product Image Box */}
              <div className="relative aspect-[4/3] bg-slate-100/70 p-6 flex items-center justify-center overflow-hidden border-b border-slate-100">
                {item.badge && (
                  <span className="absolute top-4 left-4 z-10 text-xs font-bold uppercase tracking-wide bg-emerald-700 text-white px-2.5 py-1 rounded-md shadow-sm">
                    {item.badge}
                  </span>
                )}
                {item.brandLogo && (
                  <img
                    src={item.brandLogo}
                    alt={`${item.brand} logo`}
                    className="absolute top-4 right-4 h-5 opacity-70 object-contain"
                  />
                )}
                <img
                  src={item.imagePath}
                  alt={item.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider mb-1">
                    {item.brand} • {item.category.toUpperCase()}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                    {item.tagline}
                  </p>
                </div>

                {/* Key Spec Bullets */}
                <div className="space-y-1.5 pt-2 border-t border-slate-100">
                  {item.specs.slice(0, 3).map((spec, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span className="truncate">{spec}</span>
                    </div>
                  ))}
                </div>

                {/* Rental Plans & Inquire */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">Rental options</span>
                    <div className="text-sm font-bold text-slate-900">
                      Daily, Weekly &amp; Monthly
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-500">Pricing</span>
                    <div className="text-sm font-bold text-emerald-700">
                      Best Rates on Request
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Specs</span>
                  </button>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Sravya Tech Rentals, I would like to check availability and get a rental quote for the ${item.name}. Delivery location in Bangalore:`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Spec Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
              <div>
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                  {selectedProduct.brand} • Detailed Spec Sheet
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-0.5">
                  {selectedProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-xl text-slate-500 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                <div className="aspect-[4/3] bg-slate-100 rounded-2xl p-4 flex items-center justify-center">
                  <img
                    src={selectedProduct.imagePath}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {selectedProduct.tagline}
                  </p>
                  
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                    <div className="text-xs font-bold text-slate-900 uppercase">Flexible Rental Options:</div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Daily Rental:</span>
                      <span className="font-bold text-slate-900">Events, Shoots &amp; Seminars</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Weekly Package:</span>
                      <span className="font-bold text-slate-900">Projects &amp; Conferences (Discounted)</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Monthly Corporate Lease:</span>
                      <span className="font-bold text-emerald-700">Enterprise Long-Term Support</span>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 pt-1 border-t border-slate-200">
                      <span>Includes:</span>
                      <span>Free Toner/Cables, Standby Replacement &amp; On-Site Setup</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Full Specs List */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Technical Specifications &amp; Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-medium text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ideal Use Case */}
              <div className="text-xs text-slate-600 bg-emerald-50/60 p-3.5 rounded-xl border border-emerald-100">
                <strong className="text-emerald-900 font-semibold">Recommended Applications:</strong> {selectedProduct.idealFor}
              </div>

              {/* Modal Action CTA */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Sravya Tech Rentals! I am interested in renting the ${selectedProduct.name} in Bangalore. Please confirm availability and terms.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book on WhatsApp</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-sm transition-colors"
                >
                  <Phone className="w-4 h-4 text-emerald-600" />
                  <span>Call Us</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  )
}
