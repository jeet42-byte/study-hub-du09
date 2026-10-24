"""Build data/checker/library.json: the text of every course PDF, for the Checker's
similarity comparison. Re-run after adding PDFs:  python3 tools/build_checker_corpus.py

Reads resources/<course>/slides/*.pdf and resources/<course>/assignment/*.pdf, plus
tools/corpus-extra/<course>--<name>.txt for decks that only exist outside the repo.
Titles come from data/resources.js where the file is listed there.
"""
import json, pathlib, re
from pypdf import PdfReader

ROOT = pathlib.Path(__file__).resolve().parent.parent
titles = dict(re.findall(r"title:\s*'((?:[^'\\]|\\.)*)',\s*\n\s*desc:[^\n]*\n\s*file:\s*'([^']+)'",
                         (ROOT / 'data/resources.js').read_text()))
titles = {f: t.replace("\\'", "'") for t, f in titles.items()}

def clean(text):
    text = text.replace('\x00', ' ').replace('', ' ').replace('', ' ')
    text = re.sub(r'[ \t]+', ' ', text)
    return re.sub(r'\n\s*\n+', '\n', text).strip()

items = []
for pdf in sorted(ROOT.glob('resources/*/*/*.pdf')):
    rel = pdf.relative_to(ROOT).as_posix()
    pages = [p.extract_text() or '' for p in PdfReader(str(pdf)).pages]
    items.append({'course': pdf.parts[-3], 'title': titles.get(rel, pdf.stem), 'file': rel,
                  'text': clean('\n'.join(pages))})
for txt in sorted((ROOT / 'tools/corpus-extra').glob('*.txt')):
    course, name = txt.stem.split('--', 1)
    items.append({'course': course, 'title': name.replace('_', ' '), 'file': '',
                  'text': clean(txt.read_text())})

out = ROOT / 'data/checker/library.json'
out.write_text(json.dumps(items, ensure_ascii=False, separators=(',', ':')))
for it in items:
    print(f"{len(it['text'].split()):>6} words  {it['title']}")
print(f'wrote {out.relative_to(ROOT)} ({out.stat().st_size // 1024} KB)')
