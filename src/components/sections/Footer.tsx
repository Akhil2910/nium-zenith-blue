import { Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [
  { label: "Instagram", href: "https://www.instagram.com/nium_hyderabad/", Icon: Instagram },
  { label: "X (Twitter)", href: "https://x.com/NIUM_Hyd", Icon: Twitter },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/niumhyd/posts/?feedView=all", Icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="relative bg-[var(--navy)] text-white/80">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <div className="h-11 w-11 rounded-xl bg-[var(--gradient-accent)] flex items-center justify-center">
              <span className="font-display font-bold text-[var(--navy)] text-lg">N</span>
            </div>
            <div>
              <div className="font-display font-bold text-white">NIUM</div>
              <div className="text-xs uppercase tracking-[0.18em] text-white/55">
                National Institute of Urban Management
              </div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/65 max-w-sm leading-relaxed">
            An execution-ready institutional platform helping States plan better, deliver
            faster and govern smarter.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                onClick={(e) => {
                  // Ensure link opens even inside sandboxed preview iframes
                  e.preventDefault();
                  window.open(href, "_blank", "noopener,noreferrer");
                }}
                className="group h-10 w-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center text-white/75 hover:text-[var(--navy)] hover:bg-accent hover:border-accent transition-all"
              >
                <Icon size={16} className="transition-transform group-hover:scale-110" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-wider text-white/50 font-semibold">Explore</div>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["About", "about"],
              ["Focus Areas", "focus-areas"],
              ["Programs", "programs"],
              ["Partnerships", "partnerships"],
              ["Publications", "publications"],
              ["Events", "events"],
              ["Career", "career"],
              ["Contact Us", "contact"],
            ].map(([l, id]) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-accent transition">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-wider text-white/50 font-semibold">Office</div>
          <p className="mt-4 text-sm text-white/65 leading-relaxed">
            NIUM, 3rd Floor, ENC (PH) Building,<br />
            MA&amp;UD Campus, Kashana Building Complex,<br />
            Opp: PTI Building, AC Guards,<br />
            Masabtank, Hyderabad – 500004
          </p>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row gap-3 justify-between text-xs text-white/45">
          <div>© {new Date().getFullYear()} National Institute of Urban Management. All rights reserved.</div>
          <div className="flex flex-col sm:items-end gap-1">
            <span>An initiative under MAUD, Government of Telangana.</span>
            <span className="text-white/60">
              Designed &amp; developed by <span className="font-semibold text-accent">NIUM-IT</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
