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
  // data-s-rich: the same, but **marked** words come out bold -- the names of buttons the
  // reader is about to see on their phone. Built as text nodes and <b> elements, never
  // as HTML, so nothing in the catalogue can become markup by accident.
  document.querySelectorAll('[data-s-rich]').forEach(el => {
    const pair = S[el.dataset.sRich];
    if (!pair) return;
    el.replaceChildren(...pair[i].split('**').map((part, n) => {
      if (n % 2 === 0) return document.createTextNode(part);
      const b = document.createElement('b'); b.textContent = part; return b;
    }));
  });
  // A control whose face is a glyph still needs words for a screen reader; data-s-label
  // puts them in aria-label instead of in the text, and in the same language.
  document.querySelectorAll('[data-s-label]').forEach(el => {
    const pair = S[el.dataset.sLabel];
    if (pair) el.setAttribute('aria-label', pair[i]);
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
    set('[data-rel="hashTitle"], [data-rel="hashTitleShort"]', 'SHA-256');
    document.querySelectorAll('[data-copy]').forEach(b => { b.hidden = true; });
    return;
  }

  const f = fill(release.version);
  set('#dl-meta, [data-rel="line"]', f(S.versionLine[i]));
  set('[data-rel="lineShort"]', f(S.versionLineShort[i]));
  set('[data-rel="title"]', f(S.relTitle[i]));
  if (release.size) set('[data-rel="size"]', fmtSize(release.size));
  if (release.sha) set('#dl-hash, [data-rel="sha"]', release.sha);
  else set('[data-rel="sha"]', S.relHashWait[i]);
  set('[data-rel="hashTitle"]', f(S.hashTitle[i]));
  set('[data-rel="hashTitleShort"]', 'SHA-256 · ' + release.version);
  // Copy is offered only once there is a fingerprint to copy.
  document.querySelectorAll('[data-copy]').forEach(b => { b.hidden = !release.sha; });
}

/* -- copying the fingerprint --------------------------------------------------
 *
 * Sixty-four characters are not typed by hand into a checksum app. The button copies the
 * fingerprint and says so for two seconds, then goes back to saying Copy.
 */
function setupCopy() {
  document.querySelectorAll('[data-copy]').forEach(btn => btn.addEventListener('click', async () => {
    const src = document.querySelector(btn.dataset.copy);
    if (!src || !release || !release.sha) return;
    const label = btn.querySelector('[data-s]');
    try { await navigator.clipboard.writeText(release.sha); } catch (_) { return; }
    const i = LANGS[currentLang()];
    label.textContent = S.hashCopied[i];
    btn.classList.add('is-done');
    setTimeout(() => { label.textContent = S.hashCopy[LANGS[currentLang()]]; btn.classList.remove('is-done'); }, 2000);
  }));
}

/* -- a step's pictures, one at a time on a phone -------------------------------
 *
 * On a wide screen every picture of a step sits side by side and this does nothing. On a
 * phone the row becomes a strip that scrolls sideways a picture at a time, and the Prev
 * and Next buttons under it move it; the dots and the count follow the strip however it
 * was moved -- by the buttons or by the reader's thumb.
 */
