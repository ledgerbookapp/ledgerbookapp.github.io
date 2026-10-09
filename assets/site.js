/*
 * Two jobs: choose the language, and point the download button at the newest release.
 *
 * Both are written so the page is useful before either finishes. The words ship in the
 * HTML already, and the download button starts as a link to the releases page -- so a
 * reader on a slow connection, or one whose browser blocks the API call, still gets a
 * page they can read and a file they can fetch.
 */

// The stylesheet folds the narrow-screen links behind the menu button only under the
// `js` class. The page's head sets it before first paint, so a phone never shows the
// links unfolded and then folds them; and at load it takes the class off again unless
// this flag says the file that wires the button has run -- so a site.js that never
// arrived leaves the links in view, not behind a button that does nothing.
window.LB_READY = true;
document.documentElement.classList.add('js');

/* -- language ------------------------------------------------------------------
 *
 * Index 0 is English, 1 is Bangla, matching the order in strings.js.
 *
 * The first visit guesses from the browser and the guess is remembered after that. A
 * reader who switched to Bangla once did so on purpose, and having to switch again on
 * every page is the kind of small rudeness that makes a site feel careless.
 */
/*
 * The website's own version, shown in every footer. Raised on every publish: the last
 * number for a fix to what is there, the middle one for a new page, section or feature.
 * The app's version is a separate thing and comes from the releases API.
 */
const SITE_VERSION = '2.14.3';

const LANGS = { en: 0, bn: 1 };
// The language actually on the page. Where storage is blocked the saved choice cannot
// be read back, and falling through to the browser's guess every time left the switch
// stuck -- pressing it asked for the same language again -- and Bangla sentences with
// Latin digits in them.
let appliedLang = null;

function currentLang() {
  // Reading can throw as well as writing: a browser set to block site data raises
  // SecurityError on the first touch of localStorage. The writes below were already
  // guarded; unguarded here, the same error would stop the whole start-up -- language,
  // menu, and the release lookup -- since everything runs from one handler.
  let saved = null;
  try { saved = localStorage.getItem('lb.lang'); } catch (_) { /* storage blocked */ }
  if (saved && saved in LANGS) return saved;
  if (appliedLang) return appliedLang;
  return (navigator.language || '').toLowerCase().startsWith('bn') ? 'bn' : 'en';
}

