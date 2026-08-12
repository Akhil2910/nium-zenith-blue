import fcdaMasterPlan from "@/assets/rd/rd-fcda-master-plan.jpg.asset.json";
import fcdaLakesMap from "@/assets/rd/rd-fcda-lakes-map.jpg.asset.json";
import unicefGhmcMap from "@/assets/rd/rd-unicef-ghmc-map.jpg.asset.json";
import unicefWorkshop from "@/assets/rd/rd-unicef-workshop.jpg.asset.json";
import unicefMicroMap from "@/assets/rd/rd-unicef-microplanning-map.jpg.asset.json";
import unicefAnmField from "@/assets/rd/rd-unicef-anm-field.jpg.asset.json";
import cfcPlayground from "@/assets/rd/rd-cfc-playground.jpg.asset.json";
import cfcParkBefore from "@/assets/rd/rd-cfc-park-before.jpg.asset.json";
import cfcSatellite from "@/assets/rd/rd-cfc-site-satellite.jpg.asset.json";
import cfcRender1 from "@/assets/rd/rd-cfc-render-1.jpg.asset.json";
import cfcRender2 from "@/assets/rd/rd-cfc-render-2.jpg.asset.json";
import musiMap from "@/assets/rd/rd-musi-map.jpg.asset.json";
import musiApp1 from "@/assets/rd/rd-musi-app-1.jpg.asset.json";
import musiApp2 from "@/assets/rd/rd-musi-app-2.jpg.asset.json";
import musiApp3 from "@/assets/rd/rd-musi-app-3.jpg.asset.json";
import musiApp4 from "@/assets/rd/rd-musi-app-4.jpg.asset.json";
import fobRender from "@/assets/rd/rd-fob-render.jpg.asset.json";
import tenYearReport from "@/assets/rd/rd-ten-year-report.jpg.asset.json";
import parkalBaseMap from "@/assets/rd/rd-parkal-base-map.jpg.asset.json";
import manikondaBaseMap from "@/assets/rd/rd-manikonda-base-map.jpg.asset.json";
import tuisPrototype from "@/assets/rd/rd-tuis-prototype.jpg.asset.json";
import go111Map from "@/assets/rd/rd-go111-map.jpg.asset.json";
import munnMap from "@/assets/rd/rd-munn-map.jpg.asset.json";
import orrInterchange from "@/assets/rd/rd-orr-interchange.jpg.asset.json";
import durgamCheruvu from "@/assets/rd/rd-durgam-cheruvu.jpg.asset.json";
import hmdaLayoutMap from "@/assets/rd/rd-hmda-layout-map.jpg.asset.json";
import surveyorTraining from "@/assets/rd/rd-surveyor-training.jpg.asset.json";
import stpAudit from "@/assets/rd/rd-stp-audit.jpg.asset.json";

export type RdImage = { src: string; caption?: string };

export type RdSubProject = {
  name: string;
  period?: string;
  bullets: string[];
  images?: RdImage[];
};

export type RdProject = {
  id: string;
  title: string;
  period?: string;
  partner?: string;
  intro?: string;
  bullets?: string[];
  images?: RdImage[];
  subProjects?: RdSubProject[];
};

