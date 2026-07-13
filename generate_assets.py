import os
import sys

def main():
    try:
        from PIL import Image, ImageOps
    except ImportError:
        print("Pillow is not installed. Installing Pillow...")
        import subprocess
        subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
        from PIL import Image, ImageOps

    logo_path = os.path.join("frontend", "public", "images", "logo.png")
    public_dir = os.path.join("frontend", "public")

    if not os.path.exists(logo_path):
        print(f"Error: logo.png not found at {logo_path}")
        return

    print(f"Found logo.png at {logo_path}. Generating assets...")

    # Load logo
    img = Image.open(logo_path)

    # 1. favicon-16x16.png
    fav16 = img.resize((16, 16), Image.Resampling.LANCZOS)
    fav16.save(os.path.join(public_dir, "favicon-16x16.png"))
    print("Generated favicon-16x16.png")

    # 2. favicon-32x32.png
    fav32 = img.resize((32, 32), Image.Resampling.LANCZOS)
    fav32.save(os.path.join(public_dir, "favicon-32x32.png"))
    print("Generated favicon-32x32.png")

    # 3. apple-touch-icon.png (180x180)
    apple_icon = img.resize((180, 180), Image.Resampling.LANCZOS)
    apple_icon.save(os.path.join(public_dir, "apple-touch-icon.png"))
    print("Generated apple-touch-icon.png")

    # 4. favicon.ico (multi-resolution / contains 16x16 and 32x32)
    img.save(os.path.join(public_dir, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32)])
    print("Generated favicon.ico")

    # 5. og-image.jpg (1200x630)
    # Background color: parchment (#E9DFC9) -> (233, 223, 201)
    bg_color = (233, 223, 201)
    og_img = Image.new("RGB", (1200, 630), bg_color)

    # Resize logo to fit nicely inside 1200x630 (e.g. height of 400px)
    logo_w, logo_h = img.size
    target_h = 350
    target_w = int(logo_w * (target_h / logo_h))
    
    # Ensure it's not too wide
    if target_w > 800:
        target_w = 800
        target_h = int(logo_h * (target_w / logo_w))

    resized_logo = img.resize((target_w, target_h), Image.Resampling.LANCZOS)

    # Paste centered
    x = (1200 - target_w) // 2
    y = (630 - target_h) // 2

    # If logo has alpha channel, use it as mask
    if resized_logo.mode in ('RGBA', 'LA') or (resized_logo.mode == 'P' and 'transparency' in resized_logo.info):
        # Convert to RGBA if not already
        resized_logo = resized_logo.convert('RGBA')
        og_img.paste(resized_logo, (x, y), resized_logo)
    else:
        og_img.paste(resized_logo, (x, y))

    og_img.save(os.path.join(public_dir, "og-image.jpg"), "JPEG", quality=90)
    print("Generated og-image.jpg")

    print("All assets generated successfully!")

if __name__ == "__main__":
    main()
