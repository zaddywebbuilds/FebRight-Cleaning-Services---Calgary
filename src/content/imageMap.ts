/**
 * Single source of truth for image placement.
 * Every asset appears EXACTLY ONCE across the whole site.
 * 28 assets total: 9 gallery + 7 portfolio + 12 before/after.
 */

export const img = {
  // ---- HOME (7) ----
  homeHero:        { src: '/assets/gallery/hero-living-room.webp',      alt: 'Beautifully maintained Calgary living room after FebRight cleaning' },
  homeHeroFloat:   { src: '/assets/google-maps-photos/photo_001.jpg',   alt: 'Clean Calgary home interior from the FebRight portfolio' },
  homeValue1:      { src: '/assets/gallery/detail-kitchen-faucet.webp', alt: 'Gleaming kitchen faucet after an eco-friendly clean' },
  homeValue2:      { src: '/assets/gallery/bathroom-interior.webp',     alt: 'Spotless Calgary bathroom after professional cleaning' },
  homeValue3:      { src: '/assets/gallery/bedroom-clean.webp',         alt: 'Neatly cleaned Calgary bedroom with natural light' },
  homeStrip1:      { src: '/assets/google-maps-photos/photo_002.jpg',   alt: 'Bright cleaned living area from the FebRight portfolio' },
  homeStrip2:      { src: '/assets/google-maps-photos/photo_003.jpg',   alt: 'Cleaned Calgary interior from the FebRight portfolio' },

  // ---- SERVICES (4) ----
  svcResidential:  { src: '/assets/gallery/kitchen-after-clean.webp',   alt: 'Calgary kitchen after a full residential clean' },
  svcCommercial:   { src: '/assets/gallery/office-floor-cleaning.webp', alt: 'Office floor being cleaned in a Calgary commercial space' },
  svcDetail1:      { src: '/assets/gallery/vacuum-living-room.webp',    alt: 'Vacuuming a freshly cleaned living room' },
  svcDetail2:      { src: '/assets/google-maps-photos/photo_004.jpg',   alt: 'Cleaned commercial interior from the FebRight portfolio' },

  // ---- SERVICE DETAIL (2) ----
  detailResidential: { src: '/assets/google-maps-photos/photo_005.jpg', alt: 'Residential space cleaned by FebRight in Calgary' },
  detailCommercial:  { src: '/assets/google-maps-photos/photo_006.jpg', alt: 'Commercial space cleaned by FebRight in Calgary' },

  // ---- ABOUT (3) ----
  aboutPortrait:   { src: '/assets/gallery/cleaning-team.webp',         alt: 'FebRight cleaning professional at work' },
  aboutEco:        { src: '/assets/gallery/kitchen-cleaner.webp',       alt: 'Cleaner using eco-friendly products in a Calgary kitchen' },
  aboutAccent:     { src: '/assets/google-maps-photos/photo_007.jpg',   alt: 'Finished clean space from the FebRight portfolio' },
} as const

/** RESULTS page — 4 pairs + 4 side-by-side comparisons (12 assets) */
export const beforeAfterSets = [
  {
    id: 'living-room',
    label: 'Living Room',
    before:     { src: '/assets/before-after/living-room-before.webp',     alt: 'Living room before cleaning' },
    after:      { src: '/assets/before-after/living-room-after.webp',      alt: 'Living room after professional cleaning' },
    comparison: { src: '/assets/before-after/living-room-comparison.webp', alt: 'Living room before and after, side by side' },
  },
  {
    id: 'kitchen',
    label: 'Kitchen',
    before:     { src: '/assets/before-after/kitchen-before.webp',     alt: 'Kitchen before cleaning' },
    after:      { src: '/assets/before-after/kitchen-after.webp',      alt: 'Kitchen after professional cleaning' },
    comparison: { src: '/assets/before-after/kitchen-comparison.webp', alt: 'Kitchen before and after, side by side' },
  },
  {
    id: 'bathroom',
    label: 'Bathroom',
    before:     { src: '/assets/before-after/bathroom-before.webp',     alt: 'Bathroom before cleaning' },
    after:      { src: '/assets/before-after/bathroom-after.webp',      alt: 'Bathroom after professional cleaning' },
    comparison: { src: '/assets/before-after/bathroom-comparison.webp', alt: 'Bathroom before and after, side by side' },
  },
  {
    id: 'office',
    label: 'Office',
    before:     { src: '/assets/before-after/office-before.webp',     alt: 'Office before cleaning' },
    after:      { src: '/assets/before-after/office-after.webp',      alt: 'Office after professional cleaning' },
    comparison: { src: '/assets/before-after/office-comparison.webp', alt: 'Office before and after, side by side' },
  },
] as const
