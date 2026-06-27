import { journey } from "../../lib/portfolio";
import Timeline from "./Timeline";

export default function Journey() {
  return (
    <section
      id="journey"
      className="py-24 lg:min-h-screen"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

        {/* Header */}

        <div className="text-center">

          <p className="text-sm uppercase tracking-[6px] text-violet-400">
            My Journey
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            From Curiosity To
            <br />

            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
              Building Products
            </span>

          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-400 sm:text-lg">
            Every milestone represents another step toward becoming
            an entrepreneur building impactful AI-powered products.
          </p>

        </div>

        <Timeline items={journey} />

      </div>
    </section>
  );
}