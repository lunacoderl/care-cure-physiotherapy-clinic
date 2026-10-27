import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateClinicSchema } from "@/lib/seo";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { BodyMapNavigator } from "@/components/home/BodyMapNavigator";
import { AboutSection } from "@/components/home/AboutSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { RecoveryPath } from "@/components/home/RecoveryPath";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { GalleryGrid } from "@/components/home/GalleryGrid";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { BookingForm } from "@/components/home/BookingForm";
import { MapFacade } from "@/components/home/MapFacade";
import { FinalCta } from "@/components/home/FinalCta";

export const metadata: Metadata = {
  title: "Care & Cure Physiotherapy & Sports Injury Clinic | Malkapuram, Visakhapatnam",
  description:
    "Visakhapatnam's 5.0-star physiotherapy clinic led by Dr. Harish Patnaik. Specialized in stroke paralysis rehab, sports injuries, knee & meniscus care, back pain, and home visits in Malkapuram.",
  keywords: [
    "physiotherapy in Malkapuram",
    "physiotherapist near Ramakrishnapuram",
    "best physiotherapy in Visakhapatnam",
    "physiotherapy Vizag",
    "stroke rehabilitation Visakhapatnam",
    "knee pain physiotherapy Visakhapatnam",
    "sports injury physiotherapy Visakhapatnam",
    "home physiotherapy Visakhapatnam",
    "back pain treatment Visakhapatnam",
    "Dr Harish Patnaik physiotherapist",
  ],
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    title: "Care & Cure Physiotherapy & Sports Injury Clinic | Visakhapatnam",
    description:
      "Move freely again. Specialized stroke rehabilitation, sports injuries, knee & back care in Malkapuram, Vizag by Dr. Harish Patnaik.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateClinicSchema()} />
      <main className="min-h-screen">
        <Hero />
        <TrustStrip />
        <BodyMapNavigator />
        <AboutSection />
        <ServicesGrid />
        <RecoveryPath />
        <ReviewsSection />
        <GalleryGrid />
        <FaqAccordion />
        <BookingForm />
        <MapFacade />
        <FinalCta />
      </main>
    </>
  );
}
