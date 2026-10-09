/*
 * Every word the site says, in both languages, on one line each.
 *
 * The same shape as the app's Strings.kt and for the same reason: written into two
 * separate pages, a sentence drifts. Changing the Bangla for something then means
 * finding the English beside it and remembering it exists. Here the pair sits together
 * and a missing translation is visible at a glance.
 *
 * Bangla first where the two differ in more than words. "Unknown sources" is what the
 * phone says in English and there is no point translating a label the reader is about to
 * see spelled that way on their own screen -- so those stay as they are and the sentence
 * around them carries the meaning.
 */
const S = {
  // -- chrome ------------------------------------------------------------------
  appName:      ['LedgerBook', 'LedgerBook'],
  navHome:      ['Home', 'শুরু'],
  navInstall:   ['How to install', 'ইনস্টল'],
  navFeatures:  ['Features', 'কী কী আছে'],
  navPrivacy:   ['Privacy', 'গোপনীয়তা'],
  langLabel:    ['বাংলা', 'English'],
  // Read out by the theme button's aria-label; the glyph beside it says the same thing
  // to everyone who can see it.
  toDark:       ['Switch to the dark theme', 'অন্ধকার থিমে যান'],
  toLight:      ['Switch to the light theme', 'আলো থিমে যান'],
  navDownload:  ['Download', 'ডাউনলোড'],
  menuOpen:     ['Open the menu', 'মেনু খুলুন'],
  menuClose:    ['Close the menu', 'মেনু বন্ধ করুন'],

  // -- hero --------------------------------------------------------------------
  heroBadge:    ['Free', 'ফ্রি'],
  // The pill above the headline. The narrow screen gets the short one, because the long
  // one broke over three lines inside a pill meant to be one.
  heroPill:     ['Offline double-entry ledger for Android',
                 'অ্যান্ড্রয়েডের জন্য অফলাইন দুই-তরফা হিসাবের খাতা'],
  heroPillShort:['Offline ledger for Android', 'অ্যান্ড্রয়েডের অফলাইন খাতা'],
  // One sentence in two keys: the second half is set in the accent colour, and a colour
  // change mid-sentence needs an element boundary to hang on.
  taglineLead:  ['Your money, your phone,', 'আপনার টাকার হিসাব আপনার ফোনেই,'],
  taglineAccent:['nobody else.', 'আর কারও কাছে নয়।'],
  heroLead:     ['A double-entry ledger for everyday money. No account to open, nothing ' +
                 'reported to anybody, and books that cannot quietly stop balancing.',
                 'দৈনন্দিন টাকার জন্য দুই-তরফা হিসাবের খাতা। অ্যাকাউন্ট খুলতে হয় না, ' +
                 'কারও কাছে কিছু রিপোর্ট হয় না, আর হিসাব কখনো চুপচাপ বেহিসেব হয়ে যায় না।'],
  download:     ['Download for Android', 'অ্যান্ড্রয়েডের জন্য ডাউনলোড'],
  downloadAlt:  ['Open the releases page', 'রিলিজ পাতা খুলুন'],
  versionLine:  ['Version {v} · {size} · Android 6.0 and up',
                 'ভার্সন {v} · {size} · অ্যান্ড্রয়েড ৬.০ বা তার পরে'],
  qrHead:       ['Scan to put it on your phone', 'ফোনে নিতে স্ক্যান করুন'],
  // A printed square cannot point at a file whose name carries the version number --
  // that would be a dead code the day after the next release. It points at get.html,
  // which looks the newest file up and hands the phone straight to it. Scanning skips
  // the install guide, so the sentence sends a first-timer there.
  qrBody:       ['Point a phone camera at it and the newest version downloads straight ' +
                 'away. First time? Read how to install first.',
                 'ফোনের ক্যামেরা ধরুন, সর্বশেষ ভার্সনটা সাথে সাথে নামতে শুরু করবে। ' +
                 'প্রথমবার? খোলার আগে ইনস্টলের নিয়মটা পড়ে নিন।'],
  // The same code on a phone, folded away until asked for: shown to a friend's camera.
  qrShare:      ['Install it on another phone', 'অন্য ফোনে ইনস্টল করুন'],
  qrShareBody:  ['Hold this screen up to the other phone’s camera. The newest version ' +
                 'downloads there straight away.',
                 'এই স্ক্রিনটা অন্য ফোনের ক্যামেরার সামনে ধরুন। সর্বশেষ ভার্সনটা সেখানে ' +
                 'সাথে সাথে নামতে শুরু করবে।'],
  // The note that appears once the file is asked for, on an Android phone. "The
  // browser", not Chrome: Samsung Internet and Firefox show it too, and pause the same.
  // The first line does not claim the download has started -- at that moment the browser
  // is usually still asking whether to keep the file.
  dlNoteStarted:['If the browser warns you, tap **Download anyway**.',
                 'ব্রাউজার সতর্ক করলে **Download anyway** চাপুন।'],
  dlNoteCheck:  ['Near the end, the browser checks the file for a few seconds. That is ' +
                 'normal — let it finish.',
                 'শেষের দিকে ব্রাউজার কয়েক সেকেন্ড ফাইলটা পরীক্ষা করে। এটা স্বাভাবিক — ' +
                 'শেষ হওয়া পর্যন্ত অপেক্ষা করুন।'],
  dlNoteOpen:   ['When it is done, tap **Open** in the notification.',
                 'শেষ হলে নোটিফিকেশন থেকে **Open** চাপুন।'],
  dlNoteGuide:  ['Read how to install', 'ইনস্টলের নিয়ম দেখুন'],
  // get.html, the page the code opens. On screen for a second before the download.
  getTitle:     ['Downloading LedgerBook…', 'LedgerBook নামানো হচ্ছে…'],
  getLead:      ['Finding the newest version. The download starts by itself — if it does ' +
                 'not, use the button below.',
                 'সর্বশেষ ভার্সন খোঁজা হচ্ছে। ডাউনলোড নিজে থেকেই শুরু হবে — না হলে নিচের ' +
                 'বোতামটা চাপুন।'],
  versionLineShort:['Version {v} · {size} · Android 6.0+',
                 'ভার্সন {v} · {size} · অ্যান্ড্রয়েড ৬.০+'],

  // -- the four numbers under the hero -----------------------------------------
  stat1:        ['servers of ours for an entry to go to',
                 'আমাদের সার্ভার, যেখানে কোনো এন্ট্রি যেতে পারে'],
  stat2:        ['files that touch the internet, both for updates',
                 'ফাইল ইন্টারনেট ছোঁয়, দুটোই আপডেটের জন্য'],
  stat3:        ['permissions, each with a single job', 'অনুমতি, প্রতিটার একটাই কাজ'],
  stat4:        ['the whole app, Android 6.0 and up', 'পুরো অ্যাপ, অ্যান্ড্রয়েড ৬.০ বা তার পরে'],
  stat4Short:   ['the whole app', 'পুরো অ্যাপ'],

  // -- why ---------------------------------------------------------------------
  whyTitle:     ['Why this one', 'কেন এটা'],
  whyH2:        ['Private by design, correct by design', 'গঠনেই গোপন, গঠনেই নির্ভুল'],
  whySub:       ['Where your data goes, whether the totals hold, and whether it needs a ' +
                 'network at all.',
                 'আপনার তথ্য কোথায় যায়, যোগফল টেকে কিনা, আর নেটওয়ার্ক আদৌ লাগে কিনা।'],
  why1Head:     ['It has nowhere to send your money data',
                 'আপনার হিসাব পাঠানোর জায়গাই নেই এর'],
  why1Body:     ['Not a promise — a fact about how it is built. Two files in the whole ' +
                 'app touch the internet, and both of them are the thing that checks ' +
                 'whether a new version exists. There is no server of ours for an entry ' +
                 'to go to. Android’s own backup is a separate matter, and the ',
                 'এটা প্রতিশ্রুতি নয় — গঠনের সত্য। পুরো অ্যাপে মাত্র দুটো ফাইল ইন্টারনেট ছোঁয়, ' +
                 'আর দুটোই শুধু দেখে নতুন ভার্সন এসেছে কিনা। আমাদের এমন কোনো সার্ভার নেই ' +
                 'যেখানে একটা এন্ট্রি যেতে পারে। অ্যান্ড্রয়েডের নিজের ব্যাকআপ আলাদা ব্যাপার, ' +
                 'আর '],
  // The sentence above carries on through a link to the privacy page and out again. The
  // spaces at the joins belong to the halves, so the link text is only the link.
  why1Link:     ['privacy page', 'গোপনীয়তার পাতায়'],
  why1End:      [' says exactly what it carries.', ' সেটা কী কী নেয় তা হুবহু লেখা আছে।'],
  why2Head:     ['Every amount is written twice', 'প্রতিটা টাকা দুবার লেখা হয়'],
  why2Body:     ['Real double-entry, the way an accountant keeps books: money leaving one ' +
                 'place always arrives somewhere. The Trial Balance page shows the two ' +
                 'sides agreeing, so a wrong total is caught instead of carried.',
                 'সত্যিকারের দুই-তরফা হিসাব, হিসাবরক্ষক যেভাবে খাতা রাখেন: এক জায়গা থেকে টাকা ' +
                 'গেলে সেটা আরেক জায়গায় পৌঁছায়ই। ট্রায়াল ব্যালেন্স পাতা দুই দিকের মিল দেখায়, ' +
                 'তাই ভুল হিসাব বয়ে বেড়াতে হয় না, ধরা পড়ে যায়।'],
  why3Head:     ['It works with the phone in flight mode', 'ফ্লাইট মোডেও পুরোপুরি চলে'],
  why3Body:     ['Nothing waits on a network. The ledger is encrypted on the phone, backups are encrypted files you keep yourself, and the app locks behind a PIN or your fingerprint.',
                 'কোনো কিছু নেটওয়ার্কের জন্য অপেক্ষা করে না। খাতা ফোনেই এনক্রিপ্ট করা থাকে, ব্যাকআপ এনক্রিপ্টেড ফাইল যা আপনার নিজের কাছেই থাকে, আর অ্যাপ পিন বা আঙুলের ছাপ দিয়ে তালা দেওয়া।'],

  // -- at a glance -------------------------------------------------------------
  // Eight lines, each a heading and a sentence. The narrow screen gets a shorter sentence
  // where the long one ran to three lines in a half-width column; where the two would be
  // the same words there is only one key.
  featH2:       ['Everything it does, at a glance', 'এক নজরে সবকিছু'],
  g1Head:       ['Double-entry journal', 'দুই-তরফা জার্নাল'],
  g1Body:       ['Every entry has a debit and a matching credit.',
                 'প্রতিটা এন্ট্রির একটা ডেবিট, আর তার মিলিয়ে একটা ক্রেডিট।'],
  g1Short:      ['A debit and a matching credit, every time.',
                 'প্রতিবার একটা ডেবিট, মিলিয়ে একটা ক্রেডিট।'],
  g2Head:       ['Trial Balance', 'ট্রায়াল ব্যালেন্স পাতা'],
  g2Body:       ['See both sides agree, so a wrong total is caught.',
                 'দুই দিক মিলছে কিনা দেখুন, তাই ভুল যোগফল ধরা পড়ে।'],
  g2Short:      ['Both sides agree, or you see it.', 'দুই দিক মেলে, নয়তো চোখে পড়ে।'],
  g3Head:       ['Loan tracking', 'ধারের হিসাব'],
  g3Body:       ['Who owes what, one card for each mobile number.',
                 'কে কত ধারে — প্রতিটা মোবাইল নম্বরে একটা কার্ড।'],
  g3Short:      ['Who owes what, by mobile number.',
                 'কে কত ধারে, মোবাইল নম্বর ধরে।'],
  g4Head:       ['Due-date reminders', 'ফেরতের দিন মনে করানো'],
  g4Body:       ['When a loan falls due or a deposit matures.',
                 'ধার ফেরতের দিন, বা জমার মেয়াদ পূর্ণ হলে।'],
  g5Head:       ['Encrypted backups', 'এনক্রিপ্টেড ব্যাকআপ'],
  g5Body:       ['Backup files you keep yourself.', 'ব্যাকআপ ফাইল, যা আপনার নিজের কাছে থাকে।'],
  g5Short:      ['Files you keep yourself.', 'ফাইল থাকে আপনার নিজের কাছে।'],
  g6Head:       ['PIN & fingerprint lock', 'পিন ও আঙুলের ছাপের তালা'],
  g6HeadShort:  ['PIN & fingerprint', 'পিন ও আঙুলের ছাপ'],
  g6Body:       ['A PIN or your fingerprint, locking again a minute after you leave.',
                 'পিন বা আঙুলের ছাপ — বেরোনোর এক মিনিট পর আবার তালা।'],
  g6Short:      ['Locks again when you leave.',
                 'বেরোলে আবার তালা লাগে।'],
  g7Head:       ['In-app updates', 'অ্যাপের ভেতরেই আপডেট'],
  g7Body:       ['Checks for a new version, downloads and installs it.',
                 'নতুন ভার্সন খোঁজে, নামায়, তারপর ইনস্টল করে।'],
  g7Short:      ['Checks, downloads, installs.', 'খোঁজে, নামায়, ইনস্টল করে।'],
  g8Head:       ['FDR & DPS',
                 'FDR ও DPS'],
  g8Body:       ['Term deposits with profit, tax and maturity worked out.',
                 'মেয়াদি জমা — মুনাফা, কর আর মেয়াদ হিসাব করা।'],
  g8Short:      ['Profit, tax and maturity.',
                 'মুনাফা, কর আর মেয়াদ।'],

  // -- trust -------------------------------------------------------------------
  trustTitle:   ['Why it is not on the Play Store', 'প্লে স্টোরে নেই কেন'],
  trustBody:    ['It is published here instead, as a file you download and install ' +
                 'yourself. Your phone will warn you about that, because a phone cannot ' +
                 'tell one unknown file from another. What it can tell you is whether the ' +
                 'file is exactly the one published — every release carries a SHA-256 ' +
                 'fingerprint, and the install guide shows how to check it.',
                 'এটা এখানেই প্রকাশ করা হয়, এমন একটা ফাইল হিসেবে যা আপনি নিজে নামিয়ে ইনস্টল ' +
                 'করবেন। আপনার ফোন এ নিয়ে সতর্ক করবে, কারণ ফোন এক অচেনা ফাইলের সাথে আরেকটার ' +
                 'তফাত বুঝতে পারে না। যেটা বোঝা যায় তা হল ফাইলটা প্রকাশিত ফাইলটাই কিনা — ' +
                 'প্রতিটা রিলিজের সাথে একটা SHA-256 ছাপ থাকে, আর ইনস্টল পাতায় মিলিয়ে দেখার নিয়ম আছে।'],

  installLink:  ['Read the install guide', 'ইনস্টলের নিয়ম পড়ুন'],
  // The card beside it. Filled from the releases API like the download button; until
  // it answers the card says "latest" rather than a number it would have to remember.
  relTitle:     ['Release {v}', 'রিলিজ {v}'],
  relLatest:    ['Latest release', 'সর্বশেষ রিলিজ'],
  relVerifiable:['Verifiable', 'মিলিয়ে দেখা যায়'],
  relSize:      ['File size', 'ফাইলের আকার'],
  relRequires:  ['Requires', 'লাগবে'],
  relAndroid:   ['Android 6.0 and up', 'অ্যান্ড্রয়েড ৬.০ বা তার পরে'],
  relHashWait:  ['Listed on the releases page', 'রিলিজ পাতায় দেওয়া আছে'],

  // -- install -----------------------------------------------------------------
  // One line in both languages: the longer Bangla wrapped to two, and the whole page
  // dropped 97px the moment the language changed.
  installTitle: ['Installing LedgerBook', 'LedgerBook ইনস্টল'],
  installLead:  ['Four steps, about two minutes. Your phone will show two warnings along ' +
                 'the way and both are expected — they appear for every app that does not ' +
                 'come from the Play Store, not because of anything about this one.',
                 'চারটে ধাপ, প্রায় দুই মিনিট। পথে ফোন দুবার সতর্ক করবে, আর দুটোই স্বাভাবিক — ' +
                 'প্লে স্টোরের বাইরে থেকে আসা প্রতিটা অ্যাপের বেলায় এই বার্তা আসে, এই অ্যাপের ' +
                 'জন্য আলাদা করে নয়।'],
  step1Head:    ['Download the file', 'ফাইলটা নামান'],
  step1Body:    ['Tap the download button. Chrome may say the file "may be harmful" — ' +
                 'it says that about every APK. Choose Download anyway.',
                 'ডাউনলোড বোতামে চাপুন। ক্রোম হয়তো বলবে ফাইলটা "may be harmful" — ' +
                 'সে প্রতিটা APK নিয়েই এটা বলে। Download anyway বেছে নিন।'],
  step2Head:    ['Open it', 'ফাইলটা খুলুন'],
  step2Body:    ['Open the downloaded file. Android says this source is not allowed to ' +
                 'install apps yet. Tap **Settings** — not Cancel — and turn on **Allow from ' +
                 'this source**. The install carries on by itself from there.',
                 'নামানো ফাইলটা খুলুন। অ্যান্ড্রয়েড বলবে এই উৎস থেকে অ্যাপ ইনস্টলের অনুমতি নেই। ' +
                 '**Settings**-এ চাপুন — Cancel নয় — আর **Allow from this source** চালু করুন। ' +
                 'এরপর ইনস্টল নিজে থেকেই এগোতে থাকবে।'],
  step3Head:    ['Install', 'ইনস্টল করুন'],
  step3Body:    ['Tap Install. Play Protect then says it has not seen this app before and ' +
                 'offers to scan it — choose **Scan app**. It takes about a minute and comes ' +
                 'back with **This app looks safe**, and then you tap Install again.',
                 'Install-এ চাপুন। এরপর Play Protect বলবে এই অ্যাপ সে আগে দেখেনি, আর পরীক্ষা ' +
                 'করার প্রস্তাব দেবে — **Scan app** বেছে নিন। প্রায় এক মিনিট লাগে, তারপর দেখাবে ' +
                 '**This app looks safe**, আর আপনি আবার Install-এ চাপবেন।'],
  step4Head:    ['Set your PIN', 'পিন ঠিক করুন'],
  step4Body:    ['Open LedgerBook. It asks what to call you, then for a four-digit PIN, typed twice — three short steps. The PIN stays on this phone and is never copied — not even into a backup. There is nowhere to sign in to and no account to make.',
                 'LedgerBook খুলুন। প্রথমে জিজ্ঞেস করবে আপনাকে কী নামে ডাকবে, তারপর চার সংখ্যার একটা পিন, দুবার লিখতে হবে — তিনটে ছোট ধাপ। পিন এই ফোনেই থাকে, কোথাও কপি হয় না — ব্যাকআপেও না। সাইন ইন করার জায়গা নেই, অ্যাকাউন্টও বানাতে হয় না।'],

  // Captions under the step screenshots. They name the button to press, because a reader
  // matching the picture to their own screen is looking for exactly that.
  cap1:         ['Chrome says this about every APK. Choose Download anyway.',
                 'ক্রোম প্রতিটা APK নিয়েই এটা বলে। Download anyway বেছে নিন।'],
  cap2:         ['Tap Settings on this one — not Cancel.',
                 'এখানে Settings-এ চাপুন — Cancel নয়।'],
  cap2b:        ['Turn on Allow from this source. The install goes on from here.',
                 'Allow from this source চালু করুন। ইনস্টল এখান থেকেই এগোবে।'],
  // The size comes from the release, like every other number here; until it does the
  // caption says only what to press.
  cap3:         ['Tap Install. The app is {size}.', 'Install-এ চাপুন। অ্যাপটা {size}।'],
  cap3Plain:    ['Tap Install.', 'Install-এ চাপুন।'],
  cap3b:        ['Play Protect has not seen it before. Choose Scan app.',
                 'Play Protect এটা আগে দেখেনি। Scan app বেছে নিন।'],
  cap3c:        ['What the scan came back with. Tap Install.',
                 'পরীক্ষার পর যা দেখায়। Install-এ চাপুন।'],
  cap4a:        ['It asks what to call you. You can change this anytime in Settings.',
                 'আপনাকে কী নামে ডাকবে জিজ্ঞেস করে। পরে যেকোনো সময় Settings থেকে বদলানো যায়।'],
  cap4b:        ['Four digits. Step 2 of 3.',
                 'চার সংখ্যা। ধাপ ২/৩।'],
  cap4c:        ['The same four digits again. The PIN is never copied anywhere.',
                 'একই চার সংখ্যা আবার। পিন কোথাও কপি হয় না।'],

  // -- the install page's furniture --------------------------------------------
  stepWarning:  ['Warning', 'সতর্কতা'],
  warn1:        ['Expected warning 1 of 2', 'প্রত্যাশিত সতর্কতা, ২টার ১ম'],
  warn2:        ['Expected warning 2 of 2', 'প্রত্যাশিত সতর্কতা, ২টার ২য়'],
  // The small labels over each picture in steps 3 and 4, in the order they happen.
  s3a:          ['Tap Install', 'Install-এ চাপুন'],
  s3b:          ['Choose Scan app', 'Scan app বেছে নিন'],
  s3c:          ['Tap Install again', 'আবার Install-এ চাপুন'],
  s4a:          ['Tell it your name', 'নাম বলুন'],
  s4b:          ['Create your PIN', 'পিন তৈরি করুন'],
  s4c:          ['Confirm your PIN', 'পিনটি আবার দিন'],
  chipNoSignIn: ['No sign-in', 'সাইন ইন নেই'],
  chipNoAccount:['No account', 'অ্যাকাউন্ট নেই'],
  chipPinStays: ['PIN never leaves the phone', 'পিন ফোনের বাইরে যায় না'],
  installDone:  ['That’s it — the app is ready to use.', 'ব্যস — অ্যাপ ব্যবহারের জন্য তৈরি।'],
  // Stepping through a step's pictures on a phone, where they show one at a time.
  galPrev:      ['Prev', 'আগে'],
  galNext:      ['Next', 'পরে'],
  // The fingerprint card. {v} is filled from the releases API, like every version here.
  hashTitle:    ['SHA-256 · Version {v}', 'SHA-256 · ভার্সন {v}'],
  hashCopy:     ['Copy', 'কপি'],
  hashCopied:   ['Copied', 'কপি হয়েছে'],

  verifyTitle:  ['Checking you got the right file', 'ঠিক ফাইলটাই পেয়েছেন কিনা দেখা'],
  verifyBody:   ['Every release publishes the fingerprint of its own file. If the number ' +
                 'your phone computes matches the one below, the file is byte for byte ' +
                 'the one that was published. This is optional — most people skip it.',
                 'প্রতিটা রিলিজের সাথে তার নিজের ফাইলের ছাপ প্রকাশ করা হয়। আপনার ফোনে হিসাব ' +
                 'করা সংখ্যাটা নিচেরটার সাথে মিললে ফাইলটা অক্ষরে অক্ষরে প্রকাশিত ফাইলটাই। ' +
                 'এটা ঐচ্ছিক — বেশিরভাগ মানুষ এই ধাপটা বাদ দেন।'],

  // -- permissions -------------------------------------------------------------
  permEyebrow:  ['Permissions', 'অনুমতি'],
  permTitle:    ['What it asks for, and why', 'কী কী অনুমতি চায়, আর কেন'],
  permSub:      ['Three permissions. Each one has a single job.',
                 'তিনটে অনুমতি। প্রতিটার একটাই কাজ।'],
  permOptional: ['Optional', 'ঐচ্ছিক'],
  permInternet: ['Internet', 'ইন্টারনেট'],
  permInternetW:['Only to check whether a newer version exists.',
                 'শুধু নতুন ভার্সন এসেছে কিনা দেখার জন্য।'],
  permNotify:   ['Notifications', 'নোটিফিকেশন'],
  permNotifyW:  ['To remind you when a loan is due or a deposit matures, and when an update is out.',
                 'ধার ফেরতের তারিখ, জমার মেয়াদ পূর্ণ হওয়া, আর নতুন ভার্সন এলে জানানোর জন্য।'],
  // "Optional" is a badge beside the heading wherever this is shown, so the sentence
  // leaves it out.
  permInstall:  ['Install apps', 'অ্যাপ ইনস্টল'],
  permInstallW: ['To install the update it downloaded for you.',
                 'নিজে নামানো নতুন ভার্সনটা ইনস্টল করার জন্য।'],

  // -- questions, on the home page ------------------------------------------------
  // What a first-time reader asks before installing a file from outside the Play Store.
  // Every answer is a thing the rest of the site already says; this only gathers it.
  faqEyebrow:   ['Questions', 'প্রশ্ন'],
  faqTitle:     ['Before you install', 'ইনস্টলের আগে'],
  faqQ1:        ['My phone warned me. Is it safe?', 'ফোন সতর্ক করল। এটা কি নিরাপদ?'],
  faqA1:        ['Android shows that warning for every app that does not come from the Play ' +
                 'Store, because it cannot tell one unknown file from another. Play Protect ' +
                 'then scans this one and says it looks safe. To be sure the file is exactly ' +
                 'the one published, the install guide shows how to check its SHA-256 fingerprint.',
                 'প্লে স্টোরের বাইরের যেকোনো অ্যাপেই অ্যান্ড্রয়েড এই সতর্কবার্তা দেখায়, কারণ ' +
                 'অচেনা এক ফাইলকে আরেকটা থেকে সে আলাদা করতে পারে না। এরপর Play Protect ' +
                 'অ্যাপটা স্ক্যান করে জানায় যে এটা নিরাপদ। ফাইলটা হুবহু প্রকাশিত ফাইলই কিনা ' +
                 'নিশ্চিত হতে চাইলে, ইনস্টল গাইডে এর SHA-256 ছাপ মিলিয়ে দেখার নিয়ম আছে।'],
  faqQ2:        ['Does it cost anything?', 'টাকা লাগে?'],
  faqA2:        ['No. It is free, with no ads and no account to open.',
                 'না। এটা ফ্রি — কোনো বিজ্ঞাপন নেই, কোনো অ্যাকাউন্টও খুলতে হয় না।'],
  faqQ3:        ['What if I change or lose my phone?', 'ফোন বদলালে বা হারালে কী হবে?'],
  faqA3:        ['Your ledger is encrypted on this phone, so it does not move to a new one on its own. Before you change phones, save an encrypted backup file from the app’s Backup page, restore it on the new phone and set a new PIN there. Keep a copy of that file off the phone too, in case the phone is lost.',
                 'আপনার খাতা এই ফোনেই এনক্রিপ্ট করা থাকে, তাই নিজে থেকে নতুন ফোনে যায় না। ফোন বদলানোর আগে অ্যাপের ব্যাকআপ পাতা থেকে একটা এনক্রিপ্টেড ব্যাকআপ ফাইল রাখুন, নতুন ফোনে সেটা ফিরিয়ে আনুন আর সেখানে নতুন একটা পিন দিন। ফোন হারালে যাতে কাজে আসে, ফাইলটার একটা কপি ফোনের বাইরেও রাখুন।'],
  faqQ4:        ['Does it need the internet?', 'ইন্টারনেট লাগে?'],
  faqA4:        ['No. Everything works offline. It goes online only to check for a newer ' +
                 'version, and to download it when you say yes.',
                 'না। সবকিছু অফলাইনেই চলে। শুধু নতুন ভার্সন এসেছে কিনা দেখতে, আর আপনি রাজি ' +
                 'হলে সেটা নামাতে ইন্টারনেটে যায়।'],
  faqQ5:        ['Is there an iPhone version?', 'আইফোনে চলবে?'],
  faqA5:        ['No. It is for Android only, version 6.0 and up.',
                 'না। এটা শুধু অ্যান্ড্রয়েডের জন্য, ভার্সন ৬.০ বা তার পরের।'],
  faqQ6:        ['How do I get updates?', 'আপডেট পাব কীভাবে?'],
  faqA6:        ['The app tells you when a new version is out, downloads it when you say yes, ' +
                 'and installs it. You do not need to come back to this page.',
                 'নতুন ভার্সন এলে অ্যাপ নিজেই জানায়, আপনি রাজি হলে নামিয়ে ইনস্টল করে দেয়। ' +
                 'এই পাতায় আর ফিরে আসতে হয় না।'],

  // -- features ----------------------------------------------------------------
  featTitle:    ['What it does', 'কী কী করে'],
  featLead:     ['Everything below is in the app today — there is no roadmap on this page, ' +
                 'because a feature you cannot use yet is not a feature.',
                 'নিচের সবকিছুই আজকের অ্যাপে আছে — এই পাতায় "আসছে" বলে কোনো অংশ নেই, ' +
                 'কারণ যেটা এখনো ব্যবহার করা যায় না সেটা সুবিধা নয়।'],

  shotsTitle:   ['A look at it', 'দেখতে কেমন'],
  // Shot on a phone with a made-up ledger on it, not the author's own. A page that
  // spends three paragraphs on where your money data does not go cannot illustrate
  // itself with somebody's real balances, bank suffixes and creditors' names.
  shotsLead:    ['Six screens, on a sample ledger made up for the purpose.',
                 'ছয়টা পাতা, এই কাজের জন্য বানানো একটা নমুনা খাতায়।'],
  // Added on a phone, where the six sit in a row wider than the screen.
  shotsSwipe:   [' Swipe to see them all.', ' সবগুলো দেখতে পাশে সরান।'],
  // The full-size view of a screenshot. Read out by screen readers, as the buttons'
  // labels; the glyphs on them say the same to everyone else.
  lbOpen:       ['Enlarge', 'বড় করে দেখুন'],
  lbClose:      ['Close', 'বন্ধ করুন'],
  lbPrev:       ['Previous screen', 'আগের পাতা'],
  lbNext:       ['Next screen', 'পরের পাতা'],
  shotHome:     ["The first screen", "প্রথম পাতা"],
  shotTxn:      ["Every entry, filtered", "সব এন্ট্রি, ছেঁকে দেখা"],
  shotAccounts: ["The accounts", "অ্যাকাউন্টগুলো"],
  shotLoans:    ["Who owes whom", "কে কার কাছে ধারে"],
  shotAnalytics:["Where the month went", "মাসটা কোথায় গেল"],
  shotBackup:   ["Backup and restore", "ব্যাকআপ আর ফেরানো"],

  featCta:      ['All of it, on your phone', 'সবকিছু, আপনার ফোনেই'],
  featBooksTitle:['Keeping the books', 'হিসাব রাখা'],
  f0Head:       ['What you have, on the first screen', 'কী আছে, প্রথম পাতাতেই'],
  f0Body:       ['The app opens on one figure — everything you own less everything you owe — with what others owe you and what you owe beside it, and this month’s income, spending and savings underneath. The everyday errand, which is to check the number and write down today, never needs a second page.',
                 'অ্যাপ খুললেই একটা সংখ্যা — যা আপনার আছে তার থেকে যা আপনি দেন বাদ দিয়ে — পাশে কে আপনার কাছে কত পায় আর আপনি কার কাছে কত দেন, আর নিচে এই মাসের আয়, খরচ আর সঞ্চয়। রোজকার কাজটা, মানে সংখ্যাটা দেখা আর আজকেরটা লিখে রাখা, দ্বিতীয় পাতায় যেতে হয় না।'],
  f1Head:       ['Five kinds of entry', 'পাঁচ রকম এন্ট্রি'],
  f1Body:       ['Income, expense, transfer between your own accounts, and cash in or out ' +
                 'of the bank. Each is its own screen asking only what that kind of entry ' +
                 'needs, so none of them is a general form with half the fields greyed out.',
                 'আয়, খরচ, নিজের অ্যাকাউন্টের মধ্যে ট্রান্সফার, আর ব্যাংক থেকে টাকা তোলা বা ' +
                 'জমা দেওয়া। প্রতিটার আলাদা পাতা, যেখানে শুধু ওই এন্ট্রির জন্য যা লাগে তাই ' +
                 'চাওয়া হয় — অর্ধেক ঘর নিষ্ক্রিয় করা কোনো সাধারণ ফর্ম নয়।'],
  f2Head:       ['Bank, wallet, cash and deposits',
                 'ব্যাংক, ওয়ালেট, নগদ আর জমা'],
  f2Body:       ['Accounts are grouped the way you already think about them, each with a colour you choose — fixed deposits and DPS among them. A monthly FDR’s profit moves to its linked account on its own, a DPS takes its instalments, source tax goes at your TIN rate, and a deposit can be closed early at a reduced rate. Money only moves where that makes sense, so a slip of the thumb cannot invent a transfer.',
                 'অ্যাকাউন্টগুলো যেভাবে আপনি এমনিতেই ভাবেন সেভাবেই সাজানো, প্রতিটার রং আপনার পছন্দে — FDR আর DPS-ও তার মধ্যে। মাসিক FDR-এর মুনাফা নিজে থেকেই যুক্ত অ্যাকাউন্টে যায়, DPS-এ কিস্তি জমা হয়, উৎসে কর কাটে আপনার TIN-এর হারে, আর মেয়াদের আগে কম হারে জমা বন্ধও করা যায়। যেখানে টাকা যাওয়া যুক্তিসঙ্গত শুধু সেখানেই যায়, তাই আঙুলের ভুলে কোনো ট্রান্সফার তৈরি হয় না।'],
  f3Head:       ['A trial balance that proves itself', 'ট্রায়াল ব্যালেন্স, যা নিজেই প্রমাণ'],
  f3Body:       ['Every amount is written twice, once on each side. The Trial Balance page ' +
                 'adds both sides up and shows them agreeing — so if a total is ever wrong, ' +
                 'you find out on that page instead of months later.',
                 'প্রতিটা টাকা দুবার লেখা হয়, দুই দিকে একবার করে। ট্রায়াল ব্যালেন্স পাতা দুই ' +
                 'দিকের যোগফল মিলিয়ে দেখায় — তাই হিসাব ভুল হলে মাস পরে নয়, ওই পাতাতেই ধরা পড়ে।'],

  featSeeTitle: ['Seeing where it went', 'টাকা কোথায় গেল'],
  f4Head:       ['A month at a time', 'এক মাস করে'],
  f4Body:       ['Income against expense, what you saved and what share of what you earned ' +
                 'that was, and the categories that took the most — for whichever month ' +
                 'you pick.',
                 'আয়ের বিপরীতে খরচ, কত সঞ্চয় হলো আর আয়ের কত অংশ, আর কোন খাতে সবচেয়ে বেশি ' +
                 'গেল — আপনি যে মাসটা বাছবেন তার জন্য।'],
  f5Head:       ['Which account did the work', 'কোন অ্যাকাউন্ট দিয়ে কী হলো'],
  f5Body:       ['Money in and money out for each account side by side, so you can see ' +
                 'which one everything actually runs through and which is just sitting there.',
                 'প্রতিটা অ্যাকাউন্টে কত ঢুকল আর কত বেরোল পাশাপাশি, যাতে বোঝা যায় আসলে কোনটা ' +
                 'দিয়ে সব চলছে আর কোনটা শুধু পড়ে আছে।'],

  featKeepTitle:['Keeping it safe', 'নিরাপদে রাখা'],
  f6Head:       ['Who owes you, and whom you owe', 'কে আপনার কাছে ধারে, আপনি কার কাছে'],
  f6Body:       ['Loans in both directions, each person known by their mobile number, with the date it is due and a reminder when it comes. Record a repayment on the day it actually happened, and fix a mistyped amount later — the books follow.',
                 'দুই দিকেরই ধার, প্রত্যেক মানুষকে চেনা হয় তাঁর মোবাইল নম্বর দিয়ে, ফেরতের তারিখসহ, আর সেই তারিখ এলে মনে করিয়ে দেওয়া। ফেরত যেদিন আসলে এসেছিল সেই তারিখেই লেখা যায়, আর ভুল লেখা অঙ্ক পরে ঠিক করা যায় — হিসাবও সেই অনুযায়ী বদলায়।'],
  f7Head:       ['Backups you hold yourself', 'ব্যাকআপ আপনার নিজের হাতে'],
  f7Body:       ['A backup is one file, encrypted with AES-GCM under a key stretched from your own password, written where you choose — by hand, or once a day into a folder. No account is needed to make one or to read one back, which also means nobody can restore it for you.',
                 'ব্যাকআপ মানে একটা ফাইল, আপনার নিজের পাসওয়ার্ড থেকে বানানো চাবি দিয়ে AES-GCM-এ এনক্রিপ্ট করা, আপনি যেখানে বলবেন সেখানে লেখা — হাতে, বা প্রতিদিন একবার একটা ফোল্ডারে। বানাতে বা ফেরাতে কোনো অ্যাকাউন্ট লাগে না — অর্থাৎ আপনি ছাড়া আর কেউ ওটা ফিরিয়েও দিতে পারবে না।'],
  f8Head:       ['Locked, and in your language', 'তালাবদ্ধ, আর আপনার ভাষায়'],
  f8Body:       ['The ledger itself is encrypted on the phone. A PIN or your fingerprint on the way in, a lock again a minute after you leave, and the PIN asked once more before an export, a restore or signing out. Bangla or English, light or dark — switchable whenever you like.',
                 'খাতাটা নিজেই ফোনে এনক্রিপ্ট করা। ঢোকার মুখে পিন বা আঙুলের ছাপ, বেরোনোর এক মিনিট পর আবার তালা, আর export, ফেরানো বা সাইন আউটের আগে আরেকবার পিন। বাংলা বা ইংরেজি, আলো বা অন্ধকার — যখন খুশি বদলানো যায়।'],
  // 1.1.69. Said as the release notes say it: what goes in the list, and that the list
  // is the phone's alone -- the privacy page's promise has to hold for it too.
  f9Head:       ['A list behind the bell', 'বেলের পেছনে একটা তালিকা'],
  f9Body:       ['App updates, backups saved or restored, loan reminders and deposits reaching maturity, gathered in one list — and reminders can be switched off. It is kept on your phone only, and cleared if you reinstall.',
                 'অ্যাপের আপডেট, ব্যাকআপ সেভ বা ফেরানো, ধারের রিমাইন্ডার আর মেয়াদ পূর্ণ হওয়া জমা — সব এক তালিকায়, আর রিমাইন্ডার বন্ধও করা যায়। এটা শুধু আপনার ফোনেই থাকে, অ্যাপ আবার ইনস্টল করলে মুছে যায়।'],

  // -- privacy -----------------------------------------------------------------
  privLead:     ['The short version: nothing is collected and nothing is reported, because there is nobody to report to. Your ledger is encrypted on the phone and never leaves it unless you write a backup yourself; Android’s own backup carries only the app’s settings, and has a section to itself below. The rest of this page is all of that spelled out, so you can check it rather than take it.',
                 'সংক্ষেপে: কিছুই সংগ্রহ করা হয় না, কোথাও রিপোর্টও যায় না, কারণ রিপোর্ট করার মতো কেউ নেই। আপনার খাতা ফোনেই এনক্রিপ্ট করা থাকে, আর আপনি নিজে ব্যাকআপ না লিখলে ফোন ছাড়ে না; অ্যান্ড্রয়েডের নিজের ব্যাকআপ নেয় শুধু অ্যাপের সেটিংস — নিচে তার নিজের একটা অংশ আছে। এই পাতার বাকিটা সেসবেরই খোলাসা, যাতে বিশ্বাস না করে মিলিয়ে দেখতে পারেন।'],

  // The four answers under the lead: a label and the short answer to it.
  privSum1V:    ['Nothing', 'কিছুই না'],
  privSum2:     ['Network use', 'নেটওয়ার্ক ব্যবহার'],
  privSum2V:    ['Update check only', 'শুধু আপডেট খোঁজা'],
  privSum3:     ['Leaves the phone', 'ফোন ছাড়ে'],
  privSum3V:    ['Settings only',
                 'শুধু সেটিংস'],
  privSum4:     ['To delete it all', 'সব মুছতে'],
  privSum4V:    ['Uninstall', 'আনইনস্টল'],
  privToc:      ['On this page', 'এই পাতায়'],
  privNo2:      ['No analytics', 'অ্যানালিটিক্স নেই'],
  privNo3:      ['No crash reports', 'ক্র্যাশ রিপোর্ট নেই'],
  privNo4:      ['No ads', 'বিজ্ঞাপন নেই'],
  privNet1:     ['Ask GitHub for the newest release', 'গিটহাবকে সবচেয়ে নতুন রিলিজ জিজ্ঞেস করা'],
  privNet2:     ['Download it — only if you say yes', 'নামানো — শুধু আপনি হ্যাঁ বললে'],
  privGoes:     ['What goes', 'যা যায়'],
  privGoes1:    ['Language, theme, colour and text size',
                 'ভাষা, থিম, রং আর লেখার আকার'],
  privGoes2:    ['Reminder and TIN settings',
                 'রিমাইন্ডার আর TIN-এর সেটিং'],
  privStays:    ['What does not go', 'যা যায় না'],
  privStays1:   ['Your ledger',
                 'আপনার খাতা'],
  privStays2:   ['Your PIN and profile',
                 'আপনার পিন আর প্রোফাইল'],
  privStaysNote: ['To move phones, export a backup file and restore it on the new one.',
                  'ফোন বদলাতে একটা ব্যাকআপ ফাইল export করে নতুন ফোনে ফিরিয়ে আনুন।'],
  privCollectTitle:['What is collected', 'কী কী সংগ্রহ করা হয়'],
  privCollectBody: ['**Nothing.** No account, no sign-in, no email address, no device identifier, no usage statistics, no crash reports, no advertising. There is no analytics library and no ad library in the app — the whole dependency list is Android’s own components, Kotlin, SQLCipher to encrypt the ledger, and one library for reading a release’s version number.',
                    '**কিছুই না।** অ্যাকাউন্ট নেই, সাইন ইন নেই, ইমেইল নেই, ডিভাইসের পরিচয় নেই, ব্যবহারের পরিসংখ্যান নেই, ক্র্যাশ রিপোর্ট নেই, বিজ্ঞাপন নেই। অ্যাপে কোনো analytics বা বিজ্ঞাপনের লাইব্রেরিই নেই — পুরো তালিকাটা অ্যান্ড্রয়েডের নিজের উপকরণ, কোটলিন, খাতা এনক্রিপ্ট করার SQLCipher, আর রিলিজের ভার্সন নম্বর পড়ার একটা লাইব্রেরি।'],

  privWhereTitle:['Where your entries live', 'আপনার হিসাব কোথায় থাকে'],
  privWhereBody: ['In a database inside the app’s own storage on your phone, which Android keeps other apps out of — encrypted with SQLCipher, under a key held in the phone’s Android Keystore that never leaves this device. It is never copied anywhere else unless you write a backup yourself. Uninstalling the app deletes it.',
                  'আপনার ফোনে অ্যাপের নিজের জায়গার ভেতরে একটা ডেটাবেসে, যেখানে অ্যান্ড্রয়েড অন্য অ্যাপকে ঢুকতে দেয় না — SQLCipher দিয়ে এনক্রিপ্ট করা, এমন এক চাবিতে যা ফোনের Android Keystore-এ থাকে আর এই ফোন ছেড়ে কখনো যায় না। আপনি নিজে ব্যাকআপ না লিখলে সেটা আর কোথাও যায় না। অ্যাপ আনইনস্টল করলে মুছে যায়।'],

  privNetTitle: ['Every time it uses the network', 'যতবার নেটওয়ার্ক ব্যবহার করে'],
  privNetBody:  ['Twice, and both for the same errand: it asks GitHub what the newest release is, and if you say yes it downloads that file. Two files in the whole app can open a connection and both of them are that errand — so no entry of yours travels on a connection the app opens. Android’s backup does not use them either; it is the system copying the app’s settings, and it is the next section.',
                 'দুবার, আর দুবারই একই কাজে: গিটহাবকে জিজ্ঞেস করে সবচেয়ে নতুন রিলিজ কোনটা, আর আপনি হ্যাঁ বললে সেই ফাইলটা নামায়। পুরো অ্যাপে মাত্র দুটো ফাইল সংযোগ খুলতে পারে, আর দুটোই এই কাজেরই — তাই অ্যাপের খোলা কোনো সংযোগে আপনার হিসাব যায় না। অ্যান্ড্রয়েডের ব্যাকআপও ওই দুটো দিয়ে যায় না; ওটা সিস্টেমের নিজের হাতে অ্যাপের সেটিংস কপি করা, আর সেটাই পরের অংশ।'],

  privAutoTitle: ['What Android’s backup carries',

                  'অ্যান্ড্রয়েডের ব্যাকআপ কী নেয়'],
  privAutoBody: ['Android backs up apps to your Google account, and LedgerBook lets it — but only the app’s settings. The ledger is left out on purpose: it is encrypted under a key that cannot leave this phone, so a copy anywhere else could never be opened. Your PIN and your profile stay behind too. That is why moving to a new phone takes a backup file of your own: export it here, restore it there. Turn Android’s backup off in its own Settings and nothing goes at all; the app’s Backup page has the link.',
                 'অ্যান্ড্রয়েড অ্যাপগুলোর ব্যাকআপ আপনার গুগল অ্যাকাউন্টে রাখে, আর LedgerBook সেটা হতে দেয় — কিন্তু শুধু অ্যাপের সেটিংস। খাতা ইচ্ছা করেই বাইরে রাখা: সেটা এমন এক চাবিতে এনক্রিপ্ট করা যা এই ফোন ছাড়তে পারে না, তাই অন্য কোথাও কপি গেলেও খোলা যেত না। আপনার পিন আর প্রোফাইলও এখানেই থাকে। এজন্যই নতুন ফোনে যেতে নিজের একটা ব্যাকআপ ফাইল লাগে: এখানে export করুন, সেখানে ফিরিয়ে আনুন। অ্যান্ড্রয়েডের সেটিংস থেকে ব্যাকআপ বন্ধ করে দিলে কিছুই যায় না; অ্যাপের ব্যাকআপ পাতায় সেই লিংক আছে।'],

  privBackupTitle:['Backups you make yourself', 'নিজের হাতে বানানো ব্যাকআপ'],
  privBackupBody:['The backup you make from inside the app is a different thing: one ' +
                 'encrypted file, written where you point it. Nobody is sent a copy and ' +
                 'no service holds its key — which is the same sentence read the other ' +
                 'way: lose the file and the password, and nobody can get it back for ' +
                 'you either.',
                 'অ্যাপের ভেতর থেকে আপনি যে ব্যাকআপ বানান সেটা আলাদা জিনিস: একটা ' +
                 'এনক্রিপ্টেড ফাইল, আপনি যেখানে দেখাবেন সেখানে লেখা। কারও কাছে কপি ' +
                 'পাঠানো হয় না, চাবি রাখার কোনো সেবাও নেই — উল্টো করে পড়লে কথাটা ' +
                 'একই: ফাইল আর পাসওয়ার্ড দুটোই হারালে কেউ সেটা আপনাকে ফিরিয়েও দিতে পারবে না।'],

  privDeleteTitle:['Getting rid of it all', 'সব মুছে ফেলা'],
  privDeleteBody:['Uninstall the app. That is the whole procedure — no account to close ' +
                 'and no request to send, because there was never a copy anywhere to ask ' +
                 'about. Any backup files you wrote are yours to delete.',
                 'অ্যাপটা আনইনস্টল করুন। এটুকুই পুরো নিয়ম — বন্ধ করার মতো অ্যাকাউন্ট নেই, ' +
                 'পাঠানোর মতো অনুরোধ নেই, কারণ কোথাও কোনো কপিই ছিল না যে জিজ্ঞেস করতে হবে। ' +
                 'আপনি যে ব্যাকআপ ফাইলগুলো লিখেছেন সেগুলো আপনারই, মুছে ফেলবেন।'],

  // -- the band at the bottom of the home page --------------------------------
  ctaTitle:     ['Keep your books in your pocket', 'হিসাবের খাতা থাকুক আপনার পকেটে'],
  ctaFirst:     ['First time? It takes two minutes.', 'প্রথমবার? দুই মিনিটের কাজ।'],

  // -- footer ------------------------------------------------------------------
  footerNote:   ['Built for keeping one household’s books. No trackers on this page.',
                 'একটা সংসারের হিসাব রাখার জন্য বানানো। এই পাতায় কোনো ট্র্যাকার নেই।'],
  // The website's own version, in every footer -- not the app's, which the download
  // button names. SITE_VERSION in site.js is the number.
  siteVersion:  ['Website v{v}', 'ওয়েবসাইট v{v}']
};
