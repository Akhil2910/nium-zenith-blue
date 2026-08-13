import dgpsImg from "@/assets/ui/ui-dgps-survey.jpg.asset.json";
import icccImg from "@/assets/ui/ui-iccc-command-centre.jpg.asset.json";

import type { RdProject } from "@/data/research-development";

export type PmProject = RdProject;

export const ongoingProjects: PmProject[] = [
  {
    id: "asset-mapping-dgps",
    title: "Municipal Asset Mapping — DGPS Surveys across 132 ULBs",
    period: "Ongoing",
    partner: "CDMA, Government of Telangana",
    intro:
      "NIUM is appointed as Project Management Consultant (PMC) on behalf of CDMA, Government of Telangana, for the Digital Asset Mapping Project across 132 Urban Local Bodies.",
    bullets: [
      "Nodal agency and single point of contact for the project.",
      "End-to-end project implementation, vendor onboarding, quality assurance and project oversight.",
      "All payments to vendors are made by NIUM from budget funds allocated by CDMA.",
      "NIUM is the approving authority for all deliverables and milestones — no milestone payment releases without NIUM sign-off.",
      "Vendor works under exclusive supervision and direction of NIUM.",
      "All project correspondence, approvals, milestone acceptances and payments are routed through NIUM only.",
    ],
    images: [{ src: dgpsImg.url, caption: "DGPS survey equipment on site" }],
  },
  {
    id: "ai-iccc-pmc",
    title:
      "AI-Based Integrated Command & Control Centre — Khammam–Warangal–Karimnagar Cluster",
    period: "Ongoing",
    partner: "Government of Telangana",
    intro:
      "Project Management and Development Consultant for the Artificial Intelligence based Integrated Command Control Centre serving the Khammam–Warangal–Karimnagar cluster, covering 26 ULBs.",
    bullets: [
      "Unified AI-driven smart governance platform integrating municipal services, real-time monitoring and predictive decision-making.",
      "AI-enabled real-time monitoring via CCTV, smart poles and an integrated cloud platform.",
      "Predictive governance for infrastructure health, flooding and broader urban risk management.",
    ],
    images: [
      {
        src: icccImg.url,
        caption:
          "Command and control centre operations, smart pole infrastructure and the weather forecast and data dashboard",
      },
    ],
  },
  {
    id: "ucf-projects-pm",
    title: "Urban Challenge Fund Projects in Telangana",
    period: "Ongoing",
    intro:
      "Project management and development consultancy for many Urban Challenge Fund projects across Telangana ULBs.",
  },
  {
    id: "engineering-csr-water",
    title: "Projects on Engineering Works, CSR and Water Resources",
    period: "Ongoing",
    intro:
      "Project management support across engineering works, CSR-funded interventions and water resources initiatives.",
  },
];

export const completedProjects: PmProject[] = [
  {
    id: "transfers-application",
    title: "Design and Deployment of Transfers Application for Internal Transfers in CDMA",
    intro:
      "An Online Automatic Officer Transfer System designed and deployed for internal transfers within CDMA, replacing a manual process with a transparent, rule-based digital workflow.",
  },
];
