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
          <div className="w-16 h-px bg-gray-600 mx-auto mb-4"></div>
          <p className="text-sm text-gray-400">
            Last updated August 22, 2025
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-invert max-w-none"
          >
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              This Privacy Notice for MOV ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you download and use our mobile application (MOV), or any other application of ours that links to this Privacy Notice, or otherwise engage with us in other related ways, including any sales, marketing, or events.
            </p>
            
            <div className="mt-8 p-6 bg-gray-900/50 border border-gray-700 rounded-lg">
              <p className="text-gray-200 text-base">
                <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:hellomovapp@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">hellomovapp@gmail.com</a>.
              </p>
            </div>
          </motion.section>

          {/* Summary of Key Points */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-light text-white mb-8 border-b border-gray-700 pb-2">
              Summary of Key Points
            </h2>
            
            <div className="grid gap-6">
              <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg">
                <h3 className="font-medium text-white mb-3">What personal information do we process?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use.
                </p>
              </div>

              <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg">
                <h3 className="font-medium text-white mb-3">Do we process any sensitive personal information?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We do not process sensitive personal information.
                </p>
              </div>

              <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg">
                <h3 className="font-medium text-white mb-3">Do we collect any information from third parties?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We do not collect any information from third parties.
                </p>
              </div>

              <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg">
                <h3 className="font-medium text-white mb-3">How do we process your information?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
                </p>
              </div>

              <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg">
                <h3 className="font-medium text-white mb-3">How do we keep your information safe?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure.
                </p>
              </div>

              <div className="p-6 bg-gray-900/30 border border-gray-800 rounded-lg">
                <h3 className="font-medium text-white mb-3">What are your rights?</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Table of Contents */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-2xl font-light text-white mb-8 border-b border-gray-700 pb-2">
              Table of Contents
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#infocollect" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  1. What Information Do We Collect?
                </a>
                <a href="#infouse" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  2. How Do We Process Your Information?
                </a>
                <a href="#legalbases" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  3. What Legal Bases Do We Rely On?
                </a>
                <a href="#whoshare" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  4. When And With Whom Do We Share?
                </a>
                <a href="#ai" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  5. Do We Offer AI-Based Products?
                </a>
                <a href="#inforetain" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  6. How Long Do We Keep Your Information?
                </a>
                <a href="#infosafe" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  7. How Do We Keep Your Information Safe?
                </a>
              </div>
              
              <div className="space-y-3">
                <a href="#privacyrights" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  8. What Are Your Privacy Rights?
                </a>
                <a href="#DNT" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  9. Controls For Do-Not-Track Features
                </a>
                <a href="#uslaws" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  10. Do US Residents Have Specific Rights?
                </a>
                <a href="#otherlaws" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  11. Do Other Regions Have Specific Rights?
                </a>
                <a href="#policyupdates" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  12. Do We Make Updates To This Notice?
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  13. How Can You Contact Us?
                </a>
                <a href="#request" className="block text-gray-300 hover:text-white transition-colors text-sm py-2 border-b border-gray-800 hover:border-gray-600">
                  14. How Can You Review, Update, Or Delete Data?
                </a>
              </div>
            </div>
          </motion.section>

          {/* Information We Collect */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            id="infocollect"
          >
            <h2 className="text-2xl font-light text-white mb-8 border-b border-gray-700 pb-2">
              1. What Information Do We Collect?
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-white mb-4">Personal Information You Disclose to Us</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                </p>
                
                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                  <h4 className="font-medium text-white mb-3">Personal Information Provided by You</h4>
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include:
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
                <h3 className="text-lg font-medium text-white mb-4">Application Data</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:
                </p>
                
                <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                  <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 ml-4">
                    <li><strong>Mobile Device Access:</strong> Camera, contacts, microphone, reminders, SMS messages, and other features</li>
                    <li><strong>Mobile Device Data:</strong> Device information, operating system, IP address, browser type, and more</li>
                    <li><strong>Push Notifications:</strong> Account and feature notifications</li>
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
          >
            <h2 className="text-2xl font-light text-white mb-8 border-b border-gray-700 pb-2">
              2. How Do We Process Your Information?
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">To facilitate account creation and authentication</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may process your information so you can create and log in to your account, as well as keep your account in working order.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">To deliver and facilitate delivery of services</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may process your information to provide you with the requested service.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">To respond to user inquiries and offer support</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">To send administrative information</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.
                </p>
              </div>
            </div>
          </motion.section>

          {/* AI Products Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            id="ai"
          >
            <h2 className="text-2xl font-light text-white mb-8 border-b border-gray-700 pb-2">
              5. Do We Offer Artificial Intelligence-Based Products?
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions.
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
                <h3 className="font-medium text-white mb-3">How We Process Your Data Using AI</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process.
                </p>
              </div>
            </div>
          </motion.section>

          {/* How We Keep Your Information Safe */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            id="infosafe"
          >
            <h2 className="text-2xl font-light text-white mb-8 border-b border-gray-700 pb-2">
              7. How Do We Keep Your Information Safe?
            </h2>
            
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
              <h3 className="font-medium text-white mb-3">Security Measures</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
              </p>
            </div>
          </motion.section>

          {/* Your Privacy Rights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            id="privacyrights"
          >
            <h2 className="text-2xl font-light text-white mb-8 border-b border-gray-700 pb-2">
              8. What Are Your Privacy Rights?
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              In some regions (like the EEA, UK, Switzerland, and Canada), you have certain rights under applicable data protection laws. These may include the right to request access and obtain a copy of your personal information, to request rectification or erasure, to restrict the processing of your personal information, and more.
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">Withdrawing your consent</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  If we are relying on your consent to process your personal information, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us.
                </p>
              </div>

              <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-6">
                <h3 className="font-medium text-white mb-3">Opting out of marketing communications</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Contact Information */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            id="contact"
          >
            <h2 className="text-2xl font-light text-white mb-8 border-b border-gray-700 pb-2">
              13. How Can You Contact Us About This Notice?
            </h2>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              If you have questions or comments about this notice, you may contact our Data Protection Officer (DPO) by email, phone, or post.
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
