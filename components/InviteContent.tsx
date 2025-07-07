"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type DeviceType = "ios" | "android" | "desktop";
type AppState = "detecting" | "ready" | "attempting" | "failed" | "success";

export default function InviteContent({ token }: { token: string }) {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");
  const [appState, setAppState] = useState<AppState>("detecting");
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
    setAppState("ready");
  }, []);

  const attemptAppOpen = async () => {
    setAppState("attempting");
    setError("");

    const deepLinkUrl = `mov://invite/${token}`;
    let timeoutId: NodeJS.Timeout;
    let blurHandler: () => void;

    return new Promise<boolean>((resolve) => {
      // Track if the page loses focus (app likely opened)
      let appOpened = false;

      blurHandler = () => {
        appOpened = true;
        setAppState("success");
        resolve(true);
      };

      // Set up visibility change listener for better detection
      const visibilityHandler = () => {
        if (document.hidden) {
          appOpened = true;
          setAppState("success");
          resolve(true);
        }
      };

      // Add event listeners
      window.addEventListener("blur", blurHandler);
      document.addEventListener("visibilitychange", visibilityHandler);

      // Set timeout for fallback
      timeoutId = setTimeout(() => {
        if (!appOpened) {
          setAppState("failed");
          setError(
            deviceType === "ios"
              ? "Couldn't open the MOV app. Make sure it's installed on your device."
              : "Unable to open the MOV app. Please check if it's installed."
          );
          resolve(false);
        }

        // Clean up listeners
        window.removeEventListener("blur", blurHandler);
        document.removeEventListener("visibilitychange", visibilityHandler);
      }, 3000); // Increased timeout for better user experience

      // Attempt to open the app
      try {
        // For iOS, we can use a more sophisticated approach
        if (deviceType === "ios") {
          // Create a hidden iframe to attempt the deep link
          const iframe = document.createElement("iframe");
          iframe.style.display = "none";
          iframe.src = deepLinkUrl;
          document.body.appendChild(iframe);

          // Clean up iframe after a short delay
          setTimeout(() => {
            document.body.removeChild(iframe);
          }, 100);
        } else {
          // For Android, direct window.location works better
          window.location.href = deepLinkUrl;
        }
      } catch (e) {
        clearTimeout(timeoutId);
        setAppState("failed");
        setError("An error occurred while trying to open the app.");
        window.removeEventListener("blur", blurHandler);
        document.removeEventListener("visibilitychange", visibilityHandler);
        resolve(false);
      }
    });
  };

  const openAppStore = () => {
    if (deviceType === "ios") {
      window.open(process.env.NEXT_PUBLIC_APP_STORE_URL!, "_blank");
    } else {
      window.open(process.env.NEXT_PUBLIC_PLAY_STORE_URL!, "_blank");
    }
  };

  // Handle manual app opening attempt
  const handleOpenApp = async () => {
    const success = await attemptAppOpen();
    if (!success) {
      // App failed to open, show options to user
      setAppState("failed");
    }
  };

  if (deviceType === "desktop") {
    return (
      <div className="min-h-screen bg-black flex flex-col">
        <Header />
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <div className="max-w-md w-full text-center">
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

  // Mobile view with improved states
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6">
      <div className="text-center max-w-md w-full">
        {appState === "detecting" && (
          <div>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <h1 className="text-2xl font-bold text-white mb-2">Preparing...</h1>
          </div>
        )}

        {appState === "ready" && (
          <div className="space-y-6">
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-6">
              <h1 className="text-2xl font-bold text-white mb-3">
                🎉 You&apos;re Invited!
              </h1>
              <p className="text-gray-300 mb-4">
                You&apos;ve been invited to join an event on MOV. Tap the button
                below to open the app.
              </p>
              <button
                onClick={handleOpenApp}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors w-full"
              >
                Open MOV App
              </button>
            </div>
          </div>
        )}

        {appState === "attempting" && (
          <div>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Opening MOV App...
            </h1>
          </div>
        )}

        {appState === "failed" && (
          <div className="space-y-6">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-white mb-3">
                ⚠️ App Not Found
              </h2>
              <p className="text-gray-300 mb-4">
                {error ||
                  "Couldn't open the MOV app. You may need to install it first."}
              </p>
              <div className="flex flex-col gap-3">
                <button
                  onClick={openAppStore}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Download MOV App
                </button>
                <button
                  onClick={handleOpenApp}
                  className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {appState === "success" && (
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-3">
              ✅ Success!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
