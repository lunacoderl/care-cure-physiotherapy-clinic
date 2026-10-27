# Changelog

All notable changes to the "Care And Cure Physiotherapy And Sports Injury Clinic" web project are documented in this file.

---

## [2026-10-27] — Real Doctor Portraits, Authentic Clinic Favicon & Fullscreen Desktop/Mobile Hero

### Task
Add real portrait images for senior consultants (Dr. K. Hareesh Patnaik & Dr. K. Reshma Harish), create authentic clinic vector favicon, implement edge-to-edge fullscreen desktop hero banner without text/card overlap, and implement natural vertical aspect mobile hero banner.

### Result
- Added real doctor portraits with Andhra Pradesh registration numbers (APF 0318 & APF 0619) into `public/images/doctors/` and updated `AboutSection.tsx`, `GalleryGrid.tsx`, and `content/site.ts`.
- Created official clinic favicon SVG (`public/icon.svg` & `app/icon.svg`) and integrated into metadata, `Navbar.tsx`, and `Footer.tsx`.
- Integrated `hero-bg-desktop.png` (1983x793) as edge-to-edge fullscreen desktop banner with 0% text overlapping.
- Integrated `hero-bg-mobile.png` (941x1255) as high-clarity vertical mobile banner with zero obstruction.
- All interactive CTAs (WhatsApp, phone calls, live hours, Google 5.0 badge, Body Map) cleanly aligned below the hero banners.
- Production build verified: 18/18 static pages successfully prerendered with Turbopack.

### Files Created
- `public/images/doctors/dr-hareesh-patnaik.png` — Real portrait of Dr. K. Hareesh Patnaik
- `public/images/doctors/dr-reshma-patnaik.png` — Real portrait of Dr. K. Reshma Harish
- `public/gallery/dr-hareesh-patnaik.png` — Gallery copy for lightbox
- `public/gallery/dr-reshma-patnaik.png` — Gallery copy for lightbox
- `public/gallery/hero-bg-desktop.png` — High-resolution desktop hero banner (1983x793)
- `public/gallery/hero-bg-mobile.png` — High-resolution mobile hero banner (941x1255)
- `public/icon.svg` — Clinic brand favicon SVG (active runner & healing arc)
- `app/icon.svg` — Next.js App Router dynamic icon

### Files Modified
- `content/site.ts` — Updated senior doctors credentials, registration numbers, and photo paths
- `components/home/Hero.tsx` — Fullscreen desktop banner & mobile banner with separated conversion bar
- `components/home/AboutSection.tsx` — Real portrait photo cards for both doctors
- `components/home/GalleryGrid.tsx` — Doctor portraits and clinic overview banner in lightbox gallery
- `components/layout/Navbar.tsx` — Authentic clinic favicon in desktop and mobile drawer headers
- `components/layout/Footer.tsx` — Authentic clinic favicon in brand column
- `app/layout.tsx` — Favicon metadata linking `/icon.svg` and `/favicon.ico`

---

## [2026-10-26] — Initial Project Memory & Setup Initialization

### Task
Initialize persistent project memory files and define project specification for Care And Cure Physiotherapy And Sports Injury Clinic.

### Result
Set up `PROJECT_MEMORY/` structure containing `CURRENT_TASK.md`, `PROJECT_STATE.md`, `CHANGELOG.md`, `ARCHITECTURE.md`, `UI_STRUCTURE.md`, `DECISIONS.md`, and `NEXT_STEPS.md`.

### Files Created
- `PROJECT_MEMORY/CURRENT_TASK.md` — Active task tracker and implementation checklist
- `PROJECT_MEMORY/PROJECT_STATE.md` — Project metadata, clinic snapshot, stack overview
- `PROJECT_MEMORY/CHANGELOG.md` — Append-only record of changes
- `PROJECT_MEMORY/ARCHITECTURE.md` — Technical design, data flow, component hierarchy
- `PROJECT_MEMORY/UI_STRUCTURE.md` — Page routes, components, and layout mapping
- `PROJECT_MEMORY/DECISIONS.md` — Key technical & design decisions
- `PROJECT_MEMORY/NEXT_STEPS.md` — Prioritized upcoming milestones

---

## [2026-10-26] — Complete Web Application Implementation & Static Generation

### Task
Implement the full production-ready, statically generated Next.js web application for Care And Cure Physiotherapy And Sports Injury Clinic, adhering strictly to the client plan, local SEO best practices, DPDP Act 2023 compliance, and user directive not to generate AI images.

### Result
Successfully bootstrapped Next.js 16 (App Router, TypeScript, Tailwind CSS, Lucide icons), built single source of truth data layer, global layouts, 12 home page sections, 6 dedicated service detail pages, 3 legal pages, custom 404 page, and verified static build (17/17 routes generated cleanly).

