"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const [currentVideo, setCurrentVideo] = useState<"landing" | "waitlist">(
    "landing"
  );

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVideoEnded = () => {
    if (currentVideo === "landing") {
      setCurrentVideo("waitlist");
    }
  };

  return (
    <>
      {/* Centered Video */}
      <div className="flex flex-col items-center justify-center flex-1 w-full px-2 sm:px-0">
        <div className="relative flex flex-col items-center justify-center w-full">
          <div className="w-full flex justify-center">
            <div className="relative w-full sm:w-[80vw] max-w-[1024px] aspect-video bg-black rounded-xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <video
                src={
                  currentVideo === "landing"
                    ? "/MOV-Landing.mp4"
                    : "/MOV-Waitlist.mp4"
                }
                autoPlay
                loop={currentVideo === "waitlist"}
                muted={isMuted}
                playsInline
                onEnded={handleVideoEnded}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Sound Toggle Button - Bottom Right of Screen */}
      <button
        onClick={toggleMute}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 glass-effect p-2 sm:p-3 rounded-full hover:bg-white/20 transition-all duration-300"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        ) : (
          <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        )}
      </button>
    </>
  );
}
