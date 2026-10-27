import React from "react";

export default function ServiceLoading() {
  return (
    <div className="min-h-screen pt-28 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-pulse">
      <div className="h-6 w-32 bg-gray-200 rounded-md" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-4">
          <div className="h-10 w-3/4 bg-gray-200 rounded-xl" />
          <div className="h-6 w-1/2 bg-gray-200 rounded-lg" />
          <div className="h-32 w-full bg-gray-100 rounded-2xl" />
          <div className="flex gap-4">
            <div className="h-12 w-44 bg-gray-200 rounded-xl" />
            <div className="h-12 w-36 bg-gray-200 rounded-xl" />
          </div>
        </div>
        <div className="lg:col-span-4">
          <div className="h-64 bg-gray-100 rounded-3xl" />
        </div>
      </div>
    </div>
  );
}
