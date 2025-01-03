import Card from "@/app/components/Card";
import Link from "next/link";

export default function ArchivedNotifications() {
  return (
    <Card>
      <h1>Archieved Notifications</h1>
      <Link href="/complex-dashboard" className="text-blue-500">
        Default
      </Link>
    </Card>
  );
}
