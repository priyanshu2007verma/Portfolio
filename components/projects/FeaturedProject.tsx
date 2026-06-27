"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import TechBadge from "./TechBadge";
import ProjectCTA from "./ProjectCTA";

interface FeaturedProjectProps {
  project: {
    title: string;
    tagline: string;
    description: string;
    image: string;
    technologies: string[];
    github: string;
    live: string;
    stats: {
      features: string;
      category: string;
      year: string;
    };
    highlights: string[];
  };
}

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-3xl border border-white/10 bg-[#0B1020] shadow-xl"
    >
      <div className="grid lg:grid-cols-2">

        {/* LEFT */}

        <div className="relative h-72 sm:h-[420px] lg:min-h-[700px]">

          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover object-top transition duration-700 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent" />

          <div className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-xs font-semibold shadow-lg sm:left-6 sm:top-6 sm:px-5 sm:text-sm">
            ⭐ FLAGSHIP PRODUCT
          </div>

        </div>

        {/* RIGHT */}

        <div className="flex flex-col justify-center p-6 sm:p-8 lg:min-h-[700px] lg:p-12">

          <p className="text-xs uppercase tracking-[5px] text-violet-400 sm:text-sm">
            {project.tagline}
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {project.title}
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            {project.description}
          </p>

          {/* Technologies */}

          <div className="mt-8 flex flex-wrap gap-3">

            {project.technologies.map((tech) => (

              <TechBadge
                key={tech}
                text={tech}
              />

            ))}

          </div>

          {/* Stats */}

          <div className="mt-10 grid grid-cols-3 gap-4 text-center sm:gap-8 lg:text-left">

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-500">
                Features
              </p>

              <h3 className="mt-2 text-2xl font-bold text-violet-400 sm:text-3xl lg:text-4xl">
                {project.stats.features}
              </h3>

            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-500">
                Category
              </p>

              <h3 className="mt-2 text-lg font-bold text-violet-400 sm:text-2xl lg:text-3xl">
                {project.stats.category}
              </h3>

            </div>

            <div>

              <p className="text-xs uppercase tracking-wider text-gray-500">
                Year
              </p>

              <h3 className="mt-2 text-2xl font-bold text-violet-400 sm:text-3xl lg:text-4xl">
                {project.stats.year}
              </h3>

            </div>

          </div>

          {/* Highlights */}

          <div className="mt-12">

            <h3 className="mb-5 text-xl font-semibold sm:text-2xl">
              Key Highlights
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">

              {project.highlights.map((item) => (

                <div
                  key={item}
                  className="rounded-xl border border-violet-500/20 bg-violet-500/5 px-5 py-4 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10"
                >
                  ✅ {item}
                </div>

              ))}

            </div>

          </div>

          {/* Buttons */}

          <ProjectCTA
            github={project.github}
            live={project.live}
          />

        </div>

      </div>
    </motion.div>
  );
}