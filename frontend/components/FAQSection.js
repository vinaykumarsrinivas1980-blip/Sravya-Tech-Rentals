import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      q: "How fast can you deliver rental equipment in Bangalore?",
      a: "For standard bookings, we deliver on the same day within 3 to 4 hours across Bangalore (including Whitefield, Indiranagar, Koramangala, Electronic City, and Jayanagar). Express 2-hour priority dispatch is available for urgent events."
    },
    {
      q: "What documents are required to rent equipment?",
      a: "For Corporate / Business rentals: GST Certificate, Company PAN, and authorized person ID proof. For Individual / Event rentals: Government Photo ID (Aadhaar or Driving License) and current address proof."
    },
    {
      q: "Is a security deposit mandatory?",
      a: "Yes, a nominal refundable security deposit is collected upon delivery. It is completely refunded back to your bank account or UPI immediately upon equipment inspection at the end of the rental term."
    },
    {
      q: "Who handles installation and technician testing?",
      a: "Our certified hardware technician delivers the machine, unboxes, connects power and networking cables, installs printer drivers, and performs a complete test run with you before sign-off. Free of charge."
    },
    {
      q: "What if the equipment breaks down or runs out of toner?",
      a: "We provide comprehensive uptime support. Laser printers come with toner cartridges included. If a mechanical defect occurs, our technician arrives within 2 hours or provides an immediate standby replacement unit."
    },
    {
      q: "Do you offer GST tax invoices?",
      a: "Yes, 100% of our rentals come with compliant GST Tax Invoices (18% IT/AV equipment rental tax category) so your business can claim full input tax credit."
    }
  ]

  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Clear, transparent answers about our rental agreements, delivery timelines, and support.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 bg-slate-50/70 hover:bg-slate-100/70 transition-colors"
                >
                  <span className="font-bold text-slate-900 text-base sm:text-lg">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-emerald-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-5 sm:p-6 bg-white border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
