"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  HeartPulse,
  Activity,
  Maximize2,
  X,
  Camera,
  MapPin,
} from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  src: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "photo-1",
    title: "Care & Cure Clinic Treatment & Assessment Facility",
    category: "Clinic Facility",
    description: "Equipped therapy rooms with specialized plinths, electrotherapy modalities, and spine assessment equipment at Malkapuram.",
    src: "/gallary/office.webp",
  },
  {
    id: "photo-2",
    title: "Active Hands-On Therapy Session",
    category: "Treatment",
    description: "Dr. K. Hareesh Patnaik providing dedicated manual therapy and muscle mobilization to relieve pain and joint stiffness.",
    src: "/gallary/patient.webp",
  },
  {
    id: "photo-3",
    title: "Senior Consultant Doctors & Clinical Specializations",
    category: "Medical Team",
    description: "Dr. K. Hareesh Patnaik (Sports Medicine & Rehab) and Dr. K.V.V. Reshma Patnaik (Cardio-Respiratory & Ortho Specialist).",
    src: "/gallary/banner.webp",
  },
  {
    id: "photo-4",
    title: "Comprehensive Clinical Services & Modalities",
    category: "Services",
    description: "Official therapy schedule and clinical service board at our clinic opposite HPCL Main Gate.",
    src: "/gallary/services.webp",
  },
  {
    id: "photo-5",
    title: "Orthopedic Knee & Meniscus Care Protocol",
    category: "Knee Care",
    description: "Biomechanical evaluation and muscle balancing for knee osteoarthritis, ligament sprains, and post-TKR recovery.",
    src: "/images/services/knee-care.jpg",
  },
  {
    id: "photo-6",
    title: "In-Home Physiotherapy Visits Across Vizag",
    category: "Home Care",
    description: "Compassionate bedside therapy for bedridden, post-surgery, and elderly patients in Malkapuram and Visakhapatnam.",
    src: "/images/services/home-physio.jpg",
  },
];

export function GalleryGrid() {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Clinic Tour & Facilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Real Photos from Care & Cure Clinic
          </h2>
          <p className="text-base text-gray-600 mt-3">
            Hygienic, welcoming, and well-equipped rehabilitation center located on Main Road, Malkapuram, Visakhapatnam.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group cursor-pointer rounded-3xl overflow-hidden bg-[#F7FBFA] border border-gray-200/80 hover:border-[#0E7C73]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Badge Overlay */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold bg-white/90 backdrop-blur-sm text-[#0E7C73] shadow-sm">
                  {item.category}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#0E7C73]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white gap-2 font-bold text-xs">
                  <Maximize2 className="w-4 h-4" />
                  <span>Enlarge Photo</span>
                </div>
              </div>

              {/* Title and description */}
              <div className="p-5 bg-white">
                <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#0E7C73] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="bg-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveItem(null)}
                aria-label="Close dialog"
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden mb-5 bg-gray-100">
                <Image
                  src={activeItem.src}
                  alt={activeItem.title}
                  fill
                  className="object-contain bg-black/5"
                />
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-[#0E7C73] uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-[#0E7C73]/10">
                  {activeItem.category}
                </span>
                <span className="text-xs text-gray-400">· Care & Cure Clinic</span>
              </div>

              <h3 className="text-lg font-bold text-[#0F2A2A] font-['Plus_Jakarta_Sans',sans-serif]">
                {activeItem.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {activeItem.description}
              </p>

              <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="flex items-center gap-1 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#0E7C73]" /> Opp. HPCL Main Gate, Malkapuram
                </span>
                <button
                  type="button"
                  onClick={() => setActiveItem(null)}
                  className="font-bold text-[#0E7C73] hover:underline"
                >
                  Close Preview
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
