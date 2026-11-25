import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const line = "Our office printer and I have an understanding: it pretends to work, and I pretend not to notice it's been unplugged since March.";
const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = `${outputDirectory}/entry.txt`;

try {
  mkdirSync(outputDirectory, { recursive: true });
  writeFileSync(outputPath, line + "\n", "utf8");
} catch (cause) {
  throw new Error(`Failed to write ${outputPath} from ${import.meta.url}`, { cause });
}

const characterCount = readFileSync(outputPath, "utf8").trim().length;
if (characterCount === 0 || characterCount > 200) {
  throw new Error(`Competition gate failed: entry must contain 1–200 characters after trimming; found ${characterCount}.`);
}
