"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type DeviceType = "ios" | "android" | "desktop" | "unknown";

export default function InviteContent({ token }: { token: string }) {
  const [deviceType, setDeviceType] = useState<DeviceType>("unknown");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Detect device type
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDeviceType("ios");
    } else if (/android/.test(userAgent)) {
      setDeviceType("android");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  // Show empty page while device type is unknown
  if (deviceType === "unknown") {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <div className="flex-1"></div>
      </div>
    );
  }

  const handleOpenApp = () => {
    try {
      setError(""); // Clear any previous errors
      const deepLinkUrl = `mov://invite/${token}`;
      window.location.href = deepLinkUrl;
    } catch (e) {
      setError(
        "Unable to open the MOV app. Please make sure it's installed on your device."
      );
    }
  };

  const handleDownloadApp = () => {
    try {
      setError(""); // Clear any previous errors
      if (deviceType === "ios") {
        window.open(process.env.NEXT_PUBLIC_APP_STORE_URL!, "_blank");
      } else {
        window.open(process.env.NEXT_PUBLIC_PLAY_STORE_URL!, "_blank");
      }
    } catch (e) {
      setError("Unable to open the app store. Please try again.");
    }
  };

  if (deviceType === "desktop") {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Header />

        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="max-w-md w-full text-center">
            {/* Mobile Required Message */}
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-white mb-3">
                  📱 Mobile Required
                </h2>
                <p className="text-gray-300 mb-4">
                  This event invitation can only be accessed from your mobile
                  device. Open this link on your phone to join the event.
                </p>
                <button
                  onClick={handleDownloadApp}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
                >
                  Get MOV App
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Mobile view - show invitation with user choice
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-md w-full">
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6 mb-6">
          <h1 className="text-2xl font-bold text-white mb-3">
            🎉 You&apos;re Invited!
          </h1>
          <p className="text-gray-300 mb-6">
            You&apos;ve been invited to join an event on MOV. Choose how
            you&apos;d like to continue:
          </p>

          <div className="space-y-3">
            <button
              onClick={handleOpenApp}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
            >
              Open MOV App
            </button>

            <button
              onClick={handleDownloadApp}
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
            >
              Download MOV App
            </button>
          </div>

          <p className="text-gray-400 text-sm mt-4">
            If you have the app installed, use &quot;Open MOV App&quot;.
            Otherwise, download it first.
          </p>
        </div>

        {/* Error handling */}
        {error && (
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-4">
            <p className="text-red-300 text-sm">{error}</p>
            <button
              onClick={() => setError("")}
              className="text-red-400 hover:text-red-300 text-sm mt-2 underline"
            >
              Dismiss
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
