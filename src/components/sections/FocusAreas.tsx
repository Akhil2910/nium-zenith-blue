import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  Microscope,
  GraduationCap,
  Lightbulb,
  MonitorCog,
  ClipboardList,
  Landmark,
  Handshake,
  Megaphone,
  X,
  ChevronRight,
  ArrowLeft,
  History,
} from "lucide-react";

const completedSlugByTitle: Record<string, string> = {
  "Urban Informatics": "informatics",
  "Project Management": "project-management",
  "Heritage and Conservation": "heritage",
  "Transaction Advisory": "sanitation",
  "Communication & Outreach": "communication",
};

// Verticals that have their own dedicated page
const routeByTitle: Record<string, string> = {
  "Research & Development": "/verticals/research-development",
  "Training & Capacity": "/verticals/training-capacity",
};

import itImg from "@/assets/vertical-it.jpg";
import heritageImg from "@/assets/vertical-heritage.jpg";
import planningImg from "@/assets/vertical-planning.jpg";
import capacityImg from "@/assets/vertical-capacity.jpg";
import procurementImg from "@/assets/vertical-procurement.jpg";

type Project = {
  name: string;
  about?: string;
  highlights?: string;
  details?: string;
};

type Area = {
  icon: typeof Microscope;
  title: string;
  image: string;
  blurb: string;
  projects: Project[];
};

