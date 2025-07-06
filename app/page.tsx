"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";
import ErrorDisplay from "@/components/ErrorDisplay";
import ReferralIndicator from "@/components/ReferralIndicator";
import { useWaitlist } from "@/hooks/useWaitlist";

export default function Home() {
  const searchParams = useSearchParams();
  const { submitEmail, isLoading, error, clearError } = useWaitlist();
  const referralCode = searchParams.get("ref");

  // Auto-clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between">
      <Header />
      <VideoPlayer />

      {/* Referral Message */}
      <ReferralIndicator referralCode={referralCode} />

      {/* Error Display */}
      {error && <ErrorDisplay error={error} />}

      <WaitlistForm onSubmit={submitEmail} isLoading={isLoading} />
      <Footer />
    </div>
  );
}
