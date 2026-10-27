"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, X, Check } from "lucide-react";

export function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem("care_cure_cookie_consent");
    if (!consent) {
      // Delay slightly for smooth entrance
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("care_cure_cookie_consent", "all");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("care_cure_cookie_consent", "essential");
    setVisible(false);
  };

  if (!mounted || !visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-xl bg-[#0E7C73]/10 text-[#0E7C73] shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-bold text-gray-900">Your Privacy & Cookies</h4>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            We use essential cookies to maintain clinic timings and secure appointment navigation.
            Analytics and interactive maps load only upon consent.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-3 pt-1">
            <button
              type="button"
              onClick={handleAccept}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#0E7C73] hover:bg-[#0c6b63] transition-colors"
            >
              <Check className="w-3.5 h-3.5" />
              Accept All
            </button>
            <button
              type="button"
              onClick={handleReject}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Essential Only
            </button>
            <Link
              href="/cookie-policy"
              className="text-xs text-gray-500 hover:text-[#0E7C73] underline ml-auto"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
        <button
          type="button"
          onClick={handleReject}
          aria-label="Close cookie notice"
          className="text-gray-400 hover:text-gray-600 p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
