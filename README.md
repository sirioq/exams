# Structure

```
index.html                          ← landing page, links to every test + the analysis tool
analysis.html                       ← teacher tool: pick a test, sign in with Google, see results
shared/
  quiz-engine.js                    ← timer, navigator, scoring, submission — same for every test
  quiz-styles.css
  analysis-engine.js                ← parsing, charts, sign-in flow — same for every test
  analysis-styles.css
tests/
  engaa-2018-s1/
    quiz.html                       ← thin shell, loads questions.js + the shared engine
    questions.js                    ← this test's 54 questions, diagrams, answer key, Form config
    questions-meta.js               ← lean copy (no diagrams) that registers this test with analysis.html
  nsaa-2019-s1/
    quiz.html
    questions.js                    ← 90 questions across 5 parts, with optionalParts config (see below)
    questions-meta.js
```

## Tests with optional parts (like NSAA)

NSAA's real format is Part A (compulsory) plus 2 of 4 optional parts (B/C/D/E), not a fixed set of
questions everyone sits — so its `questions.js` declares a few extra fields that ENGAA's doesn't:

```js
compulsoryParts: ["A"],
optionalParts: [
  {code:"B", name:"Physics"},
  {code:"C", name:"Chemistry"},
  {code:"D", name:"Biology"},
  {code:"E", name:"Advanced Mathematics and Advanced Physics"},
],
chooseCount: 2,
```

When this is present, the quiz shows a part-picker before the start screen, and only that student's
compulsory + chosen questions are timed, scored, and submitted — everyone still gets 80 minutes and a
54-question paper, just a different 54 depending on what they picked. A test with no `optionalParts`
(like ENGAA) behaves exactly as before; this is purely additive.

Because different students in the same class may sit different combinations, NSAA's Google Form needs a
different shape from ENGAA's — see the Form setup notes for this test below.

Push the whole `site/` folder (contents, not the folder itself) to the root of your GitHub Pages repo.
Your links become:
- `https://yourusername.github.io/reponame/` → landing page
- `https://yourusername.github.io/reponame/tests/engaa-2018-s1/quiz.html` → the test
- `https://yourusername.github.io/reponame/analysis.html` → the analysis tool

The Google OAuth Client ID lives once in `shared/analysis-engine.js` (`GOOGLE_CLIENT_ID`) and covers every
test — you never need to touch Google Cloud Console again when adding a new test.

---

# Adding a new test

Give me the new test's PDF + answer key the same way as before (crop diagrams, transcribe, cross-check).
Once that's done, here's what gets added — I'll do all of this, this checklist is just so you know what's
happening:

1. **`tests/<new-test-id>/questions.js`** — same shape as `tests/engaa-2018-s1/questions.js`:
   a `window.TEST_CONFIG` object with `id`, `title`, `shortTitle`, `kicker`, `totalSeconds`, `partNames`,
   `diagrams`, `questions`, `resultsForm`.

2. **`tests/<new-test-id>/questions-meta.js`** — the lean version (no diagrams) that calls
   `window.registerTest({ id, label, spreadsheetId, range, questions })`.
   `spreadsheetId`/`range` come from the new Google Form's results Sheet (same setup as before —
   create the Form, wire the entry IDs into `questions.js`'s `resultsForm`, then share the Sheet with
   whichever Google accounts should be able to pull results).

3. **`tests/<new-test-id>/quiz.html`** — three lines, identical pattern to the existing one, just
   pointing at the new folder's `questions.js`.

4. **One line added to `analysis.html`**: another `<script src="tests/<new-test-id>/questions-meta.js">`
   include, so it shows up in the analysis tool's test picker automatically.

5. **One entry added to `index.html`**: copy the commented-out `<div class="test-card">` template and
   fill in the name/question count/link.

Nothing in `shared/` ever needs to change for a new test — that's the whole point of splitting it this way.
If you ever do want to tweak shared behavior (say, add a new results-view feature), it only needs to be
written once and every test picks it up immediately.

---

# Reading math-heavy and diagram-heavy pages

Plain text extraction (`pdftotext`, `pdfplumber`, etc.) is blind to layout. It reconstructs "lines" by
grouping glyphs that share a y-coordinate (baseline) and reading left-to-right within each baseline.
That works fine for prose — which is why most of a question paper transcribes cleanly — but it falls
apart wherever a page has more than one baseline stacked in the same spot:

