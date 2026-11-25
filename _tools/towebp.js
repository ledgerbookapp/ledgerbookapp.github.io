// Turns the gallery's PNGs into the site's 780x1736 WebPs (quality 0.9) through headless Chrome's
// canvas: a 24px gap at the top and 12px at the bottom in the screen's own colour, the render scaled
// into the 1700 between and centred, 8px at each side. 56px at the top and 32px at the bottom until
// site 2.25.2, which left 20px at each side; 12px at the top in 2.25.2-2.25.4, which sat too tight. A panel that runs off the foot of the screen
// (the PIN keypad) ends in a border line one colour across the whole width: the gap used to be
// filled with that line's colour, a pale band under the keypad, so the panel's own row is carried
// down over the line and the gap instead (site 2.25.5).
// A list that runs off the foot of the screen (Transactions, Accounts, Money Flow) was cut through
// a card and then the gap, which read as a broken picture; since site 2.25.20 its last 140px fade
// into the screen's colour, the owner's choice from three endings.
// Usage: node towebp.js <contrast folder> <out folder>. From the site 2.21.0-2.25.5 renders.
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const [src, out] = process.argv.slice(2);
const CHROME = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const scenes = { home: '03-01-Home', txn: '05-Transactions', accounts: '07-Accounts-All', loans: '09-Loans-Given',
  analytics: '06-Analytics', backup: '11-Backups-On', invest: '07-Accounts-Tab-Invest', flow: '06-Money-Flow' };
const steps = { name: '01-02-Welcome-Name-Typed', create: '01-04-Create-PIN', confirm: '01-05-Confirm-PIN' };
const fades = new Set(['txn', 'accounts', 'flow']);
// The app's own screens show Rainbow on the light theme and Yellow after dark (site 2.25.29). The
// first-launch steps the same since site 2.26.0: from app 2.3.0 a new install on the light theme
// opens in Rainbow (2.25.29 kept them Yellow, as a new install then started).
const look = t => t === 'light' ? 'light-rainbow' : 'dark-yellow';
const jobs = [];
for (const [k, s] of Object.entries(scenes)) for (const t of ['light', 'dark']) for (const bn of [false, true])
  jobs.push([`app-${k}-${t}${bn ? '-bn' : ''}.webp`, `${s}${bn ? '-bn' : ''}-${look(t)}.png`, `${s}-${look(t)}.png`, fades.has(k)]);
for (const [k, s] of Object.entries(steps)) for (const t of ['light', 'dark']) for (const bn of [false, true])
  jobs.push([`step4-${k}-${t}${bn ? '-bn' : ''}.webp`, `${s}${bn ? '-bn' : ''}-${look(t)}.png`, `${s}-${look(t)}.png`]);
const html = path.join(out, 'job.html');
for (const [name, want, fallback, fade] of jobs) {
  if (!fs.existsSync(path.join(src, fallback))) { console.log(name, 'MISSING', fallback); continue; }
  let f = path.join(src, want), copy = false;
  if (!fs.existsSync(f)) { f = path.join(src, fallback); copy = true; }
  const b64 = fs.readFileSync(f).toString('base64');
  fs.writeFileSync(html, `<img id=i src="data:image/png;base64,${b64}"><pre id=o></pre><script>
addEventListener('load',()=>{const c=document.createElement('canvas');c.width=780;c.height=1736;const x=c.getContext('2d');
x.imageSmoothingQuality='high';const T=24,B=12,h=1736-T-B,w=Math.round(h*i.naturalWidth/i.naturalHeight),l=Math.round((780-w)/2);
const p=document.createElement('canvas');p.width=i.naturalWidth;p.height=i.naturalHeight;const q=p.getContext('2d');q.drawImage(i,0,0);
const top=q.getImageData(2,2,1,1).data,bot=q.getImageData(2,i.naturalHeight-3,1,1).data;
x.fillStyle='rgb('+top[0]+','+top[1]+','+top[2]+')';x.fillRect(0,0,780,1736);
x.fillStyle='rgb('+bot[0]+','+bot[1]+','+bot[2]+')';x.fillRect(l,1736-B-40,w,B+40);
x.drawImage(i,l,T,w,h);
const W=i.naturalWidth,H=i.naturalHeight,last=q.getImageData(0,H-1,W,1).data,above=q.getImageData(W>>1,H-8,1,1).data;
let line=above[0]!==last[0]||above[1]!==last[1]||above[2]!==last[2];
for(let n=4;line&&n<last.length;n+=4)if(last[n]!==last[0]||last[n+1]!==last[1]||last[n+2]!==last[2])line=false;
if(line){const y=T+Math.floor(h*(H-8)/H);x.imageSmoothingEnabled=false;x.drawImage(p,0,H-8,W,1,l,y,w,1736-y);}
if(${fade}){const F=140,y=1736-B-F,c0='rgba('+bot[0]+','+bot[1]+','+bot[2]+',';const g=x.createLinearGradient(0,y,0,1736-B);g.addColorStop(0,c0+'0)');g.addColorStop(1,c0+'1)');x.fillStyle=g;x.fillRect(0,y,780,F);}
o.textContent='@@'+c.toDataURL('image/webp',0.9)+'@@';});</script>`);
  const dom = execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--virtual-time-budget=5000', '--dump-dom', 'file:///' + html.split(path.sep).join('/')],
    { encoding: 'utf8', maxBuffer: 64 << 20 });
  const m = dom.match(/@@data:image\/webp;base64,([^@]+)@@/);
  if (!m) throw new Error('no webp for ' + name);
  fs.writeFileSync(path.join(out, name), Buffer.from(m[1], 'base64'));
  console.log(name, fs.statSync(path.join(out, name)).size, copy ? '(English copy)' : '');
}
if (fs.existsSync(html)) fs.unlinkSync(html);
