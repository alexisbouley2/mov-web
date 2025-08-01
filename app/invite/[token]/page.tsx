"use client";

import { useParams } from "next/navigation";
import InviteContent from "@/components/InviteContent";

export default function InvitePage() {
  const params = useParams();

  return <InviteContent token={params.token as string} />;
}
