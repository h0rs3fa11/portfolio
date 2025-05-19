import { FaGithub } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  github,
  image,
  url,
}) {
  return (
    <div className="flex flex-col bg-white md:flex-row items-center md:items-start hover:bg-indigo-50 gap-6 p-6 rounded-2xl shadow-md border border-slate-200 transition-colors duration-200">
      {/* 图片占位 */}
      {image ? (
        <a
          className="w-full md:w-64 h-40 bg-gray-200 rounded-xl flex-shrink-0"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-xl"
          />
        </a>
      ) : (
        <div className="w-full md:w-64 h-40 bg-gray-200 rounded-xl bg-[repeating-linear-gradient(135deg,_#e5e7eb_0px,_#e5e7eb_10px,_#d1d5db_10px,_#d1d5db_20px)] flex-shrink-0" />
      )}

      {/* 内容 */}
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-slate-800 mb-3">{description}</p>
        <div className="flex gap-3 justify-center md:justify-start">
          {github && (
            <a
              href={github}
              className="bg-gray-200 text-gray-800 p-3 rounded-full shadow hover:bg-indigo-700 hover:text-white transition"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
