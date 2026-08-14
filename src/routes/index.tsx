import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { IntroCurtain } from "@/components/IntroCurtain";
import { Hero } from "@/components/sections/Hero";
import { Gallery } from "@/components/sections/Gallery";
import { Events } from "@/components/sections/Events";
import { Leadership } from "@/components/sections/Leadership";
import { About } from "@/components/sections/About";
import { FocusAreas } from "@/components/sections/FocusAreas";

import { Aiccc } from "@/components/sections/Aiccc";
import { Partnerships } from "@/components/sections/Partnerships";
import { Publications } from "@/components/sections/Publications";


import { Career } from "@/components/sections/Career";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "NIUM — National Institute of Urban Management" },
      {
        name: "description",
        content:
          "NIUM is an execution-ready institutional platform under the Government of Telangana — strengthening urban governance through research, capacity building and digital public infrastructure.",
      },
      { property: "og:title", content: "NIUM — Empowering Cities. Enabling Futures." },
      {
        property: "og:description",
        content:
          "Research, capacity building, and the digital backbone of Telangana's urban stack.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Leadership />
        <Gallery />
        <About />
        <FocusAreas />
        <Events />

        <Aiccc />
        <Partnerships />
        <Publications />
        
        <Career />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
