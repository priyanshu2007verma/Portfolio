"use client";

import Typewriter from "typewriter-effect";
import Badge from "../common/Badge";
import LiquidButton from "../common/LiquidButton";

export default function HeroContent() {
  return (
    <div className="w-full w-full text-center lg:text-left">
      {/* Badge */}

      <div className="flex justify-center lg:justify-start">
        <Badge text="Software Developer • Entrepreneur • AI Enthusiast" />
      </div>

      {/* Heading */}

      <h1 className="mt-8 font-extrabold leading-[1.05] text-[3.4rem] sm:text-[4.6rem] lg:text-[6rem]">
        Hi, I'm
        <br />

        <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
          Priyanshu
          <br className="hidden lg:block" />
          <span className="lg:hidden"> </span>
          Verma
        </span>
      </h1>

      {/* Typewriter */}

      <div className="mt-6 text-xl text-gray-300 lg:text-2xl">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            deleteSpeed: 25,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Building AI Products.")
              .pauseFor(1200)
              .deleteAll()

              .typeString("Creating Modern SaaS.")
              .pauseFor(1200)
              .deleteAll()

              .typeString("Future Tech Entrepreneur.")
              .pauseFor(1200)
              .deleteAll()

              .typeString("Developing Modern Websites.")
              .pauseFor(1200)
              .deleteAll()

              .start();
          }}
        />
      </div>

      {/* Description */}

      <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-gray-400 lg:mx-0">
        Passionate about Artificial Intelligence, SaaS, startups and
        building products that create real-world impact.
      </p>

      {/* Buttons */}

      <div className="relative mt-10 flex flex-wrap items-center justify-center gap-5 lg:justify-start">

        {/* Glow */}

        <div
          className="
          absolute
          -left-10
          -top-8
          -z-10

          h-40
          w-96

          rounded-full

          bg-gradient-to-r
          from-violet-500/20
          via-fuchsia-500/15
          to-cyan-500/10

          blur-[90px]
          "
        />

        <LiquidButton
          primary
          onClick={() =>
            document
              .getElementById("projects")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
        >
          Explore Projects
        </LiquidButton>

        <LiquidButton
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
        >
          Contact Me
        </LiquidButton>
      </div>

      {/* Stats */}

      <div className="mt-14 grid grid-cols-3 gap-8 text-center lg:text-left">

        <div>
          <h2 className="text-4xl font-bold text-violet-400">
            10+
          </h2>

          <p className="mt-2 text-gray-400">
            Projects
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-violet-400">
            15+
          </h2>

          <p className="mt-2 text-gray-400">
            Technologies
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-violet-400">
            ∞
          </h2>

          <p className="mt-2 text-gray-400">
            Curiosity
          </p>
        </div>

      </div>
    </div>
  );
}