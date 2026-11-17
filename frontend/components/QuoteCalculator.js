import React, { useState } from 'react'
import { Calculator, MessageCircle, Sparkles, CheckCircle2, ShieldCheck, HelpCircle, Truck, FileText } from 'lucide-react'
import { EQUIPMENT_CATALOG, COMPANY_INFO } from '../data/equipment'

export default function QuoteCalculator() {
  const [selectedId, setSelectedId] = useState(EQUIPMENT_CATALOG[0].id)
  const [quantity, setQuantity] = useState(1)
  const [days, setDays] = useState(7)

  const selectedItem = EQUIPMENT_CATALOG.find(item => item.id === selectedId) || EQUIPMENT_CATALOG[0]

  // Tier computation without hardcoded currency amounts
  let tierLabel = 'Daily Event Rental'
  let discountBadge = 'Standard Rates'

  if (days < 7) {
    tierLabel = `${days} Day${days > 1 ? 's' : ''} (Daily Term)`
    discountBadge = 'Short-Term Flexible'
  } else if (days < 30) {
    tierLabel = `${days} Days (Weekly Discount Tier)`
    discountBadge = 'Weekly Volume Discount'
  } else {
    tierLabel = `${days} Days (Corporate Monthly Lease)`
    discountBadge = 'Maximum Corporate Savings'
  }

  // Pre-formatted WhatsApp inquiry
  const whatsappMessage = `Hello Sravya Tech Rentals!
I configured a rental package on your website and would like an instant quote:
- Equipment: ${selectedItem.name}
- Quantity: ${quantity} unit(s)
- Duration: ${days} days (${tierLabel})
- Plan Type: ${discountBadge}

Delivery Address / Area in Bangalore: `

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id="quote" className="py-20 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Custom Rental Configurator
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Configure Your Rental Package
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Select your required hardware, quantity, and rental duration. We provide custom competitive quotes tailored specifically to your project requirements.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-6">
            
            {/* 1. Equipment Selection */}
            <div>
              <label className="block text-sm font-bold text-slate-900 mb-2">
                1. Select Equipment
              </label>
              <select
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all shadow-sm"
              >
                {EQUIPMENT_CATALOG.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name} ({item.brand} • {item.category.toUpperCase()})
                  </option>
                ))}
              </select>
            </div>

            {/* Selected Item Summary Pill */}
            <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-slate-200">
              <div className="w-16 h-16 rounded-xl bg-slate-100 p-2 flex items-center justify-center flex-shrink-0">
                <img
                  src={selectedItem.imagePath}
                  alt={selectedItem.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <h4 className="text-sm font-bold text-slate-900 truncate">{selectedItem.name}</h4>
                <p className="text-xs text-slate-500">{selectedItem.tagline}</p>
                <div className="text-xs font-semibold text-emerald-700 mt-1">
                  Daily, Weekly &amp; Monthly Flexible Terms Available
                </div>
              </div>
            </div>

            {/* 2. Quantity Selection */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-900">
                  2. Quantity Required
                </label>
                <span className="text-sm font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                  {quantity} Unit{quantity > 1 ? 's' : ''}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 2, 3, 4, 5].map(q => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => setQuantity(q)}
                    className={`py-2.5 text-sm font-bold rounded-xl border transition-all ${
                      quantity === q
                        ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                        : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Duration Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-bold text-slate-900">
                  3. Rental Duration (Days)
                </label>
                <span className="text-sm font-bold text-slate-900 bg-white border border-slate-200 px-3 py-1 rounded-lg">
                  {days} Days <span className="text-xs text-emerald-700 font-bold ml-1">({discountBadge})</span>
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="60"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value, 10))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-xs text-slate-500 font-medium mt-1.5">
                <span>1 Day</span>
                <span>7 Days (Weekly tier)</span>
                <span>30 Days (Monthly lease)</span>
                <span>60 Days</span>
              </div>
            </div>

            {/* Quick Duration Preset Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              {[
                { label: '1 Day Event', d: 1 },
                { label: '3 Days Weekend', d: 3 },
                { label: '1 Week (7 Days)', d: 7 },
                { label: '2 Weeks (14 Days)', d: 14 },
                { label: '1 Month (30 Days)', d: 30 },
              ].map(preset => (
                <button
                  key={preset.d}
                  type="button"
                  onClick={() => setDays(preset.d)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition-colors ${
                    days === preset.d
                      ? 'bg-emerald-100 border-emerald-300 text-emerald-900'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

          </div>

          {/* Quote Receipt Breakdown Card */}
          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 to-slate-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-lg text-white">Rental Package Summary</h3>
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2.5 py-0.5 rounded-full">
                Bangalore Hub
              </span>
            </div>

            {/* Itemized Line Items */}
            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Selected Equipment:</span>
                <span className="font-semibold text-white truncate max-w-[180px]">{selectedItem.name}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Quantity:</span>
                <span className="font-semibold text-white">{quantity} unit(s)</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Duration Term:</span>
                <span className="font-semibold text-emerald-400">{tierLabel}</span>
              </div>
              <div className="flex justify-between text-emerald-400 font-semibold bg-emerald-950/40 p-2.5 rounded-lg border border-emerald-900/50">
                <span>Volume Benefit:</span>
                <span>{discountBadge}</span>
              </div>
              <div className="flex justify-between text-slate-300 pt-2 border-t border-slate-800">
                <span>Security Deposit:</span>
                <span className="font-semibold text-slate-200">100% Refundable on Return</span>
              </div>
            </div>

            {/* Total Display */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="text-xs uppercase tracking-wider text-slate-400 font-medium">Pricing Plan</div>
              <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
                Custom Quote on Request
              </div>
              <p className="text-xs text-slate-300 pt-1 leading-relaxed">
                We provide the most competitive rates in Bangalore tailored to your exact timeline, location, and fleet volume.
              </p>
            </div>

            {/* Perks included in quote */}
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Free equipment replacement within 3 hours if hardware issues arise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero consumable charges on laser printers (standard toner quota included)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>GST Tax Invoicing available for all corporate accounts</span>
              </div>
            </div>

            {/* Action CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-sm sm:text-base shadow-lg shadow-emerald-500/20 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Get Instant Quote on WhatsApp</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}
