# Retaking the site's pictures

How the pictures in `assets/screens/` and `assets/og-image.png` are made. These tools sit in
`_tools/` because Jekyll, which GitHub Pages runs on this repository, leaves a folder whose
name starts with `_` out of the published site. They were lost once from a scratch folder and
had to be dug back out of an old session, so they live here now.

Which app version the pictures show, and what the changes below do to the sample ledger, is
in `assets/screens/SOURCE`.

| File | What it does |
|---|---|
| `gallery-changes.js` | the site's changes to the app's GalleryTest: one lived-in month, the same ledger in every scene, Bangla names and notes in the Bangla scenes, Analytics and Money Flow drawn inside MainScreen. Applied to a worktree, never committed to the app |
| `towebp.js` | the gallery's PNGs to the site's 780x1736 WebPs, with the status-bar and gesture-area gaps, through headless Chrome |
| `og.html` | the 1200x630 share picture, with the dark home picture in a phone frame |
| `sheet.js` | a contact sheet of some of the WebPs, to look at them together before they go in |

## Steps

The tag is the app release the pictures should show (`v2.2.9` below); `$S` is any scratch
folder. One Gradle run at a time on this machine; never `connectedAndroidTest`.

```sh
# 1. A worktree of the release, with the site's changes
cd /e/Projects/LedgerBook
git -c core.longpaths=true worktree add --detach "$S/g" v2.2.9
cp local.properties "$S/g/"
node site/_tools/gallery-changes.js "$S/g"

# 2. The scenes, drawn off the JVM
cd "$S/g" && G=com.ledgerbook.app.gallery
# --rerun: the build cache knows these inputs from an earlier render, and restores the test
# task as FROM-CACHE without running it -- BUILD SUCCESSFUL, and not one picture drawn.
LB_GALLERY=1 ./gradlew :app:testDebugUnitTest --rerun -Proborazzi.test.record=true \
 --tests "$G.Gallery03HomeTest.home" --tests "$G.Gallery03HomeTest.homeBangla" \
 --tests "$G.Gallery03HomeTest.webAnalytics*" --tests "$G.Gallery03HomeTest.webFlow*" \
 --tests "$G.Gallery05TransactionsTest.page" --tests "$G.Gallery05TransactionsTest.pageBangla" \
 --tests "$G.Gallery07AccountsTest.accountsAll" --tests "$G.Gallery07AccountsTest.accountsBangla" \
 --tests "$G.Gallery07AccountsTest.tabInvest" --tests "$G.Gallery07AccountsTest.tabInvestBangla" \
 --tests "$G.Gallery09LoansTest.given" --tests "$G.Gallery09LoansTest.bangla" \
 --tests "$G.Gallery11BackupTest.backupsOn" --tests "$G.Gallery11BackupTest.backupsOnBangla" \
 --tests "$G.Gallery01OnboardingTest"

# 3. To WebP (44 files; a line saying "English copy" means a Bangla scene was not drawn)
mkdir "$S/web"
node site/_tools/towebp.js "$(cygpath -w "$S/g/app/build/reports/contrast")" "$(cygpath -w "$S/web")"
node site/_tools/sheet.js "$(cygpath -w "$S/web")" "^app-.*-light\.webp$" "$(cygpath -w "$S/sheet.png")"

# 4. Into the site, then the share picture from the new dark home picture
cp "$S"/web/*.webp site/assets/screens/
"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=1 --allow-file-access-from-files --window-size=1200,630 \
  --virtual-time-budget=5000 --screenshot="$(cygpath -w "$S")\\og.png" "file:///$(cygpath -m "$PWD/site/_tools/og.html")"
cp "$S/og.png" site/assets/og-image.png

# 5. The worktree away (its paths are too long for git alone on Windows)
git worktree remove --force "$S/g" || cmd //c rd /s /q "\\\\?\\$(cygpath -w "$S/g")"
git worktree prune
```

Then `assets/screens/SOURCE` (its first line, and the list of renders), the version and the
changelog, as for any site change. If an app change has moved a line `gallery-changes.js`
looks for, it stops and names the file and the line; fix the pair there and run it again.
