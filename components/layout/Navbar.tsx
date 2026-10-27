"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/content/site";
import { servicesData } from "@/content/services";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Activity,
  HeartPulse,
  Sparkles,
  MapPin,
  Clock,
  UserCheck,
} from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Scroll detection for navbar background styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open to prevent overlapping scroll glitch
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Main Navigation Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
            : "bg-white/80 backdrop-blur-sm border-b border-gray-100/60 py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0E7C73] rounded-xl shrink-0"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white border border-[#0E7C73]/20 flex items-center justify-center p-1 shadow-sm group-hover:scale-105 transition-transform duration-200 shrink-0">
                <Image
                  src="/icon.svg"
                  alt="Care & Cure Logo"
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-[#0F2A2A] font-['Plus_Jakarta_Sans',sans-serif]">
                    Care <span className="text-[#0E7C73]">&</span> Cure
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#FFC94D]/25 text-[#735100]">
                    ★ 5.0 (192)
                  </span>
                </div>
                <p className="text-[10px] sm:text-[11px] font-semibold text-gray-500 tracking-wide line-clamp-1">
                  Physiotherapy & Sports Injury Clinic
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links (>= 1024px) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  pathname === "/"
                    ? "text-[#0E7C73] bg-[#0E7C73]/10"
                    : "text-gray-700 hover:text-[#0E7C73] hover:bg-gray-100/60"
                }`}
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                    pathname.startsWith("/services")
                      ? "text-[#0E7C73] bg-[#0E7C73]/10"
                      : "text-gray-700 hover:text-[#0E7C73] hover:bg-gray-100/60"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                >
                  Specialties
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Mega Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="p-3 rounded-xl hover:bg-[#F7FBFA] border border-transparent hover:border-[#0E7C73]/15 transition-all group/item"
                      >
                        <div className="flex items-start gap-3">
                          <div className="p-2 rounded-lg bg-[#0E7C73]/10 text-[#0E7C73] group-hover/item:bg-[#0E7C73] group-hover/item:text-white transition-colors">
                            <Activity className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-sm font-bold text-gray-900 group-hover/item:text-[#0E7C73] transition-colors">
                              {s.shortTitle}
                            </p>
                            <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                              {s.tagline}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                    <div className="col-span-2 pt-2 mt-1 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 px-2">
                      <span className="flex items-center gap-1.5 font-medium text-[#0E7C73]">
                        <Sparkles className="w-3.5 h-3.5" /> Malkapuram & Vizag In-Home Visits Available
                      </span>
                      <Link
                        href="/#services"
                        className="font-bold text-[#0E7C73] hover:underline"
                      >
                        View all 6 specialties →
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/#about"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-[#0E7C73] hover:bg-gray-100/60 transition-colors"
              >
                Doctors
              </Link>
              <Link
                href="/#gallery"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-[#0E7C73] hover:bg-gray-100/60 transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/#recovery-path"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-[#0E7C73] hover:bg-gray-100/60 transition-colors"
              >
                Recovery Path
              </Link>
              <Link
                href="/#reviews"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-[#0E7C73] hover:bg-gray-100/60 transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="/#faq"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-[#0E7C73] hover:bg-gray-100/60 transition-colors"
              >
                FAQ
              </Link>
              <Link
                href="/#contact"
                className="px-3 py-2 rounded-lg text-sm font-semibold text-gray-700 hover:text-[#0E7C73] hover:bg-gray-100/60 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Quick Call Button (Desktop & Tablet) */}
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-gray-700 bg-gray-100 hover:bg-gray-200 hover:text-[#0E7C73] transition-colors"
                title="Call 087909 72042"
              >
                <Phone className="w-3.5 h-3.5 text-[#0E7C73]" />
                <span className="hidden xl:inline">{siteConfig.contact.phone}</span>
                <span className="xl:hidden">Call Clinic</span>
              </a>

              {/* WhatsApp Booking (Desktop & Tablet) */}
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-sm hover:shadow-md hover:shadow-[#25D366]/30 transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>WhatsApp</span>
              </a>

              {/* Mobile Phone Quick Action (< 640px) */}
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                aria-label="Call clinic directly"
                className="sm:hidden p-2.5 rounded-xl bg-[#0E7C73]/10 text-[#0E7C73] active:bg-[#0E7C73]/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>

              {/* Mobile / Tablet Hamburger Toggle Button (visible < 1024px) */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2.5 rounded-xl text-gray-700 hover:text-[#0E7C73] hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0E7C73] transition-colors"
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-[#0E7C73]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer Modal (Eliminates header overlap issues completely) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex flex-col bg-white animate-in fade-in duration-200">
          {/* Drawer Top Header with Dedicated Close Button */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100 bg-white">
            <Link
              href="/"
              className="flex items-center gap-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="w-9 h-9 rounded-xl bg-white border border-[#0E7C73]/20 flex items-center justify-center p-1 shadow-sm shrink-0">
                <Image
                  src="/icon.svg"
                  alt="Care & Cure Logo"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-extrabold text-base tracking-tight text-[#0F2A2A] font-['Plus_Jakarta_Sans',sans-serif]">
                  Care <span className="text-[#0E7C73]">&</span> Cure
                </span>
                <p className="text-[10px] font-semibold text-gray-500">Malkapuram, Vizag</p>
              </div>
            </Link>

            {/* Explicit Close Button inside Drawer Header */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#0E7C73] transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-5 py-5 space-y-5">
            {/* Live Status Chip */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-[#F7FBFA] border border-[#0E7C73]/15">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs font-bold text-gray-800">Clinic Open Mon–Sat 9 PM</span>
              </div>
              <span className="text-xs font-extrabold text-[#0E7C73]">★ 5.0 Rated</span>
            </div>

            {/* Doctors Quick Recognition */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#F7FBFA] to-[#EBF5F3] border border-[#0E7C73]/20 space-y-1.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0E7C73]">
                <UserCheck className="w-4 h-4" />
                <span>Senior Consultant Doctors:</span>
              </div>
              <p className="text-xs font-bold text-[#0F2A2A]">
                Dr. K. Hareesh Patnaik &amp; Dr. K.V.V. Reshma Patnaik
              </p>
              <p className="text-[11px] text-gray-600">
                Sports Medicine, Cardio-Respiratory &amp; Orthopedic Rehabilitation
              </p>
            </div>

            {/* Mobile Navigation Links */}
            <div className="flex flex-col space-y-1 font-semibold text-gray-800">
              <Link
                href="/"
                className="p-3 rounded-xl hover:bg-gray-50 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 text-base font-semibold"
                >
                  <span>Rehabilitation Specialties (6)</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      mobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileServicesOpen && (
                  <div className="pl-3 pr-2 py-1.5 space-y-1 bg-gray-50/80 rounded-2xl my-1 border-l-2 border-[#0E7C73]">
                    {servicesData.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="block py-2 px-2 text-sm text-gray-700 hover:text-[#0E7C73] rounded-lg"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {s.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/#about"
                className="p-3 rounded-xl hover:bg-gray-50 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Doctors &amp; Qualifications
              </Link>
              <Link
                href="/#gallery"
                className="p-3 rounded-xl hover:bg-gray-50 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Clinic Photos &amp; Gallery
              </Link>
              <Link
                href="/#recovery-path"
                className="p-3 rounded-xl hover:bg-gray-50 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                5-Step Recovery Path
              </Link>
              <Link
                href="/#reviews"
                className="p-3 rounded-xl hover:bg-gray-50 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                192+ Google Reviews (5.0 ★)
              </Link>
              <Link
                href="/#faq"
                className="p-3 rounded-xl hover:bg-gray-50 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Patient FAQs
              </Link>
              <Link
                href="/#contact"
                className="p-3 rounded-xl hover:bg-gray-50 text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Clinic Location &amp; Timings
              </Link>
            </div>
          </div>

          {/* Drawer Bottom Action Buttons with Both Phone Numbers */}
          <div className="px-5 py-4 border-t border-gray-100 bg-white space-y-2.5">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl text-white font-bold bg-[#25D366] shadow-md shadow-[#25D366]/20 text-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white text-transparent" />
              <span>Book Appointment on WhatsApp</span>
            </a>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-gray-800 font-bold bg-gray-100 hover:bg-gray-200 text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#0E7C73]" />
                <span>087909 72042</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}
                className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-gray-800 font-bold bg-gray-100 hover:bg-gray-200 text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#0E7C73]" />
                <span>098859 49671</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
