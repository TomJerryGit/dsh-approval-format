### Repository

https://github.com/TomJerryGit/dsh-approval-format

### One-line value

Render pending approval content as article-style cards with safe Markdown, line-numbered code details, risk badges, raw/copy views, and keyboard decisions.

### Category

UI & Experience

### Install command

```sh
# source install (works today)
dsh plugin --profile web add github:TomJerryGit/dsh-approval-format
```

An NPM package is required for the in-DSH Plugin Hub. This repository is source-installable now; the market index is below.

### Compatibility

DSH `>=0.2.0-rc.2`; Web client; desktop and web profiles.

### License

MIT

### Screenshots / demo

- Market index: <https://tomjerrygit.github.io/dsh-approval-format/index.json>
- Plugin source: <https://github.com/TomJerryGit/dsh-approval-format>

### Notes

Presentation-only plugin. It registers a higher-priority `conversation.composer` chain entry for pending approvals and renders the approval reason plus the correlated tool detail. It makes no network requests, does not read credentials or files, and does not change approval policy or decisions. Disabling the plugin restores the shipped approval card.

### Pre-submission checklist

- [x] Repository is public
- [x] GitHub topic `dsh-plugin` added
- [x] README includes the install command
- [x] Plugin exports an `apply(ctx)` module
- [x] Repository root includes a `package.json`
