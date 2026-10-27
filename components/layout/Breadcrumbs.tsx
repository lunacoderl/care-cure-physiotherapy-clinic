import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { generateBreadcrumbSchema } from "@/lib/seo";

export interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  const schemaItems = allItems.map((item) => ({
    name: item.label,
    url: item.href,
  }));

  return (
    <>
      <JsonLd data={generateBreadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="py-3 px-1">
        <ol className="flex items-center flex-wrap gap-1.5 text-xs text-gray-500 font-medium">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={item.href} className="inline-flex items-center gap-1.5">
                {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-gray-400 shrink-0" />}

                {isLast ? (
                  <span
                    aria-current="page"
                    className="font-bold text-[#0E7C73] truncate max-w-[200px] sm:max-w-none"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#0E7C73] transition-colors inline-flex items-center gap-1"
                  >
                    {index === 0 && <Home className="w-3.5 h-3.5" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
