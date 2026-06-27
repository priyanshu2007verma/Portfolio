"use client";

import { useState } from "react";

import AuronButton from "./AuronButton";
import ChatWindow from "./ChatWindow";

export default function AskAuron() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AuronButton
        open={open}
        onClick={() => setOpen(!open)}
      />

      <ChatWindow
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}