import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | DPDP Act 2023 Compliant | Care & Cure Physiotherapy",
  description:
    "Privacy Policy for Care And Cure Physiotherapy And Sports Injury Clinic in accordance with the Digital Personal Data Protection Act, 2023 (India).",
  alternates: {
    canonical: `${siteConfig.url}/privacy-policy`,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#F7FBFA]">
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Privacy Policy", href: "/privacy-policy", isCurrent: true }]}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-100 shadow-md space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73] mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>DPDP Act 2023 Compliant</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Privacy Policy
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              Last updated: October 2026 · Governing Entity: Care And Cure Physiotherapy And Sports Injury Clinic, Visakhapatnam
            </p>
          </div>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-900">1. Overview & Commitment</h2>
            <p>
              Care And Cure Physiotherapy And Sports Injury Clinic (&quot;Care &amp; Cure&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) operates the website <strong>careandcurephysio.in</strong>. We are committed to safeguarding the personal and health data of our patients in full compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India and applicable medical ethics standards.
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-900">2. Personal Data We Collect</h2>
            <p>We only collect information that you knowingly and voluntarily provide to us when requesting an appointment or inquiring about our services:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Contact Information:</strong> Patient name, contact telephone/WhatsApp number, and residential address (for in-home visits).</li>
              <li><strong>Clinical Notes:</strong> Symptoms, affected body regions, surgical history (e.g. TKR, fracture fixations), or rehabilitation notes you choose to share in the booking form.</li>
              <li><strong>Technical Data:</strong> Minimal anonymized technical information (browser type, session preferences) collected via essential cookies.</li>
            </ul>
          </section>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-900">3. Purpose and Lawful Basis for Processing</h2>
            <p>Your data is processed strictly for the following clinical and communicative purposes:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Scheduling, coordinating, and confirming physiotherapy appointments at our clinic or in your home.</li>
              <li>Preparing relevant clinical equipment, modalities, and tailored exercises prior to your session.</li>
              <li>Responding directly to your questions via WhatsApp or phone.</li>
            </ul>
            <p className="text-xs text-gray-500 italic mt-1">
              We never sell, rent, or trade your personal or health data to third-party marketing companies.
            </p>
          </section>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-900">4. Third-Party Integrations</h2>
            <p>Our website interfaces with selected third-party services to enhance patient convenience:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>WhatsApp (Meta Platforms, Inc.):</strong> When you submit our appointment form, the text is securely compiled on your own device and opened in WhatsApp. No data is stored on external intermediary servers.</li>
              <li><strong>Google Maps (Google LLC):</strong> Used to render our clinic location and driving directions in Malkapuram. Maps load only on explicit user consent.</li>
            </ul>
          </section>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-900">5. Your Rights as a Data Principal</h2>
            <p>Under the DPDP Act 2023, you hold the following rights regarding your personal data:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Right to Access:</strong> You may request a summary of personal data held about you.</li>
              <li><strong>Right to Correction &amp; Erasure:</strong> You may request updates or deletion of outdated contact records.</li>
              <li><strong>Right to Grievance Redressal:</strong> You have the right to register concerns with our Grievance Officer.</li>
            </ul>
          </section>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-6">
            <h2 className="text-lg font-bold text-gray-900">6. Grievance Redressal Officer</h2>
            <p>For any privacy queries, consent withdrawal, or data rights requests, please contact our designated coordinator:</p>
            <div className="bg-[#F7FBFA] p-5 rounded-2xl border border-gray-200/80 space-y-2 text-xs sm:text-sm">
              <p><strong>Grievance Officer:</strong> Clinic Coordinator / Dr. Harish Patnaik</p>
              <p><strong>Clinic:</strong> {siteConfig.name}</p>
              <p><strong>Address:</strong> {siteConfig.contact.address.full}</p>
              <p><strong>Phone:</strong> {siteConfig.contact.phone}</p>
              <p><strong>Email:</strong> {siteConfig.contact.email}</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
