import Tags from "./Tags";
import { FaQuoteLeft } from "react-icons/fa";

export default function InfoCard({
  icon = <FaQuoteLeft className="text-white text-3xl" />, // 可自定义icon
  title,
  subtitle,
  description,
  date,
  link,
  linkText,
  tags = [],
  image,
  url,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-8 flex flex-col gap-4 relative overflow-hidden hover:bg-indigo-50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="flex items-center gap-4">
          {/* Icon/avatar */}
          <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center">
            {image ? (
              <a href={url} target="_blank" rel="noopener noreferrer">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </a>
            ) : (
              { icon }
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold text-slate-800">{title}</h3>
            {subtitle && (
              <div className="text-lg text-slate-600">{subtitle}</div>
            )}
          </div>
        </div>
        {/* 日期和链接 */}
        <div className="flex flex-col items-end gap-1 min-w-[160px]">
          {date && <div className="text-lg italic text-slate-500">{date}</div>}
          {link && (
            <a
              href={link}
              className="text-indigo-700 underline text-base hover:text-indigo-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              {linkText || "View project"}
            </a>
          )}
        </div>
      </div>
      <div className="mt-2 text-slate-700 text-lg">{description}</div>
      {/* 技能标签 */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, idx) => (
            <Tags key={idx} {...tag}>
              {tag.label}
            </Tags>
          ))}
        </div>
      )}
    </div>
  );
}
