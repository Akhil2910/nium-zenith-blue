import accountingTraining from "@/assets/tc/tc-accounting-training.jpg.asset.json";
import chairpersonsGroup from "@/assets/tc/tc-chairpersons-group.jpg.asset.json";
import classroomSession from "@/assets/tc/tc-classroom-session.jpg.asset.json";
import trainingGroup from "@/assets/tc/tc-training-group.jpg.asset.json";
import ateliersGroup from "@/assets/tc/tc-ateliers-group.jpg.asset.json";
import ateliersMapping from "@/assets/tc/tc-ateliers-mapping.jpg.asset.json";
import ateliersWorkshop from "@/assets/tc/tc-ateliers-workshop.jpg.asset.json";
import ateliersStudio from "@/assets/tc/tc-ateliers-studio.jpg.asset.json";
import waterMap from "@/assets/tc/tc-hyderabad-water-map.jpg.asset.json";

import type { RdProject } from "@/data/research-development";

export type TcProject = RdProject;

export const ongoingProjects: TcProject[] = [
  {
    id: "sbm-piu",
    title:
      "State Project Implementation Unit (PIU) for Capacity Building & IEC — Swachh Bharat Mission 2.0",
    period: "Ongoing",
    partner: "SBM (U) 2.0, Telangana",
    intro:
      "NIUM is the State Project Implementation Unit (PIU) for Capacity Building and IEC activities under Swachh Bharat Mission 2.0 for Telangana.",
  },
  {
    id: "private-stp-audits",
    title: "Private STP Audits in Hyderabad",
    period: "2022–23",
    bullets: [
      "Special Surveys on behalf of the Metropolitan Water Supply and Sewerage Board.",
    ],
  },
  {
    id: "swm-dprs",
    title: "Preparation of Solid Waste Management DPRs",
    period: "2021",
    bullets: ["57 ULBs in Telangana were given detailed project reports."],
  },
  {
    id: "city-sanitation-plans",
    title: "Preparation of City Sanitation Plans",
    period: "2021",
  },
  {
    id: "public-toilets",
    title: "Evaluation of Public Toilets Functioning in Hyderabad",
    period: "2021",
  },
  {
    id: "green-space-index",
    title: "Development of Green Space Index for ULBs",
    period: "2021",
  },
  {
    id: "sbm-1-piu",
    title: "28 PIU projects for Swachh Bharat 1.0",
  },
  {
    id: "swm-route-mapping",
    title: "SWM Route Mapping",
  },
  {
    id: "warangal-support",
    title: "Support to Warangal Corporation",
    bullets: ["RFP preparation and Tender Evaluation for Biomining."],
  },
];

