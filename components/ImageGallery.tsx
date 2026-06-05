type ImageGalleryProps = {
  title: string;
  tone: "sea" | "sand" | "city";
};

export function ImageGallery({ title, tone }: ImageGalleryProps) {
  const toneClass = tone === "sand" ? "bg-sand-light" : tone === "city" ? "bg-mist" : "mediterranean-photo";

  return (
    <div aria-label={`Gallery fotografica ${title}`} className="grid gap-4 lg:grid-cols-[1.45fr_0.8fr]">
      <div className={`h-[360px] rounded-lg lg:h-[540px] ${toneClass}`} />
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        <div className={`h-32 rounded-lg lg:h-[169px] ${toneClass}`} />
        <div className={`h-32 rounded-lg lg:h-[169px] ${toneClass}`} />
        <div className={`h-32 rounded-lg lg:h-[169px] ${toneClass}`} />
      </div>
    </div>
  );
}
