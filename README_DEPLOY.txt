DeutschPath 4.0.1 Safe Sync

Upload these files to the existing GitHub Pages repository root and commit the changes.
No Google Apps Script backend change is required if your existing 4.0 backend is working.

Cloud behavior:
- Automatic cloud check on app startup.
- Normal learning saves automatically upload after local saves.
- Download from cloud explicitly replaces this device only after confirmation and preserves a recovery copy.
- Upload this device refuses to overwrite a newer cloud revision.
- JSON Restore remains manual and restores locally only; it never auto-uploads to cloud.
