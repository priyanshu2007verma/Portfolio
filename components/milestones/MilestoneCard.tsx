"use client";

import { motion } from "framer-motion";

interface Props {
  item: {
    icon: string;
    title: string;
    description: string;
  };
}

export default function MilestoneCard({
  item,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
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

      sm:p-8

      transition-all
      duration-300

      hover:border-violet-500/40
      hover:shadow-[0_0_40px_rgba(124,58,237,.2)]
      "
    >
      {/* Icon */}

      <div className="text-5xl transition duration-300 group-hover:scale-110 sm:text-6xl">
        {item.icon}
      </div>

      {/* Title */}

      <h3 className="mt-6 text-xl font-bold sm:text-2xl">
        {item.title}
      </h3>

      {/* Description */}

      <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
        {item.description}
      </p>

    </motion.div>
  );
}