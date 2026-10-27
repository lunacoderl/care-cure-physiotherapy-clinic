"use client";

import React, { useState } from "react";
import { testimonials } from "@/content/testimonials";
import { siteConfig } from "@/content/site";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export function ReviewsSection() {
  const [filter, setFilter] = useState<string>("all");

  const displayedReviews = testimonials;

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#F7FBFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#FFC94D]/25 text-[#735100] mb-3">
              <Star className="w-3.5 h-3.5 fill-[#FFC94D] text-[#FFC94D]" />
              <span>5.0 Star Rated on Google</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Real Stories from Our Patients & Families
            </h2>
            <p className="text-base text-gray-600 mt-2">
              Over 192+ verified Google reviews from Malkapuram and Visakhapatnam residents recovering from stroke paralysis, knee replacements, sports injuries, and severe disc pain.
            </p>
          </div>

          {/* Read all on Google button */}
          <div className="shrink-0">
            <a
              href={siteConfig.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm bg-white hover:bg-gray-50 text-[#0F2A2A] border border-gray-200 shadow-sm transition-all"
            >
              <span>Read all 192 reviews on Google</span>
              <ExternalLink className="w-4 h-4 text-[#0E7C73]" />
            </a>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                {/* Review Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#FFC94D]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400">
                    {review.date}
                  </span>
                </div>

                {/* Condition Tag */}
                <span className="inline-block text-[11px] font-bold text-[#0E7C73] bg-[#0E7C73]/10 px-2.5 py-0.5 rounded-full mb-3">
                  {review.condition}
                </span>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Reviewer Author */}
              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-gray-900">
                    {review.author}
                  </h4>
                  <span className="flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                    <CheckCircle2 className="w-3 h-3" /> Verified Patient Review
                  </span>
                </div>
                <span className="text-[11px] font-medium text-gray-400">
                  Google
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
