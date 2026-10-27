"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { getClinicStatus, ClinicStatus } from "@/lib/hours";
import {
  MessageCircle,
  Phone,
  Star,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Activity,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function Hero() {
  const [status, setStatus] = useState<ClinicStatus>({
    isOpen: true,
    badgeText: "Open Now",
    subText: "Closes at 9:00 PM",
  });

  useEffect(() => {
    setStatus(getClinicStatus());
  }, []);

  return (
    <section className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 bg-gradient-to-b from-[#F7FBFA] via-white to-[#F7FBFA] overflow-hidden">
      {/* Accessible semantic heading for SEO (hidden visually to prevent overlapping with banner typography) */}
      <h1 className="sr-only">
        Care And Cure Physiotherapy And Sports Injury Clinic — Visakhapatnam, Malkapuram
      </h1>

      {/* =========================================================================
          DESKTOP & TABLET HERO BANNER (Fullscreen edge-to-edge, Zero Overlapping)
          Aspect ratio 1983 x 793 (~2.5 : 1)
         ========================================================================= */}
      <div className="hidden md:block w-full px-2 sm:px-4 lg:px-6">
        <div className="max-w-[1920px] mx-auto relative w-full aspect-[1983/793] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/80 bg-white group">
          <Image
            src="/gallery/hero-bg-desktop.png"
            alt="Care And Cure Physiotherapy And Sports Injury Clinic - Dr. K. Hareesh Patnaik & Dr. K. Reshma Harish"
            fill
            priority
            sizes="100vw"
            className="object-contain lg:object-cover w-full h-full transition-transform duration-500 group-hover:scale-[1.005]"
          />
        </div>
      </div>

      {/* =========================================================================
          MOBILE HERO BANNER (Full-width Vertical Aspect, Zero Overlapping)
          Aspect ratio 941 x 1255 (~3 : 4)
         ========================================================================= */}
      <div className="block md:hidden px-3 pt-1">
        <div className="relative w-full aspect-[941/1255] rounded-2xl overflow-hidden shadow-xl border border-gray-200/80 bg-white">
          <Image
            src="/gallery/hero-bg-mobile.png"
            alt="Care And Cure Physiotherapy And Sports Injury Clinic - Mobile Overview"
            fill
            priority
            sizes="100vw"
            className="object-contain w-full h-full"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 space-y-6 mt-4 sm:mt-6">

        {/* =========================================================================
            INTERACTIVE CONVERSION & ACTION BAR (Positioned BELOW the banner)
            Zero overlapping with the doctor faces or banner text!
           ========================================================================= */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-100 shadow-lg space-y-4">
          {/* Top Status & Reassurance Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-gray-100 text-xs sm:text-sm">
            {/* Live Open Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                }`}
              />
              <span>{status.badgeText}</span>
              <span className="text-gray-400">·</span>
              <span className="font-medium text-gray-600">{status.subText}</span>
              <span className="text-gray-400">·</span>
              <span className="text-gray-500 font-normal">Evening: 4:00 PM – 9:00 PM</span>
            </div>

            {/* Google Reviews Chip */}
            <a
              href="#reviews"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold bg-[#FFC94D]/20 text-[#735100] border border-[#FFC94D]/40 hover:bg-[#FFC94D]/30 transition-colors"
            >
              <div className="flex text-[#FFC94D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span>5.0 (192 Verified Reviews)</span>
            </a>

            {/* Landmark Tag */}
            <div className="hidden lg:flex items-center gap-1.5 text-xs text-gray-600 font-medium">
              <MapPin className="w-4 h-4 text-[#0E7C73] shrink-0" />
              <span>Opp. HPCL Main Gate, Malkapuram, Visakhapatnam</span>
            </div>
          </div>

          {/* Main Action Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1">
            {/* WhatsApp Booking (Primary) */}
            <a
              href={getWhatsAppLink("Hello Dr. Hareesh & Dr. Reshma, I would like to book a physiotherapy consultation at Care & Cure.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md shadow-[#25D366]/25 hover:shadow-lg transition-all text-sm group"
            >
              <MessageCircle className="w-5 h-5 fill-white text-transparent shrink-0" />
              <span>Book on WhatsApp</span>
            </a>

            {/* Call Dr. Hareesh Patnaik */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-gray-800 bg-[#F7FBFA] hover:bg-gray-100 border border-gray-200 transition-colors text-xs sm:text-sm"
              title="Call Dr. K. Hareesh Patnaik"
            >
              <Phone className="w-4 h-4 text-[#0E7C73] shrink-0" />
              <span>Call Dr. Hareesh (8790972042)</span>
            </a>

            {/* Call Dr. Reshma Harish */}
            <a
              href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-gray-800 bg-[#F7FBFA] hover:bg-gray-100 border border-gray-200 transition-colors text-xs sm:text-sm"
              title="Call Dr. K. Reshma Harish"
            >
              <Phone className="w-4 h-4 text-[#0E7C73] shrink-0" />
              <span>Call Dr. Reshma (9885949671)</span>
            </a>

            {/* Interactive Body Map Jump Link */}
            <Link
              href="#body-map"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-[#0E7C73] bg-[#0E7C73]/10 hover:bg-[#0E7C73]/20 border border-[#0E7C73]/20 transition-colors text-xs sm:text-sm group"
            >
              <Activity className="w-4 h-4 text-[#0E7C73] shrink-0" />
              <span>Where hurts? Try Body Map</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Quick Highlight Features */}
          <div className="pt-3 border-t border-gray-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-gray-600">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7C73] shrink-0" />
              <span>Regd. No. APF 0318 &amp; 0619</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7C73] shrink-0" />
              <span>In-Home Visits in Vizag</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7C73] shrink-0" />
              <span>Hands-On Manual Therapy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7C73] shrink-0" />
              <span>Opposite HPCL Main Gate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