export const ongoingProjects: RdProject[] = [
  {
    id: "future-city",
    title: "Services to Future City Development Authority",
    period: "Ongoing",
    partner: "Future City Development Authority (FCDA)",
    subProjects: [
      {
        name: "Tender & RFP Evaluation for FCDA Master Plans",
        bullets: [
          "NIUM has been selected as a consultant to evaluate the Request for Proposal (RFP) issued by the Future City Development Authority (FCDA) for the development of a Master Plan.",
          "NIUM was the advisory agency for the evaluation of vendors who participated, and it helped FCDA determine who would prepare a Master Plan.",
          "Tender document preparation, evaluation of bids, and shortlisting of the most eligible bidder for the tender.",
        ],
        images: [
          {
            src: fcdaMasterPlan.url,
            caption: "Bharat Future City (HGPC) original conceptual master plan",
          },
        ],
      },
      {
        name: "GIS Study of Lakes for Future City Development Authority (FCDA)",
        period: "Ongoing · 2026",
        bullets: [
          "NIUM is a technical assistance organisation for FCDA.",
          "It was given the project of making a base map for existing lakes in Future City by overlapping older cadastral maps with satellite images.",
          "The Project involves the preparation of a GIS database for water bodies and canals for over 850 sq km of FCDA jurisdiction.",
        ],
        images: [
          {
            src: fcdaLakesMap.url,
            caption:
              "FCDA jurisdiction — Maheshwaram, Kandukur, Yacharam, Chintapalli, Kadthal, Thalakondapalli, Amangal",
          },
        ],
      },
    ],
  },
  {
    id: "unicef",
    title: "Partnership with UNICEF",
    period: "Ongoing · 2025",
    partner: "UNICEF · Women & Child Welfare Department",
    subProjects: [
      {
        name: "GIS-Based Digital Micro Planning of AWCs, ASHAs and U-PHCs within GHMC",
        period: "2024–25",
        bullets: [
          "Identifying underserved, unserved, and overlapping healthcare coverage areas.",
          "Implemented by NIUM with UNICEF and the Women & Child Welfare Department using geospatial and open-source technologies.",
          "Areas of respective ANMs, ASHAs, AWCs, and U-PHCs were mapped.",
        ],
        images: [
          { src: unicefGhmcMap.url, caption: "Micro-planning grid over GHMC" },
          {
            src: unicefMicroMap.url,
            caption: "Digital micro planning of ASHA & AWC in GHMC",
          },
          { src: unicefWorkshop.url, caption: "Planning and mapping workshop" },
          { src: unicefAnmField.url, caption: "Field validation with ANMs and ASHAs" },
        ],
      },
      {
        name: "Child-friendly Cities: Location Identification and Feasibility Analysis",
        period: "2024–25",
        bullets: [
          "Shortlisted parks, school zones, and neighbourhoods requiring child-friendly infrastructure via engaging communities and stakeholders.",
          "Prioritization based on impact, cost, and implementation readiness.",
          "Actionable recommendations.",
        ],
        images: [
          { src: cfcParkBefore.url, caption: "Existing public space identified" },
          { src: cfcSatellite.url, caption: "Site delineation on satellite imagery" },
          { src: cfcPlayground.url, caption: "Child-friendly infrastructure in use" },
          { src: cfcRender1.url, caption: "Proposed change — design proposal" },
          { src: cfcRender2.url, caption: "Proposed change — design proposal" },
        ],
      },
    ],
  },
  {
    id: "musi",
    title: "Services to Musi River Front Development Authority",
    period: "2025–26",
    partner: "MoU between MRDCL and NIUM · 2024–25",
    intro:
      "To support the Musi River Development Project through data-driven planning, GIS mapping, policy research, and stakeholder engagement.",
    bullets: [
      "GIS App-Based Surveys and Data Management.",
      "Surveyors were trained to use the developed app, which has buildings and properties marked via NIUM's automation team.",
      "GIS-based Map Preparation for the Musi River boundary with a 50 m buffer zone to identify tentative encroached structures.",
      "Preparing the Preliminary Project Report for the Department of Economic Affairs in collaboration with the World Bank, ADB, and others.",
      "Facilitating collaboration between the World Monuments Fund (WMF) and the Education Department for the design development of the British Residency.",
      "R&R policy research for displaced households.",
      "Development of urban design guidelines for the riverfront.",
    ],
    images: [
      { src: musiMap.url, caption: "Musi River stretch — reach-wise mapping" },
      { src: musiApp1.url, caption: "Pre-marked properties" },
      { src: musiApp2.url, caption: "Select respective property" },
      { src: musiApp3.url, caption: "Upload sheets and add data" },
      { src: musiApp4.url, caption: "Instant data sharing and dashboards" },
    ],
  },
  {
    id: "fob",
    title:
      "Pre-Feasibility Study of Foot Over Bridges in Greater Hyderabad Municipal Corporation limits",
    period: "2025",
    bullets: [
      "Pilot study and coordinated field visits alongside traffic officials.",
      "Critically evaluated key parameters at proposed locations.",
      "Recommended optimal FOB designs and skywalks over traditional FOBs for effective crowd management in high-footfall IT corridors (e.g., Wipro Junction).",
    ],
    images: [{ src: fobRender.url, caption: "Proposed foot over bridge design" }],
  },
  {
    id: "master-plans",
    title: "Master Plans and Base Map Preparation",
    period: "2022–24",
    subProjects: [
      {
        name: "Preparation of GIS Master Plans for 54 ULBs in Telangana under DTCP",
        period: "2022–24",
        bullets: [
          "NIUM is preparing GIS-based Master Plans for 54 ULBs in Telangana, covering 2,100 sq. km of jurisdiction (14% urban Telangana) and 500 sq. km of existing settlements for a population of 13.85 lakh. The project includes digital base mapping, field surveys, and Spatial Plans (2041).",
          "Scope of Work: Procurement of Imagery · Preparation of Digital Base Map · 100% Survey.",
          "Team Composition: 4 (State Level Team) · 20 (Urban Planners) + Surveyors · ULB Town Planning Staff (for liaising with District Administration).",
        ],
        images: [
          { src: parkalBaseMap.url, caption: "Parkal — General Town Planning Scheme base map" },
          {
            src: tenYearReport.url,
            caption:
              "Telangana — Driving Growth through Urbanization, Ten Year Report 2014–2024 (MA&UD)",
          },
        ],
      },
      {
        name: "Preparation of GIS-Based Base Map for Manikonda Municipality — GIZ Funded",
        period: "2023–24",
        bullets: [
          "Toolkit for Open and Sustainable City Planning and Analysis (TOSCA), a web-GIS-based application, was to be tested, and it needed existing field data, i.e., a base map.",
          "The base map digitizes the area's physical terrain, existing infrastructure, land use, and vulnerable zones, which is then fed to TOSCA to visually test urban scenarios.",
          "NIUM prepared the base map after extensive field surveys and use of satellite imagery.",
        ],
        images: [
          { src: manikondaBaseMap.url, caption: "Manikonda — terrain and infrastructure base map" },
        ],
      },
    ],
  },
];

