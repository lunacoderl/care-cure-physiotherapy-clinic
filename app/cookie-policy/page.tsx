import React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/content/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Cookie, CheckCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Care & Cure Physiotherapy Visakhapatnam",
  description:
    "Information on cookies, local preferences, and third-party tools used on the Care And Cure Physiotherapy website.",
  alternates: {
    canonical: `${siteConfig.url}/cookie-policy`,
  },
};

export default function CookiePolicyPage() {
  const cookiesTable = [
    {
      name: "care_cure_cookie_consent",
      provider: "Care & Cure Physiotherapy",
      purpose: "Stores your cookie consent preference (essential vs all).",
      duration: "1 Year",
      type: "Essential (First Party)",
    },
    {
      name: "clinic_session_state",
      provider: "Care & Cure Physiotherapy",
      purpose: "Preserves user scroll position and appointment form state during navigation.",
      duration: "Session",
      type: "Essential",
    },
    {
      name: "NID / CONSENT",
      provider: "Google Maps (Google LLC)",
      purpose: "Enables interactive map rendering for clinic directions (loaded only upon user interaction).",
      duration: "6 Months",
      type: "Third Party (Functional)",
    },
  ];

  return (
    <main className="min-h-screen pt-24 pb-20 bg-[#F7FBFA]">
      <div className="bg-white border-b border-gray-100 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ label: "Cookie Policy", href: "/cookie-policy", isCurrent: true }]}
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-gray-100 shadow-md space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73] mb-3">
              <Cookie className="w-3.5 h-3.5" />
              <span>Cookie Transparency</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Cookie Policy
            </h1>
            <p className="text-xs text-gray-500 mt-2">
              Last updated: October 2026 · Care And Cure Physiotherapy And Sports Injury Clinic
            </p>
          </div>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-900">What Are Cookies?</h2>
            <p>
              Cookies are tiny text files stored in your web browser that allow websites to recognize your device, remember preferences (such as clinic appointment details or cookie choices), and ensure fast, secure page performance.
            </p>
          </section>

          {/* Cookie Table */}
          <section className="space-y-4">
            <h2 className="text-lg font-bold text-gray-900">Cookies Used on This Site</h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-left text-xs">
                <thead className="bg-[#F7FBFA] text-gray-700 font-bold">
                  <tr>
                    <th scope="col" className="px-4 py-3">Cookie Name</th>
                    <th scope="col" className="px-4 py-3">Provider</th>
                    <th scope="col" className="px-4 py-3">Purpose</th>
                    <th scope="col" className="px-4 py-3">Duration</th>
                    <th scope="col" className="px-4 py-3">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white text-gray-600">
                  {cookiesTable.map((cookie, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-gray-900">{cookie.name}</td>
                      <td className="px-4 py-3">{cookie.provider}</td>
                      <td className="px-4 py-3">{cookie.purpose}</td>
                      <td className="px-4 py-3">{cookie.duration}</td>
                      <td className="px-4 py-3 font-medium text-[#0E7C73]">{cookie.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <h2 className="text-lg font-bold text-gray-900">Managing Your Preferences</h2>
            <p>
              You can withdraw or update your consent at any time by clearing your browser cookies or local storage. When you visit our website again, the cookie selection banner will reappear, allowing you to choose your preferred setting.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
