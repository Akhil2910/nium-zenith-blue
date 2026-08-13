import icccImg from "@/assets/ui/ui-iccc-command-centre.jpg.asset.json";
import bpassImg from "@/assets/ui/ui-tsbpass-portal.jpg.asset.json";
import buildNowImg from "@/assets/ui/ui-buildnow-architecture.jpg.asset.json";
import qqsudaImg from "@/assets/ui/ui-qqsuda-website.jpg.asset.json";
import asifabadImg from "@/assets/ui/ui-asifabad-website.jpg.asset.json";

import type { RdProject } from "@/data/research-development";

export type UiProject = RdProject;

export const ongoingProjects: UiProject[] = [
  {
    id: "ai-iccc",
    title:
      "AI-ICCC — Artificial Intelligence Based Integrated Command & Control Centre, Khammam–Warangal–Karimnagar Cluster",
    period: "Ongoing",
    partner: "Government of Telangana",
    intro:
      "Transforming urban governance across the Khammam–Warangal–Karimnagar Corridor with AI-driven predictive and real-time smart city management.",
    bullets: [
      "Key outcome: Faster grievance resolution with significantly improved citizen satisfaction.",
      "Key outcome: Higher property tax collection, enabling over ₹50 crore in additional revenue recovery.",
      "Key outcome: Reduced service response times and 15–35% savings in operational costs.",
      "Key outcome: AI-enabled real-time monitoring via CCTV, smart poles, and an integrated AWS platform.",
      "Key outcome: Predictive governance for infrastructure health, flooding, and broader urban risk management.",
      "Key outcome: A scalable, replicable smart governance model for all Telangana ULBs.",
      "Objective: Establish a unified AI-driven smart governance platform that integrates municipal services, real-time monitoring, and predictive decision-making across 26 ULBs.",
      "Objective: Enhance citizen services, revenue efficiency, and urban resilience through AI, IoT, GIS, smart infrastructure, and scalable governance systems.",
    ],
    images: [
      {
        src: icccImg.url,
        caption:
          "Hyderabad City Police Commissionerate and TSPICCC command centre, smart pole infrastructure and the weather forecast and data dashboard",
      },
    ],
  },
  {
    id: "digital-asset-mapping",
    title: "Digital Asset Mapping Project across 132 ULBs",
    period: "Ongoing",
    intro:
      "Project Management and Development Consultant for statewide digital asset mapping across 132 Urban Local Bodies.",
  },
  {
    id: "ucf-projects",
    title: "Urban Challenge Fund Projects in Telangana",
    period: "Ongoing",
    intro:
      "Project Management and Development Consultant support for many Urban Challenge Fund projects across Telangana.",
  },
];

