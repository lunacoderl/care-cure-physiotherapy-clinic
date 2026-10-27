import { siteConfig } from "@/content/site";
import { ServiceDetail } from "@/content/services";
import { FAQItem } from "@/content/faqs";

export function generateClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icons/icon.svg`,
    image: `${siteConfig.url}/images/clinic-exterior.jpg`,
    telephone: siteConfig.contact.phoneRaw,
    priceRange: "₹₹",
    medicalSpecialty: [
      "PhysicalTherapy",
      "Physiotherapy",
      "NeurologicalRehabilitation",
      "OrthopedicRehabilitation",
      "SportsMedicine",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.locality,
      addressRegion: siteConfig.contact.address.state,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.contact.geo.latitude,
      longitude: siteConfig.contact.geo.longitude,
    },
    openingHoursSpecification: siteConfig.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${h.day}`,
      opens: h.open,
      closes: h.close,
    })),
    physician: {
      "@type": "Physician",
      name: siteConfig.doctor.name,
      jobTitle: siteConfig.doctor.title,
      medicalSpecialty: "PhysicalTherapy",
    },
    areaServed: siteConfig.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    sameAs: [
      siteConfig.contact.googleMapsUrl,
      siteConfig.socials.facebook,
      siteConfig.socials.instagram,
    ],
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function generateServiceSchema(service: ServiceDetail) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalTherapy",
    name: service.title,
    description: service.heroDescription,
    provider: {
      "@type": "MedicalClinic",
      name: siteConfig.name,
      telephone: siteConfig.contact.phoneRaw,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.contact.address.street,
        addressLocality: siteConfig.contact.address.locality,
        addressRegion: siteConfig.contact.address.state,
        postalCode: siteConfig.contact.address.postalCode,
        addressCountry: siteConfig.contact.address.country,
      },
    },
    bodyLocation: service.bodyArea,
    url: `${siteConfig.url}/services/${service.slug}`,
  };
}

export function generateFaqSchema(faqs: { question: string; answer: string }[] | FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
