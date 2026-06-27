"use client";

import { contact } from "../../lib/portfolio";
import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">

        {/* Header */}

        <div className="text-center">

          <p className="text-sm uppercase tracking-[6px] text-violet-400">
            Let's Build Together
          </p>

          <h2 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {contact.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            {contact.subtitle}
          </p>

        </div>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-6 sm:grid-cols-2">

          <ContactCard
            title="Email"
            value={contact.email}
            link={`mailto:${contact.email}`}
            emoji="📧"
          />

          <ContactCard
            title="GitHub"
            value="View My Projects"
            link={contact.github}
            emoji="💻"
          />

          <ContactCard
            title="LinkedIn"
            value="Let's Connect"
            link={contact.linkedin}
            emoji="💼"
          />

          <ContactCard
            title="Resume"
            value="Download Resume"
            link={contact.resume}
            emoji="📄"
          />

        </div>

        {/* AI CTA */}

        <div
          className="
          mt-24

          rounded-3xl

          border
          border-violet-500/20

          bg-gradient-to-r
          from-violet-600/10
          via-fuchsia-600/10
          to-cyan-500/10

          p-8

          text-center

          sm:p-10
          lg:p-12
          "
        >

          <h3 className="text-2xl font-bold sm:text-3xl">
            Want to know more?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400 leading-8">
            Instead of reading everything manually,
            ask my AI assistant about my projects,
            skills, achievements or startup vision.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("auron-button")
                ?.click()
            }
            className="
            mt-8

            rounded-2xl

            bg-violet-600

            px-8
            py-4

            text-base
            font-semibold

            transition-all
            duration-300

            hover:-translate-y-1
            hover:bg-violet-500
            hover:shadow-[0_0_30px_rgba(124,58,237,.35)]
            "
          >
            🤖 Ask Auron AI
          </button>

        </div>

      </div>
    </section>
  );
}