"use client";

import Image from "next/image";
import LiquidButton from "../common/LiquidButton";

export default function ProfileCard() {
  return (
    <div
      className="
      w-full

      max-w-[380px]

      rounded-3xl

      border
      border-violet-500/20

      bg-[#0B1020]

      p-8

      shadow-[0_0_60px_rgba(124,58,237,0.15)]

      transition-all
      duration-500

      hover:-translate-y-2
      hover:shadow-[0_0_90px_rgba(124,58,237,.25)]
      "
    >
      {/* Profile */}

      <div className="mx-auto w-fit rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 p-[3px]">

        <div className="overflow-hidden rounded-full">

          <Image
            src="/images/Profile.jpeg"
            alt="Priyanshu Verma"
            width={120}
            height={120}
            priority
            className="h-30 w-30 object-cover transition duration-500 hover:scale-110"
          />

        </div>

      </div>

      <h3 className="mt-6 text-center text-3xl font-bold">
        Priyanshu Verma
      </h3>

      <p className="mt-2 text-center text-gray-400">
        AI Developer • Full Stack Developer
      </p>

      <div className="mt-8 space-y-5 text-gray-300">

        <div className="flex items-center gap-3">
          📍 Delhi, India
        </div>

        <div className="flex items-center gap-3">
          💼 Open to Internships
        </div>

        <div className="flex items-center gap-3">
          🚀 Building Vayonix
        </div>

      </div>

      <div className="mt-10 flex justify-center">

        <LiquidButton
          onClick={() => window.open("/resume.pdf", "_blank")}
        >
          📄 View Resume
        </LiquidButton>

      </div>

    </div>
  );
}