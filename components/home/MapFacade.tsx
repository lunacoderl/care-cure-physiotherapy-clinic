"use client";

import React, { useState } from "react";
import { siteConfig } from "@/content/site";
import {
  MapPin,
  Navigation,
  Clock,
  Phone,
  Compass,
  Building,
  CheckCircle,
} from "lucide-react";

export function MapFacade() {
  const [mapLoaded, setMapLoaded] = useState(false);

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F7FBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73] mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Finding Our Clinic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Location & Key Landmarks
          </h2>
          <p className="text-base text-gray-600 mt-3">
            Conveniently situated on Main Road, Malkapuram, opposite HPCL Main Gate with easy auto-rickshaw and bus connectivity.
          </p>
        </div>

        {/* 2-Column Layout: Details + Map Facade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Address Card (5 cols on lg) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-md flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address Block */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#0E7C73]/10 text-[#0E7C73] flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    Clinic Address
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                    {siteConfig.contact.address.full}
                  </p>
                  <p className="text-xs font-semibold text-[#0E7C73] mt-2">
                    Plus Code: {siteConfig.contact.plusCode}
                  </p>
                </div>
              </div>

              {/* Landmarks */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#4DB8FF]/15 text-[#0E7C73] flex items-center justify-center shrink-0 mt-0.5">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    Prominent Landmarks
                  </h3>
                  <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 mt-1.5">
                    {siteConfig.contact.landmarks.map((l, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{l}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timings */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FFC94D]/25 text-[#735100] flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    Clinic Timings
                  </h3>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1 space-y-0.5">
                    <p>
                      <strong>Monday – Saturday:</strong> 10:30 AM – 9:00 PM
                    </p>
                    <p>
                      <strong>Sunday:</strong> 10:30 AM – 1:30 PM (Appointment Only)
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-gray-900">
                    Telephone &amp; WhatsApp
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-sm font-bold text-[#0E7C73]">
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="hover:underline">
                      087909 72042 <span className="text-xs text-gray-500 font-normal">(Dr. Hareesh)</span>
                    </a>
                    <span className="text-gray-300">·</span>
                    <a href={`tel:${siteConfig.contact.phoneSecondaryRaw}`} className="hover:underline">
                      098859 49671 <span className="text-xs text-gray-500 font-normal">(Dr. Reshma)</span>
                    </a>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Available for calls and WhatsApp booking</p>
                </div>
              </div>
            </div>

            {/* Direct Direction Button */}
            <div className="mt-8 pt-4 border-t border-gray-100">
              <a
                href={siteConfig.contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-bold text-white bg-[#0E7C73] hover:bg-[#0c6b63] shadow-md transition-all text-sm"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps App</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Facade (7 cols on lg) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-gray-200/80 shadow-md bg-white min-h-[380px] flex flex-col justify-between relative">
            {!mapLoaded ? (
              /* Click to Load Facade */
              <div className="w-full h-full min-h-[400px] bg-gradient-to-br from-teal-50 via-[#F7FBFA] to-sky-50 flex flex-col items-center justify-center p-8 text-center relative">
                {/* Visual Map Grid Pattern */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(#0E7C73 1px, transparent 1px)`,
                    backgroundSize: "24px 24px",
                  }}
                />

                <div className="w-16 h-16 rounded-3xl bg-white shadow-lg text-[#0E7C73] flex items-center justify-center mb-4 border border-[#0E7C73]/20 z-10 animate-bounce">
                  <MapPin className="w-8 h-8 text-[#FF6B5B]" />
                </div>

                <div className="z-10 max-w-sm space-y-2">
                  <h3 className="font-bold text-lg text-gray-900">
                    Care & Cure Clinic Pin
                  </h3>
                  <p className="text-xs text-gray-600">
                    Opposite HPCL Main Gate, Malkapuram, Visakhapatnam 530011
                  </p>
                  <div className="pt-3">
                    <button
                      type="button"
                      onClick={() => setMapLoaded(true)}
                      className="px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm text-white bg-[#0E7C73] hover:bg-[#0c6b63] shadow-md transition-all cursor-pointer"
                    >
                      Load Live Interactive Map
                    </button>
                    <p className="text-[11px] text-gray-400 mt-2">
                      Click to load Google Maps embed without extra cookies.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              /* Live Embed */
              <iframe
                title="Care & Cure Physiotherapy Clinic Google Map"
                src={`https://maps.google.com/maps?q=61-1-33,%20Main%20Road,%20Malkapuram,%20Visakhapatnam,%20Andhra%20Pradesh%20530011&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[420px] border-0"
                loading="lazy"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
