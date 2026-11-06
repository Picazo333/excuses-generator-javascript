"use strict";

const who = ["My dog", "My grandma", "The mailman", "A raccoon"];
const action = ["ate", "broke", "hid", "spilled"];
const what = ["my homework", "my phone", "the car keys", "my report"];
const when = ["today", "yesterday", "this morning", "last night"];

function drawUnit(random) {
  if (typeof random !== "function") {
    throw new TypeError("random must be a function.");
  }

  const sample = random();
  if (typeof sample !== "number" || !Number.isFinite(sample) || sample < 0 || sample >= 1) {
    throw new RangeError("random() must return a finite number in [0, 1).");
  }

  if (sample === 0) {
    return 0;
  }

  return sample;
}

function requirePhrases(listName, list) {
  if (!Array.isArray(list) || list.length === 0) {
    throw new RangeError(listName + " must be a non-empty array.");
  }

  for (let index = 0; index < list.length; index += 1) {
    const value = list[index];
    if (typeof value !== "string" || value.length === 0 || value !== value.trim()) {
      throw new RangeError(listName + "[" + index + "] must be a non-empty phrase without surrounding spaces.");
    }
  }
}

function buildExcuse(random = Math.random) {
  requirePhrases("who", who);
  requirePhrases("action", action);
  requirePhrases("what", what);
  requirePhrases("when", when);

  const randomWho = who[Math.floor(drawUnit(random) * who.length)];
  const randomAction = action[Math.floor(drawUnit(random) * action.length)];
  const randomWhat = what[Math.floor(drawUnit(random) * what.length)];
  const randomWhen = when[Math.floor(drawUnit(random) * when.length)];

  const excuse =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".";

  return {
    excuse,
    randomWho,
    randomAction,
    randomWhat,
    randomWhen,
  };
}

function possibilityLine() {
  const total = who.length * action.length * what.length * when.length;
  return (
    total +
    " possible excuses (" +
    who.length +
    " × " +
    action.length +
    " × " +
    what.length +
    " × " +
    when.length +
    "). Run the command again for another one."
  );
}

function failureLine(error) {
  const message = error instanceof Error ? error.message : String(error);
  return "Could not generate an excuse: " + message;
}

function start(random = Math.random) {
  try {
    const result = buildExcuse(random);
    const excuse = result.excuse;
    console.log("Excuse");
    console.log(excuse);
    console.log("");
    console.log("Who: " + result.randomWho);
    console.log("Action: " + result.randomAction);
    console.log("What: " + result.randomWhat);
    console.log("When: " + result.randomWhen);
    console.log(possibilityLine());
    return 0;
  } catch (error) {
    console.error(failureLine(error));
    return 1;
  }
}

if (require.main === module) {
  const code = start();
  if (code !== 0) {
    process.exitCode = code;
  }
}

module.exports = {
  who,
  action,
  what,
  when,
  drawUnit,
  requirePhrases,
  buildExcuse,
  possibilityLine,
  failureLine,
  start,
};
