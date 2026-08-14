import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import tgEmblem from "@/assets/tg-emblem.png";

/**
 * Full-screen intro: "NIUM" on the left door, the Telangana emblem on the
 * right. The doors slide apart to reveal the site.
 */
export function IntroCurtain() {
  const [opening, setOpening] = useState(false);
  const [doorsGone, setDoorsGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setOpening(true), 900);
    const t2 = setTimeout(() => setDoorsGone(true), 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = doorsGone ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [doorsGone]);

  return (
    <AnimatePresence>
      {!doorsGone && (
        <motion.div
          className="fixed inset-0 z-[100]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Left door — NIUM */}
          <motion.div
            className="absolute inset-y-0 left-0 w-1/2 overflow-hidden bg-[var(--navy)]"
            animate={{ x: opening ? "-100%" : 0 }}
            transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display font-bold tracking-[0.06em] text-white text-[clamp(3rem,12vw,10rem)] leading-none">
                NIUM
              </span>
            </div>
            <div className="absolute inset-y-0 right-0 w-px bg-white/20" />
          </motion.div>

          {/* Right door — Telangana emblem */}
          <motion.div
            className="absolute inset-y-0 right-0 w-1/2 overflow-hidden bg-[var(--navy)]"
            animate={{ x: opening ? "100%" : 0 }}
            transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <img
                src={tgEmblem}
                alt="Government of Telangana emblem"
                className="max-h-[45vh] w-auto max-w-[70%] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,.4)]"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
