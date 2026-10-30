/**
 * Wedding Event Details & Calendar Utilities
 * Ahmad Khan & Ghazala Aslam Wedding
 * Barat: Saturday, 28th November 2026
 * Walima: Sunday, 29th November 2026
 */

export interface EventDetail {
  id: 'barat' | 'walima';
  title: string;
  ceremonyName: string;
  dateDisplay: string;
  dateIso: string;
  startUtc: string;
  endUtc: string;
  targetDateIso: string;
  timings: {
    highlight1: { label: string; time: string };
    highlight2: { label: string; time: string };
  };
  venueName: string;
  venueAddress: string;
  mapsSearchUrl: string;
}

export const WEDDING_DATA = {
  groom: "Ahmad Khan",
  bride: "Ghazala Aslam",
  monogram: "A & G",
  bismillahArabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
  invitationIntro: "In the name of Allah, the Most Beneficent, the Most Merciful",
  familyIntro: "Together with their respected families, cordially invite you to celebrate the joyous wedding ceremonies of their beloved",
  rsvpTitle: "All Family Members, Cousins, Brothers & Sisters",
  contacts: [
    {
      label: "Direct RSVP Call & WhatsApp",
      phone: "0300-4738429",
      waNumber: "923004738429",
    },
    {
      label: "Inquiries & RSVP",
      phone: "0307-8866645",
      waNumber: "923078866645",
    },
  ],
  events: {
    barat: {
      id: "barat",
      title: "Barat Ceremony — Ahmad Khan & Ghazala Aslam",
      ceremonyName: "Barat Ceremony",
      dateDisplay: "Saturday, 28th November 2026",
      dateIso: "2026-11-28",
      // PKT is UTC+5. 12:00 PM PKT = 07:00 UTC. 5:00 PM PKT = 12:00 UTC.
      startUtc: "20261128T070000Z",
      endUtc: "20261128T120000Z",
      targetDateIso: "2026-11-28T12:00:00+05:00",
      timings: {
        highlight1: { label: "Sehra Bandi", time: "12:00 PM" },
        highlight2: { label: "Departure", time: "1:00 PM" },
      },
      venueName: "Arifabad Tall wali Street",
      venueAddress: "Arifabad Tall wali Street, Bhata Chowk, Bedian Road, Lahore Cantt.",
      mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Arifabad+Bhata+Chowk+Bedian+Road+Lahore+Cantt",
    } as EventDetail,
    walima: {
      id: "walima",
      title: "Walima Ceremony — Ahmad Khan & Ghazala Aslam",
      ceremonyName: "Walima Ceremony",
      dateDisplay: "Sunday, 29th November 2026",
      dateIso: "2026-11-29",
      // PKT is UTC+5. 12:00 PM PKT = 07:00 UTC. 4:00 PM PKT = 11:00 UTC.
      startUtc: "20261129T070000Z",
      endUtc: "20261129T110000Z",
      targetDateIso: "2026-11-29T12:00:00+05:00",
      timings: {
        highlight1: { label: "Reception", time: "12:00 PM" },
        highlight2: { label: "Lunch", time: "1:00 PM" },
      },
      venueName: "Royal Palace Banquet Hall",
      venueAddress: "Royal Palace Banquet Hall, Near Ali View Garden, Bedian Road, Lahore Cantt.",
      mapsSearchUrl: "https://www.google.com/maps/search/?api=1&query=Royal+Palace+Banquet+Hall+Bedian+Road+Lahore+Cantt",
    } as EventDetail,
  },
};

export function getGoogleCalendarUrl(event: EventDetail): string {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.title,
    dates: `${event.startUtc}/${event.endUtc}`,
    details: `${event.ceremonyName} of Ahmad Khan & Ghazala Aslam. Venue: ${event.venueAddress}. Timings: ${event.timings.highlight1.label}: ${event.timings.highlight1.time}, ${event.timings.highlight2.label}: ${event.timings.highlight2.time}.`,
    location: event.venueAddress,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

export function downloadIcsFile(event: EventDetail): void {
  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Ahmad Khan and Ghazala Aslam Wedding//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${event.title}`,
    `DESCRIPTION:${event.ceremonyName} of Ahmad Khan and Ghazala Aslam at ${event.venueAddress}. ${event.timings.highlight1.label}: ${event.timings.highlight1.time}, ${event.timings.highlight2.label}: ${event.timings.highlight2.time}.`,
    `LOCATION:${event.venueAddress}`,
    `DTSTART:${event.startUtc}`,
    `DTEND:${event.endUtc}`,
    "STATUS:CONFIRMED",
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${event.id}-ahmad-ghazala-wedding.ics`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
