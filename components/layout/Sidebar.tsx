"use client";

import {
  Home,
  User,
  Cpu,
  Rocket,
  Route,
  Trophy,
  Mail,
  Sparkles,
} from "lucide-react";

import { useActiveSection } from "../../hooks/useActiveSection";

const navItems = [
  {
    title: "Home",
    href: "#hero",
    icon: Home,
  },
  {
    title: "Who I Am",
    href: "#about",
    icon: User,
  },
  {
    title: "Tech Arsenal",
    href: "#skills",
    icon: Cpu,
  },
  {
    title: "Flagship Products",
    href: "#projects",
    icon: Rocket,
  },
  {
    title: "The Journey",
    href: "#journey",
    icon: Route,
  },
  {
    title: "Milestones",
    href: "#milestones",
    icon: Trophy,
  },
  {
    title: "Let's Build",
    href: "#contact",
    icon: Mail,
  },
];

export default function Sidebar() {
  const activeSection = useActiveSection();

  return (
    <aside
      className="
        fixed
        left-0
        top-0
        z-50

        flex
        h-screen
        w-[250px]
        flex-col

        overflow-y-auto

        border-r
        border-white/10

        bg-[#070816]/90

        backdrop-blur-3xl

        px-6
        py-8
        "
    >
      {/* ================= Logo ================= */}

      <div>

        <div
          className="
          flex
          h-16
          w-16
          items-center
          justify-center

          rounded-2xl

          border
          border-violet-500/20

          bg-gradient-to-br
          from-violet-500/20
          via-white/5
          to-cyan-500/10

          shadow-[0_0_40px_rgba(139,92,246,.25)]

          transition
          hover:scale-105
          "
        >
          <span
            className="
            bg-gradient-to-r
            from-violet-400
            via-fuchsia-400
            to-cyan-400

            bg-clip-text

            text-3xl
            font-black

            text-transparent
            "
          >
            PV
          </span>
        </div>

        <h2 className="mt-5 text-xl font-bold text-white">
          Priyanshu Verma
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          AI Engineer
        </p>

        <p className="text-sm text-violet-400">
          Building Vayonix
        </p>

      </div>

      {/* ================= Navigation ================= */}

      <nav className="mt-8 flex flex-col gap-2">

        {navItems.map((item) => {

          const Icon = item.icon;

          const active =
            activeSection === item.href.replace("#", "");

          return (

            <a
              key={item.title}
              href={item.href}
              className={`
              group

              relative

              flex
              items-center

              gap-4

              overflow-hidden

              rounded-2xl

              px-4
              py-3

              transition-all
              duration-300

              ${
                active
                  ? `
                  bg-violet-500/15

                  text-white

                  shadow-[0_0_25px_rgba(139,92,246,.18)]
                  `
                  : `
                  text-gray-400

                  hover:bg-white/5

                  hover:text-white

                  hover:translate-x-2
                  `
              }
              `}
            >

              {active && (

                <div
                  className="
                  absolute

                  left-0
                  top-3
                  bottom-3

                  w-1

                  rounded-full

                  bg-gradient-to-b
                  from-violet-400
                  to-cyan-400
                  "
                />

              )}

              <Icon
                size={18}
                className="
                text-violet-400

                transition-transform

                group-hover:scale-125
                "
              />

              <span className="font-medium">
                {item.title}
              </span>

            </a>

          );

        })}

      </nav>

      {/* ================= Footer ================= */}
      <div className="mt-auto pt-8">
        <div
          className="
          relative

          overflow-hidden

          rounded-3xl

          border
          border-violet-500/20

          bg-gradient-to-br
          from-violet-500/10
          to-cyan-500/5

          p-5

          backdrop-blur-xl
          "
        >

          <div
            className="
            absolute

            -right-8
            -top-8

            h-24
            w-24

            rounded-full

            bg-violet-500/20

            blur-3xl
            "
          />

          <div className="relative">
            

            <div className="flex items-center gap-2">

              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />

              <Sparkles
                size={15}
                className="text-violet-400"
              />

              <span className="text-sm text-gray-300">
                Currently Building
              </span>

            </div>

            <h2 className="mt-4 text-2xl font-black text-white">
              Vayonix
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              AI-first startup focused on solving real-world problems.
            </p>

            <div className="mt-5 flex items-center justify-between">

              <span className="text-xs font-medium text-green-400">
                ● Available for Internships
              </span>

              <span className="text-violet-400 transition hover:translate-x-1">
                ↗
              </span>

            </div>

          </div>

        </div>
      </div>

    </aside>
  );
}