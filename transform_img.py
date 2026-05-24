import os
from PIL import Image

# Supported input formats
SUPPORTED_FORMATS = ('.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.gif')

def convert_to_webp(input_path, output_path, quality=80):
    try:
        with Image.open(input_path) as img:
            img = img.convert("RGB")  # Ensure compatibility
            img.save(output_path, "webp", quality=quality)
        print(f"[✔] Converted: {input_path} → {output_path}")
    except Exception as e:
        print(f"[✖] Error converting {input_path}: {e}")


def process_directory(root_dir, output_dir=None, delete_original=False, quality=80):
    for root, _, files in os.walk(root_dir):
        for file in files:
            if file.lower().endswith(SUPPORTED_FORMATS):
                input_path = os.path.join(root, file)

                # Determine output directory
                relative_path = os.path.relpath(root, root_dir)
                save_dir = os.path.join(output_dir, relative_path) if output_dir else root

                os.makedirs(save_dir, exist_ok=True)

                output_file = os.path.splitext(file)[0] + ".webp"
                output_path = os.path.join(save_dir, output_file)

                convert_to_webp(input_path, output_path, quality)

                if delete_original:
                    try:
                        os.remove(input_path)
                        print(f"[🗑] Deleted original: {input_path}")
                    except Exception as e:
                        print(f"[!] Failed to delete {input_path}: {e}")


if __name__ == "__main__":
    # CONFIGURATION
    INPUT_FOLDER = "new HappyTravelers pic"      # Change this
    OUTPUT_FOLDER = "new HappyTravelers pic"     # Set None to overwrite in-place
    DELETE_ORIGINAL = True           # True = remove original files
    QUALITY = 80                      # 0–100 (higher = better quality, bigger size)

    process_directory(
        INPUT_FOLDER,
        OUTPUT_FOLDER,
        delete_original=DELETE_ORIGINAL,
        quality=QUALITY
    )