"""
Convert images from any format to AVIF format
Supports: JPG, PNG, GIF, BMP, WebP, TIFF, and more
"""

import os
import sys
from pathlib import Path
from PIL import Image
import argparse
from concurrent.futures import ThreadPoolExecutor
import logging

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Common image extensions
SUPPORTED_FORMATS = {'.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.tiff', '.tif', '.ico', '.ppm', '.pgm', '.pbm'}


def convert_image_to_avif(input_path, output_path=None, quality=80):
    """
    Convert a single image to AVIF format
    
    Args:
        input_path (str): Path to input image
        output_path (str): Path to output AVIF file (optional)
        quality (int): Quality level 0-100 (default: 80)
    
    Returns:
        bool: True if successful, False otherwise
    """
    try:
        input_path = Path(input_path)
        
        if not input_path.exists():
            logger.error(f"File not found: {input_path}")
            return False
        
        # Determine output path
        if output_path is None:
            output_path = input_path.with_suffix('.avif')
        else:
            output_path = Path(output_path)
        
        # Create output directory if it doesn't exist
        output_path.parent.mkdir(parents=True, exist_ok=True)
        
        # Open and convert image
        with Image.open(input_path) as img:
            # Convert RGBA to RGB if necessary (AVIF doesn't support transparency in all cases)
            if img.mode in ('RGBA', 'LA', 'P'):
                # Create white background
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Save as AVIF
            img.save(output_path, 'AVIF', quality=quality)
        
        logger.info(f"✓ Converted: {input_path.name} → {output_path.name}")
        return True
        
    except Exception as e:
        logger.error(f"✗ Error converting {input_path}: {str(e)}")
        return False


def batch_convert_directory(input_dir, output_dir=None, quality=80, max_workers=4):
    """
    Convert all images in a directory to AVIF format
    
    Args:
        input_dir (str): Directory containing images
        output_dir (str): Output directory (default: same as input_dir)
        quality (int): Quality level 0-100
        max_workers (int): Number of threads for parallel processing
    
    Returns:
        dict: Statistics of conversion
    """
    input_dir = Path(input_dir)
    
    if not input_dir.exists():
        logger.error(f"Directory not found: {input_dir}")
        return None
    
    if output_dir is None:
        output_dir = input_dir
    else:
        output_dir = Path(output_dir)
    
    # Find all image files
    image_files = []
    for ext in SUPPORTED_FORMATS:
        image_files.extend(input_dir.rglob(f'*{ext}'))
        image_files.extend(input_dir.rglob(f'*{ext.upper()}'))
    
    image_files = list(set(image_files))  # Remove duplicates
    
    if not image_files:
        logger.warning(f"No image files found in {input_dir}")
        return {'total': 0, 'successful': 0, 'failed': 0}
    
    logger.info(f"Found {len(image_files)} images to convert")
    
    # Convert images with threading
    stats = {'total': len(image_files), 'successful': 0, 'failed': 0}
    
    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = []
        for image_file in image_files:
            relative_path = image_file.relative_to(input_dir)
            out_path = output_dir / relative_path.with_suffix('.avif')
            future = executor.submit(convert_image_to_avif, image_file, out_path, quality)
            futures.append(future)
        
        # Count results
        for future in futures:
            if future.result():
                stats['successful'] += 1
            else:
                stats['failed'] += 1
    
    return stats


def convert_single_file(input_file, output_file=None, quality=80):
    """
    Convert a single image file to AVIF
    
    Args:
        input_file (str): Path to input image
        output_file (str): Path to output file (optional)
        quality (int): Quality level 0-100
    """
    success = convert_image_to_avif(input_file, output_file, quality)
    return success


if __name__ == '__main__':
    parser = argparse.ArgumentParser(
        description='Convert images to AVIF format',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog='''
Examples:
  # Convert single image
  python image_to_avif.py image.jpg
  
  # Convert with custom output
  python image_to_avif.py image.jpg -o output.avif
  
  # Convert entire directory
  python image_to_avif.py /path/to/images/ -d
  
  # Convert directory with custom quality
  python image_to_avif.py /path/to/images/ -d -q 90
  
  # Convert to specific output directory
  python image_to_avif.py /input/folder/ -d -o /output/folder/
        '''
    )
    
    parser.add_argument('input', help='Input image file or directory')
    parser.add_argument('-o', '--output', help='Output file or directory path')
    parser.add_argument('-q', '--quality', type=int, default=80, help='Quality 0-100 (default: 80)')
    parser.add_argument('-d', '--directory', action='store_true', help='Batch convert directory')
    parser.add_argument('-w', '--workers', type=int, default=4, help='Number of threads (default: 4)')
    
    args = parser.parse_args()
    
    if args.directory:
        # Batch convert directory
        stats = batch_convert_directory(
            args.input,
            args.output,
            args.quality,
            args.workers
        )
        if stats:
            print(f"\n{'='*50}")
            print(f"Conversion Complete!")
            print(f"Total: {stats['total']} | Successful: {stats['successful']} | Failed: {stats['failed']}")
            print(f"{'='*50}")
    else:
        # Convert single file
        success = convert_single_file(args.input, args.output, args.quality)
        sys.exit(0 if success else 1)