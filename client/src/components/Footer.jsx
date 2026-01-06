import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b0b0f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 sm:py-8 md:py-10">
        {/* Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Name */}
          <h3 className="text-base sm:text-lg font-semibold tracking-wide">
            Manoj <span className="text-purple-400">MV</span>
          </h3>

          {/* Social Links */}
          <div className="flex gap-5 sm:gap-6">
            <a
              href="https://github.com/Manoj-velmurugan"
              target="_blank"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/manoj-mv/"
              target="_blank"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:manojvelmurugan04@gmail.com"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-5 sm:mt-6 text-center text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()} Manoj MV. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
