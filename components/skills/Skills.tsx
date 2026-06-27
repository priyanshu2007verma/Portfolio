import { skills } from "../../lib/portfolio";
import SkillCategory from "./SkillCategory";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 lg:min-h-screen"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Header */}

        <div className="text-center">

          <p className="text-sm uppercase tracking-[6px] text-violet-400">
            Tech Arsenal
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Technologies I Use To
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Build Intelligent Products
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            My development stack spans frontend, backend,
            AI, databases and modern deployment tools used
            to build scalable applications.
          </p>

        </div>

        {/* Categories */}

        <div className="mt-20 space-y-20">

          {skills.map((category) => (

            <SkillCategory
              key={category.category}
              category={category}
            />

          ))}

        </div>

      </div>

    </section>
  );
}