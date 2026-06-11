"use client";

import { useState } from "react";

type ImageGalleryProps = {
  title: string;
  images: string[];
};

function getBackgroundImage(image: string) {
  if (!image) {
    return "linear-gradient(135deg, rgba(14, 46, 79, 0.92), rgba(24, 111, 145, 0.58) 48%, rgba(232, 214, 184, 0.88))";
  }

  return `linear-gradient(180deg, rgba(9, 31, 56, 0.06), rgba(9, 31, 56, 0.38)), url("${image}")`;
}

export function ImageGallery({ title, images }: ImageGalleryProps) {
  const validImages = images.filter(Boolean);
  const galleryImages = validImages.length > 0 ? validImages : [""];
  const [activeIndex, setActiveIndex] = useState(0);
  const activeImage = galleryImages[activeIndex];

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? galleryImages.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current === galleryImages.length - 1 ? 0 : current + 1));
  }

  return (
    <div aria-label={`Gallery fotografica ${title}`} className="grid gap-4 lg:grid-cols-[1fr_280px]">
      <div
        className="property-photo-placeholder relative min-h-[360px] rounded-lg lg:min-h-[560px]"
        style={{ backgroundImage: getBackgroundImage(activeImage) }}
      >
        <div className="absolute inset-x-4 top-4 flex items-center justify-between gap-4">
          <span className="rounded-full bg-navy/80 px-4 py-2 text-sm font-bold text-white">
            {activeIndex + 1} / {galleryImages.length}
          </span>
          <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-navy">
            {galleryImages.length} foto
          </span>
        </div>
        {galleryImages.length > 1 ? (
          <div className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center justify-between">
            <button
              aria-label="Immagine precedente"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-2xl font-bold text-navy shadow-soft"
              onClick={showPrevious}
              type="button"
            >
              {"<"}
            </button>
            <button
              aria-label="Immagine successiva"
              className="grid h-11 w-11 place-items-center rounded-full bg-white/90 text-2xl font-bold text-navy shadow-soft"
              onClick={showNext}
              type="button"
            >
              {">"}
            </button>
          </div>
        ) : null}
      </div>
      <div className="grid grid-cols-5 gap-3 lg:max-h-[560px] lg:grid-cols-1 lg:overflow-y-auto lg:pr-1">
        {galleryImages.map((image, index) => (
          <button
            aria-label={`Mostra foto ${index + 1} di ${title}`}
            className={`property-photo-placeholder h-20 rounded-md border-2 transition lg:h-28 ${
              activeIndex === index ? "border-gold" : "border-transparent"
            }`}
            key={image || index}
            onClick={() => setActiveIndex(index)}
            style={{ backgroundImage: getBackgroundImage(image) }}
            type="button"
          />
        ))}
      </div>
    </div>
  );
}
