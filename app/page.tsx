"use client";

import Header from "@/components/Header";
import VideoPlayer from "@/components/VideoPlayer";
import Footer from "@/components/Footer";
import HomeContent from "@/components/HomeContent";
import ClientWrapper from "@/components/ClientWrapper";

export default function Home() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-between">
      <Header />
      <VideoPlayer />

      <ClientWrapper>
        <HomeContent />
      </ClientWrapper>

      <Footer />
    </div>
  );
}
