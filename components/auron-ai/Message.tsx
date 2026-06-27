"use client";

import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  role: "user" | "assistant";
  text: string;
}

export default function Message({ role, text }: Props) {
  const isUser = role === "user";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`mb-5 flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-violet-600 text-white"
            : "border border-white/10 bg-[#111827] text-gray-200"
        }`}
      >
        <div className="mb-2 flex items-center gap-2 text-xs font-semibold opacity-70">
          {isUser ? (
            <>
              <User size={14} />
              You
            </>
          ) : (
            <>
              <Bot size={14} />
              Auron OS
            </>
          )}
        </div>

        <p className="leading-7 whitespace-pre-wrap">
          {text}
        </p>
      </div>
    </motion.div>
  );
}