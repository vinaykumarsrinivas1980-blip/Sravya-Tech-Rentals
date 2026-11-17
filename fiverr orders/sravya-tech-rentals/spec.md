# Technical Design Specification: Sravya Tech Rentals (Audited & Finalized)

## 1. Executive Summary & Client Objectives
- **Client & Business:** Sravya Tech Rentals (Sravya Suppliers) — Bangalore's premier commercial IT & AV equipment rental provider.
- **Primary Offerings:** Commercial printers/copiers, HD & 4K laser projectors, portable & motorized projector screens, PA sound systems & wireless mics.
- **Target Audience:** Corporate offices, event organizers, conference halls, educational institutions, co-working spaces, and small businesses in Bangalore (Konanakunte, Jayanagar, Koramangala, Whitefield, Electronic City, Indiranagar, HSR Layout).
- **Primary Conversion Goals:**
  1. **Direct WhatsApp Quotation Generation:** Direct link to `+919986410966` with pre-filled equipment specs, duration, and estimated pricing.
  2. **Interactive Rental Quote Calculator:** Instant transparent estimate for Daily, Weekly, and Monthly corporate rentals.
  3. **Lead Capture Form:** Client-side validated form powered by Formspree / Web3Forms with anti-spam honeypot and instant email notification.
  4. **Operating Model:** Warehouse & Hub hours Mon–Sat 09:00–20:00 (Konanakunte); On-call 24/7 event technician support.

---

## 2. Technical Stack & Architecture
- **Framework & Runtime:** Next.js 14+ (App Router, Static Export ready).
- **Styling & Design Tokens:** Tailwind CSS v3 with CSS custom properties.
- **UI Primitive Components:** `shadcn/ui` (Dialog, Tabs, Accordion, Card, Badge, Button, Input, Textarea, Select, Sheet, Label).
- **Motion & Interaction Stack (Optimized & Non-Colliding):**
  - Primary: Tailwind CSS hardware-accelerated transitions & keyframes.
  - Page & View Transitions: `transitions.dev` CSS view-transition patterns.
  - Micro-Interactions: Lightweight React animated components (from `React Bits`).
- **Icons:** `lucide-react`.
- **Form Handling:** React Hook Form + Zod validation with client-side Formspree / Web3Forms endpoint (zero secret exposure, 100% static export compatible).
- **Deployment Target:** Cloudflare Pages / Workers or Vercel.

---

## 3. Information Architecture & Navigation
- **Architecture:** Single-page application with smooth section anchor navigation.
- **Sticky Header:** Persistent navigation with logo, direct call button, and links to sections with `scroll-mt-24` offset:
  - `#home` — Hero with trust metrics, verified badges, and quick CTA buttons.
  - `#catalog` — Tabbed equipment catalog (All, Printers, Projectors, Audio, Screens).
  - `#quote` — Interactive quote calculator with instant WhatsApp order generation.
  - `#why` — Trust badges: Same-day Bangalore delivery, on-site technician, zero maintenance cost, backup units on standby.
  - `#faq` — Accordion answering rental duration, deposit, delivery, and invoice questions.
  - `#contact` — Contact details, Google Map embed, and inquiry form.
- **Mobile Sticky Bar:** Bottom bar on `< 640px` with `pb-[env(safe-area-inset-bottom)]`, providing direct Call and WhatsApp buttons.

---

## 4. UI/UX Design System (`Impeccable` Standards, WCAG AA Compliant)
- **Contrast & Accessibility (All text >= 4.5:1 ratio):**
  - `Primary / Slate 950`: `#020617` (Headers, high-contrast dark elements)
  - `Body Text / Slate 700`: `#334155` (6.8:1 contrast on white)
  - `Brand Accent / Emerald 700`: `#047857` (4.6:1 contrast for interactive text/links)
  - `Button Accent / Emerald 600`: `#059669` (with white text: 4.5:1)
  - `Secondary Accent / Sky 700`: `#0369a1` (corporate credibility badges)
  - `Surface Backgrounds`: `#ffffff` (cards) and `#f8fafc` (slate-50 section backgrounds)
  - `Borders`: `#e2e8f0` (slate-200)
- **Typography:**
  - Font: Clean system sans-serif font stack (`system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`).
  - Strict rhythm: 4px baseline, generous line heights (`leading-relaxed` for body text).

