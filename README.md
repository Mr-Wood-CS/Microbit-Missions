# Microbit Missions

React + TypeScript + Vite site using the same page structure and styling as Turtle Lab: Home, Lessons, individual concept pages with a page selector and Previous/Next controls, and Practical references.

## Run locally

```sh
npm install
npm run dev
```

On Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

```sh
npm run build
npm run preview
```

## Content

The original Markdown in `docs/` remains the editable source. Regenerate `src/data/content.json` after changes:

```sh
python -m pip install -r requirements.txt
python scripts/build_content.py
```

The existing virtual environment can also run the generator with `.venv\Scripts\python.exe scripts\build_content.py`.

`src/components/` contains the shared pagination component and styles. `src/App.tsx` contains the home page, lesson list, lesson reader and practical reference views. Diagrams live in `public/_assets/`. When changing diagrams in `docs/_assets/`, copy the updated assets there too.

The ten teaching lessons preserve all supplied concepts, examples, workbook links and practical references. Examples marked as pseudocode describe MakeCode Blocks; they are not executable code. Practical reference numbers are independent of teaching lesson numbers.

The GitHub Pages workflow builds `dist/` on pushes to main/master. Enable GitHub Actions as the repository's Pages source. Hash routes support direct links and browser back/forward without server routing rules. The old MkDocs configuration and generated `site/` are retained as legacy files and are no longer the deployment target.
