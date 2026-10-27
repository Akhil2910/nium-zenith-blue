import { X } from "lucide-react";

export const VIDEO_ID = "fKGvYWQikxs";

const src = (autoplay: boolean) =>
  `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=${autoplay ? 1 : 0}&controls=1&playsinline=1&rel=0&modestbranding=1&vq=hd1080&fs=1`;

export function FeatureVideo() {
  return (
    <section className="w-full bg-background py-10">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src(false)}
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
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            className="absolute inset-0 h-full w-full"
            src={src(true)}
            title="About NIUM video"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
