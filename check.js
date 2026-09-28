/*
 * Run `node check.js` from this folder before publishing.
 *
 * The site is four static pages with no build step, which is the right shape for four
 * pages -- but it means the header is written out four times, and a thing written four
 * times drifts. This is the same bargain the app makes with StringCatalogueTest: keep the
 * duplication where it is readable, and let a script be the one that notices.
 *
 * Each check below is here because the mistake it catches has already happened once, in
 * this site or in the app it is about:
 *
 *   header drift   -- a link added to one page and not the other three.
 *   missing string -- a data-s written into HTML with no pair in the catalogue, which
 *                     renders as whatever placeholder the HTML happened to hold.
 *   half a pair    -- an English string with no Bangla, which silently shows English to
 *                     a reader who asked for Bangla.
 *   duplicate      -- two keys with the same English. The app's own catalogue grew one of
 *                     these three separate times.
 *   missing asset  -- an <img> or icon pointing at a file that is not there.
 */
const fs = require('fs');
const path = require('path');

const PAGES = ['index.html', 'features.html', 'install.html', 'privacy.html'];
const problems = [];
const note = (m) => problems.push(m);

// -- the catalogue --------------------------------------------------------------
const S = (() => {
  const src = fs.readFileSync('assets/strings.js', 'utf8').replace(/^const S =/m, 'globalThis.S =');
  eval(src);
  return globalThis.S;
})();

for (const [k, v] of Object.entries(S)) {
  if (!Array.isArray(v) || v.length !== 2) note(`strings: ${k} is not a pair`);
  else if (!v[0] || !v[1]) note(`strings: ${k} is missing the ${v[0] ? 'Bangla' : 'English'} half`);
}

const english = new Map();
for (const [k, v] of Object.entries(S)) {
  if (!Array.isArray(v) || !v[0]) continue;
  if (english.has(v[0])) note(`strings: ${k} repeats ${english.get(v[0])} -- "${v[0].slice(0, 46)}"`);
  else english.set(v[0], k);
}

// -- the pages ------------------------------------------------------------------
const headers = new Map();

for (const page of PAGES) {
  if (!fs.existsSync(page)) { note(`missing page: ${page}`); continue; }
  const html = fs.readFileSync(page, 'utf8');

  for (const m of html.matchAll(/data-s(-label)?="([^"]+)"/g))
    if (!S[m[2]]) note(`${page}: data-s${m[1] || ''}="${m[2]}" has no entry in the catalogue`);

  for (const m of html.matchAll(/(?:src|href)="((?:assets)\/[^"]+)"/g))
    if (!fs.existsSync(m[1])) note(`${page}: ${m[1]} is referenced but not on disk`);

  // Every <img> carries its own size so the page does not jump as pictures arrive.
  for (const m of html.matchAll(/<img\b[^>]*>/g))
    if (!/width="\d+"/.test(m[0]) || !/height="\d+"/.test(m[0]))
      note(`${page}: an <img> has no width/height -- ${m[0].slice(0, 60)}`);

  for (const need of ['assets/site.css', 'assets/strings.js', 'assets/site.js'])
    if (!html.includes(need)) note(`${page}: does not load ${need}`);

  // aria-current is the one thing a header is *supposed* to differ by, so take it out
  // before comparing. Anything else that differs is drift.
  const header = html.match(/<header>[\s\S]*?<\/header>/);
  if (!header) note(`${page}: has no <header>`);
  else headers.set(page, header[0].replace(/ aria-current="page"/g, ''));

  const current = [...html.matchAll(/aria-current="page"/g)].length;
  if (current !== 1) note(`${page}: marks ${current} nav links as the current page, want 1`);
}

const [first, ...rest] = [...headers.keys()];
for (const page of rest)
  if (headers.get(page) !== headers.get(first))
    note(`${page}: its header has drifted from ${first}'s`);

// -- the SVGs -------------------------------------------------------------------
// An SVG file is XML, and XML forbids "--" inside a comment. A browser that meets one
// refuses the whole file, silently: logo.svg carried an explanatory comment with a
// dash pair in it, and for as long as it did every tab fell back to the PNG icon.
for (const f of fs.readdirSync('assets').filter(n => n.endsWith('.svg')))
  for (const m of fs.readFileSync('assets/' + f, 'utf8').matchAll(/<!--([\s\S]*?)-->/g))
    if (m[1].includes('--')) note(`assets/${f}: a comment contains "--", which makes the file invalid XML`);

// -- what the script reaches for ------------------------------------------------
const js = fs.readFileSync('assets/site.js', 'utf8');
for (const m of js.matchAll(/\bS\.([A-Za-z][A-Za-z0-9]*)/g))
  if (!S[m[1]]) note(`site.js: reads S.${m[1]}, which the catalogue does not have`);

// -- say so ---------------------------------------------------------------------
if (problems.length) {
  for (const p of problems) console.error('  ' + p);
  console.error(`\n${problems.length} problem${problems.length > 1 ? 's' : ''}.`);
  process.exit(1);
}
console.log(`${PAGES.length} pages, ${Object.keys(S).length} strings, nothing to report.`);
