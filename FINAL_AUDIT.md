# Auditoría final

Estado: **APROBADO_ORQUESTADOR_BLOCKED_HITL**
No es READY.
Commit del programa: `1af02a76df0d7640954d3e84dfd521d9c53528b0`
Rama: `cursor/excuses-generator-javascript-9b88`
Base: `main`
Merge: no realizado.

## Escaneo anti-IA

Repetido en SOURCE y citado en `RUBRIC.md`. Patrones de prohibición: cero coincidencias en README EN, README ES, `learn.json`, `ASSETS.md` y `LAUNCH_NOTES.md`. El enunciado fomenta Copilot y regula el tamaño del prompt («no pedir todo el código en un solo prompt»). Veredicto: **LIMPIO**. No aplica `BLOCKED_INTEGRIDAD_MIGUEL`. GitHub Copilot no generó `excuse-generator.js`.

## Resultado

| Grupo | PASS | FAIL | HITL_MIGUEL | HITL_ENVIO_MIGUEL |
| --- | --- | --- | --- | --- |
| Enunciado R01–R27 | 24 | 0 | 3 (R03, R04, R26) | 0 |
| Procedencia y entrega R28–R33 | 6 | 0 | 0 | 0 |
| SIGNAL S01–S05 | 5 | 0 | 0 | 0 |
| Extras E01–E03 | 3 | 0 | 0 | 0 |
| Envío H01 | 0 | 0 | 0 | 1 |
| **Total que cuenta** | **38/38** | **0** | R03, R04, R26 no restan | H01 no resta |

## Tests

- Local, Node.js v22.23.4: `node --test` → 22 pass, 0 fail.
- GitHub Actions run 42220840238: `success` sobre el mismo SHA. Incluye `node --check`, `node --test` y `node excuse-generator.js`.

## Reparaciones antes del commit

1. `assert.equal` distinguía `-0` de `0`. `drawUnit` ahora devuelve `0` cuando la muestra es cero.
2. Un preload dentro de `test/` lo descubría `node --test`. El test del CLI escribe ese preload en un temporal y lo borra.

Después de eso la suite quedó en verde y ese árbol es el commit auditado.

## Checklist de Miguel (no lo ejecuta este agente)

- [ ] HITL_MIGUEL (R03, R04, R26): en GitHub Copilot, ejecutar de uno en uno los ocho prompts de `PROMPTS.md`. No pedir el programa completo en un solo prompt. Leer cada respuesta antes del siguiente paso. Pegar en ese archivo la salida de Copilot o las capturas de cada paso. El script ya commiteado no es esa salida.
- [ ] Revisar el PR y el diff.
- [ ] H01, HITL_ENVIO_MIGUEL: entregar al instructor o al LMS el enlace del repositorio o del PR, si el curso lo pide.
- [ ] No se hizo merge. El merge, si toca, es una decisión aparte.
- [ ] El upstream no tiene licencia. Este repo tampoco añade una. Si el curso exige elegir una licencia, es una decisión del dueño del repo.

## Límites

- La frase de la excusa está en inglés.
- No hay página, Lighthouse ni capturas de viewport.
- El PNG de evidencia es una transcripción del stdout, no una UI.
- No se envió nada a BreatheCode ni a ningún LMS.
- GitHub Copilot no generó `excuse-generator.js`. Los prompts de `PROMPTS.md` no se ejecutaron en Copilot.
- El commit `1af02a7` lleva un trailer `Co-authored-by` hacia la cuenta dueña del repo (`Picazo333` / Don Picazo). Lo insertó el hook de commit; no estaba en el mensaje escrito para este cambio y no se reescribió el historial. El README no lista colaboradores.