export const completedProjects: UiProject[] = [
  {
    id: "tgbpass",
    title: "Our Magnum Opus: TG-bPASS — Online Single Window Building Permission System",
    period: "2020 — 2025",
    intro:
      "An online single window building permission system integrating various laws, bylaws and regulations, which transitioned into a lightning-fast Build Now Portal in 2024.",
    bullets: [
      "Background: 6 research projects were undertaken and scaled up.",
      "Collation of all the rules and regulations of various departments with respect to layouts and building permissions — DTCP, GHMC, HMDA, etc.",
      "Creating a repository of best practices w.r.t. building & layout permissions followed by various governments across the country and the world.",
      "Conversion of all the laws, rules, regulations and bye-laws in an algorithmic format for creation of the Development Control Regulations (DCR) portal.",
      "Scaling up of the IT team to do pilot-based service and develop prototypes.",
      "Three major departments are responsible for planning and issuing building permissions in Telangana: GHMC, HMDA and DT&CP.",
      "Government of Telangana introduced a transparent and unified building permission software called Telangana State Building Permission Approval and Self Certification System (TS-bPASS), replacing the existing DPMS software for ease and transparency.",
    ],
    images: [
      {
        src: bpassImg.url,
        caption:
          "TS-bPASS portal — the first government building permissions system of its kind offering fully online building approvals with zero in-person touchpoints",
      },
    ],
    subProjects: [
      {
        name: "TS-bPASS Act 2019 — Addressing SDG Goal 9: Industry, Innovation, Infrastructure",
        bullets: [
          "TS-bPASS is a systemic reform undertaken by the Government of Telangana to provide timebound approvals through a single-window system, alongside enhancing transparency in the development permission system (building plan, layout, occupancy, change of land use, etc.).",
          "It is the first such system in India to include the entire State under its ambit of service. While the system currently services development approvals within urban areas, works are underway to extend the same to rural areas in Telangana.",
        ],
      },
      {
        name: "Salient Features of the TS-bPASS Act",
        bullets: [
          "Tentative layout approval in 21 days and release of mortgage in 15 days from the date of issuance of final approval.",
          "No building plan permission requirement for an individual residential plot of size up to 75 sq yd and height up to 7 m.",
          "Instant building plan approval for an individual residential plot of size between 75–600 sq yd and height up to 10 m.",
          "Onus on the citizen's self-certification.",
          "Single window system for all non-residential building categories and residential buildings of plot size above 500 sq m or height above 10 m — a single platform from which the applicant applies for all required NoCs.",
          "Building permissions within 21 days from the date of submission of application, and intimation of shortfall, if any, within 10 days.",
          "Deemed approved if the application is not processed within 21 days.",
          "Common Application Form (CAF) integrating line departments such as Fire, Irrigation, Revenue, Traffic Police, HMWSSB, AAI and NMA.",
          "Online payment system.",
        ],
      },
      {
        name: "NIUM's Role in TG-bPASS",
        bullets: [
          "NIUM was the sole responsible institution for TG-bPASS: it owned the platform end-to-end (product design, business rules, operations) rather than the state routing it through a traditional government IT department or a single external contractor.",
          "NIUM's in-house IT team owned architecture, workflow and business-rule design (e.g. the risk-tiered self-certification logic, the 21-day deemed-approval engine) and ongoing operations.",
          "Specific components and capacity were supplemented through an external technology vendor for parts of build and delivery — a blended model rather than a pure in-house build or a pure outsourced contract.",
          "NIUM directly recruited technical talent rather than relying only on seconded government staff.",
          "At peak, NIUM's in-house IT capacity for TG-bPASS scaled to around 100 personnel — a sizeable dedicated in-house digital team by public-sector standards, giving Telangana direct control over changes to a live, high-stakes regulatory system.",
          "Ancillary activities: maintaining MIS and dashboards, 2000+ training sessions for town planning staff, private builders and municipal staff, and weekly or fortnightly meetings to ensure SLAs were not exceeded.",
        ],
      },
      {
        name: "Achievements of TG-bPASS",
        bullets: [
          "Introduced faceless assessment of layouts → reduces rent-seeking behaviour.",
          "For the first time, small buildings of 0–75 sq yards were brought into the ambit of regulation for 1 rupee → 20% of applications → property tax collections are now possible → augments revenue.",
          "Ease of living via SLA-based, time-bound permissions.",
          "Uniform, grade-wise fee structure.",
          "Real-time integration with the property tax system.",
          "9 UDAs were brought under a single regulation portal.",
          "Common Application Form integrations with Fire, Revenue, Traffic Police, HMWSSB, AAI and NMA; consoles were given to the Irrigation and Revenue Departments for clearance of NOCs.",
          "Became a national reference point for digital, self-certification-based urban governance reform — the team trained Odisha, West Bengal, Assam, Tamil Nadu and Punjab government officials.",
        ],
      },
      {
        name: "Data Analysis from TG-bPASS",
        bullets: [
          "Integration with the Registration and Stamps Department: the Inspector General validates and restricts applications if the applicant has entered prohibited survey records registered in SRO books, and provides information on current market value lists for precise fee calculations.",
          "Integration with CDMA for tax collection has been used as a data source for checks and balances, to forecast upcoming tax revenues and generate PTIN numbers.",
          "Integration with the fire department provides citizens with a single application for obtaining all applicable NOCs for a submitted proposal.",
          "Aggregated TS-bPASS data — permissions overlaid spatially with real-time data — helps gauge where the next phase of development is headed and in what quantity and form, and the seasonal nature of growth across each quarter as well as year-on-year growth across the State.",
        ],
      },
      {
        name: "Transition into BuildNow",
        bullets: [
          "TG-bPASS was permanently shut down on 15 December 2025, with all GHMC, HMDA and DTCP building/layout applications now processed through the new BuildNow portal, and legacy TG-bPASS data integrated into it.",
          "Core DNA carried forward: the 21-day deemed-approval rule under the TG-bPASS Act 2020 still applies, and a District Collector-led Special Task Force continues enforcement, including demolition powers for major violations.",
          "BuildNow is a clean case study in iterative digital-governance reform — from rules-based self-certification to AI-assisted compliance-checking, relevant to municipal finance and urban infrastructure digitalisation narratives.",
        ],
        images: [
          {
            src: buildNowImg.url,
            caption:
              "BuildNow system architecture — Citizen Centric Design, Lightning Fast Scrutiny, Advanced Workflows, Tech-Enabled Smart Governance, Comprehensive Operational Visibility and Multi-Department Integrations",
          },
        ],
      },
    ],
  },
  {
    id: "website-development",
    title: "Website Design and Deployment",
    intro:
      "Website development for QQSUDA and for newly formed Urban Local Bodies across Telangana.",
    subProjects: [
      {
        name: "QQSUDA Website",
        bullets: [
          "Developed the official QQSUDA heritage website to preserve and showcase Hyderabad's architectural and cultural heritage. The portal includes heritage information, conservation projects, interactive maps and tourism resources.",
          "Developed a modern, responsive heritage website highlighting monuments, conservation initiatives and tourism information.",
          "Implemented interactive heritage maps, project showcases and dynamic content modules to enhance public engagement.",
        ],
        images: [{ src: qqsudaImg.url, caption: "QQSUDA heritage website" }],
      },
      {
        name: "Newly Formed ULBs Website",
        bullets: [
          "Developed standardized official websites for 21 newly formed municipalities, providing citizen services, grievance redressal, maps, weather information, tenders, departments and public notices.",
          "Developed reusable and responsive website templates for 21 municipalities, ensuring consistency and ease of maintenance.",
          "Integrated citizen-centric services including grievance modules, Google Maps, weather widgets, department information and online municipal services.",
        ],
        images: [{ src: asifabadImg.url, caption: "Asifabad Municipality website" }],
      },
    ],
  },
  {
    id: "application-development",
    title: "Application Development — Online Automatic Officer Transfer System",
    intro:
      "Design and deployment of the transfers application for internal transfers in CDMA, automating the officer transfer process online.",
  },
];
