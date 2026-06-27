"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  level: string;
  progress: number;
  projects: number;
}

interface Props {
  skill: Skill;
  color: string;
}

export default function SkillCard({
  skill,
  color,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      group

      rounded-3xl

      border
      border-white/10

      bg-[#0B1020]

      p-6

      shadow-lg

      transition-all
      duration-300

      hover:border-violet-500/40
      hover:shadow-[0_0_45px_rgba(124,58,237,.22)]
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between gap-4">

        <h4 className="text-xl font-bold text-white sm:text-2xl">
          {skill.name}
        </h4>

        <span className="whitespace-nowrap rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
          {skill.level}
        </span>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="mb-3 flex items-center justify-between text-sm text-gray-400">

          <span>Experience</span>

          <span>{skill.progress}%</span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">

          <motion.div
            initial={{
              width: 0,
            }}
            whileInView={{
              width: `${skill.progress}%`,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
            }}
            className={`h-full rounded-full bg-gradient-to-r ${color}`}
          />

        </div>

      </div>

      {/* Bottom */}

      <div className="mt-8 border-t border-white/10 pt-5">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Projects
            </p>

            <h5 className="mt-2 text-3xl font-bold text-violet-400">
              {skill.projects}
            </h5>

          </div>

          <div className="text-right">

            <p className="text-xs uppercase tracking-wider text-gray-500">
              Status
            </p>

            <p className="mt-2 text-sm font-semibold text-emerald-400">
              Active
            </p>

          </div>

        </div>

      </div>

    </motion.div>
  );
}