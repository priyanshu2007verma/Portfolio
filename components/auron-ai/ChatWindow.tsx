"use client";

import { useEffect, useRef } from "react";

import { useChat } from "@/hooks/useChat";

import Message from "./Message";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import TypingIndicator from "./TypingIndicator";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ChatWindow({
  open,
  onClose,
}: Props) {
  const {
    messages,
    loading,
    sendMessage,
  } = useChat();

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  if (!open) return null;

    return (
    <div
      className="
        fixed
        bottom-20
        right-4
        left-4
        z-[99999]

        flex
        h-[82vh]
        max-h-[760px]
        flex-col

        overflow-hidden

        rounded-3xl
        border border-violet-500/20

        bg-[#050816]

        shadow-[0_0_60px_rgba(124,58,237,.3)]

        sm:left-auto
        sm:right-6
        sm:w-[430px]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

        <div>

          <h2 className="text-xl font-bold">
            🤖 Auron OS
          </h2>

          <div className="mt-1 flex items-center gap-2">

            <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

            <span className="text-xs text-gray-400">
              Online • Powered by Groq
            </span>

          </div>

        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-2 transition hover:bg-white/10"
        >
          ✕
        </button>

      </div>

      {/* Scrollable Messages */}

      <div className="flex-1 overflow-y-auto px-5 py-4">

        {messages.map((message, index) => (

          <Message
            key={index}
            role={message.role}
            text={message.text}
          />

        ))}

        {loading && <TypingIndicator />}

        <div ref={bottomRef} />

      </div>

      {/* Bottom Area */}

      <div className="border-t border-white/10 bg-[#050816] p-4">

        <SuggestedQuestions
          onSelect={sendMessage}
        />

        <ChatInput
          onSend={sendMessage}
        />

      </div>

    </div>
  );
}