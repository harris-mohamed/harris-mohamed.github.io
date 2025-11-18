#!/usr/bin/env python3
"""
Generate responsive versions of images for srcset implementation.
Creates multiple sizes of each image: 400w, 800w, 1200w
"""

import os
from PIL import Image
from pathlib import Path

# Images to process (focusing on larger images that would benefit most)
LARGE_IMAGES = [
    'raytracing.png',      # 1.4M
    'test0.jpg',           # 1.8M
    'trees_4k.png',        # 1.1M
    'apollo-board.png',    # 839K
    'sentinel-viz.png',    # 771K
    'airsim.png',          # 744K
    'cuda.png',            # 672K
    'steve-map.png',       # 574K
    'AMOS-conference.png', # 535K
]

# Target widths for responsive images
WIDTHS = [400, 800, 1200]

def generate_responsive_versions(image_dir='images'):
    """Generate responsive versions of images."""
    image_path = Path(image_dir)

    if not image_path.exists():
        print(f"Error: {image_dir} directory not found")
        return

    processed = 0
    for img_name in LARGE_IMAGES:
        img_file = image_path / img_name

        if not img_file.exists():
            print(f"Skipping {img_name} - file not found")
            continue

        try:
            with Image.open(img_file) as img:
                original_width = img.width
                print(f"\nProcessing {img_name} (original: {original_width}px)")

                for width in WIDTHS:
                    # Skip if target width is larger than original
                    if width >= original_width:
                        print(f"  Skipping {width}w (larger than original)")
                        continue

                    # Calculate height maintaining aspect ratio
                    ratio = width / original_width
                    height = int(img.height * ratio)

                    # Create resized image
                    resized = img.resize((width, height), Image.Resampling.LANCZOS)

                    # Generate output filename
                    name_parts = img_name.rsplit('.', 1)
                    output_name = f"{name_parts[0]}-{width}w.{name_parts[1]}"
                    output_path = image_path / output_name

                    # Save with optimization
                    if img_name.endswith('.png'):
                        resized.save(output_path, 'PNG', optimize=True)
                    elif img_name.endswith(('.jpg', '.jpeg')):
                        resized.save(output_path, 'JPEG', quality=85, optimize=True)

                    size_kb = output_path.stat().st_size / 1024
                    print(f"  Created {output_name} ({size_kb:.1f}KB)")

                processed += 1

        except Exception as e:
            print(f"Error processing {img_name}: {e}")

    print(f"\n✓ Processed {processed} images")

if __name__ == '__main__':
    generate_responsive_versions()
