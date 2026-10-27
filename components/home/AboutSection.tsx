import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import {
  HeartPulse,
  Award,
  ShieldCheck,
  CheckCircle,
  MessageCircle,
  Phone,
  UserCheck,
  HandHeart,
  Stethoscope,
  Smile,
  Activity,
  Sparkles,
  Wind,
} from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      icon: HandHeart,
      title: "Active Hands-On Therapy",
      description:
        "We prioritize specialized manual mobilization, dry needling, and neuromuscular re-education over passive machine treatments alone.",
    },
    {
      icon: Smile,
      title: "Honest & Patient Explanations",
      description:
        "We explain your MRI or X-ray reports in plain Telugu and English, avoiding jargon so you understand exactly why you have pain.",
    },
    {
      icon: Stethoscope,
      title: "Individualized Treatment Plans",
      description:
        "Every patient is unique. We tailor exercises and mobilization to your specific biomechanics, age, and recovery speed.",
    },
    {
      icon: UserCheck,
      title: "Doorstep Home Rehabilitation",
      description:
        "For post-surgery, bedridden, and stroke patients, our doctors provide professional therapy right in your home in Vizag.",
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73] mb-3">
            <Stethoscope className="w-3.5 h-3.5" />
            <span>Consultant Clinical Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Meet Our Senior Consultant Physiotherapists
          </h2>
          <p className="text-base text-gray-600 mt-3">
            Specialized clinical care led by <strong>Dr. K. Hareesh Patnaik</strong> (Sports Medicine &amp; Manual Therapy) and <strong>Dr. K.V.V. Reshma Patnaik</strong> (Cardio-Respiratory &amp; Orthopedic Specialist).
          </p>
        </div>

        {/* 2 Doctors Profile Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Doctor 1: Dr. K. Hareesh Patnaik */}
          <div className="bg-gradient-to-br from-[#F7FBFA] via-white to-[#F0F7F6] rounded-3xl p-6 sm:p-8 border border-[#0E7C73]/20 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* Doctor Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-gray-100">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#0E7C73] to-[#0F9D8F] text-white flex items-center justify-center shadow-md shrink-0">
                  <Stethoscope className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#0E7C73]/10 text-[#0E7C73]">
                      Senior Consultant
                    </span>
                    <span className="text-xs text-gray-500 font-bold">12+ Yrs Experience</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0F2A2A] font-['Plus_Jakarta_Sans',sans-serif] mt-1">
                    Dr. K. Hareesh Patnaik
                  </h3>
                  <p className="text-xs font-bold text-[#0E7C73]">
                    DPT, BPT, MS (Sports Medicine)
                  </p>
                  <p className="text-xs text-gray-600 font-medium mt-0.5">
                    Senior Consultant Physio &amp; Sports Injury Specialist
                  </p>
                </div>
              </div>

              {/* Advanced Certifications */}
              <div className="mt-5 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Advanced Clinical Certifications:
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>MIAP Certified Cupping Therapist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>Certified Orthopaedic Manual Therapist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>Certified Dry Needling Therapist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>Certified Kinesio Taping Therapist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>Certified Transcranial Direct Current Stimulation (tDCS)</span>
                  </li>
                </ul>
              </div>

              {/* Bio snippet */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-4 pt-3 border-t border-gray-100">
                Renowned for his compassionate, honest approach. Specializes in acute spine decompression, stroke paralysis motor re-learning, sports injury cutting mechanics, and post-surgery rehabilitation.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-2.5">
              <a
                href={getWhatsAppLink("Hello Dr. Hareesh Patnaik, I would like to book a consultation at Care & Cure.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Consult Dr. Hareesh</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#0E7C73]" />
                <span>087909 72042</span>
              </a>
            </div>
          </div>

          {/* Doctor 2: Dr. K.V.V. Reshma Patnaik */}
          <div className="bg-gradient-to-br from-[#F7FBFA] via-white to-[#F0F7F6] rounded-3xl p-6 sm:p-8 border border-[#0E7C73]/20 shadow-lg flex flex-col justify-between relative overflow-hidden">
            <div>
              {/* Doctor Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-6 border-b border-gray-100">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#0F9D8F] to-[#4DB8FF] text-white flex items-center justify-center shadow-md shrink-0">
                  <Wind className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-[#4DB8FF]/15 text-[#0E7C73]">
                      Consultant Specialist
                    </span>
                    <span className="text-xs text-gray-500 font-bold">10+ Yrs Experience</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#0F2A2A] font-['Plus_Jakarta_Sans',sans-serif] mt-1">
                    Dr. K.V.V. Reshma Patnaik
                  </h3>
                  <p className="text-xs font-bold text-[#0E7C73]">
                    BPT, MPT (CARDIO)
                  </p>
                  <p className="text-xs text-gray-600 font-medium mt-0.5">
                    Consultant: Physio &amp; Cardio-Respiratory Specialist
                  </p>
                </div>
              </div>

              {/* Advanced Certifications */}
              <div className="mt-5 space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Advanced Clinical Certifications:
                </h4>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>Master of Physiotherapy in Cardio-Respiratory (MPT Cardio)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>Certified Orthopaedic Manual Therapist</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>Post-Surgical ICU &amp; Ward Early Mobilization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>Chest Physiotherapy &amp; Pulmonary Rehabilitation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>Geriatric Care &amp; Cardiovascular Endurance Retraining</span>
                  </li>
                </ul>
              </div>

              {/* Bio snippet */}
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-4 pt-3 border-t border-gray-100">
                Specializes in pulmonary rehabilitation, chest clearance, post-cardiac surgery recovery, and orthopaedic joint mobilization. Delivers reassuring care tailored to women, seniors, and post-operative patients.
              </p>
            </div>

            {/* CTAs */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col sm:flex-row gap-2.5">
              <a
                href={getWhatsAppLink("Hello Dr. Reshma Patnaik, I would like to consult regarding Cardio-Respiratory / Physiotherapy.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md transition-all text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Consult Dr. Reshma</span>
              </a>
              <a
                href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}
                className="inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors text-xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#0E7C73]" />
                <span>098859 49671</span>
              </a>
            </div>
          </div>
        </div>

        {/* Clinic Banner Feature & Address Callout */}
        <div className="bg-[#F7FBFA] rounded-3xl p-6 sm:p-8 border border-gray-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4 relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-md border border-gray-200">
            <Image
              src="/gallary/banner.webp"
              alt="Care And Cure Physiotherapy Clinic Official Doctor Banner"
              fill
              className="object-contain bg-white"
            />
          </div>

          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0E7C73]">
              Official Clinic Credentials
            </span>
            <h3 className="text-2xl font-bold text-[#0F2A2A] font-['Plus_Jakarta_Sans',sans-serif]">
              Care And Cure Physiotherapy And Sports Injury Clinic
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Located on Main Road, Ramakrishnapuram, Malkapuram, Visakhapatnam. We are situated directly opposite the <strong>HPCL Main Gate</strong> and near the <strong>Malkapuram Post Office</strong> and <strong>Union Bank of India</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-700 pt-2">
              <div className="p-3 rounded-xl bg-white border border-gray-100 flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0E7C73] shrink-0" />
                <div>
                  <span className="font-bold block">Primary Contact:</span>
                  <a href="tel:+918790972042" className="hover:text-[#0E7C73] font-semibold">087909 72042</a>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-gray-100 flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0E7C73] shrink-0" />
                <div>
                  <span className="font-bold block">Alternate / WhatsApp:</span>
                  <a href="tel:+919885949671" className="hover:text-[#0E7C73] font-semibold">098859 49671</a>
                </div>
              </div>
            </div>

            <p className="text-xs text-gray-500 pt-1">
              Registered Web Portal: <a href="http://sisyp.com/dir/vizag/doctor/physiotherapists/care-and-cure-physiotherapy-and-sports-injury-clinic/" target="_blank" rel="noopener noreferrer" className="text-[#0E7C73] underline font-medium">sisyp.com Directory Profile</a>
            </p>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-extrabold text-[#0F2A2A] font-['Plus_Jakarta_Sans',sans-serif]">
              Our Treatment Philosophy &amp; Standards
            </h3>
            <p className="text-sm text-gray-600 mt-1">
              Why families across Malkapuram, Sriharipuram, and Vizag choose Care &amp; Cure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F7FBFA] border border-[#0E7C73]/10 space-y-2 hover:border-[#0E7C73]/30 transition-colors"
                >
                  <div className="w-9 h-9 rounded-xl bg-[#0E7C73]/10 text-[#0E7C73] flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
