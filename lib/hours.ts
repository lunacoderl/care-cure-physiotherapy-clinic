import { siteConfig } from "@/content/site";

export interface ClinicStatus {
  isOpen: boolean;
  badgeText: string;
  subText: string;
}

/**
 * Computes current clinic status based on Asia/Kolkata timezone.
 */
export function getClinicStatus(): ClinicStatus {
  try {
    const now = new Date();
    // Format to Asia/Kolkata
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Kolkata",
      hour12: false,
      weekday: "long",
      hour: "numeric",
      minute: "numeric",
    });

    const parts = formatter.formatToParts(now);
    const weekday = parts.find((p) => p.type === "weekday")?.value || "Monday";
    const hour = parseInt(parts.find((p) => p.type === "hour")?.value || "12", 10);
    const minute = parseInt(parts.find((p) => p.type === "minute")?.value || "0", 10);
    const currentMinutes = hour * 60 + minute;

    const schedule = siteConfig.hours.find(
      (h) => h.day.toLowerCase() === weekday.toLowerCase()
    );

    if (!schedule || schedule.isClosed) {
      return {
        isOpen: false,
        badgeText: "Closed Now",
        subText: "Opens 10:30 AM Tomorrow",
      };
    }

    const [openH, openM] = schedule.open.split(":").map(Number);
    const [closeH, closeM] = schedule.close.split(":").map(Number);

    const openMinutes = openH * 60 + openM;
    const closeMinutes = closeH * 60 + closeM;

    if (currentMinutes >= openMinutes && currentMinutes < closeMinutes) {
      // Format closing time in 12h
      const closeHour12 = closeH > 12 ? closeH - 12 : closeH;
      const ampm = closeH >= 12 ? "PM" : "AM";
      const formattedClose = `${closeHour12}:${closeM.toString().padStart(2, "0")} ${ampm}`;

      return {
        isOpen: true,
        badgeText: "Open Now",
        subText: `Closes at ${formattedClose}`,
      };
    } else if (currentMinutes < openMinutes) {
      const openHour12 = openH > 12 ? openH - 12 : openH;
      const ampm = openH >= 12 ? "PM" : "AM";
      const formattedOpen = `${openHour12}:${openM.toString().padStart(2, "0")} ${ampm}`;

      return {
        isOpen: false,
        badgeText: "Opens Today",
        subText: `Opens at ${formattedOpen}`,
      };
    } else {
      return {
        isOpen: false,
        badgeText: "Closed for the day",
        subText: "Opens 10:30 AM Tomorrow",
      };
    }
  } catch (err) {
    // Fallback if Intl fails
    return {
      isOpen: true,
      badgeText: "Open Mon–Sat",
      subText: "10:30 AM – 9:00 PM",
    };
  }
}
