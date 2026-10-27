import React from "react";
import { siteConfig } from "@/content/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { MessageCircle, Phone, HeartPulse, CheckCircle2 } from "lucide-react";

export function FinalCta() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-[#091D1B] via-[#0E7C73] to-[#091D1B] text-white relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#4DB8FF]/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-white/10 text-teal-200 backdrop-blur-sm border border-white/15">
          <HeartPulse className="w-4 h-4 text-[#4DB8FF]" />
          <span>Take the First Step to Recovery</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
          Ready to move freely without persistent pain?
        </h2>

        <p className="text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Whether you need clinic therapy in Malkapuram or an in-home visit in Visakhapatnam,
          Dr. K. Hareesh Patnaik and Dr. K.V.V. Reshma Patnaik are ready to guide your recovery with honest, patient-centered care.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-extrabold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-xl shadow-black/20 hover:scale-105 transition-all text-base"
          >
            <MessageCircle className="w-5 h-5 fill-white text-transparent" />
            <span>Book Consultation on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-extrabold text-[#091D1B] bg-white hover:bg-gray-100 shadow-xl shadow-black/20 hover:scale-105 transition-all text-base"
          >
            <Phone className="w-5 h-5 text-[#0E7C73]" />
            <span>Call 087909 72042</span>
          </a>
        </div>

        {/* Small reassurance chips */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-teal-200/90 font-medium">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            Same-Day Appointments Available
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            5.0 Rated on Google (192 Reviews)
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            In-Home Visits in Malkapuram & Vizag
          </span>
        </div>
      </div>
    </section>
  );
}
