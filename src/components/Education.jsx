import InfoCard from './InfoCard';

export default function Education() {
  return (
    <section id="education" className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
      <div className="flex flex-col gap-10">
        <InfoCard
          title="Bachelor of Science in Computer Science"
          subtitle="University Name"
          description="Graduated in 202X. Relevant coursework, achievements, or a short description can go here."
          date="Sep 2020 – June 2024"
          tags={[
            { label: "Linux", color: "bg-gray-800", textColor: "text-white" },
          ]}
        />
        <InfoCard
          title="Master of Science in Computer Science"
          subtitle="University Name"
          description="Graduated in 202X. Relevant coursework, achievements, or a short description can go here."
        />
      </div>
    </section>
  );
}
