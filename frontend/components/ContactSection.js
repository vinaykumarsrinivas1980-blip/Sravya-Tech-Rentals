import React, { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react'
import { COMPANY_INFO, BANGALORE_SERVICE_AREAS } from '../data/equipment'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    equipment: 'Commercial Printer / Copier',
    duration: '1 Month Lease',
    message: '',
    botField: '' // Honeypot anti-spam resolving Goldfish Risk #9
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.botField) {
      return // Silently drop bot submissions
    }
    try {
      await fetch('https://formspree.io/f/xzdybgdy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          equipment: formData.equipment,
          duration: formData.duration,
          message: formData.message
        })
      })
    } catch (err) {
      // Fallback gracefully
    }
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Visit Our Hub or Request a Call Back
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Need equipment on short notice or planning a major corporate conference? Speak with our Bangalore rental specialist directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details & Map Card */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
                Sravya Tech Rentals Hub
              </h3>

              <div className="space-y-4 text-sm">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Hub Address:</div>
                    <div className="text-slate-600 leading-relaxed">{COMPANY_INFO.address}</div>
                    <div className="text-xs text-slate-500 mt-0.5">Near Konanakunte Cross Metro Station</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Direct Helpline:</div>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-emerald-700 font-bold hover:underline">
                      {COMPANY_INFO.phoneFormatted}
                    </a>
                    <div className="text-xs text-slate-500">Fast Response (09:00 AM – 08:00 PM)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Official Email:</div>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-emerald-700 font-semibold hover:underline">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700 flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Operating Hours:</div>
                    <div className="text-slate-600">{COMPANY_INFO.hours}</div>
                  </div>
                </div>

              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello! I need rental equipment in Bangalore. Please connect me with a support specialist.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat with Equipment Specialist</span>
                </a>
              </div>

            </div>

            {/* Service Areas Badge Cloud */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Primary Bangalore Delivery Areas:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {BANGALORE_SERVICE_AREAS.map((area, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 border border-slate-200/60"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Lead Capture Form Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm">
            
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Request an Instant Quotation &amp; Call Back
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              Fill out your requirement and our inventory team will confirm availability, dispatch timelines, and pricing within 15 minutes.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">
                  Requirement Received!
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name || 'valued customer'}</strong>. Our Bangalore team has logged your inquiry for <strong>{formData.equipment}</strong>. We will call you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="inline-flex items-center text-xs font-bold text-emerald-700 hover:underline"
                >
                  Submit another requirement
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Anti-spam honeypot (invisible to humans) */}
                <input
                  type="text"
                  name="botField"
                  value={formData.botField}
                  onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                      Your Name / Company *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar / Infosys"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                      Phone Number (WhatsApp) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 XXXXX XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                      Equipment Category *
                    </label>
                    <select
                      value={formData.equipment}
                      onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                    >
                      <option value="Commercial Printer / Copier">Commercial Heavy-Duty Printer / Copier</option>
                      <option value="Laser Projector (4000 Lumens)">Laser Projector (Epson / Acer)</option>
                      <option value="Projector Screen (6x4 or 8x6 ft)">Projector Screen (Tripod / Motorized)</option>
                      <option value="PA Sound System + Cordless Mics">JBL PA Sound System + Cordless Mics</option>
                      <option value="Multiple Items Bundle">Full Event AV Package (Projector + Sound + Printer)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Rental Duration *
                  </label>
                  <select
                    value={formData.duration}
                    onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  >
                    <option value="1 Day Event">1 Day (Same-Day Setup & Retrieval)</option>
                    <option value="2 to 6 Days">2 to 6 Days (Short-Term Project)</option>
                    <option value="1 to 3 Weeks">1 to 3 Weeks (Weekly Discount Tier)</option>
                    <option value="1 Month Lease">1 Month (Corporate Monthly Lease)</option>
                    <option value="3+ Months Long Term">3+ Months (Long-Term Corporate Fleet)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                    Delivery Location &amp; Special Requirements
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Enter your delivery location in Bangalore and any specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm text-slate-900 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-base shadow-md transition-colors"
                >
                  <Send className="w-4 h-4 text-emerald-400" />
                  <span>Send Requirement for Instant Callback</span>
                </button>

                <p className="text-xs text-center text-slate-500 pt-1">
                  🔒 We respect your privacy. Zero spam. We only use your number to confirm equipment rental quotes.
                </p>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  )
}
