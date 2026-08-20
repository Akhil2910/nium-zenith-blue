import { createFileRoute } from "@tanstack/react-router";
import { PostingsBoard } from "@/components/PostingsBoard";

export const Route = createFileRoute("/tenders")({
  component: TendersPage,
  head: () => ({
    meta: [
      { title: "Tenders — NIUM Procurement Notices" },
      {
        name: "description",
        content:
          "Live tenders, RFPs, EOIs and pre-bid notices issued by the National Institute of Urban Management, Government of Telangana.",
      },
      { property: "og:title", content: "Tenders at NIUM" },
      {
        property: "og:description",
        content: "Procurement notices, RFPs and EOIs issued by NIUM.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function TendersPage() {
  return (
    <PostingsBoard
      kind="tender"
      badgeLabel="Tender Notice"
      eyebrow="Tenders"
      title="Tenders & procurement notices"
      intro="RFPs, EOIs, pre-bid notices and corrigenda issued by NIUM."
      emptyTitle="No live tenders right now"
      emptyBody="There are no open tender notices at the moment. New RFPs, EOIs and corrigenda will be published on this page."
    />
  );
}
