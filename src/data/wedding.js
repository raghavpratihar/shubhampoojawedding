// All invitation content lives here. Edit this file to change names, dates, events or venue.

const img = (name) => `${import.meta.env.BASE_URL}images/${name}`;

export const couple = {
  groom: "Shubham",
  bride: "Pooja",
  groomLineage: "Grand S/o Late Mrs. Prabha Devi & Late Mr. Chhail Bihari Bhatnagar",
  brideLineage: "D/o Mrs. Rukmani & Mr. Guljari Lal Yadav",
  hashtag: "#ShubhamWedsPooja",
};

export const hosts = {
  names: "Mrs. Rajni & Mr. Arvind Bhatnagar",
  address: ["H.No. 19/5, Spring Field Colony", "Sector-32, Faridabad - 121003 (Hr.)"],
  phones: ["7011108760", "8375988430", "8368173703"],
};

export const shlokas = [
  ["वक्रतुण्ड महाकाय, सूर्यकोटि समप्रभः।", "निर्विघ्नं कुरु मे देव, सर्वकार्येषु सर्वदा॥"],
  ["विघ्नहरण मंगल करण, श्री गणपति महाराज।", "प्रथम निमन्त्रण आपको, पूरण कीजै काज॥"],
];

export const weddingDate = {
  label: "Friday, 27th November 2026",
  short: "27th Nov 2026",
  scratchReveal: "27th Nov 2026",
  // Countdown target (IST)
  countdownTarget: "2026-11-27T00:00:00+05:30",
};

export const residence = {
  label: "All Functions",
  name: "Bhatnagar Residence",
  address: "H.No. 19/5, Spring Field Colony, Sector-32, Faridabad - 121003 (Hr.)",
  // Exact pin shared by the family
  mapQuery: "28.449648,77.316170",
};

export const venue = {
  label: "Wedding (Reassemble of Barat)",
  name: "Girraj Sharma Farm House",
  address: "Ashoka Enclave, Faridabad - 121003",
  mapQuery: "Girraj Sharma Farm House, Ashoka Enclave, Faridabad",
};

export const locations = [residence, venue];

const at = (place) => `${place.name}, ${place.address}`;

export const eventDays = [
  {
    day: "Thursday, 26th November 2026",
    events: [
      { title: "Haldi", desc: "A golden beginning to a beautiful journey", time: "10:00 AM", image: img("haldi.png"), venue: at(residence) },
      { title: "Mehendi", desc: "Henna, laughter and colours of love", time: "6:00 PM", image: img("mehendi.png"), venue: at(residence) },
      { title: "Sangeet", desc: "A night of music, dance and cherished memories", time: "7:00 PM", image: img("sanget.png"), venue: at(residence) },
    ],
  },
  {
    day: "Friday, 27th November 2026",
    events: [
      { title: "Sehrabandi & Ghurchari", desc: "The groom dons the sehra and mounts the ghodi", time: "5:00 PM", image: img("varmal.png"), venue: at(residence) },
      { title: "Departure of Barat", desc: "The baraat sets off with music and dance", time: "6:00 PM", image: img("recept.jpg"), venue: at(residence) },
      { title: "Reassemble of Barat", desc: "The baraat gathers for the wedding ceremony", time: "7:00 PM", image: img("phere.png"), venue: at(venue) },
    ],
  },
];

export const rsvp = [
  "Sachin Bhatnagar (Chacha)",
  "Mahabir Prasad Srivastav (Mama)",
  "Nitish Bhatnagar (Bhai)",
  "Rajiv Bhatnagar",
];

export const compliments = ["Vidhi Bhatnagar with", "All Bhatnagar Family", "& Friends"];

export const awaitingEyes = "Arien, Arnav, Prisha & Pratiyush";
