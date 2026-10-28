
"use client";

import { useEffect } from "react";

const BROCHURE_URL =
  "https://www.xspaceply.com/xspaceply-brochure.pdf";

export default function DownloadModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-text/60 px-5 py-8 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="download-modal-title"
        className="relative w-full max-w-lg bg-primary-bg p-7 text-primary-text shadow-2xl md:p-10"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close download modal"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center text-2xl text-primary-text/60 transition-colors hover:text-button-bg"
        >
          &times;
        </button>

        {/* Modal Content */}
        <p className="mb-4 font-body text-xs font-semibold uppercase tracking-[0.25em] text-button-bg">
          XSpace Ply
        </p>

        <h2
          id="download-modal-title"
          className="font-display text-3xl leading-tight md:text-4xl"
        >
          Get our brochure<span className="text-button-bg">.</span>
        </h2>

        <p className="mt-4 font-body text-sm leading-7 text-primary-text/70">
          Explore our product range and discover plywood solutions
          for your next project.
        </p>

        {/* Download Button */}
        <a
          href={BROCHURE_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onClose}
          className="mt-8 flex w-full items-center justify-between bg-button-bg px-6 py-4 font-body text-sm font-semibold uppercase tracking-wider text-secondary-text transition-colors duration-300 hover:bg-hover-bg hover:text-primary-text"
        >
          Download PDF
          <span aria-hidden="true" className="text-xl">↓</span>
        </a>

        <button
          type="button"
          onClick={onClose}
          className="mt-4 w-full py-2 font-body text-xs font-medium uppercase tracking-wider text-primary-text/60 transition-colors hover:text-primary-text"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
