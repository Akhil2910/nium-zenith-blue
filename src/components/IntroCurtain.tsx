import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen intro: "NIUM" in block letters behind a ribboned door.
 * Press the Launch button (or the Space key) to cut the ribbon — the
 * doors swing open and a flower shower falls over the main page.
 */

function Petals({ count = 46 }: { count?: number }) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2.5,
        duration: 5 + Math.random() * 4,
        size: 10 + Math.random() * 14,
        rotate: Math.random() * 360,
        drift: (Math.random() - 0.5) * 220,
        hue: [
          "var(--gold)",
          "#F7C6D9",
          "#FFE3A3",
          "#F49AC1",
          "#FFFFFF",
        ][i % 5],
      })),
    [count],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-[90] overflow-hidden" aria-hidden>
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute top-[-8%]"
          style={{ left: `${p.left}%` }}
          initial={{ y: "-10vh", x: 0, rotate: p.rotate, opacity: 0 }}
          animate={{ y: "110vh", x: p.drift, rotate: p.rotate + 540, opacity: [0, 1, 1, 0] }}
          transition={{ duration: p.duration, delay: p.delay, ease: "easeIn" }}
        >
          <div
            style={{
              width: p.size,
              height: p.size * 0.62,
              background: p.hue,
              borderRadius: "60% 40% 60% 40% / 70% 60% 40% 30%",
              boxShadow: "0 1px 3px rgba(0,0,0,.12)",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}

export function IntroCurtain() {
  const [opening, setOpening] = useState(false);
  const [doorsGone, setDoorsGone] = useState(false);
  const [showPetals, setShowPetals] = useState(false);

  const launch = () => {
    if (opening) return;
    setOpening(true);
    setShowPetals(true);
    setTimeout(() => setDoorsGone(true), 1500);
    setTimeout(() => setShowPetals(false), 11000);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.key === " ") {
        e.preventDefault();
        launch();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    document.body.style.overflow = doorsGone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [doorsGone]);

  return (
    <>
      <AnimatePresence>
        {!doorsGone && (
          <motion.div
            className="fixed inset-0 z-[100]"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Left door */}
            <motion.div
              className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[var(--navy)]"
              animate={{ x: opening ? "-100%" : 0 }}
              transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="absolute inset-0 flex items-center justify-end">
                <span className="translate-x-[0.06em] font-display font-bold tracking-[0.06em] text-white text-[clamp(3.5rem,17vw,15rem)] leading-none">
                  NI
                </span>
              </div>
              {/* Ribbon half */}
              <motion.div
                className="absolute left-0 right-0 top-1/2 h-[46px] -translate-y-1/2 bg-[var(--gold)] shadow-[0_6px_24px_rgba(0,0,0,.35)]"
                animate={{ x: opening ? "-30%" : 0, rotate: opening ? -4 : 0 }}
                transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="absolute inset-x-0 top-1 h-px bg-white/50" />
                <div className="absolute inset-x-0 bottom-1 h-px bg-black/15" />
              </motion.div>
              <div className="absolute inset-y-0 right-0 w-px bg-white/20" />
            </motion.div>

            {/* Right door */}
            <motion.div
              className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[var(--navy)]"
              animate={{ x: opening ? "100%" : 0 }}
              transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="absolute inset-0 flex items-center justify-start">
                <span className="-translate-x-[0.06em] font-display font-bold tracking-[0.06em] text-white text-[clamp(3.5rem,17vw,15rem)] leading-none">
                  UM
                </span>
              </div>
              <motion.div
                className="absolute left-0 right-0 top-1/2 h-[46px] -translate-y-1/2 bg-[var(--gold)] shadow-[0_6px_24px_rgba(0,0,0,.35)]"
                animate={{ x: opening ? "30%" : 0, rotate: opening ? 4 : 0 }}
                transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="absolute inset-x-0 top-1 h-px bg-white/50" />
                <div className="absolute inset-x-0 bottom-1 h-px bg-black/15" />
              </motion.div>
            </motion.div>

            {/* Ribbon knot + launch button (center seam) */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-10">
              <AnimatePresence>
                {!opening && (
                  <motion.div
                    className="relative"
                    exit={{ scale: 0.6, opacity: 0, rotate: 20 }}
                    transition={{ duration: 0.4 }}
                  >
                    {/* bow */}
                    <div className="flex items-center">
                      <div className="h-12 w-16 rounded-[100%_0_100%_0] bg-[var(--gold)] shadow-lg" />
                      <div className="z-10 -mx-2 h-8 w-8 rounded-full bg-[color-mix(in_oklab,var(--gold)_80%,black)] shadow-inner" />
                      <div className="h-12 w-16 rounded-[0_100%_0_100%] bg-[var(--gold)] shadow-lg" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {!opening && (
                  <motion.div
                    className="flex flex-col items-center gap-3"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <button
                      type="button"
                      onClick={launch}
                      className="rounded-full bg-[var(--gold)] px-10 py-4 font-display text-base font-bold uppercase tracking-[0.2em] text-[var(--navy)] shadow-[0_10px_40px_rgba(0,0,0,.45)] transition hover:scale-105 active:scale-95"
                    >
                      Launch
                    </button>
                    <span className="text-xs uppercase tracking-[0.28em] text-white/60">
                      or press space
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {showPetals && <Petals />}
    </>
  );
}
