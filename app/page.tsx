"use client";

import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import Footer from "@/components/Footer";
import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  const handleEmailSubmit = async (email: string) => {
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        // setUserRank(data.rank);
        // setReferralCode(data.referralCode);
        // setIsSubmitted(true);
      } else {
        const error = await response.json();
        alert(error.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between">
      <Header />
      <VideoPlayer />
      <WaitlistForm onSubmit={handleEmailSubmit} />
      <Footer />
    </div>
  );
}
