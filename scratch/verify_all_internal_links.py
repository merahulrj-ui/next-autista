import os
import glob
import re
import html

out_dir = r"E:\etc\next-autista\out"
html_files = glob.glob(os.path.join(out_dir, "**", "*.html"), recursive=True)

href_regex = re.compile(r'href=["\']([^"\']+)["\']', re.IGNORECASE)

broken_links = []
valid_links_count = 0

all_html_basenames = set()
for hf in html_files:
    rel = os.path.relpath(hf, out_dir).replace("\\", "/")
    all_html_basenames.add("/" + rel)
    if rel.endswith("index.html"):
        folder = "/" + os.path.dirname(rel).replace("\\", "/")
        if folder == "/":
            all_html_basenames.add("/")
        else:
            all_html_basenames.add(folder)
            all_html_basenames.add(folder + "/")
    if rel.endswith(".html"):
        without_ext = "/" + rel[:-5]
        all_html_basenames.add(without_ext)

for hf in html_files:
    rel_source = os.path.relpath(hf, out_dir)
    with open(hf, "r", encoding="utf-8") as f:
        content = f.read()
    
    matches = href_regex.findall(content)
    for href in matches:
        if href.startswith("http") or href.startswith("mailto:") or href.startswith("tel:") or href.startswith("#") or href.startswith("javascript:"):
            continue
        
        # Unescape HTML entities like &amp; -> &
        raw_href = html.unescape(href)
        clean_href = raw_href.split("?")[0].split("#")[0]
        if not clean_href:
            continue
        
        # Check against valid routes
        if clean_href in all_html_basenames:
            valid_links_count += 1
            continue
        
        # Check direct disk file
        norm = clean_href.lstrip("/").replace("/", os.sep)
        disk_path = os.path.join(out_dir, norm)
        if os.path.exists(disk_path):
            valid_links_count += 1
            continue
        if os.path.exists(disk_path + ".html"):
            valid_links_count += 1
            continue
        if os.path.exists(os.path.join(disk_path, "index.html")):
            valid_links_count += 1
            continue
        
        broken_links.append((rel_source, href, clean_href))

print(f"Total HTML files checked: {len(html_files)}")
print(f"Total valid internal link instances: {valid_links_count}")
print(f"Total broken internal links: {len(broken_links)}")
if broken_links:
    for b in broken_links[:10]:
        print("  Broken:", b)
else:
    print("ALL internal links resolve with 100% precision! (Zero broken links)")
