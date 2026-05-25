import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import logo from "@/assets/telangana-logo.jpg";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative py-28 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
              Contact
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Let's build the next Indian city, together.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              For partnerships, training requests, CSR engagement or technology
              collaboration — reach out to the NIUM team.
            </p>

            <div className="mt-10 flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <img src={logo} alt="Government of Telangana emblem" className="h-16 w-16 object-contain" />
              <div>
                <div className="font-display font-bold text-foreground">Government of Telangana</div>
                <div className="text-sm text-muted-foreground">
                  Commissioner & Director of Municipal Administration (CDMA)
                </div>
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              {[
                { icon: MapPin, text: "CDMA Office, Hyderabad, Telangana — 500004" },
                { icon: Mail, text: "info@nium.org.in" },
                { icon: Phone, text: "+91 40 0000 0000" },
              ].map((i) => (
                <li key={i.text} className="flex items-center gap-4 text-foreground">
                  <span className="h-10 w-10 rounded-lg bg-secondary text-primary flex items-center justify-center">
                    <i.icon size={18} />
                  </span>
                  {i.text}
                </li>
              ))}
            </ul>
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
                rows={5}
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
