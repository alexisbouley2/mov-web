"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";

interface WaitlistFormProps {
  onSubmit: (email: string) => Promise<void>;
  isLoading?: boolean;
}

export default function WaitlistForm({
  onSubmit,
  isLoading = false,
}: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }, []);

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setEmail(value);

      if (value === "") {
        setIsValid(true);
      } else {
        setIsValid(validateEmail(value));
      }
    },
    [validateEmail]
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateEmail(email)) {
        setIsValid(false);
        return;
      }

      try {
        await onSubmit(email);
        // Clear form on successful submission
        setEmail("");
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    },
    [email, validateEmail, onSubmit]
  );

  const handleKeyPress = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSubmit(e);
      }
    },
    [handleSubmit]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="w-full max-w-[280px] sm:max-w-xs mx-auto px-2 sm:px-0"
    >
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex w-full">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter your email"
            aria-label="Email address"
            className={`flex-1 h-9 sm:h-10 text-xs sm:text-sm bg-[#111] border border-[#333] rounded-l-lg sm:rounded-l-xl rounded-r-none px-3 sm:px-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-200 font-light font-inter ${
              !isValid ? "border-red-400" : ""
            }`}
            disabled={isLoading}
            autoComplete="email"
            required
          />
          <button
            type="submit"
            disabled={!isValid || isLoading || !email}
            aria-label="Join waitlist"
            className="h-9 sm:h-10 px-4 sm:px-5 bg-white text-black font-light text-xs sm:text-sm rounded-r-lg sm:rounded-r-xl rounded-l-none shadow-md transition-all duration-200 hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed font-inter"
          >
            {isLoading ? (
              <span className="animate-pulse" aria-label="Loading...">
                ...
              </span>
            ) : (
              "Join"
            )}
          </button>
        </div>

        {/* Validation Error */}
        <div className="h-6 mt-2 ml-2">
          {!isValid && email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs sm:text-sm"
              role="alert"
            >
              Please enter a valid email address
            </motion.p>
          )}
        </div>

        {/* Legal Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 text-center"
        >
          <p className="text-xs text-gray-400 mb-2">
            By joining the waitlist, you agree to our{" "}
            <a
              href="/privacy"
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="/terms"
              className="text-blue-400 hover:text-blue-300 transition-colors underline"
            >
              Terms of Use
            </a>
          </p>
        </motion.div>
      </form>
    </motion.div>
  );
}
