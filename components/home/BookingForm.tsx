"use client";

import React, { useState } from "react";
import { servicesData } from "@/content/services";
import { buildBookingWhatsAppUrl, BookingFormData } from "@/lib/whatsapp";
import { siteConfig } from "@/content/site";
import {
  Calendar,
  MessageCircle,
  Clock,
  User,
  Phone,
  FileText,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";

export function BookingForm() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: "",
    phone: "",
    service: servicesData[0]?.title || "Back Pain Physiotherapy & Sciatica Relief",
    preferredDate: "",
    preferredTime: "Evening (4:30 PM – 9:00 PM)",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert("Please enter your name and phone number.");
      return;
    }

    const whatsappUrl = buildBookingWhatsAppUrl(formData);
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F7FBFA] via-white to-[#F0F7F6] rounded-3xl p-6 sm:p-10 border border-[#0E7C73]/20 shadow-xl relative overflow-hidden">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73] mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>Instant Appointment Booking</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Request Your Physiotherapy Consultation
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2">
              Fill in your details below. Your request will open directly in WhatsApp with all details pre-formatted for Dr. K. Hareesh Patnaik &amp; Dr. K.V.V. Reshma Patnaik.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Patient Full Name <span className="text-[#FF6B5B]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Kumar"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0E7C73] focus:border-transparent bg-white shadow-sm"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Phone / WhatsApp Number <span className="text-[#FF6B5B]">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 9876543210"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0E7C73] focus:border-transparent bg-white shadow-sm"
                  />
                </div>
              </div>
            </div>

            {/* Service Dropdown */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Therapy Program / Concern <span className="text-[#FF6B5B]">*</span>
              </label>
              <select
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
                className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0E7C73] focus:border-transparent bg-white shadow-sm font-medium"
              >
                {servicesData.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="General Consultation / Other Pain">
                  General Consultation / Other Condition
                </option>
              </select>
            </div>

            {/* Preferred Date & Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) =>
                    setFormData({ ...formData, preferredDate: e.target.value })
                  }
                  className="w-full px-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0E7C73] focus:border-transparent bg-white shadow-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                  Preferred Time Slot
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Clock className="w-4 h-4" />
                  </div>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredTime: e.target.value })
                    }
                    className="w-full pl-10 pr-4 py-3 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0E7C73] focus:border-transparent bg-white shadow-sm font-medium"
                  >
                    <option value="Morning (10:30 AM – 1:30 PM)">
                      Morning Slot (10:30 AM – 1:30 PM)
                    </option>
                    <option value="Evening (4:30 PM – 9:00 PM)">
                      Evening Slot (4:30 PM – 9:00 PM)
                    </option>
                    <option value="Home Visit (Afternoon / Flexible)">
                      In-Home Physiotherapy Visit (Malkapuram/Vizag)
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Symptoms / Notes */}
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1.5">
                Brief Symptoms or Medical History (Optional)
              </label>
              <textarea
                rows={3}
                placeholder="Describe your pain, duration, previous surgery, or MRI findings..."
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0E7C73] focus:border-transparent bg-white shadow-sm resize-none"
              />
            </div>

            {/* Submission button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-2xl font-extrabold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-lg shadow-[#25D366]/25 hover:shadow-xl transition-all flex items-center justify-center gap-2.5 text-base cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Open WhatsApp with My Request</span>
              </button>
              <p className="text-center text-[11px] text-gray-500 mt-2">
                Clicking opens WhatsApp on your phone or browser with this request pre-filled. Just press Send!
              </p>
            </div>
          </form>

          {/* Quick Confirmation Note */}
          <div className="mt-6 pt-4 border-t border-gray-200/60 flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600">
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#0E7C73]" />
              No spam. Direct patient-doctor communication.
            </span>
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="text-[#0E7C73] font-bold hover:underline"
            >
              Prefer calling? Tap here to call 087909 72042
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
