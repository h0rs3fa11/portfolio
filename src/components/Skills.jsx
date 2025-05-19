import Tag from './Tags';
import config from "../portfolio.config";

export default function Skills() {
  return (
    <section id="skills" className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
      <h2 className="text-2xl font-bold text-center mb-8">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {config.skills.map((group) => (
          <div
            key={group.category}
            className="bg-white rounded-xl shadow p-6 min-h-[150px] flex flex-col items-start hover:bg-indigo-50 transition-colors duration-200"
          >
            <h3 className="font-semibold mb-2">{group.category}</h3>
            {group.tags.map((tag, i) => (
              <Tag key={i} color={tag.color} textColor={tag.textColor}>
                {tag.label}
              </Tag>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
