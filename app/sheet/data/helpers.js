/* Ability-score and proficiency math shared by every class. */
export function mod(score){ return Math.floor((score - 10) / 2); }
export function fmt(n){ return (n >= 0 ? "+" : "") + n; }
export function profBonus(level){ return 2 + Math.floor((level - 1) / 4); }
