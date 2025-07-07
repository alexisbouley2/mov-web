"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock } from "lucide-react";

interface PrivacyContentProps {
  showBackButton?: boolean;
}

export default function PrivacyContent({
  showBackButton = true,
}: PrivacyContentProps) {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
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
              Privacy Policy
            </h1>
            <div className="w-12 h-px bg-gray-600 mx-auto"></div>
          </motion.div>

          {/* Content Sections */}
          <div className="space-y-12 sm:space-y-16">
            {/* Intro */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                Your privacy is important to us. This policy explains how we
                collect, use, and protect your information when you use MOV.
              </p>
            </motion.section>

            {/* Information We Collect */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                Information We Collect
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Personal Information
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      Email address, name, and profile information you provide
                      when creating an account or joining our waitlist.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Content
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      Videos, photos, and other content you upload or create
                      using MOV.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Usage Data
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      Information about how you use our app, including features
                      used and interaction patterns.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* How We Use Your Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                How We Use Your Information
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Provide Our Services
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    To create and deliver your aftermovies, manage your account,
                    and provide customer support.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Improve Our App
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    To analyze usage patterns and improve our AI algorithms and
                    user experience.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Communicate With You
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    To send you updates about MOV, respond to your inquiries,
                    and notify you about new features.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* How We Protect Your Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                How We Protect Your Information
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Encryption
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      All data is encrypted in transit and at rest using
                      industry-standard protocols.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Access Controls
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      Strict access controls ensure only authorized personnel
                      can access your data.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lock className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Regular Audits
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      We regularly audit our security practices and update them
                      as needed.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Sharing Your Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Sharing Your Information
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to
                third parties. We may share your information only in the
                following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>
                  With service providers who help us operate MOV (under strict
                  confidentiality agreements)
                </li>
              </ul>
            </motion.section>

            {/* Your Rights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                Your Rights
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.8 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Access
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Request a copy of the personal information we hold about
                    you.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.9 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Correction
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Request correction of inaccurate or incomplete information.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 3.0 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Deletion
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Request deletion of your personal information and account.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 3.1 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Portability
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Request transfer of your data to another service.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* Contact Us */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6">
                <p className="text-white font-semibold text-sm sm:text-base mb-2">
                  Email:
                </p>
                <a
                  href="mailto:privacy@movapp.com"
                  className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  privacy@movapp.com
                </a>
              </div>
            </motion.section>

            {/* Footer Info */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.4 }}
              className="text-center"
            >
              <p className="text-xs sm:text-sm text-gray-400 mb-6">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              {showBackButton && (
                <a
                  href="/"
                  className="inline-block bg-white text-black font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
                >
                  Back to Home
                </a>
              )}
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
