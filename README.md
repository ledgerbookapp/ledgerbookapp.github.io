# ledgerbookapp.github.io

The marketing site for [LedgerBook](https://github.com/oslraahat/ledgerbook-releases), served
by GitHub Pages at <https://ledgerbookapp.github.io/>.

Four static pages, no build step, no framework, no tracker. Open `index.html` in a browser
and it works.

## What is where

| | |
|---|---|
| `index.html` | the pitch, and the download button |
| `features.html` | what the app does — only what it does today |
| `install.html` | the four steps, each with a photograph of the real Android screen |
| `privacy.html` | what is collected (nothing) and why that is checkable |
| `404.html` | served for any unknown path |
| `assets/strings.js` | **every word on the site, in English and Bangla, one pair per line** |
| `assets/site.css` | both themes -- light from the app, dark from the owner's drawing of the site |
| `assets/site.js` | the language switch, the theme switch, and the release lookup |
| `assets/screens/` | the install-guide screenshots, cropped to the dialog |
| `check.js` | run before publishing — see below |

## Before you publish

```sh
node check.js
```

It reads the four pages and the catalogue and complains about the things that have actually
gone wrong here before: a header that drifted on one page, a `data-s` with no string behind
it, a string with only one of its two languages, two keys holding the same English, an
`<img>` with no size, a missing file. It caught a duplicate on its first run.

## The two rules worth knowing

**Words live in `strings.js`, not in the HTML.** A page says `data-s="whyTitle"` and the
catalogue holds `['Why this one', 'কেন এটা']`. Writing a sentence straight into the HTML
gives you an English-only page for half your readers, and nothing will tell you.

**There are two accent colours and they are not interchangeable.** `--accent` is what you
fill with; `--accent-ink` is what you write with. On the dark theme they are the same
value. On light paper the fill measures 2.05 against the page, so a link in it cannot be
read — the ink is a step deeper for exactly that reason. The app hit this same wall and
`Color.kt` carries a long comment about the two commits that walked into it.

## The version number

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
