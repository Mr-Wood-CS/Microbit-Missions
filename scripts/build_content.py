import json
import re
from pathlib import Path
import markdown

ROOT = Path(__file__).resolve().parent.parent

def render(text, source):
    def link(match):
        target = match[1]
        if target.startswith(('https:', 'http:', '#', 'mailto:')):
            return match[0]
        resolved = (source.parent / target).resolve()
        if target.endswith('.md'):
            relative = resolved.relative_to(ROOT / 'docs')
            slug = relative.stem
            url = '#/lessons' if relative.as_posix() == 'concepts/index.md' else '#/' if slug == 'index' else ('#/lesson/' if relative.parts[0] == 'concepts' else '#/reference/') + slug
        elif '_assets/' in target:
            url = './_assets/' + target.split('_assets/', 1)[1]
        else:
            return match[0]
        return '](' + url + ')'
    text = re.sub(r'\]\(([^)]+)\)', link, text)
    return markdown.markdown(text, extensions=['fenced_code', 'tables', 'admonition', 'attr_list', 'md_in_html'])

def page(source):
    text = source.read_text(encoding='utf-8-sig')
    title, body = text.split('\n', 1)
    parts = re.split(r'^## (.+)\n', body, flags=re.M)
    sections = [{'title': 'Learning intention', 'html': render(parts[0], source)}] if parts[0].strip() else []
    sections += [{'title': parts[i], 'html': render(parts[i+1], source)} for i in range(1, len(parts), 2)]
    return {'slug': source.stem, 'title': re.sub(r'^(Lesson |Project reference )\d+: ', '', title.lstrip('# ')), 'sections': sections, 'html': render(body, source)}

lessons = [page(p) for p in sorted((ROOT/'docs/concepts').glob('[0-9]*.md'))]
references = [page(p) for p in sorted((ROOT/'docs').glob('[0-9]*.md'))]
(ROOT/'src/data/content.json').write_text(json.dumps({'lessons': lessons, 'references': references}, ensure_ascii=False, indent=2), encoding='utf-8')
print(f'Generated {len(lessons)} lessons and {len(references)} practical references.')
