# AGENTS.md

This is a StartOS service-package repository — it builds a `.s9pk` for StartOS.

Develop it inside a StartOS packaging workspace created by `start-cli s9pk init-workspace`,
which provides the packaging guide and agent context one level up. If you're reading this in a
bare clone with no workspace, the full guide is at <https://docs.start9.com/packaging>.

Work this package's `TODO.md` from top to bottom. Keep `README.md` (technical reference for an AI support or administering agent) and `instructions.md` (end-user docs) in sync with your changes.

## This repo

- **`FORGEJO__session__COOKIE_NAME` is not cosmetic.** Forgejo's default cookie name is generic, and browser cookies are scoped by host rather than by port — so another service on the same StartOS host can overwrite it and 500 the login with a stale value. Don't remove it, and don't reuse a name another package might pick.
- **`SSH_PORT` must be read back from the binding, never hardcoded.** StartOS assigns the external port; the clone URLs Forgejo renders come from this value, so a fixed 22 shows users a port that is not listening.
- **The admin task is raised from a oneshot after `primary`, not from init.** It asks Forgejo whether an admin exists, which needs a running instance — that is also why `create-admin` and `reset-admin` are `only-running`. A restored install has an admin already and correctly gets no task.
- **`ROOT_URL` is re-asserted at init when the stored address is no longer published**, so a network change cannot strand every generated link. Keep the check, and keep `.local` as the fallback rather than the preference.
