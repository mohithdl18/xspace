
"use client";

import { useState } from "react";
import DownloadModal from "@/components/Download/DownloadModal";

export default function DownloadBrochure() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="flex w-full flex-col items-center justify-center bg-primary-bg px-6 py-20 text-center md:py-28">
        <p className="mb-4 font-body text-xs font-medium uppercase tracking-[0.25em] text-button-bg md:text-sm">
          Explore XSpace Ply
        </p>

        <h2 className="max-w-3xl font-body text-4xl leading-tight text-primary-text md:text-5xl lg:text-6xl">
          Everything you need to know.
          <span className="text-button-bg"> In one place.</span>
        </h2>

        <p className="mt-5 max-w-xl font-body text-sm leading-7 text-primary-text/65 md:text-base">
          Discover our plywood products, materials and solutions
          in the XSpace Ply brochure.
        </p>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="mt-8 inline-flex items-center gap-4 bg-button-bg px-7 py-4 font-body text-sm font-semibold uppercase tracking-wider text-secondary-text transition-colors duration-300 hover:bg-hover-bg hover:text-primary-text"
        >
          Download Brochure
          <span aria-hidden="true" className="text-lg">↗</span>
        </button>
      </section>

      <DownloadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
