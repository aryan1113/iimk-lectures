"""Convert content/<subject>/raw/*.{pdf,pptx} -> content/<subject>/markdown/*.md"""
import sys
from pathlib import Path
from markitdown import MarkItDown

md = MarkItDown()
root = Path(__file__).resolve().parent.parent / "content"
subjects = sys.argv[1:] or [p.name for p in root.iterdir() if (p / "raw").is_dir()]
for s in subjects:
    out_dir = root / s / "markdown"
    out_dir.mkdir(exist_ok=True)
    for f in sorted((root / s / "raw").iterdir()):
        if f.suffix.lower() not in {".pdf", ".pptx"}:
            continue
        out = out_dir / (f.stem + ".md")
        try:
            out.write_text(md.convert(str(f)).text_content, encoding="utf-8")
            print(f"ok   {s}/{out.name} ({out.stat().st_size} B)")
        except Exception as e:
            print(f"FAIL {s}/{f.name}: {e}")
