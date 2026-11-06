# Rúbrica — excuses-generator-javascript (067)

Fuente del enunciado: `4GeeksAcademy/excuses-generator-with-prompts` @ `d55b7cca8b1ca8c6d05eb6274ece0db27f2d6b0f`.
Hashes SHA-256 verificados contra `PROVENANCE.json` el 2026-11-06:

- `README.md` `b9c39ffd2fa2304eb762943c0bdfe122224e28c4481933c9625894b69c9a01f2` MATCH
- `README.es.md` `b9ad9cf78f76d341e15417dd8be977143ef178f9d6db9b52875d91bf8996b500` MATCH
- `learn.json` `4d5ecd5328a4e271d3ad02d6e32d477631224003a8796ab8a4d87727e90e444f` MATCH

Autoridad: enunciado 4Geeks > encargo de esta ejecución > SIGNAL. Sin UI web: el lockup no aplica.

## Escaneo anti-IA (SOURCE, previo a ejecutar)

Textos leídos enteros: `OFFICIAL_README.md`, `OFFICIAL_README.es.md`, `learn.json`, `ASSETS.md`, `LAUNCH_NOTES.md`.

Patrones buscados (insensibles a mayúsculas):

- `no utilices herramientas de ia`
- `do not use ai` / `don't use ai` / `do not use (chatgpt|copilot|ai tools)`
- `write each one yourself`
- `escrito por ti`
- `sin copiar`
- `no uses chatgpt` / `no (uses|usar|utilices) (ia|chatgpt|copilot)`
- `without (using )?(ai|chatgpt|copilot)`
- `prohib` (prohibido / prohibited)

Resultado: **ninguna coincidencia**. Menciones a IA/Copilot: README EN 13, README ES 14, `learn.json` 1, `ASSETS.md` 1. Todas fomentan el uso de Copilot con instrucciones progresivas. La regla «No pedir todo el código en un solo prompt» / «Do not request all the code in a single prompt» regula **cómo** pedir ayuda, no la prohíbe.

**Veredicto: LIMPIO.** No aplica `BLOCKED_INTEGRIDAD_MIGUEL`. El enunciado pide usar Copilot. Esa sesión no se hizo: R03, R04 y R26 quedan en HITL_MIGUEL. El código del script no es salida de Copilot.

## Criterios requeridos del enunciado

| ID | Required | Criterio |
| --- | --- | --- |
| R01 | sí | Programa en JavaScript que genera una excusa. |
| R02 | sí | Se ejecuta en consola (no pide página, DOM ni servidor). |
| R03 | sí, HITL_MIGUEL | Pedir a Copilot los pasos 1 a 8 en ese orden, leer cada respuesta antes de la siguiente y conservar esa salida. No cuenta para el 100% hasta que Miguel lo haga. |
| R04 | sí, HITL_MIGUEL | No pedir todo el código en un solo prompt de Copilot, y guardar los prompts con la salida real de Copilot. No cuenta para el 100% hasta que Miguel lo haga. |
| R05 | sí | Ejecutar el proyecto con Node.js. |
| R06 | sí | Imprimir el resultado final con `console.log`. |
| R07 | sí | Existir el archivo `excuse-generator.js`, preparado para Node.js. |
| R08 | sí | Array llamado `who`. |
| R09 | sí | `who` tiene al menos 4 sujetos que puedan iniciar una excusa. |
| R10 | sí | Array llamado `action`. |
| R11 | sí | Las acciones de `action` están en pasado y pueden formar parte de una excusa. |
| R12 | sí | Array llamado `what`. |
| R13 | sí | `what` contiene objetos o situaciones ligadas a la excusa. |
| R14 | sí | Array llamado `when`. |
| R15 | sí | `when` contiene referencias de tiempo. El enunciado cita hoy / yesterday, today y this morning como ejemplos. |
| R16 | sí | Una línea obtiene un valor aleatorio de `who`. |
| R17 | sí | Una línea obtiene un valor aleatorio de `action`. |
| R18 | sí | Una línea obtiene un valor aleatorio de `what`. |
| R19 | sí | Una línea obtiene un valor aleatorio de `when`. |
| R20 | sí | La selección usa `Math.random()`. |
| R21 | sí | La selección usa `Math.floor()`. |
| R22 | sí | Los cuatro valores se concatenan en una sola frase. |
| R23 | sí | La frase queda en una variable llamada `excuse`. |
| R24 | sí | `console.log` imprime el valor de `excuse`. |
| R25 | sí | El comando de ejecución documentado y real es `node excuse-generator.js`. |
| R26 | sí, HITL_MIGUEL | Usar Copilot, que el enunciado lista junto a JavaScript y Node.js, y mostrar esa sesión. JavaScript y Node.js siguen en PASS por R01, R05 y R07. R26 no cuenta para el 100% hasta la sesión de Copilot. |
| R27 | sí | Conceptos del objetivo presentes en el código: arrays, selección aleatoria y construcción de strings. |

