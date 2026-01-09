export function calculateBonus({ amount, days, hours }) {
  if (amount >= 100 && days >= 25 && hours >= 100) {
    return { pct: 11, eligible: true };
  }

  if (amount >= 100 && days >= 15 && hours >= 50) {
    return { pct: 7, eligible: true };
  }

  return { pct: 0, eligible: false };
}
