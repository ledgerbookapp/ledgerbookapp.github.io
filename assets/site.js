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
  const saved = localStorage.getItem('lb.lang');
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

function fmtSize(bytes) {
  if (!bytes) return '';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function renderRelease() {
  const i = LANGS[currentLang()];
  const btn = document.getElementById('dl');
  const meta = document.getElementById('dl-meta');
  const hash = document.getElementById('dl-hash');
  if (!btn) return;

  if (!release) {
    // No answer yet, or none coming. The button still works; it just cannot say which
    // version it is about.
    btn.textContent = S.downloadAlt[i];
    btn.href = RELEASES_URL;
    btn.removeAttribute('aria-disabled');
    if (meta) meta.textContent = '';
    return;
  }

  btn.textContent = S.download[i];
  btn.href = release.url;
  if (meta) {
    meta.textContent = S.versionLine[i]
      .replace('{v}', release.version)
      .replace('{size}', fmtSize(release.size));
  }
  if (hash && release.sha) hash.textContent = release.sha;
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

  loadRelease();
});
