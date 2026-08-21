"""Create high-quality AVIF companions and shrink shipped raster source files in place.

The application imports source images directly, so retaining filenames keeps every existing
route working while ensuring Vite emits only the smaller assets.
"""

from __future__ import annotations

import argparse
import os
from pathlib import Path

from PIL import Image, ImageOps


RASTER_EXTENSIONS = {".jpg", ".jpeg", ".png", ".webp"}


def target_edge(path: Path) -> int:
    normalized = path.as_posix().lower()
    if "mobile_hero-section" in normalized:
        return 1280
    if "hero section" in normalized:
        return 1920
    return 1600


def normalize(image: Image.Image) -> Image.Image:
    image = ImageOps.exif_transpose(image)
    if image.mode not in {"RGB", "RGBA"}:
        image = image.convert("RGBA" if "transparency" in image.info else "RGB")
    return image


def resize(image: Image.Image, edge: int) -> Image.Image:
    longest = max(image.size)
    if longest <= edge:
        return image
    ratio = edge / longest
    return image.resize((round(image.width * ratio), round(image.height * ratio)), Image.Resampling.LANCZOS)


def save_for_extension(image: Image.Image, target: Path, extension: str) -> None:
    if extension in {".jpg", ".jpeg"}:
        if image.mode == "RGBA":
            background = Image.new("RGB", image.size, "white")
            background.paste(image, mask=image.getchannel("A"))
            image = background
        image.save(target, "JPEG", quality=88, optimize=True, progressive=True)
    elif extension == ".png":
        image.save(target, "PNG", optimize=True, compress_level=9)
    else:
        image.save(target, "WEBP", quality=88, method=6)


def process(path: Path, write: bool) -> tuple[bool, int, int]:
    original_size = path.stat().st_size
    with Image.open(path) as source:
        image = resize(normalize(source), target_edge(path))

    temporary = path.with_suffix(f"{path.suffix}.optimized")
    save_for_extension(image, temporary, path.suffix.lower())
    optimized_size = temporary.stat().st_size

    if write and optimized_size < original_size:
        os.replace(temporary, path)
        final_size = optimized_size
    else:
        temporary.unlink(missing_ok=True)
        final_size = original_size

    avif_path = path.with_suffix(".avif")
    if write:
        image.convert("RGB").save(avif_path, "AVIF", quality=72, speed=6)

    return final_size < original_size, original_size, final_size


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("root", type=Path, nargs="?", default=Path("src/assets"))
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    files = sorted(path for path in args.root.rglob("*") if path.suffix.lower() in RASTER_EXTENSIONS)
    before = after = changed = 0
    for path in files:
        try:
            was_changed, old_size, new_size = process(path, not args.dry_run)
            before += old_size
            after += new_size
            changed += int(was_changed)
        except Exception as error:  # Keep a single malformed image from blocking deployment.
            print(f"Skipped {path}: {error}")

    print(f"Processed {len(files)} images; reduced {changed}. {before / 1_000_000:.1f} MB -> {after / 1_000_000:.1f} MB")


if __name__ == "__main__":
    main()
