import config from "../portfolio.config";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-col gap-10">
        {config.projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
}
