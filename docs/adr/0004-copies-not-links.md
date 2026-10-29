# Templates, Lists and shares are copies; only provenance is remembered

Creating a List from a Template, saving a List as a Template, and accepting a Share link all copy content; none stay in sync. A List keeps a nullable `source_template_id` (set to null if the Template is deleted) purely so the user can see or re-use where it came from. Share links point to an immutable server snapshot; revoking one never touches copies others already made. Live collaboration is deferred and will apply to Trips only.
