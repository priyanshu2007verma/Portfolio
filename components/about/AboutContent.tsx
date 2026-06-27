import { Brain, Rocket, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Always Learning",
    desc: "Exploring AI, SaaS, and modern technologies every day.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    desc: "I enjoy turning complex ideas into simple products.",
  },
  {
    icon: Rocket,
    title: "Startup Mindset",
    desc: "Focused on building scalable products with real impact.",
  },
];

export default function AboutContent() {
  return (
    <div className="w-full text-center lg:w-[58%] lg:text-left">

      <p className="text-sm uppercase tracking-[6px] text-violet-400">
        About Me
      </p>

      <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
        Turning Ideas Into
        <br />

        <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Intelligent Products
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
        I love building AI-powered applications, modern web experiences,
        and startup ideas that solve real-world problems while creating
        meaningful user experiences.
      </p>

      <div className="mt-12 space-y-8">

        {features.map(({ icon: Icon, title, desc }) => (

          <div
            key={title}
            className="
            flex

            flex-col

            items-center

            gap-5

            text-center

            sm:flex-row
            sm:items-start
            sm:text-left
            "
          >
            <div className="rounded-2xl bg-violet-500/10 p-4">

              <Icon
                size={28}
                className="text-violet-400"
              />

            </div>

            <div>

              <h3 className="text-xl font-semibold">
                {title}
              </h3>

              <p className="mt-2 text-gray-400 leading-7">
                {desc}
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}