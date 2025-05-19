import InfoCard from './InfoCard';

export default function Education() {
  return (
    <section id="education" className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Education</h2>
      <InfoCard
        title="Bachelor of Science in Computer Science"
        subtitle="University Name"
        description="Graduated in 202X. Relevant coursework, achievements, or a short description can go here."
      />
    </section>
  );
}
