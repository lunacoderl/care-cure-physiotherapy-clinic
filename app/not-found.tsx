import React from "react";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Home, ArrowRight, MessageCircle, HeartPulse, Footprints } from "lucide-react";
import { servicesData } from "@/content/services";

export default function NotFound() {
  return (
    <main className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-gradient-to-b from-[#F7FBFA] to-white">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        {/* Animated Walking Figure Visual */}
        <div className="relative mx-auto w-32 h-32 flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-[#0E7C73]/10 flex items-center justify-center text-[#0E7C73] animate-pulse">
            <Footprints className="w-12 h-12" />
          </div>
          <span className="absolute -top-1 -right-1 px-3 py-1 rounded-full text-xs font-black bg-[#FF6B5B] text-white shadow-md">
            404
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            This page took an unexpected turn
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
            We couldn&apos;t find the page you were looking for. Let&apos;s get you back on track to your recovery.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#0E7C73] hover:bg-[#0c6b63] shadow-md transition-all text-sm"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all text-sm"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Quick Service Links */}
        <div className="pt-8 border-t border-gray-200/60 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3 text-center sm:text-left">
            Or Jump Directly to a Specialty:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {servicesData.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="p-2.5 rounded-xl bg-white border border-gray-200 hover:border-[#0E7C73] hover:text-[#0E7C73] transition-colors flex items-center justify-between"
              >
                <span className="font-semibold text-gray-800">{s.shortTitle}</span>
                <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