- **A single stacked fraction** (numerator line, bar, denominator line) usually still extracts
  recognisably, because there's only one of them at that position on the page.
- **A column of several fraction-based answer options** (e.g. 6–8 lettered options, each its own
  fraction) breaks badly: every numerator ends up on one baseline, every denominator on another, read
  independently and concatenated in whatever order the PDF's internal glyph sequence used — which is
  usually *not* visual reading order. The result is unreadable fragments with no reliable way to tell
  which numerator belongs with which denominator or which letter.
- Surds, exponents, and other multi-baseline notation have the same failure mode to a lesser degree.

**Symptom to watch for:** a transcribed question whose options are short, fragmented, and don't read as
sentences or clean expressions — isolated digits/operators/letters with no obvious structure. That's the
signal the text layer scrambled it, not that the original paper is actually written that way.

**Fix — rasterize the page and read it directly, like a person would:**

```bash
# find which physical PDF page a question is on (search the plain-text dump for a nearby fixed phrase)
pdftotext -layout questionpaper.pdf dump.txt
# then locate the page split index for the question, or just grep the printed page number in the footer

# render just that one page as an image
pdftoppm -png -r 200 -f <page> -l <page> questionpaper.pdf /tmp/pageout
```
Then view the resulting PNG directly. This sidesteps the baseline-reordering problem entirely, because
it reads the actual visual layout instead of a reconstructed (and potentially scrambled) text stream.
200 DPI is enough to read text/equations clearly; it does not need to be print quality.

**Do this proactively, not reactively.** Scan the question paper for pages that look math-dense (lots of
short fraction-like options, surds, or a grid of small diagrams used as answer choices) *before*
transcribing them, and rasterize those specific pages up front. Waiting for an answer-key mismatch to
flag a bad transcription only catches questions where the *letter* happens to come out wrong — a
question can have the correct answer letter by chance while every other option on it is fabricated
nonsense, and that only gets caught by rendering and reading the page.

---

# Diagram cropping methodology

Freehand/eyeballed cropping (picking pixel coordinates by guessing from a preview) is how lesson #3
below happens — margins that are too loose (catching stray question text) or too tight (clipping axis
labels). It also makes it easy to miss that a question has *more than one* diagram to capture — see the
new lesson #6.

**Better approach — compute the crop from the PDF's own geometry, then verify by eye:**

1. **Render the full page** at a reasonable zoom (`page.get_pixmap()` in PyMuPDF, or `pdftoppm`) and look
   at it to find the diagram(s) and, for multi-part answer options, each option's letter position.
2. **Get the candidate bounding box programmatically, not by eyeballing pixels:**
   - `page.get_drawings()` (PyMuPDF) returns the actual vector path geometry — exact rectangles for every
     line/curve/shape the PDF draws, including axes and plotted curves. This is precise in a way a
     hand-picked pixel box never is.
   - `page.get_text("dict")` gives exact positions for the option-letter labels (A, B, C, ...), which is
     how you find where each option starts when several small diagrams are laid out in a grid (e.g. a
     3×2 grid of six answer-option graphs).
   - For a grid of options, cluster the drawing paths and text spans into per-option groups by which
     option's region each one's centre falls inside, then take the union of each group's rects as that
     option's bounding box. Add a few points of uniform padding.
3. **Render the computed crop and look at it before trusting it.** This step is not optional. In testing
   this on an actual paper, the first pass at the row boundaries between options was wrong by about
   30pt — not enough to be obviously broken from the numbers, but enough that one option's crop caught
   the neighbouring option's axis labels and was missing its own. The only way that was caught was by
   rendering each candidate crop and visually confirming it was tight to its own figure, labels included,
   nothing bled in from a neighbour. Treat the computed box as a strong first guess, not a finished crop.
4. **Export at a high enough zoom that the embedded image is crisp**, not just large enough to read during
   the check (a 4x zoom matrix, i.e. ~288 DPI, worked well).

This replaces freehand cropping going forward — it's both faster and more accurate, for a single stem
diagram as well as for grids of several small answer-option diagrams on one page.

---

# Lessons learned / things to watch for

These are real bugs found and fixed during earlier builds. Worth checking for on every new test.