---

## 5. Equipment Inventory Data Model & Pricing Formulas

### A. TypeScript Schema
```typescript
export interface EquipmentItem {
  id: string;
  name: string;
  category: 'printers' | 'projectors' | 'audio' | 'screens';
  brand: string;
  tagline: string;
  imagePath: string; // Resolves to /assets/brand-photos/<name>.webp
  specs: string[];
  rates: {
    daily: number;    // INR per day
    weekly: number;   // INR per week (~35% discount over daily)
    monthly: number;  // INR per month (~60% discount over daily)
  };
  deposit: number;    // Refundable security deposit
  badge?: string;     // e.g. "Most Popular", "Heavy Duty", "Conference Ready"
}
```

### B. Catalog Matrix (Static Ground Truth)
1. **Canon imageRUNNER Advance Copier**
   - Category: `printers`, Brand: `Canon`
   - Image: `/assets/brand-photos/canon-printer-1.webp`
   - Specs: ["A3/A4 Heavy Duty", "45 PPM B&W / Color", "Duplex Auto-Document Feeder", "Network LAN & Wi-Fi"]
   - Rates: Daily ₹1,200 | Weekly ₹5,500 | Monthly ₹14,000 (Deposit: ₹5,000)
2. **Epson WorkForce Pro High-Speed Inkjet**
   - Category: `printers`, Brand: `Epson`
   - Image: `/assets/brand-photos/epson-printer-1.webp`
   - Specs: ["EcoTank PrecisionCore", "25 PPM Fast Print", "Low Cost Per Page", "Compact Office Size"]
   - Rates: Daily ₹700 | Weekly ₹3,200 | Monthly ₹7,500 (Deposit: ₹3,000)
3. **Brother Monochrome Laser Workhorse**
   - Category: `printers`, Brand: `Brother`
   - Image: `/assets/brand-photos/brother-printer-1.webp`
   - Specs: ["High-Yield Laser Toner", "34 PPM Fast Duplex", "High Duty Cycle", "USB + Ethernet"]
   - Rates: Daily ₹600 | Weekly ₹2,800 | Monthly ₹6,500 (Deposit: ₹2,500)
4. **Xerox VersaLink High-Volume MFP**
   - Category: `printers`, Brand: `Xerox`
   - Image: `/assets/brand-photos/xerox-printer-1.webp`
   - Specs: ["Color Laser MFP", "Large Touchscreen", "Security Printing", "Enterprise Fleet"]
   - Rates: Daily ₹1,400 | Weekly ₹6,500 | Monthly ₹16,000 (Deposit: ₹6,000)
5. **Epson 3LCD Laser Projector (4000+ Lumens)**
   - Category: `projectors`, Brand: `Epson`
   - Image: `/assets/brand-photos/epson-projector-1.webp`
   - Specs: ["4,000 Lumens Brightness", "Full HD 1080p", "HDMI / Wireless Casting", "Daylight Visible"]
   - Rates: Daily ₹1,500 | Weekly ₹6,000 | Monthly ₹15,000 (Deposit: ₹5,000)
6. **Acer / BenQ High-Contrast DLP Projector**
   - Category: `projectors`, Brand: `Acer`
   - Image: `/assets/brand-photos/acer-projector-1.webp`
   - Specs: ["3,600 Lumens DLP", "Crisp Text & Slides", "Compact Travel Bag", "HDMI / VGA"]
   - Rates: Daily ₹1,000 | Weekly ₹4,200 | Monthly ₹11,000 (Deposit: ₹4,000)
7. **JBL Professional Powered PA Sound System**
   - Category: `audio`, Brand: `JBL`
   - Image: `/assets/brand-photos/jbl-speaker-1.webp`
   - Specs: ["2x 1000W Powered Speakers", "2x Cordless VHF Microphones", "Heavy Duty Stands", "Bluetooth + Aux Mixer"]
   - Rates: Daily ₹2,000 | Weekly ₹8,500 | Monthly ₹22,000 (Deposit: ₹5,000)