export const completedProjects: RdProject[] = [
  {
    id: "go-111",
    title:
      "Mapping of Unauthorised Constructions in Catchment Area of Himayat Sagar and Nizam Sagar",
    period: "2021–23",
    intro:
      "Spatial Mapping & Violation Analysis of the GO 111 Catchment Area (2021–22). A comprehensive spatial mapping and field investigation across a 580 sq.km catchment area (covering 84 villages) to quantify unauthorized developments threatening the ecological integrity of the Himayatsagar and Osmansagar reservoirs.",
    bullets: [
      "Satellite Digitization: Procured, co-registered, and pan-sharpened high-resolution Cartosat-3 satellite imagery from the National Remote Sensing Centre (NRSC) to establish a baseline structural footprint.",
      "Mobile App Based Survey: Developed and deployed a custom mobile application to capture geotagged field data, verifying physical building boundaries, floor counts, and real-time land-use categories.",
      "GIS Spatial Analysis: Overlaid validated field data onto HMDA Master Plan zoning maps within a GIS environment to systematically calculate Floor Space Index (FSI) deviations and land-use violations.",
      "Key findings (base: 57,586 mapped structures) — Zoning violations: 58% found to be illegally situated within the prohibited bio-conservation zone.",
    ],
    images: [{ src: go111Map.url, caption: "HMDA jurisdiction — marking catchment area" }],
  },
  {
    id: "hmda",
    title: "Services to Hyderabad Metropolitan Development Authority",
    partner: "HMDA",
    subProjects: [
      {
        name: "HMDA Layout Audits — Audited 1035 Layouts developed until 2019",
        period: "2022",
        bullets: [
          "A total of 1035 Layouts from 2008 to 2019 had been audited for compliance by our planners and field staff.",
          "Field staff used app-based surveys for quicker and easier workflows.",
          "A Matrix of evaluation was formulated to ease the process.",
          "Low Plot Development: Individual plots have not been developed in 90% of the layouts approved by HMDA between 2014 and 2019.",
          "Missing Design Specifications: The layouts lack clear design specifications regarding the capacity of overhead/underground water tanks, water distribution networks, sewage disposal systems, street lighting, and avenue plantations.",
          "Encroachment Issues: Audits revealed instances of encroachment on stormwater channels, footpaths, and Right of Ways during construction.",
          "Poor Environmental Maintenance: Green spaces within the layouts are not being properly maintained.",
          "Furthermore, specific audits noted severe violations, such as a layout being 50% under a water body and failing to maintain the required buffer zones.",
        ],
        images: [
          { src: hmdaLayoutMap.url, caption: "Layout development status across HMDA" },
          {
            src: surveyorTraining.url,
            caption: "Training surveyors about the Mobile GIS application interface",
          },
        ],
      },
      {
        name: "Mapping Water Bodies in HMDA limits",
        period: "2021–22",
        bullets: [
          "Mapping all the lakes, stepwells and other water bodies in HMDA limits via legacy satellite images, older cadastral maps, older maps (Leonard Munn Maps 1914) to check encroachments and shrinking.",
        ],
        images: [{ src: munnMap.url, caption: "Legacy Hyderabad municipal survey map" }],
      },
    ],
  },
  {
    id: "orr",
    title: "Development Plans for Outer Ring Road Interchanges",
    period: "2023",
    intro:
      "Growth Node Strategy for ORR 19 Interchanges (2022–23). NIUM formulated a Growth Node Strategy for Hyderabad's ORR interchanges to drive balanced urban expansion, stimulate economic growth, enhance employment generation, and establish sustainable revenue models for the Government.",
    bullets: [
      "NIUM was able to provide specific plans for 5 interchanges, unlocking 250 acres of land's potential for leasing in a revenue-sharing model.",
      "For instance, Shamirpet interchange was envisaged for Recreational facilities, Ghatkesar interchange for Med-City, and Peddamberpet for factory outlets.",
    ],
    images: [{ src: orrInterchange.url, caption: "An ORR interchange, Hyderabad" }],
  },
  {
    id: "durgam-cheruvu",
    title: "Durgam Cheruvu Comprehensive Development Plan in Hyderabad",
    period: "2020–22",
    bullets: [
      "Phase 1 — An Open Competition was conducted by NIUM for its client HMDA to invite participants for ideas to develop the Durgam Cheruvu region. The prize money was distributed to all the winners.",
      "Phase 2 — NIUM prepared the Durgam Cheruvu Comprehensive Development Plan (Downtown 2.0) to transform the Area into Hyderabad's next Downtown by fostering an anchor industry, creating a world-class integrated lakefront connecting Durgam Cheruvu and Malkam Cheruvu, and establishing a sustainable, investment-ready development framework. (This plan was a culmination of the ideas given.)",
    ],
    images: [{ src: durgamCheruvu.url, caption: "Durgam Cheruvu lake and cable bridge" }],
  },
  {
    id: "major-research",
    title: "Major Research Projects",
    period: "2019–20",
    bullets: [
      "Documentation of National and International Best Practices on Building and Layout Permissions: Recommendation for Hyderabad Metro Rail (HMR).",
      "Master/Regional Plans of Different UDAs/RDAs: Recommendation for Developing New Regional Plan for HMDA.",
      "Transit Oriented Development: Strategies for HMR.",
      "Documentation of Best Practises in Metropolitan Governance in Global Cities: Recommendations for HMR.",
      "Value Capture Financing for Urban Development Authorities (UDAs).",
      "Integration of Various Acts/Guidelines on Building Rules: Case of Hyderabad.",
    ],
  },
  {
    id: "tuis",
    title:
      "Prototype of Telangana Urban Information System — Open Source Decision Making Support",
    period: "2024",
    bullets: [
      "An Urban Portal with all the Master Plans uploaded.",
      "It is a tool for the public and experts to understand the plans of a municipality with a user-friendly and intuitive UI.",
    ],
    images: [{ src: tuisPrototype.url, caption: "Telangana Urban Information System prototype" }],
  },
  {
    id: "stp-audit",
    title: "Comprehensive Audit of Private STPs in HMWSSB",
    period: "2022–23",
    intro: "Upgraded Audit Methodology",
    bullets: [
      "Conducted comprehensive pre-audit training at the Raheja Mindspace STP and executed a detailed 5-month field survey to update and verify the HMWSSB database.",
      "Integrated geo-fencing technology into the app to ensure built-in quality control during data collection.",
      "Deployed specialized survey teams comprising M.Plan professionals with two years of relevant sanitation experience.",
      "Execution: Successfully audited 480 private Sewage Treatment Plants across diverse sectors, including Domestic (44.4%), Commercial/Industrial (36%), and Hospitals/Clinics (19.6%).",
      "Delivered a precise operational breakdown, identifying that 50% of STPs are operational, 16% are non-operational, 14.2% are under construction, and 12.3% were never installed.",
    ],
    images: [{ src: stpAudit.url, caption: "A private sewage treatment plant under audit" }],
  },
];
