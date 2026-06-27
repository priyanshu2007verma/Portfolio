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
      bottom-24
      right-8
      z-[99999]

      flex
      h-[720px]
      w-[430px]
      flex-col

      overflow-hidden

      rounded-3xl

      border
      border-violet-500/20

      bg-[#050816]

      shadow-[0_0_60px_rgba(124,58,237,.3)]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between border-b border-white/10 p-6">

        <div>

          <h2 className="text-2xl font-bold">
            🤖 Auron OS
          </h2>

          <p className="mt-1 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse">
                <span className="text-sm text-gray-400">
                  Online • Powered by Groq
                  </span>
              </div>
            </div>
          </p>

        </div>

        <button
          onClick={onClose}
          className="rounded-lg p-2 hover:bg-white/10"
        >
          ✕
        </button>

      </div>

      {/* Messages */}

      <div className="flex-1 overflow-y-auto p-6">

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

      {/* Suggestions */}

      <div className="border-t border-white/10 px-5 pt-4">

        <SuggestedQuestions
          onSelect={sendMessage}
        />

      </div>

      {/* Input */}

      <ChatInput
        onSend={sendMessage}
      />

    </div>
  );
}