import InfoCard from "./InfoCard";

export default function Experience() {
  return (
    <section id="experience" className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Experience</h2>
      <div className="flex flex-col gap-10">
        <InfoCard
          title="title"
          subtitle="company"
          description="lorem ipsum dolor sit amet"
        />
        <InfoCard
          title="title"
          subtitle="company"
          description="lorem ipsum dolor sit amet"
        />
      </div>
    </section>
  );
}
