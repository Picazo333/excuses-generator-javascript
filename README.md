# Excuse generator

Console program in JavaScript. It builds one excuse from four lists and prints it with Node.js.

The sentence changes on every run. This repository was checked with Node.js 22.23.4. There are no packages to install.

## Run

From the repository root:

```bash
node excuse-generator.js
```

`npm start` runs that same command.

## Output

One real run of `node excuse-generator.js` on 2026-11-06:

```text
Excuse
The mailman ate my report last night.

Who: The mailman
Action: ate
What: my report
When: last night
256 possible excuses (4 × 4 × 4 × 4). Run the command again for another one.
```

The next run prints another sentence. The labels show which list supplied each piece. `256` is `4 × 4 × 4 × 4`, the number of sentences the four lists can form.

This command always prints the same layout, because every draw returns `0` (the first phrase of each list):

```bash
node -e "const g = require('./excuse-generator.js'); process.exit(g.start(() => 0));"
```

```text
Excuse
My dog ate my homework today.

Who: My dog
Action: ate
What: my homework
When: today
256 possible excuses (4 × 4 × 4 × 4). Run the command again for another one.
```

## What the script does

`excuse-generator.js` keeps four arrays:

| Array | Role | Values |
| --- | --- | --- |
| `who` | subject | My dog, My grandma, The mailman, A raccoon |
| `action` | past-tense verb | ate, broke, hid, spilled |
| `what` | object or situation | my homework, my phone, the car keys, my report |
| `when` | time | today, yesterday, this morning, last night |

Each run draws one value from each array with `Math.floor` and `Math.random()`, joins them with spaces, stores the sentence in `excuse`, and prints it with `console.log(excuse)`.

A draw outside `[0, 1)` prints `Could not generate an excuse: …` on stderr and the process exits with code 1. The lists shipped in the file pass that check.

## Tests

Node.js 20 or newer:

```bash
node --test
```

`npm test` runs that same command. The suite checks the sentence shape, the edges `0` and `0.999`, negative zero, empty or blank phrases, and a seeded generator (`mulberry32`) that replays the same sentences and, with seed `20261106`, reaches every phrase.

Syntax check:

```bash
node --check excuse-generator.js
```

## Files

| File | Purpose |
| --- | --- |
| `excuse-generator.js` | Program. Run it with Node.js. |
| `test/excuse.test.js` | Logic, edges, and seeded randomness. |
| `PROMPTS.md` | Eight prompts for GitHub Copilot. They have not been run there. Copilot did not generate the script. |
| `PROVENANCE.json` | Upstream commit and file hashes. |
| `package.json` | `npm start` and `npm test`. No dependencies. |
| `.github/workflows/test.yml` | Runs the check, the tests, and the program on Node.js 22. |

## Prompts

The exercise asks for eight separate prompts to GitHub Copilot. The list is in [PROMPTS.md](PROMPTS.md). Those prompts have not been run in Copilot. Copilot did not generate `excuse-generator.js`. The open step is to run them in Copilot and paste each reply or screenshot into that file.

## Provenance

Upstream lesson: [4GeeksAcademy/excuses-generator-with-prompts](https://github.com/4GeeksAcademy/excuses-generator-with-prompts) at commit [`d55b7cca8b1ca8c6d05eb6274ece0db27f2d6b0f`](https://github.com/4GeeksAcademy/excuses-generator-with-prompts/tree/d55b7cca8b1ca8c6d05eb6274ece0db27f2d6b0f).

SHA-256 of the upstream files used as the statement:

| File | SHA-256 |
| --- | --- |
| `README.md` | `b9c39ffd2fa2304eb762943c0bdfe122224e28c4481933c9625894b69c9a01f2` |
| `README.es.md` | `b9ad9cf78f76d341e15417dd8be977143ef178f9d6db9b52875d91bf8996b500` |
| `learn.json` | `4d5ecd5328a4e271d3ad02d6e32d477631224003a8796ab8a4d87727e90e444f` |

That commit has no `LICENSE` file, and the GitHub license field for the repository is null. This repository does not add a license.

The lesson text points at `https://github.com/4GeeksAcademy/html-hello` as a platform starter. The eight steps ask for `excuse-generator.js` and `console.log`. This repository is that console program.

The excuse text is English, matching the time examples in the English statement (`today`, `yesterday`, `this morning`).

## Español

La versión en español está en [README.es.md](README.es.md). El comando es el mismo:

```bash
node excuse-generator.js
```
