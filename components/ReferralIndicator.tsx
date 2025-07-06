interface ReferralIndicatorProps {
  referralCode: string | null;
}

export default function ReferralIndicator({
  referralCode,
}: ReferralIndicatorProps) {
  if (!referralCode) {
    return null;
  }

  return (
    <div className="w-full max-w-md mx-auto px-4 mb-4">
      <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 text-center">
        <p className="text-blue-300 text-sm">
          🎉 You were invited! Join the waitlist to get early access.
        </p>
      </div>
    </div>
  );
}
