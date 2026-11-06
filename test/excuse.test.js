"use strict";

const assert = require("node:assert/strict");
const { spawnSync } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const test = require("node:test");

const root = path.join(__dirname, "..");
const generatorPath = path.join(root, "excuse-generator.js");
const generator = require(generatorPath);

const PAST_OF = {
  ate: "eat",
  broke: "break",
  hid: "hide",
  spilled: "spill",
};

function mulberry32(seed) {
  let state = seed >>> 0;
  return function random() {
    state = (state + 0x6d2b79f5) >>> 0;
    let value = Math.imul(state ^ (state >>> 15), state | 1);
    value = (value + Math.imul(value ^ (value >>> 7), state | 61)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function sequence(samples) {
  let index = 0;
  return function random() {
    if (index >= samples.length) {
      throw new Error("random() was called more times than the sequence provides.");
    }
    const sample = samples[index];
    index += 1;
    return sample;
  };
}

function expectedStdout(result) {
  return [
    "Excuse",
    result.excuse,
    "",
    "Who: " + result.randomWho,
    "Action: " + result.randomAction,
    "What: " + result.randomWhat,
    "When: " + result.randomWhen,
    generator.possibilityLine(),
  ].join("\n") + "\n";
}

function runNode(args, options = {}) {
  return spawnSync(process.execPath, args, {
    cwd: root,
    encoding: "utf8",
    ...options,
  });
}

test("who has at least four subjects that can open a sentence", () => {
  assert.ok(generator.who.length >= 4);
  assert.deepEqual(generator.who, ["My dog", "My grandma", "The mailman", "A raccoon"]);
  for (const subject of generator.who) {
    assert.match(subject, /^[A-Z]/);
  }
});

test("action verbs are past tense", () => {
  assert.deepEqual(generator.action, Object.keys(PAST_OF));
  const infinitives = new Set(["eat", "break", "hide", "spill", "go", "do", "make", "take"]);
  for (const verb of generator.action) {
    assert.equal(typeof PAST_OF[verb], "string");
    assert.equal(infinitives.has(verb), false);
  }
});

test("what and when are excuse phrases, including the stated time examples", () => {
  assert.deepEqual(generator.what, ["my homework", "my phone", "the car keys", "my report"]);
  assert.deepEqual(generator.when, ["today", "yesterday", "this morning", "last night"]);
  for (const example of ["today", "yesterday", "this morning"]) {
    assert.ok(generator.when.includes(example));
  }
});

test("every phrase is a trimmed non-empty string and lists have no duplicates", () => {
  for (const list of [generator.who, generator.action, generator.what, generator.when]) {
    assert.deepEqual(list, [...new Set(list)]);
    for (const phrase of list) {
      assert.equal(typeof phrase, "string");
      assert.ok(phrase.length > 0);
      assert.equal(phrase, phrase.trim());
    }
  }
});

test("the source keeps the eight steps in order and logs excuse", () => {
  const source = fs.readFileSync(generatorPath, "utf8");
  const markers = [
    "const who =",
    "const action =",
    "const what =",
    "const when =",
    "random = Math.random",
    "const randomWho = who[Math.floor(",
    "const randomAction = action[Math.floor(",
    "const randomWhat = what[Math.floor(",
    "const randomWhen = when[Math.floor(",
    "const excuse =",
    "console.log(excuse)",
  ];
  let cursor = -1;
  for (const marker of markers) {
    const at = source.indexOf(marker);
    assert.notEqual(at, -1, marker);
    assert.ok(at > cursor, marker);
    cursor = at;
  }
  assert.equal(source.includes("\u001b["), false);
});

test("concatenation joins the four selected phrases into excuse", () => {
  const result = generator.buildExcuse(sequence([0, 0.25, 0.5, 0.75]));
  assert.equal(result.randomWho, "My dog");
  assert.equal(result.randomAction, "broke");
  assert.equal(result.randomWhat, "the car keys");
  assert.equal(result.randomWhen, "last night");
  assert.equal(
    result.excuse,
    result.randomWho + " " + result.randomAction + " " + result.randomWhat + " " + result.randomWhen + "."
  );
  assert.equal(result.excuse, "My dog broke the car keys last night.");
});

test("index 0 and the last index are reachable", () => {
  const first = generator.buildExcuse(sequence([0, 0, 0, 0]));
  assert.deepEqual(
    [first.randomWho, first.randomAction, first.randomWhat, first.randomWhen],
    [generator.who[0], generator.action[0], generator.what[0], generator.when[0]]
  );

  const last = generator.buildExcuse(sequence([0.999, 0.999, 0.999, 0.999]));
  assert.deepEqual(
    [last.randomWho, last.randomAction, last.randomWhat, last.randomWhen],
    [
      generator.who[generator.who.length - 1],
      generator.action[generator.action.length - 1],
      generator.what[generator.what.length - 1],
      generator.when[generator.when.length - 1],
    ]
  );
});

test("bucket edges follow Math.floor(sample * length)", () => {
  assert.equal(Math.floor(0.249999 * 4), 0);
  assert.equal(Math.floor(0.25 * 4), 1);
  const below = generator.buildExcuse(sequence([0.249999, 0, 0, 0]));
  const atQuarter = generator.buildExcuse(sequence([0.25, 0, 0, 0]));
  assert.equal(below.randomWho, generator.who[0]);
  assert.equal(atQuarter.randomWho, generator.who[1]);
});

test("negative zero selects the first phrase in each list", () => {
  const result = generator.buildExcuse(sequence([-0, -0, -0, -0]));
  assert.equal(result.randomWho, generator.who[0]);
  assert.equal(result.randomAction, generator.action[0]);
  assert.equal(result.randomWhat, generator.what[0]);
  assert.equal(result.randomWhen, generator.when[0]);
});

test("drawUnit rejects values outside [0, 1) and non-functions", () => {
  assert.equal(generator.drawUnit(() => 0), 0);
  assert.equal(Object.is(generator.drawUnit(() => -0), 0), true);
  assert.equal(generator.drawUnit(() => 0.999), 0.999);
  for (const sample of [1, 1.0001, -0.0001, Number.NaN, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY]) {
    assert.throws(() => generator.drawUnit(() => sample), RangeError);
  }
  assert.throws(() => generator.drawUnit(0.2), TypeError);
  assert.throws(() => generator.buildExcuse(() => 1), /\[0, 1\)/);
});

test("requirePhrases rejects empty lists, blank phrases, and surrounding spaces", () => {
  assert.throws(() => generator.requirePhrases("who", []), /who must be a non-empty array/);
  assert.throws(() => generator.requirePhrases("when", "today"), /when must be a non-empty array/);
  assert.throws(() => generator.requirePhrases("what", ["my homework", ""]), /what\[1\]/);
  assert.throws(() => generator.requirePhrases("action", [" ate"]), /action\[0\]/);
  assert.throws(() => generator.requirePhrases("who", ["My dog "]), /who\[0\]/);
  assert.doesNotThrow(() => generator.requirePhrases("action", generator.action));
});

test("each excuse draws exactly four samples", () => {
  let calls = 0;
  generator.buildExcuse(() => {
    calls += 1;
    return 0;
  });
  assert.equal(calls, 4);
});

test("a seed replays the same sequence and a later seed can differ", () => {
  const first = generator.buildExcuse(mulberry32(42));
  const second = generator.buildExcuse(mulberry32(42));
  assert.deepEqual(first, second);

  const stream = mulberry32(7);
  const stepA = generator.buildExcuse(stream);
  const stepB = generator.buildExcuse(stream);
  const replay = mulberry32(7);
  assert.deepEqual(generator.buildExcuse(replay), stepA);
  assert.deepEqual(generator.buildExcuse(replay), stepB);

  const other = generator.buildExcuse(mulberry32(99));
  assert.notEqual(first.excuse, other.excuse);
});

test("one fixed seed reaches every phrase in every list", () => {
  const seen = {
    randomWho: new Set(),
    randomAction: new Set(),
    randomWhat: new Set(),
    randomWhen: new Set(),
  };
  const random = mulberry32(20261106);
  for (let turn = 0; turn < 400; turn += 1) {
    const result = generator.buildExcuse(random);
    seen.randomWho.add(result.randomWho);
    seen.randomAction.add(result.randomAction);
    seen.randomWhat.add(result.randomWhat);
    seen.randomWhen.add(result.randomWhen);
    assert.equal(result.excuse.includes("undefined"), false);
    assert.match(result.excuse, /\.$/);
  }
  assert.deepEqual([...seen.randomWho].sort(), [...generator.who].sort());
  assert.deepEqual([...seen.randomAction].sort(), [...generator.action].sort());
  assert.deepEqual([...seen.randomWhat].sort(), [...generator.what].sort());
  assert.deepEqual([...seen.randomWhen].sort(), [...generator.when].sort());
});

test("Math.random path returns a sentence made only from the lists", () => {
  for (let turn = 0; turn < 50; turn += 1) {
    const result = generator.buildExcuse();
    assert.ok(generator.who.includes(result.randomWho));
    assert.ok(generator.action.includes(result.randomAction));
    assert.ok(generator.what.includes(result.randomWhat));
    assert.ok(generator.when.includes(result.randomWhen));
    assert.equal(
      result.excuse,
      result.randomWho + " " + result.randomAction + " " + result.randomWhat + " " + result.randomWhen + "."
    );
  }
});

test("possibility line is the real cartesian count", () => {
  const total = generator.who.length * generator.action.length * generator.what.length * generator.when.length;
  assert.equal(total, 256);
  assert.equal(
    generator.possibilityLine(),
    "256 possible excuses (4 × 4 × 4 × 4). Run the command again for another one."
  );
});

test("start prints the labeled excuse for a fixed sequence", () => {
  const result = generator.buildExcuse(sequence([0, 0, 0, 0]));
  const child = runNode([
    "-e",
    "const g = require('./excuse-generator.js'); process.exit(g.start(() => 0));",
  ]);
  assert.equal(child.status, 0);
  assert.equal(child.stderr, "");
  assert.equal(child.stdout, expectedStdout(result));
});

test("start reports an invalid sample on stderr and returns exit code 1", () => {
  const child = runNode([
    "-e",
    "const g = require('./excuse-generator.js'); process.exit(g.start(() => 1));",
  ]);
  assert.equal(child.status, 1);
  assert.equal(child.stdout, "");
  assert.equal(child.stderr, generator.failureLine(new RangeError("random() must return a finite number in [0, 1).")) + "\n");
});

test("requiring the module does not print", () => {
  const child = runNode(["-e", "require('./excuse-generator.js');"]);
  assert.equal(child.status, 0);
  assert.equal(child.stdout, "");
  assert.equal(child.stderr, "");
});

test("node --check accepts the script", () => {
  const child = runNode(["--check", "excuse-generator.js"]);
  assert.equal(child.status, 0, child.stderr);
});

test("the CLI exits 1 when Math.random leaves [0, 1)", () => {
  const preload = path.join(os.tmpdir(), "excuse-force-invalid-random.js");
  fs.writeFileSync(preload, '"use strict";\nMath.random = function invalidRandom() {\n  return 1;\n};\n');
  try {
    const child = runNode(["--require", preload, "excuse-generator.js"]);
    assert.equal(child.status, 1);
    assert.equal(child.stdout, "");
    assert.equal(
      child.stderr,
      "Could not generate an excuse: random() must return a finite number in [0, 1).\n"
    );
  } finally {
    fs.unlinkSync(preload);
  }
});

test("node excuse-generator.js prints a real excuse", () => {
  const sentences = new Set();
  for (let turn = 0; turn < 30; turn += 1) {
    const child = runNode(["excuse-generator.js"]);
    assert.equal(child.status, 0, child.stderr);
    assert.equal(child.stderr, "");
    const lines = child.stdout.split("\n");
    assert.equal(lines.at(-1), "");
    const body = lines.slice(0, -1);
    assert.equal(body[0], "Excuse");
    assert.equal(body[2], "");
    assert.equal(body[3].startsWith("Who: "), true);
    assert.equal(body[4].startsWith("Action: "), true);
    assert.equal(body[5].startsWith("What: "), true);
    assert.equal(body[6].startsWith("When: "), true);
    assert.equal(body[7], generator.possibilityLine());
    assert.equal(body.length, 8);

    const randomWho = body[3].slice("Who: ".length);
    const randomAction = body[4].slice("Action: ".length);
    const randomWhat = body[5].slice("What: ".length);
    const randomWhen = body[6].slice("When: ".length);
    assert.ok(generator.who.includes(randomWho));
    assert.ok(generator.action.includes(randomAction));
    assert.ok(generator.what.includes(randomWhat));
    assert.ok(generator.when.includes(randomWhen));
    assert.equal(body[1], randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen + ".");
    sentences.add(body[1]);
  }
  assert.ok(sentences.size >= 2);
});
