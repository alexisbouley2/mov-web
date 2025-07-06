"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Share2, Users } from "lucide-react";

export default function WaitlistPage() {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const rank = searchParams.get("rank");
  const referralCode = searchParams.get("referralCode");

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4">
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
            Thanks for joining our waitlist. We&apos;ll notify you when
            it&apos;s your turn.
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

        {/* Referral Code */}
        {referralCode && (
          <div className="bg-gray-900 rounded-lg p-4 space-y-3">
            <p className="text-gray-400 text-sm">Share your referral code:</p>
            <div className="flex items-center justify-between bg-gray-800 rounded px-3 py-2">
              <code className="text-white font-mono text-sm">
                {referralCode}
              </code>
              <button
                onClick={() => navigator.clipboard.writeText(referralCode)}
                className="text-blue-500 hover:text-blue-400 transition-colors"
              >
                <Share2 className="w-4 h-4" />
              </button>
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
    </div>
  );
}