function applyLang(lang) {
  appliedLang = lang;
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
  // Pictures of the app's own screens come in both languages, as the app does: data-bn
  // names the Bangla one, and the English src is kept to switch back to. The phone's own
  // dialogs -- Chrome, Play Protect -- have none; they are in whatever language the
  // reader's phone is, and the Bangla text names their buttons in English to match.
  document.querySelectorAll('img[data-bn]').forEach(img => {
    if (!img.dataset.en) img.dataset.en = img.getAttribute('src');
    const want = lang === 'bn' ? img.dataset.bn : img.dataset.en;
    if (img.getAttribute('src') !== want) img.setAttribute('src', want);
  });
  document.querySelectorAll('[data-site-version]').forEach(el => {
    el.textContent = S.siteVersion[i].replace('{v}', num(SITE_VERSION));
  });
  // Figures written straight into the HTML -- the home page's 0 / 2 / 3, the section and
  // step badges, the install page's contents -- follow the language like every number the
  // script writes. The page's own digits are kept as the source to switch back from.
  document.querySelectorAll('.num-big:not([data-rel]), .num-badge, .toc-n').forEach(el => {
    if (el.dataset.n === undefined) el.dataset.n = el.textContent;
    el.textContent = num(el.dataset.n);
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
  repaintGalleries();
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

// With no theme chosen the page follows the phone, which can change while the page is
// open (a sunset schedule); the button's spoken label follows it too.
if (window.matchMedia) {
  const mq = window.matchMedia('(prefers-color-scheme: dark)');
  const relabel = () => labelTheme();
  if (mq.addEventListener) mq.addEventListener('change', relabel);
  else if (mq.addListener) mq.addListener(relabel);
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

// Bangla text writes its numbers in Bangla digits -- the catalogue's own "৬.০" -- so a
// number the script puts into a Bangla sentence is written the same way.
function num(s) {
  s = String(s);
  return (appliedLang || currentLang()) === 'bn' ? s.replace(/[0-9]/g, d => '০১২৩৪৫৬৭৮৯'[d]) : s;
}

// Decimal megabytes, as Chrome's own download prompt counts them: the same file there is
// "2.69 MB", and dividing by 1024 twice here made it "2.6 MB" on the page beside it.
function fmtSize(bytes) {
  if (!bytes) return '';
  return num((bytes / 1e6).toFixed(1)) + ' MB';
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
  const fill = (v) => (s) => s.replace('{v}', num(v)).replace('{size}', fmtSize(release.size));

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
    // A size written into the page would be a guess about a file nobody has looked up --
    // and was already a different guess from the install guide's. A dash says "unknown".
    set('[data-rel="size"]', '—');
    set('[data-rel="cap3"]', S.cap3Plain[i]);
    document.querySelectorAll('[data-copy]').forEach(b => { b.hidden = true; });
    return;
  }

  const f = fill(release.version);
  set('#dl-meta, [data-rel="line"]', f(S.versionLine[i]));
  set('[data-rel="lineShort"]', f(S.versionLineShort[i]));
  set('[data-rel="title"]', f(S.relTitle[i]));
  set('[data-rel="size"]', release.size ? fmtSize(release.size) : '—');
  set('[data-rel="cap3"]', release.size ? f(S.cap3[i]) : S.cap3Plain[i]);
  if (release.sha) set('#dl-hash, [data-rel="sha"]', release.sha);
  else set('[data-rel="sha"]', S.relHashWait[i]);
  set('[data-rel="hashTitle"]', f(S.hashTitle[i]));
  set('[data-rel="hashTitleShort"]', 'SHA-256 · ' + num(release.version));
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
 *
 * The strip's height is measured, so it is measured again whenever a picture's height
 * can change underneath it: a caption rewrapping in the other language, or the web font
 * arriving after the first measure. Once only, it clipped the caption that grew.
 */
const galleryPaints = [];
function repaintGalleries() { galleryPaints.forEach(p => p()); }

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
      if (count) count.textContent = num(n + 1) + ' / ' + num(items.length);
      if (prev) prev.disabled = n === 0;
      if (next) next.disabled = n === items.length - 1;
    }
    const go = (d) => track.scrollTo({ left: (at() + d) * track.clientWidth, behavior: 'smooth' });
    if (prev) prev.addEventListener('click', () => go(-1));
    if (next) next.addEventListener('click', () => go(1));
    track.addEventListener('scroll', () => requestAnimationFrame(paint), { passive: true });
    window.addEventListener('resize', paint);
    if (typeof ResizeObserver === 'function') {
      const ro = new ResizeObserver(() => requestAnimationFrame(paint));
      items.forEach(it => ro.observe(it));
    }
    galleryPaints.push(paint);
    paint();
  });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(repaintGalleries);
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

/*
 * The API allows sixty unsigned requests an hour from one address, and a household, an
 * office or a phone carrier's shared address can spend that before lunch -- after which
 * every version line on the site was blank. So the last answer is kept in the browser and
 * shown at once, then replaced if a fresh one arrives. A week old at most: a release is
 * rarely older than that before the next, and a stale number is worse than none.
 */
const RELEASE_KEY = 'lb.release';
const RELEASE_MAX_AGE = 7 * 24 * 3600 * 1000;

function restoreRelease() {
  try {
    const kept = JSON.parse(localStorage.getItem(RELEASE_KEY) || 'null');
    if (kept && kept.at && Date.now() - kept.at < RELEASE_MAX_AGE && kept.release && kept.release.url) {
      release = kept.release;
      renderRelease();
    }
  } catch (_) { /* storage blocked or garbled: just wait for the API */ }
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
    try { localStorage.setItem(RELEASE_KEY, JSON.stringify({ at: Date.now(), release })); } catch (_) { /* private window */ }
    renderRelease();
  } catch (_) {
    // Offline, rate limited, or blocked. renderRelease has already left a working link.
  }
}

/* -- after the download starts --------------------------------------------------
 *
 * Once a download starts it belongs to the browser, and no page can see how far it has
 * got. What a reader can be told is what is about to happen: near the end Chrome holds a
 * new APK back for a few seconds while it checks the file with Google, and that pause,
 * unexplained, reads as a download that has stuck. So a note says so, the moment the
 * file is asked for -- from any download button, and on get.html for the QR code.
 *
 * Android only: that is where the file is going to be opened, and a computer's browser
 * shows its own download bar.
 */
const ON_ANDROID = /Android/i.test(navigator.userAgent);
const ICON = (d) => '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + d + '</svg>';

