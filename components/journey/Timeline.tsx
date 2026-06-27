import TimelineItem from "./TimelineItem";

interface Item {
  year: string;
  title: string;
  description: string;
}

interface Props {
  items: Item[];
}

export default function Timeline({
  items,
}: Props) {
  return (
    <div className="relative mx-auto mt-20 max-w-4xl">

      {/* Vertical Line */}

      <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-violet-500 via-fuchsia-500 to-cyan-400 sm:left-5" />

      <div className="space-y-12 sm:space-y-14">

        {items.map((item) => (
          <TimelineItem
            key={item.title}
            item={item}
          />
        ))}

      </div>

    </div>
  );
}