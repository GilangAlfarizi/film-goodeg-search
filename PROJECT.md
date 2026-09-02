# Goodeg — Film Mock Website

Static mock of Google for on-set filming, branded **Goodeg**. An art director requested a landing page where a crew member types a search string and is sent to a full-screen image page. Images come from the film crew and must fill the viewport as large as possible without stretching.

## Stack (already set up)

- React 19 + Vite + TypeScript
- Tailwind CSS v4
- React Router (`src/router.tsx`)

## Search mapping

Match is **case-insensitive**. Trim whitespace before comparing.

| User types (any casing) | Result image |
| ----------------------- | ------------ |
| `arah ranu pane`        | image-a      |
| `budi santoso`          | image-b      |

Unknown queries stay on the landing. Do not invent extra mappings until asked.

## Image page rules

- Dedicated route after a matching search (do not stay on the landing).
- Render only the provided still — no chrome, captions, or extra UI unless the art director asks later.
- Image uses the full viewport: max width and max height of the screen.
- Preserve aspect ratio. Never stretch or crop unless the crew later requests a crop.

Assets:

- `public/image-a.jpg` — Arah Ranu Pane (already in repo)
- `public/image-b.jpg` — Budi Santoso (not delivered yet)

## Landing notes (for crew)

- Default is **light mode**. Theme is not persisted — refresh always returns to light.
- Hidden theme toggle: click the extreme **top-left corner** of the page (invisible hit target). Light uses the **maps** lockup; dark uses **Image**.
- Reference stills (`public/landing-goodeg-light.jpg`, `public/landing-goodeg-dark.jpg`) are design guides only and are not shown in the app.

---

## Progress

### 1. Landing (Goodeg)

- [x] Mock Google-style homepage: logo **Goodeg**, search field, submit
- [x] Search submits a string and navigates to another page
- [x] Case-insensitive matching for the two known phrases
- [x] Title / favicon / document title set for filming (`Goodeg`)
- [x] Hidden top-left light/dark toggle; light is default and priority

### 2. Image page + assets

- [x] `image-a.jpg` is in `public/` (1920×1080 Maps still of ARAH Headquarters)
- [x] `/image-a` fills the viewport with `object-contain` — no stretch, no page scroll
- [x] Search `arah ranu pane` (any casing) → `/image-a`
- [ ] Receive `image-b` from the film crew
- [ ] `budi santoso` → image-b (route is ready; asset missing)
- [ ] Recheck image-a on the actual filming monitor; F11 fullscreen on a 16:9 display is edge-to-edge

### 3. Later / out of scope until asked

- Extra search phrases
- Unknown-query behavior (currently stays on landing)
- Pixel-perfect Google clone details beyond the supplied stills
- Hosting / static deploy

---

## Notes for filming

- Site is static; no backend.
- **Image-a (ready now):** type `arah ranu pane` on the landing, or open `/image-a` directly. The still is 16:9; fullscreen (F11) on a 16:9 monitor fills the frame. Other ratios letterbox on white — the image is never stretched or cropped.
- Keep interactions simple: type, submit, cut to the image page.
- Update this file when a phase is done or when the art director changes mappings or stills.
