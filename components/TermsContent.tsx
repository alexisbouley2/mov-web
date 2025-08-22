/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";

interface TermsContentProps {
  showBackButton?: boolean;
}

export default function TermsContent({
  showBackButton = true,
}: TermsContentProps) {
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
            Terms of Use
          </h1>
          <p className="text-gray-400 text-sm">Last updated: August 22, 2025</p>
        </motion.div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          {/* Agreement Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              Agreement to Our Legal Terms
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We are <strong>MOV</strong> ("Company," "we," "us," "our"). We
                operate our mobile application (MOV), as well as any other
                related products and services that refer or link to these legal
                terms (the "Legal Terms") (collectively, the "Services").
              </p>

              <p>
                You can contact us by email at{" "}
                <a
                  href="mailto:hellomovapp@gmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  hellomovapp@gmail.com
                </a>{" "}
                or by mail to MOV, Data Protection Officer, 38 Rue de Dunkerque,
                Paris 75009, France.
              </p>

              <p>
                These Legal Terms constitute a legally binding agreement made
                between you, whether personally or on behalf of an entity
                ("you"), and MOV, concerning your access to and use of the
                Services. You agree that by accessing the Services, you have
                read, understood, and agreed to be bound by all of these Legal
                Terms.{" "}
                <strong>
                  IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU
                  ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
                  DISCONTINUE USE IMMEDIATELY.
                </strong>
              </p>

              <p>
                Supplemental terms and conditions or documents that may be
                posted on the Services from time to time are hereby expressly
                incorporated herein by reference. We reserve the right, in our
                sole discretion, to make changes or modifications to these Legal
                Terms at any time and for any reason. We will alert you about
                any changes by updating the "Last updated" date of these Legal
                Terms, and you waive any right to receive specific notice of
                each such change.
              </p>

              <p>
                We recommend that you print a copy of these Legal Terms for your
                records.
              </p>
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
                href="#services"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                1. Our Services
              </a>
              <a
                href="#ip"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                2. Intellectual Property Rights
              </a>
              <a
                href="#userreps"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                3. User Representations
              </a>
              <a
                href="#prohibited"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                4. Prohibited Activities
              </a>
              <a
                href="#ugc"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                5. User Generated Contributions
              </a>
              <a
                href="#license"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                6. Contribution License
              </a>
              <a
                href="#sitemanage"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                7. Services Management
              </a>
              <a
                href="#terms"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                8. Term and Termination
              </a>
              <a
                href="#modifications"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                9. Modifications and Interruptions
              </a>
              <a
                href="#law"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                10. Governing Law
              </a>
              <a
                href="#disputes"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                11. Dispute Resolution
              </a>
              <a
                href="#corrections"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                12. Corrections
              </a>
              <a
                href="#disclaimer"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                13. Disclaimer
              </a>
              <a
                href="#liability"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                14. Limitations of Liability
              </a>
              <a
                href="#indemnification"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                15. Indemnification
              </a>
              <a
                href="#userdata"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                16. User Data
              </a>
              <a
                href="#electronic"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                17. Electronic Communications
              </a>
              <a
                href="#misc"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                18. Miscellaneous
              </a>
              <a
                href="#contact"
                className="text-blue-400 hover:text-blue-300 transition-colors py-1"
              >
                19. Contact Us
              </a>
            </div>
          </motion.section>

          {/* Our Services */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            id="services"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              1. Our Services
            </h2>

            <p className="text-gray-300 leading-relaxed">
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Services from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </p>
          </motion.section>

          {/* Intellectual Property Rights */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            id="ip"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              2. Intellectual Property Rights
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Our Intellectual Property
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We are the owner or the licensee of all intellectual property
                  rights in our Services, including all source code, databases,
                  functionality, software, website designs, audio, video, text,
                  photographs, and graphics in the Services (collectively, the
                  "Content"), as well as the trademarks, service marks, and
                  logos contained therein (the "Marks").
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Your Use of Our Services
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Subject to your compliance with these Legal Terms, including
                  the "Prohibited Activities" section below, we grant you a
                  non-exclusive, non-transferable, revocable license to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>access the Services; and</li>
                  <li>
                    download or print a copy of any portion of the Content to
                    which you have properly gained access, solely for your
                    personal, non-commercial use or internal business purpose.
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* User Representations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            id="userreps"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              3. User Representations
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              By using the Services, you represent and warrant that:
            </p>

            <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
              <li>
                you have the legal capacity and you agree to comply with these
                Legal Terms;
              </li>
              <li>
                you are not a minor in the jurisdiction in which you reside;
              </li>
              <li>
                you will not access the Services through automated or non-human
                means;
              </li>
              <li>
                you will not use the Services for any illegal or unauthorized
                purpose; and
              </li>
              <li>
                your use of the Services will not violate any applicable law or
                regulation.
              </li>
            </ol>
          </motion.section>

          {/* Prohibited Activities */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            id="prohibited"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              4. Prohibited Activities
            </h2>

            <p className="text-gray-300 leading-relaxed mb-4">
              You may not access or use the Services for any purpose other than
              that for which we make the Services available. The Services may
              not be used in connection with any commercial endeavors except
              those that are specifically endorsed or approved by us.
            </p>

            <p className="text-gray-300 leading-relaxed mb-4">
              As a user of the Services, you agree not to:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
              <li>
                Systematically retrieve data or other content from the Services
                to create or compile a collection, compilation, database, or
                directory without written permission from us.
              </li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with
                security-related features of the Services.
              </li>
              <li>
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Services.
              </li>
              <li>
                Use any information obtained from the Services in order to
                harass, abuse, or harm another person.
              </li>
              <li>
                Make improper use of our support services or submit false
                reports of abuse or misconduct.
              </li>
              <li>
                Use the Services in a manner inconsistent with any applicable
                laws or regulations.
              </li>
              <li>
                Engage in unauthorized framing of or linking to the Services.
              </li>
              <li>
                Upload or transmit viruses, Trojan horses, or other material
                that interferes with any party's uninterrupted use and enjoyment
                of the Services.
              </li>
              <li>
                Engage in any automated use of the system, such as using scripts
                to send comments or messages.
              </li>
              <li>
                Delete the copyright or other proprietary rights notice from any
                Content.
              </li>
              <li>
                Attempt to impersonate another user or person or use the
                username of another user.
              </li>
              <li>
                Upload or transmit any material that acts as a passive or active
                information collection or transmission mechanism.
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the
                Services or the networks or services connected to the Services.
              </li>
              <li>
                Harass, annoy, intimidate, or threaten any of our employees or
                agents engaged in providing any portion of the Services to you.
              </li>
              <li>
                Attempt to bypass any measures of the Services designed to
                prevent or restrict access to the Services.
              </li>
              <li>
                Copy or adapt the Services' software, including but not limited
                to Flash, PHP, HTML, JavaScript, or other code.
              </li>
              <li>
                Except as permitted by applicable law, decipher, decompile,
                disassemble, or reverse engineer any of the software comprising
                or in any way making up a part of the Services.
              </li>
              <li>
                Use, launch, develop, or distribute any automated system,
                including without limitation, any spider, robot, cheat utility,
                scraper, or offline reader that accesses the Services.
              </li>
              <li>
                Use a buying agent or purchasing agent to make purchases on the
                Services.
              </li>
              <li>
                Make any unauthorized use of the Services, including collecting
                usernames and/or email addresses of users by electronic or other
                means for the purpose of sending unsolicited email.
              </li>
              <li>
                Use the Services as part of any effort to compete with us or
                otherwise use the Services and/or the Content for any
                revenue-generating endeavor or commercial enterprise.
              </li>
            </ul>
          </motion.section>

          {/* User Generated Contributions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            id="ugc"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              5. User Generated Contributions
            </h2>

            <p className="text-gray-300 leading-relaxed">
              The Services does not offer users to submit or post content. We
              may provide you with the opportunity to create, submit, post,
              display, transmit, perform, publish, distribute, or broadcast
              content and materials to us or on the Services, including but not
              limited to text, writings, video, audio, photographs, graphics,
              comments, suggestions, or personal information or other material
              (collectively, "Contributions"). Contributions may be viewable by
              other users of the Services and through third-party websites.
            </p>
          </motion.section>

          {/* Contribution License */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            id="license"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              6. Contribution License
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                You and Services agree that we may access, store, process, and
                use any information and personal data that you provide and your
                choices (including settings).
              </p>

              <p>
                By submitting suggestions or other feedback regarding the
                Services, you agree that we can use and share such feedback for
                any purpose without compensation to you.
              </p>

              <p>
                We do not assert any ownership over your Contributions. You
                retain full ownership of all of your Contributions and any
                intellectual property rights or other proprietary rights
                associated with your Contributions. We are not liable for any
                statements or representations in your Contributions provided by
                you in any area on the Services. You are solely responsible for
                your Contributions to the Services and you expressly agree to
                exonerate us from any and all responsibility and to refrain from
                any legal action against us regarding your Contributions.
              </p>
            </div>
          </motion.section>

          {/* Services Management */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            id="sitemanage"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              7. Services Management
            </h2>

            <p className="text-gray-300 leading-relaxed">
              We reserve the right, but not the obligation, to: (1) monitor the
              Services for violations of these Legal Terms; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Legal Terms, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof; (4) in our sole discretion and without limitation,
              notice, or liability, to remove from the Services or otherwise
              disable all files and content that are excessive in size or are in
              any way burdensome to our systems; and (5) otherwise manage the
              Services in a manner designed to protect our rights and property
              and to facilitate the proper functioning of the Services.
            </p>
          </motion.section>

          {/* Term and Termination */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            id="terms"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              8. Term and Termination
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                These Legal Terms shall remain in full force and effect while
                you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF
                THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE
                DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND
                USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES),
                TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT
                LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR
                COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW
                OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE
                SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT
                ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
              </p>

              <p>
                If we terminate or suspend your account for any reason, you are
                prohibited from registering and creating a new account under
                your name, a fake or borrowed name, or the name of any third
                party, even if you may be acting on behalf of the third party.
                In addition to terminating or suspending your account, we
                reserve the right to take appropriate legal action, including
                without limitation pursuing civil, criminal, and injunctive
                redress.
              </p>
            </div>
          </motion.section>

          {/* Modifications and Interruptions */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            id="modifications"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              9. Modifications and Interruptions
            </h2>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                We reserve the right to change, modify, or remove the contents
                of the Services at any time or for any reason at our sole
                discretion without notice. However, we have no obligation to
                update any information on our Services. We will not be liable to
                you or any third party for any modification, price change,
                suspension, or discontinuance of the Services.
              </p>

              <p>
                We cannot guarantee the Services will be available at all times.
                We may experience hardware, software, or other problems or need
                to perform maintenance related to the Services, resulting in
                interruptions, delays, or errors. We reserve the right to
                change, revise, update, suspend, discontinue, or otherwise
                modify the Services at any time or for any reason without notice
                to you. You agree that we have no liability whatsoever for any
                loss, damage, or inconvenience caused by your inability to
                access or use the Services during any downtime or discontinuance
                of the Services. Nothing in these Legal Terms will be construed
                to obligate us to maintain and support the Services or to supply
                any corrections, updates, or releases in connection therewith.
              </p>
            </div>
          </motion.section>

          {/* Governing Law */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            id="law"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              10. Governing Law
            </h2>

            <p className="text-gray-300 leading-relaxed">
              These Legal Terms shall be governed by and defined following the
              laws of France. France and yourself irrevocably consent that the
              courts of France shall have exclusive jurisdiction to resolve any
              dispute which may arise in connection with these Legal Terms.
            </p>
          </motion.section>

          {/* Dispute Resolution */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            id="disputes"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              11. Dispute Resolution
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Informal Negotiations
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  To expedite resolution and control the cost of any dispute,
                  controversy, or claim related to these Legal Terms (each a
                  "Dispute" and collectively, the "Disputes") brought by either
                  you or us (individually, a "Party" and collectively, the
                  "Parties"), the Parties agree to first attempt to negotiate
                  any Dispute (except those Disputes expressly provided below)
                  informally for at least 30 days before initiating arbitration.
                  Such informal negotiations commence upon written notice from
                  one Party to the other Party.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Binding Arbitration
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Any dispute arising out of or in connection with these Legal
                  Terms, including any question regarding its existence,
                  validity, or termination, shall be referred to and finally
                  resolved by the International Commercial Arbitration Court
                  under the European Arbitration Chamber (Belgium, Brussels,
                  Avenue Louise, 146) according to the Rules of this ICAC,
                  which, as a result of referring to it, is considered as the
                  part of this clause. The number of arbitrators shall be 1. The
                  seat, or legal place, or arbitration shall be Brussels,
                  Belgium. The language of the proceedings shall be English. The
                  governing law of these Legal Terms shall be substantive law of
                  France.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Restrictions
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The Parties agree that any arbitration shall be limited to the
                  Dispute between the Parties individually. To the full extent
                  permitted by law, (a) no arbitration shall be joined with any
                  other proceeding; (b) there is no right or authority for any
                  Dispute to be arbitrated on a class-action basis or to utilize
                  class action procedures; and (c) there is no right or
                  authority for any Dispute to be brought in a purported
                  representative capacity on behalf of the general public or any
                  other persons.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Exceptions to Informal Negotiations and Arbitration
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  The Parties agree that the following Disputes are not subject
                  to the above provisions concerning informal negotiations
                  binding arbitration: (a) any Disputes seeking to enforce or
                  protect, or concerning the validity of, any of the
                  intellectual property rights of a Party; (b) any Dispute
                  related to, or arising from, allegations of theft, piracy,
                  invasion of privacy, or unauthorized use; and (c) any claim
                  for injunctive relief. If this provision is found to be
                  illegal or unenforceable, then neither Party will elect to
                  arbitrate any Dispute falling within that portion of this
                  provision found to be illegal or unenforceable and such
                  Dispute shall be decided by a court of competent jurisdiction
                  within the courts listed for jurisdiction above, and the
                  Parties agree to submit to the personal jurisdiction of that
                  court.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Corrections */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            id="corrections"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              12. Corrections
            </h2>

            <p className="text-gray-300 leading-relaxed">
              There may be information on the Services that contains
              typographical errors, inaccuracies, or omissions, including
              descriptions, pricing, availability, and various other
              information. We reserve the right to correct any errors,
              inaccuracies, or omissions and to change or update the information
              on the Services at any time, without prior notice.
            </p>
          </motion.section>

          {/* Disclaimer */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            id="disclaimer"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              13. Disclaimer
            </h2>

            <p className="text-gray-300 leading-relaxed">
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
              AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
              THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
              EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
              THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
              THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE
              CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
              SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
              (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
              (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
              RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY
              UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
              ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
              THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR
              FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
              LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY
              THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND
              MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
              RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE
              MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE,
              GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
              ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
              HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED
              IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO
              OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
              BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
              AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR
              IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
              CAUTION WHERE APPROPRIATE.
            </p>
          </motion.section>

          {/* Limitations of Liability */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.7 }}
            id="liability"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              14. Limitations of Liability
            </h2>

            <p className="text-gray-300 leading-relaxed">
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. CERTAIN US
              STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON
              IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN
              DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
              DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE
              ADDITIONAL RIGHTS.
            </p>
          </motion.section>

          {/* Indemnification */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            id="indemnification"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              15. Indemnification
            </h2>

            <p className="text-gray-300 leading-relaxed">
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys' fees and expenses, made by any third party due to or
              arising out of: (1) use of the Services; (2) breach of these Legal
              Terms; (3) any breach of your representations and warranties set
              forth in these Legal Terms; (4) your violation of the rights of a
              third party, including but not limited to intellectual property
              rights; or (5) any overt harmful act toward any other user of the
              Services with whom you connected via the Services. Notwithstanding
              the foregoing, we reserve the right, at your expense, to assume
              the exclusive defense and control of any matter for which you are
              required to indemnify us, and you agree to cooperate, at your
              expense, with our defense of such claims. We will use reasonable
              efforts to notify you of any such claim, action, or proceeding
              which is subject to this indemnification upon becoming aware of
              it.
            </p>
          </motion.section>

          {/* User Data */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.9 }}
            id="userdata"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              16. User Data
            </h2>

            <p className="text-gray-300 leading-relaxed">
              We will maintain certain data that you transmit to the Services
              for the purpose of managing the performance of the Services, as
              well as data relating to your use of the Services. Although we
              perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any
              activity you have undertaken using the Services. You agree that we
              shall have no liability to you for any loss or corruption of any
              such data, and you hereby waive any right of action against us
              arising from any such loss or corruption of such data.
            </p>
          </motion.section>

          {/* Electronic Communications */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.0 }}
            id="electronic"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              17. Electronic Communications, Transactions, and Signatures
            </h2>

            <p className="text-gray-300 leading-relaxed">
              Visiting the Services, sending us emails, and completing online
              forms constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Services, satisfy any legal
              requirement that such communication be in writing. YOU HEREBY
              AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND
              OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
              AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA
              THE SERVICES. You hereby waive any rights or requirements under
              any statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or
              retention of non-electronic records, or to payments or the
              granting of credits by any means other than electronic means.
            </p>
          </motion.section>

          {/* Miscellaneous */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            id="misc"
            className="mb-12"
          >
            <h2 className="text-2xl font-light text-white mb-6 border-b border-gray-700 pb-2">
              18. Miscellaneous
            </h2>

            <p className="text-gray-300 leading-relaxed">
              These Legal Terms and any policies or operating rules posted by us
              on the Services or in respect to the Services constitute the
              entire agreement and understanding between you and us. Our failure
              to exercise or enforce any right or provision of these Legal Terms
              shall not operate as a waiver of such right or provision. These
              Legal Terms operate to the fullest extent permissible by law. We
              may assign any or all of our rights and obligations to others at
              any time. We shall not be responsible or liable for any loss,
              damage, delay, or failure to act caused by any cause beyond our
              reasonable control. If any provision or part of a provision of
              these Legal Terms is determined to be unlawful, void, or
              unenforceable, that provision or part of the provision is deemed
              severable from these Legal Terms and does not affect the validity
              and enforceability of any remaining provisions. There is no joint
              venture, partnership, employment or agency relationship created
              between you and us as a result of these Legal Terms or use of the
              Services. You agree that these Legal Terms will not be construed
              against us by virtue of having drafted them. You hereby waive any
              and all defenses you may have based on the electronic form of
              these Legal Terms and the lack of signing by the parties hereto to
              execute these Legal Terms.
            </p>
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
              19. Contact Us
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              In order to resolve a complaint regarding the Services or to
              receive further information regarding use of the Services, please
              contact us at:
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
            transition={{ duration: 0.6, delay: 0.9 }}
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
