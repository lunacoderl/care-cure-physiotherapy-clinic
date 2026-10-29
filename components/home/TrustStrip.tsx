import React from "react";
import { siteConfig } from "@/content/site";
import { Star, Users, Award, ShieldCheck, HeartPulse } from "lucide-react";

export function TrustStrip() {
  const stats = [
    {
      icon: Star,
      value: "5.0 ★",
      label: "Google Rating",
      subtext: "192 Verified Reviews",
      color: "text-[#FFC94D]",
      bg: "bg-[#FFC94D]/10",
    },
    {
      icon: Users,
      value: "6,000+",
      label: "Patients Recovered",
      subtext: "Malkapuram & Visakhapatnam",
      color: "text-[#0E7C73]",
      bg: "bg-[#0E7C73]/10",
    },
    {
      icon: Award,
      value: "10+ Years",
      label: "Clinical Experience",
      subtext: "Neuro & Ortho Specialty",
      color: "text-[#4DB8FF]",
      bg: "bg-[#4DB8FF]/10",
    },
    {
      icon: ShieldCheck,
      value: "100%",
      label: "Transparent Advice",
      subtext: "No Unnecessary Machine Sessions",
      color: "text-[#FF6B5B]",
      bg: "bg-[#FF6B5B]/10",
    },
  ];

  return (
    <section aria-label="Clinic Trust Credentials" className="py-10 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-3.5 p-3 rounded-2xl hover:bg-[#F7FBFA] transition-colors"
              >
                <div
                  className={`p-3 rounded-xl ${s.bg} ${s.color} shrink-0`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
                    {s.value}
                  </div>
                  <div className="text-sm font-bold text-gray-800 mt-0.5">
                    {s.label}
                  </div>
                  <div className="text-xs text-gray-500 font-medium mt-0.5">
                    {s.subtext}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
