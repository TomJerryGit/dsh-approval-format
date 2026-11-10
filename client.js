window.__ModuleLoader__.load({
  id: 'dsh-approval-format',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    const zh = {
      waiting: '等待审批',
      reject: '拒绝',
      allowOnce: '允许一次',
      raw: '查看原文',
      formatted: '格式化视图',
      copy: '复制',
      copied: '已复制',
      tool: '工具',
      detail: '执行详情',
      expand: '展开全部',
      collapse: '收起',
      riskHigh: '高风险',
      riskMedium: '需注意',
      riskLow: '普通',
      hint: 'Enter 允许一次 · Esc 拒绝',
      command: '命令',
      arguments: '参数',
      fallback: '审批内容渲染失败，已回退为原文。',
    };
    const en = {
      waiting: 'Waiting for approval',
      reject: 'Reject',
      allowOnce: 'Allow once',
      raw: 'View raw',
      formatted: 'Formatted view',
      copy: 'Copy',
      copied: 'Copied',
      tool: 'Tool',
      detail: 'Execution detail',
      expand: 'Expand all',
      collapse: 'Collapse',
      riskHigh: 'High risk',
      riskMedium: 'Review',
      riskLow: 'Normal',
      hint: 'Enter allow once · Esc reject',
      command: 'Command',
      arguments: 'Arguments',
      fallback: 'Approval rendering failed; showing raw content.',
    };

    const STYLE = `
      .dshaf-root {
        padding: 8px calc(var(--dsh-composer-side-clearance, 0px) + 16px) 12px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .dshaf-card {
        width: 100%;
        max-width: var(--dsh-chat-content-width);
        border: 1px solid var(--dsw-alias-state-warn-secondary);
        border-radius: 16px;
        background: var(--dsw-specific-input-major);
        box-shadow: var(--dsw-shadow-lv2);
        overflow: hidden;
      }
      .dshaf-strip {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 9px 16px;
        background: var(--dsw-alias-state-warn-tertiary);
        color: var(--dsw-alias-state-warn-primary);
        font-size: 13px;
        line-height: 18px;
      }
      .dshaf-dot { width: 8px; height: 8px; border-radius: 50%; background: currentColor; flex: none; }
      .dshaf-risk {
        border-radius: 999px;
        padding: 1px 8px;
        font-size: 11px;
        font-weight: 500;
        line-height: 16px;
        border: 1px solid currentColor;
      }
      .dshaf-risk-high { color: var(--dsw-alias-state-error-primary); }
      .dshaf-risk-medium { color: var(--dsw-alias-state-warn-primary); }
      .dshaf-risk-low { color: var(--dsw-alias-label-tertiary); }
      .dshaf-strip-actions { margin-left: auto; display: flex; align-items: center; gap: 10px; }
      .dshaf-text-btn {
        border: 0;
        background: transparent;
        color: inherit;
        cursor: pointer;
        padding: 0;
        font: inherit;
        font-size: 12px;
        text-decoration: underline;
        text-underline-offset: 2px;
      }
      .dshaf-text-btn:hover { opacity: 0.8; }
      .dshaf-body { padding: 12px 16px 0; display: flex; flex-direction: column; gap: 8px; max-height: 420px; overflow-y: auto; }
      .dshaf-title { color: var(--dsw-alias-label-primary); font-size: 15px; font-weight: 600; line-height: 1.6; }
      .dshaf-meta { color: var(--dsw-alias-label-tertiary); font-size: 12px; line-height: 18px; }
      .dshaf-md p { margin: 3px 0; line-height: 1.65; white-space: pre-wrap; overflow-wrap: anywhere; }
      .dshaf-md ul, .dshaf-md ol { margin: 4px 0; padding-left: 20px; line-height: 1.6; }
      .dshaf-md li { margin: 1px 0; overflow-wrap: anywhere; }
      .dshaf-md blockquote { margin: 6px 0; padding: 4px 12px; border-left: 3px solid var(--dsw-alias-border-l1); color: var(--dsw-alias-label-secondary); }
      .dshaf-md code { font-family: var(--ds-font-family-code); font-size: 0.92em; background: var(--dsw-alias-bg-layer-2); border-radius: 4px; padding: 0 4px; }
      .dshaf-md a { color: var(--dsw-alias-state-info-primary); text-decoration: underline; text-underline-offset: 2px; }
      .dshaf-md strong { font-weight: 600; }
      .dshaf-table { width: 100%; border-collapse: collapse; margin: 6px 0; font-size: 12.5px; }
      .dshaf-table th, .dshaf-table td { border: 1px solid var(--dsw-alias-border-l1); padding: 5px 8px; text-align: left; vertical-align: top; }
      .dshaf-table th { background: var(--dsw-alias-bg-layer-2); font-weight: 600; }
      .dshaf-code { border: 1px solid var(--dsw-alias-border-l1); border-radius: 10px; overflow: hidden; background: var(--dsw-alias-bg-layer-2); }
      .dshaf-code-head { display: flex; align-items: center; gap: 8px; padding: 7px 12px; border-bottom: 1px solid var(--dsw-alias-border-l1); color: var(--dsw-alias-label-tertiary); font-size: 11px; }
      .dshaf-code-body { max-height: 320px; overflow: auto; padding: 8px 0; }
      .dshaf-line { display: flex; gap: 10px; font-family: var(--ds-font-family-code); font-size: 12.5px; line-height: 1.65; }
      .dshaf-line-no { flex: 0 0 28px; text-align: right; padding-right: 8px; color: var(--dsw-alias-label-tertiary); user-select: none; }
      .dshaf-line code { flex: 1; white-space: pre-wrap; overflow-wrap: anywhere; font-family: inherit; }
      .dshaf-empty-code { padding: 10px 12px; color: var(--dsw-alias-label-tertiary); font-size: 12px; }
      .dshaf-actions { display: flex; align-items: center; justify-content: flex-end; gap: 8px; padding: 12px 16px; flex-wrap: wrap; }
      .dshaf-hint { margin-right: auto; color: var(--dsw-alias-label-tertiary); font-size: 11px; }
      .dshaf-btn {
        border: 1px solid var(--dsw-alias-border-l1);
        background: transparent;
        color: var(--dsw-alias-label-primary);
        border-radius: 8px;
        padding: 7px 14px;
        font-size: 13px;
        line-height: 18px;
        cursor: pointer;
        transition: background 120ms ease-out;
      }
      .dshaf-btn:hover:not(:disabled) { background: var(--dsw-alias-bg-layer-2); }
      .dshaf-btn:disabled { cursor: default; opacity: 0.55; }
      .dshaf-btn-primary { border-color: transparent; background: var(--dsw-alias-label-primary); color: var(--dsw-specific-input-major); }
      .dshaf-btn-primary:hover:not(:disabled) { opacity: 0.9; background: var(--dsw-alias-label-primary); }
      .dshaf-root:focus-visible, .dshaf-card:focus-visible { outline: 2px solid var(--dsw-alias-state-info-primary); outline-offset: 2px; }
      @media (prefers-reduced-motion: reduce) { .dshaf-btn { transition: none; } }
    `;

    /** Translate only the card's own copy; approval text itself is never translated. */
    const makeTranslator = () => {
      const language =
        typeof navigator !== 'undefined' && typeof navigator.language === 'string'
          ? navigator.language
          : typeof document !== 'undefined'
            ? document.documentElement.lang || ''
            : '';
      const dictionary = language.toLowerCase().startsWith('zh') ? zh : en;
      return (key) => (dictionary[key] !== undefined ? dictionary[key] : en[key] !== undefined ? en[key] : key);
    };

    /** Classify rough risk from the displayed reason plus correlated detail. */
    const riskOf = (text) => {
      const lowered = String(text || '').toLowerCase();
      if (/(danger-full-access|sudo\b|rm\s+-rf|remove-item|format-volume|drop\s+table|--force|dangerously)/.test(lowered)) return 'high';
      if (/(write|edit|delete|remove|install|download|upload|curl|invoke-webrequest|network|http)/.test(lowered)) return 'medium';
      return 'low';
    };

    /** Parse an intentionally small, safe inline Markdown subset; unsupported syntax stays literal. */
    const inline = (text, keyPrefix) => {
      const nodes = [];
      const pattern = /(\*\*[^*]+\*\*|__[^_]+__|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^)]+\))/g;
      let cursor = 0;
      let index = 0;
      let match;
      while ((match = pattern.exec(text)) !== null) {
        if (match.index > cursor) nodes.push(text.slice(cursor, match.index));
        const token = match[0];
        const key = keyPrefix + '-i' + index;
        if (token.startsWith('**') && token.endsWith('**')) nodes.push(h('strong', { key }, token.slice(2, -2)));
        else if (token.startsWith('__') && token.endsWith('__')) nodes.push(h('strong', { key }, token.slice(2, -2)));
        else if (token.startsWith('*') && token.endsWith('*')) nodes.push(h('em', { key }, token.slice(1, -1)));
        else if (token.startsWith('`')) nodes.push(h('code', { key }, token.slice(1, -1)));
        else {
          const link = /^\[([^\]]+)\]\((https?:\/\/[^)]+)\)$/.exec(token);
          nodes.push(h('a', { key, href: link[2], target: '_blank', rel: 'noopener noreferrer' }, link[1]));
        }
        cursor = match.index + token.length;
        index += 1;
      }
      if (cursor < text.length) nodes.push(text.slice(cursor));
      return nodes;
    };

    /** Render Markdown blocks into article-style React blocks. Raw HTML is never interpreted. */
    const renderMarkdown = (text) => {
      const lines = String(text || '').replace(/\r\n?/g, '\n').split('\n');
      const blocks = [];
      let cursor = 0;
      let index = 0;
      while (cursor < lines.length) {
        const line = lines[cursor];
        if (line.trim().length === 0) {
          cursor += 1;
          continue;
        }
        if (line.trim().startsWith('```')) {
          const language = line.trim().slice(3).trim();
          const code = [];
          cursor += 1;
          while (cursor < lines.length && !lines[cursor].trim().startsWith('```')) {
            code.push(lines[cursor]);
            cursor += 1;
          }
          cursor += 1;
          blocks.push(h('pre', { key: 'code-' + index, className: 'dshaf-md-code', style: { margin: '6px 0', padding: '10px 12px', background: 'var(--dsw-alias-bg-layer-2)', border: '1px solid var(--dsw-alias-border-l1)', borderRadius: '8px', overflow: 'auto', fontFamily: 'var(--ds-font-family-code)', fontSize: '12.5px', lineHeight: 1.6, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' } }, language ? h('div', { style: { color: 'var(--dsw-alias-label-tertiary)', fontSize: '11px', marginBottom: '4px' } }, language) : null, code.join('\n')));
          index += 1;
          continue;
        }
        const tableNext = cursor + 1 < lines.length ? lines[cursor + 1] : '';
        if (line.includes('|') && /^\s*\|?\s*:?-{3,}/.test(tableNext)) {
          const splitRow = (row) => row.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
          const header = splitRow(line);
          cursor += 2;
          const rows = [];
          while (cursor < lines.length && lines[cursor].includes('|') && lines[cursor].trim().length > 0) {
            rows.push(splitRow(lines[cursor]));
            cursor += 1;
          }
          blocks.push(h('table', { key: 'table-' + index, className: 'dshaf-table' },
            h('thead', null, h('tr', null, header.map((cell, cellIndex) => h('th', { key: cellIndex }, inline(cell, 'th' + index + '-' + cellIndex))))),
            h('tbody', null, rows.map((row, rowIndex) => h('tr', { key: rowIndex }, row.map((cell, cellIndex) => h('td', { key: cellIndex }, inline(cell, 'td' + index + '-' + rowIndex + '-' + cellIndex))))))));
          index += 1;
          continue;
        }
        if (/^#{1,6}\s+/.test(line)) {
          const depth = Math.min(3, (line.match(/^#+/) || ['#'])[0].length);
          blocks.push(h('div', { key: 'h-' + index, style: { fontSize: depth === 1 ? '16px' : depth === 2 ? '15px' : '14px', fontWeight: 600, margin: '8px 0 3px' } }, inline(line.replace(/^#{1,6}\s+/, ''), 'h' + index)));
          index += 1;
          cursor += 1;
          continue;
        }
        if (/^\s*>/.test(line)) {
          const quote = [];
          while (cursor < lines.length && /^\s*>/.test(lines[cursor])) {
            quote.push(lines[cursor].replace(/^\s*>\s?/, ''));
            cursor += 1;
          }
          blocks.push(h('blockquote', { key: 'q-' + index }, h('p', null, inline(quote.join('\n'), 'q' + index))));
          index += 1;
          continue;
        }
        if (/^\s*([-*]|\d+\.)\s+/.test(line)) {
          const ordered = /^\s*\d+\./.test(line);
          const items = [];
          while (cursor < lines.length && /^\s*([-*]|\d+\.)\s+/.test(lines[cursor])) {
            const rawItem = lines[cursor].replace(/^\s*([-*]|\d+\.)\s+/, '');
            const task = /^\[([ xX])\]\s+/.exec(rawItem);
            items.push({ text: task ? rawItem.slice(task[0].length) : rawItem, checked: task ? task[1].toLowerCase() === 'x' : null });
            cursor += 1;
          }
          blocks.push(h(ordered ? 'ol' : 'ul', { key: 'l-' + index }, items.map((item, itemIndex) => h('li', { key: itemIndex }, item.checked === null ? null : h('span', { 'aria-hidden': true, style: { display: 'inline-block', width: '13px', color: item.checked ? 'var(--dsw-alias-state-success-primary)' : 'var(--dsw-alias-label-tertiary)' } }, item.checked ? '☑' : '☐'), inline(item.text, 'l' + index + '-' + itemIndex)))));
          index += 1;
          continue;
        }
        const paragraph = [];
        while (
          cursor < lines.length &&
          lines[cursor].trim().length > 0 &&
          !/^#{1,6}\s+/.test(lines[cursor]) &&
          !/^\s*([-*]|\d+\.)\s+/.test(lines[cursor]) &&
          !/^\s*>/.test(lines[cursor]) &&
          !lines[cursor].trim().startsWith('```') &&
          !(lines[cursor].includes('|') && cursor + 1 < lines.length && /^\s*\|?\s*:?-{3,}/.test(lines[cursor + 1]))
        ) {
          paragraph.push(lines[cursor]);
          cursor += 1;
        }
        blocks.push(h('p', { key: 'p-' + index }, inline(paragraph.join('\n'), 'p' + index)));
        index += 1;
      }
      return blocks;
    };

    /** Extract the correlated tool call's command or arguments as text. */
    const toolDetailOf = (snapshot, callId) => {
      if (callId === undefined || callId === null) return null;
      for (const node of snapshot.nodes.values()) {
        const root = node.kind === 'tool-call' ? node.data.root : undefined;
        if (root === undefined || root.callId !== callId || 'kind' in root || root.phase !== 'start') continue;
        try {
          const args = JSON.parse(root.argsRaw);
          if (typeof args.command === 'string') return { text: args.command, language: 'shell' };
          return { text: JSON.stringify(args, null, 2), language: 'json' };
        } catch {
          return null;
        }
      }
      return null;
    };

    /** Keep decisions reachable if rich rendering ever throws. */
    class ApprovalErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { error: false };
      }
      static getDerivedStateFromError() {
        return { error: true };
      }
      render() {
        if (!this.state.error) return this.props.children;
        const pending = this.props.pending;
        const t = this.props.t;
        const answer = (outcome) => {
          if (pending && pending.answerable !== false) Promise.resolve(pending.answer(outcome)).catch(() => {});
        };
        return h('div', { className: 'dshaf-root', role: 'alert' },
          h('div', { className: 'dshaf-card' },
            h('div', { className: 'dshaf-strip' }, h('span', { className: 'dshaf-dot' }), t('waiting')),
            h('div', { className: 'dshaf-body' }, h('p', { className: 'dshaf-md' }, t('fallback')), h('pre', { style: { whiteSpace: 'pre-wrap', overflowWrap: 'anywhere' } }, String(pending && pending.reason ? pending.reason : ''))),
            h('div', { className: 'dshaf-actions' },
              h('button', { className: 'dshaf-btn', onClick: () => answer('rejected') }, t('reject')),
              h('button', { className: 'dshaf-btn dshaf-btn-primary', onClick: () => answer('allowed-once') }, t('allowOnce')))));
      }
    }

    /** Resolve a Host-localized approval reason ({ en, zh, ... }) without requiring the locale service. */
    const resolveLocalized = (value) => {
      if (typeof value === 'string') return value;
      if (!value || typeof value !== 'object') return '';
      const preferred =
        typeof navigator !== 'undefined' && typeof navigator.language === 'string'
          ? navigator.language.toLowerCase()
          : typeof document !== 'undefined'
            ? (document.documentElement.lang || '').toLowerCase()
            : '';
      const keys = [preferred, preferred.split('-')[0], 'zh', 'zh-cn', 'en'];
      const lowered = {};
      for (const [key, entry] of Object.entries(value)) lowered[key.toLowerCase()] = entry;
      for (const key of keys) {
        if (key && typeof lowered[key] === 'string' && lowered[key].trim().length > 0) return lowered[key];
      }
      for (const entry of Object.values(value)) {
        if (typeof entry === 'string' && entry.trim().length > 0) return entry;
      }
      return '';
    };

    function ApprovalArticle(props) {
      const pending = props.matched;
      const t = makeTranslator();
      const [answered, setAnswered] = React.useState(false);
      const [rawMode, setRawMode] = React.useState(false);
      const [copied, setCopied] = React.useState(false);
      const [expanded, setExpanded] = React.useState(false);
      const detail = props.useChat((snapshot) => toolDetailOf(snapshot, pending.callId), (left, right) => left === right || (left !== null && right !== null && left.text === right.text));
      const resolvedDisplayReason = resolveLocalized(pending.displayReason);
      const resolvedReason = resolveLocalized(pending.reason);
      const titleText = resolvedDisplayReason.length > 0
        ? resolvedDisplayReason
        : resolvedReason.length > 0
          ? resolvedReason
          : t('waiting');
      const detailText = detail !== null && detail !== undefined && typeof detail.text === 'string' ? detail.text.slice(0, 100000) : '';
      const risk = React.useMemo(() => riskOf(titleText + '\n' + detailText), [titleText, detailText]);
      const titleBlocks = React.useMemo(() => renderMarkdown(titleText), [titleText]);
      const lines = React.useMemo(() => {
        const all = detailText.replace(/\r\n?/g, '\n').split('\n');
        return all.length > 2000 ? all.slice(0, 2000).concat(['… (truncated)']) : all;
      }, [detailText]);
      const shownLines = expanded ? lines : lines.slice(0, 12);
      const language = detail !== null && detail !== undefined && detail.language === 'json' ? 'JSON' : t('command');

      React.useEffect(() => {
        if (!copied) return undefined;
        const timer = setTimeout(() => setCopied(false), 1600);
        return () => clearTimeout(timer);
      }, [copied]);

      const answer = (outcome) => {
        if (answered || pending.answerable === false) return;
        setAnswered(true);
        Promise.resolve(pending.answer(outcome)).catch(() => setAnswered(false));
      };
      const copyText = (text) => {
        const clipboard = typeof navigator !== 'undefined' ? navigator.clipboard : undefined;
        if (clipboard && typeof clipboard.writeText === 'function') clipboard.writeText(text).then(() => setCopied(true)).catch(() => {});
      };

      React.useEffect(() => {
        if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') return undefined;
        const onKeyDown = (event) => {
          if (event.defaultPrevented || event.repeat) return;
          const target = event.target;
          const tag = target && target.tagName ? String(target.tagName).toUpperCase() : '';
          if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || tag === 'BUTTON' || tag === 'A' || (target && target.isContentEditable)) return;
          if (event.key === 'Enter') {
            event.preventDefault();
            answer('allowed-once');
          } else if (event.key === 'Escape') {
            event.preventDefault();
            answer('rejected');
          }
        };
        window.addEventListener('keydown', onKeyDown);
        return () => window.removeEventListener('keydown', onKeyDown);
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [answered, pending]);

      return h('div', {
        className: 'dshaf-root',
        'data-approval-key': pending.key,
        'data-approval-article': 'true',
        role: 'group',
        'aria-label': t('waiting'),
        tabIndex: 0,
        onKeyDown: (event) => {
          if (event.defaultPrevented || (event.target && event.target.closest && event.target.closest('button, input, textarea, select, a[href]'))) return;
          if (event.key === 'Enter') { event.preventDefault(); answer('allowed-once'); }
          if (event.key === 'Escape') { event.preventDefault(); answer('rejected'); }
        },
      },
      h('div', { className: 'dshaf-card' },
        h('div', { className: 'dshaf-strip', role: 'status' },
          h('span', { className: 'dshaf-dot' }),
          t('waiting'),
          h('span', { className: 'dshaf-risk dshaf-risk-' + risk }, risk === 'high' ? t('riskHigh') : risk === 'medium' ? t('riskMedium') : t('riskLow')),
          h('span', { className: 'dshaf-strip-actions' },
            h('button', { type: 'button', className: 'dshaf-text-btn', 'aria-pressed': rawMode, onClick: () => setRawMode((value) => !value) }, rawMode ? t('formatted') : t('raw')),
            h('button', { type: 'button', className: 'dshaf-text-btn', onClick: () => copyText(rawMode ? titleText + '\n\n' + detailText : titleText + '\n\n' + detailText) }, copied ? t('copied') : t('copy')))),
        h('div', { className: 'dshaf-body' },
          h('div', { className: 'dshaf-title' }, rawMode ? h('pre', { style: { margin: 0, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', fontFamily: 'var(--ds-font-family-code)', fontSize: '12.5px' } }, titleText) : h('div', { className: 'dshaf-md' }, titleBlocks)),
          h('div', { className: 'dshaf-meta' }, t('tool') + ' · ' + String(pending.toolName || 'unknown')),
          detailText.length > 0
            ? h('div', { className: 'dshaf-code' },
                h('div', { className: 'dshaf-code-head' },
                  h('span', null, t('detail')),
                  h('span', { style: { opacity: 0.7 } }, language),
                  lines.length > 12
                    ? h('button', { type: 'button', className: 'dshaf-text-btn', style: { marginLeft: 'auto', color: 'inherit' }, 'aria-expanded': expanded, onClick: () => setExpanded((value) => !value) }, expanded ? t('collapse') : t('expand') + ' (' + lines.length + ')')
                    : null),
                h('div', { className: 'dshaf-code-body' }, shownLines.map((line, index) =>
                  h('div', { className: 'dshaf-line', key: index },
                    h('span', { className: 'dshaf-line-no' }, index + 1),
                    h('code', null, line.length === 0 ? ' ' : line)))))
            : null),
        h('div', { className: 'dshaf-actions' },
          h('span', { className: 'dshaf-hint' }, t('hint')),
          h('button', { type: 'button', className: 'dshaf-btn', disabled: answered, onClick: () => answer('rejected') }, t('reject')),
          h('button', { type: 'button', className: 'dshaf-btn dshaf-btn-primary', disabled: answered, onClick: () => answer('allowed-once') }, t('allowOnce')))));
    }

    function ApprovalArticleEntry(props) {
      const t = makeTranslator();
      return h(ApprovalErrorBoundary, { pending: props.matched, t }, h(ApprovalArticle, props));
    }

    return {
      inject: ['slots'],
      apply(ctx) {
        ctx.effect(() => {
          const style = document.createElement('style');
          style.dataset.plugin = '@local/dsh-approval-format';
          style.textContent = STYLE;
          document.head.appendChild(style);
          return () => style.remove();
        }, 'approval-format: styles');
        ctx.slots.inject('conversation.composer', () => ctx.slots.register({
          name: 'conversation.composer',
          priority: 0,
          select: ({ pendingInteraction }) =>
            pendingInteraction !== undefined && pendingInteraction !== null && pendingInteraction.kind === 'approval'
              ? pendingInteraction
              : null,
        }, ApprovalArticleEntry));
      },
    };
  },
});
