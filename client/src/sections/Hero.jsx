import AnimatedRole from "../components/AnimatedRole";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="
    flex items-center justify-center
    pt-20 pb-20
    sm:pt-16 sm:pb-16
    md:min-h-screen
    relative overflow-hidden
  "
    >
      {/* Radial Blueprint Sketch Background */}
      <svg
        className="
          absolute inset-0 w-full h-full z-0
          opacity-20 sm:opacity-30
          scale-110 sm:scale-100
        "
        viewBox="0 0 1200 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left sketches */}
        <rect
          x="80"
          y="220"
          width="180"
          height="110"
          rx="10"
          className="sketch-line delay-6 opacity-40"
        />
        <path
          d="M170 340 L170 420"
          className="sketch-line delay-7 opacity-40"
        />
        <path
          d="M120 460 L220 460"
          className="sketch-line delay-8 opacity-40"
        />

        {/* Right sketches */}
        <rect
          x="940"
          y="240"
          width="180"
          height="110"
          rx="10"
          className="sketch-line delay-6 opacity-40"
        />
        <path
          d="M1030 360 L1030 440"
          className="sketch-line delay-7 opacity-40"
        />
        <path
          d="M980 480 L1080 480"
          className="sketch-line delay-8 opacity-40"
        />

        {/* Center rings */}
        <circle cx="600" cy="350" r="90" className="sketch-line" />
        <circle cx="600" cy="350" r="150" className="sketch-line delay-1" />
        <circle cx="600" cy="350" r="220" className="sketch-line delay-2" />

        {/* Connections */}
        <line
          x1="600"
          y1="130"
          x2="600"
          y2="200"
          className="sketch-line delay-3"
        />
        <line
          x1="600"
          y1="500"
          x2="600"
          y2="570"
          className="sketch-line delay-3"
        />
        <line
          x1="380"
          y1="350"
          x2="450"
          y2="350"
          className="sketch-line delay-4"
        />
        <line
          x1="750"
          y1="350"
          x2="820"
          y2="350"
          className="sketch-line delay-4"
        />

        {/* Nodes */}
        <circle cx="600" cy="130" r="12" className="sketch-line delay-5" />
        <circle cx="600" cy="570" r="12" className="sketch-line delay-5" />
        <circle cx="380" cy="350" r="12" className="sketch-line delay-6" />
        <circle cx="820" cy="350" r="12" className="sketch-line delay-6" />
      </svg>

      {/* Background glow */}
      <div
        className="
          absolute
          w-[280px] h-[280px]
          sm:w-[420px] sm:h-[420px]
          bg-purple-600/20
          blur-[120px]
          rounded-full
          animate-pulse
        "
      />

      {/* Center Content */}
      <div className="relative z-10 text-center max-w-xl px-6 animate-float">
        <p className="text-gray-400 mb-2 text-sm sm:text-base">Hi, I am</p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
          Manoj <span className="text-purple-400">MV</span>
        </h1>

        <AnimatedRole />

        <p className="text-gray-400 mt-5 leading-relaxed text-sm sm:text-base">
          Passionate about building modern web applications with clean UI and
          scalable backend systems.
        </p>

        {/* Socials */}
        <div className="flex justify-center gap-6 mt-6">
          <a
            className="text-gray-400 hover:text-white transition"
            href="https://github.com/Manoj-velmurugan"
            target="_blank"
          >
            <FaGithub size={22} />
          </a>
          <a
            className="text-gray-400 hover:text-white transition"
            href="https://www.linkedin.com/in/manoj-mv/"
            target="_blank"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            className="text-gray-400 hover:text-white transition"
            href="mailto:manojvelmurugan04@gmail.com"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Resume */}
        <div className="mt-8">
          <a
            href="https://drive.google.com/file/d/1cJWu9MHqJDjQBU5OEAaczh65WSf3Lm4k/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              px-6 py-3
              rounded-full
              bg-purple-600 text-white
              font-medium
              transition-all duration-300
              hover:bg-purple-500
              hover:shadow-[0_0_30px_rgba(168,85,247,0.7)]
            "
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
