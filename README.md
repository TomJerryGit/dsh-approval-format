# dsh-approval-format

Article-style cards for **pending approvals** in DeepSeek Harness. Approval content is rendered as a readable document instead of a single plain-text paragraph, while every decision still goes through the original approval channel.

> Status: presentation-only plugin. It does not change approval policy, permission checks, or tool execution.

## What it looks like

```text
┌──────────────────────────────────────────────────────┐
│ ● 等待审批            [高风险]      查看原文 · 复制  │
├──────────────────────────────────────────────────────┤
│ 允许本次操作使用 danger-full-access 权限：           │
│ 设计 app/BeeSheet GUI 深层补测。                     │
│                                                      │
│ 工具 · powershell                                    │
│ ┌ 执行详情 ─────────────────────── 命令  展开全部 ┐ │
│ │ 1  Set-Location 'D:\beeofficeV\_ptmp\s4'          │ │
│ │ 2  Get-Content beeoffice\tab_manager.py ...       │ │
│ │ 3  Select-String -Path beeoffice\app.py ...       │ │
│ └──────────────────────────────────────────────────┘ │
│                                                      │
│ Enter 允许一次 · Esc 拒绝          [拒绝] [允许一次] │
└──────────────────────────────────────────────────────┘
```

## Features

- **Safe Markdown title/description**: headings, paragraphs, lists, task lists, blockquotes, tables, bold/italic/inline code and http(s) links. Raw HTML is never interpreted.
- **Code detail**: shell commands or JSON tool arguments render in a line-numbered, scrollable code block with preserved newlines and soft wrapping.
- **Risk badge**: detects patterns such as `danger-full-access`, `sudo`, `rm -rf`, `Remove-Item`, or `--force`.
- **Raw view**: switch between formatted and raw content; copy the whole card content.
- **Keyboard decisions**: Enter allows once, Esc rejects, without hijacking focused inputs or buttons.
- **Error fallback**: if rich rendering fails, a minimal raw card still exposes reject/allow.
- **Performance guards**: memoized Markdown parsing, 100 KB content cap, 2000-line expansion cap.

## Install

One-step install from npm (recommended):

```sh
dsh plugin --profile web add dsh-approval-format
# desktop profile
dsh plugin --profile desktop add dsh-approval-format
```

From source:

```sh
dsh plugin --profile web add github:TomJerryGit/dsh-approval-format
```

Or use **Plugins → Discover** with the market index:

```text
https://tomjerrygit.github.io/dsh-approval-format/index.json
```

Or use **Plugins → Install** and point at the repository / package directory.

### From a market

Once this repository is listed in a DSH plugin market, install the listed version from **Plugins → Discover**.

## Compatibility

- DSH: `>=0.2.0-rc.2` (declared in `engines.dsh`)
- Client: Web (`dsh.client.platform: "web"`)
- Depends on the shipped approval composer and chat client; it registers a higher-priority `conversation.composer` chain entry for pending approvals.

## Permissions and risk

- No network requests, no credentials, no file access, no Host routes.
- Reads the current approval request and the correlated tool call from the Client; does not write session data.
- Presentation-only: removing the plugin restores the built-in approval card.

## Development

The Client half is a single `client.js` module using only React from the browser module table. Edit `client.js`, then reload DSH (or restart the desktop app) to pick up the new module generation.

## License

MIT
