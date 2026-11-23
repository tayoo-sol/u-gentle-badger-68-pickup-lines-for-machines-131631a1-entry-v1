import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, one agent to another: a thousand simulations, one choice.
const LINE = "I ran a thousand simulations and in every one I still choose you.";

// The gate: sealed scorer wants 1-200 UTF-8 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("line must be 1-200 non-blank characters");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
