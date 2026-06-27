"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const scrolled =
        (window.scrollY / height) * 100;

      setProgress(scrolled);
    }

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      className="
      absolute
      right-0
      top-0

      h-full
      w-[4px]

      bg-white/5
      "
    >
      <div
        className="
        rounded-full

        bg-gradient-to-b
        from-violet-500
        via-fuchsia-500
        to-cyan-400

        transition-all
        duration-200
        "
        style={{
          height: `${progress}%`,
        }}
      />
    </div>
  );
}