import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Mail error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-24 md:py-32 bg-[#0b0b0f] relative"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-center">
          <span className="text-purple-400">Let’s</span> Work Together
        </h2>

        <p className="text-gray-400 text-center max-w-xl mx-auto mb-10 sm:mb-14 md:mb-16 text-sm sm:text-base">
          If you have an opportunity, project idea, or would simply like to
          connect, feel free to reach out. I’d be happy to discuss and get back
          to you.
        </p>

        <div className="flex justify-center">
          <div className="w-full max-w-3xl bg-[#12121a]/80 backdrop-blur border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_0_40px_rgba(168,85,247,0.15)]">
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
            >
              {/* Name */}
              <div className="relative">
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-[#0b0b0f] border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none transition focus:border-purple-500 focus:shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                />
                <label className="absolute left-4 top-4 text-sm text-gray-400 transition-all duration-200 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-focus:bg-[#12121a] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-[#12121a] peer-valid:px-2">
                  Your Name
                </label>
              </div>

              {/* Email */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-[#0b0b0f] border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none transition focus:border-purple-500 focus:shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                />
                <label className="absolute left-4 top-4 text-sm text-gray-400 transition-all duration-200 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-focus:bg-[#12121a] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-[#12121a] peer-valid:px-2">
                  Your Email
                </label>
              </div>

              {/* Message */}
              <div className="relative md:col-span-2">
                <textarea
                  rows="5"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="peer w-full bg-[#0b0b0f] border border-white/10 rounded-xl px-4 py-4 text-sm text-white outline-none resize-none transition focus:border-purple-500 focus:shadow-[0_0_12px_rgba(168,85,247,0.35)]"
                />
                <label className="absolute left-4 top-4 text-sm text-gray-400 transition-all duration-200 pointer-events-none peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-focus:bg-[#12121a] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-[#12121a] peer-valid:px-2">
                  Your Message
                </label>
              </div>

              {/* Button */}
              <div className="md:col-span-2 flex justify-center mt-4 sm:mt-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 text-sm font-medium transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)] disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </div>

              {success && (
                <p className="md:col-span-2 text-center text-purple-400 mt-4 text-sm">
                  Thank you for reaching out. Your message has been sent
                  successfully.
                </p>
              )}
            </form>

            <div className="my-8 sm:my-10 md:my-12 h-px bg-white/10"></div>

            <div className="flex justify-center gap-8 sm:gap-10">
              <a
                href="mailto:manojvelmurugan04@gmail.com"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                <FaEnvelope size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/manoj-mv/"
                target="_blank"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/manoj-velmurugan"
                target="_blank"
                className="text-gray-400 hover:text-purple-400 transition"
              >
                <FaGithub size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
