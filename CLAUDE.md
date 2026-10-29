## Git

Never run git write operations (`commit`, `push`, `add`, `merge`, `rebase`, `tag`, `reset`, `checkout -b`, etc.). The user does all committing and pushing by hand. When you reach a point where you would have committed or pushed, say so and suggest a commit message, but don't run the command. Read-only git commands (`status`, `diff`, `log`, `show`) are fine.

## Agent skills

### Issue tracker

Issues live as local markdown files under `.scratch/<feature>/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Default vocabulary: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `GLOSSARY.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
