import os
import glob
import re

out_dir = r"E:\etc\next-autista\out"
html_files = glob.glob(os.path.join(out_dir, "**", "*.html"), recursive=True)

img_src_regex = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']', re.IGNORECASE)

missing_images = []
checked_images = set()

for hf in html_files:
    rel_h = os.path.relpath(hf, out_dir)
    with open(hf, "r", encoding="utf-8") as f:
        content = f.read()
    
    matches = img_src_regex.findall(content)
    for src in matches:
        if src.startswith("data:") or src.startswith("http"):
            continue
        clean_src = src.split("?")[0].lstrip("/")
        clean_src_norm = clean_src.replace("/", os.sep)
        disk_path = os.path.join(out_dir, clean_src_norm)
        checked_images.add(clean_src)
        if not os.path.exists(disk_path):
            missing_images.append((rel_h, src, disk_path))

print(f"Total HTML files scanned: {len(html_files)}")
print(f"Total unique img src references checked: {len(checked_images)}")
print(f"Total missing image references: {len(missing_images)}")
if missing_images:
    for m in missing_images[:10]:
        print("  Missing:", m)
else:
    print("ALL HTML image src references exist on disk!")
