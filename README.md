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
