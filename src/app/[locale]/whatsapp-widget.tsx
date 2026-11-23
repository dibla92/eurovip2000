"use client";

import { useState } from "react";

export default function WhatsAppWidget({
  chatLabel,
  closeLabel,
  reopenLabel,
}: {
  chatLabel: string;
  closeLabel: string;
  reopenLabel: string;
}) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <button
        className="whatsapp-tab"
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label={reopenLabel}
      >
        <span aria-hidden="true">WhatsApp</span>
        <span className="whatsapp-tab-icon" aria-hidden="true">
          ↗
        </span>
      </button>
    );
  }

  return (
    <div className="whatsapp-widget">
      <button
        className="whatsapp-close"
        type="button"
        onClick={() => setIsOpen(false)}
        aria-label={closeLabel}
      >
        <span aria-hidden="true">×</span>
      </button>
      <a
        className="whatsapp-float"
        href="https://wa.me/393924044611"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={chatLabel}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.2 5.7A14.3 14.3 0 0 0 3.7 22.9L2 30l7.3-1.9A14.3 14.3 0 0 0 26.2 5.7Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M11.5 9.7c-.4-.9-.8-.9-1.2-.9h-1c-.4 0-.9.2-1.3.7-.5.5-1.7 1.7-1.7 4.1 0 2.4 1.8 4.7 2 5 .3.3 3.5 5.5 8.6 7.5 4.2 1.7 5 .9 5.9.9.9-.1 2.9-1.2 3.3-2.4.4-1.2.4-2.2.3-2.4-.2-.2-.5-.3-1-.6s-2.9-1.4-3.3-1.5c-.4-.2-.8-.3-1.1.3-.4.5-1.3 1.5-1.6 1.8-.3.4-.6.4-1.1.1-.5-.2-2-1-3.8-2.5a14.3 14.3 0 0 1-2.6-3.3c-.3-.5 0-.8.2-1.1l.8-.9c.2-.3.3-.5.5-.8.1-.3 0-.6-.1-.9l-1.8-4Z"
            fill="currentColor"
            transform="translate(1 0) scale(.9)"
          />
        </svg>
      </a>
    </div>
  );
}
