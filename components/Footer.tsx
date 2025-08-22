export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center gap-4 sm:gap-6 pb-6 sm:pb-8">
      {/* Social Links */}
      <div className="flex justify-center items-center gap-4 sm:gap-6 mt-2 sm:mt-4">
        {/* TikTok */}
        <a
          href="https://tiktok.com/@movapp"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-white hover:text-gray-300 transition-all duration-300 p-1.5 sm:p-2 rounded-full hover:bg-white/10"
          aria-label="Follow us on TikTok"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </a>
        {/* Discord */}
        <a
          href="https://discord.gg/movapp"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-white hover:text-gray-300 transition-all duration-300 p-1.5 sm:p-2 rounded-full hover:bg-white/10"
          aria-label="Join our Discord"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z" />
          </svg>
        </a>
        {/* X */}
        <a
          href="https://x.com/movapp"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon text-white hover:text-gray-300 transition-all duration-300 p-1.5 sm:p-2 rounded-full hover:bg-white/10"
          aria-label="Follow us on X"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </a>
      </div>

      {/* Legal Links */}
      <div className="flex justify-center items-center gap-6 sm:gap-8 mt-4">
        <a
          href="/privacy"
          className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300"
        >
          Privacy Policy
        </a>
        <a
          href="/terms"
          className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-300"
        >
          Terms of Use
        </a>
      </div>
    </div>
  );
}