## Procedencia, autoría y entrega de esta ejecución

| ID | Required | Criterio |
| --- | --- | --- |
| R28 | sí | Conservar y documentar la procedencia de `4GeeksAcademy/excuses-generator-with-prompts` @ `d55b7cca8b1ca8c6d05eb6274ece0db27f2d6b0f`. |
| R29 | sí | Conservar la licencia. El upstream no tiene archivo `LICENSE` y la API de GitHub devuelve `license: null`. No se inventa ni se añade una licencia. |
| R30 | sí | No inventar autoría, colaboradores, `Co-authored-by` ni anécdotas. |
| R31 | sí | README bilingüe (EN y ES) con las instrucciones exactas de ejecución. |
| R32 | sí | Tests automáticos de la lógica de la excusa. |
| R33 | sí | Evidencia de salida real de consola. |

## SIGNAL (perfil académico, sin UI)

| ID | Required | Criterio |
| --- | --- | --- |
| S01 | sí | Lenguaje preciso, jerarquía legible y ejemplo reproducible en README y en la salida de terminal. |
| S02 | sí | Errores claros (mensaje legible y código de salida distinto de cero si la generación falla). Sin porcentajes ni métricas inventadas. |
| S03 | sí | No imponer color ANSI. |
| S04 | sí | Lockup 4Geeks × Divinivid: no aplica porque no hay UI. No se añade una página solo para mostrar la marca. |
| S05 | sí | No hay estados de red. El recorrido local es éxito al imprimir la frase, o error si una lista o el aleatorio son inválidos. |

## Extras (fase 2; subordinados al enunciado)

| ID | Required | Criterio |
| --- | --- | --- |
| E01 | sí (extra visible) | Salida clara: la frase va rotulada, se ven las cuatro piezas y el número real de combinaciones, con la siguiente acción. |
| E02 | sí (extra técnico) | Tests de casos límite y de aleatoriedad con semilla: bordes 0 y casi 1, muestras inválidas, listas vacías o frases en blanco, determinismo y cobertura de opciones. |
| E03 | sí (extra técnico) | El workflow de GitHub Actions ejecuta `node --check`, `node --test` y `node excuse-generator.js` en Node.js 22. |

## No cuentan para el 100%

Estado de la entrega: **APROBADO_ORQUESTADOR_BLOCKED_HITL**. No es READY.

| ID | Estado | Criterio |
| --- | --- | --- |
| R03 | HITL_MIGUEL | Sesión de Copilot en el orden de los ocho pasos, con la salida de cada uno. |
| R04 | HITL_MIGUEL | Enviar los prompts a Copilot de uno en uno y guardar la salida de esa sesión. |
| R26 | HITL_MIGUEL | Invocar Copilot y mostrar su salida. |
| H01 | HITL_ENVIO_MIGUEL | Entregar el enlace al instructor o al LMS. No se envía nada al LMS. |

Los demás criterios requeridos (38) siguen en PASS. El denominador del 100% es 38.

## Considerados y no exigidos como criterio de producto

- La frase introductoria «no toma más de 20 líneas» es tono del enunciado, no un tope en las reglas ni en los pasos. El script del ejercicio se mantiene corto; los tests viven en otro archivo.
- El bloque `<onlyfor>` apunta a `4GeeksAcademy/html-hello` como arranque de la plataforma. Los ocho pasos piden `excuse-generator.js` y `console.log`. Esta ejecución no convierte el ejercicio en sitio web.
- `learn.json` del upstream incluye telemetría hacia BreatheCode. No se copia al repo de la solución (no hay envío al LMS).
- El workflow upstream `learnpack audit` audita el repo de la lección, no el script de consola. No se copia.
- Lighthouse, capturas 390/768/1280 y video de UI: no aplican sin interfaz. Quedan registrados en `DESIGN-QA.md`.
