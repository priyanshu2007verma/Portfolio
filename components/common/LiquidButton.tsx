"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  primary?: boolean;
}

export default function LiquidButton({
  children,
  onClick,
  primary = false,
}: Props) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        y: -5,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      className="group relative overflow-hidden rounded-2xl"
    >
      {/* Animated Border */}

      <div
        className={`
        absolute
        inset-0

        rounded-2xl

        ${
          primary
            ? "bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500"
            : "bg-gradient-to-r from-violet-500/50 via-white/20 to-cyan-400/40"
        }

        animate-gradient
        `}
      />

      {/* Inner Background */}

      <div
        className={`
        relative
        m-[1.5px]

        flex
        items-center
        gap-3

        rounded-2xl

        px-8
        py-4

        transition-all
        duration-500

        ${
          primary
            ? "bg-[#120B2A]"
            : "bg-[#090915]/90 backdrop-blur-xl"
        }
        `}
      >
        {/* Glow */}

        <div
          className="
          absolute

          -left-16

          top-1/2

          h-28
          w-28

          -translate-y-1/2

          rounded-full

          bg-violet-500/30

          blur-3xl

          transition-all
          duration-700

          group-hover:left-[75%]
          "
        />

        {/* Shine */}

        <div
          className="
          absolute

          -left-40

          top-0

          h-full
          w-24

          rotate-12

          bg-white/20

          blur-xl

          transition-all
          duration-1000

          group-hover:left-[140%]
          "
        />

        {/* Text */}

        <span
          className="
          relative

          z-20

          flex
          items-center
          gap-3

          text-white

          font-semibold

          tracking-wide
          "
        >
          {children}

          <ArrowRight
            size={18}
            className="
            transition-all
            duration-300

            group-hover:translate-x-2
            "
          />
        </span>
      </div>

      {/* Shadow */}

      <div
        className="
        absolute

        inset-0

        rounded-2xl

        opacity-0

        blur-2xl

        transition-all
        duration-500

        group-hover:opacity-100

        bg-violet-500/30
        "
      />
    </motion.button>
  );
}