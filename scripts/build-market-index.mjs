#!/usr/bin/env node
/**
 * Build a DSH plugin-market index (format 1) for this repository.
 *
 * Usage:
 *   node scripts/build-market-index.mjs \
 *     --repo https://github.com/OWNER/dsh-approval-format \
 *     --commit <40-hex-sha> \
 *     [--output site/index.json]
 *
 * The script copies the icon next to the index so a relative `icons/icon.svg`
 * reference works on any static host (GitHub Pages, GitLab Pages, object store).
 */
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const readFlag = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] !== undefined ? args[index + 1] : fallback;
};

const repo = readFlag('--repo', '').replace(/\/$/, '');
const commit = readFlag('--commit', '');
const output = path.resolve(root, readFlag('--output', 'site/index.json'));
if (!/^https:\/\/[^\s]+$/.test(repo)) {
  console.error('--repo must be an https repository URL');
  process.exit(1);
}
if (!/^[0-9a-f]{40}$/i.test(commit)) {
  console.error('--commit must be a 40-character Git commit SHA');
  process.exit(1);
}

const manifest = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
const iconSource = path.join(root, 'icon.svg');
const outputDir = path.dirname(output);
const iconDir = path.join(outputDir, 'icons');
await mkdir(iconDir, { recursive: true });
await copyFile(iconSource, path.join(iconDir, 'icon.svg'));

const index = {
  format: 1,
  title: { en: 'dsh-approval-format', zh: '审批内容格式化' },
  plugins: [
    {
      name: manifest.name,
      title: { en: 'Approval text formatting', zh: '审批内容格式化' },
      description: {
        en: manifest.description,
        zh: '文章式审批卡片：安全 Markdown、带行号代码详情、风险徽标、复制、原文切换与键盘决策。',
      },
      icon: 'icons/icon.svg',
      author: manifest.author,
      homepage: manifest.homepage,
      repository: { url: repo },
      versions: [
        {
          version: manifest.version,
          publishTimestamp: Math.floor(Date.now() / 1000),
          source: { type: 'git', url: repo, commit: commit.toLowerCase() },
          engines: { dsh: manifest.engines.dsh },
        },
      ],
    },
  ],
};

await writeFile(output, JSON.stringify(index, null, 2) + '\n', 'utf8');
console.log('wrote ' + output);
console.log('icon  ' + path.join(iconDir, 'icon.svg'));
