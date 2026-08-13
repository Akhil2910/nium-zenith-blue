import shaikpetPhoto from "@/assets/hc/hc-shaikpet-photo.jpg.asset.json";
import shaikpetSitePlan from "@/assets/hc/hc-shaikpet-siteplan.jpg.asset.json";
import qqsudaSite from "@/assets/hc/hc-qqsuda-site.jpg.asset.json";
import heritagePartner from "@/assets/hc/hc-heritage-partner.jpg.asset.json";
import jaipurHawaMahal from "@/assets/hc/hc-jaipur-hawamahal.jpg.asset.json";
import alampurTemple from "@/assets/hc/hc-alampur-temple.jpg.asset.json";
import khursheedJah from "@/assets/hc/hc-khursheed-jah.jpg.asset.json";
import whdGroup from "@/assets/hc/hc-whd-group.jpg.asset.json";
import whdCultural from "@/assets/hc/hc-whd-cultural.jpg.asset.json";
import whdPaintings from "@/assets/hc/hc-whd-paintings.jpg.asset.json";
import whdWalk from "@/assets/hc/hc-whd-walk.jpg.asset.json";
import whdCleanup from "@/assets/hc/hc-whd-cleanup.jpg.asset.json";
import musiMap from "@/assets/hc/hc-musi-map.jpg.asset.json";
import musiAerial from "@/assets/hc/hc-musi-aerial.jpg.asset.json";
import musiOsmania from "@/assets/hc/hc-musi-osmania.jpg.asset.json";
import musiQutbShahiMap from "@/assets/hc/hc-musi-qutbshahi-map.jpg.asset.json";
import stepwellShivbagh from "@/assets/hc/hc-stepwell-shivbagh.jpg.asset.json";
import stepwellKarwan from "@/assets/hc/hc-stepwell-karwan.jpg.asset.json";
import stepwellOngoing from "@/assets/hc/hc-stepwell-ongoing.jpg.asset.json";
import gudimalkapurMarket from "@/assets/hc/hc-gudimalkapur-market.jpg.asset.json";
import gudimalkapurSite from "@/assets/hc/hc-gudimalkapur-site.jpg.asset.json";
import gudimalkapurExcavation from "@/assets/hc/hc-gudimalkapur-excavation.jpg.asset.json";

import type { RdProject } from "@/data/research-development";

export type HcProject = RdProject;

