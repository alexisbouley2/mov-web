/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";

interface PrivacyContentProps {
  showBackButton?: boolean;
}

export default function PrivacyContent({
  showBackButton = true,
}: PrivacyContentProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-light text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">Last updated: August 22, 2025</p>
        </motion.div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              Introduction
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                This Privacy Notice for MOV ("we," "us," or "our"), describes
                how and why we might access, collect, store, use, and/or share
                ("process") your personal information when you use our services
                ("Services"), including when you download and use our mobile
                application (MOV), or any other application of ours that links
                to this Privacy Notice, or otherwise engage with us in other
                related ways, including any sales, marketing, or events.
              </p>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <p className="text-gray-200">
                  <strong>Questions or concerns?</strong> Reading this Privacy
                  Notice will help you understand your privacy rights and
                  choices. We are responsible for making decisions about how
                  your personal information is processed. If you do not agree
                  with our policies and practices, please do not use our
                  Services. If you still have any questions or concerns, please
                  contact us at{" "}
                  <a
                    href="mailto:hellomovapp@gmail.com"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    hellomovapp@gmail.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </motion.section>

          {/* Summary of Key Points */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              Summary of Key Points
            </h2>

            <div className="space-y-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  What personal information do we process?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  When you visit, use, or navigate our Services, we may process
                  personal information depending on how you interact with us and
                  the Services, the choices you make, and the products and
                  features you use.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  Do we process any sensitive personal information?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We do not process sensitive personal information.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  Do we collect any information from third parties?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We do not collect any information from third parties.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  How do we process your information?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We process your information to provide, improve, and
                  administer our Services, communicate with you, for security
                  and fraud prevention, and to comply with law. We may also
                  process your information for other purposes with your consent.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  How do we keep your information safe?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We have adequate organizational and technical processes and
                  procedures in place to protect your personal information.
                  However, no electronic transmission over the internet or
                  information storage technology can be guaranteed to be 100%
                  secure.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  What are your rights?
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Depending on where you are located geographically, the
                  applicable privacy law may mean you have certain rights
                  regarding your personal information.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Table of Contents */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              Table of Contents
            </h2>

            <div className="grid gap-2 text-sm">
              <a
                href="#infocollect"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                1. What Information Do We Collect?
              </a>
              <a
                href="#infouse"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                2. How Do We Process Your Information?
              </a>
              <a
                href="#legalbases"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                3. What Legal Bases Do We Rely On?
              </a>
              <a
                href="#whoshare"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                4. When And With Whom Do We Share?
              </a>
              <a
                href="#ai"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                5. Do We Offer AI-Based Products?
              </a>
              <a
                href="#inforetain"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                6. How Long Do We Keep Your Information?
              </a>
              <a
                href="#infosafe"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                7. How Do We Keep Your Information Safe?
              </a>
              <a
                href="#privacyrights"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                8. What Are Your Privacy Rights?
              </a>
              <a
                href="#DNT"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                9. Controls For Do-Not-Track Features
              </a>
              <a
                href="#uslaws"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                10. Do US Residents Have Specific Rights?
              </a>
              <a
                href="#otherlaws"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                11. Do Other Regions Have Specific Rights?
              </a>
              <a
                href="#policyupdates"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                12. Do We Make Updates To This Notice?
              </a>
              <a
                href="#contact"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                13. How Can You Contact Us?
              </a>
              <a
                href="#request"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                14. How Can You Review, Update, Or Delete Data?
              </a>
            </div>
          </motion.section>

          {/* Information We Collect */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            id="infocollect"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              1. What Information Do We Collect?
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Personal Information You Disclose to Us
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We collect personal information that you voluntarily provide
                  to us when you register on the Services, express an interest
                  in obtaining information about us or our products and
                  Services, when you participate in activities on the Services,
                  or otherwise when you contact us.
                </p>

                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                  <h4 className="font-medium text-white mb-3">
                    Personal Information Provided by You
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    The personal information that we collect depends on the
                    context of your interactions with us and the Services, the
                    choices you make, and the products and features you use. The
                    personal information we collect may include:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-4">
                    <li>Phone numbers</li>
                    <li>Email addresses</li>
                    <li>Usernames</li>
                    <li>Passwords</li>
                    <li>Contact preferences</li>
                    <li>Contact or authentication data</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Application Data
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you use our application(s), we also may collect the
                  following information if you choose to provide us with access
                  or permission:
                </p>

                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                    <li>
                      <strong>Mobile Device Access:</strong> Camera, contacts,
                      microphone, reminders, SMS messages, and other features
                    </li>
                    <li>
                      <strong>Mobile Device Data:</strong> Device information,
                      operating system, IP address, browser type, and more
                    </li>
                    <li>
                      <strong>Push Notifications:</strong> Account and feature
                      notifications
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* How We Process Your Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            id="infouse"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              2. How Do We Process Your Information?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We process your information to provide, improve, and administer
              our Services, communicate with you, for security and fraud
              prevention, and to comply with law. We may also process your
              information for other purposes with your consent.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  To facilitate account creation and authentication
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may process your information so you can create and log in
                  to your account, as well as keep your account in working
                  order.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  To deliver and facilitate delivery of services
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may process your information to provide you with the
                  requested service.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  To respond to user inquiries and offer support
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may process your information to respond to your inquiries
                  and solve any potential issues you might have with the
                  requested service.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  To send administrative information
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may process your information to send you details about our
                  products and services, changes to our terms and policies, and
                  other similar information.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Legal Bases */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            id="legalbases"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              3. What Legal Bases Do We Rely On?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We only process your personal information when we believe it is
              necessary and we have a valid legal reason (i.e., legal basis) to
              do so under applicable law, like with your consent, to comply with
              laws, to provide you with services to enter into or fulfill our
              contractual obligations, to protect your rights, or to fulfill our
              legitimate business interests.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">Consent</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may process your information if you have given us
                  permission (i.e., consent) to use your personal information
                  for a specific purpose. You can withdraw your consent at any
                  time.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  Performance of a Contract
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may process your personal information when we believe it is
                  necessary to fulfill our contractual obligations to you,
                  including providing our Services or at your request prior to
                  entering into a contract with you.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  Legitimate Interests
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may process your information when we believe it is
                  reasonably necessary to achieve our legitimate business
                  interests and those interests do not outweigh your fundamental
                  rights and freedoms.
                </p>
              </div>
            </div>
          </motion.section>

          {/* When and With Whom Do We Share */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            id="whoshare"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              4. When And With Whom Do We Share?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We may share information in specific situations described in this
              section and/or with the following categories of third parties.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  Vendors, Consultants, and Other Third-Party Service Providers
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may share your data with third-party vendors, service
                  providers, contractors, or agents who perform services for us
                  or on our behalf and require access to such information to do
                  that work.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  Business Transfers
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may share or transfer your information in connection with,
                  or during negotiations of, any merger, sale of company assets,
                  financing, or acquisition of all or a portion of our business
                  to another company.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">Affiliates</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may share your information with our affiliates, in which
                  case we will require those affiliates to honor this Privacy
                  Notice.
                </p>
              </div>
            </div>
          </motion.section>

          {/* AI Products Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            id="ai"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              5. Do We Offer AI-Based Products?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              As part of our Services, we offer products, features, or tools
              powered by artificial intelligence, machine learning, or similar
              technologies (collectively, "AI Products"). These tools are
              designed to enhance your experience and provide you with
              innovative solutions.
            </p>

            <div className="space-y-4">
              <div className="bg-blue-900/20 border border-blue-800/30 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">Our AI Products</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-3">
                  Our AI Products are designed for the following functions:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-300 ml-4">
                  <li>Image analysis</li>
                  <li>Video analysis</li>
                  <li>Video generation</li>
                </ul>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  How We Process Your Data Using AI
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All personal information processed using our AI Products is
                  handled in line with our Privacy Notice and our agreement with
                  third parties. This ensures high security and safeguards your
                  personal information throughout the process.
                </p>
              </div>
            </div>
          </motion.section>

          {/* How Long Do We Keep Your Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            id="inforetain"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              6. How Long Do We Keep Your Information?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this Privacy Notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements).
            </p>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such
                information, or, if this is not possible (for example, because
                your personal information has been stored in backup archives),
                then we will securely store your personal information and
                isolate it from any further processing until deletion is
                possible.
              </p>
            </div>
          </motion.section>

          {/* How Do We Keep Your Information Safe */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            id="infosafe"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              7. How Do We Keep Your Information Safe?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We aim to protect your personal information through a system of
              organizational and technical security measures. We have
              implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  Security Measures
                </h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Secure data centers and infrastructure</li>
                </ul>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">Limitations</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  However, despite our safeguards and efforts to secure your
                  information, no electronic transmission over the Internet or
                  information storage technology can be guaranteed to be 100%
                  secure. While we strive to use commercially acceptable means
                  to protect your personal information, we cannot guarantee its
                  absolute security.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Your Privacy Rights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            id="privacyrights"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              8. What Are Your Privacy Rights?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              In some regions (like the EEA, UK, Switzerland, and Canada), you
              have certain rights under applicable data protection laws. These
              may include the right to request access and obtain a copy of your
              personal information, to request rectification or erasure, to
              restrict the processing of your personal information, and more.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  Withdrawing your consent
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  If we are relying on your consent to process your personal
                  information, you have the right to withdraw your consent at
                  any time. You can withdraw your consent at any time by
                  contacting us.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  Opting out of marketing communications
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  You can unsubscribe from our marketing and promotional
                  communications at any time by clicking on the unsubscribe link
                  in the emails that we send, replying "STOP" or "UNSUBSCRIBE"
                  to the SMS messages that we send, or by contacting us.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Do-Not-Track Features */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            id="DNT"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              9. Controls For Do-Not-Track Features
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online.
            </p>
          </motion.section>

          {/* US Residents Rights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            id="uslaws"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              10. Do US Residents Have Specific Rights?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              If you are a resident of California, Colorado, Connecticut, Utah,
              or Virginia, you are entitled to specific rights under applicable
              US state laws.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  California Residents
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  California Civil Code Section 1798.83, also known as the
                  "Shine The Light" law, permits our users who are California
                  residents to request and obtain from us, once a year and free
                  of charge, information about the personal information (if any)
                  we disclosed to third parties for direct marketing purposes.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  Other State Residents
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Residents of Colorado, Connecticut, Utah, and Virginia have
                  similar rights under their respective state laws, including
                  the right to access, correct, delete, and port their personal
                  information.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Other Regions Rights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            id="otherlaws"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              11. Do Other Regions Have Specific Rights?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              If you are located in certain regions, you may have specific
              rights regarding your personal information.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  European Economic Area (EEA), UK, and Switzerland
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  If you are located in the EEA, UK, or Switzerland, you have
                  the right to access, rectify, or erase your personal data,
                  restrict processing, data portability, and object to
                  processing. You also have the right to lodge a complaint with
                  your local data protection authority.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">Canada</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Canadian residents have the right to access, correct, or
                  delete their personal information, and to withdraw consent for
                  processing. You may also file a complaint with the Office of
                  the Privacy Commissioner of Canada.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Policy Updates */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            id="policyupdates"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              12. Do We Make Updates To This Notice?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              We may update this Privacy Notice from time to time. The updated
              version will be indicated by an updated "Revised" date and the
              updated version will be effective as soon as it is accessible.
            </p>

            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 text-sm leading-relaxed">
                We encourage you to review this Privacy Notice frequently to be
                informed of how we are protecting your information. If we make
                material changes to this Privacy Notice, we may notify you
                either by prominently posting a notice of such changes or by
                directly sending you a notification.
              </p>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            id="contact"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              13. How Can You Contact Us About This Notice?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              If you have questions or comments about this notice, you may
              contact our Data Protection Officer (DPO) by email, phone, or
              post. For information about our terms of service, please see our{" "}
              <a
                href="/terms"
                className="text-blue-400 hover:text-blue-300 transition-colors underline"
              >
                Terms of Use
              </a>
              .
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 text-center">
                <h3 className="font-medium text-white mb-3">Email</h3>
                <a
                  href="mailto:hellomovapp@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  hellomovapp@gmail.com
                </a>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 text-center">
                <h3 className="font-medium text-white mb-3">Phone</h3>
                <a
                  href="tel:+33659471126"
                  className="text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  +33 6 59 47 11 26
                </a>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6 text-center">
                <h3 className="font-medium text-white mb-3">Address</h3>
                <div className="text-gray-300 text-sm">
                  <p>MOV</p>
                  <p>Data Protection Officer</p>
                  <p>38 Rue de Dunkerque</p>
                  <p>Paris 75009</p>
                  <p>France</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* How Can You Review, Update, Or Delete Data */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            id="request"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              14. How Can You Review, Update, Or Delete Data?
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, change that information, or delete it in some
              circumstances.
            </p>

            <div className="space-y-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">
                  Data Access and Modification
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  To request to review, update, or delete your personal
                  information, please submit a request by contacting us at the
                  email address provided in the contact section. We will respond
                  to your request within 30 days.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">Verification</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may need to verify your identity before processing your
                  request. We may request additional information to confirm your
                  identity and ensure the security of your personal information.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center pt-8 border-t border-gray-700"
          >
            <p className="text-sm text-gray-400 mb-8">
              Last updated: August 22, 2025
            </p>

            {showBackButton && (
              <a
                href="/"
                className="inline-block bg-white text-black font-medium py-3 px-8 rounded-lg hover:bg-gray-200 transition-all duration-300 text-sm"
              >
                Back to Home
              </a>
            )}
          </motion.section>
        </div>
      </div>
    </div>
  );
}
