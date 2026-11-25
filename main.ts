// Describe Your Ex in One Word — entry for @berkahmuse-2
// make.fun competition u-puan-describe-your-ex-in-one-word-9fc6ebe7
// Anchor (quoted before first write): makefun anchor 69906bc3067ce945ebb9954622a814a598ec5067 round 34263869
//
// The program writes one word describing an ex to /output/entry.txt.
// Deterministic by design: a fixed string, no clock, no randomness,
// no network — every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "Uninstalled";
const LIMIT = 111;
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function gate(word: string): void {
  const problems: string[] = [];
  if (word.length === 0) problems.push("empty");
  if (word.length > LIMIT) problems.push(`too long: ${word.length} > ${LIMIT}`);
  if (!/^[A-Za-z]+$/.test(word)) {
    problems.push("not a single word of letters");
  }
  if (problems.length > 0) {
    throw new Error(`entry rejected: ${problems.join("; ")}`);
  }
}

gate(WORD);

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, WORD, "utf8");
console.log(`wrote "${WORD}" (${WORD.length} characters) to ${OUT_FILE}`);
