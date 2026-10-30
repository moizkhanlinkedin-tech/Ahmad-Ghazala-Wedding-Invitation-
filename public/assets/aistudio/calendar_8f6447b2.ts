/**
 * Calendar utilities for Soban & Tasmiya's Wedding
 * Sunday, 31 January 2027, 6:00 PM – 10:00 PM PKT (UTC+5)
 */

export const EVENT_DETAILS = {
  title: "Wedding of Soban & Tasmiya",
  description: "An evening of vows, dinner and celebration as Soban and Tasmiya begin their life together. Milano Event Complex, Lahore.",
  location: "Milano Event Complex, Lahore, Punjab, Pakistan",
  // Start: 2027-01-31 18:00 PKT (13:00 UTC)
  // End: 2027-01-31 22:00 PKT (17:00 UTC)
  startUtc: "20270131T130000Z",
  endUtc: "20270131T170000Z",
  targetDateIso: "2027-01-31T18:00:00+05:00",
  whatsappNumber: "923008444966",
  phoneNumber: "03008444966",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Milano+Event+Complex+Lahore",
};

export function getGoogleCalendarUrl(): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: EVENT_DETAILS.title,
    dates: `${EVENT_DETAILS.startUtc}/${EVENT_DETAILS.endUtc}`,
    details: EVENT_DETAILS.description,
    location: EVENT_DETAILS.location,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(): void {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Soban and Tasmiya Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${EVENT_DETAILS.title}`,
    `DESCRIPTION:${EVENT_DETAILS.description}`,
    `LOCATION:${EVENT_DETAILS.location}`,
    `DTSTART:${EVENT_DETAILS.startUtc}`,
    `DTEND:${EVENT_DETAILS.endUtc}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", "Soban-and-Tasmiya-Wedding.ics");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
