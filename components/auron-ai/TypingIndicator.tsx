"use client";

export default function TypingIndicator() {
  return (
    <div className="mb-5 flex justify-start">

      <div className="rounded-2xl border border-white/10 bg-[#111827] px-5 py-4">

        <div className="flex gap-2">

          <div className="h-2 w-2 animate-bounce rounded-full bg-violet-500" />

          <div className="h-2 w-2 animate-bounce rounded-full bg-violet-500 [animation-delay:120ms]" />

          <div className="h-2 w-2 animate-bounce rounded-full bg-violet-500 [animation-delay:240ms]" />

        </div>

      </div>

    </div>
  );
}