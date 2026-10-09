# ledgerbookapp.github.io

The marketing site for [LedgerBook](https://github.com/oslraahat/ledgerbook-releases), served
by GitHub Pages at <https://ledgerbookapp.github.io/>.

Four pages, a QR landing page and a 404 — all static, no build step, no framework, no tracker. Open `index.html` in a browser
and it works.

## What is where

| | |
|---|---|
| `index.html` | the pitch, and the download button |
| `features.html` | what the app does — only what it does today |
| `install.html` | the four steps, each with a photograph of the real Android screen |
| `privacy.html` | what is collected (nothing) and why that is checkable |
| `get.html` | where the QR code points: looks up the newest APK and starts the download |
| `404.html` | served for any unknown path |
| `assets/strings.js` | **every word on the site, in English and Bangla, one pair per line** |
| `assets/site.css` | both themes -- light from the app, dark from the owner's drawing of the site |
| `assets/site.js` | the language and theme switches, the release lookup, the full-size picture view, the galleries, the copy button, and the note shown once a download starts |
| `assets/logo.svg` | the mark: a wallet holding the ledger book and a taka note, for 40px and up; `favicon.svg` is its cut for 16–24px, and the PNG icons are drawn from these two |
| `assets/og-image.png` | the 1200×630 picture a shared link shows in WhatsApp, Messenger and the rest; rendered from HTML with the dark home screenshot, so retake it when that screenshot changes |
| `assets/screens/` | the app's own screens (features page, home page, install step 4) and the phone's install dialogs (steps 1–3), cropped to the dialog |
| `check.js` | run before publishing — see below |

## Before you publish

```sh
node check.js
```

It reads the pages and the catalogue and complains about the things that have actually
gone wrong here before: a header that drifted on one page, a `data-s` with no string behind
it, a string with only one of its two languages, two keys holding the same English, an
`<img>` with no size, a missing file, and English in the HTML that no longer matches the
catalogue — `node check.js --fix` writes the catalogue's English back into the pages. It caught a duplicate on its first run.

## The two rules worth knowing

**Words live in `strings.js`, not in the HTML.** A page says `data-s="whyTitle"` and the
catalogue holds `['Why this one', 'কেন এটা']`. Writing a sentence straight into the HTML
gives you an English-only page for half your readers, and nothing will tell you.

**There are two accent colours and they are not interchangeable.** `--accent` is what you
fill with; `--accent-ink` is what you write with. On the dark theme they are the same
value. On light paper the fill measures 2.05 against the page, so a link in it cannot be
read — the ink is a step deeper for exactly that reason. The app hit this same wall and
`Color.kt` carries a long comment about the two commits that walked into it.

## The website's version

Every footer says "Website v2.14.4". `CHANGELOG.md` lists every version and what it was. The number lives once, as SITE_VERSION at the top of
`assets/site.js`, and is raised on every publish: the last part for a fix to what is
there, the middle part for a new page, section or feature. It is the site's own version and
has nothing to do with the app's.

## The app's version number

Nothing on this site names a version. `site.js` asks the GitHub releases API what the newest
one is and fills in the number, the size, the download link and the SHA-256 from the release
body. Cut a release and the site follows by itself; if the API is unreachable the download
button still works, it just points at the releases page instead of the file.

## The screenshots in the install guide

Taken on a clean Android 16 emulator that had never seen the app, so the installer says
"Install this app?" and not "Update". Each is cropped to the dialog itself — a full phone
screen at a readable width came out over a thousand pixels tall and three quarters of it
was the dimmed page behind.

They are not decoration. Writing the guide from memory had it telling readers to choose
"Install anyway", a button that is not on that screen, and to set a PIN on first launch
without mentioning that it asks for a name first. Both were found by photographing the
real thing. If a step's wording changes, re-take its picture.

**Step 4 and the features page are full size.** 1.1.65 split the first launch into
three screens — the name, the PIN, the PIN again — so step 4 has three pictures, in both
themes, taken on LB_Clean at 1080 wide with the status bar cut off (`step4-*-light`,
`step4-*-dark`). The features page's twenty-four (six screens, two themes, two languages) are the same
device, cut to 1080×2259,
so they stay sharp on a high-density phone (since 2.14.4 they are not enlarged or offered
for saving). They came from the sample ledger already on
LB_Clean, with the owner's name set to Raahat; for 1.1.82 the sign-up screens were reached by clearing
the app's data and the sample ledger put back afterwards from a saved copy. Loan cards
show a placeholder number painted over as 01XXXXXXXXX.

Steps 1 to 3 were re-taken full size, and again for 1.1.67, the release that gave the app
the wallet icon the site already uses -- the installer shows the icon inside the APK, so
these pictures follow the app's icon, never the site's. That needed a genuine first install on LB_Clean: its app
data was copied off with run-as, the app uninstalled, the release downloaded through the
site's own get.html in the emulator's Chrome and walked up to Play Protect's "This app looks
safe", then declined; the debug build went back on and the data was restored, and the
ledger reads as it did (net 1,96,170). Do the same next time -- back the data up first.
