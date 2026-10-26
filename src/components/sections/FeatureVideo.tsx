import { useEffect, useRef } from "react";

const VIDEO_ID = "fKGvYWQikxs";

export function FeatureVideo() {
  const wrap = useRef<HTMLDivElement>(null);
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const send = (func: string) =>
      frame.current?.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args: [] }),
        "*",
      );
    const obs = new IntersectionObserver(
      ([e]) => send(e.isIntersecting ? "playVideo" : "pauseVideo"),
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="w-full bg-background py-10">
      <div ref={wrap} className="mx-auto w-full max-w-6xl px-4">
        <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16 / 9" }}>
          <iframe
            ref={frame}
            className="absolute left-0 w-full pointer-events-none"
            style={{ top: "-80px", height: "calc(100% + 160px)" }}
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?enablejsapi=1&mute=1&playsinline=1&rel=0&modestbranding=1&controls=0&disablekb=1&iv_load_policy=3&loop=1&playlist=${VIDEO_ID}`}
            title="NIUM video"
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
