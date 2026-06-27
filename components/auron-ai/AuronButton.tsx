"use client";

interface Props {
  open: boolean;
  onClick: () => void;
}

export default function AuronButton({
  open,
  onClick,
}: Props) {
  return (
    <button
      id="auron-button"
      onClick={onClick}
      className="fixed bottom-8 right-8 z-[99999] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-4 font-semibold text-white shadow-[0_0_40px_rgba(124,58,237,.45)] transition hover:scale-105"
    >
      {open ? "✕ Close Auron" : "🤖 Auron OS"}
    </button>
  );
}