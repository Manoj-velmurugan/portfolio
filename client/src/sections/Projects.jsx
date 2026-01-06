import { useRef } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import kannammaImg from "../assets/kannammaandco.png";
import myOKRImg from "../assets/myOKR.png";
import joblyImg from "../assets/jobly.png";
import ehrImg from "../assets/ehr.png";

const projects = [
  {
    title: "Kannamma & Co",
    desc: "A full-stack bouquet ordering website with admin panel, custom orders, and email notifications.",
    tech: ["React", "Express", "JWT", "Node", "MongoDB", "Tailwind"],
    image: kannammaImg,
    live: "https://kannammaandco.in",
    github: null,
  },
  {
    title: "Spice Canvas - Food Recipe App",
    desc: "A blockchain-based EHR consent management system for secure medical data sharing.",
    tech: ["React", "Express", "Node", "MongoDB", "Tailwind"],
    image: ehrImg,
    live: null,
    github: "https://github.com/Manoj-velmurugan/ehr_consent_management_system",
  },
  {
    title: "MyOKR App",
    desc: "An OKR management system with role-based access, admin dashboard, and employee panels.",
    tech: ["React", "Express", "JWT", "Node", "MongoDB", "Tailwind"],
    image: myOKRImg,
    live: null,
    github: "https://github.com/Manoj-velmurugan/myokr",
  },
  {
    title: "Jobly – Job Application Tracker",
    desc: "A job application tracking system to manage applications, statuses, and notes.",
    tech: ["React", "Express", "JWT", "Node", "MongoDB", "Tailwind"],
    image: joblyImg,
    live: null,
    github: "https://github.com/Manoj-velmurugan/JOBLY-Job-Application-Tracker",
  },
];

export default function Projects() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;
    const width = sliderRef.current.clientWidth;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -width : width,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="py-20 sm:py-24 md:py-28 bg-[#0b0b0f]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-10 sm:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-purple-400">My</span> Works
          </h2>

          {/* Desktop arrows */}
          <div className="hidden md:flex gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full bg-[#12121a] border border-white/10 hover:border-purple-500 transition"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full bg-[#12121a] border border-white/10 hover:border-purple-500 transition"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 sm:gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4 snap-x snap-mandatory"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="group snap-start min-w-[260px] sm:min-w-[300px] md:min-w-[360px] bg-[#12121a] border border-white/10 rounded-2xl overflow-hidden relative flex flex-col"
            >
              {/* Image */}
              <div className="h-40 sm:h-44 md:h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* MOBILE ACTION BUTTONS – STUCK TO BOTTOM */}
                <div className="mt-auto pt-4 flex gap-3 md:hidden">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-xs"
                    >
                      <FaExternalLinkAlt size={12} />
                      Live
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-xs"
                    >
                      <FaGithub size={14} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* DESKTOP HOVER OVERLAY */}
              <div className="hidden md:flex absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition items-center justify-center gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-sm"
                  >
                    <FaExternalLinkAlt size={14} />
                    Live
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-full border border-white/20 hover:border-purple-500 text-sm"
                  >
                    <FaGithub size={16} />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
