import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowLeft, Clock, ShieldCheck } from 'lucide-react'

export default function Dashboard() {
  const [token, setToken] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setToken(localStorage.getItem('token'))
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-4 py-12 w-full space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-700 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Corporate Rental Dashboard</h1>
              <p className="text-sm text-slate-500">Track active leases, delivery status, and invoices</p>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
            <Clock className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="text-base font-bold text-slate-700">No active leases found</h3>
            <p className="text-sm text-slate-500 max-w-md mx-auto">
              You do not have any active rentals logged under this session. Use our instant quote calculator to book equipment.
            </p>
            <div className="pt-2">
              <Link
                href="/#catalog"
                className="inline-flex items-center justify-center py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors shadow-sm"
              >
                Browse Equipment Catalog
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
