import os
import chardet

POSTS_DIR = "_posts"

def validate_post(filepath):
    issues = []
    with open(filepath, "rb") as f:
        raw = f.read()

    # Detect encoding
    result = chardet.detect(raw)
    encoding = result["encoding"]
    confidence = result["confidence"]

    if encoding is None or confidence < 0.7:
        issues.append(f"⚠️ Unknown or low-confidence encoding ({encoding}, conf={confidence})")
        encoding = "utf-8"  # fallback

    try:
        text = raw.decode(encoding)
    except Exception as e:
        issues.append(f"❌ Cannot decode with {encoding}: {e}")
        return issues

    lines = text.splitlines()

    # Check YAML front matter
    if not lines or not lines[0].strip() == "---":
        issues.append("❌ Missing opening --- for YAML front matter")
        return issues

    try:
        closing_index = lines.index("---", 1)
    except ValueError:
        issues.append("❌ Missing closing --- for YAML front matter")
        return issues

    # Check if body content exists
    body = "\n".join(lines[closing_index + 1:]).strip()
    if not body:
        issues.append("❌ No body content after YAML front matter")

    return issues


def main():
    if not os.path.isdir(POSTS_DIR):
        print(f"Folder '{POSTS_DIR}' not found.")
        return

    for filename in sorted(os.listdir(POSTS_DIR)):
        if not filename.endswith(".md"):
            continue
        filepath = os.path.join(POSTS_DIR, filename)
        issues = validate_post(filepath)
        if issues:
            print(f"\n{filename}:")
            for issue in issues:
                print(f"  - {issue}")
        else:
            print(f"{filename}: ✅ OK")


if __name__ == "__main__":
    main()
