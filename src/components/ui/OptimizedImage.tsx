"use client";

import Image, { ImageProps } from "next/image";

/** Default base64 placeholder (neutral gray) - safe for client, no Node deps */
const DEFAULT_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=";

interface OptimizedImageProps extends Omit<ImageProps, "placeholder" | "blurDataURL"> {
  src: string;
  alt: string;
  /** Pre-generated blur data URL (from server). If omitted, uses static placeholder. */
  blurDataURL?: string;
  priority?: boolean;
}

/**
 * Optimized Image with blur placeholder. Uses static placeholder in browser.
 * Pass blurDataURL from a Server Component (using getImageBlur from @/lib/image) for dynamic blur.
 */
export function OptimizedImage({
  src,
  alt,
  blurDataURL,
  priority = false,
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      placeholder="blur"
      blurDataURL={blurDataURL ?? DEFAULT_BLUR}
      priority={priority}
      {...props}
    />
  );
}
