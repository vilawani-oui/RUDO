// Add new pieces here. Each one needs: id, type, hook, contributor, language, fullText, sources.
// type is always "text" for now — video/audio/image get added as new types later without touching the app code.
const PIECES = [
  {
    id: "p1",
    type: "text",
    category: "Fiction",
    language: "Yoruba / EN",
    hook: "The market closes at Nkwo, but her mother's stall never learned the calendar.",
    contributor: "Tolu Adeyemi",
    readTime: "6 min",
    fullText: "The market closes at Nkwo, but her mother's stall never learned the calendar. Every fourth day the square emptied around her, cassava piled high, waiting on customers who had already gone home to rest their feet before the next cycle began...",
    sources: [
      { label: "Read via library", type: "library", url: "" },
      { label: "Buy at bookstore", type: "bookstore", url: "" },
      { label: "Continue on Rudo", type: "native", url: "" }
    ]
  },
  {
    id: "p2",
    type: "text",
    category: "Oral history",
    language: "Igbo / EN",
    hook: "My grandmother counted years in Afo cycles, never in twelves.",
    contributor: "Chidinma Okoye",
    readTime: "4 min",
    fullText: "My grandmother counted years in Afo cycles, never in twelves. She would tell us the story of the year the rains came late, and none of us understood which Gregorian year she meant until much later...",
    sources: [
      { label: "Read via library", type: "library", url: "" },
      { label: "Continue on Rudo", type: "native", url: "" }
    ]
  },
  {
    id: "p3",
    type: "text",
    category: "Opinion",
    language: "French / EN",
    hook: "On m'a appris a bien parler avant qu'on m'apprenne a bien vivre.",
    contributor: "Amara Diallo",
    readTime: "5 min",
    fullText: "On m'a appris a bien parler avant qu'on m'apprenne a bien vivre. It took me years to understand that the two are not the same skill, and that fluency in a language is not fluency in a life...",
    sources: [
      { label: "Buy at bookstore", type: "bookstore", url: "" },
      { label: "Continue on Rudo", type: "native", url: "" }
    ]
  },
  {
    id: "p4",
    type: "text",
    category: "Fiction",
    language: "English",
    hook: "He kept two calendars in his wallet: one for rent, one for remembering.",
    contributor: "Kwame Boateng",
    readTime: "7 min",
    fullText: "He kept two calendars in his wallet: one for rent, one for remembering. The first was creased and official, dates circled in red. The second was a napkin, folded so many times the ink had started to bleed through...",
    sources: [
      { label: "Read via library", type: "library", url: "" },
      { label: "Continue on Rudo", type: "native", url: "" }
    ]
  }
];