**1. `questions.js` and `questions-meta.js` can silently drift apart.**
They hold the same question data (text/options/answers) — `questions.js` for the quiz, `questions-meta.js`
for the analysis tool, minus diagrams. If a question gets corrected in one but not the other, the analysis
tool can end up marking a genuinely correct answer as wrong (this happened with ENGAA Q44 and NSAA Q89).
**Fix**: never hand-edit `questions-meta.js` separately. Always regenerate it fresh from `questions.js`
(strip the `diagram` field; if any option contains an inline `<img>` — e.g. a graph-as-answer-options
question — replace that option's text with a short placeholder like `"(graph — see quiz for image)"`
before writing the meta file, or the file balloons to hundreds of KB). After any content fix, regenerate
the meta file and re-diff it against the quiz's questions to confirm zero mismatches.

**2. Raw `<` or `>` in question text/options can break HTML rendering.**
Since question content is inserted as raw HTML, a pattern like `<x` (a `<` immediately followed by a
letter) gets parsed as an opening tag rather than displayed as "less than" — this can silently swallow
content until the next real `>` on the page. Digits, spaces, or dashes right after `<` are safe; a letter
right after is not. **Fix**: write comparisons in KaTeX as `\lt` / `\gt` instead of literal `<` / `>`.
**Critical gotcha**: when adding `\lt` inside a JS template literal, it must be written as `\\lt` (double
backslash) in the source file — a single backslash in front of an unrecognized escape letter is silently
dropped by JavaScript, turning `\lt` into just `lt`. Always verify by actually evaluating the file and
printing the runtime string, not just eyeballing the source.

**3. Diagram crops should be tight — just the figure, not the surrounding prose.**
A crop that catches a sliver of the question text above or below the diagram creates ugly, confusing
duplicate/truncated text baked permanently into the image (the app already renders that text separately
via the `text`/`after` fields). Crop margins should hug the actual figure — axes, labels, arrows — and
nothing else. Always view the crop before embedding it, not just before-and-after the page it came from.

**4. Both tests' `questions-meta.js` files share the exact same filename.**
Easy to swap between folders when uploading two files at once (this happened once — NSAA's file ended up
in ENGAA's folder, making the picker show NSAA twice and ENGAA not at all). If a test picker ever looks
wrong, check the `id:` field near the bottom of each `questions-meta.js` to confirm it's in the right folder.

**5. Cross-check every answer against the answer key programmatically, not just mentally.**
When transcribing a new test, write each part's questions, then immediately run a small script comparing
every `answer` letter against the official key file before moving to the next part. This catches real
transcription/reasoning slips that "I'm pretty sure I got this right" does not (three were caught this way
during NSAA's build that would otherwise have shipped silently wrong).

Note the limit of this check, though: it only catches a wrong *answer letter*. A question can have every
distractor option fabricated or garbled while the marked-correct option happens to be right — the
cross-check passes and the question still ships broken. This is exactly what happened with several
stacked-fraction questions in the 2020 build (see "Reading math-heavy and diagram-heavy pages" above):
the key cross-check was clean, but the wrong-answer options were guesses dressed up to look plausible
until someone actually read the original page.

**6. A diagram-based question can need more than one image — check before assuming a single stem diagram
covers it.**
Some questions use a diagram as the *question stem* (e.g. "the diagram shows..."), others use diagrams
*as the answer options themselves* (e.g. "which of the following diagrams..." with seven small ion
structures, or six small graphs, as options A–G). A diagrams file can easily capture the former and
silently omit the latter if whoever built it didn't check each math/science question that references
"the diagram" for whether the *options* are also diagrams. If a question's options are things like
"graph", "diagram", or bare letters with no other text, assume they're images until confirmed otherwise,
and locate/crop them specifically (see "Diagram cropping methodology" above) rather than shipping
placeholder option text.

**7. When math options transcribe as unreadable fragments, don't guess and move on — rasterize the page.**
A stacked-fraction answer list that extracts as scrambled digits/operators is not a lost cause requiring
a plausible-looking reconstruction; see "Reading math-heavy and diagram-heavy pages" above. Treat garbled
extraction as a signal to render and read the actual page, not as a prompt to fill in something that
merely looks like a reasonable multiple-choice option.
