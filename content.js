/* ================================================================
   KREM CHYMPE — SITE CONTENT
   ================================================================
   This is the ONLY file you should ever need to edit.
   Everything visitors see — every sentence, every photo, every
   link — is set right here as plain text.

   HOW TO EDIT:
   - Text goes between "double quotes". Change the words inside
     the quotes, leave everything else (commas, brackets, colons)
     exactly as it is.
   - To add a new photo to a gallery/list, copy one whole line that
     starts with "{" down to the matching "}," and paste it as a
     new line, then change the text inside.
   - To remove one, delete its whole "{ ... }," block.
   - Never delete a comma at the end of a line unless it's the very
     last item in a list.
   - If you break something, compare against a backup of this file
     — every line here is independent, so one typo won't usually
     break the rest of the site, but it's still good practice.

   Photos live in the "images" folder next to this file. To use a
   new photo: drop the file into "images/", then type its filename
   (e.g. "images/my-new-photo.jpg") wherever you want it to appear.
   ================================================================ */

window.KC_CONTENT = {

  // ---------------------------------------------------------------
  // SITE-WIDE SETTINGS — logo, WhatsApp number, Instagram
  // ---------------------------------------------------------------
  site: {
    name: "Krem Chympe",
    logo: "images/logo.png",

    // Digits only, with country code, no + and no spaces.
    // Example: 91 then the 10-digit number = 916001877518
    whatsappNumber: "916001877518",

    // The message that's pre-filled when someone taps a WhatsApp button.
    whatsappMessage: "Hi! I'd like to know more about visiting Krem Chympe.",

    instagramHandle: "@unexplored_meghalaya",
    instagramUrl: "https://www.instagram.com/unexplored_meghalaya?igsh=ZHZpODB3aXl0bXBu",

    footerAddress: "Khaddum Village, East Jaintia Hills, Meghalaya"
  },

  // ---------------------------------------------------------------
  // TOP NAVIGATION MENU — the links in the header
  // ---------------------------------------------------------------
  navLinks: [
    { label: "The Place",       href: "#place" },
    { label: "The Founder",     href: "#founder" },
    { label: "Activities",      href: "#activities" },
    { label: "Gallery",         href: "#gallery" },
    { label: "Safety & Season", href: "#safety" }
  ],
  navButtonLabel: "Enquire",

  // ---------------------------------------------------------------
  // HERO — the very first thing visitors see
  // ---------------------------------------------------------------
  hero: {
    backgroundImage: "images/blue-waterfall.jpg",
    backgroundImageAlt: "Chympe waterfall falling into a turquoise pool, surrounded by rainforest",

    eyebrow: "Khaddum Village · East Jaintia Hills · Meghalaya",

    // Wrap any word or phrase in { curly braces } to make it stand
    // out in gold italics, like {this}. Use \n to start a new line.
    headline: "One of India's five longest caves.\nA fish that lost its eyes in the dark.\nA village that chose {this} over the mines.",

    subtext: "Krem Chympe — the cave and the waterfall share the name, and the rainforest around Khaddum village still stands because of it.",

    scrollLabel: "Scroll"
  },

  // ---------------------------------------------------------------
  // THE PLACE — what Krem Chympe is
  // ---------------------------------------------------------------
  place: {
    eyebrow: "The Place",
    heading: "Krem means cave. Chympe is the name of both.",

    // Each line below becomes its own paragraph. Add or remove lines freely.
    paragraphs: [
      "Deep in Meghalaya's rainforest, in Khaddum village, East Jaintia Hills, the Chympe cave runs further underground than almost anywhere else in India — and the waterfall that shares its name feeds the river that runs through it.",
      "Inside, in water that's never seen daylight, lives a fish with no eyes. It never needed them."
    ],

    // Short facts shown as a list. Add, remove, or edit freely.
    facts: [
      { label: "Cave",     value: "India's 5th longest cave system" },
      { label: "Resident", value: "An endemic, eyeless cave fish" },
      { label: "Village",  value: "Khaddum, East Jaintia Hills, Meghalaya" },
      { label: "Setting",  value: "Rainforest, limestone cave, twin river" }
    ],

    image: "images/cave-exploration.jpg",
    imageAlt: "Visitors standing at the mouth of Krem Chympe cave, arms raised"
  },

  // ---------------------------------------------------------------
  // THE FOUNDER
  // ---------------------------------------------------------------
  founder: {
    eyebrow: "The Founder",

    // The large italic pull-quote. Leave the photo field empty
    // ("") to show this as a text card instead — that's the
    // current look. Fill in a filename to show a real photo of
    // Senly instead of the text card.
    photo: "",
    photoAlt: "Senly Suchiang, founder of Krem Chympe",
    photoCardText: "\u201cThe forest was worth more standing than mined.\u201d",

    quote: "An engineer who looked at what the mines had done to the hills around him — and built something else instead.",

    paragraphs: [
      "Senly Suchiang grew up in these hills, in East Jaintia District. Trained as an engineer, he watched the factories and mines spread through the district around him — forests and land cleared for ore and minerals, one valley at a time.",
      "Khaddum, his own village, still had what those places had lost. A cave that ran for kilometres. A waterfall that fed it. A forest nobody had touched. Senly saw the beauty his village already held, and set out to build eco-tourism around it — a reason to keep Chympe wild, not mined."
    ],

    name: "Senly Suchiang",
    title: "Founder, Krem Chympe"
  },

  // ---------------------------------------------------------------
  // ACTIVITIES — each card needs a title, a photo, and alt text
  // (alt text is what's read aloud for visually-impaired visitors
  // and shown if the photo fails to load — describe what's in it)
  // ---------------------------------------------------------------
  activities: {
    eyebrow: "Activities",
    heading: "Above ground, underground, and everything in the water between.",
    intro: "Every activity here runs on local knowledge and a guide's judgement — not a fixed script. What's open on your visit depends on the water, the season, and safety on the day.",

    // Add a new activity card by copying one whole { ... } block.
    cards: [
      { title: "Bamboo Rafting",              image: "images/bamboo-rafting.jpg",   alt: "A guide poling a bamboo raft through a cave river at Krem Chympe" },
      { title: "Underground Natural Pool",    image: "images/underground-pool.jpg", alt: "Bamboo raft floating toward the mouth of the cave on turquoise water" },
      { title: "Cave Exploration",            image: "images/cave-exploration.jpg", alt: "Visitors exploring the entrance of Krem Chympe cave" },
      { title: "Cliff Jumping & Swimming",    image: "images/cliff-jumping.jpg",    alt: "Visitors swimming at the base of Chympe waterfall" },
      { title: "Trekking",                    image: "images/trekking.jpg",         alt: "A trail through a bamboo grove leading toward Krem Chympe" },
      { title: "Camping",                     image: "images/camping.jpg",          alt: "A tent pitched among rainforest roots by the riverbank" },
      { title: "Rock Formations & Photography", image: "images/photography.jpg",    alt: "A golden flowstone formation inside Krem Chympe cave" }
    ],

    // Activities listed as plain tags with no photo yet. Once you
    // have a photo for one, delete it from this list and add it to
    // "cards" above instead.
    alsoHereLabel: "Also here",
    alsoHere: [
      "Cave Diving",
      "Off-Roading",
      "Bridge Crossing — where two rivers of different colour meet"
    ]
  },

  // ---------------------------------------------------------------
  // GALLERY — a simple grid of photos. Add or remove freely.
  // ---------------------------------------------------------------
  gallery: {
    eyebrow: "Gallery",
    heading: "Chympe, in the light and out of it.",
    images: [
      { src: "images/waterfall-gallery.jpg", alt: "Wide view of Chympe waterfall and pool" },
      { src: "images/confluence.jpg",        alt: "A guide rafting through the cave river" },
      { src: "images/camping-2.jpg",         alt: "A tent tucked into the root system of a rainforest tree" },
      { src: "images/underground-pool.jpg",  alt: "Cave mouth opening onto turquoise water" },
      { src: "images/trekking.jpg",          alt: "Bamboo grove trail" },
      { src: "images/photography.jpg",       alt: "Golden flowstone formation" },
      { src: "images/cave-exploration.jpg",  alt: "Visitors at the cave entrance" },
      { src: "images/camping.jpg",           alt: "Tent by the riverbank" }
    ]
  },

  // ---------------------------------------------------------------
  // SAFETY & SEASON
  // ---------------------------------------------------------------
  safety: {
    eyebrow: "Every Visit Includes",
    heading: "Safety isn't an add-on here.",
    // Add or remove lines freely — this becomes a simple list.
    included: [
      "Life jacket",
      "Boat",
      "A trained local guide",
      "Torch",
      "Basic first aid"
    ],

    seasonEyebrow: "Best Season",
    seasonHeading: "Winter, when the water runs low.",
    seasonParagraphs: [
      "Chympe is open in every season, but winter's low water level is when every activity on this page is available at once — rafting, cave exploration, the underground pool, all of it.",
      "Visit at another time of year and you'll still find plenty open — but some activities depend on the water and your guide's read of the day. Safety here is never negotiable, whatever the season."
    ],
    seasonTag: "Ask your guide what's running on your dates"
  },

  // ---------------------------------------------------------------
  // CONTACT / CALL TO ACTION — the closing section
  // ---------------------------------------------------------------
  contact: {
    eyebrow: "Plan Your Visit",
    heading: "Chympe isn't fully booked online — it starts with a message.",
    paragraph: "Tell us your dates and how many of you are coming, and we'll help you plan the visit — what's running, what to bring, and how to get to Khaddum.",
    whatsappButtonLabel: "Message us on WhatsApp"
  }
};

/* ================================================================
   Don't edit below this line — this just double-checks the file
   above is filled in correctly and warns you (in the browser
   console, Menu > More Tools > Developer Tools > Console) if
   something important is missing.
   ================================================================ */
(function () {
  var C = window.KC_CONTENT;
  var problems = [];
  function need(obj, path) {
    var v = obj;
    var parts = path.split(".");
    for (var i = 0; i < parts.length; i++) {
      if (v == null || v[parts[i]] === undefined) { problems.push("Missing content." + path); return; }
      v = v[parts[i]];
    }
    if (typeof v === "string" && v.trim() === "" && path !== "founder.photo") problems.push("content." + path + " is empty");
  }
  ["site.name", "site.whatsappNumber", "hero.headline", "founder.name", "contact.whatsappButtonLabel"].forEach(function (p) { need(C, p); });
  if (C.site && C.site.whatsappNumber && !/^\d{10,15}$/.test(C.site.whatsappNumber)) {
    problems.push("site.whatsappNumber should be digits only, with country code, no + or spaces — got: " + JSON.stringify(C.site.whatsappNumber));
  }
  if (problems.length) {
    console.warn("KC_CONTENT check found issues:\n- " + problems.join("\n- "));
  }
})();
