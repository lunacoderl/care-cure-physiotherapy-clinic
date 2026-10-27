# System Architecture

## Overview
Care And Cure Physiotherapy And Sports Injury Clinic web application is architected as an ultra-fast, statically-generated (SSG) Next.js App Router application with zero backend runtime dependencies. Lead capture triggers pre-formatted WhatsApp consultations and instant tap-to-call actions.

## Core Directories
```
care-and-cure-physiotherapy/
├── PROJECT_MEMORY/              # Persistent engineering memory
├── app/                         # Next.js App Router
│   ├── layout.tsx               # Root layout (Metadata, Google fonts, Navbar, Footer, FloatingRail, CookieBanner)
│   ├── page.tsx                 # Home page (Hero, BodyMap, About, Services, RecoveryPath, Reviews, Gallery, FAQ, Form, Map, CTA)
│   ├── loading.tsx              # Root loading skeleton
│   ├── not-found.tsx            # Custom 404 with walking figure animation
│   ├── sitemap.ts               # Dynamic XML sitemap generator
│   ├── robots.ts                # Robots.txt configuration
│   ├── manifest.ts              # Web App manifest (PWA ready)
│   ├── services/
│   │   └── [slug]/
│   │       ├── page.tsx         # Comprehensive service detail page
│   │       └── loading.tsx      # Service loading skeleton
│   ├── privacy-policy/
│   │   └── page.tsx             # DPDP Act 2023 compliant privacy policy
│   ├── terms-and-conditions/
│   │   └── page.tsx             # Medical disclaimer & terms
│   └── cookie-policy/
│       └── page.tsx             # Transparent cookie policy with preferences control
├── components/
│   ├── layout/                  # Navbar, MegaMenu, MobileDrawer, Footer, FloatingRail, Breadcrumbs
│   ├── home/                    # Hero, BodyMapNavigator, TrustStrip, AboutSection, ServicesGrid, RecoveryPath, ReviewsCarousel, GalleryGrid, FaqAccordion, BookingForm, MapFacade, FinalCta
│   ├── service/                 # ServiceHero, RecoveryJourney, ConditionChecklist, TreatmentMethods, ServiceFaq
│   ├── ui/                      # Accordion, Dialog/Lightbox, Skeleton, CookieBanner, Badge, Button
│   └── seo/                     # JsonLd structured data components
├── content/
│   ├── site.ts                  # Single source of truth (Phone, Address, Hours, Doctor credentials, Geo)
│   ├── services.ts              # Detailed definitions for 6 core therapy specialties
│   ├── testimonials.ts          # Authentic Google reviews from listing
│   └── faqs.ts                  # Comprehensive clinic & treatment FAQs
├── lib/
│   ├── whatsapp.ts              # WhatsApp prefill link generator with message sanitation
│   ├── hours.ts                 # Timezone-aware (Asia/Kolkata) live opening status calculator
│   └── seo.ts                   # Metadata helpers & OpenGraph builders
└── public/                      # Static assets, icons, SVG graphics
```

## Data Flow
- Content is centralized in `content/*.ts`.
- Every phone number, WhatsApp link, address, geo-coordinate, and hour is read directly from `content/site.ts`.
- Booking form does client-side validation and builds a WhatsApp URL with encoded message fields: name, phone, condition/service, preferred date/time, and symptoms summary.
- The user clicks "Send on WhatsApp", transferring the patient inquiry seamlessly to the clinic without requiring database or server overhead.
