"use client";

import { useState } from "react";

export interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(([
    {
  role: "assistant",
  text:
`# 👋 Welcome to Auron OS

I'm Priyanshu Verma's AI portfolio assistant.

I can help you explore:

🚀 Startup Judge

💼 Internship Tracker Pro

🤖 AI & Full Stack Skills

📈 Professional Journey

🏆 Achievements

🎯 Startup Vision

Choose a quick question below or ask me anything.`
},
  ]));

  const [loading, setLoading] = useState(false);

  async function sendMessage(message: string) {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: message,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: data.reply,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text:
            "⚠️ Something went wrong while contacting Auron OS.",
        },
      ]);
    }

    setLoading(false);
  }

  return {
    messages,
    loading,
    sendMessage,
  };
}