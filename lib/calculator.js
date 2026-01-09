export function calculateBonus({ amount, days, hours }) {
  let pct = 0;
  if (amount >= 100 && days >= 25 && hours >= 100) pct = 0.11;
  else if (amount >= 100 && days >= 15 && hours >= 50) pct = 0.07;
  return { bonus_usd: amount * pct, bonus_pct: pct * 100 };
}
