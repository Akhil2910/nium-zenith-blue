import { useRef } from "react";
import { motion } from "framer-motion";
import happySundays from "@/assets/events/happy-sundays.png.asset.json";
import womenLeaders from "@/assets/events/women-leaders.png.asset.json";
import marammat from "@/assets/events/marammat.jpg.asset.json";
import aicccPrebid from "@/assets/events/aiccc-prebid.png.asset.json";
import happySundays1 from "@/assets/events/happy_sundays_1.jpg.asset.json";
import happySundays2 from "@/assets/events/happy_sundays_2.png.asset.json";
import capacityWomen from "@/assets/events/capacity_building_women.jpg.asset.json";
import uiic from "@/assets/events/urban_innovation_and_incubation.jpg.asset.json";
import citiis from "@/assets/events/campaign_media_1778582611_fc5190.jpg.asset.json";
import prajapalana from "@/assets/events/prajapalana.jpg.asset.json";
import madam1 from "@/assets/events/madam_1.jpg.asset.json";
import madam2 from "@/assets/events/madam_2.jpg.asset.json";
import urbanX from "@/assets/events/urban_x_challenge.jpg.asset.json";
import wardMembersVideo from "@/assets/events/ward-members-training.mp4.asset.json";
import telanganaRisingVideo from "@/assets/events/telangana-rising-2047.mp4.asset.json";
import niumIntroVideo from "@/assets/events/nium-intro-film.mp4.asset.json";

type EventItem = {
  src: string;
  title: string;
  date: string;
  kind?: "poster" | "video";
};

// Newest first
const events: EventItem[] = [
  {
    src: aicccPrebid.url,
    title: "Pre-bid meeting — selection of agency for AI-ICCC",
    date: "17 Jul 2026",
  },
  {
    src: marammat.url,
    title: "Marammat: Caring for Our City — repair café & roundtable",
    date: "13–14 Jul 2026",
  },
  {
    src: urbanX.url,
    title: "UrbanX Challenge Ideathon — Build Our Future Telangana",
    date: "12–13 Jun 2026",
  },
  {
    src: uiic.url,
    title: "Urban Innovation and Incubation Center — a flagship initiative of NIUM",
    date: "Jun 2026",
  },
  {
    src: happySundays.url,
    title: "Happy Sundays — Achampet, Kothur & Manuguru",
    date: "17 May 2026",
  },
  {
    src: happySundays2.url,
    title: "Happy Sundays — 12 Sundays, 13,000 citizens across ULBs",
    date: "May 2026",
  },
  {
    src: happySundays1.url,
    title: "Happy Sundays — Joyful Spaces, Active Citizens, Stronger Communities",
    date: "May 2026",
  },
  {
    src: citiis.url,
    title: "Orientation programme to ULBs on CITIIS 2.0",
    date: "May 2026",
  },
  {
    src: capacityWomen.url,
    title: "Capacity Building to Women Mayors and Chairpersons in Telangana",
    date: "30 Apr – 1 May 2026",
  },
  {
    src: madam1.url,
    title: "Women Mayors and Chairpersons programme — participants at NIUM",
    date: "30 Apr 2026",
  },
  {
    src: madam2.url,
    title: "Inaugural lamp lighting — Capacity Building programme at NIUM",
    date: "30 Apr 2026",
  },
  {
    src: womenLeaders.url,
    title: "Empowering Women Leaders for Transformative Urban Governance",
    date: "30 Apr 2026",
  },
  {
    src: prajapalana.url,
    title: "Praja Palana – Pragathi Pranalika: 99 Days Action Plan",
    date: "6 Mar – 12 Jun 2026",
  },
];

function TracingOutline() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      preserveAspectRatio="none"
    >
      <rect
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx="10"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="2"
        strokeDasharray="120 880"
        className="animate-trace-outline"
      />
    </svg>
  );
}

function EventCard({ item }: { item: EventItem }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = item.kind === "video" || /\.(mp4|webm|mov)$/i.test(item.src);

  return (
    <figure
      className="group mb-6 break-inside-avoid rounded-xl border border-border bg-card p-4 shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]"
      onMouseEnter={() => {
        if (isVideo) void videoRef.current?.play();
      }}
      onMouseLeave={() => {
        if (isVideo && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <figcaption className="mb-3">
        <div className="text-[11px] font-bold uppercase tracking-[0.16em] text-accent">
          {item.date}
        </div>
        <h3 className="mt-1 text-lg font-semibold leading-snug text-foreground">
          {item.title}
        </h3>
      </figcaption>

      <div className="relative overflow-hidden rounded-lg bg-muted">
        {isVideo ? (
          <video
            ref={videoRef}
            src={item.src}
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full object-cover"
          />
        ) : (
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
          />
        )}
        {!isVideo && <TracingOutline />}
      </div>
    </figure>
  );
}

export function Events() {
  return (
    <section id="events-posters" className="relative bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              What's on
            </span>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Events
            </h2>
          </div>
          <p className="text-muted-foreground md:max-w-sm">
            Programmes, workshops and convenings hosted by NIUM — listed newest first.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4"
        >
          {events.map((e) => (
            <EventCard key={e.src} item={e} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
