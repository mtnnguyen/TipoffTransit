# Scoring methodology

2026-11-27: Extracted the existing 55/45 distance-decay model into a dependency-free module, clamped the haversine intermediate for floating-point safety, and aligned documentation with the actual bounding-box centre and top-ten display. No routing or travel-time claims. Six equivalent formula fixture checks passed in a JS runtime; the actual Node test suite and Vite build were not run.
