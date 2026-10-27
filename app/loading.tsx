import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-pulse">
      {/* Hero Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="h-6 w-48 bg-gray-200 rounded-full" />
          <div className="h-12 w-full max-w-lg bg-gray-200 rounded-2xl" />
          <div className="h-6 w-3/4 bg-gray-200 rounded-xl" />
          <div className="h-24 w-full bg-gray-100 rounded-2xl" />
          <div className="flex gap-4 pt-2">
            <div className="h-12 w-40 bg-gray-200 rounded-xl" />
            <div className="h-12 w-32 bg-gray-200 rounded-xl" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="h-80 w-full bg-gray-200 rounded-3xl" />
        </div>
      </div>

      {/* Trust Strip Skeleton */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="h-20 bg-gray-100 rounded-2xl" />
        ))}
      </div>
    </div>
  );
}