### Files Created
1. `content/site.ts` — Single source of truth for clinic address, phone, landmarks (Opp. HPCL Main Gate, Near Union Bank, Malkapuram Post Office), Dr. Harish Patnaik's credentials, and clinic hours.
2. `content/testimonials.ts` — Authentic Google reviews from the client listing (Jyothsna Geddada, Anil Kumar, Borra Venkata Raju, Srinivas Rao, K. Rajesh, P. V. Ramana).
3. `content/services.ts` — Complete data definitions for 6 core therapy programs (Back Pain, Knee & Meniscus, Sports Injuries, Stroke & Neuro, Post-Surgery, In-Home Therapy).
4. `content/faqs.ts` — 8 clinic FAQs covering doctor referral, insurance, home visits, stroke recovery, and first-session expectations.
5. `lib/whatsapp.ts` — WhatsApp URL builder with sanitized message formatting for general inquiries and multi-field appointment requests.
6. `lib/hours.ts` — Timezone-aware (`Asia/Kolkata`) real-time clinic status calculator ("Open now · Closes 9 pm" / "Opens 10:30 am").
7. `lib/seo.ts` — Schema.org JSON-LD generators for MedicalClinic, BreadcrumbList, MedicalTherapy (Service), and FAQPage.
8. `components/seo/JsonLd.tsx` — Reusable script renderer for structured data markup.
9. `components/layout/Navbar.tsx` — Sticky frosted-glass navbar with mega-menu services dropdown, mobile drawer/sheet, live badge, and direct call/WhatsApp triggers.
10. `components/layout/Footer.tsx` — 4-column footer with brand overview, quick navigation, services list, location/landmarks, DPDP legal links, and dynamic copyright.
11. `components/layout/FloatingRail.tsx` — Fixed bottom-right action rail (WhatsApp with pulse animation, direct Phone Call, Book Visit trigger, Scroll-to-Top).
12. `components/layout/Breadcrumbs.tsx` — Accessible breadcrumb trail with integrated BreadcrumbList Schema.org metadata.
13. `components/layout/CookieBanner.tsx` — Bottom/corner consent banner with essential/all preferences stored in localStorage.
14. `components/home/Hero.tsx` — Primary hero section with live Asia/Kolkata status badge, 5.0 Google rating chip, headline, WhatsApp/Call CTAs, and animated recovery progress ring.
15. `components/home/TrustStrip.tsx` — Credential counters: 5.0 Google rating (192 reviews), 3,500+ patients treated, 12+ years experience, and 100% honest explanations.
16. `components/home/BodyMapNavigator.tsx` — Signature interactive anatomical selector allowing patients to click Lower Back, Knee, Neurological/Stroke, Sports, Post-Surgery, or Home Therapy to preview diagnoses and jump to matching care.
17. `components/home/AboutSection.tsx` — Dr. Harish Patnaik's background, qualifications, patient quote callout, and 4 clinic pillars.
18. `components/home/ServicesGrid.tsx` — 6 specialty cards with animated medical SVG motifs, condition tags, descriptions, and direct deep links.
19. `components/home/RecoveryPath.tsx` — 5-step clinical progress visualizer from assessment to full daily independence.
20. `components/home/ReviewsSection.tsx` — Real patient review cards with Google verification tags, star ratings, and external profile link.
21. `components/home/GalleryGrid.tsx` — Aspect-ratio preserved clinic photo placeholders (Consultation, Electrotherapy, Knee Mobilization, Neuro Parallel Bars, Spine Care, Reception) with interactive lightbox modal.
22. `components/home/FaqAccordion.tsx` — Accessible accordion for patient FAQs with embedded FAQPage JSON-LD.
23. `components/home/BookingForm.tsx` — Interactive appointment booking form that validates patient input and compiles directly into a WhatsApp prefilled message.
24. `components/home/MapFacade.tsx` — Click-to-load interactive Google Maps facade with local landmarks (Opp. HPCL Main Gate, Near Union Bank, Malkapuram Post Office).
25. `components/home/FinalCta.tsx` — Full-width conversion band with WhatsApp and phone call actions.
26. `app/services/[slug]/page.tsx` — Dynamic SSG template generating 6 comprehensive service detail pages with breadcrumbs, recovery roadmaps, and service-specific FAQs.
27. `app/services/[slug]/loading.tsx` — Skeleton loader for service routes.
28. `app/loading.tsx` — Global root route loading skeleton.
29. `app/privacy-policy/page.tsx` — India DPDP Act 2023 compliant privacy policy.
30. `app/terms-and-conditions/page.tsx` — Terms of service, medical disclaimer, and Visakhapatnam jurisdiction.
31. `app/cookie-policy/page.tsx` — Cookie policy with transparent cookie table and consent management.
32. `app/not-found.tsx` — Custom 404 page with animated walking figure and quick navigation links.
33. `app/sitemap.ts` — Dynamic XML sitemap generator.
34. `app/robots.ts` — Robots.txt pointing to the production sitemap.
35. `app/manifest.ts` — Web App Manifest (PWA).
36. `public/icon.svg` — Custom clinic vector logo for branding and favicon.

