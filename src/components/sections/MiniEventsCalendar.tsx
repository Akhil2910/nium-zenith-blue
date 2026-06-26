import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type EventItem = { date: string; time?: string; title: string };

// Hardcoded NIUM events (from Capacity Building & NIUM_Training calendars)
const EVENTS: EventItem[] = [
  { date: "2026-06-19", time: "3:30pm", title: "Capacity Building Session" },
  { date: "2026-06-22", time: "9:15am", title: "Orientation Programme" },
  { date: "2026-06-23", time: "9:30am", title: "One Day Capacity Workshop" },
  { date: "2026-06-29", title: "Visit of the Nepal Delegation" },
  { date: "2026-06-30", title: "Visit of the Nepal Delegation" },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function toKey(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
}

export function MiniEventsCalendar() {
  const today = new Date();
  const [cursor, setCursor] = useState(new Date(2026, 5, 1)); // June 2026
  const [selected, setSelected] = useState<string | null>(null);

  const year = cursor.getFullYear();
  const month = cursor.getMonth();

  const { cells, eventDates } = useMemo(() => {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells: (number | null)[] = [];
    for (let i = 0; i < firstDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) cells.push(d);
    const eventDates = new Set(
      EVENTS.filter((e) => e.date.startsWith(`${year}-${String(month + 1).padStart(2, "0")}`))
        .map((e) => e.date),
    );
    return { cells, eventDates };
  }, [year, month]);

  const dayEvents = selected ? EVENTS.filter((e) => e.date === selected) : [];

  const go = (d: number) => {
    setSelected(null);
    setCursor(new Date(year, month + d, 1));
  };

  return (
    <div className="w-[260px] rounded-2xl border border-white/15 bg-white/95 backdrop-blur-md shadow-[var(--shadow-elevated)] p-3 text-[var(--navy)]">
      <div className="flex items-center justify-between mb-2">
        <button
          onClick={() => go(-1)}
          aria-label="Previous month"
          className="h-6 w-6 rounded-full hover:bg-black/5 flex items-center justify-center"
        >
          <ChevronLeft size={14} />
        </button>
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em]">
          {MONTHS[month]} {year}
        </div>
        <button
          onClick={() => go(1)}
          aria-label="Next month"
          className="h-6 w-6 rounded-full hover:bg-black/5 flex items-center justify-center"
        >
          <ChevronRight size={14} />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAYS.map((w, i) => (
          <div key={i} className="text-[9px] font-semibold text-black/40 uppercase">
            {w}
          </div>
        ))}
        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const key = toKey(year, month, d);
          const hasEvent = eventDates.has(key);
          const isToday =
            d === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();
          const isSelected = selected === key;
          return (
            <button
              key={i}
              onClick={() => hasEvent && setSelected(isSelected ? null : key)}
              className={`relative mx-auto h-7 w-7 rounded-full text-[11px] flex items-center justify-center transition ${
                isSelected
                  ? "bg-[var(--navy)] text-white"
                  : isToday
                    ? "bg-accent/20 text-[var(--navy)] font-semibold"
                    : "hover:bg-black/5"
              }`}
            >
              {d}
              {hasEvent && (
                <span
                  className={`absolute bottom-0.5 h-1 w-1 rounded-full ${
                    isSelected ? "bg-accent" : "bg-accent"
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-3 border-t border-black/10 pt-2 min-h-[58px]">
        {selected && dayEvents.length > 0 ? (
          <>
            <div className="text-[9px] uppercase tracking-[0.18em] text-black/50 mb-1">
              {new Date(selected).toLocaleDateString(undefined, {
                weekday: "short",
                day: "numeric",
                month: "short",
              })}
            </div>
            <ul className="space-y-1">
              {dayEvents.map((e, i) => (
                <li key={i} className="text-[11px] leading-snug">
                  {e.time && <span className="text-accent font-semibold">{e.time} </span>}
                  <span>{e.title}</span>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <div className="text-[10px] text-black/50 leading-snug">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent mr-1.5 align-middle" />
            Dots mark NIUM events — tap a day to see details.
          </div>
        )}
      </div>
    </div>
  );
}
