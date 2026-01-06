import { useState } from "react";

const services = [
  {
    title: "Full Stack Web Development",
    desc: "Designing and building end-to-end web applications using React, Node.js, Express, and MongoDB, including authentication, dashboards, and production-ready architecture.",
    usedIn: "Kannamma & Co, MyOKR App",
  },
  {
    title: "Frontend Engineering",
    desc: "Developing responsive, accessible, and modern user interfaces using React, Tailwind CSS, and JavaScript with strong focus on UX and performance.",
    usedIn: "Kannamma & Co, Portfolio",
  },
  {
    title: "Backend & API Development",
    desc: "Building secure REST APIs, role-based authentication systems, and scalable backend logic using Node.js, Express, and MongoDB.",
    usedIn: "MyOKR App, EHR Consent System",
  },
  {
    title: "UI Implementation",
    desc: "Converting Figma designs and UI references into pixel-perfect, responsive web interfaces using modern frontend tools.",
    usedIn: "Portfolio, Client UI projects",
  },
];

export default function Services() {
  const [active, setActive] = useState(null);

  return (
    <section
      id="services"
      className="py-20 sm:py-24 md:py-28 bg-[#0b0b0f]"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 sm:mb-14 md:mb-16">
          <span className="text-purple-400">My</span> Services
        </h2>

        {/* Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl w-full">
            {services.map((service, index) => {
              const isActive = active === index;

              return (
                <div
                  key={index}
                  onClick={() => setActive(isActive ? null : index)}
                  className={`
                    relative cursor-pointer
                    border border-white/10 rounded-2xl
                    p-5 sm:p-6 md:p-8
                    text-left
                    transition-all duration-300
                    ${isActive
                      ? "bg-[#12121a] shadow-[0_0_30px_rgba(168,85,247,0.18)]"
                      : "bg-transparent hover:bg-[#12121a]/60"}
                  `}
                >
                  {/* Accent Line */}
                  <div
                    className={`
                      absolute left-0 top-0 h-full w-[4px] rounded-l-2xl
                      transition-opacity duration-300
                      ${isActive ? "bg-purple-500 opacity-100" : "opacity-0"}
                    `}
                  />

                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span className="text-xs sm:text-sm text-purple-400 font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base sm:text-lg font-semibold">
                        {service.title}
                      </h3>
                    </div>

                    <span className="text-purple-400 text-xl sm:text-2xl">
                      {isActive ? "−" : "+"}
                    </span>
                  </div>

                  {/* Content */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-300
                      ${isActive ? "max-h-44 mt-5" : "max-h-0"}
                    `}
                  >
                    <p className="text-gray-400 text-sm leading-relaxed mb-3">
                      {service.desc}
                    </p>

                    <p className="text-xs text-gray-500">
                      <span className="text-purple-400">Used in:</span>{" "}
                      {service.usedIn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
