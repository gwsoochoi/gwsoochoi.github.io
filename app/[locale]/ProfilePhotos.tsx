"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

/** 썸네일 2장 + 클릭 시 확대 오버레이 */
export default function ProfilePhotos({
  photos,
  alt,
}: {
  photos: string[];
  alt: string;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const altOf = (index: number) => (index === 0 ? alt : `${alt} ${index + 1}`);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <>
      <div className={`grid gap-3 ${photos.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
        {photos.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setOpenIndex(index)}
            aria-label={altOf(index)}
            className="relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-xl border border-border transition-colors hover:border-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <Image
              src={src}
              alt={altOf(index)}
              fill
              sizes="(max-width: 640px) 92vw, 240px"
              priority={index === 0}
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5"
          onClick={() => setOpenIndex(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={altOf(openIndex)}
            className="relative"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={photos[openIndex]}
              alt={altOf(openIndex)}
              width={1050}
              height={1400}
              sizes="(max-width: 768px) 88vw, 640px"
              className="max-h-[86vh] w-auto max-w-[88vw] rounded-2xl object-contain shadow-2xl ring-1 ring-white/20"
            />
            <button
              type="button"
              onClick={() => setOpenIndex(null)}
              aria-label="Close"
              className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted shadow-lg transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
