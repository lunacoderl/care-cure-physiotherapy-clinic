"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { servicesData } from "@/content/services";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  HeartPulse,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ShieldCheck,
  Star,
  ExternalLink,
} from "lucide-react";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#091D1B] text-white pt-16 pb-12 border-t border-teal-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0E7C73] to-[#0F9D8F] flex items-center justify-center text-white shadow-lg shadow-teal-900/50">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                  Care <span className="text-[#0F9D8F]">&</span> Cure
                </span>
                <p className="text-xs text-teal-200/70">Physiotherapy & Sports Injury</p>
              </div>
            </Link>

            <p className="text-sm text-gray-300 leading-relaxed">
              Compassionate, evidence-based physiotherapy guided by{" "}
              <strong className="text-white font-semibold">Dr. K. Hareesh Patnaik</strong> &amp;{" "}
              <strong className="text-white font-semibold">Dr. K.V.V. Reshma Patnaik</strong>.
              Specializing in stroke paralysis rehabilitation, sports injuries, knee & back care,
              and in-home therapy across Visakhapatnam.
            </p>

            {/* Google Rating Badge */}
            <div className="p-3 rounded-xl bg-teal-950/70 border border-teal-800/40 inline-flex items-center gap-3">
              <div className="flex items-center text-[#FFC94D]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white">5.0 Star Rated</span>
                <span className="text-teal-300 block">192+ Google Reviews</span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#4DB8FF] mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#4DB8FF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-[#4DB8FF] transition-colors">
                  About Doctors &amp; Qualifications
                </Link>
              </li>
              <li>
                <Link href="/#gallery" className="hover:text-[#4DB8FF] transition-colors">
                  Clinic Photos &amp; Facility
                </Link>
              </li>
              <li>
                <Link href="/#body-map" className="hover:text-[#4DB8FF] transition-colors">
                  Interactive Body Map
                </Link>
              </li>
              <li>
                <Link href="/#recovery-path" className="hover:text-[#4DB8FF] transition-colors">
                  5-Step Recovery Path
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-[#4DB8FF] transition-colors">
                  Patient Reviews (Google)
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#4DB8FF] transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/#booking" className="hover:text-[#4DB8FF] transition-colors">
                  Book an Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Specialized Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#4DB8FF] mb-4">
              Core Specialties
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              {servicesData.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="hover:text-[#4DB8FF] transition-colors block line-clamp-1"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Clinic Location & Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#4DB8FF] mb-4">
              Clinic & Contact
            </h3>
            <div className="flex items-start gap-3 text-sm text-gray-300">
              <MapPin className="w-5 h-5 text-[#0F9D8F] shrink-0 mt-0.5" />
              <div>
                <p className="text-white font-medium">Care & Cure Clinic</p>
                <p className="text-xs text-gray-300 leading-relaxed mt-0.5">
                  {siteConfig.contact.address.full}
                </p>
                <p className="text-[11px] text-teal-300/90 mt-1 font-medium">
                  Landmarks: Opp. HPCL Main Gate · Near Union Bank · Malkapuram Post Office
                </p>
              </div>
            </div>

            <div className="space-y-1.5 pt-2">
              <div className="flex items-center gap-3 text-sm text-gray-300">
                <Phone className="w-4 h-4 text-[#0F9D8F] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="hover:text-white font-semibold text-white transition-colors"
                >
                  {siteConfig.contact.phone} <span className="text-xs text-gray-400 font-normal">(Primary)</span>
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300 pl-7">
                <a
                  href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}
                  className="hover:text-white font-semibold text-white transition-colors text-xs"
                >
                  {siteConfig.contact.phoneSecondary} <span className="text-gray-400 font-normal">(WhatsApp / Alternate)</span>
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-300 pt-1">
              <Clock className="w-4 h-4 text-[#0F9D8F] shrink-0 mt-0.5" />
              <div className="text-xs">
                <p className="font-semibold text-white">Mon – Sat: 10:30 AM – 9:00 PM</p>
                <p className="text-gray-400">Sunday: By Appointment</p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#4DB8FF] hover:underline"
              >
                Open in Google Maps <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-teal-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved. Malkapuram, Visakhapatnam.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-teal-200 transition-colors">
              Privacy Policy (DPDP Act)
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-teal-200 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-teal-200 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
