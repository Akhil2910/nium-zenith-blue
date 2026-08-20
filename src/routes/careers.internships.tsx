import { createFileRoute } from "@tanstack/react-router";
import { PostingsBoard } from "@/components/PostingsBoard";

export const Route = createFileRoute("/careers/internships")({
  component: InternshipsPage,
  head: () => ({
    meta: [
      { title: "Internships — Careers at NIUM" },
      {
        name: "description",
        content:
          "Structured internships at NIUM for students of planning, public policy, architecture, engineering and data, with mentorship and field exposure.",
      },
      { property: "og:title", content: "Internships at NIUM" },
      {
        property: "og:description",
        content:
          "Structured internships with mentorship and field exposure across Telangana's urban sector.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function InternshipsPage() {
  return (
    <PostingsBoard
      kind="internship"
      badgeLabel="Internship"
      eyebrow="Career"
      title="Internships at NIUM"
      intro="Structured internships for students of planning, public policy, architecture, engineering and data — with mentorship and field exposure."
      emptyTitle="No internship openings right now"
      emptyBody="Applications are currently closed. The next internship cycle will be announced on this page — please check back shortly."
    />
  );
}
