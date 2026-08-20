DeutschPath 5.1.5 Unified

Levels: A1, A2, B1, B2.
Open index.html to choose a level.
Progress remains independent per level. Backup and cloud payloads include all four levels together.

SYNC BACKEND 5.1
This build requires the existing DeutschPath 5.1 Merge/Event Sync Code.gs backend. No backend change is required when upgrading from 5.1.3 to 5.1.5.

5.1.5 full review and consistency fixes:
- A1 has 24 Guided Lessons and 24 fully authored Course Engine units.
- A2 has 30 Guided Lessons and 30 fully authored Course Engine units.
- B1 has 30 Guided Lessons and 30 fully authored Course Engine units.
- B2 has 47 Guided Lessons and 47 fully authored Course Engine units.
- Course Engine numbering is local to the selected level (1..N), while stable internal IDs remain compatible with saved progress.
- Dashboard Level progress now separates Guided Lessons from Course Engine mastery/evidence progress; the two percentages are no longer presented as one value.
- Course Engine validation no longer expects the legacy 130-unit combined map.
- Old A1/A2 Course Engine state is filtered to the new valid ranges so obsolete outline-unit progress cannot inflate totals.
- All Course Engine units are fully authored; old outline placeholders were removed from the active level maps.
- Course Engine question audit removes duplicate/trivial questions, guarantees meaningful hints, and rebuilds checkpoint question pools.
- Contribution remains exactly 9 visual states: empty + 8 colors for 1–8 active daily sections.
- Contribution heatmap sizing was corrected so the grid does not create a large empty horizontal area.
- Streak counts a day after activity in any one real learning section.
- Recommended focus routes to the relevant skill instead of always opening the same place.
- Settings, unified Backup/Restore, Repair connection preservation, Merge/Event Sync and four independent level states remain intact.
- PWA cache is versioned as 5.1.5, course assets use 5.1.5 cache-busting, and offline asset matching ignores the query string so all four level packs remain available offline.

Build: Web Deploy / PWA — safe automatic merge enabled.
