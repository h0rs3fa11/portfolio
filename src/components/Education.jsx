import InfoCard from './InfoCard';
import config from "../portfolio.config";

export default function Education() {
  const { education } = config;

  return (
    <section id="education" className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
      <div className="flex flex-col gap-10">
        {education.map((edu, idx) => (
          <InfoCard key={idx} {...edu} />
        ))}
      </div>
    </section>
  );
}
