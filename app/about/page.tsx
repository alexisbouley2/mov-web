"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <Header showBackButton={true} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-2xl mx-auto">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-2">
              About
            </h1>
            <div className="w-12 h-px bg-gray-600 mx-auto"></div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-12 sm:space-y-16">
            {/* Why we created MOV */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Why we created MOV
              </h2>
              <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                We created MOV because we were tired of the chaos that happens
                after every epic night out. You know the drill – someone&apos;s
                frantically texting the group chat asking for photos, another
                person is trying to piece together what happened from blurry
                screenshots, and everyone&apos;s memories are scattered across
                different phones. We wanted something that just works. No more
                &quot;send me that video&quot; or &quot;who has the photo from
                last night?&quot; – just fire up MOV, let everyone capture their
                perspective, and watch the AI magic happen. It&apos;s like
                having a personal videographer for every moment, except
                it&apos;s actually fun and doesn&apos;t cost a fortune.
              </p>
            </motion.section>

            {/* How to use it */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                How to use it
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm font-medium">
                      1
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-gray-300">
                      <strong className="text-white">Start your story.</strong>{" "}
                      Create an event or jump straight into recording – no
                      complicated setup, just pure spontaneity.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm font-medium">
                      2
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-gray-300">
                      <strong className="text-white">Bring your crew.</strong>{" "}
                      Invite your friends with a simple tap – they&apos;ll get
                      the vibe instantly.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm font-medium">
                      3
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-gray-300">
                      <strong className="text-white">
                        Capture the moment.
                      </strong>{" "}
                      The app gently nudges you to share your perspective – no
                      pressure, just pure authenticity.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                  className="flex items-start gap-3 sm:gap-4"
                >
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-xs sm:text-sm font-medium">
                      4
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm sm:text-base text-gray-300">
                      <strong className="text-white">Relive the magic.</strong>{" "}
                      Your memories are waiting for you – watch them anytime,
                      anywhere, and feel like you&apos;re right back in that
                      moment.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
