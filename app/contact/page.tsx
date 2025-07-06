"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import { Mail, MessageCircle, Users } from "lucide-react";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
              Contact
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
            >
              <p className="text-sm sm:text-base leading-relaxed text-gray-300 text-center">
                Have questions about MOV? Want to collaborate? Just want to say
                hi? We&apos;d love to hear from you!
              </p>
            </motion.section>

            {/* Contact Methods */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8 text-center">
                Get in Touch
              </h2>

              <div className="space-y-6 sm:space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2">
                      Email
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-2">
                      For general inquiries and support
                    </p>
                    <a
                      href="mailto:hello@movapp.com"
                      className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      hello@movapp.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2">
                      Discord
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-2">
                      Join our community and chat with us
                    </p>
                    <a
                      href="https://discord.gg/movapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    >
                      Join Discord
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-1 sm:mb-2">
                      Social Media
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-2">
                      Follow us for updates and behind-the-scenes
                    </p>
                    <div className="space-y-1">
                      <a
                        href="https://tiktok.com/@movapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        TikTok
                      </a>
                      <a
                        href="https://x.com/movapp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      >
                        X (Twitter)
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.section>

            {/* FAQ */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 sm:mb-8 text-center">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4 sm:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    When will MOV be available?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    We&apos;re working hard to bring MOV to you as soon as
                    possible. Join our waitlist to be notified when we launch!
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    What devices will MOV support?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    MOV will be available on both iOS and Android devices.
                    We&apos;re also planning a web version for easy sharing.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    How does the AI editing work?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    Our AI analyzes all the videos from your event and
                    automatically creates a cohesive, engaging aftermovie with
                    smooth transitions and highlights the best moments.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="bg-gray-800/50 rounded-lg p-4 sm:p-6"
                >
                  <h3 className="font-semibold text-white mb-2 text-sm sm:text-base">
                    Is MOV free to use?
                  </h3>
                  <p className="text-sm sm:text-base text-gray-300">
                    We&apos;re still finalizing our pricing model, but we plan
                    to offer both free and premium features. Early waitlist
                    members will get special perks!
                  </p>
                </motion.div>
              </div>
            </motion.section>

            {/* CTA */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="text-center"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                Ready to Join the Revolution?
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mb-6">
                Be among the first to experience the future of event memories
              </p>
              <a
                href="/"
                className="inline-block bg-white text-black font-semibold py-3 px-6 sm:px-8 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm sm:text-base"
              >
                Join the Waitlist
              </a>
            </motion.section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
