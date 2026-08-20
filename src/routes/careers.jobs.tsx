import { createFileRoute } from "@tanstack/react-router";
import { PostingsBoard } from "@/components/PostingsBoard";

export const Route = createFileRoute("/careers/jobs")({
  component: JobsPage,
  head: () => ({
    meta: [
      { title: "Jobs — Careers at NIUM" },
      {
        name: "description",
        content:
          "Full-time openings at the National Institute of Urban Management across urban planning, IT, capacity building, procurement and research.",
      },
      { property: "og:title", content: "Jobs at NIUM" },
      {
        property: "og:description",
        content: "Current full-time openings at the National Institute of Urban Management.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function JobsPage() {
  return (
    <PostingsBoard
      kind="job"
      badgeLabel="Vacancy"
      eyebrow="Career"
      title="Open roles at NIUM"
      intro="Full-time roles across urban planning, IT, capacity building, procurement and research."
      emptyTitle="No positions available right now"
      emptyBody="There are no open roles at the moment. New vacancies will be published on this page as soon as recruitment opens — please check back shortly."
    />
  );
}
