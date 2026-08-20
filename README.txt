DeutschPath 5.1.3 Unified

Levels: A1, A2, B1, B2.
Open index.html to choose a level.
Progress remains independent per level. Backup and cloud payloads include all four levels together.

SYNC BACKEND 5.1
This build requires the DeutschPath 5.1 Merge/Event Sync Code.gs backend. It merges multi-device progress and uses a reset epoch so stale offline devices cannot resurrect reset data. No OAuth is required.

5.1.3 sync fix:
- Opening or reloading DeutschPath no longer marks unchanged progress as a new local cloud change.
- Startup normalization/saving is cloud-silent, preventing repeated automatic merge/reload loops.
- A clean device only merges when it has genuine unsynced learning changes.
- If the cloud has a newer revision and the local device is clean, the app downloads the merged state instead of re-uploading the same state.
- The first connection on a browser still performs one safe merge so pre-existing local progress is not discarded.
- Cloud request timeout handling is shorter and returns to a clear pending/error state instead of appearing to merge indefinitely.

Existing behavior retained:
- A1, A2, B1 and B2 are separate selectable paths.
- Contribution has 9 total states: empty + 8 colors for 1–8 active daily sections.
- Streak counts a day when at least one real learning section has activity.
- Unified JSON Backup/Restore covers all four levels.
- Apps Script Web app URL and Sync key are preserved by Repair and reload.

Build: Web Deploy / PWA — safe automatic merge enabled.