8. **Sony High-Power Audio System**
   - Category: `audio`, Brand: `Sony`
   - Image: `/assets/brand-photos/sony-speaker-1.webp`
   - Specs: ["Deep Bass Sound", "Wireless Mic Input", "Ideal for Parties & Indoor Events", "Bluetooth 5.0"]
   - Rates: Daily ₹1,200 | Weekly ₹5,000 | Monthly ₹13,000 (Deposit: ₹3,000)
9. **Tripod & Motorized Projector Screens**
   - Category: `screens`, Brand: `Universal`
   - Image: `/assets/brand-photos/epson-projector-2.webp`
   - Specs: ["High-Gain Matte White Screen", "Sizes: 6x4 ft, 8x6 ft", "Sturdy Aluminum Tripod", "Wrinkle-Free Fabric"]
   - Rates: Daily ₹500 | Weekly ₹2,000 | Monthly ₹4,500 (Deposit: ₹1,500)

### C. Quotation Calculator Engine
- User selects item, quantity (1 to 5), and rental duration (Days: 1–30+).
- Formula:
  - If days < 7: `total = dailyRate * days`
  - If days >= 7 and days < 30: `weeks = floor(days / 7); rem = days % 7; total = (weeks * weeklyRate) + (rem * (weeklyRate / 7))`
  - If days >= 30: `months = floor(days / 30); rem = days % 30; total = (months * monthlyRate) + (rem * (monthlyRate / 30))`
- WhatsApp link generator:
  `https://wa.me/919986410966?text=` + encoded string:
  *"Hello Sravya Tech Rentals, I would like to get a quote for [Item Name] x [Quantity] for [Duration] days. Estimated quote: ₹[Total]. Delivery location: Bangalore."*

---

## 6. Complete SEO, Metadata & Structured Data Specifications
- **Title Tag:** `Sravya Tech Rentals – IT & AV Equipment Rentals Bangalore | Printers, Projectors, PA Systems`
- **Meta Description:** `Rent commercial printers, laser projectors, screens, and PA sound systems across Bangalore. Same-day delivery to Whitefield, Koramangala, Indiranagar, Electronic City & Konanakunte.`
- **Canonical URL:** `https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/`
- **Open Graph & Twitter Cards:**
  - `og:type`: `website`
  - `og:title`: `Sravya Tech Rentals – IT & AV Equipment Rentals in Bangalore`
  - `og:description`: `Commercial printers, projectors, and PA systems on rent across Bangalore with same-day delivery.`
  - `og:image`: `/assets/brand-photos/canon-printer-1.webp`
  - `twitter:card`: `summary_large_image`
- **Complete JSON-LD Graph:**
```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/#business",
      "name": "Sravya Tech Rentals",
      "alternateName": "Sravya Suppliers Bangalore",
      "url": "https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/",
      "logo": "https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/assets/brands/canon.svg",
      "image": "https://sravya-tech-rentals.vinaykumarsrinivas1980.workers.dev/assets/brand-photos/epson-printer-1.webp",
      "telephone": "+919986410966",
      "email": "Sravyasuppliers@gmail.com",
      "priceRange": "₹₹",
      "currenciesAccepted": "INR",
      "paymentAccepted": "Cash, UPI, Net Banking, Credit Card",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Konanakunte",
        "addressLocality": "Bangalore",
        "postalCode": "560062",
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.8848,
        "longitude": 77.5683
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "09:00",
          "closes": "20:00"
        }
      ],
      "areaServed": [
        "Bangalore", "Konanakunte", "Jayanagar", "JP Nagar", "Koramangala",
        "Whitefield", "Electronic City", "Indiranagar", "HSR Layout", "BTM Layout"
      ]
    }
  ]
}
```

---

## 7. Acceptance Criteria (Definition of Done)
- [ ] `frontend/` runs modern Next.js 14+ App Router with Tailwind CSS and `shadcn/ui`.
- [ ] All 9 equipment items statically defined with verified `.webp` photos and brand SVGs.
- [ ] Interactive quote estimator calculates transparent rates with one-click WhatsApp pre-fill.
- [ ] Lead capture form includes Zod validation, honeypot spam protection, and success modal.
- [ ] Mobile responsive layout verified with safe-area insets on sticky WhatsApp contact bar.
- [ ] LocalBusiness JSON-LD schema embedded and valid.
- [ ] Production build (`npm run build`) finishes with exit code 0 and zero broken links.
