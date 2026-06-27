"use client";

import {
  Brain,
  Code2,
  Rocket,
  Globe,
} from "lucide-react";

const tags = [
  {
    title: "AI / ML",
    icon: Brain,

    mobile:
      "top-2 left-2",

    tablet:
      "sm:top-4 sm:left-4",

    desktop:
      "lg:top-10 lg:left-8",
  },

  {
    title: "Web Dev",
    icon: Code2,

    mobile:
      "bottom-4 left-0",

    tablet:
      "sm:bottom-8 sm:left-2",

    desktop:
      "lg:bottom-24 lg:left-0",
  },

  {
    title: "Startup",
    icon: Rocket,

    mobile:
      "bottom-2 right-2",

    tablet:
      "sm:bottom-4 sm:right-4",

    desktop:
      "lg:bottom-8 lg:right-4",
  },

  {
    title: "React",
    icon: Globe,

    mobile:
      "top-10 right-0",

    tablet:
      "sm:top-20 sm:right-2",

    desktop:
      "lg:top-32 lg:right-0",
  },
];

export default function FloatingTags() {
  return (
    <>
      {tags.map(
        ({
          title,
          icon: Icon,
          mobile,
          tablet,
          desktop,
        }) => (
          <div
            key={title}
            className={`
            absolute

            ${mobile}
            ${tablet}
            ${desktop}

            z-20

            animate-pulse
            `}
          >
            <div
              className="
              flex
              items-center
              gap-2

              rounded-xl

              border
              border-violet-500/20

              bg-[#0B1020]/70

              px-3
              py-2

              backdrop-blur-xl

              shadow-[0_0_20px_rgba(139,92,246,.12)]

              transition-all
              duration-300

              hover:scale-110
              hover:border-violet-400
              "
            >
              <Icon
                size={15}
                className="text-violet-400"
              />

              <span
                className="
                text-xs

                text-white

                sm:text-sm
                "
              >
                {title}
              </span>
            </div>
          </div>
        )
      )}
    </>
  );
}