const areas: Area[] = [
  {
    icon: Microscope,
    title: "Research & Development",
    image: planningImg,
    blurb:
      "Policy-relevant research that generates actionable insights and innovative solutions for urban challenges.",
    projects: [],
  },
  {
    icon: GraduationCap,
    title: "Training & Capacity",
    image: capacityImg,
    blurb:
      "Comprehensive training for municipal functionaries, elected representatives and urban professionals.",
    projects: [
      {
        name: "Workshop and Orientation on CITIIS 2.0",
        about:
          "The CITIIS 2.0 Capacity Building Programme was conducted to support Urban Local Bodies (ULBs) in identifying, developing and refining bankable urban development projects for submission under the Urban Challenge Fund (UCF) and related funding mechanisms. The programme focused on strengthening project preparation capacities of ULBs and promoting innovative, sustainable and inclusive urban development initiatives across Telangana.",
        highlights:
          "Engaged 132 Urban Local Bodies (ULBs) across Telangana through a structured capacity-building programme.\nConducted 16 training sessions between April and June 2026.\nReached 300+ participants, including municipal officials and urban practitioners.\nSupported preparation and refinement of bankable urban development projects for funding under the Urban Challenge Fund (UCF).\nDelivered technical sessions on Climate Action Planning, Urban Resilience, GEDSI, asset mapping, public space activation and wet waste management.\nFacilitated interactions between ULBs, NIUM, CDMA and CITIIS 2.0 teams.",
        details:
          "Key Components: Urban Challenge Fund (UCF) • Climate Action & Resilience • GEDSI Integration • Asset Mapping & Asset Registers • Happy Sundays Initiative • Wet Waste Composting • Project Development & Funding Readiness.\n\nNIUM's Role: Programme design and coordination, capacity building and technical support, knowledge sharing and documentation, project development facilitation, stakeholder engagement and ULB handholding.",
      },
      {
        name: "Happy Sundays",
        about:
          "Happy Sundays is a citizen-centric urban engagement initiative that transforms public spaces into vibrant hubs for recreation, culture, health and community interaction. Implemented across ULBs in Telangana, the programme promotes active lifestyles, social inclusion, environmental awareness and stronger citizen participation through weekly community-led activities. It was launched as part of the 99 Days of Praja Palana Pragathi Pranalika.",
        highlights:
          "14 Sundays in the 99 Days of Praja Palana Pragathi Pranalika.\n138 events conducted across 64 unique ULBs / locations.\n15,000–20,000 citizens reached.\nActivities ranged from yoga, fitness and zumba to cultural programmes, folk songs, magic shows, sports, Shramadanam cleanliness drives, SHG exhibition stalls and senior-citizen and children's activities.",
        details:
          "Key Features: Health & Fitness Zones • Children's Creative Zones • Youth Innovation & Talent Activities • Civic Awareness & Sustainability Campaigns • Senior Citizen & Inclusive Participation Spaces • Citizen Feedback & Programme Monitoring.\n\nNIUM's Role: Concept development and programme framework, monitoring and evaluation design, citizen feedback mechanisms, documentation and outreach, coordination with ULBs for implementation and assessment.",
      },
      { name: "Capacity Building Program for Mayors / Chairpersons" },
      {
        name: "SBM 2.0 — SPIU for Capacity Building & IEC Activities",
        about:
          "Development of a statewide IEC and Capacity Building framework under SBM(U) 2.0 to support urban sanitation management across 132 ULBs and 3,269 wards in Telangana. The project designs structured training programmes, behaviour-change communication strategies, institutional strengthening mechanisms and implementation frameworks for sanitation, solid waste management and service delivery.",
        highlights:
          "Proposed SBM(U) 2.0 IEC and Capacity Building framework covering 132 ULBs and 3,269 wards through a 24-month roadmap.\nDeveloped 26 thematic training modules and a three-tier training framework (State–District–ULB).\nTraining and institutional strengthening framework covering officials, elected representatives, sanitation workforce, ward-level resource persons, SHGs, RWAs and community stakeholders.\nStatewide IEC and Behaviour Change Communication strategy with 50+ proposed outreach interventions.",
        details:
          "Coverage: 132 ULBs • 3,269 wards • 24-month implementation framework.\n\nKey Components: Capacity Building & Training • IEC • BCC • Institutional Strengthening • Monitoring, Evaluation & Reporting • Knowledge Management • Digital Learning & MIS Support.\n\nTechnical Scope: Solid Waste Management, Urban Sanitation, Source Segregation, Plastic Waste Management, Used Water Management, Occupational Health & Safety, Circular Economy, Swachh Survekshan & GFC Support.\n\nNIUM's Role (SPIU): Programme design, technical advisory, training module development, IEC strategy, monitoring framework, knowledge management and institutional capacity building.",
      },
      { name: "Visit of the Nepal Delegation" },
      { name: "Municipal Bonds and Urban Infrastructure Financing" },
      {
        name: "ToT on City Sanitation Plans (CSP)",
        about:
          "Development of ward-centric CSP data formats, sanitation assessment templates and reporting tables to support capacity-building of ULB officials in City Sanitation Plan preparation across 132 ULBs and 3,269 wards.",
      },
    ],
  },
  {
    icon: Lightbulb,
    title: "Urban Innovation & Incubation",
    image: itImg,
    blurb:
      "Incubating ideas, pilots and partnerships that translate urban innovation into delivery on the ground.",
    projects: [
      { name: "UrbanX Challenge — Telangana Urban Ideathon" },
      { name: "Internship Program and Cohort Development" },
      { name: "Institutional Collaborations & Stakeholder Engagement" },
    ],
  },
  {
    icon: MonitorCog,
    title: "Urban Informatics",
    image: itImg,
    blurb:
      "Cutting-edge technology and data analytics — GIS, AI command centres and smart city platforms for governance.",
    projects: [
      { name: "Geo-Tagging" },
      { name: "AI-CCC Command Center Establishment" },
      { name: "QQS UDA Website & Application Development" },
      { name: "21 ULBs Website Development" },
      { name: "Google Calendar" },
    ],
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    image: procurementImg,
    blurb:
      "Project Management Units that ensure effective implementation and oversight of urban projects.",
    projects: [
      {
        name: "FCDA Water Body Mapping",
        about:
          "GIS-based mapping and spatial analysis of water bodies within the FCDA region to support environmental conservation, water resource management and informed urban planning. A comprehensive geospatial database of lakes, ponds, nalas and other water bodies for planning, monitoring and decision-making.",
        highlights:
          "Digitized and mapped 206 water bodies — lakes, ponds and nalas — across the FCDA region.\nDeveloped a GIS-based spatial database for inventory, analysis and planning.\nConducted spatial analysis of distribution and characteristics of water bodies.\nGenerated geospatial datasets and thematic maps to support conservation and future planning.",
        details:
          "Key Services: GIS Mapping & Database Development • Water Body Inventory • Spatial Analysis • Thematic Map Preparation • Data Digitization & Validation • Planning Support.\n\nNIUM's Role: GIS data collection and processing, spatial mapping and digitization, database development, geospatial analysis, technical reporting and planning support.",
      },
      { name: "FCDA Master Plan RFP Evaluation" },
      { name: "NIUM Campus" },
      { name: "Reorganization of Coverage Areas of ANMs in UPHCs" },
      {
        name: "Gig Workers Resting Pod",
        about:
          "An urban welfare initiative conceptualised to provide safe, accessible and dignified rest facilities for delivery personnel, ride-hailing drivers and other gig economy workers. Developed in collaboration with GHMC, the initiative proposes modular, prefabricated rest pods with essential amenities for the urban gig workforce.",
        highlights:
          "Dedicated urban welfare solution conceptualised with GHMC.\nModular, prefabricated pod with a compact footprint for public spaces.\nIntegrated seating, shelter, washroom access, drinking water, mobile charging and information support.\nScalable model supporting inclusive urban development and public space activation.\nConcept designs, layouts, operational framework and scale-up roadmap prepared.\nPositioned as a multi-stakeholder model involving government agencies, gig platforms, CSR partners, NGOs and academia.",
        details:
          "Key Features: Modular & Prefabricated • Small Footprint • Energy Efficient • Natural Ventilation • Universal Accessibility • Durable & Low Maintenance.\n\nFunctions: Rest & Seating • Shelter • Washroom & Hygiene • Mobile Charging • Drinking Water • Waiting & Support Zone.\n\nTarget Beneficiaries: Delivery partners, ride-hailing drivers, logistics personnel, platform-based workers and women gig workers.\n\nVision: A network of accessible resting facilities that promote the health, safety, dignity and wellbeing of gig workers, contributing to more inclusive and worker-friendly urban environments.",
      },
      { name: "Mahbubabad CSP and SWM" },
      {
        name: "Pre-feasibility Study for Foot Over Bridges (FOBs) in GHMC Limits (2024–25)",
        about:
          "Pre-feasibility assessments for proposed Foot Over Bridges to support safe and accessible pedestrian movement in urban areas. Includes site inspections, pedestrian movement analysis, traffic observations, location suitability and preliminary infrastructure planning to identify priority FOB locations.",
        highlights:
          "Pre-feasibility assessments for 87 proposed FOB locations.\nFirst inspection report covering 25 FOB locations submitted.\nInterim assessment report for 28 additional FOB locations submitted.\nSite inspections, pedestrian movement studies, location analysis and infrastructure planning assessments for evidence-based decision-making.",
        details:
          "Key Services: Site Reconnaissance & Field Surveys • Pedestrian Movement Analysis • Traffic & Accessibility Assessment • Location Suitability Evaluation • Preliminary Infrastructure Planning • Technical Reporting.\n\nNIUM's Role: Field assessment and data collection, technical analysis, pre-feasibility reports, infrastructure planning support, recommendation of priority locations.",
      },
      { name: "Aswaraopeta Dump Yard" },
    ],
  },
  {
    icon: Landmark,
    title: "Heritage and Conservation",
    image: heritageImg,
    blurb:
      "Conservation, adaptive reuse and site management for India's living heritage — from Charminar to Warangal.",
    projects: [
      { name: "Adaptive Reuse and Site Development of Shaikpet Sarai — HMDA" },
      { name: "Consultancy for Conservation of Badshahi Ashurkhana — HMDA" },
      { name: "Consultancy for Heritage Projects, Events & Capacity Building — QQSUDA" },
      { name: "Preparation of Legislation and Management Plan — PDCOR" },
      { name: "Guidelines and Outreach for Heritage Partner Scheme — QQSUDA" },
      { name: "Pochampally" },
    ],
  },
  {
    icon: Handshake,
    title: "Transaction Advisory",
    image: procurementImg,
    blurb:
      "Expert advisory on financial structuring, public-private partnerships and strategic project guidance.",
    projects: [
      { name: "RFP CDMA — PMU Services MGCW (Warangal Region)" },
      { name: "RFP TUFIDC — AMRUT 2.0" },
      { name: "Capacity Building on Municipal Bonds and Urban Infrastructure Financing" },
    ],
  },
  {
    icon: Megaphone,
    title: "Communication & Outreach",
    image: heritageImg,
    blurb:
      "Effective dissemination of NIUM's work, stakeholder relations and promotion of urban discourse.",
    projects: [
      { name: "NIUM Road Show" },
      {
        name: "Urban Bytes",
        about:
          "A visual, data-driven knowledge and communication initiative that showcases good practices, drives accountability and inspires action.",
        highlights:
          "Impacts at a Glance (2025–2026): 14 issues distributed • 250+ stakeholders • 200+ good practices documented • 150+ ULBs & departments showcased • 1M+ readers reached across platforms.",
        details:
          "Overview: Launched on 2 June as part of the 100 Days Action Plan — an ambitious initiative targeting all ULBs in Telangana to create cleaner, greener and better-governed cities within roughly three months. It balances systemic infrastructure improvements with a people-centric approach.\n\nVision: Create cleaner, smarter, more participative cities by making urban governance visually accessible, understandable and actionable for every stakeholder.\n\nGoal: Move beyond a 'flash initiative' to foster permanent habit-building and systemic urban transformation across the state.",
      },
    ],
  },
];

