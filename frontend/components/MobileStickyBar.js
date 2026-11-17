import React from 'react'
import { Phone, MessageCircle, Calculator } from 'lucide-react'
import { COMPANY_INFO } from '../data/equipment'

export default function MobileStickyBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom,0px))] shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
        >
          <Phone className="w-4 h-4 text-emerald-600 mb-0.5" />
          <span>Call Hub</span>
        </a>

        <a
          href="#quote"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold transition-colors"
        >
          <Calculator className="w-4 h-4 text-sky-600 mb-0.5" />
          <span>Calculator</span>
        </a>

        <a
          href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Sravya Tech Rentals! I need rental equipment in Bangalore. Please send quote.")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors"
        >
          <MessageCircle className="w-4 h-4 mb-0.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
