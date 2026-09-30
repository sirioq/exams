# Structure1
Decide the field structure
If the new test has a fixed number of sections everyone sits (like ENGAA's Part A + Part B), use fields: Name, Score, Part A, Part B, Time used, Answers. If it has optional/choose-N-of-M sections (like NSAA), use: Name, Score, Parts, Time used, Answers — the 'Parts' field holds a free-text breakdown since different students sit different combinations. Tell me which structure applies when you send me the details.
2
Create the new Google Form
Add one short-answer question per field from Step 1, in any order. Don't mark them as required — the quiz always fills every field itself, but a required field can silently block submission if something's ever slightly off.
3
Link it to your existing spreadsheet
In the Form's Responses tab, click the green Sheets icon → 'Select existing spreadsheet' → choose the same results spreadsheet you already use. Google creates a new tab automatically (e.g. 'Form responses 3'). This step is easy to skip by accident — it's exactly what went wrong with NSAA last time, where the Form worked but nothing reached the sheet until this was done explicitly.
4
Get the entry IDs
In the Form editor, use the three-dot menu → 'Get pre-filled link'. Fill in a placeholder word for every field (e.g. 'name', 'score', 'parts') and click 'Get link'. Copy that generated URL — it contains an entry.XXXXXXX= number for each field. Send me the whole URL and I'll extract them all at once, same as last time.
5
Note the new tab name
Check the tab label at the bottom of your spreadsheet for the tab Google just created. Send me the exact name (capitalisation matters) along with the entry IDs.
6
Confirm the spreadsheet ID
If it's the same spreadsheet as before, just say so — I already have that ID. If it's a different spreadsheet, send its ID from the sheet's URL.
7
Check sharing, if anyone new needs access
Anyone who'll sign in to the analysis tool for this test needs view access to the spreadsheet, same as before. If it's a new person (not already a Google OAuth test user from ENGAA/NSAA), they'll also need adding under Audience → Test users in the same Google Cloud project — no new project or Client ID needed, that part's already done and covers every test.

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

# Getting diagrams into a new test

Don't ask Claude to crop diagrams out of the PDF by eye — it can't judge pixel boundaries reliably and the
crops come out inconsistent. Instead, cropping is a separate manual step done with a standalone browser
tool ("Diagram Cropper"), and the file it produces is what gets handed to Claude alongside the PDF and
answer key.

**Tool**: https://claude.ai/artifact/Bx1LDGLvNQySUfFBzgn2EV — runs entirely in the browser, nothing uploads
anywhere. If it's ever lost, ask Claude to rebuild it: an HTML page using pdf.js that lets you load a PDF,
drag a box around a diagram, and export the crop as base64.

**Workflow per new test**:
1. Set the **Test ID** field to the new test's folder name (e.g. `nsaa-2020-s1`) — this namespaces the
   batch so it doesn't mix with another test's images.
2. Load the PDF, flip to the right page, drag a box tightly around each diagram (see lesson 3 below —
   hug the figure, no surrounding question text).
3. For each crop, choose **Add as**:
   - **Question diagram** — the figure that sits with the question stem. Leave the label blank normally;
     if one question needs more than one image (e.g. a before/after pair), give each one a short label
     like `b`, `c` so they export as distinct keys (`q11`, `q11b`, `q11c`).
   - **Answer option image** — when the options themselves are diagrams/graphs rather than text. Pick the
     option letter (A–G).
4. Repeat for every diagram in the paper, checking each crop's preview before adding it to the batch.
5. When the whole paper is done, click **Download DIAGRAMS block (.js)**. This gives one file,
   `<test-id>-diagrams.js`, containing the `DIAGRAMS` object plus a ready-to-paste `options: [...]` block
   for every question that has image options.

**Handing it to Claude**: give the PDF, the answer key, and this `-diagrams.js` file together when starting
the build. Claude inserts the `DIAGRAMS` object as-is and merges each `options` block into the matching
question — no re-deriving or re-encoding base64 by hand.

---

# Adding a new test

Give me the new test's PDF + answer key + a `<test-id>-diagrams.js` file (see "Getting diagrams into a new
test" above for how to produce that) the same way as before (transcribe, cross-check). Once that's done,
here's what gets added — I'll do all of this, this checklist is just so you know what's happening:

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
Use the Diagram Cropper tool (see "Getting diagrams into a new test" above) rather than hand-cropping or
asking Claude to guess coordinates from the PDF.

**4. Both tests' `questions-meta.js` files share the exact same filename.**
Easy to swap between folders when uploading two files at once (this happened once — NSAA's file ended up
in ENGAA's folder, making the picker show NSAA twice and ENGAA not at all). If a test picker ever looks
wrong, check the `id:` field near the bottom of each `questions-meta.js` to confirm it's in the right folder.

**5. Cross-check every answer against the answer key programmatically, not just mentally.**
When transcribing a new test, write each part's questions, then immediately run a small script comparing
every `answer` letter against the official key file before moving to the next part. This catches real
transcription/reasoning slips that "I'm pretty sure I got this right" does not (three were caught this way
during NSAA's build that would otherwise have shipped silently wrong).

# Google Forms

**1. Decide the field structure**
If the new test has a fixed number of sections everyone sits (like ENGAA's Part A + Part B), use fields: Name, Score, Part A, Part B, Time used, Answers. If it has optional/choose-N-of-M sections (like NSAA), use: Name, Score, Parts, Time used, Answers — the 'Parts' field holds a free-text breakdown since different students sit different combinations. Tell me which structure applies when you send me the details.

**2. Create the new Google Form**
Add one short-answer question per field from Step 1, in any order. Don't mark them as required — the quiz always fills every field itself, but a required field can silently block submission if something's ever slightly off.

**3. Link it to your existing spreadsheet**
In the Form's Responses tab, click the green Sheets icon → 'Select existing spreadsheet' → choose the same results spreadsheet you already use. Google creates a new tab automatically (e.g. 'Form responses 3'). This step is easy to skip by accident — it's exactly what went wrong with NSAA last time, where the Form worked but nothing reached the sheet until this was done explicitly.

**4. Get the entry IDs**
In the Form editor, use the three-dot menu → 'Get pre-filled link'. Fill in a placeholder word for every field (e.g. 'name', 'score', 'parts') and click 'Get link'. Copy that generated URL — it contains an entry.XXXXXXX= number for each field. Send me the whole URL and I'll extract them all at once, same as last time.

**5. Note the new tab name**
Check the tab label at the bottom of your spreadsheet for the tab Google just created. Send me the exact name (capitalisation matters) along with the entry IDs.

**6. Confirm the spreadsheet ID**
If it's the same spreadsheet as before, just say so — I already have that ID. If it's a different spreadsheet, send its ID from the sheet's URL.

**7. Check sharing, if anyone new needs access**
Anyone who'll sign in to the analysis tool for this test needs view access to the spreadsheet, same as before. If it's a new person (not already a Google OAuth test user from ENGAA/NSAA), they'll also need adding under Audience → Test users in the same Google Cloud project — no new project or Client ID needed, that part's already done and covers every test.
