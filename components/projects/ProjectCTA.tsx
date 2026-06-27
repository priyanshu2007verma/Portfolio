interface Props {
  github: string;
  live: string;
}

export default function ProjectCTA({
  github,
  live,
}: Props) {
  return (
    <div className="mt-10 flex flex-col gap-4 sm:flex-row">

      <a
        href={live}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-xl bg-violet-600 px-6 py-4 text-center font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500"
      >
        🚀 Live Demo
      </a>

      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 rounded-xl border border-violet-500/30 px-6 py-4 text-center font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-violet-600"
      >
        💻 GitHub
      </a>

    </div>
  );
}