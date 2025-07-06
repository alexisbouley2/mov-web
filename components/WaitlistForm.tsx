"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface WaitlistFormProps {
  onSubmit: (email: string) => void;
}

export default function WaitlistForm({ onSubmit }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value === "") {
      setIsValid(true);
    } else {
      setIsValid(validateEmail(value));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setIsValid(false);
      return;
    }
    setIsSubmitting(true);
    try {
      await onSubmit(email);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

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
            placeholder="Email"
            className={`flex-1 h-9 sm:h-10 text-xs sm:text-sm bg-[#111] border border-[#333] rounded-l-lg sm:rounded-l-xl rounded-r-none px-3 sm:px-4 text-white placeholder-gray-400 focus:outline-none focus:border-white transition-all duration-200 font-light font-inter ${
              !isValid ? "border-red-400" : ""
            }`}
            disabled={isSubmitting}
            autoComplete="email"
          />
          <button
            type="submit"
            disabled={!isValid || isSubmitting || !email}
            className="h-9 sm:h-10 px-4 sm:px-5 bg-white text-black font-light text-xs sm:text-sm rounded-r-lg sm:rounded-r-xl rounded-l-none shadow-md transition-all duration-200 hover:bg-gray-100 disabled:opacity-60 disabled:cursor-not-allowed font-inter"
          >
            {isSubmitting ? <span className="animate-pulse">...</span> : "Join"}
          </button>
        </div>
        <div className="h-6 mt-2 ml-2 ">
          {!isValid && email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-xs sm:text-sm"
            >
              Please enter a valid email address
            </motion.p>
          )}
        </div>
      </form>
    </motion.div>
  );
}
