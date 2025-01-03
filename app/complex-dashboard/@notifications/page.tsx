import Card from "@/app/components/Card";
import Link from "next/link";

export default function Notifications() {
  return (
    <>
      <Card>
        Notifications <br />
        <Link href="/complex-dashboard/archived" className="text-blue-500">
          {" "}
          Archeived
        </Link>
      </Card>
      ;
    </>
  );
}
