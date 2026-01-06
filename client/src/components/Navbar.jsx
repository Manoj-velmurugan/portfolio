import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = ["home", "education", "services", "projects", "contact"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0b0b0f]/80 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Email */}
        <a
          href="mailto:manojvelmurugan04@gmail.com"
          className="text-lg sm:text-xl font-bold text-purple-400"
        >
          Manoj M V
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">
          {sections.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`transition ${
                  active === id
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block px-4 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-sm transition"
        >
          Hire Me
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300 text-xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#0b0b0f] border-t border-white/10">
          <ul className="flex flex-col items-center gap-6 py-6 text-sm">
            {sections.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleNavClick}
                  className={`transition ${
                    active === id
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}

            {/* Mobile CTA */}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={handleNavClick}
                className="px-6 py-2 rounded-full bg-purple-600 hover:bg-purple-700 transition"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
