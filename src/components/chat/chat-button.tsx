"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ChatPopup from "./chat-popup";

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLabel(false), 60000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLabel && !isOpen && (
        <div className="chat-label" onClick={() => { setIsOpen(true); setShowLabel(false); }}>
          <span className="chat-label-text">Hey! Ask Luffy anything about me</span>
          <svg className="chat-label-arrow" width="50" height="40" viewBox="0 0 50 40" fill="none">
            <path d="M4 4 Q12 32 40 28" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" fill="none" strokeDasharray="4 3"/>
            <path d="M34 22 L41 29 L32 31" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
          </svg>
        </div>
      )}
      <button
        className={`chat-fab ${isOpen ? "open" : ""}`}
        onClick={() => { setIsOpen(!isOpen); setShowLabel(false); }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {!isOpen ? (
          <Image
            src="/avatar-chat.png"
            alt="Chat with Prabhav's AI"
            width={90}
            height={90}
            className="chat-fab-avatar"
            priority
          />
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            width="20"
            height="20"
            className="chat-fab-icon"
          >
            <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" />
          </svg>
        )}
      </button>
      <ChatPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
