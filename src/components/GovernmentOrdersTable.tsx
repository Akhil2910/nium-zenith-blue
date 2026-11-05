import { useState } from "react";
import { Download, LoaderCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export type GovernmentOrder = { name: string; url: string; filename: string };

export function GovernmentOrdersTable({ orders }: { orders: GovernmentOrder[] }) {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function download(order: GovernmentOrder) {
    setDownloading(order.filename);
    setError(null);
    try {
      const response = await fetch(order.url);
      if (!response.ok) throw new Error("Download failed");
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = order.filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 30000);
    } catch {
      setError("The download could not be completed. Please try again.");
    } finally {
      setDownloading(null);
    }
  }

  return (
    <div>
      {error && <p role="alert" className="mb-4 text-destructive">{error}</p>}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm md:text-base">
          <thead className="bg-primary text-primary-foreground">
            <tr>
              <th scope="col" className="border border-border p-3 md:p-4">S.No.</th>
              <th scope="col" className="border border-border p-3 text-center md:p-4">Name of the GO</th>
              <th scope="col" className="border border-border p-3 md:p-4">Download</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order.filename} className="even:bg-muted/40">
                <td className="border border-border p-3 align-top md:p-4">{index + 1}</td>
                <td className="min-w-48 border border-border p-3 leading-relaxed md:p-4">{order.name}</td>
                <td className="border border-border p-2 md:p-3">
                  <Button variant="link" className="px-1" disabled={downloading !== null} onClick={() => download(order)} aria-label={`Download ${order.name}`}>
                    {downloading === order.filename ? <LoaderCircle className="animate-spin" /> : <Download />}
                    Download
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}