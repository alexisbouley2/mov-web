"use client";

import { motion } from "framer-motion";
import { FileText, CheckCircle, AlertTriangle, Users } from "lucide-react";

interface TermsContentProps {
  showBackButton?: boolean;
}

export default function TermsContent({
  showBackButton = true,
}: TermsContentProps) {
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
              Terms & Conditions
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
                <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-gray-300">
                By using MOV, you agree to these terms and conditions. Please
                read them carefully before using our service.
              </p>
            </motion.section>

            {/* Acceptance of Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                Acceptance of Terms
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Agreement to Terms
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      By accessing or using MOV, you agree to be bound by these
                      Terms and Conditions and all applicable laws and
                      regulations.
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
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Age Requirement
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      You must be at least 13 years old to use MOV. If you are
                      under 18, you must have parental consent.
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
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Account Responsibility
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      You are responsible for maintaining the confidentiality of
                      your account and for all activities under your account.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Use of Service */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                Use of Service
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Permitted Use
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    MOV is designed for creating and sharing aftermovies of
                    events. You may use the service for personal, non-commercial
                    purposes.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Content Guidelines
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    You agree not to upload content that is illegal, harmful,
                    threatening, abusive, or violates the rights of others.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Prohibited Activities
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    You may not attempt to gain unauthorized access to our
                    systems, interfere with service operation, or use the
                    service for spam.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* User Content */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                User Content
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.0 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Ownership
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      You retain ownership of content you upload, but grant us a
                      license to use, store, and display it for service
                      provision.
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
                    <Users className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      License Grant
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      By uploading content, you grant us a worldwide,
                      non-exclusive license to use your content for service
                      improvement and features.
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
                    <Users className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Content Removal
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      We reserve the right to remove content that violates these
                      terms or is otherwise objectionable.
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* Intellectual Property */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Intellectual Property
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                MOV and its original content, features, and functionality are
                owned by us and are protected by international copyright,
                trademark, and other intellectual property laws.
              </p>
              <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
                <li>
                  You may not copy, modify, or distribute our software or
                  content
                </li>
                <li>
                  Our trademarks and trade dress may not be used without
                  permission
                </li>
                <li>You retain rights to your original content</li>
                <li>We may use anonymized data for service improvement</li>
              </ul>
            </motion.section>

            {/* Disclaimers and Limitations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.6 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8">
                Disclaimers and Limitations
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.8 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Service Availability
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    We strive to provide reliable service but cannot guarantee
                    uninterrupted access. Service may be temporarily unavailable
                    for maintenance.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.9 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Content Accuracy
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    We do not guarantee the accuracy, completeness, or
                    usefulness of any content on MOV. Use content at your own
                    risk.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 3.0 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Limitation of Liability
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    We shall not be liable for any indirect, incidental,
                    special, consequential, or punitive damages arising from
                    your use of MOV.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 3.1 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Indemnification
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    You agree to indemnify and hold us harmless from any claims
                    arising from your use of MOV or violation of these terms.
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* Termination */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Termination
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                We may terminate or suspend your account and access to MOV at
                any time, with or without cause, with or without notice.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Account Termination
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      Upon termination, your right to use MOV ceases
                      immediately. We may delete your account and content.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <AlertTriangle className="w-4 h-4 sm:w-5 sm:w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2 text-sm sm:text-base">
                      Survival
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300">
                      Certain provisions of these terms will survive
                      termination, including intellectual property and liability
                      limitations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Changes to Terms */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.4 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Changes to Terms
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                We reserve the right to modify these terms at any time. We will
                notify users of significant changes via email or in-app
                notification.
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6">
                <p className="text-sm sm:text-base text-gray-300">
                  Continued use of MOV after changes constitutes acceptance of
                  the new terms. If you disagree with changes, you must stop
                  using the service.
                </p>
              </div>
            </motion.section>

            {/* Contact Us */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.6 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
                Contact Us
              </h2>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please
                contact us at:
              </p>
              <div className="bg-gray-800/50 rounded-lg p-4 sm:p-6">
                <p className="text-white font-semibold text-sm sm:text-base mb-2">
                  Email:
                </p>
                <a
                  href="mailto:legal@movapp.com"
                  className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  legal@movapp.com
                </a>
              </div>
            </motion.section>

            {/* Footer Info */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.8 }}
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