export const completedProjects: TcProject[] = [
  {
    id: "premier-training-institute",
    title: "Premier Training Institute — Training Initiatives by NIUM",
    intro:
      "NIUM started itself in the field of capacity building and since then, it has been continuously training municipal staff across Telangana.",
    bullets: [
      "Training for Municipal Commissioners.",
      "Municipal Staff: Accounts Officers, Town Planning Officers, Revenue Inspectors.",
      "Elected representatives: Councillors, Corporators and Mayors.",
      "Civil Works Contractors.",
    ],
    images: [
      { src: trainingGroup.url, caption: "Group photo of training participants" },
      { src: classroomSession.url, caption: "Classroom training session" },
    ],
  },
  {
    id: "municipalities-act-2019",
    title: "Training on Municipalities Act 2019 for Chairpersons and Councillors",
    bullets: [
      "Chairpersons were given a comprehensive explanation of the Act.",
      "Their powers and limitations were explained to them.",
      "Their doubts and queries were resolved.",
    ],
    images: [
      { src: chairpersonsGroup.url, caption: "Group photo of training participants" },
    ],
  },
  {
    id: "citiis-orientation",
    title:
      "Orientation on City Investments to Innovate, Integrate and Sustain (CITIIS 2.0) Programme",
    bullets: [
      "Training on Online Asset Mapping.",
      "Orientation for PMC Consultants.",
      "Orientation on Urban Challenge Fund.",
      "Orientation on City Investments to Innovate, Integrate and Sustain CITIIS 2.0.",
    ],
  },
  {
    id: "jaipur-surveys",
    title: "Capacity Building of Jaipur Staff for Surveys",
  },
  {
    id: "happy-sundays-newsletter",
    title:
      "Happy Sundays Programme & Publication of Telangana Urban Bytes (Newsletter)",
  },
  {
    id: "ghmc-sbm-training",
    title: "Training of GHMC Staff under SBM (U) 2.0",
  },
  {
    id: "municipal-contractors",
    title: "Training Municipal Contractors",
    period: "2026",
    bullets: [
      "Contractors were explained their legal obligations as well as legal rights.",
      "They were given training to document the work and were explained their duties.",
    ],
  },
  {
    id: "les-ateliers-lakes",
    title:
      "Collaboration with Les Ateliers — A Bioclimatic City of Lakes: Hyderabad Comes Full Circle as Health Capital of the World",
    period: "2024–2025",
    partner: "Les Ateliers · French Development Agency",
    intro:
      "An international urban workshop on water and metropolitanisation was held in Hyderabad in late 2024, organized by Les Ateliers in partnership with the Government of Telangana (MRDCL), the French Development Agency, and the French Embassy — a workshop to revive Hyderabad, a City of Bio-Climatic Lakes.",
    bullets: [
      "Outlines actionable, nature-based strategies to revive Hyderabad's historic bioclimatic network of interconnected lakes, nalas and aquifers, offering a comprehensive roadmap to transform the rapidly expanding megacity into a climate-resilient \"Aquapolis\" and global Health Capital through community-led governance and regenerative water management.",
      "NIUM provided essential technical, planning and operational expertise to the workshop's collaborative efforts by supplying a team of specialized professionals.",
      "NIUM worked alongside international and local participants to help analyze the city's urban challenges and formulate the strategic, nature-based proposals for revitalizing Hyderabad's water ecosystems.",
    ],
    images: [
      { src: ateliersGroup.url, caption: "Water and metropolitanisation workshop participants" },
      { src: ateliersMapping.url, caption: "Workshop participants working on a large map" },
      { src: ateliersWorkshop.url, caption: "Workshop participants collaborating at a table" },
      { src: ateliersStudio.url, caption: "Workshop studio session" },
      { src: waterMap.url, caption: "Map of Hyderabad's water network" },
    ],
  },
  {
    id: "tmdp-2015-18",
    title: "Telangana Municipal Development Programme",
    period: "2015–18",
    partner: "World Bank",
    bullets: [
      "Client: World Bank, 15 Crore Program.",
      "31 Urban research projects.",
      "Developed twelve (12) Training Modules for Municipal functionaries.",
      "Three (3) month Induction Training Program for Group I Officers.",
      "Principles of Municipal Accounting, Karimnagar.",
      "Principles of Municipal Accounting, Hyderabad.",
    ],
    images: [
      { src: accountingTraining.url, caption: "Principles of Municipal Accounting training" },
    ],
  },
  {
    id: "ccbp-2014-15",
    title: "Comprehensive Capacity Building Programme",
    period: "2014–15",
    partner: "Ministry of Housing & Urban Affairs, GoI",
    bullets: [
      "Client: Ministry of Housing & Urban Affairs, GoI — 22 Crore Project.",
      "Focus on technical standards, progress documentation, quality assurance and IEC compliance.",
      "Trainings for various municipalities in Andhra Pradesh and Telangana — 74 training programs, 2,931 participants.",
      "Subjects covered: Community Mobilization and Institutional Development, Preparation of Slum Profile Study, Solid Waste Management, Computer Applications and e-Governance, Urban Livelihood Action Plan, Water Supply, Sewerage and Drainage — O&M.",
    ],
  },
];
