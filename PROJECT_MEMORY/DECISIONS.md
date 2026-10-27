# Engineering & Architectural Decisions

## Decision 1: No AI Image Generation (Per User Directive)
- **Context:** The user explicitly instructed: *"i will provide images later so dont generate ai images!!!"*
- **Decision:** Absolutely zero AI image generation calls (`generate_image`).
- **Implementation:**
  - Build clean, high-precision SVG medical illustrations for services, body anatomy, and icons.
  - Implement structured visual card placeholders with precise aspect ratios, subtle gradients, and clean icon overlays.
  - When real clinic photos are provided by the client, they can be dropped directly into the `/public/images/` directory without any code refactoring.

## Decision 2: Static Site Generation (SSG) with Client-Side WhatsApp Lead Routing
- **Context:** Local clinic websites need extreme speed, maximum uptime, zero database hosting maintenance costs, and 100% Core Web Vitals performance.
- **Decision:** Build entirely with Next.js SSG. All booking requests serialize into WhatsApp web/app deep links (`https://wa.me/918790972042?text=...`).
- **Rationale:** WhatsApp is the dominant communication channel in Visakhapatnam/Andhra Pradesh for instant patient-doctor appointments. It eliminates server vulnerabilities, database maintenance, and spam email delivery failures.

## Decision 3: Single Source of Truth (`content/site.ts`)
- **Context:** Clinic phone numbers, hours, registration numbers, or addresses may need updates without touching code components.
- **Decision:** Centralize all business details, phone numbers, addresses, doctor bio, coordinates, and timings in `content/site.ts`.

## Decision 4: Timezone Calculation (`Asia/Kolkata`)
- **Context:** International or off-timezone visitors might see inaccurate opening times if using client device time without timezone pinning.
- **Decision:** Implement `lib/hours.ts` using `Intl.DateTimeFormat` with `timeZone: 'Asia/Kolkata'` to ensure clinic open/closed statuses accurately reflect Visakhapatnam local time.
