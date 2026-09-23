# Option 2 button implementation

final result: passed

## Selected target

The second displayed ideation image, `exec-8fa73bfe-16e5-4798-9a48-397d9851bc9b.png`: burgundy rectangular CTA with ivory label, slim vertical divider, and a separate arrow area. Scope is the button and supporting action treatment on the existing winery website.

## Visual comparison

Evidence: `../qa/option2/comparison.png` (reference and implementation together), `button-comparison.png` (aligned component crops), `mobile.png`, and `desktop.png`.

Reference: 853x1844 pixels, normalized to 390x843. Browser viewport: 390x844 CSS pixels. Browser screenshot output was 375x812 and normalized to 390x844 for comparison. Desktop screenshot also inspected; it captures the lighter hover state.

- Typography: retained real DM Sans, 15px regular for the CTA; readable label and correct copy. Native Windows antialiasing differs from the generated image.
- Spacing: 244x54px CTA, 3px radius, 20px label inset, 58px arrow area and 40px divider. Close component proportions match the selected image. Arrow midpoint offset measured zero at each tested width.
- Colors: #622c38 burgundy, #f3efe6 ivory, lighter #783b49 hover, darker active state. Matching burgundy secondary links on light sections. Hero secondary text has the selected understated underline.
- Imagery: existing real winery photograph retained. Generated variations in the vineyard, header dimensions and hero height are outside the requested button change.
- Content: exact CTA and supporting link wording preserved. No extra features or content added.

No actionable P0/P1/P2 differences found within the selected component scope. The existing real-photo crop, heading layout and hero height intentionally remain unchanged.

## Functional verification

- 320, 390, 768 and 1440px widths: no page overflow; CTA remains 244x54px; arrow center offset is zero.
- Main CTA navigates to wines. Wine details open and close. Story link navigates correctly.
- Keyboard focus shows a visible outline; Enter activates the CTA.
- No browser warnings/errors during the checks.
- CSS/HTML scope only; existing JavaScript behavior preserved.

## Follow-up polish

None required for this change. Tests used Chromium viewport emulation, not physical iPhone Safari.

## Next.js and Tailwind migration — 24 September 2026

final result: passed

The Next.js App Router statically renders the original page body from `dist/index.html`. The existing stylesheet and interaction script are served from `public`, and Tailwind v4 is included without Preflight so it does not reset the source design. This keeps all site wording and existing behavior intact during the framework migration.

- Production build: `npm run build` passed; `/` prerendered as static content. `npm run check` passed with `next typegen` and TypeScript.
- Visual inspection: Codex in-app browser captures checked at 1440x900, 930x480, and 390x844. The primary CTA and hero footer label have no bounding-box intersection at any tested size. At 390px, document width equals viewport width (no horizontal overflow).
- At 930x480, the desktop CTA sits below the initial fold because the short-height hero retains its minimum height; scrolling to the CTA leaves the footer label well below it rather than on top of it.
- Interactions: responsive menu open/Escape close; semi-sweet collection selection; Kindzmarauli detail dialog open/Escape close with focus restored; winemaking accordion changes its image; cellar gallery opens and closes.
- Local HTTP: `/`, `/app.js`, `/styles.css`, `/assets/vineyard-sunset.webp`, and `/favicon.svg` returned 200. All 18 copied images and the copied script, stylesheet, and favicon match their `dist` sources byte-for-byte.
- Vercel project inspection found legacy `Other`/`dist` settings; the repo config now explicitly selects Next.js and restores its framework-default output directory so those settings cannot keep serving the old static build.
- Browser console: no errors or warnings during the checks.

Screenshots were captured and visually inspected in the in-app browser during this task; the browser tool did not save them as repository files.
