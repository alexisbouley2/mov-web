"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TermsContent from "@/components/TermsContent";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header showBackButton={true} />

      {/* Main Content */}
      <TermsContent showBackButton={true} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
