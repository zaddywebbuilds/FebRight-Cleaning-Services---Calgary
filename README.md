# FebRight Cleaning Services — Website

Production website for FebRight Cleaning Services, Calgary, Alberta.
Vite + React + TypeScript + Tailwind CSS.

---

## Quick start

```bash
npm install
npm run dev
```

Dev server runs at `http://localhost:5173`.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check and build to `dist/` |
| `npm run preview` | Serve the production build locally |

---

## Configuration

Copy `.env.example` to `.env` and fill in the values.

### Quote form (Formspree)

The quote form is wired to a real provider but needs an endpoint before it can submit directly.

1. Create a free form at [formspree.io](https://formspree.io).
2. Copy the endpoint it gives you (`https://formspree.io/f/xxxxxxxx`).
3. Set it in `.env`:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxxxx
   ```
4. Restart the dev server.

**Until this is set**, the form shows a visible notice and falls back to opening the visitor's own email client with the submitted fields pre-filled. Nothing silently fails, and no submission is ever faked.

### GitHub Pages base path

For a project page served from a subdirectory, set the base path before building:

```
VITE_BASE_PATH=/your-repo-name/
```

Leave it unset for a root-domain deploy. The router reads the same value automatically.

---

## Route map

| Route | Page |
| --- | --- |
| `/` | Home |
| `/services` | Services overview |
| `/services/residential-cleaning` | Residential service detail + quote form |
| `/services/commercial-cleaning` | Commercial service detail + quote form |
| `/about` | About |
| `/results` | Before/after gallery (slider + side-by-side views) |
| `/faq` | FAQ |
| `/contact` | Contact & quote form |
| `/privacy` | Privacy policy template |
| `*` | 404 |

---

## Image handling

**Every image is a foreground `<img>` element.** No CSS `background-image` is used anywhere in this project. Images sit on the surface as visible cards, tiles and frames — never as a texture behind text.

**Every asset is used exactly once.** Placement is centralised in `src/content/imageMap.ts`, which is the single source of truth for which image appears where. If you add or swap an asset, edit that file rather than hard-coding paths in pages.

| Group | Count | Where |
| --- | --- | --- |
| `public/assets/gallery/` | 9 | Home (3), Services (3), About (2), Hero (1) |
| `public/assets/google-maps-photos/` | 7 | Home (3), Services (2), Service detail (2) |
| `public/assets/before-after/` | 12 | Results page only |

The `google-maps-photos` set was downloaded from FebRight's own Google Business listing and shows real cleaned spaces. The `gallery` and `before-after` sets are AI-generated concept photography and are labelled as illustrative wherever they appear.

---

## Content editing

Site copy lives in data modules, not scattered through components:

- `src/content/services.ts` — service definitions, features, descriptions
- `src/content/faqs.ts` — FAQ questions and answers
- `src/content/imageMap.ts` — image placement

Services carry a `confirmed` and `hidden` flag. Deep Cleaning and Move-In/Move-Out are built but **hidden from all public output** until the owner confirms they are offered. To publish one, set `confirmed: true` and remove `hidden: true`.

---

## Accessibility

- Semantic landmarks, skip-to-content link, visible focus rings
- Keyboard-operable mobile nav, FAQ accordion, before/after slider (arrow keys)
- `prefers-reduced-motion` respected globally
- Explicit `width`/`height` on every image to prevent layout shift
- Form has real labels, `aria-required`, `aria-describedby` hints, and an `alert`-role error region

Tested at 375px, 768px, 1280px and 1600px.

---

## PRELAUNCH OWNER-APPROVAL CHECKLIST

Nothing below is verified. **Confirm each item with the business owner before this site goes live.**

### Must confirm — business facts
- [ ] **Phone number** — `+1 403-470-0416` was taken from a public directory listing. Confirm it is current.
- [ ] **Email address** — `hello@febrightcleaningservices.com` is a placeholder. Replace with the real inbox.
- [ ] **Domain** — `febrightcleaningservices.com` is from a public listing. Confirm ownership, then update the canonical URL in `index.html`, `robots.txt` and `sitemap.xml`.
- [ ] **Business name** — listed publicly as both "FebRight Cleaning Services" and "FebRight Home Services". Confirm which to use.
- [ ] **Service area** — site currently says "Calgary and surrounding areas". Some listings mention Chestermere. Confirm the real coverage before naming any specific town or neighbourhood.
- [ ] **Operating hours** — not stated anywhere on the site. Add only once confirmed.
- [ ] **Social links** — footer Instagram and Facebook links point to the platform homepages. Replace with real profile URLs or remove.

### Must confirm — services
- [ ] Residential cleaning is offered as described.
- [ ] Commercial cleaning is offered as described.
- [ ] Eco-friendly products claim is accurate (it appears prominently, including a "100%" badge in the hero).
- [ ] Decide on Deep Cleaning and Move-In/Move-Out — both are built and hidden. Enable only if genuinely offered.

### Must replace — imagery
- [ ] The nine `gallery/` images and all twelve `before-after/` images are **AI-generated concept photography**, not real FebRight jobs. The Results page states this in writing. Replace with real job photography when available, and only then consider removing the disclaimer.
- [ ] Confirm FebRight has the right to use the seven `google-maps-photos/` images on its own website, and that no client space is shown without permission.
- [ ] Add a real logo. The current wordmark is an original SVG placeholder and is not presented as an official logo.
- [ ] Add a real `og-image.jpg` to `public/` — the Open Graph tag currently points at a file that does not exist.

### Must configure before launch
- [ ] Set `VITE_FORMSPREE_ENDPOINT` so the quote form submits for real, then **send a test submission and confirm it arrives**.
- [ ] Review and approve the privacy policy template at `/privacy`.
- [ ] Confirm the LocalBusiness structured data in `index.html` contains only verified claims.

### Deliberately absent — do not add without evidence
No reviews, star ratings, review counts, testimonials, years in business, employee counts, certifications, insurance or bonding claims, guarantees, awards, response times, or price quotes appear anywhere on this site. None of these were verifiable. Add them only with documentation.
