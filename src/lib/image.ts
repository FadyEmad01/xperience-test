import "server-only";
import { getPlaiceholder } from "plaiceholder";

/**
 * Generates a base64 blur placeholder for a local image
 * @param src - Path to local image (e.g., "/images/hero.png")
 * @returns Promise resolving to base64 blur data URL
 */
export async function getLocalImageBlur(src: string): Promise<string> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}${src}`);
    const buffer = await response.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer), {
      size: 10, // Small size for faster generation
    });
    return base64;
  } catch (error) {
    console.warn(`Failed to generate blur for ${src}:`, error);
    // Return a minimal transparent placeholder
    return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=";
  }
}

/**
 * Generates a base64 blur placeholder for an external/API image
 * @param url - Full URL to the image
 * @returns Promise resolving to base64 blur data URL
 */
export async function getRemoteImageBlur(url: string): Promise<string> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.statusText}`);
    }
    const buffer = await response.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer), {
      size: 10,
    });
    return base64;
  } catch (error) {
    console.warn(`Failed to generate blur for ${url}:`, error);
    // Return a minimal transparent placeholder
    return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=";
  }
}

/**
 * Determines if an image source is a remote URL
 * @param src - Image source path or URL
 * @returns true if the source is a remote URL
 */
export function isRemoteImage(src: string): boolean {
  return src.startsWith("http://") || src.startsWith("https://") || src.startsWith("//");
}

/**
 * Gets blur placeholder for any image source (local or remote)
 * @param src - Image source path or URL
 * @returns Promise resolving to base64 blur data URL
 */
export async function getImageBlur(src: string): Promise<string> {
  if (isRemoteImage(src)) {
    return getRemoteImageBlur(src);
  }
  return getLocalImageBlur(src);
}

/**
 * Preloads and generates blur placeholder for multiple images
 * Useful for pre-generating placeholders at build time
 * @param sources - Array of image sources
 * @returns Promise resolving to a map of source -> blur data URL
 */
export async function preloadImageBlurs(
  sources: string[]
): Promise<Record<string, string>> {
  const results: Record<string, string> = {};
  
  await Promise.all(
    sources.map(async (src) => {
      try {
        results[src] = await getImageBlur(src);
      } catch (error) {
        console.warn(`Failed to preload blur for ${src}:`, error);
        results[src] = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmM2Y0ZjYiLz48L3N2Zz4=";
      }
    })
  );
  
  return results;
}
