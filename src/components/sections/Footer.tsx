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
            CDMA Office,<br />
            Government of Telangana,<br />
            Hyderabad — 500004
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