export const ongoingProjects: HcProject[] = [
  {
    id: "shaikpet-sarai",
    title: "Shaikpet Sarai Conservation Project",
    period: "Ongoing",
    partner: "Dept. of Heritage · Aga Khan Trust · HMDA, supported by NIUM",
    intro:
      "Conservation, landscape and adaptive reuse project for the revitalisation of the Qutb Shahi era resthouse.",
    bullets: [
      "NIUM's Role: Coordination between the departments including initial agreement meetings, site visits and decisions to be taken.",
      "NIUM's Role: Preparation of detailed drawings and site inspection for site development works, documentation, total station survey and coordination with private agencies for discussion regarding adaptive reuse of the site and sustainable management plan.",
      "Site area: 3 acres. Project cost: ₹4 crores. Tripartite agreement between the Department of Heritage, Aga Khan Trust and HMDA, supported by NIUM.",
      "Press: “Hyderabad: Shaikpet Sarai to sport a new look soon” — Hans India English Daily, 27 Dec 2022.",
    ],
    images: [
      { src: shaikpetPhoto.url, caption: "Photograph of Shaikpet Sarai" },
      { src: shaikpetSitePlan.url, caption: "Engineering drawing of the site plan" },
    ],
  },
  {
    id: "qqsuda-collaboration",
    title: "Collaboration with Quli Qutub Shah Urban Development Authority (QQSUDA)",
    period: "Ongoing",
    partner: "QQSUDA · Aga Khan Trust for Culture",
    bullets: [
      "Preparation of RfP and EoI documents, vetting for bills and estimates of ongoing projects, guidance and supervision of ongoing works and coordination with potential partners for O&M of proposed and ongoing projects for conservation consultancy for various heritage projects.",
      "Workshop for capacity building on heritage conservation projects on 19–20 September, 2025 in collaboration with Aga Khan Trust for Culture, involving engineering staff working on heritage projects.",
      "Compilation of previous works done under Charminar Pedestrianisation Project and assistance of development of further proposals under SASCI scheme.",
    ],
    images: [
      {
        src: qqsudaSite.url,
        caption: "A photograph of a heritage site with people standing in the foreground.",
      },
    ],
  },
  {
    id: "heritage-partner-scheme",
    title: "Heritage Partner Scheme: Strategic Preservation — Guidelines and Outreach",
    period: "Ongoing",
    bullets: [
      "Comprehensive operational guidelines authored and structured exclusively by NIUM.",
      "NIUM designated as the central Project Management Unit (PMU) to oversee end-to-end execution.",
      "NIUM acts as the official institutional facilitator aligning private stakeholders with government bodies.",
      "This streamlines the process for private individuals and corporate entities to “adopt” and maintain state-protected heritage structures sustainably.",
      "NIUM had mapped and documented 25 heritage sites which are selected in the project.",
    ],
    images: [
      {
        src: heritagePartner.url,
        caption: "A photograph of a historic stone building with intricate architectural details.",
      },
    ],
  },
  {
    id: "jaipur-sahp",
    title: "Jaipur Special Area Heritage Plan — Management plan for Jaipur (UNESCO WHS)",
    period: "Ongoing",
    partner: "In collaboration with PDCOR, Rajasthan",
    intro:
      "NIUM is collaborating with PDCOR, Rajasthan for a strategic conservation plan.",
    bullets: [
      "Consultancy to implement the Special Area Heritage Plan (SAHP) as a legal framework.",
      "Strengthen governance through dedicated heritage committees and the Heritage Cell.",
      "Introduce HIA, GIS monitoring, digital databanks, and single-window approvals. Consultancy for an app-based GIS-based survey was completed.",
      "Protect Jaipur's architecture, landmarks, and living heritage.",
      "Improve enforcement, tourism management, stakeholder engagement, and heritage funding.",
      "Align local planning regulations with UNESCO heritage standards.",
      "Community Participation Plans.",
      "Key outcomes: The framework strengthens heritage protection in Jaipur through legal, digital, and UNESCO-aligned management systems. It also improves governance, tourism management, and community participation for sustainable conservation.",
    ],
    images: [{ src: jaipurHawaMahal.url, caption: "A photograph of the Hawa Mahal in Jaipur." }],
  },
  {
    id: "alampur",
    title: "Alampur (Temple City in TG) Urban Design Framework",
    period: "2025 — 26",
    bullets: [
      "Heritage Conservation & Tourism Infrastructure: Restoration of temples and monuments, creation of an interpretation centre, heritage lighting, signage, and improved tourist amenities.",
      "Urban Infrastructure Upgradation, Public Realm and Beautification Works.",
      "Economic Revitalization & Livelihood Support: Promotion of local crafts, establishment of vendor zones, training centres, and tourism-based livelihood initiatives.",
    ],
    images: [
      { src: alampurTemple.url, caption: "A photograph of an ancient stone temple structure." },
    ],
  },
  {
    id: "badshahi-ashurkhana",
    title: "Consultancy for conservation of Badshahi Ashurkhana, Hyderabad",
    period: "Ongoing",
  },
  {
    id: "pochampally",
    title: "Preparation of Sustainable Tourism Framework for Pochampally",
    period: "Ongoing",
  },
];

