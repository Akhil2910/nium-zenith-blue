import { ArrowLeft } from "lucide-react";
import { Link, useRouter } from "@tanstack/react-router";

/**
 * Back control for inner pages. Uses browser history when there is somewhere to
 * go back to, otherwise falls back to a link to the home page.
 */
export function BackButton({
  to = "/",
  label = "Back",
  className = "",
}: {
  to?: string;
  label?: string;
  className?: string;
}) {
  const router = useRouter();

  const canGoBack =
    typeof window !== "undefined" && window.history.length > 1;

  const base =
    "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-[var(--shadow-card)] hover:border-accent/50 hover:text-accent transition " +
    className;

  if (canGoBack) {
    return (
      <button type="button" onClick={() => router.history.back()} className={base}>
        <ArrowLeft size={16} /> {label}
      </button>
    );
  }

  return (
    <Link to={to as never} className={base}>
      <ArrowLeft size={16} /> {label}
    </Link>
  );
}
