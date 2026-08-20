DeutschPath 5.1.0 Unified

Levels: A1–A2, B1, B2.
Open index.html to choose a level.
Progress remains independent per level. Backup and cloud payloads include all three levels together.
The existing Google Apps Script 4.0 backend can store the unified payload; no OAuth is required.

Build: Web Deploy / PWA — automatic sync behavior enabled.

Migration:
- Existing A1–A2 local progress uses the existing deutschPathStateV29 key.
- Existing B1 and B2 local progress keep their prior storage keys and are picked up automatically on the same browser.
- An existing single-level cloud backup is migrated into the unified structure when downloaded; the next upload writes a unified payload.

5.1.0 changes:
- Contribution is section-based, not percentage-based.
- There are 9 total heatmap states: empty + 8 colors for 1–8 active daily sections.
- Any activity in a daily section activates that section for the day; completing its numeric target is not required.
- Daily streak remains based on having at least one active daily section.

SYNC BACKEND 5.1
This build requires the provided DeutschPath 5.1 Code.gs. It uses merge/event sync across devices and a reset epoch to stop stale offline devices from resurrecting reset data.
