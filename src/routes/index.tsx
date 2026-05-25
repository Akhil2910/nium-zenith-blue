import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Verticals } from "@/components/sections/Verticals";
import { NiumIt } from "@/components/sections/NiumIt";
import { Partnerships } from "@/components/sections/Partnerships";
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
          "NIUM is an execution-ready institutional platform under the Government of Telangana — strengthening urban governance through research, capacity building and digital public infrastructure including TG-bPASS and AI-ICCC.",
      },
      { property: "og:title", content: "NIUM — Empowering Cities. Enabling Futures." },
      {
        property: "og:description",
        content:
          "Research, capacity building, and the digital backbone of Telangana's urban stack — TG-bPASS, AI-ICCC, DTCP/CDMA/ENC platforms and more.",
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
        <About />
        <Verticals />
        <NiumIt />
        <Partnerships />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
