interface Props {
  title: string;
  value: string;
  link: string;
  emoji: string;
}

export default function ContactCard({
  title,
  value,
  link,
  emoji,
}: Props) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
      group

      rounded-3xl

      border
      border-white/10

      bg-[#0B1020]

      p-6

      sm:p-7

      transition-all
      duration-300

      hover:-translate-y-2
      hover:border-violet-500/40
      hover:shadow-[0_0_35px_rgba(124,58,237,.22)]
      "
    >

      <div className="text-4xl transition duration-300 group-hover:scale-110">
        {emoji}
      </div>

      <h3 className="mt-5 text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 break-all text-sm leading-7 text-gray-400 sm:text-base">
        {value}
      </p>

    </a>
  );
}