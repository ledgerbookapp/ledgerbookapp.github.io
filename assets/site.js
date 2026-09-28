/*
 * Two jobs: choose the language, and point the download button at the newest release.
 *
 * Both are written so the page is useful before either finishes. The words ship in the
 * HTML already, and the download button starts as a link to the releases page -- so a
 * reader on a slow connection, or one whose browser blocks the API call, still gets a
 * page they can read and a file they can fetch.
 */

/* -- language ------------------------------------------------------------------
 *
 * Index 0 is English, 1 is Bangla, matching the order in strings.js.
 *
 * The first visit guesses from the browser and the guess is remembered after that. A
 * reader who switched to Bangla once did so on purpose, and having to switch again on
 * every page is the kind of small rudeness that makes a site feel careless.
 */
const LANGS = { en: 0, bn: 1 };

function currentLang() {
  // Reading can throw as well as writing: a browser set to block site data raises
  // SecurityError on the first touch of localStorage. The writes below were already
  // guarded; unguarded here, the same error would stop the whole start-up -- language,
  // menu, and the release lookup -- since everything runs from one handler.
  let saved = null;
  try { saved = localStorage.getItem('lb.lang'); } catch (_) { /* storage blocked */ }
  if (saved && saved in LANGS) return saved;
  return (navigator.language || '').toLowerCase().startsWith('bn') ? 'bn' : 'en';
}

function applyLang(lang) {
  const i = LANGS[lang];
  document.documentElement.lang = lang;
  document.body.dataset.lang = lang;

  document.querySelectorAll('[data-s]').forEach(el => {
    const pair = S[el.dataset.s];
    if (pair) el.textContent = pair[i];
  });

  // The switch offers the other language, not the current one -- a button labelled with
  // what you are already reading tells you nothing about what pressing it does.
  const btn = document.getElementById('lang');
  if (btn) {
    btn.textContent = S.langLabel[i];
    btn.setAttribute('aria-label', i === 0 ? 'বাংলায় দেখুন' : 'Read in English');
  }

  try { localStorage.setItem('lb.lang', lang); } catch (_) { /* private window */ }
  renderRelease();
  labelTheme();
  labelMenu();
}

/* -- the theme -----------------------------------------------------------------
 *
 * Three states, not two: light, dark, and the one most readers are in -- no choice made,
 * follow the phone. The attribute is only written once somebody presses the button, so a
 * reader who never touches it keeps tracking their system if they change it later.
 *
 * A head script has already applied any stored choice before first paint; this only
 * handles the press and keeps the button's label honest.
 */
function systemTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark' : 'light';
}

function activeTheme() {
  const set = document.documentElement.dataset.theme;
  return set === 'dark' || set === 'light' ? set : systemTheme();
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem('lb.theme', theme); } catch (_) { /* private window */ }
  labelTheme();
}

function labelTheme() {
  const btn = document.getElementById('theme');
  if (!btn) return;
  // Names the theme it would switch TO, which is what the glyph shows.
  const i = LANGS[currentLang()];
  const next = activeTheme() === 'dark' ? 'light' : 'dark';
  btn.setAttribute('aria-label', S[next === 'dark' ? 'toDark' : 'toLight'][i]);
}

/* -- the release ---------------------------------------------------------------
 *
 * Read from GitHub rather than written into the page, so cutting a release updates the
 * site by itself. The repository name is the same constant the app is built with; the
 * two must agree or the site offers a file no phone will ever be told about.
 */
const REPO = 'oslraahat/ledgerbook-releases';
const RELEASES_URL = 'https://github.com/' + REPO + '/releases';

let release = null;
// Settles once the lookup has answered or given up, whichever. get.html waits on it to
// know where to send the reader; nothing else needs to.
let releaseReady = Promise.resolve();

