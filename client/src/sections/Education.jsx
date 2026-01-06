export default function Education() {
  return (
    <section
      id="education"
      className="py-20 sm:py-24 md:py-28 bg-[#0b0b0f]"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 sm:mb-14 md:mb-16">
          <span className="text-purple-400">My</span> Education
        </h2>

        {/* Timeline */}
        <div className="flex justify-center">
          <div className="relative max-w-3xl w-full">
            {/* Vertical Line */}
            <div className="absolute left-4 sm:left-6 top-0 h-full w-px bg-purple-500/30"></div>

            {/* ===== B.TECH ===== */}
            <div className="relative mb-12 sm:mb-14 md:mb-16">
              {/* Dot */}
              <div className="absolute left-[14px] sm:left-[18px] top-6 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]"></div>

              {/* Card */}
              <div
                className="
                  ml-12 sm:ml-16
                  bg-[#12121a]
                  border border-white/10
                  rounded-2xl
                  p-6 sm:p-7 md:p-8
                  text-left
                  shadow-[0_0_30px_rgba(168,85,247,0.15)]
                "
              >
                <span className="inline-block mb-3 sm:mb-4 text-sm font-medium text-purple-400">
                  2022 – 2026 <span className="text-gray-400">(Final Year)</span>
                </span>

                <h3 className="text-xl sm:text-2xl font-semibold mb-2">
                  B.Tech – Information Technology
                </h3>

                <p className="text-gray-400 mb-3 sm:mb-4">
                  Saveetha Engineering College
                </p>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Currently pursuing my final year with a strong focus on
                  full-stack web development, real-world MERN applications,
                  and building scalable, production-ready systems.
                </p>
              </div>
            </div>

            {/* ===== HIGH SCHOOL ===== */}
            <div className="relative">
              {/* Dot */}
              <div className="absolute left-[15px] sm:left-[18px] top-6 w-3 h-3 rounded-full bg-purple-400/80"></div>

              {/* Card */}
              <div
                className="
                  ml-12 sm:ml-16
                  bg-[#12121a]/70
                  border border-white/10
                  rounded-2xl
                  p-5 sm:p-6 md:p-7
                  text-left
                "
              >
                <span className="inline-block mb-2 sm:mb-3 text-sm text-purple-400">
                  2020 – 2022
                </span>

                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  Higher Secondary Education
                </h3>

                <p className="text-gray-400 mb-2">
                  Holy Family Convent Matriculation Higher Secondary School
                </p>

                <p className="text-gray-500 text-sm leading-relaxed">
                  Completed higher secondary education with a strong foundation
                  in mathematics, computer science, Physics and Chemistry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
