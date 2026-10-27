"use client";

import React, { useState } from "react";
import { clinicFaqs } from "@/content/faqs";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateFaqSchema } from "@/lib/seo";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/lib/whatsapp";

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <JsonLd data={generateFaqSchema(clinicFaqs)} />
      <section id="faq" className="py-16 sm:py-24 bg-[#F7FBFA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73] mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600 mt-3">
              Everything you need to know about visiting Care & Cure Physiotherapy Clinic or arranging home visits.
            </p>
          </div>

          {/* Accordion List */}
          <div className="space-y-3">
            {clinicFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    className="w-full flex items-center justify-between p-5 text-left font-bold text-[#0F2A2A] text-sm sm:text-base hover:text-[#0E7C73] transition-colors gap-4"
                  >
                    <span>{faq.question}</span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#0E7C73] text-white rotate-180"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-150"
                    >
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom WhatsApp Ask Card */}
          <div className="mt-10 p-6 rounded-3xl bg-white border border-[#0E7C73]/20 shadow-md text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <h4 className="font-bold text-sm text-gray-900">
                Have a specific health condition or report to discuss?
              </h4>
              <p className="text-xs text-gray-500 mt-0.5">
                Our consultant doctors are available directly on WhatsApp to answer your clinical doubts.
              </p>
            </div>
            <a
              href={getWhatsAppLink("Hello Doctors, I have a question regarding my condition that wasn't in the FAQ...")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-[#25D366] hover:bg-[#20ba59] transition-all shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
