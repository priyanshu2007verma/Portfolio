"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import TechBadge from "./TechBadge";
import ProjectCTA from "./ProjectCTA";

interface Project {
  title: string;
  tagline: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

interface Props {
  project: Project;
}

export default function ProjectCard({
  project,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0B1020] transition-all duration-300 hover:border-violet-500/40 hover:shadow-[0_0_40px_rgba(124,58,237,.22)]"
    >
      {/* Image */}

      <div className="relative h-56 overflow-hidden sm:h-64">

        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      </div>

      {/* Content */}

      <div className="p-6 sm:p-7">

        <p className="text-xs uppercase tracking-[4px] text-violet-400">
          {project.tagline}
        </p>

        <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
          {project.title}
        </h3>

        <p className="mt-5 text-sm leading-7 text-gray-400 sm:text-base">
          {project.description}
        </p>

        {/* Tech */}

        <div className="mt-7 flex flex-wrap gap-2">

          {project.technologies.map((tech) => (

            <TechBadge
              key={tech}
              text={tech}
            />

          ))}

        </div>

        {/* CTA */}

        <ProjectCTA
          github={project.github}
          live={project.live}
        />

      </div>

    </motion.div>
  );
}