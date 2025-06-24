#!/bin/bash
set -e

echo "🚀 Starting image optimization..."

# Install required tools
echo "🔧 Installing required tools..."
sudo apt-get update > /dev/null
sudo apt-get install -y webp optipng > /dev/null

# Function to optimize images
optimize_images() {
  echo "🖼️  Optimizing images in $1..."
  
  # Find all JPG, JPEG, and PNG files
  find "$1" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) | while read -r img; do
    echo "  - Processing $img"
    
    # Skip if not an image file
    if ! identify -format "%wx%h" "$img" &>/dev/null; then
      echo "    ℹ️  Skipping non-image file: $img"
      continue
    fi
    
    # Get file extension and name
    extension="${img##*.}"
    filename="${img%.*}"
    
    # Skip if already optimized
    if [[ -f "${filename}.webp" ]]; then
      echo "    ✅ Already optimized: $img"
      continue
    fi
    
    # Optimize based on file type
    case "${extension,,}" in
      jpg|jpeg)
        echo "    🔄 Converting $img to WebP..."
        cwebp -q 85 "$img" -o "${filename}.webp"
        ;;
      png)
        # Preserve transparency for logos and icons
        if [[ "$img" == *"logo"* ]] || [[ "$img" == *"icon"* ]]; then
          echo "    🎨 Optimizing PNG (preserving transparency): $img"
          optipng -o2 -quiet -preserve -dir . "$img"
        else
          echo "    🔄 Converting $img to WebP..."
          cwebp -q 85 "$img" -o "${filename}.webp"
        fi
        ;;
    esac
  done
}

# Optimize images in public directory
optimize_images "./public"

echo "✨ Image optimization complete!"
