import { projects } from "../../lib/portfolio";

import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featured = projects.find(
  (project) => project.featured
);

if (!featured) return null;

  const others = projects.filter(
    (project) => !project.featured
  );

  return (
    <section
      id="projects"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Header */}

        <div className="mb-20 text-center">

          <p className="text-sm font-semibold uppercase tracking-[6px] text-violet-400">
            Flagship Products
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Products I've Built
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            Products built using modern technologies, AI,
            and scalable architectures.
          </p>

        </div>

        <FeaturedProject project={featured} />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {others.map((project) => (

            <ProjectCard
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </div>
    </section>
  );
}