function showDownloadNote() {
  if (!ON_ANDROID) return;
  let note = document.querySelector('.dl-note');
  if (!note) {
    note = document.createElement('aside');
    note.className = 'dl-note';
    note.setAttribute('role', 'status');
    // Built from fixed markup; every word goes in afterwards through the catalogue.
    note.innerHTML =
      '<button type="button" class="dl-note-x" data-s-label="lbClose">' +
        ICON('<path d="M6 6l12 12M18 6 6 18"/>') + '</button>' +
      '<ol>' +
        '<li class="dl-done">' + ICON('<path d="M12 4v11"/><path d="m7 10 5 5 5-5"/><path d="M5 20h14"/>') + '<span data-s-rich="dlNoteStarted"></span></li>' +
        '<li class="dl-wait">' + ICON('<path d="M12 3a9 9 0 1 0 9 9"/>') + '<span data-s="dlNoteCheck"></span></li>' +
        '<li class="dl-next">' + ICON('<path d="M5 12h14M13 6l6 6-6 6"/>') + '<span data-s-rich="dlNoteOpen"></span></li>' +
      '</ol>' +
      // Not on the install guide itself -- found by its steps, since GitHub Pages serves
      // the page at /install as well as /install.html.
      (document.querySelector('.inst-steps') ? '' :
        '<a class="dl-note-guide" href="install.html" data-s="dlNoteGuide"></a>');
    note.querySelector('.dl-note-x').addEventListener('click', () => note.remove());
    document.addEventListener('keydown', e => { if (e.key === 'Escape') note.remove(); });
    document.body.append(note);
    applyLang(currentLang());
  }
  // Pressed again: bring it back into view rather than stacking a second one.
  note.classList.remove('dl-note-in');
  void note.offsetWidth;
  note.classList.add('dl-note-in');
}

// Only a link that is the file itself: one still pointing at the releases page opens a
// web page, and the note would describe a download that is not happening.
document.addEventListener('click', e => {
  const a = e.target.closest && e.target.closest('#dl, [data-dl]');
  if (a && release && a.href === release.url) showDownloadNote();
});

/* -- the screenshots, full size ------------------------------------------------
 *
 * A screenshot in a page is a few hundred pixels wide at most -- 170 on the features page
 * -- which shows that a screen exists and not what is on it. Every picture of the app or
 * of a phone dialog is a .zoom button; pressing one opens it at the height of the
 * window in a <dialog>,
 * which brings Escape, focus trapping and the dimmed page behind for nothing.
 *
 * The picture is whichever of the pair the page is showing -- light or dark, by the
 * theme -- read off the frame at the moment it opens, so the big one is always the one
 * the reader just pressed. Arrows, the arrow keys and a swipe step through every
 * picture on the page, in page order.
 */
// The dialog is built here rather than written into each page: every page with a
// pressable picture gets the same one, and a page without any gets none. Its buttons'
// words come from the catalogue through data-s-label, like everything else.
const LB_ICONS = {
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  prev: '<path d="m15 5-7 7 7 7"/>',
  next: '<path d="m9 5 7 7-7 7"/>'
};
function buildLightbox() {
  const box = document.createElement('dialog');
  box.className = 'lightbox';
  box.id = 'lightbox';
  box.setAttribute('aria-labelledby', 'lb-cap');
  const btn = (kind, key) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'lb-btn lb-' + kind;
    b.dataset.sLabel = key;
    b.innerHTML = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true">' + LB_ICONS[kind] + '</svg>';
    return b;
  };
  const fig = document.createElement('figure');
  fig.className = 'lb-figure';
  const img = document.createElement('img');
  img.id = 'lb-img';
  img.alt = '';
  const cap = document.createElement('figcaption');
  const text = document.createElement('span');
  text.id = 'lb-cap';
  const count = document.createElement('span');
  count.className = 'lb-count';
  count.id = 'lb-count';
  cap.append(text, ' ', count);
  fig.append(img, cap);
  box.append(btn('close', 'lbClose'), btn('prev', 'lbPrev'), fig, btn('next', 'lbNext'));
  document.body.append(box);
  return box;
}

