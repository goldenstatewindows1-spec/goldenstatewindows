export interface PictureSource {
  sources: Record<string, string>;
  img: { src: string; w: number; h: number };
}

interface PictureProps {
  /** Imported image with the `as=picture` directive (default via vite-imagetools). */
  image: PictureSource;
  alt: string;
  /** `sizes` attribute describing the rendered width, e.g. "(min-width:1024px) 45vw, 100vw". */
  sizes?: string;
  className?: string;
  /** Set on the single LCP image per page (hero). Loads eager + fetchpriority=high. */
  priority?: boolean;
}

/**
 * Responsive <picture> with AVIF/WebP sources and a JPEG fallback.
 * fetchpriority is set via a ref because React 18.3 doesn't recognize the camelCase prop.
 */
export const Picture = ({ image, alt, sizes, className, priority }: PictureProps) => {
  return (
    <picture className="contents">
      {Object.entries(image.sources).map(([key, srcSet]) => {
        const type = key.includes("/") ? key : `image/${key}`;
        return <source key={key} type={type} srcSet={srcSet} sizes={sizes} />;
      })}
      <img
        src={image.img.src}
        width={image.img.w}
        height={image.img.h}
        alt={alt}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        className={className}
        ref={priority ? (el) => el?.setAttribute("fetchpriority", "high") : undefined}
      />
    </picture>
  );
};
