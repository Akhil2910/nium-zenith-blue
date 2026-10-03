// Job openings grouped by project, from the NIUM Terms of Reference.
// Set formUrl to the Google Form link for each project when available.
export type JobPosition = { title: string; qualification: string; experience: string; responsibilities: string[] };
export type JobProject = { slug: string; name: string; project: string; location: string; formUrl: string | null; positions: JobPosition[] };

export const jobProjects: JobProject[] = [
  {
    "name": "PDMC – Project Development & Management Consultants",
    "positions": [
      {
        "title": "Project Director – PDMC",
        "qualification": "Master's in Planning / Civil / Environmental Engineering / MBA Finance / Management or related specialization",
        "experience": "12 years in urban infrastructure, programme management, project development, municipal reforms, EAPs or multilateral/donor-funded / Centrally sponsored schemes  of GoI / states including demonstrated experience in leading multidisciplinary teams at state level",
        "responsibilities": [
          "Provide overall leadership, direction and management of the PDMC.",
          "Act as the primary interface with State Government, ULBs, Government of India, financial institutions and development partners.",
          "Guide project identification, prioritization, and structuring and implementation strategy.",
          "Review and approve project deliverables, DPRs, investment plans and financing strategies.",
          "Facilitate inter-departmental coordination and stakeholder engagement.",
          "Monitor project progress, resolve critical issues and ensure achievement of programme objectives.",
          "Support mobilization of investments, external funding and strategic partnerships."
        ]
      },
      {
        "title": "Water, Sewerage & Urban Flood Management Expert",
        "qualification": "B.Plan / B.Tech / B.E. Civil / B.Arch / Environmental Engineering. Master's in Water Resources / Environmental / Public Health Engineering preferred.",
        "experience": "8+ years in water supply/ sewerage/wastewater treatment, storm-water drainage, urban flood management, reuse/recycling, hydraulic modelling, DPR preparation and project implementation.",
        "responsibilities": [
          "Assess water supply, sewerage, wastewater and stormwater drainage infrastructure requirements across project cities.",
          "Develop and structure projects related to water security, sewerage networks, wastewater treatment, reuse and recycling systems.",
          "Prepare, review and provide technical inputs for concept notes, feasibility studies, DPRs and implementation plans.",
          "Undertake hydraulic modelling, network analysis and urban flood risk assessments.",
          "Identify climate-resilient stormwater management and flood mitigation interventions.",
          "Support project implementation, monitoring, quality assurance and performance evaluation.",
          "Ensure compliance with applicable sector standards, technical guidelines and regulatory requirements."
        ]
      },
      {
        "title": "Municipal Engineering & Trunk Infrastructure Expert",
        "qualification": "B.E./B.Tech Civil Engineering/ Environmental Engineering or any related discipline; M.Tech preferred.",
        "experience": "8+ years in municipal engineering, roads, flyovers, utility corridors, trunk infrastructure, urban mobility, construction supervision, contract management and execution support.",
        "responsibilities": [
          "Support planning, design and development of roads, flyovers, utility corridors and trunk infrastructure projects.",
          "Review engineering designs, technical specifications, estimates and construction methodologies.",
          "Provide implementation and execution support to ULBs and project implementing agencies.",
          "Assist in project phasing, cost estimation, value engineering and technical due diligence.",
          "Monitor project execution progress and resolve engineering and implementation issues.",
          "Support contract management, construction supervision and quality control activities.",
          "Facilitate integration of infrastructure investments with broader city development plans and growth strategies."
        ]
      }
    ],
    "project": "Urban Challenge Fund (UCF) / Externally Aided Projects (EAPs)",
    "location": "Hyderabad / Telangana",
    "slug": "pdmc",
    "formUrl": "https://docs.google.com/forms/d/e/1FAIpQLScvhLdrEyp-dfjz2hGLpizj892R4ZH5-C0gN31SCcG-yf_X3A/viewform"
  },
  {
    "name": "Project Implementation Unit – Greater Warangal Municipal Corporation (GWMC)",
    "positions": [
      {
        "title": "Senior Accounts Officer",
        "qualification": "M.Com / MBA Finance / CA / CMA or related discplice",
        "experience": "6 years in finance/accounts; urban infrastructure, Government/ULB or externally funded projects preferred.",
        "responsibilities": [
          "Oversee financial management and accounting of UCF/ External aided projects.",
          "Monitor budgets, expenditure, fund utilization and financial commitments.",
          "Review bills, claims, payments and financial proposals.",
          "Maintain project accounts, financial records and supporting documents.",
          "Prepare financial statements, expenditure reports and utilization certificates.",
          "Monitor fund flow, liabilities and outstanding payments.",
          "Ensure compliance with applicable financial rules, procedures and project guidelines.",
          "Coordinate with ULB Finance & Accounts officials, auditors and other agencies.",
          "Support internal and external audits and ensure timely compliance.",
          "Review financial implications of contracts, variations and project activities.",
          "Provide financial inputs for project planning, procurement and contract management.",
          "Advise the PIU on financial and accounting matters"
        ]
      },
      {
        "title": "Technical Subject Matter Expert",
        "qualification": "Bachelor's/Master's in Civil Engineering; or relevant discipline;  PG preferred",
        "experience": "7 years in urban infrastructure/project development, preferably water, sewerage, roads, mobility or municipal infrastructure.",
        "responsibilities": [
          "Provide overall technical support to the PIU.",
          "Review DPRs, feasibility studies, designs, estimates and technical proposals.",
          "Examine technical viability and implementation readiness of projects.",
          "Review engineering designs, specifications and BOQs.",
          "Assist in technical appraisal of project proposals.",
          "Coordinate with design consultants and supervision consultants.",
          "Support resolution of technical issues arising during implementation.",
          "Monitor implementation against approved technical standards.",
          "Provide technical inputs for procurement documents.",
          "Assist in evaluation of technical proposals wherever required.",
          "Review variations, deviations and technical claims.",
          "Ensure incorporation of appropriate sustainability and climate-resilience measures.",
          "Prepare technical notes and progress reports"
        ]
      },
      {
        "title": "Monitoring & Evaluation Expert",
        "qualification": "Master's in Urban Planning, Engineering, Infrastructure Management or related discipline",
        "experience": "7 years in urban development, KPI tracking and MIS/dashboard development.",
        "responsibilities": [
          "Develop and maintain the PIU monitoring framework.",
          "Establish project M&E systems, KPIs and measurable outcomes.",
          "Develop physical and financial progress monitoring systems.",
          "Track project milestones.",
          "Develop MIS and dashboard requirements.",
          "Collect, validate and analyse project data.",
          "Monitor work plans, milestones, project outputs and outcomes.",
          "Support corrective action planning.",
          "Coordinate with consultants and implementing departments for data collection.",
          "Support evaluation studies and impact assessment midline and end line",
          "Maintain project databases.",
          "Present progress and performance information to senior management."
        ]
      },
      {
        "title": "Supervision Consultant – Climate & E&S",
        "qualification": "B.E./B.Tech Civil/Environmental Engineering or relevant discipline",
        "experience": "6 years in supervision of major urban infrastructure/construction projects; E&S/climate experience preferred.",
        "responsibilities": [
          "Supervise construction and project implementation as per approved designs and specifications.",
          "Monitor quality, quantities, progress and construction schedules.",
          "Review contractor work programmes, submissions and method statements.",
          "Conduct regular site inspections and verify measurements/work progress.",
          "Monitor environmental, social and climate-resilience requirements.",
          "Identify construction risks and recommend corrective measures.",
          "Coordinate with the Technical SME, Quality Assurance Consultant, contractors and GWMC.",
          "Assist in management of variations, claims and implementation issues.",
          "Prepare periodic supervision reports and maintain project records.",
          "Support GWMC in achieving project time, cost and quality objectives."
        ]
      },
      {
        "title": "Quality Assurance Consultant",
        "qualification": "B.E./B.Tech Civil Engineering / Quality Control or relevant discipline",
        "experience": "6 years in QA/QC, material testing, construction inspection and quality audits.",
        "responsibilities": [
          "Establish and monitor project QA/QC systems and procedures.",
          "Conduct quality inspections and periodic audits.",
          "Review construction materials, testing procedures and laboratory reports.",
          "Monitor compliance with approved specifications and standards.",
          "Identify quality deficiencies and recommend corrective measures.",
          "Monitor rectification of defects and quality issues.",
          "Review contractor quality documentation and records.",
          "Coordinate with supervision and technical teams on quality matters.",
          "Prepare periodic quality assurance reports and advise the PIU on quality risks.",
          "Support development and implementation of standard quality control procedures"
        ]
      },
      {
        "title": "Urban Infrastructure Expert",
        "qualification": "B.E./B.Tech / Architecture / Urban Planning or relevant discipline",
        "experience": "6 years in urban infrastructure planning/project implementation; water, sanitation, roads and mobility experience preferred.",
        "responsibilities": [
          "Support planning and implementation of urban infrastructure projects.",
          "Review DPRs, designs, estimates and BOQs.",
          "Assist in technical appraisal and tender documentation.",
          "Monitor project progress, milestones and site implementation.",
          "Coordinate with consultants, contractors and GWMC departments.",
          "Identify and resolve technical and implementation issues.",
          "Support contract implementation and project reporting.",
          "Review infrastructure service delivery and quality aspects.",
          "Promote sustainability and climate-resilient infrastructure solutions.",
          "Provide technical support to GWMC and undertake other assignments entrusted by the PIU."
        ]
      },
      {
        "title": "Procurement & Contract Management Expert",
        "qualification": "Degree in Civil Engineering, Finance, Law, or MBA with a focus on Supply Chain/Procurement",
        "experience": "6 years in handling public procurement, drafting tender documents, and managing government contracts",
        "responsibilities": [
          "Develop procurement strategies, bid processes and contract packaging approaches.",
          "Support preparation, review and evaluation of tender documents and contract packages.",
          "Advise on EPC, DBFOT, FIDIC and other suitable contract structures and procurement models.",
          "Support tendering and bid evaluation processes.",
          "Ensure procurement activities follow applicable UCF/Government procedures.",
          "Monitor procurement schedules, contract performance and project implementation milestones.",
          "Examine contractor/supplier claims.",
          "Support preparation of procurement progress reports. Coordinate with legal, technical and financial teams.",
          "Ensure transparent, competitive and timely procurement.",
          "Provide transaction advisory, contract administration & dispute resolution"
        ]
      }
    ],
    "project": "Urban Challenge Fund / Externally Aided Projects",
    "location": "Warangal",
    "slug": "piu-warangal",
    "formUrl": "https://docs.google.com/forms/d/e/1FAIpQLScvhLdrEyp-dfjz2hGLpizj892R4ZH5-C0gN31SCcG-yf_X3A/viewform"
  },
  {
    "name": "Project Implementation Unit – Karimnagar Municipal Corporation (KMC)",
    "positions": [
      {
        "title": "Project Management & Monitoring Expert",
        "qualification": "Bachelor's in Civil/Infrastructure Engineering/Architectureor any relevant discipline; Master's desirable",
        "experience": "7 years in project management, infrastructure development, monitoring, contract coordination and DPR review.",
        "responsibilities": [
          "Assist the PIU in preparation and updating of the overall project implementation plan.",
          "Coordinate with the Project Director, Project Manager, Technical Head, consultants, contractors and other stakeholders.",
          "Monitor physical and financial progress against approved project schedules and milestones.",
          "Review project implementation schedules, work programmes and resource deployment.",
          "Track critical activities, delays, bottlenecks and project risks and recommend corrective measures.",
          "Review DPRs, technical reports, estimates, designs and implementation plans from the project-management perspective.",
          "Establish project monitoring mechanisms, reporting formats and milestone-based monitoring systems.",
          "Monitor achievement of project outputs, outcomes and key performance indicators.",
          "Coordinate inter-disciplinary activities among technical, procurement, financial, environmental and social teams.",
          "Maintain a project risk register and monitor mitigation measures.",
          "Assist in organizing periodic project review meetings and recording action points.",
          "Undertake any other project-management and monitoring functions assigned by the PIU."
        ]
      },
      {
        "title": "Storm Water Drainage Expert",
        "qualification": "B.E./B.Tech Civil; PG in Water Resources/Hydraulics/Environmental Engineering or any relevant discipline",
        "experience": "6 years in stormwater/urban drainage, hydrology/hydraulics, drainage design, flood mitigation and construction supervision.",
        "responsibilities": [
          "Review existing drainage systems, flood-prone areas and deficiencies.",
          "Review hydrological/hydraulic studies, drainage designs and calculations.",
          "Review drainage layouts, DPRs, drawings, specifications and BOQs.",
          "Assess drains, culverts, outfalls and related structures.",
          "Provide technical inputs for tenders and contract packages.",
          "Monitor construction, quality and workmanship of drainage works.",
          "Coordinate drainage works with roads, utilities and other infrastructure.",
          "Identify bottlenecks and technical constraints affecting drainage flows.",
          "Recommend flood-mitigation and drainage improvement measures.",
          "Coordinate with ULB engineers, contractors and consultants.",
          "Review variations and technical proposals.",
          "Assist in resolving technical and construction issues.",
          "Support completion and commissioning of drainage infrastructure."
        ]
      },
      {
        "title": "Electrical / MEP Expert",
        "qualification": "B.E./B.Tech Electrical/Electrical & Electronics/Mechanical or relevant MEP discipline",
        "experience": "6 years in electrical/MEP design, utility systems, street lighting, pumping systems and infrastructure supervision.",
        "responsibilities": [
          "Develop procurement strategies, bid processes and contract packaging approaches.",
          "Support preparation, review and evaluation of tender documents and contract packages.",
          "Advise on EPC, DBFOT, FIDIC and other suitable contract structures and procurement models.",
          "Support tendering and bid evaluation processes.",
          "Ensure procurement activities follow applicable UCF/Government procedures.",
          "Monitor procurement schedules, contract performance and project implementation milestones.",
          "Examine contractor/supplier claims.",
          "Support preparation of procurement progress reports. Coordinate with legal, technical and financial teams.",
          "Ensure transparent, competitive and timely procurement.",
          "Provide transaction advisory, contract administration and dispute resolution support."
        ]
      },
      {
        "title": "Procurement & Contract Management Expert",
        "qualification": "Bachelor's in Engineering/Law/Commerce/Management/Economics or any relevant discipline",
        "experience": "6 years in procurement, tendering, bid evaluation and contract administration; Government/ULB/PPP/infrastructure experience preferred.",
        "responsibilities": [
          "Review electrical/MEP DPRs, designs, drawings, specifications and estimates.",
          "Review electrical loads, utility systems and street-lighting proposals, electrical installations and equipment specifications.",
          "Review BOQs, cost estimates and tender documents.",
          "Monitor installation, testing and commissioning of electrical/MEP systems.",
          "Inspect equipment, materials and installations for compliance with specifications.",
          "Coordinate with utilities, contractors, consultants and KMC engineering teams.",
          "Review technical submissions, shop drawings and method statements.",
          "Monitor compliance with electrical safety and technical requirements.",
          "Identify and resolve civil, electrical, mechanical and utility interface issues.",
          "Assist in resolving defects and commissioning issues.",
          "Support completion and handover of electrical/MEP system"
        ]
      },
      {
        "title": "Quality Control Expert",
        "qualification": "B.E./B.Tech Civil; PG in Construction/Structural/Quality Management desirable",
        "experience": "6 years in QA/QC, material testing, construction inspection and quality audits.",
        "responsibilities": [
          "Establish and monitor project QA/QC systems and procedures.",
          "Conduct quality inspections and periodic audits.",
          "Review construction materials, testing procedures and laboratory reports.",
          "Monitor compliance with approved specifications and standards.",
          "Identify quality deficiencies and recommend corrective measures.",
          "Monitor rectification of defects and quality issues.",
          "Review contractor quality documentation and records.",
          "Coordinate with supervision and technical teams on quality matters.",
          "Prepare periodic quality assurance reports and advise the PIU on quality risks.",
          "Support development and implementation of standard quality-control procedures."
        ]
      },
      {
        "title": "Finance & Accounts Expert",
        "qualification": "CA / CMA / MBA Finance / M.Com / Bachelor's Commerce or any relevant discipline",
        "experience": "6 years in financial management, project accounting, budgeting, financial reporting, UCs and audit.",
        "responsibilities": [
          "Assist in financial planning and monitoring of UCF projects.",
          "Monitor project-wise budgets, expenditure and fund utilization.",
          "Maintain project financial records and monitoring systems.",
          "Review bills, claims and payments against contracts and work progress.",
          "Prepare financial statements, expenditure reports and utilization certificates.",
          "Monitor fund flow, commitments, liabilities and outstanding payments.",
          "Coordinate with ULB finance/accounts officials, auditors and other agencies.",
          "Support internal and external audit requirements.",
          "Review financial implications of variations and contractual changes.",
          "Ensure compliance with applicable financial rules and project-financing requirements.",
          "Maintain financial documentation for audit and monitoring."
        ]
      },
      {
        "title": "MIS & IT Expert",
        "qualification": "B.E./B.Tech CS/IT, MCA or equivalent",
        "experience": "5 years in MIS, dashboards, data management, GIS/project monitoring, reporting portals and databases.",
        "responsibilities": [
          "Develop and maintain the PIU project MIS and databases.",
          "Establish systems for project data collection, validation and consolidation.",
          "Develop dashboards for physical and financial progress monitoring.",
          "Prepare periodic and automated project progress reports.",
          "Integrate data from engineering, procurement, finance and safeguard teams.",
          "Generate project-wise, package-wise and milestone-wise reports.",
          "Ensure timely updating, validation and accuracy of project data.",
          "Provide technical support for digital project-monitoring systems.",
          "Maintain data security, backups and access controls.",
          "Support GIS-based project monitoring, wherever required.",
          "Coordinate with contractors, consultants and KMC officials for data submission.",
          "Identify and resolve data discrepancies.",
          "Support PIU meetings, presentations and online reporting systems."
        ]
      }
    ],
    "project": "Urban Challenge Fund – Integrated Urban Infrastructure Project",
    "location": "Karimnagar",
    "slug": "piu-karimnagar",
    "formUrl": "https://docs.google.com/forms/d/e/1FAIpQLScvhLdrEyp-dfjz2hGLpizj892R4ZH5-C0gN31SCcG-yf_X3A/viewform"
  },
  {
    "name": "State Project Implementation Unit – Swachh Bharat Mission (Urban) 2.0",
    "positions": [
      {
        "title": "Sanitation & Used Water Management Expert",
        "qualification": "Bachelor's/Master's in Civil/Environmental/Public Health Engineering; Environmental Science/Water & Wastewater Management or related",
        "experience": "6 years in sanitation, wastewater management or urban infrastructure; SBM(U), FSSM, water/sanitation or sewerage or any relevant discipline",
        "responsibilities": [
          "Provide technical support to C&DMA and ULBs for planning, implementation, monitoring, and compliance of sanitation and Used Water Management (UWM) interventions under SBM(U) 2.0.",
          "Review and support preparation of  City Sanitation Action Plans, UWM Plans, feasibility studies, technical proposals, and infrastructure development plans.",
          "Guide ULBs in planning, implementation, and operation of Faecal Sludge and Septage Management (FSSM) systems, STPs, FSTPs, decentralized wastewater treatment systems (DEWATS), and greywater management infrastructure..",
          "Support development and strengthening of community, public, and institutional sanitation facilities,  including operation and maintenance systems.",
          "Facilitate implementation of ODF+, ODF++, Water+, and other sanitation performance benchmarks under SBM(U) 2.0.",
          "Provide technical handholding and capacity-building support to ULBs for improving sanitation service delivery, asset management, and regulatory compliance.",
          "Support project appraisal, technology assessment, monitoring of sanitation infrastructure, and performance evaluation of service providers.",
          "Coordinate with government departments, technical agencies, regulatory bodies, and development partners for effective implementation of sanitation and UWM initiatives.",
          "Monitor key sanitation and wastewater management indicators and support data management, documentation, and reporting under SBM(U) 2.0.",
          "Promote integration of sanitation and used water management with urban planning, public health, climate resilience and resource recovery initiatives.."
        ]
      },
      {
        "title": "IEC & Behaviour Change Communication Expert",
        "qualification": "Bachelor's/Master's in Mass Communication, Journalism, Development Communication, Social Sciences or related discipline",
        "experience": "6 years in IEC, BCC, social communication or public-awareness programmes; campaign/media/community mobilisation desirable; Telugu & English",
        "responsibilities": [
          "Strategy aligned with SBM(U) 2.0 objectives and priorities.",
          "Prepare annual IEC action plans, campaign calendars, communication roadmaps, and budgets.",
          "Design and execute thematic IEC campaigns on source segregation, waste reduction, circular economy, plastic waste management, sanitation, hygiene, and citizen participation.",
          "Plan, coordinate, and monitor statewide IEC, public awareness, and behaviour change initiatives across urban local bodies.",
          "Develop citizen-centric communication strategies to promote source segregation, composting, recycling, safe sanitation practices, and reduction of littering and plastic usage.",
          "Coordinate mass media, digital media, social media, outdoor publicity, mid-media, and community outreach campaigns.",
          "Organize and support Swachhata drives, cleanliness campaigns, competitions, special events, and public engagement activities.",
          "Develop, review, and disseminate IEC content, campaign messages, creative materials, audio-visual resources, and multimedia communication products.",
          "Facilitate community mobilization, interpersonal communication, and stakeholder engagement to promote sustained behavioural change.",
          "Ensure consistency in SBM(U) branding, campaign messaging, and visual identity across all communication platforms.",
          "Monitor and evaluate IEC activities, campaign effectiveness, outreach outcomes, and behavioural change indicators.",
          "Prepare periodic reports, documentation, success stories, and knowledge products, and support mission reviews and stakeholder consultations."
        ]
      },
      {
        "title": "Finance & Accounts Officer",
        "qualification": "Bachelor's/Master's in Commerce/Finance/Accounting",
        "experience": "6 years in finance, accounting or programme financial management; Government schemes/external funding/development sector preferred",
        "responsibilities": [
          "Manage financial and accounting functions of the SPIU.",
          "Prepare annual budgets, financial plans, and expenditure statements for programme activities.",
          "Maintain accounts, cash books, ledgers, vouchers, and financial records.",
          "Process payments, invoices, reimbursements, and vendor bills.",
          "Monitor utilization of SBM(U) funds and budget allocations.",
          "Prepare Utilization Certificates (UCs), Financial progress reports, Statements of expenditure, Audit documents",
          "Ensure compliance with financial rules, Procurement procedures SBM(U) financial guidelines",
          "Coordinate with auditors, finance departments, banks, and vendors.",
          "Support procurement-related financial processing and contract documentation.",
          "Maintain records of grants, advances, and settlements.",
          "Track fund releases and expenditure across programme components.",
          "Assist in preparation of financial MIS and budget monitoring reports.",
          "Support internal and external audits and ensure timely compliance.",
          "Maintain digital and physical financial records and documentation.",
          "Ensure timely statutory deductions, payments, and financial reconciliations.",
          "Provide financial support for meetings, trainings, workshops, and events."
        ]
      },
      {
        "title": "Administrative Coordinator",
        "qualification": "Bachelor’s / Master’s degree in Management, Commerce,  or related discipline.",
        "experience": "6 years in Office administration Knowledge of government financial procedures and procurement rules. Budget preparation and audit management skills. Record keeping and financial reporting capabilities. Communication and coordination skills.",
        "responsibilities": [
          "Manage day-to-day administrative operations of the SPMU.",
          "Coordinate office administration, logistics, and support services.",
          "Maintain official records, files, correspondence, and documentation.",
          "Support organization of Meetings, Workshops & Events",
          "Coordinate travel, accommodation, and hospitality arrangements for officials, trainers, and participants.",
          "Manage procurement and inventory of office equipment, stationery, and training materials.",
          "Support processing of administrative approvals, contracts, and vendor coordination.",
          "Coordinate with government departments, ULBs, vendors, and service providers on administrative matters.",
          "Support preparation of administrative reports, meeting minutes, and compliance documentation.",
          "Ensure timely processing of bills, invoices, payments, and office expenses in coordination with finance team.",
          "Facilitate on boarding and administrative support for consultants and project staff.",
          "Ensure maintenance of office infrastructure, IT equipment, and utilities.",
          "Support implementation of office procedures, administrative protocols, and record management systems.",
          "Assist in coordination of field visits and programme logistics.",
          "Ensure compliance with Government administrative procedures and procurement norms."
        ]
      }
    ],
    "project": "SBM(U) 2.0 – State Project Implementation Unit",
    "location": "Hyderabad",
    "slug": "spiu-sbm",
    "formUrl": "https://docs.google.com/forms/d/e/1FAIpQLScvhLdrEyp-dfjz2hGLpizj892R4ZH5-C0gN31SCcG-yf_X3A/viewform"
  },
  {
    "name": "TCRUTI – Telangana Climate Resilient Urban Transformation Initiative",
    "positions": [
      {
        "title": "Head – Environment & Social Safeguards Cell (ESSC)",
        "qualification": "PG in Environmental Science/Engineering, Social Sciences or related field",
        "experience": "10 years, including 6 years in E&S safeguards for donor/IFI-funded infrastructure projects; Experience in ESMF/ESIA/ESMP, RAP, stakeholder engagement and Indian/KfW safeguards preferred",
        "responsibilities": [
          "Undertake environmental and social screening and assessment of proposed projects.",
          "Oversee preparation and implementation of ESMF, ESIA/ESMP, RAP and Stakeholder Engagement Plans, as applicable.",
          "Ensure compliance with applicable Indian E&S legislation, regulations and KfW Sustainability Guidelines.",
          "Integrate E&S requirements into project design, procurement and implementation.",
          "Coordinate with PMU/PIU, consultants, contractors, government agencies and stakeholders on E&S matters.",
          "Monitor contractor ESHS performance through site inspections and review of compliance records.",
          "Monitor resettlement, livelihood restoration, grievance redressal, gender and social inclusion activities, as applicable.",
          "Establish E&S monitoring systems and prepare periodic compliance/performance reports for PMU and KfW.",
          "Maintain E&S action trackers and follow up closure of observations, non-compliances, incidents and grievances.",
          "Coordinate KfW reviews/audits and provide E&S advice, capacity building and field support; undertake other assignments of the Project Director"
        ]
      },
      {
        "title": "Climate Resilience Expert",
        "qualification": "Master's in Climate Change Studies, Sustainable Development, Environmental Studies or related discipline",
        "experience": "6 years integrating climate adaptation and carbon mitigation into urban infrastructure design; climate-risk/disaster-risk experience",
        "responsibilities": [
          "Undertake climate-risk assessment for project interventions.",
          "Identify climate vulnerabilities affecting infrastructure and urban services.",
          "Assess risks from flooding, extreme rainfall, heat and other relevant climate hazards.",
          "Recommend climate adaptation and resilience measures for project investments.",
          "Review DPRs, designs and technical proposals from a climate-resilience perspective.",
          "Advise on resilient infrastructure standards, design parameters and practices.",
          "Integrate climate considerations into project planning, design, procurement and implementation.",
          "Support climate-related monitoring indicators and track implementation of resilience measures.",
          "Coordinate with technical, E&S and supervision specialists on climate-resilience requirements.",
          "Support capacity building of PMU/PIU officials and undertake field inspections and other assignments of the Project Director."
        ]
      }
    ],
    "project": "Telangana climate Resilient Urban Transformation Initiative TCRUTI",
    "location": "Hyderabad",
    "slug": "tcruti",
    "formUrl": "https://docs.google.com/forms/d/e/1FAIpQLScvhLdrEyp-dfjz2hGLpizj892R4ZH5-C0gN31SCcG-yf_X3A/viewform"
  }
];
