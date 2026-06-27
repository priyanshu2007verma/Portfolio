"use client";

import { motion } from "framer-motion";

interface Item {
  year: string;
  title: string;
  description: string;
}

interface Props {
  item: Item;
}

export default function TimelineItem({
  item,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.5,
      }}
      className="relative flex gap-5 sm:gap-8"
    >
      {/* Timeline Dot */}

      <div className="relative z-10 mt-3 h-4 w-4 rounded-full bg-violet-500 shadow-[0_0_25px_rgba(124,58,237,.8)]" />

      {/* Card */}

      <div
        className="
        flex-1

        rounded-3xl

        border
        border-white/10

        bg-[#0B1020]

        p-6

        sm:p-7

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-violet-500/40
        hover:shadow-[0_0_35px_rgba(124,58,237,.18)]
        "
      >

        <p className="text-xs uppercase tracking-[4px] text-violet-400 sm:text-sm">
          {item.year}
        </p>

        <h3 className="mt-3 text-xl font-bold sm:text-2xl">
          {item.title}
        </h3>

        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
          {item.description}
        </p>

      </div>

    </motion.div>
  );
}