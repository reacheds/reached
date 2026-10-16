"use client";

import React, { useState } from "react";

interface PromptItem {
  id: string;
  category: string;
  prompt: string;
}

const SAMPLE_PROMPTS: PromptItem[] = [
  {
    id: "discord-bot",
    category: "Discord Bot",
    prompt: "Create an automated Discord welcome workflow with custom embed templates.",
  },
  {
    id: "database-drizzle",
    category: "Database & Drizzle",
    prompt: "Connect PostgreSQL database using Drizzle ORM and push schema migrations.",
  },
  {
    id: "auth-flow",
    category: "Authentication",
    prompt: "Build an authenticated Next.js dashboard with Discord OAuth2 login.",
  },
  {
    id: "slash-commands",
    category: "Slash Commands",
    prompt: "Deploy modular application commands globally with TypeScript validation.",
  },
  {
    id: "turborepo-cache",
    category: "Monorepo Pipelines",
    prompt: "Configure Turborepo pipelines for persistent caching and parallel CI builds.",
  },
  {
    id: "realtime-sync",
    category: "Guild Sync",
    prompt: "Implement real-time WebSocket listeners for guild state and presence tracking.",
  },
];

export function PromptGrid() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = async (id: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // Fallback if clipboard API is not available
      const textArea = document.createElement("textarea");
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  return (
    <div className="framer-container-1262">
      <div className="framer-grid-1262">
        {SAMPLE_PROMPTS.map((item) => {
          const isCopied = copiedId === item.id;
          return (
            <div
              key={item.id}
              className="framer-prompt-card"
              onClick={() => handleCopy(item.id, item.prompt)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCopy(item.id, item.prompt);
                }
              }}
              aria-label={`Copy prompt: ${item.prompt}`}
            >
              <div className="framer-prompt-card-header">
                <span className="framer-prompt-card-category">{item.category}</span>
                <span
                  className={`framer-prompt-copy-badge ${isCopied ? "copied" : ""}`}
                >
                  {isCopied ? (
                    <>
                      <svg
                        className="framer-prompt-icon"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
                      </svg>
                      Copied
                    </>
                  ) : (
                    <>
                      <svg
                        className="framer-prompt-icon"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" />
                        <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
                      </svg>
                      Copy
                    </>
                  )}
                </span>
              </div>

              <p className="framer-prompt-card-text">{item.prompt}</p>

              <div className="framer-prompt-card-footer">
                <span className="framer-prompt-action-hint">Click card to copy</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
