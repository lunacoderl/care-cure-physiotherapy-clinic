"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/content/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, Phone, Calendar, ArrowUp } from "lucide-react";

export function FloatingRail() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBooking = () => {
    const el = document.getElementById("booking");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#booking";
    }
  };

  return (
    <aside
      aria-label="Quick actions"
      className="fixed bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-none"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* 1. Scroll To Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="pointer-events-auto p-2.5 rounded-full bg-white/90 backdrop-blur-md text-gray-700 hover:text-[#0E7C73] border border-gray-200 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0E7C73]"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* 2. Book Appointment button */}
      <button
        type="button"
        onClick={scrollToBooking}
        aria-label="Book physiotherapy appointment"
        className="pointer-events-auto group flex items-center gap-2 px-3 py-2.5 sm:px-3.5 rounded-full bg-white/95 backdrop-blur-md text-[#0E7C73] border border-[#0E7C73]/20 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#0E7C73]"
      >
        <Calendar className="w-5 h-5 text-[#0E7C73] shrink-0" />
        <span className="hidden group-hover:inline-block sm:group-hover:inline-block text-xs font-bold text-gray-800 transition-all duration-200 pr-1">
          Book Visit
        </span>
      </button>

      {/* 3. Direct Phone Call button */}
      <a
        href={`tel:${siteConfig.contact.phoneRaw}`}
        aria-label="Call clinic directly"
        className="pointer-events-auto group flex items-center gap-2 px-3 py-2.5 sm:px-3.5 rounded-full bg-[#0E7C73] text-white shadow-lg hover:bg-[#0c6b63] hover:shadow-xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <Phone className="w-5 h-5 shrink-0" />
        <span className="hidden group-hover:inline-block sm:group-hover:inline-block text-xs font-bold transition-all duration-200 pr-1">
          Call Now
        </span>
      </a>

      {/* 4. WhatsApp Pulsing Ring Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Dr. Harish on WhatsApp"
        className="pointer-events-auto group relative flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-[#25D366] text-white shadow-xl hover:bg-[#20ba59] transition-all transform hover:scale-105 whatsapp-pulse focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
      >
        <MessageCircle className="w-6 h-6 fill-white text-transparent shrink-0" />
        <span className="hidden sm:inline-block text-xs font-extrabold tracking-wide">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
}
