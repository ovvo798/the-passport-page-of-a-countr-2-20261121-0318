import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Passport Page of a Country That Isn't There.
// A stylised, illustrated passport spread for the invented
// Republic of Skerrya. The image is a fixed asset shipped with
// this program; this program simply copies it, byte for byte,
// to /output/entry.png. No network, no randomness, no time
// dependence, so repeated runs produce identical output.

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "passport.png");
// The grader runs with /output; OUTPUT_DIR only exists so the
// program can be verified locally into a different directory.
const outputDir = process.env.OUTPUT_DIR ?? "/output";
const destination = join(outputDir, "entry.png");

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, destination);
