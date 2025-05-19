import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center py-16 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">Name</h1>
      <p className="text-gray-600 mb-6">A short description</p>
      <div className="flex gap-3 justify-center">
        <a
          href="#"
          className="bg-gray-200 text-gray-800 p-3 rounded-full shadow hover:bg-indigo-700 hover:text-white transition"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="#"
          className="bg-gray-200 text-gray-800 p-3 rounded-full shadow hover:bg-indigo-700 hover:text-white transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="#"
          className="bg-gray-200 text-gray-800 p-3 rounded-full shadow hover:bg-indigo-700 hover:text-white transition"
          aria-label="Email"
        >
          <MdEmail size={24} />
        </a>
      </div>
    </section>
  );
}
