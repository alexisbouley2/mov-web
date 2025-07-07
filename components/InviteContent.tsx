"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/lib/config";

type DeviceType = "ios" | "android" | "desktop";

export default function InviteContent({ token }: { token: string }) {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");

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

  useEffect(() => {
    // Auto-redirect based on device type
    if (deviceType === "desktop") {
      return; // Don't auto-redirect on desktop
    }

    const redirectToApp = () => {
      const deepLinkUrl = `mov://invite/${token}`;
      window.location.href = deepLinkUrl;
    };

    console.log("redirecting to app");
    console.log("url", config().NEXT_PUBLIC_APP_STORE_URL);
    console.log("url", config().NEXT_PUBLIC_PLAY_STORE_URL);

    const redirectToStore = () => {
      if (deviceType === "ios") {
        console.log("redirecting to app store");
        window.location.href = config().NEXT_PUBLIC_APP_STORE_URL;
      } else {
        console.log("redirecting to play store");
        window.location.href = config().NEXT_PUBLIC_PLAY_STORE_URL;
      }
    };

    // Try to open app first, then redirect to store after 2 seconds
    redirectToApp();
    setTimeout(redirectToStore, 2000);
  }, [deviceType, token]);

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
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  // Mobile view - show loading while redirecting
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Opening MOV App...
        </h1>
        <p className="text-gray-400">Redirecting you to join the event</p>
      </div>
    </div>
  );
}
