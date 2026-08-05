/* Add or remove a player on the allowlist without hand-editing .env.local.

   Hand-editing that file has gone wrong twice now — once by pasting the
   placeholder text verbatim, once by a save that didn't stick — and both
   failures were silent. This does the formatting the app actually expects:
   lowercased, comma-separated, no spaces, no quotes, deduplicated, and with
   the trailing newline that a previous append needed and didn't have.

   Usage:
     node scripts/add-player.mjs someone@gmail.com
     node scripts/add-player.mjs someone@gmail.com --dm
     node scripts/add-player.mjs someone@gmail.com --remove
     node scripts/add-player.mjs --list
*/

import fs from "node:fs";

const FILE = ".env.local";
const args = process.argv.slice(2);
const list = args.includes("--list");
const remove = args.includes("--remove");
const dm = args.includes("--dm");
const email = args.find((a) => !a.startsWith("--"))?.trim().toLowerCase();
const KEY = dm ? "AVARA_DM_EMAILS" : "AVARA_ALLOWED_EMAILS";

if (!fs.existsSync(FILE)) {
  console.error(`No ${FILE} here. Run this from the project root.`);
  process.exit(1);
}

const lines = fs.readFileSync(FILE, "utf8").split(/\r?\n/);

function read(key) {
  const line = lines.find((l) => l.startsWith(key + "="));
  if (!line) return [];
  return line
    .slice(key.length + 1)
    .replace(/^["']|["']$/g, "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

function mask(e) {
  return e.replace(/^(.{2})[^@]*(@.*)$/, (_, a, b) => `${a}***${b}`);
}

if (list) {
  for (const key of ["AVARA_ALLOWED_EMAILS", "AVARA_DM_EMAILS"]) {
    const v = read(key);
    console.log(`${key} (${v.length}):`);
    v.forEach((e, i) => console.log(`  ${i + 1}. ${mask(e)}`));
  }
  process.exit(0);
}

if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
  console.error("Give one valid email address, e.g.:");
  console.error("  node scripts/add-player.mjs someone@gmail.com");
  process.exit(1);
}

const current = read(KEY);
let next;
if (remove) {
  if (!current.includes(email)) {
    console.log(`${mask(email)} isn't on ${KEY}. Nothing to do.`);
    process.exit(0);
  }
  next = current.filter((e) => e !== email);
} else {
  if (current.includes(email)) {
    console.log(`${mask(email)} is already on ${KEY}. Nothing to do.`);
    process.exit(0);
  }
  next = [...current, email];
}

const value = `${KEY}=${next.join(",")}`;
const at = lines.findIndex((l) => l.startsWith(KEY + "="));
if (at >= 0) lines[at] = value;
else lines.push(value);

while (lines.length && lines[lines.length - 1] === "") lines.pop();
lines.push(""); // trailing newline, always

fs.writeFileSync(FILE, lines.join("\n"));

console.log(`${remove ? "Removed" : "Added"} ${mask(email)}`);
console.log(`${KEY} now has ${next.length}:`);
next.forEach((e, i) => console.log(`  ${i + 1}. ${mask(e)}`));
console.log("\nRestart the dev server for this to take effect.");
