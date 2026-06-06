type ImageGalleryProps = {
  title: string;
  image: string;
};

export function ImageGallery({ title, image }: ImageGalleryProps) {
  const backgroundImage = `linear-gradient(180deg, rgba(9, 31, 56, 0.06), rgba(9, 31, 56, 0.38)), url(${image})`;

  return (
    <div aria-label={`Gallery fotografica ${title}`} className="grid gap-4 lg:grid-cols-[1.45fr_0.8fr]">
      <div
        className="property-photo-placeholder h-[360px] rounded-lg lg:h-[540px]"
        style={{ backgroundImage }}
      />
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="property-photo-placeholder h-32 rounded-lg lg:h-[169px]"
            style={{ backgroundImage }}
          />
        ))}
      </div>
    </div>
  );
}
