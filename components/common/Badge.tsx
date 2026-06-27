interface BadgeProps {
  text: string;
}

export default function Badge({ text }: BadgeProps) {
  return (
    <div className="inline-flex rounded-full border border-violet-500/40 bg-violet-500/10 px-5 py-2 text-sm text-violet-300 backdrop-blur-md">
      {text}
    </div>
  );
}