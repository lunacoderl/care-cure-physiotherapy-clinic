"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ShieldAlert,
  CheckCircle,
  HelpCircle,
  Sparkles,
} from "lucide-react";

interface BodyRegion {
  id: string;
  name: string;
  title: string;
  serviceSlug: string;
  symptoms: string[];
  treatmentSummary: string;
  quoteSnippet: string;
  xPercent: number; // For desktop anatomical visual
  yPercent: number;
}

const bodyRegions: BodyRegion[] = [
  {
    id: "lower-back",
    name: "Lower Back & Sciatica",
    title: "Lumbar Spine, Disc Bulge & Sciatic Nerve",
    serviceSlug: "back-pain-physiotherapy",
    symptoms: [
      "Shooting pain radiating down into buttocks and leg (Sciatica)",
      "Severe morning stiffness or pain after sitting for 30 minutes",
      "L4-L5 / L5-S1 disc herniation confirmed on MRI",
      "Inability to bend forward or tie shoe laces without spasms",
    ],
    treatmentSummary:
      "Targeted McKenzie directional therapy, segmental vertebral mobilization, and deep multifidus core stabilization to relieve nerve compression without surgery.",
    quoteSnippet: '"He is very honest in explaining your condition and remarks."',
    xPercent: 50,
    yPercent: 48,
  },
  {
    id: "knee",
    name: "Knee & Meniscus",
    title: "Knee Joint, Meniscus & Osteoarthritis",
    serviceSlug: "knee-pain-and-meniscus-care",
    symptoms: [
      "Sharp pain, catching, or clicking sound when climbing stairs",
      "Medial or lateral meniscus tear from sports or twisting",
      "Grating, grinding, or morning swelling (Osteoarthritis)",
      "Knee feeling weak, unstable, or giving way under weight",
    ],
    treatmentSummary:
      "Manual patellofemoral glides, VMO muscle strengthening, proprioceptive balance board drills, and joint distraction to rebuild pain-free walking mechanics.",
    quoteSnippet: '"TKR Lt knee post-surgery rehabilitation guided step-by-step."',
    xPercent: 44,
    yPercent: 72,
  },
  {
    id: "neuro",
    name: "Neurological & Stroke",
    title: "Brain Stroke, Paralysis & Hemiplegia",
    serviceSlug: "stroke-and-neuro-rehabilitation",
    symptoms: [
      "Loss of voluntary movement in arm or leg following a stroke",
      "Abnormal muscle stiffness (spasticity) or drop foot",
      "Difficulty sitting balance, standing, or walking independently",
      "Bell's palsy facial weakness or Parkinson's tremors",
    ],
    treatmentSummary:
      "Neuroplasticity re-learning via Bobath therapy, constraint-induced movement training, neuromuscular electrical stimulation (NMES), and assisted gait progression.",
    quoteSnippet: '"My husband had brain stroke and got paralysis. Dr. Harish Patnaik helped to recovery."',
    xPercent: 50,
    yPercent: 12,
  },
  {
    id: "sports",
    name: "Sports & Ligaments",
    title: "Athletic Injuries, ACL & Muscle Tears",
    serviceSlug: "sports-injury-rehabilitation",
    symptoms: [
      "ACL, MCL, or ankle ligament sprain during sports",
      "Hamstring, calf, or groin muscle strains while running",
      "Tennis / golfer’s elbow or rotator cuff shoulder impingement",
      "Loss of explosive power, cutting agility, or jumping confidence",
    ],
    treatmentSummary:
      "Biomechanics screening, instrument-assisted soft tissue mobilization, eccentric tendon loading, and high-velocity plyometric return-to-sport protocols.",
    quoteSnippet: '"The customized sports rehab protocol got me back running without surgery."',
    xPercent: 62,
    yPercent: 35,
  },
  {
    id: "post-surgery",
    name: "Post-Surgery Recovery",
    title: "TKR, Hip Arthroplasty & Bone Fractures",
    serviceSlug: "post-surgery-rehabilitation",
    symptoms: [
      "Total Knee Replacement (TKR) or Total Hip Replacement (THR)",
      "Post-operative joint stiffness and restricted bend/straightening",
      "Rehabilitation following plaster cast removal or surgical plates",
      "Severe quad lag and difficulty transferring out of bed",
    ],
    treatmentSummary:
      "Gentle passive range of motion, surgical scar desensitization, lymphatic edema drainage, and structured progression from walker to unassisted walking.",
    quoteSnippet: '"He is very polite towards the patients. A trust worthy physiotherapist."',
    xPercent: 38,
    yPercent: 60,
  },
  {
    id: "home",
    name: "In-Home Therapy",
    title: "Bedridden, Geriatric & Home Visits",
    serviceSlug: "in-home-physiotherapy",
    symptoms: [
      "Inability to travel or climb clinic stairs due to severe weakness",
      "Elderly parents needing gentle balance and mobility training",
      "Immediate post-operative days after hospital discharge",
      "Patients needing rehabilitation in their real home environment",
    ],
    treatmentSummary:
      "Portable medical electrotherapy, bed-to-chair transfer retraining, indoor gait facilitation, and family caregiver training directly at your doorstep in Vizag.",
    quoteSnippet: '"Dr. Harish came personally with equipment and immense patience."',
    xPercent: 50,
    yPercent: 88,
  },
];

