import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface WaitlistError {
  message: string;
  type: "validation" | "duplicate" | "network" | "server";
}

export const useWaitlist = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<WaitlistError | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const submitEmail = useCallback(
    async (email: string) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch("/api/waitlist", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (response.ok && data.success) {
          // Redirect to waitlist success page with data
          const params = new URLSearchParams({
            email: data.email,
            rank: data.rank.toString(),
            referralCode: data.referralCode,
          });

          router.push(`/waitlist?${params.toString()}`);
        } else {
          // Handle different error cases with proper typing
          let errorData: WaitlistError;

          if (response.status === 409) {
            errorData = {
              message: "This email is already registered on our waitlist.",
              type: "duplicate",
            };
          } else if (response.status === 400) {
            errorData = {
              message: "Please enter a valid email address.",
              type: "validation",
            };
          } else {
            errorData = {
              message: data.error || "Something went wrong. Please try again.",
              type: "server",
            };
          }

          setError(errorData);
        }
      } catch (error) {
        console.error("Error submitting email:", error);
        setError({
          message: "Network error. Please check your connection and try again.",
          type: "network",
        });
      } finally {
        setIsLoading(false);
      }
    },
    [router]
  );

  return {
    submitEmail,
    isLoading,
    error,
    clearError,
  };
};
