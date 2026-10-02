<p align="center">
  <img src="icon.svg" alt="Forgejo Logo" width="21%">
</p>

# Forgejo on StartOS

> Everything not listed in this document should behave the same as upstream
> Forgejo. If a feature, setting, or behavior is not mentioned here, the
> upstream documentation is accurate and fully applicable — see the
> Documentation section of `instructions.md` for links.

[Forgejo](https://codeberg.org/forgejo/forgejo) is a self-hosted git forge. On StartOS the installation wizard is skipped, the secret key and root URL are supplied by the package, and git over SSH is published alongside the web interface.

- **Upstream repo:** <https://codeberg.org/forgejo/forgejo>
- **Wrapper repo:** <https://github.com/Start9Labs/forgejo-startos>

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The upstream image is used unmodified, with its own entrypoint, and one subcontainer runs the whole service.

| Property      | Value                                                            |
| ------------- | ---------------------------------------------------------------- |
| Image         | `codeberg.org/forgejo/forgejo`                                   |
| Architectures | x86_64, aarch64                                                  |
| Entrypoint    | Upstream default                                                 |
| Subcontainer  | `forgejo-sub` — the `primary` daemon, and the one to `attach` to |

One oneshot, `admin-user`, runs after the daemon: it asks Forgejo whether any admin account exists and raises a task if none does.

## Volume and Data Layout

One volume, holding everything.

| Volume | Mount Point | Purpose                                                               |
| ------ | ----------- | --------------------------------------------------------------------- |
| `main` | `/data`     | Repositories, LFS objects, the application database, and `store.json` |

## File Models

One model, holding the values Forgejo's installation wizard would otherwise ask for.

| File         | Format | Modelled                | Written by                           |
| ------------ | ------ | ----------------------- | ------------------------------------ |
| `store.json` | JSON   | Yes — `FileHelper.json` | Install, every init, and the actions |

| Key                                      | Set by                                 | Notes                                                           |
| ---------------------------------------- | -------------------------------------- | --------------------------------------------------------------- |
| `FORGEJO__security__SECRET_KEY`          | Install                                | Generated once; stable for the life of the install              |
| `FORGEJO__server__ROOT_URL`              | Init, then Set Primary URL             | Re-asserted by init if the stored address stops being published |
| `FORGEJO__service__DISABLE_REGISTRATION` | Install, then the Registrations action | Defaults to **true**                                            |
| `smtp`                                   | The Configure SMTP action              | StartOS's system SMTP, your own server, or disabled             |
| `config`                                 | The Configure action                   | Forgejo's own defaults until changed                            |
| `signing`                                | The Commit Signing action              | Off by default                                                  |
| `signingKey`                             | Init, when missing                     | Forgejo's GPG key fingerprint and public key; never replaced    |

`ROOT_URL` is the one value the package re-asserts rather than leaving alone: init compares it against the addresses currently published for the interface and falls back to the `.local` one when the stored address has gone away. An address you chose is kept for as long as it stays reachable.

**No configuration file reaches the application.** Forgejo is configured entirely by environment, composed fresh on each start, and that is where this package's overrides live:

| Variable                                                                                                                                                  | Value                                                  | Why it differs from leaving Forgejo alone                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `FORGEJO__security__INSTALL_LOCK`                                                                                                                         | `true`                                                 | Skips the installation wizard entirely                                                                                                                                                  |
| `FORGEJO__service__DISABLE_REGISTRATION`                                                                                                                  | `true` at install                                      | A personal forge should not accept strangers by default                                                                                                                                 |
| `FORGEJO__session__COOKIE_NAME`                                                                                                                           | a name unique to this package                          | Forgejo's default cookie name is generic, and cookies are host-scoped rather than port-scoped — so a second service on the same LAN host can collide with it and produce a 500 on login |
| `FORGEJO__server__SSH_DOMAIN`, `SSH_PORT`                                                                                                                 | Derived from the published SSH binding                 | The clone URLs Forgejo displays have to name the port StartOS actually assigned                                                                                                         |
| `FORGEJO__server__LFS_START_SERVER`, `FORGEJO__lfs__PATH`                                                                                                 | `true`, a path on the volume                           | Enables the LFS server, which Forgejo's image leaves off, and keeps its objects with the repositories                                                                                   |
| `FORGEJO__repository__*`, `FORGEJO__service__*`, `FORGEJO__server__LANDING_PAGE`, `FORGEJO__actions__ENABLED`, `FORGEJO__migrations__ALLOW_LOCALNETWORKS` | From `config` — see [Configure](#configure)            | Always passed, even at Forgejo's default, because Forgejo writes each into `app.ini` and would otherwise keep a value you later reset                                                   |
| `FORGEJO__mailer__*`                                                                                                                                      | Derived from the SMTP selection                        | Off unless configured                                                                                                                                                                   |
| `FORGEJO__repository_0X2E_signing__*`                                                                                                                     | From `signing` — see [Commit Signing](#commit-signing) | `SIGNING_KEY` is `none` while signing is off, which is also Forgejo's behaviour without a key; always passed for the same `app.ini` reason as `config`                                  |

## Dependencies

None. Forgejo Runner depends on Forgejo, not the other way round.

## Network Access and Interfaces

Two interfaces, both on one host.

| Interface             | Id     | Type | Port | Description                          |
| --------------------- | ------ | ---- | ---- | ------------------------------------ |
| Web UI and git (HTTP) | `http` | ui   | 3000 | The web interface, and git over HTTP |
| git (SSH)             | `ssh`  | api  | 22   | Git over SSH, as the `git` user      |

The SSH interface's external port is assigned by StartOS rather than fixed, which is why the package reads it back and hands it to Forgejo — otherwise the clone URLs shown in the UI would name the wrong port.

## Installation and First-Run Flow

Forgejo's installation wizard never appears: install generates the secret key, locks the installer, and chooses a root URL from the interface's published addresses, preferring the `.local` one.

That leaves one thing outstanding, and the package checks for it rather than assuming. Once the service is running, a oneshot asks Forgejo whether any admin account exists; if none does, it raises a task pointing at Create Admin User. On a restored install the account already exists and no task appears.

Since registrations are disabled at install, creating that first admin through the action is the intended path rather than signing up through the web UI.

## Actions

Six actions, all user-facing.

### Create Admin User

Creates the first administrator. Run it when the install task prompts.

- **What it changes:** adds an admin account in Forgejo's database.
- **Availability:** only while the service is running, because it goes through Forgejo's own CLI against a live instance.
- **Repeat safety:** safe to re-run to add another admin; it does not replace an existing one.

### Reset Admin Password

Generates a new password for an existing admin account. Run it when locked out.

- **What it changes:** that account's password.
- **Availability:** only while running.
- **Repeat safety:** safe to re-run; each run generates a fresh password and invalidates the previous one.

### Set Primary URL

Chooses which published address Forgejo treats as its own — the base for clone URLs, links, and outbound email.

- **What it changes:** `FORGEJO__server__ROOT_URL` in `store.json`, and with it the SSH domain derived from it.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent. Clone URLs already copied into someone's git remote keep pointing at the old address.
- **Input:** a dropdown of the interface's non-local addresses, so an unreachable URL cannot be chosen.

### Registrations

Toggles open sign-ups. The action describes what running it will do rather than presenting a form.

- **What it changes:** `FORGEJO__service__DISABLE_REGISTRATION` in `store.json`.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent in both directions; existing accounts are unaffected.

### Configure

Sets Forgejo options that upstream exposes only in `app.ini`, not in its admin panel. Every field defaults to Forgejo's own default.

| Field                                   | `app.ini` key                                 | Default  |
| --------------------------------------- | --------------------------------------------- | -------- |
| Default Branch                          | `[repository] DEFAULT_BRANCH`                 | `main`   |
| Default Repository Visibility           | `[repository] DEFAULT_PRIVATE`                | `last`   |
| Push to Create (Users)                  | `[repository] ENABLE_PUSH_CREATE_USER`        | off      |
| Push to Create (Organizations)          | `[repository] ENABLE_PUSH_CREATE_ORG`         | off      |
| Require Sign-in to View                 | `[service] REQUIRE_SIGNIN_VIEW`               | off      |
| Keep Email Private by Default           | `[service] DEFAULT_KEEP_EMAIL_PRIVATE`        | off      |
| Allow Creating Organizations by Default | `[service] DEFAULT_ALLOW_CREATE_ORGANIZATION` | on       |
| Default User Visibility                 | `[service] DEFAULT_USER_VISIBILITY`           | `public` |
| Landing Page                            | `[server] LANDING_PAGE`                       | `home`   |
| Enable Actions                          | `[actions] ENABLED`                           | on       |
| Allow Local Network Imports             | `[migrations] ALLOW_LOCALNETWORKS`            | off      |

Forgejo refuses imports and mirrors from private, loopback and link-local addresses unless Allow Local Network Imports is on. Turning it on opens every such address to anyone who may create repositories, this server's own services included; Forgejo has no setting that admits one private host while keeping public hosts open without also admitting loopback.

- **What it changes:** `config` in `store.json`, passed to Forgejo as `FORGEJO__<section>__<KEY>` on the next start.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent; the form is pre-filled. The "default" settings apply only to repositories and accounts created afterwards.
- **Dependents:** Forgejo Runner raises a critical task on this action whenever Enable Actions is off.

### Configure SMTP

Sets up outbound email for notifications, password resets, and verification.

- **What it changes:** `smtp` in `store.json`; the credentials become Forgejo's mailer environment on the next start.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent; the form is pre-filled.
- **Options:** StartOS's system SMTP, your own server, or disabled — which sets the mailer off rather than leaving stale credentials in place.

### Commit Signing

Has Forgejo sign the commits it creates itself — pull request merges, and optionally web edits — so a branch protected by "require signed commits" can accept merges from the web UI. Without a signing key Forgejo refuses every such merge.

- **The key:** init generates an ed25519 GPG key once, in the keyring Forgejo reads (`/data/gitea/home/.gnupg`), and records its fingerprint and public key in `store.json`. Turning signing off keeps the key, so turning it back on keeps the same signer.
- **What it changes:** `signing` in `store.json`, passed as `FORGEJO__repository_0X2E_signing__*` on the next start.
- **Options:** signer name and email (the identity Forgejo displays for its signing key, not a committer override under the default trust model); which merges to sign — always, only approved pull requests (default), only when the base branch is signed, or only when every pull request commit is signed; and whether to sign web edits.
- **Result:** the armored public key, for adding wherever Forgejo's signatures need to verify.
- **Cost:** seconds, then a restart.
- **Repeat safety:** idempotent; the form is pre-filled.

## Tasks

One task, and it is raised by a check rather than unconditionally.

| Task              | Severity    | Raised when                                                 | Cleared when    |
| ----------------- | ----------- | ----------------------------------------------------------- | --------------- |
| Create Admin User | `important` | The service is running and Forgejo reports no admin account | The action runs |

`important` rather than `critical`: an admin-less Forgejo still starts and serves, so blocking it would be worse than prompting. The check runs after the daemon is up, which is why the task appears a moment after a fresh install rather than at install time.

## Health Checks

One check, on the primary daemon.

| Check                     | Method                                  | Grace Period |
| ------------------------- | --------------------------------------- | ------------ |
| `primary` "Web Interface" | HTTP `GET /api/healthz` over the bridge | 120 seconds  |

It probes Forgejo's own health endpoint through the service bridge using `curl --fail` with a five-second timeout, so an error status from Forgejo's database or cache checks fails readiness, not just an unreachable port. The two-minute grace covers a first start, where the database is created and migrated before anything binds. Until the bridge address resolves the check reports `starting` rather than failing.

## Backups and Restore

The `main` volume is copied wholesale — `sdk.Backups.ofVolumes('main')`. No dump step and nothing excluded.

- **Included:** every repository and its LFS objects, the database with accounts and settings, and `store.json` with the secret key, root URL, SMTP settings, Configure settings, and signing settings. The signing keyring travels with the volume, so a restored server signs with the same key.
- **Restore:** complete. Because the secret key travels with the backup, stored credentials and tokens keep working, and no admin task is raised since the account already exists. If the restored server does not publish the address the backup recorded, init picks a local one — check [Set Primary URL](#actions) before handing out clone URLs.

## Limitations and Differences

1. **The installation wizard is skipped**, and the secret key is generated by the package rather than chosen.
2. **Registrations are disabled at install**; the first admin is created through an action.
3. **The SSH port is assigned by StartOS**, not fixed at 22 externally, and Forgejo is told what it is so clone URLs are correct.
4. **The session cookie is renamed** to avoid a collision with other services on the same host.
5. **The root URL is re-asserted when the recorded address stops being published**, so a network change can move the base of newly-generated links.
6. **No riscv64 build.** x86_64 and aarch64 only.

---

## Quick Reference for AI Consumers

```yaml
package_id: forgejo
image: codeberg.org/forgejo/forgejo
architectures:
  - x86_64
  - aarch64
subcontainers:
  - forgejo-sub
volumes:
  main: /data
file_models:
  - store.json
startos_managed_env_vars:
  - FORGEJO__server__ROOT_URL
  - FORGEJO__server__SSH_DOMAIN
  - FORGEJO__server__SSH_PORT
  - FORGEJO__security__INSTALL_LOCK
  - FORGEJO__security__SECRET_KEY
  - FORGEJO__service__DISABLE_REGISTRATION
  - FORGEJO__session__COOKIE_NAME
  - FORGEJO__lfs__PATH
  - FORGEJO__server__LFS_START_SERVER
  - FORGEJO__repository__DEFAULT_BRANCH
  - FORGEJO__repository__DEFAULT_PRIVATE
  - FORGEJO__repository__ENABLE_PUSH_CREATE_USER
  - FORGEJO__repository__ENABLE_PUSH_CREATE_ORG
  - FORGEJO__service__REQUIRE_SIGNIN_VIEW
  - FORGEJO__service__DEFAULT_KEEP_EMAIL_PRIVATE
  - FORGEJO__service__DEFAULT_ALLOW_CREATE_ORGANIZATION
  - FORGEJO__service__DEFAULT_USER_VISIBILITY
  - FORGEJO__server__LANDING_PAGE
  - FORGEJO__actions__ENABLED
  - FORGEJO__migrations__ALLOW_LOCALNETWORKS
  - FORGEJO__mailer__ENABLED
  - FORGEJO__mailer__PROTOCOL # when SMTP is configured
  - FORGEJO__mailer__SMTP_ADDR # when SMTP is configured
  - FORGEJO__mailer__SMTP_PORT # when SMTP is configured
  - FORGEJO__mailer__FROM # when SMTP is configured
  - FORGEJO__mailer__USER # when SMTP is configured
  - FORGEJO__mailer__PASSWD # when SMTP is configured
  - FORGEJO__repository_0X2E_signing__SIGNING_KEY # none while signing is off
  - FORGEJO__repository_0X2E_signing__SIGNING_NAME
  - FORGEJO__repository_0X2E_signing__SIGNING_EMAIL
  - FORGEJO__repository_0X2E_signing__MERGES
  - FORGEJO__repository_0X2E_signing__CRUD_ACTIONS
dependencies: []
interfaces:
  http: { type: ui, port: 3000 }
  ssh: { type: api, port: 22 } # external port assigned by StartOS
actions:
  - create-admin # only-running
  - reset-admin # only-running
  - set-primary-url
  - registrations
  - configure
  - manage-smtp # displayed "Configure SMTP"
  - commit-signing
tasks:
  - { action: create-admin, severity: important }
health_checks:
  - primary # the daemon's ready check, displayed "Web Interface"
```
