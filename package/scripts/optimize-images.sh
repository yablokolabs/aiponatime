#!/bin/bash
set -e

echo "🚀 Starting image optimization..."

# Install required tools
echo "🔧 Installing required tools..."
sudo apt-get update > /dev/null
sudo apt-get install -y jpegoptim optipng pngquant webp > /dev/null

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
    
    # Get file extension in lowercase
    extension="${img##*.}"
    extension_lower="${extension,,}"
    
    # Get original size
    original_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    
    # Create a backup before modifying
    cp "$img" "${img}.bak"
    
    # Optimize based on file type
    case "$extension_lower" in
      jpg|jpeg)
        echo "    🖼️  Optimizing JPEG: $img"
        jpegoptim --strip-all --all-progressive -m85 "$img"
        ;;
      png)
        # Preserve transparency for logos and icons
        if [[ "$img" == *"logo"* ]] || [[ "$img" == *"icon"* ]]; then
          echo "    🎨 Optimizing PNG (preserving transparency): $img"
          optipng -o2 -quiet -strip all -clobber "$img"
        else
          echo "    🖼️  Optimizing PNG: $img"
          pngquant --quality=80-95 --ext ".tmp" --force "$img" && mv "${img%.*}.tmp" "$img"
          optipng -o2 -quiet -strip all -clobber "$img"
        fi
        ;;
    esac
    
    # Get optimized size
    optimized_size=$(stat -f%z "$img" 2>/dev/null || stat -c%s "$img" 2>/dev/null)
    
    # Calculate savings
    if [ $? -eq 0 ] && [ "$optimized_size" -lt "$original_size" ]; then
      savings=$(( (original_size - optimized_size) * 100 / original_size ))
      echo "    ✅ Optimized: ${original_size} bytes → ${optimized_size} bytes (saved ${savings}%)"
      # Remove backup if optimization was successful
      rm -f "${img}.bak"
    else
      echo "    ⚠️  No optimization possible, keeping original"
      # Restore original if optimization didn't reduce size or failed
      mv -f "${img}.bak" "$img"
    fi
  done
}

# Optimize images in public directory
optimize_images "./public"

echo "✨ Image optimization complete!"