export function BodyMapNavigator() {
  const [selectedId, setSelectedId] = useState<string>("lower-back");

  const currentRegion =
    bodyRegions.find((r) => r.id === selectedId) || bodyRegions[0];

  return (
    <section
      id="body-map"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#F7FBFA]"
      aria-label="Interactive Body Map Symptom Navigator"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Symptom Navigator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Where is your pain or mobility limited?
          </h2>
          <p className="text-base text-gray-600 mt-3">
            Select an area below to see how Dr. Harish Patnaik identifies the root cause and restores pain-free movement.
          </p>
        </div>

        {/* Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left / Selector Panel (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-2.5">
            <p className="text-xs font-bold uppercase tracking-wider text-gray-400 px-1 mb-2">
              Select Affected Region
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
              {bodyRegions.map((region) => {
                const isSelected = region.id === selectedId;
                return (
                  <button
                    key={region.id}
                    type="button"
                    onClick={() => setSelectedId(region.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl text-left transition-all border ${
                      isSelected
                        ? "bg-[#0E7C73] text-white border-[#0E7C73] shadow-lg shadow-[#0E7C73]/20 scale-[1.02]"
                        : "bg-white text-gray-800 border-gray-200/80 hover:border-[#0E7C73]/40 hover:bg-[#F7FBFA]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected
                            ? "bg-white/20 text-white"
                            : "bg-[#0E7C73]/10 text-[#0E7C73]"
                        }`}
                      >
                        <Activity className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-sm font-bold block">
                          {region.name}
                        </span>
                        <span
                          className={`text-xs block line-clamp-1 ${
                            isSelected ? "text-teal-100" : "text-gray-500"
                          }`}
                        >
                          {region.title}
                        </span>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform ${
                        isSelected ? "text-white translate-x-1" : "text-gray-400"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right / Dynamic Detail Showcase (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#0E7C73]/15 shadow-xl relative overflow-hidden">
            {/* Top Badge */}
            <div className="flex items-center justify-between pb-4 border-b border-gray-100 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold px-3 py-1 rounded-full bg-[#0E7C73]/10 text-[#0E7C73]">
                <Activity className="w-3.5 h-3.5" />
                <span>Specialized Diagnosis</span>
              </span>
              <span className="text-xs font-semibold text-gray-400">
                Dr. Harish Patnaik Protocol
              </span>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F2A2A] font-['Plus_Jakarta_Sans',sans-serif]">
              {currentRegion.title}
            </h3>

            {/* Patient Review Quote Callout */}
            <blockquote className="my-5 p-4 rounded-2xl bg-[#F7FBFA] border-l-4 border-[#FF6B5B] text-xs sm:text-sm font-medium text-gray-700 italic">
              {currentRegion.quoteSnippet}
              <span className="block not-italic text-[11px] font-bold text-gray-500 mt-1">
                — Verified Google Review, Care & Cure Clinic
              </span>
            </blockquote>

            {/* Typical Symptoms Checked */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">
                Common Symptoms We Target & Treat:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {currentRegion.symptoms.map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                  >
                    <CheckCircle className="w-4 h-4 text-[#0E7C73] shrink-0 mt-0.5" />
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How Care & Cure Treats It */}
            <div className="p-4 rounded-2xl bg-[#0E7C73]/5 border border-[#0E7C73]/15 mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0E7C73] mb-1.5">
                Treatment Approach
              </h4>
              <p className="text-xs sm:text-sm text-gray-800 leading-relaxed">
                {currentRegion.treatmentSummary}
              </p>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
              <Link
                href={`/services/${currentRegion.serviceSlug}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-white bg-[#0E7C73] hover:bg-[#0c6b63] shadow-md transition-all text-sm"
              >
                <span>Read In-Depth Treatment Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#booking"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-gray-800 bg-gray-100 hover:bg-gray-200 transition-colors text-sm"
              >
                <span>Book Evaluation for This</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
