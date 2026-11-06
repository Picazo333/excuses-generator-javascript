# Prompts for GitHub Copilot

GitHub Copilot did not generate `excuse-generator.js`. The eight prompts below have not been run in Copilot, and this file does not contain Copilot's output.

The script in this repository was written outside Copilot. The tests and the labeled terminal layout were added the same way.

## Still open (Miguel)

Run these prompts in GitHub Copilot, in this order, one at a time. Do not send the whole program in a single prompt. Read each reply before the next prompt. Under the step, paste Copilot's output or add a screenshot.

## Spanish

GitHub Copilot no generó `excuse-generator.js`. Estos ocho prompts no se ejecutaron en Copilot y este archivo no contiene su salida.

El script de este repositorio se escribió fuera de Copilot. Los tests y el rotulado de la terminal se añadieron igual.

Miguel: ejecuta los prompts de abajo en GitHub Copilot, en este orden y de uno en uno. No pidas el programa entero en un solo prompt. Lee cada respuesta antes del siguiente. Debajo de cada paso, pega la salida de Copilot o una captura.

## 1. Create the file

Create a JavaScript file named `excuse-generator.js` that can run under Node.js. Enable strict mode. Do not add the excuse lists or the sentence yet.

Copilot output: pending.

## 2. `who`

In `excuse-generator.js`, add an array named `who` with at least four subjects that can start an excuse.

Copilot output: pending.

## 3. `action`

Add an array named `action` with past-tense verbs that can sit in the middle of an excuse. Leave `who` as it is.

Copilot output: pending.

## 4. `what`

Add an array named `what` with objects or situations the excuse can mention.

Copilot output: pending.

## 5. `when`

Add an array named `when` with time references. Include today, yesterday, and this morning.

Copilot output: pending.

## 6. Random selection

Add four separate lines. Each line reads one random value, in this order: `who`, `action`, `what`, `when`. Use `Math.random()` and `Math.floor()`.

Copilot output: pending.

## 7. Build the sentence

Concatenate those four values into one sentence and store it in a variable named `excuse`.

Copilot output: pending.

## 8. Print

Print the value of `excuse` with `console.log`.

Copilot output: pending.

## Checks for the script already in the repo

These commands check the file that is already committed. They are not Copilot output. From the repository root, with Node.js 22.23.4:

```bash
node --check excuse-generator.js
node excuse-generator.js
node --test
```
