# Justificación de la rúbrica — excuses-generator-javascript

Commit del programa: `1af02a76df0d7640954d3e84dfd521d9c53528b0`
Rama: `cursor/excuses-generator-javascript-9b88`
Estado: **APROBADO_ORQUESTADOR_BLOCKED_HITL**. No es READY.
Resultado que cuenta: **38/38 PASS**. FAIL: ninguno. BLOCKED de integridad: ninguno.
Fuera del porcentaje: **R03, R04, R26 (HITL_MIGUEL)** y **H01 (HITL_ENVIO_MIGUEL)**.

Escaneo anti-IA citado en `RUBRIC.md`: LIMPIO (cero coincidencias de prohibición; el enunciado fomenta Copilot). GitHub Copilot no generó `excuse-generator.js`.

| ID | Estado | Cómo se cumplió | Evidencia |
| --- | --- | --- | --- |
| R01 | PASS | El programa construye una frase de excusa a partir de cuatro listas. | `excuse-generator.js` 3-6 y 49-50; salida en `/opt/cursor/artifacts/logs/console.log` |
| R02 | PASS | La ejecución es Node en consola. No hay HTML, DOM ni servidor. | Comando `node excuse-generator.js` en el log; `excuse-generator.js` 82-99 |
| R03 | HITL_MIGUEL | El enunciado pide pedir cada paso a Copilot, en orden, y leer el código antes de seguir. Esa sesión no existe. El orden del código ya commiteado no sustituye la salida de Copilot. Miguel ejecuta los ocho prompts de `PROMPTS.md` en Copilot y pega ahí cada respuesta o captura. | `PROMPTS.md` (cada paso dice «Copilot output: pending») |
| R04 | HITL_MIGUEL | Hace falta la sesión real: un prompt cada vez, y el texto o la captura que devolvió Copilot. `PROMPTS.md` solo prepara los ocho textos. No son salida de Copilot y no demuestran que se pidieran por separado dentro de Copilot. | `PROMPTS.md` |
| R05 | PASS | Se ejecutó con Node.js 22.23.4 en local y con Node.js 22 en GitHub Actions. | Log local; run [42220840238](https://github.com/Picazo333/excuses-generator-javascript/actions/runs/42220840238) |
| R06 | PASS | El resultado se imprime con `console.log`. | `excuse-generator.js` 86-93 |
| R07 | PASS | Existe `excuse-generator.js` y arranca con `"use strict"` bajo Node. | `excuse-generator.js` 1; `node --check` exit 0 en el log |
| R08 | PASS | El array se llama `who`. | `excuse-generator.js` 3 |
| R09 | PASS | `who` tiene 4 sujetos que pueden abrir la frase: My dog, My grandma, The mailman, A raccoon. | `excuse-generator.js` 3; `test/excuse.test.js` 64-70 |
| R10 | PASS | El array se llama `action`. | `excuse-generator.js` 4 |
| R11 | PASS | Los verbos están en pasado: ate (eat), broke (break), hid (hide), spilled (spill). | `excuse-generator.js` 4; `test/excuse.test.js` 14-19 y 72-79 |
| R12 | PASS | El array se llama `what`. | `excuse-generator.js` 5 |
| R13 | PASS | `what` son objetos o situaciones de la excusa: homework, phone, car keys, report. | `excuse-generator.js` 5; `test/excuse.test.js` 81-87 |
| R14 | PASS | El array se llama `when`. | `excuse-generator.js` 6 |
| R15 | PASS | `when` incluye today, yesterday y this morning, más last night. | `excuse-generator.js` 6; `test/excuse.test.js` 83-86 |
| R16 | PASS | Una línea toma un valor aleatorio de `who`. | `excuse-generator.js` 44 |
| R17 | PASS | Una línea toma un valor aleatorio de `action`. | `excuse-generator.js` 45 |
| R18 | PASS | Una línea toma un valor aleatorio de `what`. | `excuse-generator.js` 46 |
| R19 | PASS | Una línea toma un valor aleatorio de `when`. | `excuse-generator.js` 47 |
| R20 | PASS | El parámetro por defecto de `buildExcuse` y de `start` es `Math.random`. El comando `node excuse-generator.js` usa esa función. | `excuse-generator.js` 38 y 82; test de la ruta `Math.random` en `test/excuse.test.js` 242-254; 30 ejecuciones reales del CLI en `test/excuse.test.js` 314 |
| R21 | PASS | Cada índice sale de `Math.floor(muestra * longitud)`. | `excuse-generator.js` 44-47; bordes en `test/excuse.test.js` 157-164 |
| R22 | PASS | Las cuatro piezas se unen con espacios y un punto final en una sola frase. | `excuse-generator.js` 49-50; `test/excuse.test.js` 125-136 |
| R23 | PASS | La frase se guarda en la variable `excuse`. | `excuse-generator.js` 49-50 y 85 |
| R24 | PASS | `console.log(excuse)` imprime esa variable. | `excuse-generator.js` 87 |
| R25 | PASS | El comando documentado y ejecutado es `node excuse-generator.js`. También responde `npm start`. | `README.md` y `README.es.md`, sección de ejecución; log `===== node excuse-generator.js =====` y `===== npm start =====` |
| R26 | HITL_MIGUEL | El criterio incluye invocar Copilot y mostrar su salida. No hubo esa sesión, así que no es PASS. JavaScript y Node.js están cubiertos en R01, R05 y R07. Copilot no generó el script. | `PROMPTS.md`; `README.md` y `README.es.md`, sección Prompts |
| R27 | PASS | Hay arrays, selección aleatoria y concatenación de strings. | `excuse-generator.js` 3-6, 44-50 |
| R28 | PASS | El README y `PROVENANCE.json` citan el repo upstream, el commit `d55b7cca8b1ca8c6d05eb6274ece0db27f2d6b0f` y los tres SHA-256, que coinciden con los archivos del enunciado. | `PROVENANCE.json`; `README.md` sección Provenance; `README.es.md` sección Procedencia |
| R29 | PASS | El commit upstream no trae `LICENSE` y la API de GitHub devuelve `license: null`. No se añadió una licencia. | `PROVENANCE.json` campo `license: null`; ausencia de `LICENSE` en el árbol del commit `1af02a7` |
| R30 | PASS | El README, `PROMPTS.md` y `package.json` no nombran colaboradores ni inventan una persona. El mensaje compuesto para el commit no llevaba trailer. El objeto ya publicado `1af02a7` sí contiene `Co-authored-by: Don Picazo <Picazo333@users.noreply.github.com>`, añadido por el hook local de commit. Esa identidad es la cuenta dueña del repo (`Picazo333`), no un tercero. No se reescribió el commit. | `README.md`; `PROMPTS.md`; `git log -1 --format=%B` del SHA `1af02a76df0d7640954d3e84dfd521d9c53528b0` |
| R31 | PASS | `README.md` está en inglés y enlaza el español. `README.es.md` está en español y repite el comando exacto. | Ambos README, bloque `node excuse-generator.js` |
| R32 | PASS | `node --test` ejecuta 22 tests de la lógica y termina en 0. | `test/excuse.test.js`; log `npm test` con `# pass 22` y `# fail 0`; `/opt/cursor/artifacts/logs/node-test-spec.txt` |
| R33 | PASS | Hay tres ejecuciones reales de `node excuse-generator.js` o `npm start` en el log, con frases distintas y código 0. | `/opt/cursor/artifacts/logs/console.log` (2026-11-06T12:49:49+00:00) |
| S01 | PASS | La salida pone primero la frase, luego las cuatro piezas y al final el recuento real y la siguiente acción. El README repite un ejemplo capturado y un ejemplo reproducible. | `excuse-generator.js` 86-93; README, secciones Output / Salida |
| S02 | PASS | Una muestra fuera de `[0, 1)` escribe `Could not generate an excuse: …` en stderr y el proceso sale con código 1. El `256` es el producto de las longitudes, no una métrica inventada. | `excuse-generator.js` 14-16, 77-80, 95-98, 101-105; `test/excuse.test.js` 276-284 y 298-312 |
| S03 | PASS | No hay códigos de color ANSI en el programa. El test lo comprueba. | `test/excuse.test.js` 122 (`source.includes("\\u001b[")` es falso) |
| S04 | PASS | No hay UI, así que el lockup no se incluye y no se creó una página para mostrarlo. El ZIP de SIGNAL no estaba en el workspace. | Este archivo y `DESIGN-QA.md`; el árbol del commit no tiene HTML ni SVG de marca |
| S05 | PASS | No hay red. El camino feliz imprime la frase. El camino de error es el mensaje de stderr y el código 1. Una lista vacía o una frase en blanco lanza `RangeError` antes de imprimir `undefined`. | `excuse-generator.js` 25-35; `test/excuse.test.js` 185-192 |
| E01 | PASS | Extra visible: título `Excuse`, frase, desglose Who/Action/What/When y la línea `256 possible excuses (4 × 4 × 4 × 4). Run the command again for another one.` | `excuse-generator.js` 61-74 y 86-93; PNG `/opt/cursor/artifacts/console-excuse.png` (transcripción del primer run del log); test `test/excuse.test.js` 265-274 |
| E02 | PASS | Extra técnico: bordes 0, 0.249999, 0.25 y 0.999; cero negativo; muestras 1, NaN e infinitos; listas vacías y frases en blanco; cuatro sorteos por frase; semilla mulberry32 42 y 7 repetibles; semilla 20261106 cubre las cuatro listas en 400 tiradas. | `test/excuse.test.js` 21-29 y 138-240 |
| E03 | PASS | GitHub Actions, job `test`, commit `1af02a76df0d7640954d3e84dfd521d9c53528b0`, conclusion `success`. Pasos verdes: `node --check`, `node --test`, `node excuse-generator.js`. | `.github/workflows/test.yml`; `/opt/cursor/artifacts/logs/github-actions.json`; https://github.com/Picazo333/excuses-generator-javascript/actions/runs/42220840238 |
| H01 | HITL_ENVIO_MIGUEL | Entregar el enlace al instructor o al LMS queda para Miguel. Esta ejecución no envía nada al LMS ni hace merge. | No cuenta para el 38/38. Checklist en `FINAL_AUDIT.md` |
