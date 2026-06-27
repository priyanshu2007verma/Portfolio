"use client";

import Globe from "./Globe";
import FloatingTags from "./FloatingTags";

export default function HeroGlobe() {
  return (
    <div
      className="
      relative

      flex
      w-full

      flex-shrink-0

      items-center
      justify-center

      lg:w-full
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute

        h-[320px]
        w-[320px]

        rounded-full

        bg-violet-600/10

        blur-3xl

        sm:h-[420px]
        sm:w-[420px]

        md:h-[500px]
        md:w-[500px]

        lg:h-[620px]
        lg:w-[620px]
        "
      />

      {/* Globe */}

      <div
        className="
        relative

        aspect-square

        h-[280px]
        w-[280px]

        overflow-hidden

        rounded-full

        border
        border-violet-500/20

        bg-gradient-to-br
        from-[#141B34]
        to-[#090B18]

        shadow-[0_0_90px_rgba(124,58,237,.25)]

        sm:h-[360px]
        sm:w-[360px]

        md:h-[450px]
        md:w-[450px]

        lg:h-[560px]
        lg:w-[560px]
        "
      >
        <Globe />
      </div>

      <FloatingTags />
    </div>
  );
}