function setupGalleries() {
  document.querySelectorAll('[data-gal]').forEach(gal => {
    const track = gal.querySelector('.gal-track');
    const items = [...track.children];
    const prev = gal.querySelector('.gal-prev');
    const next = gal.querySelector('.gal-next');
    const dots = [...gal.querySelectorAll('.gal-dot')];
    const count = gal.querySelector('.gal-count');
    const at = () => Math.round(track.scrollLeft / Math.max(1, track.clientWidth));
    const nav = gal.querySelector('.gal-nav');
    function paint() {
      const n = Math.min(items.length - 1, Math.max(0, at()));
      // One at a time, the strip takes the height of the picture in view -- otherwise a
      // short dialog sits above a gap the height of the tallest phone. Side by side, it
      // is left to size itself.
      const single = nav && getComputedStyle(nav).display !== 'none';
      track.style.height = single ? items[n].offsetHeight + 'px' : '';
      dots.forEach((d, k) => d.classList.toggle('on', k === n));
      if (count) count.textContent = (n + 1) + ' / ' + items.length;
      if (prev) prev.disabled = n === 0;
      if (next) next.disabled = n === items.length - 1;
    }
    const go = (d) => track.scrollTo({ left: (at() + d) * track.clientWidth, behavior: 'smooth' });
    if (prev) prev.addEventListener('click', () => go(-1));
    if (next) next.addEventListener('click', () => go(1));
    track.addEventListener('scroll', () => requestAnimationFrame(paint), { passive: true });
    window.addEventListener('resize', paint);
    paint();
  });
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

/* -- the screenshots, full size ------------------------------------------------
 *
 * On the features page a screenshot is 170 pixels wide, which shows that a screen exists
 * and not what is on it. Pressing one opens it at the height of the window in a <dialog>,
 * which brings Escape, focus trapping and the dimmed page behind for nothing.
 *
 * The picture is whichever of the pair the page is showing -- light or dark, by the
 * theme -- read off the frame at the moment it opens, so the big one is always the one
 * the reader just pressed. Arrows, the arrow keys and a swipe step through the six.
 */
function setupLightbox() {
  const box = document.getElementById('lightbox');
  if (!box || typeof box.showModal !== 'function') return;
  const frames = [...document.querySelectorAll('.zoom')];
  const img = document.getElementById('lb-img');
  const cap = document.getElementById('lb-cap');
  const count = document.getElementById('lb-count');
  let at = 0;

  const shown = (frame) =>
    [...frame.querySelectorAll('img')].find(im => getComputedStyle(im).display !== 'none')
    || frame.querySelector('img');

  function show(n) {
    at = (n + frames.length) % frames.length;
    const frame = frames[at];
    img.src = shown(frame).currentSrc || shown(frame).src;
    cap.textContent = frame.closest('figure').querySelector('figcaption').textContent;
    count.textContent = (at + 1) + ' / ' + frames.length;
  }
  function close() { box.close(); }

  frames.forEach((frame, n) => frame.addEventListener('click', () => {
    show(n);
    document.documentElement.classList.add('lb-open');
    box.showModal();
  }));
  box.addEventListener('close', () => {
    document.documentElement.classList.remove('lb-open');
    frames[at].focus();
  });
  box.querySelector('.lb-close').addEventListener('click', close);
  box.querySelector('.lb-prev').addEventListener('click', () => show(at - 1));
  box.querySelector('.lb-next').addEventListener('click', () => show(at + 1));
  // A click on the dimmed space around the picture closes it; one on the picture or a
  // button does not.
  box.addEventListener('click', e => { if (e.target === box || e.target.classList.contains('lb-figure')) close(); });
  box.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft') show(at - 1);
    else if (e.key === 'ArrowRight') show(at + 1);
  });

  // A sideways swipe of more than 50 pixels steps; anything shorter is a tap or a wobble.
  let x0 = null;
  box.addEventListener('touchstart', e => { x0 = e.touches[0].clientX; }, { passive: true });
  box.addEventListener('touchend', e => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    x0 = null;
    if (Math.abs(dx) > 50) show(at + (dx < 0 ? 1 : -1));
  });
}

/* -- the privacy page's list of sections ---------------------------------------
 *
 * Marks the section the reader is in. "In" is the last section whose top has passed a
 * line a third of the way down the window -- so the mark moves as a heading comes up to
 * reading height, not when it first peeks in at the bottom. At the very end of the page
 * the last section is marked even if it is too short to reach that line.
 *
 * Except when the reader chose one. The last two sections are short, so on a window a
 * thousand pixels tall, jumping to "What it asks for" lands at the bottom of the page --
 * and the end-of-page rule marked "Getting rid of it all", the one they had not pressed.
 * So a pressed link, or a #section in the address, stays marked until the reader moves
 * the page themselves: a wheel, a touch, or a key.
 */
function setupToc() {
  const links = [...document.querySelectorAll('.priv-toc a')];
  if (!links.length) return;
  const secs = links.map(a => document.querySelector(a.getAttribute('href')));
  let chosen = links.findIndex(a => a.getAttribute('href') === location.hash);
  function paint() {
    let n = chosen;
    if (n < 0) {
      const line = window.innerHeight / 3;
      n = 0;
      secs.forEach((s, k) => { if (s && s.getBoundingClientRect().top <= line) n = k; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) n = secs.length - 1;
    }
    links.forEach((a, k) => a.classList.toggle('on', k === n));
  }
  links.forEach((a, k) => a.addEventListener('click', () => { chosen = k; paint(); }));
  const release = () => { if (chosen >= 0) { chosen = -1; paint(); } };
  ['wheel', 'touchstart', 'keydown'].forEach(t => window.addEventListener(t, release, { passive: true }));
  window.addEventListener('scroll', () => requestAnimationFrame(paint), { passive: true });
  window.addEventListener('resize', paint);
  paint();
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
  setupLightbox();
  setupGalleries();
  setupCopy();
  setupToc();

  releaseReady = loadRelease();
});
