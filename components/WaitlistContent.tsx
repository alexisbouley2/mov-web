"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  CheckCircle,
  Share2,
  Users,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";
import { useState } from "react";

export default function WaitlistContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const rank = searchParams.get("rank");
  const referralCode = searchParams.get("referralCode");
  const [isCopied, setIsCopied] = useState(false);
  const referralLink = `${window.location.origin}?ref=${referralCode}`;

  const copyReferralLink = async () => {
    if (referralCode) {
      try {
        await navigator.clipboard.writeText(referralLink);
        setIsCopied(true);
      } catch (error) {
        console.error("Failed to copy link:", error);
        alert("Failed to copy link. Please try again.");
      }
    }
  };

  const shareReferralLink = async () => {
    if (referralCode) {
      if (navigator.share) {
        try {
          await navigator.share({
            title: "Join the MOV waitlist!",
            text: "I just joined the MOV waitlist and got early access. Join me!",
            url: referralLink,
          });
        } catch (error) {
          console.error("Error sharing:", error);
          // Fallback to copying
          await copyReferralLink();
        }
      } else {
        // Fallback to copying the full link
        await copyReferralLink();
      }
    }
  };

  return (
    <div className="max-w-md w-full text-center space-y-8">
      {/* Success Icon */}
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>

      {/* Success Message */}
      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-white">
          You&apos;re on the list!
        </h1>
        <p className="text-gray-300 text-lg">
          Thanks for joining our waitlist. We&apos;ll notify you when it&apos;s
          your turn.
        </p>
      </div>

      {/* Email Display */}
      {email && (
        <div className="bg-gray-900 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Registered email:</p>
          <p className="text-white font-medium">{email}</p>
        </div>
      )}

      {/* Rank Display */}
      {rank && (
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex items-center justify-center space-x-2">
            <Users className="w-5 h-5 text-blue-500" />
            <span className="text-gray-400">Your position:</span>
            <span className="text-white font-bold text-xl">#{rank}</span>
          </div>
        </div>
      )}

      {/* Referral Code Section */}
      {referralCode && (
        <div className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/30 rounded-lg p-6 space-y-4">
          <div className="space-y-2">
            <h3 className="text-white font-semibold text-lg">Share & Earn</h3>
            <p className="text-gray-300 text-sm">
              Share your referral link and help others join the waitlist!
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-gray-400 text-sm">Your referral link:</p>
            <div className="flex items-center justify-between bg-gray-800 rounded-lg px-4 py-3">
              <code className="text-white font-mono text-lg font-bold">
                {referralLink}
              </code>
              <button
                onClick={copyReferralLink}
                className="text-blue-500 hover:text-blue-400 transition-colors p-1"
                title="Copy referral link"
              >
                {isCopied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>

            <button
              onClick={shareReferralLink}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Referral Link</span>
            </button>

            <p className="text-gray-400 text-xs">
              {isCopied
                ? "Link copied to clipboard!"
                : "Share your unique link with friends"}
            </p>
          </div>
        </div>
      )}

      {/* Back to Home */}
      <div className="pt-8">
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
