import React from "react";
import {
  FileSearch,
  ClipboardList,
  HandMetal,
  Dumbbell,
  Smile,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export function RecoveryPath() {
  const steps = [
    {
      step: "01",
      icon: FileSearch,
      title: "Comprehensive Clinical Assessment",
      subtitle: "30–45 Mins with Dr. Harish",
      description:
        "We review your imaging (MRI/X-ray), assess joint range of motion, muscle inhibition, nerve tension, and postural biomechanics.",
    },
    {
      step: "02",
      icon: ClipboardList,
      title: "Tailored Rehabilitation Roadmap",
      subtitle: "Honest Explanation & Milestones",
      description:
        "We explain the root cause in plain language and outline a realistic, phased roadmap tailored to your body's healing timeline.",
    },
    {
      step: "03",
      icon: HandMetal,
      title: "Specialized Hands-On Therapy",
      subtitle: "Relieving Pain & Joint Restriction",
      description:
        "Precise manual joint mobilization, soft tissue release, and targeted electro-modalities relieve acute muscle guarding and inflammation.",
    },
    {
      step: "04",
      icon: Dumbbell,
      title: "Motor Control & Home Exercises",
      subtitle: "Rebuilding Joint Stability",
      description:
        "Active exercises strengthen deep stabilizer muscles (core, VMO, glutes, or paretic limbs) to permanently restore movement control.",
    },
    {
      step: "05",
      icon: Smile,
      title: "Return to Independence & Activity",
      subtitle: "Relapse-Proof Daily Living",
      description:
        "You resume work, sports, climbing stairs, and lifting safely, equipped with personalized ergonomic guidance to prevent recurrence.",
    },
  ];

  return (
    <section id="recovery-path" className="py-16 sm:py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#0E7C73]/10 text-[#0E7C73] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Care & Cure Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F2A2A] tracking-tight font-['Plus_Jakarta_Sans',sans-serif]">
            Your 5-Stage Path to Pain-Free Movement
          </h2>
          <p className="text-base text-gray-600 mt-3">
            Rehabilitation is a structured process. Here is what happens from your very first consultation through to complete functional independence.
          </p>
        </div>

        {/* 5-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-[#F7FBFA] rounded-3xl p-6 border border-gray-100 hover:border-[#0E7C73]/30 hover:shadow-lg transition-all duration-200 flex flex-col justify-between relative group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-[#0E7C73]/30 font-['Plus_Jakarta_Sans',sans-serif] group-hover:text-[#0E7C73] transition-colors">
                    {item.step}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white text-[#0E7C73] flex items-center justify-center shadow-sm border border-gray-100">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-1.5 mb-2">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#0E7C73] transition-colors font-['Plus_Jakarta_Sans',sans-serif]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-bold text-[#0E7C73] uppercase tracking-wide">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-gray-600 leading-relaxed pt-1">
                    {item.description}
                  </p>
                </div>

                {/* Bottom line marker */}
                <div className="pt-4 mt-2 border-t border-gray-200/50 flex items-center justify-between text-[11px] font-semibold text-gray-500">
                  <span>Stage {index + 1} of 5</span>
                  {index < steps.length - 1 ? (
                    <span className="text-gray-400">Next →</span>
                  ) : (
                    <span className="text-emerald-600 font-bold">Goal ✓</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
