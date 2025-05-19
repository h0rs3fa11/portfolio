import InfoCard from "./InfoCard";
import config from "../portfolio.config";

export default function Experience() {
  const { experience } = config;

  return (
    <section id="experience" className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
      <div className="flex flex-col gap-10">
        {experience.map((exp, idx) => (
          <InfoCard key={idx} {...exp} />
        ))}
      </div>
    </section>
  );
}