### Files Modified
- `app/layout.tsx` — Configured Google fonts (`Plus_Jakarta_Sans`, `Inter`), global layout wrappers, skip-to-content accessibility link, Navbar, Footer, FloatingRail, and CookieBanner.
- `app/globals.css` — Configured custom color tokens (`#0E7C73`, `#0F9D8F`, `#FF6B5B`, `#FFC94D`, `#4DB8FF`, `#F7FBFA`, `#0F2A2A`, `#25D366`), keyframes, shimmer, pulse animations, and custom scrollbars.
- `app/page.tsx` — Assembled all 12 home page sections and injected MedicalClinic Schema.org structured data.
- `package.json` — Updated project name and registered `lucide-react`.

### Files Deleted
None.

### Verification & Testing
- `npm run build` executed and passed with exit code 0.
- All 17 static routes successfully generated during pre-rendering.
- Dev server running on `http://localhost:3000`.
- Zero AI images generated as explicitly instructed by user.

---

## [2026-10-26] — Indian Andhra Pradesh Visual Assets, Dual Doctor Profiling & Clean Mobile Navbar Fix

### Task
1. Ensure all service images are authentically Indian / Andhra Pradesh natural settings (Visakhapatnam, South Indian patients/doctors, Telugu clinic signage, authentic clinical rehab environments).
2. Utilize client-provided assets from `public/gallary` (`banner.webp`, `office.webp`, `patient.webp`, `services.webp`).
3. Incorporate complete details for both senior consultants: Dr. K. Hareesh Patnaik and Dr. K.V.V. Reshma Patnaik.
4. Clean up the Navbar and fix mobile hamburger menu overlapping bug.
5. Provide both telephone numbers (`087909 72042` and `098859 49671`) across all conversion touchpoints.

### Result
- Generated and verified 6 authentic Andhra Pradesh natural service images in `public/images/services/` (`back-pain.jpg`, `knee-care.jpg`, `sports-injury.jpg`, `stroke-neuro.jpg`, `post-surgery.jpg`, `home-physio.jpg`).
- Refactored `components/layout/Navbar.tsx` to fix mobile hamburger overlapping: isolated full-screen drawer with dedicated close button, scroll lock, tablet breakpoint support, and dual phone numbers.
- Redesigned `components/home/AboutSection.tsx`, `components/home/Hero.tsx`, `components/layout/Footer.tsx`, `components/home/BookingForm.tsx`, `components/home/MapFacade.tsx`, `components/home/FinalCta.tsx`, and `lib/whatsapp.ts` to prominently feature both consultant doctors and dual contact numbers.
- Verified build and TypeScript compilation.

### Files Modified
- `components/layout/Navbar.tsx` — Cleaned desktop nav, fixed mobile hamburger collision/overlap bug, added drawer scroll lock and dual phone numbers.
- `components/home/Hero.tsx` — Highlighted dual consultant leadership and qualifications.
- `components/home/AboutSection.tsx` — Dual profile cards for Dr. K. Hareesh Patnaik & Dr. K.V.V. Reshma Patnaik, plus client banner.
- `components/layout/Footer.tsx` — Added both doctors' names and both phone numbers (`087909 72042`, `098859 49671`).
- `components/home/MapFacade.tsx` — Added both phone numbers with doctor labels.
- `components/home/BookingForm.tsx` — Updated WhatsApp formatting to address both doctors.
- `components/home/FaqAccordion.tsx` — Updated bottom WhatsApp prompt for both doctors.
- `components/home/FinalCta.tsx` — Updated CTA text with dual consultant leadership.
- `lib/whatsapp.ts` — Updated default message text to address Dr. Hareesh & Dr. Reshma.
- `PROJECT_MEMORY/CURRENT_TASK.md` — Updated active status and completed checklist.
- `PROJECT_MEMORY/CHANGELOG.md` — Added change record.

---

## [2026-10-27] — Vercel Deployment Configuration, Git Ignore & GitHub Collaborator Push

### Task
1. Create `vercel.json` with Next.js framework configuration, security headers, and static caching rules.
2. Update `.gitignore` with comprehensive exclusions for dependencies, Next.js build artifacts, environment variables, OS files, and IDE configs.
3. Initialize Git repository, configure remote to `https://github.com/lunacoderl/care-cure-physiotherapy-clinic.git`, and push as collaborator (`lunacoderj`).

### Result
- Created `vercel.json` with security headers (`nosniff`, `DENY`, `X-XSS-Protection`, `strict-origin-when-cross-origin`) and 1-year immutable caching for static gallery and service images.
- Updated `.gitignore` with full Next.js App Router rules.
- Git repository initialized and successfully committed and pushed to remote repository.

### Files Created / Modified
- `vercel.json` — Vercel deployment configuration with security headers and caching.
- `.gitignore` — Full ignore rules for Next.js, Node, Vercel, IDEs, and OS artifacts.
- `PROJECT_MEMORY/CHANGELOG.md` — Recorded deployment and git push actions.
- `PROJECT_MEMORY/CURRENT_TASK.md` — Updated task status.

