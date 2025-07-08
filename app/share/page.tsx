"use client";

import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";

type DeviceType = "ios" | "android" | "desktop";

export default function SharePage() {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");
  const [isRedirecting, setIsRedirecting] = useState(true);

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

    // Auto-redirect based on device type
    const redirectUser = () => {
      try {
        if (deviceType === "ios") {
          window.location.href = process.env.NEXT_PUBLIC_APP_STORE_URL!;
        } else if (deviceType === "android") {
          window.location.href = process.env.NEXT_PUBLIC_PLAY_STORE_URL!;
        } else {
          // Desktop users go to main page
          window.location.href = "/";
        }
      } catch (error) {
        console.error("Redirect failed:", error);
        setIsRedirecting(false);
      }
    };

    // Small delay to ensure device detection is complete
    const timer = setTimeout(redirectUser, 100);
    return () => clearTimeout(timer);
  }, [deviceType]);

  // Show loading while redirecting
  if (isRedirecting) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="text-center">
          <LoadingSpinner />
          <p className="text-white mt-4">
            {deviceType === "ios" && "Redirecting to App Store..."}
            {deviceType === "android" && "Redirecting to Play Store..."}
            {deviceType === "desktop" && "Redirecting to MOV..."}
          </p>
        </div>
      </div>
    );
  }

  // Fallback in case redirect fails
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-md w-full">
        <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
          <h1 className="text-2xl font-bold text-white mb-3">🚀 Get MOV App</h1>
          <p className="text-gray-300 mb-6">
            Download the MOV app to start sharing and creating amazing moments
            with friends.
          </p>

          <div className="space-y-3">
            {deviceType === "ios" && (
              <button
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_APP_STORE_URL!, "_blank")
                }
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
              >
                Download on App Store
              </button>
            )}

            {deviceType === "android" && (
              <button
                onClick={() =>
                  window.open(process.env.NEXT_PUBLIC_PLAY_STORE_URL!, "_blank")
                }
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
              >
                Download on Google Play
              </button>
            )}

            {deviceType === "desktop" && (
              <button
                onClick={() => (window.location.href = "/")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
              >
                Go to MOV
              </button>
            )}
          </div>

          <p className="text-gray-400 text-sm mt-4">
            {deviceType === "desktop"
              ? "Visit MOV to learn more about our platform."
              : "Download the app to start sharing moments with friends."}
          </p>
        </div>
      </div>
    </div>
  );
}
