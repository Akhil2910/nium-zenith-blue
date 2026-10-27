import { Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-14 bg-surface">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
          Contact Us
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">Get in touch with NIUM</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-5 text-left">
          <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
            <MapPin className="text-primary shrink-0" size={22} />
            <div>
              <div className="text-sm font-bold uppercase tracking-wider">Office Address</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                NIUM, 3rd Floor, ENC (PH) Building,<br />
                MA&amp;UD Campus, Kashana Building Complex,<br />
                Opp: PTI Building, AC Guards,<br />
                Masabtank, Hyderabad – 500004
              </p>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 flex gap-4">
            <Mail className="text-primary shrink-0" size={22} />
            <div>
              <div className="text-sm font-bold uppercase tracking-wider">Email</div>
              <a href="mailto:admin@nium.org.in" className="mt-2 block text-sm text-primary hover:underline">
                admin@nium.org.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
