export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-24 md:py-28 bg-[#0b0b0f]"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 sm:mb-14 md:mb-16">
          <span className="text-purple-400">My</span> Experience
        </h2>

        {/* Timeline */}
        <div className="flex justify-center">
          <div className="relative max-w-4xl w-full">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-6 top-0 h-full w-px bg-purple-500/30"></div>

            {/* ===== Pragya Cyber ===== */}
            <div className="relative mb-12 sm:mb-14 md:mb-16">
              {/* Dot */}
              <div className="absolute left-[14px] sm:left-[18px] top-8 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>

              {/* Card */}
              <div className="ml-12 sm:ml-16 bg-[#12121a] border border-white/10 rounded-2xl p-6 sm:p-7 md:p-8 text-left shadow-[0_0_30px_rgba(168,85,247,0.15)]">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Pragya Cyber
                    <span className="text-purple-400"> · </span>
                    Digital Marketing Intern
                  </h3>
                  <span className="text-sm text-gray-400 mt-1 md:mt-0">
                    Jan 2025 – Sept 2025
                  </span>
                </div>

                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 leading-relaxed">
                  <li>
                    Redesigned the company website using Webflow to improve UI/UX
                    and accessibility.
                  </li>
                  <li>
                    Created engaging graphics ensuring brand consistency across
                    digital platforms.
                  </li>
                </ul>
              </div>
            </div>

            {/* ===== Gidy ===== */}
            <div className="relative mb-12 sm:mb-14 md:mb-16">
              {/* Dot */}
              <div className="absolute left-[15px] sm:left-[18px] top-8 w-3.5 h-3.5 rounded-full bg-purple-400/90"></div>

              {/* Card */}
              <div className="ml-12 sm:ml-16 bg-[#12121a] border border-white/10 rounded-2xl p-6 sm:p-7 md:p-8 text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold">
                    Gidy
                    <span className="text-purple-400"> · </span>
                    MERN Stack Intern
                  </h3>
                  <span className="text-sm text-gray-400 mt-1 md:mt-0">
                    July 2024 – Sept 2024
                  </span>
                </div>

                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 leading-relaxed">
                  <li>
                    Built responsive web applications using React, Tailwind CSS,
                    and RESTful API integration.
                  </li>
                  <li>
                    Gained hands-on experience with state management,
                    authentication, and databases.
                  </li>
                </ul>
              </div>
            </div>

            {/* ===== Arjun Vision Tech Solutions ===== */}
            <div className="relative">
              {/* Dot */}
              <div className="absolute left-[16px] sm:left-[18px] top-8 w-3 h-3 rounded-full bg-purple-400/70"></div>

              {/* Card */}
              <div className="ml-12 sm:ml-16 bg-[#12121a]/80 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-7 text-left">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                  <h3 className="text-base sm:text-lg font-semibold">
                    Arjun Vision Tech Solutions (NSIC)
                    <span className="text-purple-400"> · </span>
                    UI/UX Intern
                  </h3>
                  <span className="text-sm text-gray-400 mt-1 md:mt-0">
                    June 2024 – July 2024
                  </span>
                </div>

                <ul className="list-disc list-inside text-gray-400 text-sm space-y-2 leading-relaxed">
                  <li>
                    Designed wireframes and prototypes to improve user
                    engagement and functionality.
                  </li>
                  <li>
                    Collaborated with developers to implement responsive
                    designs using Figma.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
