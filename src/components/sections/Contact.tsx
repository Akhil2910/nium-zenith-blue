import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-14 bg-surface">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-xs uppercase tracking-[0.22em] text-accent font-semibold">
          Email Us
        </span>
        <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
          Email us at{" "}
          <a href="mailto:admin@nium.org.in" className="text-primary underline-offset-4 hover:underline">
            admin@nium.org.in
          </a>
        </h2>
        <a
          href="mailto:admin@nium.org.in"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition"
        >
          <Mail size={16} /> Send an email
        </a>
      </div>
    </section>
  );
}
