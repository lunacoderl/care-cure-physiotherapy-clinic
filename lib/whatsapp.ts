import { siteConfig } from "@/content/site";

export interface BookingFormData {
  fullName: string;
  phone: string;
  service: string;
  preferredDate?: string;
  preferredTime?: string;
  notes?: string;
}

/**
 * Creates a sanitized wa.me link with prefilled consultation text.
 */
export function getWhatsAppLink(customMessage?: string): string {
  const defaultText = `Hello Dr. Hareesh & Dr. Reshma, I would like to inquire about an appointment at Care & Cure Physiotherapy Clinic, Malkapuram.`;
  const text = customMessage || defaultText;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text.trim())}`;
}

/**
 * Creates a service-specific WhatsApp booking link.
 */
export function getServiceWhatsAppLink(serviceTitle: string): string {
  const text = `Hello Doctor, I would like to consult with you regarding ${serviceTitle} at Care & Cure Physiotherapy Clinic, Malkapuram. Please let me know available slots.`;
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text.trim())}`;
}

/**
 * Formats a submitted appointment request form into an encoded WhatsApp message.
 */
export function buildBookingWhatsAppUrl(data: BookingFormData): string {
  const lines = [
    `*New Appointment Request — Care & Cure Physiotherapy*`,
    `----------------------------------------`,
    `*Patient Name:* ${data.fullName.trim()}`,
    `*Phone:* ${data.phone.trim()}`,
    `*Concern / Service:* ${data.service}`,
    data.preferredDate ? `*Preferred Date:* ${data.preferredDate}` : null,
    data.preferredTime ? `*Preferred Time Slot:* ${data.preferredTime}` : null,
    data.notes ? `*Symptoms / Notes:* ${data.notes.trim()}` : null,
    `----------------------------------------`,
    `Sent from careandcurephysio.in website`,
  ].filter(Boolean);

  const text = lines.join("\n");
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(text)}`;
}
