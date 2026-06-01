import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
            Contact Us
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            Let's build the next Indian city, together.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)]">
              <div className="text-xs uppercase tracking-[0.22em] text-accent font-bold">
                AC Guards Office
              </div>
              <div className="mt-3 flex items-start gap-3">
                <span className="h-10 w-10 shrink-0 rounded-lg bg-secondary text-primary flex items-center justify-center">
                  <MapPin size={18} />
                </span>
                <p className="text-sm text-foreground leading-relaxed">
                  3rd Floor, ENC (PH) Building,<br />
                  MA&amp;UD Campus, Kashana Building Complex,<br />
                  Opp: PTI Building, AC Guards, Masabtank,<br />
                  Hyderabad – 500004
                </p>
              </div>
              <ul className="mt-5 space-y-3">
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <span className="h-10 w-10 rounded-lg bg-secondary text-primary flex items-center justify-center">
                    <Mail size={16} />
                  </span>
                  info@nium.org.in
                </li>
                <li className="flex items-center gap-3 text-sm text-foreground">
                  <span className="h-10 w-10 rounded-lg bg-secondary text-primary flex items-center justify-center">
                    <Phone size={16} />
                  </span>
                  +91 40 0000 0000
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-card)] h-72">
              <iframe
                title="NIUM AC Guards Office Map"
                src="https://www.google.com/maps?q=AC+Guards,+Masabtank,+Hyderabad+500004&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="lg:col-span-7 rounded-3xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-elevated)]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Organisation" name="org" placeholder="ULB / Institution" />
              <Field label="Email" name="email" type="email" placeholder="you@dept.gov.in" />
              <Field label="Phone" name="phone" placeholder="+91 …" />
            </div>
            <div className="mt-5">
              <label className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
                How can NIUM help?
              </label>
              <textarea
                required
                rows={6}
                placeholder="Tell us a little about what you're working on…"
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div className="mt-7 flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-muted-foreground">
                We typically respond within 2–3 working days.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition"
              >
                {sent ? "Message received" : "Send message"}
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="text-xs uppercase tracking-wider font-semibold text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}
