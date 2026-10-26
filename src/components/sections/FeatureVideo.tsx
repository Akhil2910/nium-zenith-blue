import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const VIDEO_ID = "fKGvYWQikxs";

export function FeatureVideo() {
  const wrap = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);
  const [muted, setMuted] = useState(true);

  const send = (func: string, args: unknown[] = []) =>
    frame.current?.contentWindow?.postMessage(
      JSON.stringify({ event: "command", func, args }),
      "*",
    );

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          send("setPlaybackQuality", ["hd1080"]);
          send("playVideo");
        } else send("pauseVideo");
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const toggleSound = () => {
    if (muted) {
      send("unMute");
      send("setVolume", [100]);
    } else send("mute");
    setMuted(!muted);
  };

  return (
    <section className="w-full bg-background py-10">
      <div ref={wrap} className="mx-auto w-full max-w-6xl px-4">
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            ref={frame}
            className="absolute left-0 w-full pointer-events-none"
            style={{ top: "-80px", height: "calc(100% + 160px)" }}
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?enablejsapi=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0&disablekb=1&iv_load_policy=3&vq=hd1080&loop=1&playlist=${VIDEO_ID}`}
            title="NIUM video"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
          <button
            type="button"
            onClick={toggleSound}
            className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-primary/85 px-4 py-2 text-sm font-semibold text-primary-foreground backdrop-blur hover:bg-primary transition"
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
            {muted ? "Tap for sound" : "Mute"}
          </button>
        </div>
      </div>
    </section>
  );
}
