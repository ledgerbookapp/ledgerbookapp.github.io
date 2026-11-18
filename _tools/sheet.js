// A contact sheet of the WebPs whose names match a pattern, for a look.
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const [dir, re, outPng] = process.argv.slice(2);
const files = fs.readdirSync(dir).filter(f => f.endsWith('.webp') && new RegExp(re).test(f)).sort();
const html = path.join(dir, 'sheet.html');
fs.writeFileSync(html, `<body style="margin:0;background:#777;display:flex;flex-wrap:wrap;gap:6px;padding:6px;width:${6 * 306}px">` +
  files.map(f => `<img src="${f}" style="width:300px;border-radius:18px">`).join('') + '</body>');
execFileSync('C:/Program Files/Google/Chrome/Application/chrome.exe', ['--headless=new', '--disable-gpu', '--hide-scrollbars',
  '--window-size=' + (6 * 306 + 12) + ',' + (Math.ceil(files.length / 6) * 674 + 12), '--virtual-time-budget=3000',
  '--screenshot=' + outPng, 'file:///' + html.split(path.sep).join('/')]);
fs.unlinkSync(html);
console.log(files.join(' '));
