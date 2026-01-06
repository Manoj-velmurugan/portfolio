import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiC, SiWebflow } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Tailwind", icon: <SiTailwindcss /> },
  { name: "Webflow", icon: <SiWebflow /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "Python", icon: <FaPython /> },
  { name: "C", icon: <SiC /> },
  { name: "Java", icon: <FaJava /> },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24 md:py-28 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 sm:mb-14 md:mb-16 text-center">
          <span className="text-purple-400">My</span> Skills
        </h2>

        {/* Skills Grid */}
        <div className="flex justify-center">
          <div
            className="
              grid
              grid-cols-4
              sm:grid-cols-5
              md:grid-cols-6
   gap-4 sm:gap-6 md:gap-10

              place-items-center
              max-w-6xl
              w-full
            "
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="
                  group
                  w-full
                  aspect-[4/5]
                  max-w-[72px] sm:max-w-[88px] md:max-w-[120px] lg:max-w-[160px]
                  flex flex-col items-center justify-center gap-2
                  bg-[#12121a]
                  border border-white/10
                  rounded-2xl
                  transition-all duration-300 ease-out
                  hover:scale-105
                  hover:border-purple-500/60
                  hover:shadow-[0_0_30px_rgba(168,85,247,0.75)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    text-3xl sm:text-4xl md:text-5xl
                    text-purple-400
                    transition-all duration-300
                    group-hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.95)]
                  "
                >
                  {skill.icon}
                </div>

                {/* Label */}
                <p className="text-[11px] sm:text-xs md:text-sm font-medium text-gray-300 tracking-wide text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
