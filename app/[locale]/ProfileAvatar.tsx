"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ProfileAvatarProps = {
  alt: string;
  mainSrc?: string;
  subSrc?: string;
};

export default function ProfileAvatar({
  alt,
  mainSrc = "/profile-main.jpg",
  subSrc = "/profile-sub.jpg",
}: ProfileAvatarProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const open = selectedIndex !== null;
  const photos = [
    {
      src: mainSrc,
      alt,
      className: "profile-photo-button profile-photo-main",
      priority: true,
      objectPosition: "50% 50%",
    },
    {
      src: subSrc,
      alt: `${alt} 2`,
      className: "profile-photo-button profile-photo-sub",
      priority: false,
      objectPosition: "50% 52%",
    },
  ];
  const selectedPhoto = selectedIndex === null ? null : photos[selectedIndex];

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <div className="profile-photo-stack">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setSelectedIndex(index)}
            className={photo.className}
            aria-label={photo.alt}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              width={index === 0 ? 128 : 108}
              height={index === 0 ? 128 : 108}
              priority={photo.priority}
              sizes={index === 0 ? "128px" : "108px"}
              className="h-full w-full rounded-full object-cover"
              style={{ objectPosition: photo.objectPosition }}
            />
            {index === 0 && (
              <>
                <span className="profile-photo-spark profile-photo-spark-one" />
                <span className="profile-photo-spark profile-photo-spark-two" />
              </>
            )}
          </button>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-5"
          onClick={() => setSelectedIndex(null)}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedPhoto.alt}
            className="profile-photo-dialog relative"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={1050}
              height={1400}
              sizes="(max-width: 768px) 88vw, 640px"
              className="max-h-[86vh] w-auto max-w-[88vw] rounded-2xl object-contain shadow-2xl ring-1 ring-white/20"
            />
            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-muted shadow-lg transition-colors hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close"
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
