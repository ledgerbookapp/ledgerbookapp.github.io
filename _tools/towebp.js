// Turns the gallery's PNGs into the site's 780x1736 WebPs (quality 0.9) through headless Chrome's
// canvas: a 56px gap at the top and 32px at the bottom in the screen's own colour (a phone's status
// bar and gesture area), the render scaled into the 1648 between and centred.
// Usage: node towebp.js <contrast folder> <out folder>. From the site 2.21.0-2.25.1 renders.
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const [src, out] = process.argv.slice(2);
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const scenes = { home: '03-01-Home', txn: '05-Transactions', accounts: '07-Accounts-All', loans: '09-Loans-Given',
  analytics: '06-Analytics', backup: '11-Backups-On', invest: '07-Accounts-Tab-Invest', flow: '06-Money-Flow' };
const steps = { name: '01-02-Welcome-Name-Typed', create: '01-04-Create-PIN', confirm: '01-05-Confirm-PIN' };
const jobs = [];
for (const [k, s] of Object.entries(scenes)) for (const t of ['light', 'dark']) for (const bn of [false, true])
  jobs.push([`app-${k}-${t}${bn ? '-bn' : ''}.webp`, `${s}${bn ? '-bn' : ''}-${t}-yellow.png`, `${s}-${t}-yellow.png`]);
for (const [k, s] of Object.entries(steps)) for (const t of ['light', 'dark']) for (const bn of [false, true])
  jobs.push([`step4-${k}-${t}${bn ? '-bn' : ''}.webp`, `${s}${bn ? '-bn' : ''}-${t}-yellow.png`, `${s}-${t}-yellow.png`]);
const html = path.join(out, 'job.html');
for (const [name, want, fallback] of jobs) {
  if (!fs.existsSync(path.join(src, fallback))) { console.log(name, 'MISSING', fallback); continue; }
  let f = path.join(src, want), copy = false;
  if (!fs.existsSync(f)) { f = path.join(src, fallback); copy = true; }
  const b64 = fs.readFileSync(f).toString('base64');
  fs.writeFileSync(html, `<img id=i src="data:image/png;base64,${b64}"><pre id=o></pre><script>
addEventListener('load',()=>{const c=document.createElement('canvas');c.width=780;c.height=1736;const x=c.getContext('2d');
x.imageSmoothingQuality='high';const T=56,B=32,h=1736-T-B,w=Math.round(h*i.naturalWidth/i.naturalHeight),l=Math.round((780-w)/2);
const p=document.createElement('canvas');p.width=i.naturalWidth;p.height=i.naturalHeight;const q=p.getContext('2d');q.drawImage(i,0,0);
const top=q.getImageData(2,2,1,1).data,bot=q.getImageData(2,i.naturalHeight-3,1,1).data;
x.fillStyle='rgb('+top[0]+','+top[1]+','+top[2]+')';x.fillRect(0,0,780,1736);
x.fillStyle='rgb('+bot[0]+','+bot[1]+','+bot[2]+')';x.fillRect(l,1736-B-40,w,B+40);
x.drawImage(i,l,T,w,h);o.textContent='@@'+c.toDataURL('image/webp',0.9)+'@@';});</script>`);
  const dom = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--virtual-time-budget=5000', '--dump-dom', 'file:///' + html.split(path.sep).join('/')],
    { encoding: 'utf8', maxBuffer: 64 << 20 });
  const m = dom.match(/@@data:image\/webp;base64,([^@]+)@@/);
  if (!m) throw new Error('no webp for ' + name);
  fs.writeFileSync(path.join(out, name), Buffer.from(m[1], 'base64'));
  console.log(name, fs.statSync(path.join(out, name)).size, copy ? '(English copy)' : '');
}
if (fs.existsSync(html)) fs.unlinkSync(html);
