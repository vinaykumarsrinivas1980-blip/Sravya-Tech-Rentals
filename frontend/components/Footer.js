import React from 'react'
import { ShieldCheck, Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import { COMPANY_INFO, BANGALORE_SERVICE_AREAS } from '../data/equipment'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-900 safe-bottom-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight">Sravya Tech Rentals</span>
                <span className="block text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                  Sravya Suppliers Bangalore
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Bangalore&apos;s trusted commercial IT and audiovisual hardware rental provider. Same-day delivery, verified branded equipment, and 24/7 technical support for corporate offices, events, and conferences.
            </p>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-500">
              <span>GST Registered</span>
              <span>•</span>
              <span>100% Verified Hardware</span>
              <span>•</span>
              <span>On-Call Support</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Equipment Catalog</a></li>
              <li><a href="#quote" className="hover:text-white transition-colors">Instant Quote Estimator</a></li>
              <li><a href="#why" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Rental FAQs</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Hub</a></li>
            </ul>
          </div>

          {/* Col 3: Equipment Categories */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Equipment on Rent</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#catalog" className="hover:text-white transition-colors">A3/A4 Network Copiers</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Heavy-Duty Laser Printers</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">4000 Lumens Laser Projectors</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Motorized &amp; Tripod Screens</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">JBL 1000W PA Sound Systems</a></li>
              <li><a href="#catalog" className="hover:text-white transition-colors">Dual Cordless Microphones</a></li>
            </ul>
          </div>

          {/* Col 4: Contact & Hub */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider">Bangalore Hub</h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">{COMPANY_INFO.phoneFormatted}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
              </div>
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent("Hello Sravya Tech Rentals!")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {COMPANY_INFO.phoneFormatted}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="pt-12 mt-12 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Sravya Tech Rentals (Sravya Suppliers). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Bangalore, Karnataka, India</span>
            <span>•</span>
            <span>Same-Day IT &amp; AV Equipment Rentals</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
