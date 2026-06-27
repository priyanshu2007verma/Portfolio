"use client";

import AboutContent from "./AboutContent";
import ProfileCard from "./ProfileCard";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:min-h-screen lg:flex lg:items-center"
    >
      <div
        className="
        mx-auto

        flex

        max-w-7xl

        flex-col

        items-center

        gap-14

        px-6

        sm:px-8

        md:px-10

        lg:flex-row
        lg:items-center
        lg:justify-between
        lg:gap-20
        lg:px-12
        "
      >
        <AboutContent />

        <ProfileCard />
      </div>
    </section>
  );
}