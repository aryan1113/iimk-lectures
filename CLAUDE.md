# Study Notes Site: How Notes Are Made

Multi-subject study-notes site (React + Vite, hash routes, built to `docs/` for GitHub Pages). Subjects: financial-crisis, sdm, ecommerce, imc, behavioural-strategy, consumer-behaviour. See `DEVELOPER.md` for build and layout.

## Goal of every note
The user revises **only by browsing the summaries**, never opening the slides. A summary must cover every major point of its deck: all frameworks/models and their components, definitions, key distinctions, named theories/experiments with findings, case takeaways, and the instructor's lessons. Exact table numbers and example figures do NOT matter unless central to a concept.

## Layout per subject
```
content/<subject>/
├── raw/        # original PDF/PPTX (gitignored; never commit)
├── markdown/   # auto-converted text (gitignored, local only)
├── summary/    # compact summaries, shown as the "Quick revision" tab
├── notes/      # long-form reading notes (same file names as summary/), shown as the default "Reading notes" tab
└── index.json  # titles, labels and sections for the sidebar
```
Only `summary/`, `notes/` and `index.json` are committed. Add the subject to `src/subjects.js` if new. Financial Crisis is the exception: curated in `src/data.js`.

## Workflow (proven on SDM and Consumer Behaviour)
1. Put files in `content/<subject>/raw/`. Identify each file's subject by reading its title slide, not its filename. Delete byte-identical duplicates (md5).
2. Convert: `source markdown_venv/bin/activate && python3 scripts/convert_subject.py <subject>` (needs markitdown[pdf] and python-pptx).
3. Read the raw markdown with noise stripped (`grep -v '^\s*$' | grep -v '^<!--' | cut -c1-300`). Large outputs land in a file; read them in chunks with Read. Write summaries as you go, in batches of 3-6 decks, to keep context small.
4. Write each summary to `summary/NN-Name.md` using the format below.
5. Write `index.json`: one entry per summary `{label, title, file, category}`; group into 3-5 sections that follow the course arc.
6. `npm run build` and view `#/<subject>` in a browser to check the sidebar and rendering.
7. **Send the summaries to one read-only reviewer agent** (general-purpose). Give it the raw/summary pairing, the goal above, and ask for per-file MISSING / WRONG / NOISE findings plus a verdict. Do not tell it your conclusion. Then apply fixes.
8. Do NOT commit until the user asks. Do not start the next subject until the user approves this one.

## Summary format (match `content/financial-crisis/summary/Lec-14-Taper-Tantrum.md`)
```
# <Title>
## Key Concepts      (bold-led bullets: definition, components, distinctions, named theories, case findings)
## Why This Matters  (1-2 sentences)
## Relevance for Exams / Cases   (what a question will likely ask)
```
~350-500 words; longer only when the deck is dense (negotiation, channels). Every deck's major points must be present.

## Rules learned from review
- **Define, don't just name.** A list of tactics/biases/models with no definitions fails revision (e.g. "nibble", "bogey").
- **Don't present your inference or outside knowledge as slide content.** Label it ("outside the slides") or leave it out. If a deck has only a heading (e.g. objection handling, POD selling), say it has no detail.
- Capture the **lesson** of each exercise, case and experiment, not its figures.
- Keep distinctions explicit (X vs Y); include research findings that qualify advice (e.g. closing works in small sales, not large).
- Cut logistics (evaluation weights), link-only lines, and anecdote detail that doesn't carry a principle.
- Slide diagrams/tables convert badly; reconstruct meaning from context and spot-check anything that matters.
- Cost-aware: write the summaries yourself; use at most one reviewer agent per subject.

## Reading notes (`notes/`): the default view
Students said the compact summaries were too concise and dense. Their audience is someone who **attended class and listened passively** and now prepares for the end-sem. So each lecture has a long-form reading note at `notes/<same file name as summary/>` (the app shows it as the default tab; the summary becomes "Quick revision").

Style, ~1,200-1,800 words:
- `# Title`, then a 2-4 sentence intro: what this session is about and why it matters.
- `##` sections in the **order the lecture teaches**. For every concept: plain-language explanation, the intuition or reasoning (the "why"), then an example (from the slides, or labelled extra). Write flowing prose with short paragraphs, not terse bullet lists; use bullets only for true lists (steps, components).
- State distinctions explicitly (X vs Y) and say when to use what.
- Cases, exercises, experiments: say what was done, what happened, and the lesson.
- Callouts as blockquotes: `> **In class:** ...` for the instructor's exercises/cases; `> **Extra context (not on the slides):** ...` for any explanation, analogy or example the slides do not contain. Never present outside knowledge as slide content, and never invent the answer to a question the slides only pose (say the slides leave it open).
- End with `## Putting it together` (how the ideas connect) and `## Likely exam questions` (3-5 questions, each with a 2-4 line outline of a good answer).
- Same fidelity rules as summaries: cover every major point of the deck, no example figures unless central, no logistics.
- Image-only decks (some IMC handouts): render the PDF pages (`pdftoppm -r 60 -png`) into the scratchpad and read them.
