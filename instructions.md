# Forgejo

## Documentation

- [Forgejo documentation](https://forgejo.org/docs) — upstream reference covering repositories, organizations, the admin panel, Forgejo Actions, the API, and `app.ini` settings.

## What you get on StartOS

- A **Web UI and git (HTTP)** interface — the Forgejo web app, and the endpoint for cloning, pushing, and pulling over HTTP.
- A **git (SSH)** interface (user `git`) for cloning, pushing, and pulling over SSH.
- An embedded SQLite database stored alongside repositories and LFS objects in a single managed volume — no separate database to install or configure.

## Getting set up

On first start Forgejo posts a **Create Admin User** task. Until you complete it, the service has no administrator.

1. Run the **Create Admin User** task. Provide a username and email. A strong password is generated and shown once — copy it before dismissing the result. If you lose it later, run **Reset Admin Password**.
2. Sign in to the Web UI with those credentials.
3. If you plan to send emails (notifications, invitations, password resets), run **Configure SMTP** and pick either your StartOS system SMTP or custom credentials.

## Using Forgejo

### Web UI and git over HTTP

Open the **Web UI and git (HTTP)** interface to reach the Forgejo web app. The same hostnames serve git over HTTP, so you can clone, push, and pull using the URLs Forgejo shows on each repository page.

### git over SSH

Open the **git (SSH)** interface to see the SSH host and port. Add your SSH public key under your Forgejo user settings, then use the `git@…` URLs Forgejo generates on each repository page.

### Actions

- **Set Primary Url** — pick which of the available HTTP URLs Forgejo uses when generating clone URLs, links in emails, OAuth callbacks, and so on. Switch this whenever you add or change a domain you want users to see.
- **Enable / Disable Registrations** — toggle whether anyone with your Forgejo URL can create an account. Registrations are disabled by default; enabling them is a public-signup decision, so the action confirms it with a warning.
- **Configure** — set Forgejo options that otherwise live only in its configuration file: the default branch name and visibility for new repositories, push-to-create, whether visitors must sign in to see anything, defaults for new accounts, the landing page, and whether Forgejo Actions is enabled (Forgejo Runner requires it). Changes to defaults apply only to repositories and accounts created afterwards.
- **Configure SMTP** — set the credentials Forgejo uses to send mail. Choose your StartOS system SMTP or supply a custom host, port, from-address, username, and password.
- **Commit Signing** — have Forgejo sign pull request merges, and optionally web edits, with its own key. Turn this on if you protect a branch with "require signed commits"; without it Forgejo cannot merge pull requests into that branch. The action shows Forgejo's public key, which you can add wherever those signatures need to verify.
- **Reset Admin Password** — pick an existing admin user and generate a new password for them. Use this to rotate the password or to recover an account whose password you've lost.

### Large file storage

Git LFS is enabled and stored alongside your repositories in the managed volume. Enable LFS per repository in its settings; use the Git LFS client on the pushing machine as you would with upstream Forgejo.
