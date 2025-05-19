import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import config from "../portfolio.config";
const iconMap = {
  github: <FaGithub size={24} />,
  linkedin: <FaLinkedin size={24} />,
  email: <MdEmail size={24} />,
};

export default function Hero() {
  const { name, description, socials } = config.hero;

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center py-16 text-center"
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
        {name}
      </h1>
      <p className="text-gray-600 mb-6">{description}</p>
      <div className="flex gap-3 justify-center">
        {socials.map((social, idx) => (
          <a
            key={social.type}
            href={social.url}
            className="bg-gray-200 text-gray-800 p-3 rounded-full shadow hover:bg-indigo-700 hover:text-white transition"
            aria-label={social.type}
            target="_blank"
            rel="noopener noreferrer"
          >
            {iconMap[social.type]}
          </a>
        ))}
      </div>
    </section>
  );
}
