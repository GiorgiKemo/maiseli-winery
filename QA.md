# Local verification

Verified on 22 September 2026 at http://localhost:4318.

- JavaScript syntax checks passed for the site and preview server.
- Every site file returned HTTP 200. All static asset references and internal anchor targets resolved; no duplicate IDs.
- Browser checks at 320, 390, 768, and 1280 pixels found no horizontal page overflow. Mobile collection tabs were adjusted and rechecked at 320 pixels.
- Visually inspected the desktop hero, wine collection, wine dialog, family story, winemaking section, and cellar gallery, plus the mobile hero, navigation, wine collection, and wine dialog.
- Confirmed the mobile menu opens and closes after navigation.
- Confirmed all three collection tabs display the expected wines, and the Home key selects the first tab.
- Opened and closed wine dialogs for Saperavi, Kisi, Heritage Rkatsiteli, and Tvishi. Verified Escape dismissal.
- Confirmed winemaking accordion selection updates the image and its links select the corresponding wine collection.
- Confirmed the cellar gallery opens the selected photograph and closes with Escape.
- Final browser checks reported no failed loaded images and no console errors or warnings.
- The deployed asset folder contains 18 WebP photographs. The complete static website is approximately 2.78 MB before transfer compression, with offscreen photographs lazy-loaded.

These checks cover the local preview, not a production deployment or an exhaustive accessibility audit. Publication has not been performed. Contact details, location, official logo artwork, and the Heritage Rkatsiteli bottle photograph were not supplied.
