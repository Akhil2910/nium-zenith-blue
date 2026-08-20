import { createFileRoute } from "@tanstack/react-router";
import { NoticeBoardPage } from "@/components/NoticeBoardPage";

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
    <NoticeBoardPage
      eyebrow="Tenders"
      title="Tenders & procurement notices"
      intro="RFPs, EOIs, pre-bid notices and corrigenda issued by NIUM."
      emptyTitle="No live tenders at the moment"
      emptyBody="All published tenders have closed. New notices, along with bid documents and timelines, will appear here as soon as they are issued."
    />
  );
}
