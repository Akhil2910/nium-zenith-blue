import urbanBytesCover from "@/assets/newsletters/covers/vol1-1.jpg.asset.json";

import type { RdProject } from "@/data/research-development";

export type CoProject = RdProject;

export const ongoingProjects: CoProject[] = [
  {
    id: "happy-sundays",
    title: "Happy Sundays Program",
    period: "Ongoing",
    partner: "Citizen Engagement Initiative",
    intro:
      "Happy Sundays is being implemented as a recurring, citizen-centric urban engagement initiative that transforms public spaces into vibrant platforms for recreation, culture, health, environmental awareness, and sustainable urban development.",
    bullets: [
      "Recurring weekly programme activating public spaces across Urban Local Bodies in Telangana.",
      "Activities span health and fitness, cultural performances, children's creative zones, sports and civic awareness drives.",
      "Encourages social inclusion, active lifestyles and stronger citizen participation in urban governance.",
      "Launched as part of the 99 Days of Praja Palana Pragathi Pranalika.",
    ],
  },
  {
    id: "urban-bytes",
    title: "Urban Bytes",
    period: "2025 — 2026",
    intro:
      "A visual, data-driven knowledge and communication initiative that showcases good practices, drives accountability, and inspires action.",
    bullets: [
      "Launched on June 2, the 100 Days Action Plan is an ambitious initiative targeting all Urban Local Bodies (ULBs) in Telangana to create cleaner, greener and better-governed cities within roughly three months. It balances systemic infrastructure improvements with a people-centric approach.",
      "Total number of editions issued — 12.",
      "Urban Bytes reaches more than 250 stakeholders in the government working for Municipal Administration.",
      "Impact at a glance: 200+ good practices documented.",
      "Impact at a glance: 150+ ULBs and departments showcased.",
      "Impact at a glance: 1M+ readers reached across platforms.",
      "Impact at a glance: stronger accountability, better performance, cleaner cities.",
    ],
    images: [
      {
        src: urbanBytesCover.url,
        caption:
          "Telangana Urban Bytes — the newsletter series documenting good practices from ULBs across the state",
      },
    ],
  },
  {
    id: "nium-road-show",
    title: "NIUM Road Show",
    period: "Ongoing",
    intro:
      "Outreach programme that takes NIUM's work, research and advisory offerings to Urban Local Bodies, institutions and urban practitioners across the state.",
  },
];
