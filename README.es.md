# Generador de excusas

Programa de consola en JavaScript. Construye una excusa a partir de cuatro listas y la imprime con Node.js.

La frase cambia en cada ejecución. Este repositorio se comprobó con Node.js 22.23.4. No hay paquetes que instalar.

## Ejecución

Desde la raíz del repositorio:

```bash
node excuse-generator.js
```

`npm start` ejecuta ese mismo comando.

## Salida

Una ejecución real de `node excuse-generator.js` el 2026-11-06:

```text
Excuse
The mailman ate my report last night.

Who: The mailman
Action: ate
What: my report
When: last night
256 possible excuses (4 × 4 × 4 × 4). Run the command again for another one.
```

La siguiente ejecución imprime otra frase. Las etiquetas muestran de qué lista salió cada pieza. `256` es `4 × 4 × 4 × 4`, la cantidad de frases que pueden formarse.

La frase está en inglés, igual que los ejemplos de tiempo del enunciado en inglés (`today`, `yesterday`, `this morning`). Esos tres ejemplos están en el array `when`.

Este comando imprime siempre el mismo diseño, porque cada sorteo devuelve `0` (la primera frase de cada lista):

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

## Qué hace el script

`excuse-generator.js` guarda cuatro arrays:

| Array | Papel | Valores |
| --- | --- | --- |
| `who` | sujeto | My dog, My grandma, The mailman, A raccoon |
| `action` | verbo en pasado | ate, broke, hid, spilled |
| `what` | objeto o situación | my homework, my phone, the car keys, my report |
| `when` | tiempo | today, yesterday, this morning, last night |

Cada ejecución toma un valor de cada array con `Math.floor` y `Math.random()`, los une con espacios, guarda la frase en `excuse` y la imprime con `console.log(excuse)`.

Si un sorteo cae fuera de `[0, 1)`, el programa escribe `Could not generate an excuse: …` en stderr y termina con código 1. Las listas incluidas en el archivo pasan esa comprobación.

## Tests

Node.js 20 o posterior:

```bash
node --test
```

`npm test` ejecuta ese mismo comando. La suite comprueba la forma de la frase, los bordes `0` y `0.999`, el cero negativo, las listas vacías o las frases en blanco, y un generador con semilla (`mulberry32`) que repite las mismas frases y, con la semilla `20261106`, alcanza cada opción.

Comprobación de sintaxis:

```bash
node --check excuse-generator.js
```

## Archivos

| Archivo | Función |
| --- | --- |
| `excuse-generator.js` | Programa. Se ejecuta con Node.js. |
| `test/excuse.test.js` | Lógica, bordes y aleatoriedad con semilla. |
| `PROMPTS.md` | Ocho prompts para GitHub Copilot. No se ejecutaron allí. Copilot no generó el script. |
| `PROVENANCE.json` | Commit upstream y hashes. |
| `package.json` | `npm start` y `npm test`. Sin dependencias. |
| `.github/workflows/test.yml` | Ejecuta la comprobación, los tests y el programa en Node.js 22. |

## Prompts

El ejercicio pide ocho prompts separados para GitHub Copilot. La lista está en [PROMPTS.md](PROMPTS.md). Esos prompts no se ejecutaron en Copilot. Copilot no generó `excuse-generator.js`. El paso pendiente es ejecutarlos en Copilot y pegar cada respuesta o captura en ese archivo.

## Procedencia

Lección de origen: [4GeeksAcademy/excuses-generator-with-prompts](https://github.com/4GeeksAcademy/excuses-generator-with-prompts) en el commit [`d55b7cca8b1ca8c6d05eb6274ece0db27f2d6b0f`](https://github.com/4GeeksAcademy/excuses-generator-with-prompts/tree/d55b7cca8b1ca8c6d05eb6274ece0db27f2d6b0f).

SHA-256 de los archivos upstream usados como enunciado:

| Archivo | SHA-256 |
| --- | --- |
| `README.md` | `b9c39ffd2fa2304eb762943c0bdfe122224e28c4481933c9625894b69c9a01f2` |
| `README.es.md` | `b9ad9cf78f76d341e15417dd8be977143ef178f9d6db9b52875d91bf8996b500` |
| `learn.json` | `4d5ecd5328a4e271d3ad02d6e32d477631224003a8796ab8a4d87727e90e444f` |

Ese commit no incluye un archivo `LICENSE`, y el campo de licencia del repositorio en GitHub es null. Este repositorio no añade una licencia.

El texto de la lección señala `https://github.com/4GeeksAcademy/html-hello` como plantilla de la plataforma. Los ocho pasos piden `excuse-generator.js` y `console.log`. Este repositorio es ese programa de consola.

## English

The English version is in [README.md](README.md). The command is the same:

```bash
node excuse-generator.js
```
