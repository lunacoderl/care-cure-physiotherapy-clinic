import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicesData, ServiceDetail } from "@/content/services";
import { siteConfig } from "@/content/site";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateServiceSchema, generateFaqSchema } from "@/lib/seo";
import { getServiceWhatsAppLink, getWhatsAppLink } from "@/lib/whatsapp";
import {
  HeartPulse,
  Activity,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  MessageCircle,
  Phone,
  Clock,
  Calendar,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Star,
  Users,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${siteConfig.url}/services/${service.slug}`,
      siteName: siteConfig.name,
      locale: "en_IN",
      type: "article",
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) =>
    service.relatedSlugs.includes(s.slug)
  );

  return (
    <>
      <JsonLd data={generateServiceSchema(service)} />
      <JsonLd data={generateFaqSchema(service.faqs)} />

      <main className="min-h-screen pt-24 pb-20">
        {/* Breadcrumb Header */}
        <div className="bg-white border-b border-gray-100 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Services", href: "/#services" },
                { label: service.shortTitle, href: `/services/${service.slug}`, isCurrent: true },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-b from-white via-[#F7FBFA] to-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73]">
                  <Activity className="w-3.5 h-3.5" />
                  <span>{service.badgeText}</span>
                </div>

                <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif] leading-tight">
                  {service.title}
                </h1>

                <p className="text-base sm:text-lg font-semibold text-[#0E7C73] leading-relaxed">
                  {service.tagline}
                </p>

                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {service.heroDescription}
                </p>

                {/* Direct Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3.5 pt-2">
                  <a
                    href={getServiceWhatsAppLink(service.shortTitle)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-white bg-[#25D366] hover:bg-[#20ba59] shadow-md hover:shadow-lg transition-all text-sm"
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                    <span>Book on WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-gray-800 bg-white hover:bg-gray-50 border border-gray-200 shadow-sm text-sm"
                  >
                    <Phone className="w-4 h-4 text-[#0E7C73]" />
                    <span>Call 087909 72042</span>
                  </a>

                  <Link
                    href="#treatment-methods"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7C73] hover:underline px-2 py-1"
                  >
                    View Treatment Methods ↓
                  </Link>
                </div>
              </div>

              {/* Right Quick Summary Card */}
              <div className="lg:col-span-4 bg-white rounded-3xl p-6 border border-[#0E7C73]/20 shadow-lg space-y-4">
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-sm">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center gap-3 pb-3 border-b border-gray-100">
                  <div className="w-10 h-10 rounded-xl bg-[#0E7C73]/10 text-[#0E7C73] flex items-center justify-center">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-gray-900">
                      {siteConfig.doctor.name}
                    </h3>
                    <p className="text-xs text-gray-500">
                      12+ Yrs Neuro & Ortho Experience
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-gray-700">
                  <div className="flex items-center justify-between py-1 border-b border-gray-50">
                    <span className="font-medium text-gray-500">Duration:</span>
                    <span className="font-bold text-gray-900">{service.sessionDetails.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-gray-50">
                    <span className="font-medium text-gray-500">Frequency:</span>
                    <span className="font-bold text-gray-900">{service.sessionDetails.frequency}</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-gray-50">
                    <span className="font-medium text-gray-500">Location:</span>
                    <span className="font-bold text-gray-900">Clinic / Home Visit</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#F7FBFA] text-xs text-gray-600 leading-relaxed">
                  <strong>What to bring:</strong> {service.sessionDetails.whatToBring}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Who It's For & Common Causes */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Who it is for */}
              <div className="bg-[#F7FBFA] rounded-3xl p-6 sm:p-8 border border-gray-200/70">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F2A2A] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
                  Who This Program Is Designed For
                </h2>
                <ul className="space-y-3">
                  {service.whoItsFor.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-[#0E7C73] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Common Causes */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-200/70">
                <h2 className="text-xl sm:text-2xl font-bold text-[#0F2A2A] mb-4 font-['Plus_Jakarta_Sans',sans-serif]">
                  Common Causes & Contributing Factors
                </h2>
                <ul className="space-y-3">
                  {service.commonCauses.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-[#FF6B5B] shrink-0 mt-2" />
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section: What We Do (Treatment Methods) */}
        <section id="treatment-methods" className="py-14 sm:py-20 bg-[#F7FBFA] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E7C73]">
                Clinical Interventions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A2A] mt-2 font-['Plus_Jakarta_Sans',sans-serif]">
                Our Clinical Treatment Methods
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                We combine hands-on manual techniques with motor retraining to correct the root mechanical malfunction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.treatmentMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#0E7C73]/10 text-[#0E7C73] flex items-center justify-center mb-3">
                    <Activity className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">
                    {method.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: 4-Phase Recovery Journey */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E7C73]">
                Progressive Healing
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A2A] mt-2 font-['Plus_Jakarta_Sans',sans-serif]">
                The 4-Phase Recovery Roadmap
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.recoveryJourney.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#F7FBFA] border border-gray-100 space-y-2 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-black text-[#0E7C73] uppercase tracking-wider block mb-1">
                      {step.phase}
                    </span>
                    <h3 className="text-base font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed mt-2">
                      {step.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-gray-200/50 text-[11px] font-semibold text-gray-400">
                    Phase {idx + 1} of 4
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Why Care & Cure */}
        <section className="py-14 sm:py-20 bg-[#F7FBFA] border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A2A] font-['Plus_Jakarta_Sans',sans-serif]">
              Why Choose Care & Cure for {service.shortTitle}?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
              {service.whyCareAndCure.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white p-5 rounded-2xl border border-[#0E7C73]/15 shadow-sm space-y-2"
                >
                  <CheckCircle className="w-5 h-5 text-[#0E7C73]" />
                  <p className="text-xs text-gray-700 leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Service FAQs */}
        <section className="py-14 sm:py-20 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0E7C73]">
                Clinical Clarity
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A2A] mt-2 font-['Plus_Jakarta_Sans',sans-serif]">
                Common Questions on {service.shortTitle}
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F7FBFA] border border-gray-200/70 space-y-2"
                >
                  <h3 className="text-sm font-bold text-gray-900 flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Related Services for Internal Linking */}
        {relatedServices.length > 0 && (
          <section className="py-14 sm:py-20 bg-[#F7FBFA]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
                  Related Care Programs
                </span>
                <h2 className="text-2xl font-bold text-[#0F2A2A] mt-1 font-['Plus_Jakarta_Sans',sans-serif]">
                  Explore Other Specialties
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-base text-gray-900 group-hover:text-[#0E7C73] transition-colors">
                        {rel.shortTitle}
                      </h3>
                      <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                        {rel.heroDescription}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0E7C73] mt-4">
                      Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mobile Sticky Bottom Consultation Bar */}
        <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-gray-200 p-3 flex items-center justify-between gap-3 shadow-2xl">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="flex-1 py-2.5 px-3 rounded-xl bg-gray-100 text-gray-900 text-center text-xs font-bold flex items-center justify-center gap-1.5"
          >
            <Phone className="w-4 h-4 text-[#0E7C73]" />
            <span>Call Clinic</span>
          </a>
          <a
            href={getServiceWhatsAppLink(service.shortTitle)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] text-white text-center text-xs font-bold flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </main>
    </>
  );
}
