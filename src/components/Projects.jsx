import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="py-12 max-w-4xl mx-auto px-4 sm:px-8">
      <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
      <div className="flex flex-col gap-10">
        <ProjectCard
          title="Project 1"
          description="Install the plugin and convert your designs to a responsive site."
          github="#"
        />
        <ProjectCard
          title="Project 2"
          description="Browse dozens of templates. Click, duplicate, customize."
          github="#"
        />
      </div>
    </section>
  );
}
