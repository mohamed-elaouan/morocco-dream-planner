import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ResponsiveImage from "./ResponsiveImage";

describe("ResponsiveImage", () => {
  it("prefers AVIF, preserves the fallback, and lazy-loads non-critical media", () => {
    render(
      <ResponsiveImage
        src="/photo.webp"
        avifSrc="/photo.avif"
        mobileSrc="/photo-mobile.webp"
        mobileAvifSrc="/photo-mobile.avif"
        alt="Morocco landscape"
        width={1600}
        height={900}
        sizes="100vw"
      />,
    );

    expect(screen.getByRole("img", { name: "Morocco landscape" })).toHaveAttribute("loading", "lazy");
    expect(screen.getByRole("img", { name: "Morocco landscape" })).toHaveAttribute("width", "1600");
    expect(document.querySelector('source[type="image/avif"]')).toHaveAttribute("srcset", "/photo-mobile.avif");
  });

  it("allows the route LCP image to opt into eager high-priority delivery", () => {
    render(<ResponsiveImage src="/hero.webp" alt="Hero" loading="eager" fetchPriority="high" />);
    const image = screen.getByRole("img", { name: "Hero" });
    expect(image).toHaveAttribute("loading", "eager");
    expect(image).toHaveAttribute("fetchpriority", "high");
  });
});
