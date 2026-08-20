import { createFileRoute } from "@tanstack/react-router";
import { PostingsBoard } from "@/components/PostingsBoard";

export const Route = createFileRoute("/competitions")({
  component: CompetitionsPage,
  head: () => ({
    meta: [
      { title: "Events & Competitions — NIUM" },
      {
        name: "description",
        content:
          "Latest competitions, ideathons, hackathons and challenges hosted by the National Institute of Urban Management, Government of Telangana.",
      },
      { property: "og:title", content: "Events & Competitions at NIUM" },
      {
        property: "og:description",
        content: "Ideathons, challenges and open competitions hosted by NIUM.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function CompetitionsPage() {
  return (
    <PostingsBoard
      kind="competition"
      badgeLabel="Competition"
      eyebrow="Events"
      title="Latest competitions"
      intro="Ideathons, hackathons, design challenges and open calls hosted by NIUM."
      emptyTitle="No competitions open right now"
      emptyBody="There are no live competitions at the moment. Upcoming challenges and open calls, with eligibility and deadlines, will be listed here."
    />
  );
}