export function FocusAreas() {
  const navigate = useNavigate();
  const [active, setActive] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [projectIdx, setProjectIdx] = useState<number | null>(null);

  const handleOpen = (i: number) => {
    const route = routeByTitle[areas[i].title];
    if (route) {
      navigate({ to: route });
      return;
    }
    setOpenIdx(i);
    setProjectIdx(null);
  };

  const openArea = openIdx !== null ? areas[openIdx] : null;
  const openProject =
    openArea && projectIdx !== null ? openArea.projects[projectIdx] : null;


  return (
    <section id="focus-areas" className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              Focus Areas
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-foreground max-w-2xl leading-tight">
              Eight verticals. One mission to make cities work better.
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Hover to preview — click any panel to see the projects inside.
            </p>
          </div>
          <p className="md:max-w-sm text-muted-foreground">
            Each focus area pairs deep domain expertise with on-ground delivery
            across India and Telangana.
          </p>
        </div>

        {/* Horizontal hover accordion */}
        <div className="hidden md:flex w-full h-[480px] gap-2 rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
          {areas.map((a, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={a.title}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => handleOpen(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleOpen(i);
                  }

                }}
                animate={{ flexGrow: isActive ? 6 : 1 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative cursor-pointer overflow-hidden rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-accent"
                style={{ flexBasis: 0 }}
              >
                <img
                  src={a.image}
                  alt={a.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? "bg-gradient-to-t from-black/85 via-black/40 to-black/20"
                      : "bg-gradient-to-t from-[var(--navy)]/90 via-[var(--navy)]/70 to-[var(--navy)]/50"
                  }`}
                />

                {!isActive && (
                  <div className="absolute inset-0 flex flex-col items-center justify-between py-6">
                    <div className="h-11 w-11 rounded-xl bg-white/10 backdrop-blur-md text-white flex items-center justify-center">
                      <a.icon size={20} />
                    </div>
                    <div
                      className="text-white font-semibold tracking-[0.2em] text-xs uppercase whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {a.title}
                    </div>
                    <span className="text-white/70 text-[10px] font-bold">0{i + 1}</span>
                  </div>
                )}

                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.5 }}
                    className="absolute inset-0 p-8 flex flex-col justify-end"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-lg mb-5">
                      <a.icon size={26} />
                    </div>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-accent font-bold">
                      Focus Area 0{i + 1}
                    </span>
                    <h3 className="mt-2 text-3xl font-display font-bold text-white max-w-md leading-tight">
                      {a.title}
                    </h3>
                    <p className="mt-3 text-sm text-white/85 max-w-md leading-relaxed">
                      {a.blurb}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent uppercase tracking-wider">
                      {a.projects.length > 0
                        ? `${a.projects.length} project${a.projects.length > 1 ? "s" : ""} →`
                        : "Explore →"}
                    </span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile stacked cards */}
        <div className="md:hidden grid gap-4">
          {areas.map((a, i) => (
            <button
              key={a.title}
              onClick={() => handleOpen(i)}

              className="relative h-48 rounded-2xl overflow-hidden border border-border text-left"
            >
              <img src={a.image} alt={a.title} className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-black/30" />
              <div className="absolute inset-0 p-5 flex flex-col justify-end">
                <a.icon className="text-white mb-2" size={22} />
                <h3 className="text-white font-bold text-lg">{a.title}</h3>
                <p className="text-white/80 text-xs mt-1 line-clamp-2">{a.blurb}</p>
                {a.projects.length > 0 && (
                  <span className="text-accent text-[11px] font-bold uppercase tracking-wider mt-2">
                    {a.projects.length} project{a.projects.length > 1 ? "s" : ""} →
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {openArea && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setOpenIdx(null);
              setProjectIdx(null);
            }}
            className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ y: 40, opacity: 0, scale: 0.96 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 40, opacity: 0, scale: 0.96 }}
              transition={{ type: "spring", damping: 24, stiffness: 220 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-card rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)] my-8"
            >
              <button
                onClick={() => {
                  setOpenIdx(null);
                  setProjectIdx(null);
                }}
                className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              <div className="relative h-56 md:h-64 overflow-hidden">
                <img
                  src={openArea.image}
                  alt={openArea.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-[var(--gradient-band)] text-primary-foreground flex items-center justify-center shadow-lg">
                      <openArea.icon size={22} />
                    </div>
                    <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
                      Focus Area
                    </span>
                  </div>
                  <h3 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
                    {openProject ? openProject.name : openArea.title}
                  </h3>
                  {!openProject && (
                    <p className="mt-2 text-sm text-foreground/80 max-w-2xl leading-relaxed">
                      {openArea.blurb}
                    </p>
                  )}
                </div>
              </div>

              <div className="p-8">
                {!openProject ? (
                  openArea.projects.length === 0 ? (
                    <div>
                      <p className="text-foreground/80 leading-relaxed">
                        Ongoing project details for this vertical are being curated and
                        will be published soon.
                      </p>
                      {completedSlugByTitle[openArea.title] && (
                        <Link
                          to="/projects/completed"
                          hash={completedSlugByTitle[openArea.title]}
                          className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/5 hover:bg-accent/10 text-accent px-4 py-2 text-xs font-bold uppercase tracking-wider transition"
                        >
                          <History size={14} /> View completed projects
                        </Link>
                      )}
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                        <h4 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                          Projects in this vertical
                        </h4>
                        {completedSlugByTitle[openArea.title] && (
                          <Link
                            to="/projects/completed"
                            hash={completedSlugByTitle[openArea.title]}
                            className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/5 hover:bg-accent/10 text-accent px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider transition"
                          >
                            <History size={12} /> View completed projects
                          </Link>
                        )}
                      </div>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {openArea.projects.map((p, i) => (
                          <li key={p.name}>
                            <button
                              onClick={() => setProjectIdx(i)}
                              className="group w-full text-left rounded-2xl border border-border bg-background p-4 hover:border-accent hover:shadow-[var(--shadow-card)] transition-all flex items-start justify-between gap-3"
                            >
                              <span className="text-sm font-medium text-foreground leading-snug">
                                {p.name}
                              </span>
                              <ChevronRight
                                size={18}
                                className="text-accent shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform"
                              />
                            </button>
                          </li>
                        ))}
                      </ul>
                    </>
                  )
                ) : (
                  <div>
                    <button
                      onClick={() => setProjectIdx(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent uppercase tracking-wider mb-5 hover:underline"
                    >
                      <ArrowLeft size={14} /> Back to projects
                    </button>

                    {openProject.about && (
                      <p className="text-base text-foreground/85 leading-relaxed whitespace-pre-line">
                        {openProject.about}
                      </p>
                    )}

                    {openProject.highlights && (
                      <div className="mt-5 rounded-2xl border-l-4 border-accent bg-accent/5 p-4">
                        <div className="text-[10px] uppercase tracking-[0.22em] text-accent font-bold">
                          Project Highlights
                        </div>
                        <p className="mt-2 text-sm text-foreground/90 leading-relaxed whitespace-pre-line">
                          {openProject.highlights}
                        </p>
                      </div>
                    )}

                    {openProject.details && (
                      <div className="mt-5">
                        <h5 className="text-xs uppercase tracking-[0.2em] text-accent font-semibold mb-2">
                          Project Details
                        </h5>
                        <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
                          {openProject.details}
                        </p>
                      </div>
                    )}

                    {!openProject.about && !openProject.highlights && !openProject.details && (
                      <p className="text-foreground/80 leading-relaxed">
                        Detailed write-up for this project is being prepared and will be available shortly.
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
