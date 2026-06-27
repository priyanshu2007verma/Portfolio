interface Props {
  text: string;
}

export default function TechBadge({
  text,
}: Props) {
  return (
    <span
      className="
      rounded-full

      border
      border-violet-500/20

      bg-violet-500/10

      px-3
      py-1

      text-xs
      font-medium

      text-violet-300

      transition-all
      duration-300

      hover:border-violet-500
      hover:bg-violet-500
      hover:text-white
      hover:shadow-[0_0_15px_rgba(124,58,237,.35)]
      "
    >
      {text}
    </span>
  );
}