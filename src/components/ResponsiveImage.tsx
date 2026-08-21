import type { ImgHTMLAttributes } from "react";

type ResponsiveImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
  src: string;
  avifSrc?: string;
  mobileSrc?: string;
  mobileAvifSrc?: string;
  sizes?: string;
};

/** Native responsive image primitive with AVIF preference and a WebP/JPEG fallback. */
const ResponsiveImage = ({
  src,
  avifSrc,
  mobileSrc,
  mobileAvifSrc,
  sizes,
  loading = "lazy",
  fetchPriority,
  ...imageProps
}: ResponsiveImageProps) => (
  <picture>
    {mobileAvifSrc && <source media="(max-width: 639px)" type="image/avif" srcSet={mobileAvifSrc} sizes={sizes} />}
    {mobileSrc && <source media="(max-width: 639px)" srcSet={mobileSrc} sizes={sizes} />}
    {avifSrc && <source type="image/avif" srcSet={avifSrc} sizes={sizes} />}
    <img
      src={src}
      sizes={sizes}
      loading={loading}
      decoding="async"
      {...(fetchPriority ? { fetchpriority: fetchPriority } : {})}
      {...imageProps}
    />
  </picture>
);

export default ResponsiveImage;