export const completedProjects: HcProject[] = [
  {
    id: "world-heritage-day-2026",
    title: "Celebrations and Events — World Heritage Day 2026",
    period: "April 2026",
    partner: "QQSUDA · AKTC · NIUM · Sangat (Tamarind Tree Foundation Trust)",
    bullets: [
      "Painting Competitions and Display.",
      "Clean-Up Drive at Irrum Manzil Palace.",
      "Heritage Treasure Hunt at Irrum Manzil Palace.",
      "Heritage Walk at Qutub Shahi Tombs.",
      "Cultural Event at the Deccan Park.",
      "Press (The Siasat Daily, 19 April 2026): Held on Saturday, April 18, to mark World Heritage Day 2026, the heritage event was a high-profile collaboration between the Quli Qutub Shah Urban Development Authority (QQSUDA), the Aga Khan Trust for Culture (AKTC), the National Institute of Urban Management and Sangat — a cultural initiative by the Tamarind Tree Foundation Trust.",
    ],
    images: [
      { src: whdGroup.url, caption: "A photograph of a large group of people posing in front of a building." },
      { src: whdCultural.url, caption: "An audience seated outdoors at the cultural event." },
      { src: whdPaintings.url, caption: "Paintings displayed on easels." },
      { src: whdWalk.url, caption: "Participants at the heritage event." },
      { src: whdCleanup.url, caption: "People participating in the outdoor clean-up drive." },
    ],
  },
  {
    id: "musi-heritage",
    title: "Heritage Survey — Heritage of Musi River, Hyderabad",
    period: "2025 — 26",
    intro: "Conservation, landscape and adaptive reuse project.",
    bullets: [
      "NIUM's Role: GIS-based mapping of heritage structures and precincts along the river and comparison with historic maps.",
      "NIUM's Role: History of the Musi project in collaboration with The Deccan Archive, including a detailed report on heritage of the river and a coffee table book.",
      "NIUM's Role: Discussions with potential partners and consultants regarding Conservation, Adaptive Reuse and Tourism Circuit proposals, including World Bank, World Monuments Fund, Aga Khan Trust for Culture, Bordeaux Metropole, etc.",
      "NIUM's Role: Coordination and planning for heritage works within VCIWU, Former British Residency, including historic connection to Musi.",
      "Hundreds of heritage structures along the river, span from Qutb Shahi-era, Asaf Jahi-era and post-independence structures, planned along the historic river, to be reimagined.",
    ],
    images: [
      { src: musiMap.url, caption: "Heritage structures mapped along the historic river." },
      { src: musiAerial.url, caption: "Aerial view of heritage structures along the Musi River." },
      { src: musiOsmania.url, caption: "Osmania General Hospital." },
      { src: musiQutbShahiMap.url, caption: "Map of Qutb Shahi Heritage across River Musi." },
    ],
  },
  {
    id: "khursheed-jah-devdi",
    title: "Restoration Plan for Khursheed Jah Devdi, Hyderabad",
    period: "2025",
    intro:
      "This monument belonged to QQSUDA, but the papers were buried deep in the storeroom, and it was unacknowledged and ignored due to a lack of interdepartmental coordination, even though it was a kilometer away from Charminar.",
    bullets: [
      "HMDA staff and QQSUDA staff had undertaken measures to get this back to glory.",
      "It was due to NIUM's efforts that this monument was rediscovered, and the legal tussle was settled with mediation.",
    ],
    images: [
      { src: khursheedJah.url, caption: "A photograph of the Khursheed Jah Devdi monument." },
    ],
  },
  {
    id: "stepwells",
    title: "Restorations — 9 Stepwells and Heritage Water Structures",
    period: "2022 — 2024",
    intro:
      "Two lost stepwells were discovered and excavated from historical maps.",
    bullets: [
      "Completed restorations — NIUM, in collaboration with GHMC, facilitated the clearance of the following stepwells and water features: Bhagwandas Bagh, Gudimalkapur; Shiv Bagh Stepwell, Gudimalkapur; Katora Houz at Golconda; Saidani Ma Stepwell, Tank Bund; Masjid Stepwell, Hayathnagar; Karwan Stepwell.",
      "Ongoing restorations — In collaboration with QQSUDA, facilitation of conservation of historic stepwells in a Public-Private Partnership mode with CSR funding is being undertaken at Hathi Baoli, Hayathnagar and the Stepwell at Govt. Hospital, Patancheru.",
    ],
    images: [
      { src: stepwellShivbagh.url, caption: "Before and after photos of Shiv Bagh Stepwell." },
      { src: stepwellKarwan.url, caption: "Before and after photos of Karwan Stepwell." },
      { src: stepwellOngoing.url, caption: "Ongoing restoration work." },
    ],
    subProjects: [
      {
        name: "NIUM's Discovery — Gudimalkapur Stepwell Restoration",
        period: "2023",
        bullets: [
          "For over 15 years, a nearly 30-foot-deep stepwell lay completely buried under construction debris at Hyderabad's bustling Gudimalkapur flower market, unknown to the very shopkeepers trading above it.",
          "In 2023, the National Institute of Urban Management (NIUM) used Leonard Munn's century-old municipal survey maps to pinpoint its exact location, leading to a joint excavation with the Greater Hyderabad Municipal Corporation (GHMC).",
          "Market sheds had to be shifted and the test excavation had to be done to prove it to the authorities.",
          "Press (The Hindu, 30 August 2023): “Greater Hyderabad Municipal Corporation unearths 1810 stepwell in Gudimalkapur; plans to restore it” — “We dug a test pit and after overlaying Munn Map with Google map we started the work,” says Nitya Khendry of National Institute of Urban Management who has been involved with the project from the beginning.",
        ],
        images: [
          { src: gudimalkapurMarket.url, caption: "People standing in the market area with market sheds." },
          { src: gudimalkapurSite.url, caption: "A view of the stepwell structure with pillars." },
          { src: gudimalkapurExcavation.url, caption: "An earthmover working inside the deep stepwell." },
        ],
      },
    ],
  },
  {
    id: "charminar-urban-renewal",
    title: "Older Archived Projects: Charminar Urban Renewal — Surveys and Plans",
  },
];
