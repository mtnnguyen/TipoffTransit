export function haversineKm(a, b) {
  const R = 6371;

  const dLat = ((b[0] - a[0]) * Math.PI) / 180;
  const dLon = ((b[1] - a[1]) * Math.PI) / 180;

  const lat1 = (a[0] * Math.PI) / 180;
  const lat2 = (b[0] * Math.PI) / 180;

  const x =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) *
      Math.cos(lat2) *
      Math.sin(dLon / 2) ** 2;

  return 2 * R * Math.asin(Math.sqrt(Math.min(1, Math.max(0, x))));
}

export function proximityScore(venueDistance, hubDistance) {
  if (![venueDistance, hubDistance].every(d => Number.isFinite(d) && d >= 0)) throw new RangeError("Distances must be finite and nonnegative");
  const venueComponent = 100 * Math.exp(-venueDistance / 8);
  const transitComponent = 100 * Math.exp(-hubDistance / 3.2);
  return { score: Math.round(venueComponent * 0.55 + transitComponent * 0.45), venueComponent, transitComponent };
}
