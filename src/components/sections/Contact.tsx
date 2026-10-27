import { Mail, MapPin, Phone, ExternalLink } from "lucide-react";

const MAP_Q = "AC Guards, Masab Tank, Hyderabad 500004";

export function Contact() {
  return (
    <section id="contact" className="relative py-14 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">Contact Us</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">Get in touch with NIUM</h2>
        </div>
        <div className="mt-10 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
            <div className="text-xs font-bold uppercase tracking-[0.25em] text-accent">AC Guards Office</div>
            <div className="mt-5 space-y-6">
              <div className="flex gap-4">
                <span className="h-11 w-11 shrink-0 rounded-xl bg-surface flex items-center justify-center"><MapPin size={18} /></span>
                <p className="text-foreground leading-relaxed">
                  3rd Floor, ENC (PH) Building,<br />MA&amp;UD Campus, Kashana Building Complex,<br />
                  Opp: PTI Building, AC Guards, Masabtank,<br />Hyderabad – 500004
                </p>
              </div>
              <a href="mailto:admin@nium.org.in" className="flex items-center gap-4 hover:text-primary">
                <span className="h-11 w-11 shrink-0 rounded-xl bg-surface flex items-center justify-center"><Mail size={18} /></span>
                admin@nium.org.in
              </a>
              <a href="tel:04023220615" className="flex items-center gap-4 hover:text-primary">
                <span className="h-11 w-11 shrink-0 rounded-xl bg-surface flex items-center justify-center"><Phone size={18} /></span>
                040-23220615/6
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden border border-border min-h-[340px]">
            <iframe
              title="NIUM office location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(MAP_Q)}&z=16&output=embed`}
              className="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_Q)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-card px-3 py-2 text-sm font-semibold text-primary shadow"
            >
              Open in Maps <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
