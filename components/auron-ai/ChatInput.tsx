"use client";

import { useState } from "react";
import { Send } from "lucide-react";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState("");

  function send() {
    if (!message.trim()) return;

    onSend(message);
    setMessage("");
  }

  return (
    <div className="border-t border-white/10 p-4">

      <div className="flex gap-3">

        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") send();
          }}
          placeholder="Ask about projects, skills, AI or startups..."
          className="flex-1 rounded-xl border border-white/10 bg-[#111827] px-4 py-3 outline-none focus:border-violet-500"
        />

        <button
          onClick={send}
          className="rounded-xl bg-violet-600 p-3 transition hover:bg-violet-500"
        >
          <Send size={18} />
        </button>

      </div>

    </div>
  );
}