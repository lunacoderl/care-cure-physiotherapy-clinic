# UI Structure and Routing

## Routes
| Path | Description | Key Components |
|---|---|---|
| `/` | Main Clinic Landing Page | Hero, TrustStrip, BodyMapNavigator, About, ServicesGrid, RecoveryPath, Reviews, Gallery, FAQ, BookingForm, MapFacade, FinalCTA |
| `/services/[slug]` | Dedicated Service Detail Pages | Breadcrumbs, ServiceHero, WhoItIsFor, Causes, TreatmentApproach, RecoveryJourney, SessionDetails, DoctorCredibility, ReviewsSnippet, ServiceFaq, RelatedServices, MobileStickyBar |
| `/privacy-policy` | DPDP Act 2023 Compliant Privacy Policy | ContentLayout, LegalSections, GrievanceOfficer details |
| `/terms-and-conditions` | Medical Terms of Service | Medical Disclaimer, Appointments & Cancellations, Jurisdiction |
| `/cookie-policy` | Cookie Usage & Consent Management | CookieTable, ConsentToggleTrigger |
| `/not-found` (404) | Custom 404 Not Found Page | Animated walking SVG, quick navigation cards, WhatsApp instant help |

## Color Palette Tokens
- `primary-teal`: `#0E7C73` (Deep teal for headings, contrast elements, primary brand)
- `primary-teal-light`: `#0F9D8F` (Vibrant teal for buttons, focus rings, highlights)
- `coral-accent`: `#FF6B5B` (Warm coral for emergency/urgent CTAs, badges, energetic accents)
- `sunny-yellow`: `#FFC94D` (Gold/yellow for 5-star badges, trust indicators, ratings)
- `sky-blue`: `#4DB8FF` (Refreshing medical sky blue for chips, cards, decorative accents)
- `bg-mint-cream`: `#F7FBFA` (Soft soothing background)
- `text-slate-dark`: `#0F2A2A` (High-contrast accessible text)
- `whatsapp-green`: `#25D366` (Universal WhatsApp action color)

## Core Interactive Features
1. **Interactive Body Map Navigator**: Visual anatomical interactive selector allowing patients to click Neck, Shoulder, Lower Back, Hip, Knee, or Ankle/Foot to instantly jump to matching care.
2. **5-Stage Recovery Path**: Interactive step-by-step progress visualizer explaining the clinical journey from assessment to full mobility.
3. **Real-Time Clinic Status**: Live badge dynamically computed against clinic hours (Asia/Kolkata) with "Open now · Closes 9 pm" or "Opens 10:30 am tomorrow".
4. **Instant WhatsApp Consultation Bridge**: Generates one-tap pre-filled messages specifying patient condition and booking details.
5. **Floating Patient Action Rail**: Desktop slide-out tabs & mobile thumb-friendly quick triggers (Call, WhatsApp, Appointment, Top).
