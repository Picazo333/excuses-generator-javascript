# Prompts used

The exercise asks for eight progressive prompts and says not to request the whole program in one prompt. The file `excuse-generator.js` was composed from the eight instructions below, kept in that order, in one writing pass. It was not produced from a single request of the form "write the finished excuse generator".

GitHub Copilot was not called. A coding agent in Cursor followed this list. The tests, the labeled terminal layout, and these notes were added afterwards, to check and document the result. No collaborator is claimed.

## 1. Create the file

Create a JavaScript file named `excuse-generator.js` that can run under Node.js. Enable strict mode. Do not add the excuse lists or the sentence yet.

## 2. `who`

In `excuse-generator.js`, add an array named `who` with at least four subjects that can start an excuse.

## 3. `action`

Add an array named `action` with past-tense verbs that can sit in the middle of an excuse. Leave `who` as it is.

## 4. `what`

Add an array named `what` with objects or situations the excuse can mention.

## 5. `when`

Add an array named `when` with time references. Include today, yesterday, and this morning.

## 6. Random selection

Add four separate lines. Each line reads one random value, in this order: `who`, `action`, `what`, `when`. Use `Math.random()` and `Math.floor()`.

## 7. Build the sentence

Concatenate those four values into one sentence and store it in a variable named `excuse`.

## 8. Print

Print the value of `excuse` with `console.log`.

## Checks after the eight steps

From the repository root, with Node.js 22.23.4:

```bash
node --check excuse-generator.js
node excuse-generator.js
node --test
```

## Spanish

El enunciado pide ocho prompts en orden y pide no solicitar el programa entero en uno solo. `excuse-generator.js` se redactó a partir de las ocho instrucciones de arriba, en ese orden, en una sola pasada. No salió de un pedido único del tipo «escribe el generador terminado». No se invocó GitHub Copilot. Los tests, el rotulado de la salida y este archivo se añadieron después, para comprobar y documentar el resultado.