function setupLightbox() {
  const frames = [...document.querySelectorAll('.zoom')];
  if (!frames.length) return;
  const probe = document.createElement('dialog');
  if (typeof probe.showModal !== 'function') return;
  const box = buildLightbox();
  const img = document.getElementById('lb-img');
  const cap = document.getElementById('lb-cap');
  const count = document.getElementById('lb-count');
  // Every one of these buttons is labelled "Enlarge"; what makes each one different is
  // the picture it opens, so each is described by its caption. The features page's six
  // were written that way by hand; the rest had nine buttons a screen reader could not
  // tell apart. A picture with no caption -- the big phone -- gets a hidden one from the
  // catalogue, which the language switch keeps up to date like any other data-s.
  frames.forEach((f, k) => {
    if (f.hasAttribute('aria-describedby')) return;
    let fc = f.closest('figure') && f.closest('figure').querySelector('figcaption');
    if (!fc && f.dataset.cap && S[f.dataset.cap]) {
      fc = document.createElement('span');
      fc.className = 'sr-only';
      fc.dataset.s = f.dataset.cap;
      fc.textContent = S[f.dataset.cap][LANGS[currentLang()]];
      f.append(fc);
    }
    if (!fc) return;
    if (!fc.id) fc.id = 'zoom-cap-' + k;
    f.setAttribute('aria-describedby', fc.id);
  });
  // The new buttons need their words, in whichever language is showing.
  box.querySelectorAll('[data-s-label]').forEach(el => {
    el.setAttribute('aria-label', S[el.dataset.sLabel][LANGS[currentLang()]]);
  });
  // A picture with no caption of its own -- the big phone beside "Seeing where it went"
  // -- names one from the catalogue.
  const caption = (frame) => {
    const fc = frame.closest('figure') && frame.closest('figure').querySelector('figcaption');
    if (fc) return fc.textContent;
    const key = frame.dataset.cap;
    return key && S[key] ? S[key][LANGS[currentLang()]] : '';
  };
  let at = 0;

  const shown = (frame) =>
    [...frame.querySelectorAll('img')].find(im => getComputedStyle(im).display !== 'none')
    || frame.querySelector('img');

  function show(n) {
    at = (n + frames.length) % frames.length;
    const frame = frames[at];
    img.src = shown(frame).currentSrc || shown(frame).src;
    cap.textContent = caption(frame);
    count.textContent = num(at + 1) + ' / ' + num(frames.length);
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
 * So a pressed link, or a #section in the address, stays marked until the page moves
 * away from where the jump left it -- by more than a line, and by any means: wheel,
 * thumb, keys, the scrollbar dragged, Back. Watching for particular gestures instead
 * missed the scrollbar and Back, and left the choice marked over a different section.
 *
 * The list only shows on a wide screen, so on a phone none of this measures anything.
 */
function setupToc() {
  const toc = document.querySelector('.priv-toc');
  const links = [...document.querySelectorAll('.priv-toc a')];
  if (!toc || !links.length) return;
  const secs = links.map(a => document.querySelector(a.getAttribute('href')));
  let chosen = -1;
  let settledAt = null;   // scrollY once the jump to `chosen` has landed
  let queued = false;

  // A #section counts as chosen only if the page is where a jump to it would leave it --
  // its heading under the header, or the page's very bottom when the section is too near
  // the end to rise that far. A reload that restores an older scroll position keeps the
  // hash but not the place, and is not a choice.
  function chooseFromHash() {
    const k = links.findIndex(a => a.getAttribute('href') === location.hash);
    if (k < 0 || !secs[k]) { choose(-1); return; }
    const margin = parseFloat(getComputedStyle(secs[k]).scrollMarginTop) || 0;
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    const want = Math.min(maxY, secs[k].getBoundingClientRect().top + window.scrollY - margin);
    choose(Math.abs(window.scrollY - want) <= 40 ? k : -1);
  }
  function choose(k) {
    chosen = k;
    settledAt = null;
    // Two frames: the browser finishes the jump in the first.
    requestAnimationFrame(() => requestAnimationFrame(() => { settledAt = window.scrollY; }));
    paint();
  }
  function paint() {
    queued = false;
    if (toc.offsetParent === null) return;   // hidden on this screen
    if (chosen >= 0 && settledAt !== null && Math.abs(window.scrollY - settledAt) > 40) chosen = -1;
    let n = chosen;
    if (n < 0) {
      const line = window.innerHeight / 3;
      n = 0;
      secs.forEach((s, k) => { if (s && s.getBoundingClientRect().top <= line) n = k; });
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) n = secs.length - 1;
    }
    links.forEach((a, k) => a.classList.toggle('on', k === n));
  }
  const schedule = () => { if (!queued) { queued = true; requestAnimationFrame(paint); } };
  links.forEach((a, k) => a.addEventListener('click', () => choose(k)));
  window.addEventListener('hashchange', chooseFromHash);
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  requestAnimationFrame(chooseFromHash);
  paint();
}

/* -- switching language without the page jumping -------------------------------
 *
 * The two languages are different lengths, so every paragraph above the reader grows or
 * shrinks when the language changes, and what they were reading slid away under them.
 * Before switching, note the paragraph or card two-fifths of the way down the view --
 * about where a reader's eye rests -- and where it sat; after, scroll by however far it
 * moved, so it is still there.
 *
 * And the Bengali font only downloaded when Bangla was first shown, so the first press
 * drew the page in a fallback face and then again a moment later in the real one -- two
 * reflows, text jumping size twice. It is fetched ahead now -- as the pointer reaches the
 * switch, or at load for a reader whose browser speaks Bangla -- so the switch mostly
 * finds it already there (warmFonts, below).
 */
const READING_BLOCKS = 'p, h1, h2, h3, li, dt, dd, figure, .card, .pcard, .step-copy, .see-item';

// The block the reader is looking at: the smallest paragraph, heading or card near
// two-fifths of the way down the view. A whole section would carry every paragraph above
// the reader's line inside it, and each of those changes length too. When that point
// falls in the gap between two cards, look a little above and below it.
function readingAnchor() {
  const base = window.innerHeight * 0.4;
  for (const dy of [0, 24, -24, 48, -48, 96, -96, 160, -160]) {
    const el = document.elementFromPoint(window.innerWidth / 2, base + dy);
    const block = el && el.closest(READING_BLOCKS);
    if (block && !block.closest('body > header')) return block;
  }
  return null;
}

function switchLang(lang) {
  const anchor = window.scrollY > 0 ? readingAnchor() : null;
  const before = anchor ? anchor.getBoundingClientRect().top : null;
  // The browser anchors scrolling by itself too, to a node of its own choosing; with both
  // at work the page could be corrected twice. This switch does it alone, for the moment
  // it takes.
  const root = document.documentElement;
  root.style.overflowAnchor = 'none';
  applyLang(lang);
  if (before !== null) window.scrollBy(0, anchor.getBoundingClientRect().top - before);
  requestAnimationFrame(() => { root.style.overflowAnchor = ''; });
}

// Only the Bengali face ever needs fetching ahead -- Manrope is first in every font
// stack, so it is already there in both languages. And only for a reader who is likely
// to want it: one whose browser speaks Bangla, or one who reaches for the switch. An
// English reader who never does no longer downloads a Bengali font on every page.
let fontsWarmed = false;
function warmFonts() {
  if (fontsWarmed || !document.fonts || !document.fonts.load) return;
  fontsWarmed = true;
  ['400', '600', '700'].forEach(w =>
    document.fonts.load(w + ' 16px "Noto Sans Bengali"', 'আপনার টাকা').catch(() => {}));
}

/* -- go ------------------------------------------------------------------------ */
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang());
  const btn = document.getElementById('lang');
  if (btn) btn.addEventListener('click', () => {
    switchLang(currentLang() === 'en' ? 'bn' : 'en');
  });
  if (btn) ['pointerenter', 'pointerdown', 'focus'].forEach(t => btn.addEventListener(t, warmFonts, { passive: true }));
  const speaksBangla = (navigator.languages || [navigator.language || ''])
    .some(l => String(l).toLowerCase().startsWith('bn'));
  if (speaksBangla && currentLang() === 'en') window.addEventListener('load', () => setTimeout(warmFonts, 300));
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
  // addEventListener on a media query arrived in Safari 14; older ones have only
  // addListener, and calling the missing one threw here and stopped everything after it
  // -- the galleries, the lightbox and the release lookup, which get.html depends on.
  const wide = window.matchMedia ? window.matchMedia('(min-width: 880px)') : null;
  const onWide = e => { if (e.matches) setMenu(false); };
  if (wide && wide.addEventListener) wide.addEventListener('change', onWide);
  else if (wide && wide.addListener) wide.addListener(onWide);
  labelMenu();
  setupLightbox();
  setupGalleries();
  setupCopy();
  setupToc();

  restoreRelease();
  releaseReady = loadRelease();
});
