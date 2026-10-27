"use client";

import React, { useState, useEffect } from "react";
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
  Activity,
  ArrowRight,
  HeartPulse,
  Sparkles,
  CheckCircle2,
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
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-b from-[#F7FBFA] via-[#F0F7F6] to-[#F7FBFA]">
      {/* Decorative Background Blobs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-[#0E7C73]/10 via-[#4DB8FF]/10 to-[#FFC94D]/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-48 right-0 w-80 h-80 bg-[#FF6B5B]/5 rounded-full blur-2xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging & CTAs (7 cols on lg) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge Strip */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              {/* Live Status Badge */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-colors ${
                  status.isOpen
                    ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                    : "bg-amber-50 text-amber-800 border-amber-200"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    status.isOpen ? "bg-emerald-500 animate-pulse" : "bg-amber-500"
                  }`}
                />
                <span>{status.badgeText}</span>
                <span className="text-gray-400">·</span>
                <span className="font-medium text-gray-600">{status.subText}</span>
              </div>

              {/* Google Reviews Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#FFC94D]/20 text-[#735100] border border-[#FFC94D]/40">
                <div className="flex text-[#FFC94D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span>5.0 (192 Google Reviews)</span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0F2A2A] tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans',sans-serif]">
              Move freely again.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7C73] via-[#0F9D8F] to-[#0E7C73]">
                Care that gets you
              </span>{" "}
              back to life.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Visakhapatnam’s trusted center for <strong>brain stroke & paralysis rehabilitation</strong>,{" "}
              <strong>sports injuries</strong>, <strong>knee & meniscus care</strong>, and <strong>chronic back pain relief</strong>.
              Led by <strong>Dr. K. Hareesh Patnaik</strong> (Sports Medicine &amp; Manual Therapy) and <strong>Dr. K.V.V. Reshma Patnaik</strong> (Cardio-Respiratory &amp; Orthopedic Specialist).
            </p>

            {/* Conversion CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/35 transform hover:-translate-y-0.5 transition-all text-base"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-[#0F2A2A] bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow transition-all text-base"
              >
                <Phone className="w-4 h-4 text-[#0E7C73]" />
                <span>Call 087909 72042</span>
              </a>

              <Link
                href="#body-map"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7C73] hover:underline px-2 py-1 mt-1 sm:mt-0"
              >
                Where does it hurt? Try Body Map →
              </Link>
            </div>

            {/* Trust Chips Row */}
            <div className="pt-4 border-t border-gray-200/60 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#0E7C73] shrink-0" />
                <span>Opp. HPCL Main Gate, Vizag</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#0E7C73] shrink-0" />
                <span>In-Home Visits Available</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-700 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-[#0E7C73] shrink-0" />
                <span>Zero Machine-Only Shortcuts</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Clinical Feature Showcase (5 cols on lg) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Doctor / Clinic Presentation Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xl border border-[#0E7C73]/15 relative overflow-hidden">
                {/* Header of Card */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0E7C73] to-[#0F9D8F] flex items-center justify-center text-white shadow-md shrink-0">
                      <HeartPulse className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-gray-900 font-['Plus_Jakarta_Sans',sans-serif]">
                        Senior Consultant Physiotherapists
                      </h3>
                      <p className="text-[11px] font-semibold text-[#0E7C73] line-clamp-1">
                        Dr. K. Hareesh Patnaik &amp; Dr. K.V.V. Reshma Patnaik
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#0E7C73]/10 text-[#0E7C73] shrink-0">
                    Dual Specialists
                  </span>
                </div>

                {/* Animated Recovery Ring Visual */}
                <div className="py-6 flex items-center justify-center">
                  <div className="relative w-44 h-44 flex items-center justify-center">
                    {/* SVG Progress Ring */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="#F0F7F6"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        stroke="#0E7C73"
                        strokeWidth="8"
                        strokeDasharray="264"
                        strokeDashoffset="35"
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute flex flex-col items-center text-center px-4">
                      <Activity className="w-6 h-6 text-[#0E7C73] mb-1 animate-pulse" />
                      <span className="text-2xl font-black text-[#0F2A2A]">5.0 ★</span>
                      <span className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                        Mobility Restored
                      </span>
                    </div>
                  </div>
                </div>

                {/* Floating Specialty Chips */}
                <div className="space-y-2.5 pt-2">
                  <Link
                    href="/services/stroke-and-neuro-rehabilitation"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F7FBFA] hover:bg-[#E8F4F2] border border-[#0E7C73]/10 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#0E7C73]" />
                      <span className="text-xs font-bold text-gray-800">
                        Stroke & Paralysis Recovery
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#0E7C73] group-hover:translate-x-0.5 transition-transform">
                      Learn more →
                    </span>
                  </Link>

                  <Link
                    href="/services/knee-pain-and-meniscus-care"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F7FBFA] hover:bg-[#E8F4F2] border border-[#0E7C73]/10 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#FF6B5B]" />
                      <span className="text-xs font-bold text-gray-800">
                        Knee Meniscus & TKR Care
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#0E7C73] group-hover:translate-x-0.5 transition-transform">
                      Learn more →
                    </span>
                  </Link>

                  <Link
                    href="/services/back-pain-physiotherapy"
                    className="flex items-center justify-between p-3 rounded-xl bg-[#F7FBFA] hover:bg-[#E8F4F2] border border-[#0E7C73]/10 transition-colors group"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#4DB8FF]" />
                      <span className="text-xs font-bold text-gray-800">
                        Lower Back & Sciatica Relief
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#0E7C73] group-hover:translate-x-0.5 transition-transform">
                      Learn more →
                    </span>
                  </Link>
                </div>

                {/* Bottom Callout */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-600">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#0E7C73]" /> Malkapuram, Vizag
                  </span>
                  <a
                    href="#booking"
                    className="font-bold text-[#0E7C73] hover:underline"
                  >
                    Request Consultation →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
