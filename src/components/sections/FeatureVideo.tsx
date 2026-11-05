import { useEffect, useState } from "react";
import { X } from "lucide-react";

export const VIDEO_ID = "fKGvYWQikxs";
export const VIDEO_IDS = ["fKGvYWQikxs", "SyAfBqy3qho"];

const src = (id: string, autoplay: boolean) =>
  `https://www.youtube-nocookie.com/embed/${id}?autoplay=${autoplay ? 1 : 0}&controls=1&playsinline=1&rel=0&modestbranding=1&vq=hd1080&fs=1`;

export function FeatureVideo() {
  return (
    <section className="w-full bg-background py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src(VIDEO_ID, false)}
            title="NIUM video"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export function VideoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (open) setActive(0);
  }, [open]);
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/85 p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="fixed top-4 right-4 z-[110] flex h-12 w-12 items-center justify-center rounded-full bg-background text-foreground shadow-lg ring-2 ring-accent hover:bg-accent transition"
        >
          <X size={26} strokeWidth={2.5} />
        </button>
        <div className="mb-3 flex justify-center gap-2">
          {VIDEO_IDS.map((id, i) => (
            <button
              key={id}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Video ${i + 1}`}
              className={`h-10 min-w-10 rounded-full px-4 text-sm font-bold transition ${
                i === active
                  ? "bg-accent text-accent-foreground"
                  : "bg-background/20 text-background hover:bg-background/35"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            key={VIDEO_IDS[active]}
            className="absolute inset-0 h-full w-full"
            src={src(VIDEO_IDS[active], true)}
            title="About NIUM video"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
