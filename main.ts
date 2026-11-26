// Office Artifacts: The One-Line Placard Contest —
// u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
// The program writes a single museum placard line for an ordinary office
// object, treated as an ancient artifact: a sticky note, recast as a small
// yellow tablet bearing a plea in a hand lost to the ages, recovered from
// the last biscuit in the tin. Deadpan, specific, and every word earns
// its place — the joke is that a note guarding office biscuits gets the
// same solemn treatment as a clay tablet guarding a tomb.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Small yellow tablet, adhesive-backed, c. 2023. Bears a single plea — 'DO NOT TOUCH' — in a hand now lost to the ages. Recovered from the last biscuit in the tin.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
