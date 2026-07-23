export type CompletedProject = {
  name: string;
  year?: string;
  client?: string;
  summary: string;
  impact?: string;
};

export type CompletedVertical = {
  slug: string;
  title: string;
  tagline: string;
  projects: CompletedProject[];
};

export const completedVerticals: CompletedVertical[] = [
  {
    slug: "research",
    title: "Research & Development",
    tagline: "Policy-relevant research shaping India's urban agenda",
    projects: [
      {
        name: "Six Major Research Projects for HMR & HMDA",
        year: "2019–20",
        client: "Hyderabad Metro Rail / HMDA",
        summary:
          "A programme of six research projects spanning Building & Layout Permissions (National and International Best Practices), review of Master/Regional Plans of UDAs/RDAs, Transit Oriented Development strategies, Metropolitan Governance in Global Cities, Value Capture Financing for UDAs, and Integration of Acts and Guidelines on Building Rules.",
        impact:
          "Directly informed HMR's TOD strategy, HMDA's new Regional Plan direction and the integrated Building Rules that later powered TG-bPASS.",
      },
      {
        name: "Telangana Urban Information System — Prototype",
        year: "2024",
        summary:
          "Open-source decision-making portal hosting the state's master plans in an intuitive UI for the public and experts.",
      },
      {
        name: "Bioclimatic City of Lakes — International Urban Workshop",
        year: "2024",
        client: "Les Ateliers · MRDCL · French Development Agency · French Embassy",
        summary:
          "Nature-based strategies to revive Hyderabad's historic bioclimatic network of lakes, nalas and aquifers — a roadmap for turning the megacity into a climate-resilient 'Aquapolis' and global health capital.",
      },
    ],
  },
  {
    slug: "training",
    title: "Training & Capacity Building",
    tagline: "Building the bench strength of urban India",
    projects: [
      {
        name: "Comprehensive Capacity Building Programme",
        year: "2014–15",
        client: "MoHUA, Government of India",
        summary:
          "₹22 Cr programme covering technical standards, progress documentation, quality assurance and IEC compliance across Andhra Pradesh and Telangana municipalities.",
        impact: "74 training programmes · 2,931 participants trained.",
      },
      {
        name: "Telangana Municipal Development Programme",
        year: "2015–18",
        client: "World Bank",
        summary:
          "₹15 Cr programme delivering 31 urban research projects, 12 training modules for municipal functionaries, and a 3-month induction programme for Group-I Officers.",
        impact: "Principles of Municipal Accounting delivered in Karimnagar and Hyderabad cohorts.",
      },
      {
        name: "SBM 1.0 — State PIU (28 projects)",
        summary:
          "State Project Implementation Unit for Swachh Bharat Mission (Urban) 1.0 covering IEC, capacity building and monitoring across Telangana ULBs.",
      },
      {
        name: "Training on the Telangana Municipalities Act 2019",
        summary:
          "Structured training for Chairpersons and Councillors on the powers, limitations and citizen-facing provisions of the new Municipalities Act.",
      },
      {
        name: "Training of Municipal Contractors",
        year: "2026",
        summary:
          "Legal obligations, rights and documentation practices for civil-works contractors engaging with ULBs.",
      },
      {
        name: "Orientation — CITIIS 2.0 & Urban Challenge Fund",
        summary:
          "Orientation programmes for ULBs on preparing bankable urban projects under the CITIIS 2.0 and Urban Challenge Fund pipelines.",
      },
      {
        name: "Nepal NIRDI Facilitation Programmes",
        summary:
          "Two facilitation programmes for officials of the Nepal Institute of Rural Development, sharing Telangana's urban governance playbook internationally.",
      },
    ],
  },
  {
    slug: "informatics",
    title: "Urban Informatics",
    tagline: "The digital backbone of Telangana's urban stack",
    projects: [
      {
        name: "TG-bPASS — Our Magnum Opus",
        year: "2020–2025",
        client: "Government of Telangana",
        summary:
          "India's first fully-online, self-certification-based building permission system, integrating GHMC, HMDA, DTCP and 9 UDAs on a single window. NIUM owned the platform end-to-end — product design, business rules, workflows and operations — scaling an in-house IT team to ~100 professionals.",
        impact:
          "Faceless assessment of layouts · 21-day deemed approvals · Small buildings (0–75 sq yd) brought under regulation for ₹1 · CAF integration with Fire, Revenue, Traffic, HMWSSB, AAI and NMA · Trained officials from Odisha, West Bengal, Assam, Tamil Nadu and Punjab.",
      },
      {
        name: "Transition to Build Now Portal",
        year: "2025",
        summary:
          "TG-bPASS transitioned into the AI-assisted Build Now portal on 15 December 2025 — carrying forward the 21-day deemed approval DNA and adding drawing scrutiny under 5 minutes, AI-RAG policy assistant, agentic AI insights, blockchain-secured transactions and AR spatial visualisations.",
      },
      {
        name: "QQSUDA Heritage Website",
        summary:
          "Modern, responsive heritage portal for the Quli Qutub Shah Urban Development Authority — interactive heritage maps, conservation showcases and tourism resources.",
      },
      {
        name: "Websites for 21 Newly Formed ULBs",
        summary:
          "Standardised, reusable municipal websites for 21 newly formed ULBs — grievance modules, department pages, tenders, notices, maps and weather widgets.",
      },
      {
        name: "Online Automatic Transfer System — CDMA",
        summary:
          "Design and deployment of an application for internal transfers within CDMA, Government of Telangana.",
      },
    ],
  },
  {
    slug: "project-management",
    title: "Project Management (PMU)",
    tagline: "Where planning becomes delivery",
    projects: [
      {
        name: "HMDA Layout Audits",
        year: "2022",
        client: "HMDA",
        summary:
          "1,035 layouts (2008–2019) audited for compliance using a bespoke app-based survey and a matrix of evaluation.",
        impact:
          "Revealed 90% under-development in 2014–19 layouts, missing infrastructure specifications, encroachments on stormwater channels and RoWs — including a layout 50% under a water body.",
      },
      {
        name: "Durgam Cheruvu Comprehensive Development Plan (Downtown 2.0)",
        year: "2022–23",
        client: "HMDA",
        summary:
          "Two-phase engagement — an open ideas competition followed by NIUM's Downtown 2.0 plan to transform Durgam Cheruvu into Hyderabad's next downtown with an integrated Malkam–Durgam lakefront.",
      },
      {
        name: "Growth Node Strategy for ORR Interchanges",
        year: "2022–23",
        summary:
          "Growth strategy across 19 ORR interchanges to stimulate balanced expansion, jobs and sustainable state revenue.",
        impact:
          "Specific plans for 5 interchanges unlocked 250 acres of land under a revenue-sharing model — Shamirpet (recreation), Ghatkesar (Med-City), Peddamberpet (factory outlets).",
      },
      {
        name: "GIS Master Plans for 54 New ULBs — DTCP",
        year: "2022–24",
        summary:
          "GIS-based master plans covering 2,100 sq km of jurisdiction (14% of urban Telangana) and 500 sq km of settlements for a population of 13.85 lakh — including imagery procurement, digital base maps and 100% field surveys.",
      },
      {
        name: "Manikonda Base Map — GIZ",
        year: "2023–24",
        summary:
          "GIS-based base map after extensive field surveys and satellite imagery, fed into TOSCA (Toolkit for Open and Sustainable City Planning and Analysis) for scenario testing.",
      },
      {
        name: "GO 111 Catchment Spatial Mapping & Violation Analysis",
        year: "2021–22",
        summary:
          "Comprehensive mapping of 580 sq km of Himayat Sagar & Osmansagar catchment (84 villages) using Cartosat-3 imagery and a custom mobile app.",
        impact:
          "57,586 structures mapped — 58% found illegally situated inside the prohibited bio-conservation zone.",
      },
      {
        name: "Mapping Water Bodies in HMDA Limits",
        year: "2021–22",
        summary:
          "Legacy satellite imagery and Leonard Munn maps (1914) overlaid with modern cadastral maps to identify encroachment and shrinkage of lakes and stepwells across HMDA.",
      },
      {
        name: "Mapping of Unauthorised Constructions — Himayat & Nizam Sagar",
        year: "2021–23",
        summary:
          "Multi-year surveillance mapping programme for the catchments of Himayat Sagar and Nizam Sagar reservoirs.",
      },
    ],
  },
  {
    slug: "heritage",
    title: "Heritage & Conservation",
    tagline: "Preserving India's living heritage",
    projects: [
      {
        name: "Restoration of 9 Historic Stepwells",
        year: "2022–24",
        client: "GHMC · QQSUDA",
        summary:
          "Facilitated clearance and restoration of Bhagwandas Bagh, Shiv Bagh Stepwell (Gudimalkapur), Katora Houz (Golconda), Saidani Ma Stepwell (Tank Bund), Masjid Stepwell (Hayathnagar), Karwan Stepwell — with ongoing PPP/CSR restorations at Hathi Baoli (Hayathnagar) and Govt. Hospital Stepwell (Patancheru).",
      },
      {
        name: "Guddimalkapur Stepwell — Rediscovery",
        year: "2023",
        summary:
          "Buried for 15+ years under 30 feet of debris at the Gudimalkapur flower market, the stepwell was rediscovered by NIUM using Leonard Munn's century-old municipal survey maps, then jointly excavated with GHMC.",
        impact:
          "Widely covered by The Hindu — a landmark moment in urban archaeological recovery led by an in-house planning institution.",
      },
      {
        name: "Musi River Heritage Survey",
        year: "2025",
        summary:
          "GIS-based mapping of heritage structures and precincts along the river, comparison with historic maps, and coordination with the World Bank, WMF, AKTC and Bordeaux Metropole for adaptive-reuse and tourism-circuit proposals.",
      },
      {
        name: "Khursheed Jah Devdi — Restoration Plan",
        year: "2025",
        summary:
          "A QQSUDA monument, unacknowledged for years, was rediscovered through NIUM's inter-departmental mediation with HMDA and QQSUDA — restoring the record and unlocking restoration.",
      },
      {
        name: "World Heritage Day 2026",
        year: "2026",
        client: "QQSUDA · AKTC · NIUM · Sangat",
        summary:
          "Painting competitions, clean-up drive and treasure hunt at Irrum Manzil, Heritage Walk at Qutub Shahi Tombs and a cultural event at Deccan Park.",
      },
      {
        name: "Charminar Urban Renewal Project",
        year: "2024–25",
        client: "ThinkCity (Malaysia) · GHMC · JNAFAU",
        summary:
          "App-based, floor-wise physical survey and community engagement at Hussaini Alam Police Outpost — capturing local aspirations, mobility concerns and drinking-water gaps.",
        impact: "A new HMWSSB drinking-water line was laid based on the initial reports submitted.",
      },
    ],
  },
  {
    slug: "sanitation",
    title: "Sanitation & Sustainability",
    tagline: "Cleaner cities, measurable outcomes",
    projects: [
      {
        name: "Comprehensive Audit of Private STPs — HMWSSB",
        year: "2022–23",
        summary:
          "Five-month field survey audited 480 private Sewage Treatment Plants across domestic, commercial and healthcare sectors — using geo-fenced app-based data collection and M.Plan surveyor teams.",
        impact:
          "50% operational · 16% non-operational · 14.2% under construction · 12.3% never installed. Covered by The New Indian Express as a landmark third-party audit.",
      },
      {
        name: "SWM DPRs for 57 ULBs in Telangana",
        year: "2021",
        summary:
          "Detailed Project Reports on Solid Waste Management for 57 ULBs — including route optimisation for Swachh Auto Tippers and Yellareddy Municipality SWM DPR.",
      },
      {
        name: "Telangana Urban Sanitation & Waste Management Policy",
        year: "2020",
        summary:
          "Drafted the state's comprehensive urban sanitation policy — the framing document behind subsequent CSPs and SBM 2.0 rollout.",
      },
      {
        name: "City Sanitation Plans",
        year: "2021",
        summary:
          "CSPs prepared for select ULBs including Sangareddy Municipality.",
      },
      {
        name: "Public Toilets Evaluation — Hyderabad",
        year: "2021",
        client: "GHMC · ASCI",
        summary:
          "Citywide gap assessment and improvement plan for public conveniences across Hyderabad.",
      },
      {
        name: "ULB Green Space Index",
        year: "2021",
        summary:
          "A 4-pillar framework (Green Cover 60% · Distribution 20% · Innovation 10% · Community Engagement 10%) combining Cartosat imagery, Python analytics, GIS and 250×250 m grid micro-audits.",
        impact:
          "Ranked 13 ULBs — Bandlaguda Jagir (91.15), Ramagundam (88.12) and Nizampet (87.72) topped the index.",
      },
      {
        name: "RFP & Tender Evaluation for Bio-Mining — Warangal",
        summary:
          "RFP preparation and hand-holding support to Greater Warangal Municipal Corporation for Bio-Mining and Dumpsite Reclamation.",
      },
    ],
  },
  {
    slug: "communication",
    title: "Communication & Outreach",
    tagline: "Making urban governance visible",
    projects: [
      {
        name: "Telangana Urban Bytes",
        year: "2025–26",
        summary:
          "A visual, data-driven newsletter showcasing good practices, driving accountability and inspiring action across ULBs.",
        impact:
          "14 issues · 200+ good practices documented · 150+ ULBs & departments showcased · 1M+ readers reached across platforms.",
      },
      {
        name: "Happy Sundays",
        year: "2025–26",
        summary:
          "Citizen-centric urban engagement transforming public spaces into weekly hubs for yoga, culture, sports, Shramadanam drives, SHG stalls and inclusive activities for children and seniors.",
        impact:
          "14 Sundays · 138 events · 64 unique ULB locations · 15,000–20,000 citizens reached.",
      },
    ],
  },
];
