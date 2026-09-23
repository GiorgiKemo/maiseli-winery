# Maiseli interface audit — 22 September 2026

The current pass covers the complete one-page site, all three wine collections, eight wine details, three winemaking panels, three gallery images, navigation, and dialogs. Browser evidence is saved in `../qa/polish/`.

## Repairs

- Rebuilt the primary CTA with a 56px target, readable 14px label, consistent padding, and a centered 20px Lucide arrow.
- Standardized secondary links, arrow boxes, gallery expand icons, menu icons, accordion controls, and close buttons. Replaced all remaining text-glyph controls with SVGs. Lucide license included in the static output.
- Moved wine-card arrows to the discovery row, allowing long wine names to use the full card width. Aligned card metadata and actions.
- Corrected mobile tab label/count alignment and introduced the mobile menu at tablet widths to prevent header crowding.
- Increased body and caption readability, improved muted-text contrast (4.82:1 on the wine section), and strengthened the hero overlay. Focus outlines now use the contrasting text color.
- Kept 44px dialog close controls outside the scrolling content and reset dialog scroll position when another wine opens.
- Added outside-click, focus-exit, and breakpoint handling for the menu. Fixed missing spaces at mobile-only line breaks.

## Verified locally

| Area | Evidence and result |
| --- | --- |
| Responsive layout | 320x740, 390x844, 430x932, 768x1024, 844x390, 1024x768, 1440x1000: zero horizontal page overflow, no clipped inspected headings/actions, and no hero CTA/footer overlap. Measurements: `responsive.json`. |
| Action alignment | Hero arrow center matches the button center exactly; secondary arrows differ by only the half-pixel bottom border. Consistent 18–20px arrow size. Primary 56px, links 48px, wine actions 46px, dialog close 44px. |
| Navigation | Hero CTA, story links, section navigation, cellar link, footer return link; mobile menu toggle, Escape, navigation-close, and outside-click verified. |
| Wines | All eight dialogs opened with the matching title and description. All three tabs show the correct collection. Home, End, and ArrowRight keyboard navigation verified. Escape restores focus to the opening wine card. |
| Dialogs | Mobile and desktop layouts inspected. At 320px, long-name dialog content scrolls without horizontal overflow; the close button remains visible. Opening another wine resets scroll to zero. Close buttons, Escape, and desktop backdrop dismissal verified. |
| Winemaking | All three panels opened; matching images and exclusive expansion confirmed. Each collection link selects its corresponding wine tab. |
| Gallery | All three images open with matching captions, close through their button, and support Escape. |
| Visual inspection | Hero, intro, collection, story, vineyard panorama, facts, harvest, winemaking, May quote, cellar gallery and footer reviewed. Mobile, tablet and desktop screenshots captured. |
| Reduced motion | Emulated preference: smooth scroll becomes auto and wine-card animation becomes none. Emulation reset afterwards. |
| Assets and errors | All 23 static files returned local HTTP 200 with byte-for-byte matches. No broken loaded images, missing internal link targets, unnamed controls, or browser console errors/warnings. |
| Source checks | JavaScript syntax checks passed for the site and server. Git whitespace check passed. |

## Evidence highlights

- `02-before-mobile.png` and `06-after-mobile-hero.png`: CTA before/after.
- `07-after-mobile-wines.png`, `18-tablet-wines.png`, `21-desktop-wines.png`: collection layouts.
- `08-after-mobile-dialog.png`, `16-narrow-dialog-scrolled.png`, `26-desktop-dialog.png`: dialogs.
- `09-mobile-story.png` through `15-mobile-menu.png`: mobile sections and controls.
- `20-desktop-hero.png` through `25-desktop-footer.png`: desktop sections.

## Scope and remaining inputs

Tests used the Chromium in-app browser and viewport emulation, not a physical iPhone or Safari. This is a broad visual and interaction audit, not an exhaustive assistive-technology certification. The existing private Sites audience is retained during publication; deployment status is verified separately through Sites.

Contact details, exact location, official logo artwork, and the Heritage Rkatsiteli bottle photograph are still client inputs. Heritage Rkatsiteli continues to use an explicitly labelled real cellar photograph. No purchase, contact form, or booking service is presented as operational.

## Next.js migration — 24 September 2026

- The Next.js 16 App Router production build passes and statically prerenders the homepage.
- TypeScript check passes via `npm run check` (`next typegen` followed by `tsc --noEmit`).
- Browser review at 1440x900, 930x480, and 390x844 confirms the hero CTA and bottom label do not overlap; the 390px page has no horizontal overflow.
- Menu, wine collection selection, wine detail dialog, winemaking accordion, and cellar gallery were exercised in the local browser. No console errors or warnings.
- Next-served route and key static resources returned HTTP 200. The 18 copied image assets plus stylesheet, script, and favicon are byte-for-byte identical to the prior static source.
- Vercel production status will be recorded after the authorized push to `main`.
