import { milestones } from "../../lib/portfolio";
import MilestoneCard from "./MilestoneCard";

export default function Milestones() {
  return (
    <section
      id="milestones"
      className="py-24 lg:min-h-screen"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Header */}

        <div className="text-center">

          <p className="text-sm uppercase tracking-[6px] text-violet-400">
            Milestones
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Achievements Along
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              My Journey
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            Every milestone represents growth, learning,
            and progress toward becoming a technology entrepreneur.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

          {milestones.map((item) => (

            <MilestoneCard
              key={item.title}
              item={item}
            />

          ))}

        </div>

      </div>
    </section>
  );
}