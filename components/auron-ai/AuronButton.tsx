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
      className="fixed bottom-5 right-5 z-[99999] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 font-semibold text-white shadow-[0_0_35px_rgba(124,58,237,.45)] transition hover:scale-105 sm:bottom-8 sm:right-8 sm:px-6 sm:py-4 "
      >
      {open ? "✕ Close Auron" : "🤖 Auron OS"}
    </button>
  );
}