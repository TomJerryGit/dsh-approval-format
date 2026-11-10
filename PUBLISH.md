# Publishing status

## Official DeepSeek plugin market

As of the installed DSH 0.2.2-rc.1 and the public guide, **DSH ships no official plugin index**:

- The plugin-market guide states: “DSH ships no index source. Select Discover, choose Add index source, and enter the URL of an index file.”
- DeepSeek announced on 2026-11-08 that it is **building** an official plugin market and an author support program; the market’s launch date and a public submission endpoint were not published.
- Therefore there is currently no central “official market” URL or API to push this plugin to.

The official announcement and author interest form are referenced from:
<https://x.com/i/article/2118260976965517312> and
<https://twitter.com/DeepSeekHarness/status/2119431663642153128>.

## Community market (available today)

The DSH Plugin Hub (community, not affiliated with DeepSeek AI) lists plugins from public GitHub
repositories:

1. Publish this repository publicly on GitHub.
2. Add the GitHub topic **`dsh-plugin`**.
3. Keep the install command in `README.md`.
4. Submit the repository at <https://dsh-plugin.org/submit>.

The repo already contains:

- a valid DSH bundle (`dsh.bundle.patch`, `dsh.client` Web half),
- `README.md` with an install command,
- MIT license, icon and locale metadata,
- a format-1 market index generator and a Pages workflow.

## Self-hosted market index

The repository also works as its own market:

```sh
node scripts/build-market-index.mjs \
  --repo https://github.com/OWNER/dsh-approval-format \
  --commit <40-char-commit-sha>
```

This writes `site/index.json` and `site/icons/icon.svg`. The included GitHub Pages workflow deploys
`site/`. After Pages is enabled, the index URL is:

```text
https://OWNER.github.io/dsh-approval-format/index.json
```

Add that URL in **Plugins → Discover → Add index source**.

## Current local release state

- Source commit: `9cbfe21408aec0ca6ac605bd6998baea0a36f127`
- Market index: `site/index.json`
- The index currently assumes the repository URL
  `https://github.com/hedongwei/dsh-approval-format`. Replace the owner/name if the real repository
  differs, then rerun the generator.

## What is still needed

- A public GitHub repository and push credentials (`gh auth login` or an existing remote).
- Or an npm account/token if publishing to npm and listing the npm package instead of Git.
- When the official DeepSeek market opens, submit the same package/repository through its published
  author channel.