function fmtSize(bytes) {
  if (!bytes) return '';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

/*
 * The home page names the release in six places -- the header pill, two download buttons,
 * two version lines, the stat and the release card -- so they are found by attribute
 * rather than by id, and one answer fills them all:
 *
 *   data-dl            a link that becomes the file, or stays the releases page.
 *   data-dl-label      inside one: its words, which say which of those two it is.
 *   data-rel="..."     line / lineShort / title / size / sha -- one fact each.
 *
 * The ids the install and features pages use (dl, dl-meta, dl-hash) still work, and mean
 * the same as data-dl, data-rel="line" and data-rel="sha" did before there were several.
 */
function renderRelease() {
  const i = LANGS[currentLang()];
  const fill = (v) => (s) => s.replace('{v}', v).replace('{size}', fmtSize(release.size));

  document.querySelectorAll('#dl, [data-dl]').forEach(a => {
    a.href = release ? release.url : RELEASES_URL;
    a.removeAttribute('aria-disabled');
  });
  // The words say which of the two the link is. A button that says "Download" and opens
  // a web page would be a small lie; the header pill's single word is true either way.
  const label = release ? S.download[i] : S.downloadAlt[i];
  const dl = document.getElementById('dl');
  if (dl && !dl.querySelector('[data-dl-label]')) dl.textContent = label;
  document.querySelectorAll('[data-dl-label]').forEach(el => { el.textContent = label; });

  const set = (sel, text) => document.querySelectorAll(sel).forEach(el => { el.textContent = text; });

  if (!release) {
    // No answer yet, or none coming. Every link still works; the lines that would name a
    // version say only what is true without one.
    set('#dl-meta, [data-rel="line"]', '');
    set('[data-rel="lineShort"]', '');
    set('[data-rel="title"]', S.relLatest[i]);
    set('[data-rel="sha"]', S.relHashWait[i]);
    return;
  }

  const f = fill(release.version);
  set('#dl-meta, [data-rel="line"]', f(S.versionLine[i]));
  set('[data-rel="lineShort"]', f(S.versionLineShort[i]));
  set('[data-rel="title"]', f(S.relTitle[i]));
  if (release.size) set('[data-rel="size"]', fmtSize(release.size));
  if (release.sha) set('#dl-hash, [data-rel="sha"]', release.sha);
  else set('[data-rel="sha"]', S.relHashWait[i]);
}

/* -- the menu ------------------------------------------------------------------
 *
 * Below the width where the four links fit beside the name, they fold behind one button.
 * The links are in the HTML either way, so without script a narrow reader still gets
 * them -- the stylesheet only hides them once this has run and can bring them back.
 */
function labelMenu() {
  const btn = document.getElementById('menu');
  if (!btn) return;
  const open = document.body.classList.contains('menu-open');
  btn.setAttribute('aria-expanded', String(open));
  btn.setAttribute('aria-label', S[open ? 'menuClose' : 'menuOpen'][LANGS[currentLang()]]);
}

function setMenu(open) {
  document.body.classList.toggle('menu-open', open);
  labelMenu();
}

async function loadRelease() {
  try {
    const r = await fetch('https://api.github.com/repos/' + REPO + '/releases/latest',
      { headers: { Accept: 'application/vnd.github+json' } });
    if (!r.ok) return;
    const j = await r.json();
    const apk = (j.assets || []).find(a => a.name.endsWith('.apk'));
    if (!apk) return;

    // The fingerprint is published in the body of the release, which is also what the
    // app reads to check its own download. Taken from there rather than from the .sha256
    // asset so the site needs one request, not two.
    const m = (j.body || '').match(/SHA-?256:\s*`?([0-9a-fA-F]{64})`?/);

    release = {
      version: (j.tag_name || '').replace(/^v/, ''),
      url: apk.browser_download_url,
      size: apk.size,
      sha: m ? m[1] : null
    };
    renderRelease();
  } catch (_) {
    // Offline, rate limited, or blocked. renderRelease has already left a working link.
  }
}

/* -- go ------------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang());
  const btn = document.getElementById('lang');
  if (btn) btn.addEventListener('click', () => {
    applyLang(currentLang() === 'en' ? 'bn' : 'en');
  });
  const th = document.getElementById('theme');
  if (th) th.addEventListener('click', () => {
    applyTheme(activeTheme() === 'dark' ? 'light' : 'dark');
  });
  labelTheme();

  const menu = document.getElementById('menu');
  if (menu) menu.addEventListener('click', () => {
    setMenu(!document.body.classList.contains('menu-open'));
  });
  // Choosing a link, pressing Escape, or widening past the fold all put it away again.
  document.querySelectorAll('header nav a').forEach(a =>
    a.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });
  window.matchMedia('(min-width: 880px)').addEventListener('change', e => {
    if (e.matches) setMenu(false);
  });
  labelMenu();

  releaseReady = loadRelease();
});
