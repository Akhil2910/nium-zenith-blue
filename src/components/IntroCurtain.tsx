import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Full-screen intro: "NIUM" in block letters, then the screen splits
 * open like a pair of doors to reveal the site.
 */
export function IntroCurtain() {
  const [phase, setPhase] = useState<"letters" | "open" | "done">("letters");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("open"), 1500);
    const t2 = setTimeout(() => setPhase("done"), 3000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    if (phase === "done") {
      document.body.style.overflow = "";
    } else {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [phase]);

  const opening = phase === "open";

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden
        >
          {/* Left door */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[var(--navy)]"
            initial={{ x: 0 }}
            animate={{ x: opening ? "-100%" : 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-end">
              <span className="translate-x-[0.06em] font-display font-bold tracking-[0.06em] text-white text-[clamp(3.5rem,17vw,15rem)] leading-none">
                NI
              </span>
            </div>
            <div className="absolute inset-y-0 right-0 w-px bg-[var(--gold)]/50" />
          </motion.div>

          {/* Right door */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[var(--navy)]"
            initial={{ x: 0 }}
            animate={{ x: opening ? "100%" : 0 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-start">
              <span className="-translate-x-[0.06em] font-display font-bold tracking-[0.06em] text-white text-[clamp(3.5rem,17vw,15rem)] leading-none">
                UM
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
