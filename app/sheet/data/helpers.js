/* Ability-score and proficiency math shared by every class. */
export function mod(score){ return Math.floor((score - 10) / 2); }
export function fmt(n){ return (n >= 0 ? "+" : "") + n; }
export function profBonus(level){ return 2 + Math.floor((level - 1) / 4); }

/* Fixed ("average") hit points, the alternative to rolling: max the die at
   1st level, then the die's fixed value — half plus one — at every level
   after, adding the Constitution modifier each time.

   Features that raise the maximum outright are deliberately not folded in
   here (Vessel's Constitution, Soul-Hardened, Heart of Darkness, Bedrock
   Heart). They depend on subclass and feat choices the sheet doesn't track,
   so the field stays editable and the note beside it says so. */
export function fixedHitPoints(hitDie, level, conMod) {
  if (!hitDie || !level) return 0;
  const perLevel = hitDie / 2 + 1;
  return Math.max(1, hitDie + conMod + (level - 1) * (perLevel + conMod));
}
