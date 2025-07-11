"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import InviteContent from "@/components/InviteContent";
import LoadingSpinner from "@/components/LoadingSpinner";
import { ValidateInviteResponse } from "@movapp/types";

export default function InvitePage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const validateInvite = async () => {
      const token = params.token as string;

      if (!token) {
        setError("Invalid invite link");
        setLoading(false);
        return;
      }

      try {
        const response = await fetch("/api/invite/validate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });

        const data: ValidateInviteResponse = await response.json();

        if (!data.valid) {
          setError(data.error || "Invalid invite");
          setLoading(false);
          return;
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to validate invite"
        );
      } finally {
        setLoading(false);
      }
    };

    validateInvite();
  }, [params.token]);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">
            Invalid Invitation
          </h1>
          <p className="text-gray-400 mb-6">{error}</p>
          <button
            onClick={() => router.push("/")}
            className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return <InviteContent token={params.token as string} />;
}
