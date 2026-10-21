import { useEffect, useRef } from 'react';

type Image = { src: string; alt: string; caption?: string };

type Props = {
  images: Image[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
};

export default function Lightbox({ images, index, onClose, onChange }: Props) {
  const img = images[index];
  const hasMany = images.length > 1;
  const prev = () => onChange((index - 1 + images.length) % images.length);
  const next = () => onChange((index + 1) % images.length);

  // swipe left/right on touch screens
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || !hasMany) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) < 40) return;
    if (dx > 0) prev();
    else next();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasMany) prev();
      if (e.key === 'ArrowRight' && hasMany) next();
    };
    window.addEventListener('keydown', onKey);

    // stop the page behind from scrolling
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
    };
  });

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={img.alt}
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>

      {hasMany && (
        <button
          className="lightbox-nav lightbox-prev"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous image"
        >
          ‹
        </button>
      )}

      <figure className="lightbox-figure" onClick={(e) => e.stopPropagation()}>
        <img className="lightbox-img" src={img.src} alt={img.alt} />
        {(img.caption || hasMany) && (
          <figcaption className="lightbox-caption">
            {img.caption}
            {hasMany && (
              <span className="lightbox-count">
                {index + 1} / {images.length}
              </span>
            )}
          </figcaption>
        )}
      </figure>

      {hasMany && (
        <button
          className="lightbox-nav lightbox-next"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next image"
        >
          ›
        </button>
      )}
    </div>
  );
}
