import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { AlertCircle, FileText, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Care & Cure Physiotherapy Visakhapatnam",
  description:
    "Terms of service, medical disclaimer, and appointment policies for Care And Cure Physiotherapy And Sports Injury Clinic.",
  alternates: {
    canonical: `${siteConfig.url}/terms-and-conditions`,
  },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#F7FBFA]">
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Terms and Conditions", href: "/terms-and-conditions", isCurrent: true }]}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-100 shadow-md space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73] mb-3">
              <Scale className="w-3.5 h-3.5" />
              <span>Medical Terms &amp; Policies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              Last updated: October 2026 · Care And Cure Physiotherapy Clinic, Visakhapatnam
            </p>
          </div>

          {/* Medical Disclaimer Alert */}
          <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 flex items-start gap-3 leading-relaxed">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong className="font-bold block mb-1">Important Medical Disclaimer:</strong>
              Content published on this website is for general educational and informational purposes only. It does not constitute medical advice or substitute for an in-person physical clinical diagnosis by a qualified physiotherapist or physician. Never disregard professional medical advice due to information read on this website.
            </div>
          </div>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using <strong>careandcurephysio.in</strong>, you acknowledge and agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, please refrain from using our online booking features.
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-900">2. Appointments &amp; Cancellations</h2>
            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li><strong>Confirmation:</strong> Online booking submissions generate a direct WhatsApp request. An appointment is considered confirmed only after direct mutual communication with Dr. Harish Patnaik or the clinic front desk.</li>
              <li><strong>Punctuality:</strong> Please arrive 5–10 minutes prior to your scheduled clinic appointment time to ensure uninterrupted therapy.</li>
              <li><strong>Cancellations / Rescheduling:</strong> If you need to reschedule a clinic visit or in-home session, please notify us at least 4 hours in advance via WhatsApp or phone so the time slot can be made available to other acute patients.</li>
            </ul>
          </section>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-900">3. In-Home Physiotherapy Guidelines</h2>
            <p>
              For home rehabilitation visits in Malkapuram and greater Visakhapatnam, patients and caregivers must ensure:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>A clean, well-lit, and adequately ventilated space suitable for mobilization and exercises.</li>
              <li>An adult family member or attendant is present in the home during the therapy session.</li>
            </ul>
          </section>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-900">4. Limitation of Liability &amp; Jurisdiction</h2>
            <p>
              Care And Cure Physiotherapy And Sports Injury Clinic and its practitioners shall not be held liable for any damages resulting from improper execution of exercises without supervision. All legal disputes arising in connection with website usage or clinical services are subject to the exclusive jurisdiction of the competent courts of <strong>Visakhapatnam, Andhra Pradesh, India</strong>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
