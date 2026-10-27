import React from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/content/services";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function ServicesGrid() {
  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F7FBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73] mb-3">
            <Activity className="w-3.5 h-3.5" />
            <span>Clinical Specialties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Evidence-Based Rehabilitation Programs
          </h2>
          <p className="text-base text-gray-600 mt-3">
            Every session is guided personally by Dr. K. Hareesh Patnaik and Dr. K.V.V. Reshma Patnaik using modern manual therapy, neuroplastic re-learning, and targeted orthopedic mobilization.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-100 hover:border-[#0E7C73]/30 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                {/* Service Image with Badge Overlay */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/95 backdrop-blur-sm text-[#0E7C73] shadow-sm">
                    {service.badgeText}
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-[#0F2A2A] group-hover:text-[#0E7C73] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                  {service.shortTitle}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-semibold text-[#0E7C73] mt-1 line-clamp-1">
                  {service.tagline}
                </p>

                {/* Two line description */}
                <p className="text-xs sm:text-sm text-gray-600 mt-2.5 leading-relaxed line-clamp-2">
                  {service.heroDescription}
                </p>

                {/* Condition Highlights */}
                <div className="mt-4 pt-3 border-t border-gray-100 space-y-1.5">
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">
                    Key Focus Areas:
                  </span>
                  {service.whoItsFor.slice(0, 2).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7C73] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action */}
              <div className="mt-5 pt-3 border-t border-gray-100">
                <Link
                  href={`/services/${service.slug}`}
                  className="w-full inline-flex items-center justify-between text-xs sm:text-sm font-bold text-[#0E7C73] hover:text-[#0c6b63] group-hover:translate-x-0.5 transition-all py-1"
                >
                  <span>Explore Treatment Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
