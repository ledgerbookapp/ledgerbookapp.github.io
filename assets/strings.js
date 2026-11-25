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
  navHome:      ['Home', 'হোম'],
  navInstall:   ['How to install',
                 'ইনস্টলের নিয়ম'],
  navFeatures:  ['Features', 'কী কী আছে'],
  navPrivacy:   ['Privacy', 'গোপনীয়তা'],
  langLabel:    ['বাংলা', 'English'],
  // Read out by the theme button's aria-label; the glyph beside it says the same thing
  // to everyone who can see it.
  toDark:       ['Switch to the dark theme', 'ডার্ক থিম চালু করুন'],
  toLight:      ['Switch to the light theme', 'লাইট থিম চালু করুন'],
  navDownload:  ['Download', 'ডাউনলোড'],
  menuOpen:     ['Open the menu', 'মেনু খুলুন'],
  menuClose:    ['Close the menu', 'মেনু বন্ধ করুন'],
  // The first thing a keyboard reaches on every page, shown only once it has focus.
  skipLink:     ['Skip to the content', 'মূল লেখায় যান'],
  // Each page's <title> and meta description, in the language on the page: the site opens in
  // Bangla, and a search engine that runs the script read a Bangla page under an English title.
  // Link previews (og:, twitter:) are read without script, so they stay in the HTML's English.
  docHome:      ['LedgerBook — your money, your phone, nobody else',
                 'LedgerBook — আপনার টাকার হিসাব আপনার ফোনেই'],
  docFeatures:  ['What LedgerBook does', 'LedgerBook কী কী করে'],
  docPrivacy:   ['LedgerBook privacy', 'LedgerBook-এর গোপনীয়তা'],
  docGet:       ['Downloading LedgerBook', 'LedgerBook ডাউনলোড হচ্ছে'],
  descHome:     ['A double-entry ledger for everyday money. No account to open, and your ledger stays on your phone unless you export it. Free, for Android.',
                 'প্রতিদিনের টাকার হিসাব রাখার দুতরফা খাতা। কোনো অ্যাকাউন্ট খুলতে হয় না, আর আপনি নিজে এক্সপোর্ট না করলে খাতা ফোনের বাইরে যায় না। ফ্রি, অ্যান্ড্রয়েডের জন্য।'],
  descFeatures: ['Double-entry books, five kinds of entry, analytics, loans, encrypted backups — on your phone, with no account.',
                 'দুতরফা হিসাব, পাঁচ রকম এন্ট্রি, বিশ্লেষণ, ধার, এনক্রিপ্ট করা ব্যাকআপ — আপনার ফোনেই, কোনো অ্যাকাউন্ট ছাড়া।'],
  descInstall:  ['Four steps to install LedgerBook on Android, and what the two warnings along the way mean.',
                 'অ্যান্ড্রয়েডে LedgerBook ইনস্টলের চার ধাপ, আর পথে আসা দুটি সতর্কতার মানে।'],
  descPrivacy:  ['Nothing is collected. Your entries stay in a database on your phone. The only network use is for app updates.',
                 'কিছুই সংগ্রহ করা হয় না। আপনার এন্ট্রি থাকে ফোনের একটি ডেটাবেসে। ইন্টারনেট লাগে শুধু আপডেটের জন্য।'],
  // The QR code's own words for a screen reader: what scanning it does.
  qrAlt:        ['QR code that downloads the newest LedgerBook', 'QR কোড — স্ক্যান করলে সর্বশেষ LedgerBook ডাউনলোড হয়'],

  // -- hero --------------------------------------------------------------------
  heroBadge:    ['Free', 'ফ্রি'],
  // The pill above the headline. The narrow screen gets the short one, because the long
  // one broke over three lines inside a pill meant to be one.
  heroPill:     ['Offline double-entry ledger for Android',
                 'অ্যান্ড্রয়েডের জন্য অফলাইন দুতরফা হিসাবের খাতা'],
  heroPillShort:['Offline ledger for Android', 'অ্যান্ড্রয়েডের অফলাইন খাতা'],
  // One sentence in two keys: the second half is set in the accent colour, and a colour
  // change mid-sentence needs an element boundary to hang on.
  taglineLead:  ['Your money, your phone,', 'আপনার টাকার হিসাব আপনার ফোনেই,'],
  taglineAccent:['nobody else.', 'আর কারও কাছে নয়।'],
  heroLead:     ['Accurate records of your everyday income and spending, in true double-entry. No account to open, your data is sent to nobody, and a mismatch in your books never stays hidden.',
                 'প্রতিদিনের আয়-ব্যয়ের নিখুঁত হিসাব — প্রকৃত দুতরফা পদ্ধতিতে। অ্যাকাউন্ট খোলার ঝামেলা নেই, কারও কাছে আপনার তথ্য পাঠানো হয় না, আর হিসাবের কোনো অমিল চাপা পড়ে থাকে না।'],
  download:     ['Download for Android', 'অ্যান্ড্রয়েডের জন্য ডাউনলোড'],
  versionLine:  ['Version {v} · {size} · Android 7.0 and up',
                 'ভার্সন {v} · {size} · অ্যান্ড্রয়েড ৭.০ বা তার পরের ভার্সন'],
  qrHead:       ['Scan to put it on your phone', 'স্ক্যান করে ফোনে নিন'],
  // A printed square cannot point at a file whose name carries the version number --
  // that would be a dead code the day after the next release. It points at get.html,
  // which looks the newest file up and hands the phone straight to it. Scanning skips
  // the install guide, so the sentence sends a first-timer there.
  qrBody:       ['Point a phone camera at it and the newest version downloads straight ' +
                 'away. First time? Read how to install first.',
                 'ফোনের ক্যামেরা কোডটির দিকে ধরুন — সর্বশেষ ভার্সন সঙ্গে সঙ্গে ডাউনলোড শুরু হবে। প্রথমবার? আগে ইনস্টলের নিয়মটি পড়ে নিন।'],
  // The same code on a phone, folded away until asked for: shown to a friend's camera.
  qrShare:      ['Install it on another phone', 'অন্য ফোনে ইনস্টল করুন'],
  qrShareBody:  ['Hold this screen up to the other phone’s camera. The newest version ' +
                 'downloads there straight away.',
                 'এই স্ক্রিনটি অন্য ফোনের ক্যামেরার সামনে ধরুন। ওই ফোনে সর্বশেষ ভার্সন সঙ্গে সঙ্গে ডাউনলোড শুরু হবে।'],
  // The note that appears once the file is asked for, on an Android phone. "The
  // browser", not Chrome: Samsung Internet and Firefox show it too, and pause the same.
  // The first line does not claim the download has started -- at that moment the browser
  // is usually still asking whether to keep the file.
  dlNoteStarted:['If the browser warns you, tap **Download anyway**.',
                 'ব্রাউজার সতর্ক করলে **Download anyway** চাপুন।'],
  dlNoteCheck:  ['Near the end, the browser checks the file for a few seconds. That is ' +
                 'normal — let it finish.',
                 'শেষের দিকে ব্রাউজার কয়েক সেকেন্ড ফাইলটি পরীক্ষা করে। এটি স্বাভাবিক — শেষ হতে দিন।'],
  dlNoteOpen:   ['When it is done, tap **Open** in the notification.',
                 'শেষ হলে নোটিফিকেশন থেকে **Open** চাপুন।'],
  dlNoteGuide:  ['Read how to install', 'ইনস্টলের নিয়ম দেখুন'],
  // get.html, the page the code opens. On screen for a second before the download.
  getTitle:     ['Downloading LedgerBook…', 'LedgerBook ডাউনলোড হচ্ছে…'],
  getLead:      ['Finding the newest version. The download starts by itself — if it does ' +
                 'not, use the button below.',
                 'সর্বশেষ ভার্সন খোঁজা হচ্ছে। ডাউনলোড নিজেই শুরু হবে — না হলে নিচের বোতামে চাপুন।'],
  versionLineShort:['Version {v} · {size} · Android 7.0+',
                 'ভার্সন {v} · {size} · অ্যান্ড্রয়েড ৭.০+'],

  // -- the four numbers under the hero -----------------------------------------
  stat1:        ['servers of ours — your books stay on your phone unless you export them',
                 'আমাদের কোনো সার্ভার নেই — আপনি এক্সপোর্ট না করলে হিসাব আপনার ফোনেই থাকে।'],
  stat2:        ['uses of the internet: checking for a new update and downloading it',
                 'ইন্টারনেট লাগে শুধু নতুন আপডেট চেক ও ডাউনলোড করতে।'],
  stat3:        ['permissions of its own, each with a specific job',
                 'অ্যাপের নিজের অনুমতি, প্রতিটির নির্দিষ্ট কাজ রয়েছে।'],
  stat4:        ['the whole app — works on Android 7.0 and later',
                 'পুরো অ্যাপের সাইজ — অ্যান্ড্রয়েড ৭.০ বা তার পরবর্তী সংস্করণে ব্যবহারযোগ্য।'],
  stat4Short:   ['the whole app',
                 'পুরো অ্যাপের সাইজ।'],

  // -- why ---------------------------------------------------------------------
  whyTitle:     ['Why this one', 'কেন LedgerBook'],
  whyH2:        ['Private by design, correct by design', 'তথ্য থাকে গোপন, হিসাব থাকে নির্ভুল'],
  whySub:       ['Where your data goes, whether the totals hold, and whether it needs a ' +
                 'network at all.',
                 'আপনার তথ্য কোথায় যায়, যোগফল ঠিক থাকে কি না, আর ইন্টারনেট আদৌ লাগে কি না।'],
  why1Head:     ['Your books stay with you',
                 'আপনার হিসাব আপনার কাছেই থাকে'],
  why1Body:     ['The app has no server of its own, so your transactions are never sent to us. The internet is used only to check for and download new updates. Android’s own backup is separate — what it stores is set out ',
                 'অ্যাপটির নিজস্ব কোনো সার্ভার নেই, তাই আপনার লেনদেনের তথ্য আমাদের কাছে পাঠানো হয় না। ইন্টারনেট ব্যবহার করা হয় শুধু নতুন আপডেট চেক ও ডাউনলোড করার জন্য। অ্যান্ড্রয়েডের নিজস্ব ব্যাকআপ ব্যবস্থা আলাদা — এতে কী কী তথ্য সংরক্ষিত হয়, তা '],
  // The sentence above carries on through a link to the privacy page and out again. The
  // spaces at the joins belong to the halves, so the link text is only the link.
  why1Link:     ['on the privacy page',
                 'গোপনীয়তা পাতায়'],
  why1End:      ['.',
                 ' লেখা আছে।'],
  why2Head:     ['Every taka is recorded on two sides',
                 'প্রতিটি টাকার হিসাব দুই দিকে বসে'],
  why2Body:     ['True double-entry, the way accountants keep their books. Money leaving one account is written into another. The Trial Balance page compares the totals of both sides, so a mismatch is easy to catch.',
                 'প্রকৃত দুতরফা হিসাব পদ্ধতি, যেভাবে হিসাবরক্ষকরা খাতা রাখেন। একটি অ্যাকাউন্ট থেকে টাকা বের হলে তা অন্য অ্যাকাউন্টে জমা হিসেবে লেখা হয়। Trial Balance পাতায় দুই দিকের যোগফল মিলিয়ে দেখা যায়, ফলে হিসাবের অমিল সহজেই ধরা পড়ে।'],
  why3Head:     ['It works with the phone in flight mode', 'ফ্লাইট মোডেও পুরোপুরি চলে'],
  why3Body:     ['No part of your bookkeeping needs the internet. Your ledger is encrypted on the phone. Backup files stay under your control, protected with a password if you choose. And the app opens with your PIN or fingerprint.',
                 'হিসাবের কোনো কাজেই ইন্টারনেটের প্রয়োজন হয় না। আপনার হিসাবের খাতা ফোনেই এনক্রিপ্ট করা থাকে। ব্যাকআপ ফাইল থাকে আপনার নিয়ন্ত্রণে, চাইলে পাসওয়ার্ড দিয়ে সুরক্ষিত রাখতে পারেন। আর অ্যাপ খুলতে ব্যবহার করতে পারেন পিন অথবা আঙুলের ছাপ।'],

  // -- at a glance -------------------------------------------------------------
  // Eight lines, each a heading and a sentence. The narrow screen gets a shorter sentence
  // where the long one ran to three lines in a half-width column; where the two would be
  // the same words there is only one key.
  featH2:       ['Everything it does, at a glance', 'এক নজরে সবকিছু'],
  g1Head:       ['Double-entry journal', 'দুতরফা হিসাব'],
  g1Body:       ['Every entry has a debit and a matching credit.',
                 'প্রতিটি এন্ট্রিতে একটি ডেবিট আর তার সমান একটি ক্রেডিট।'],
  g1Short:      ['A debit and a matching credit, every time.',
                 'প্রতিবার ডেবিট আর সমান ক্রেডিট।'],
  g2Head:       ['Trial Balance', 'রেওয়ামিল'],
  g2Body:       ['See both sides agree, so a wrong total is caught.',
                 'দুই দিকের যোগফল মেলানোর পাতা — ভুল যোগফল ধরা পড়ে।'],
  g2Short:      ['Both sides agree, or you see it.', 'দুই দিক মেলে, না মিললে চোখে পড়ে।'],
  g3Head:       ['Loan tracking', 'ধারের হিসাব'],
  g3Body:       ['Who owes what, one card for each mobile number.',
                 'কে কাকে কত দেবে — প্রতিটি মোবাইল নম্বরে একটি কার্ড।'],
  g3Short:      ['Who owes what, by mobile number.',
                 'কে কাকে কত দেবে, মোবাইল নম্বর ধরে।'],
  g4Head:       ['Due-date reminders',
                 'তারিখ এলে মনে করিয়ে দেয়'],
  g4Body:       ['When a loan falls due, a DPS instalment is near or a deposit matures.',
                 'ধার ফেরতের দিন এলে, DPS-এর কিস্তি কাছে এলে, বা জমার মেয়াদ শেষ হলে।'],
  g5Head:       ['Backups, your password',
                 'ব্যাকআপ, আপনার পাসওয়ার্ডে'],
  g5Body:       ['Backup files you keep, with a password if you want one.',
                 'ব্যাকআপ ফাইল থাকে আপনার কাছে, চাইলে পাসওয়ার্ড দিয়ে।'],
  g5Short:      ['Your files, your password.',
                 'আপনার ফাইল, আপনার পাসওয়ার্ড।'],
  g6Head:       ['PIN & fingerprint lock', 'পিন ও আঙুলের ছাপে তালা'],
  g6HeadShort:  ['PIN & fingerprint', 'পিন ও আঙুলের ছাপ'],
  g6Body:       ['A PIN or your fingerprint, locking again a minute after you leave.',
                 'পিন বা আঙুলের ছাপ — অ্যাপ থেকে বেরোনোর এক মিনিট পর আবার তালা লাগে।'],
  g6Short:      ['Locks again when you leave.',
                 'বেরোলে আবার তালা লাগে।'],
  g7Head:       ['In-app updates', 'অ্যাপের ভেতরেই আপডেট'],
  g7Body:       ['Checks for a new version, even when GitHub is busy, then downloads and installs it.',
                 'নতুন ভার্সন খোঁজে — GitHub ব্যস্ত থাকলেও — তারপর ডাউনলোড করে ইনস্টল করে।'],
  g7Short:      ['Checks, downloads, installs.', 'খোঁজে, ডাউনলোড করে, ইনস্টল করে।'],
  g8Head:       ['FDR & DPS',
                 'FDR ও DPS'],
  g8Body:       ['Term deposits with profit, tax and maturity worked out.',
                 'মেয়াদি জমা — মুনাফা, কর আর মেয়াদপূর্তির হিসাব অ্যাপ নিজেই করে।'],
  g8Short:      ['Profit, tax and maturity.',
                 'মুনাফা, কর আর মেয়াদপূর্তি।'],

  // -- trust -------------------------------------------------------------------
  trustTitle:   ['Published here, not on the Play Store',
                 'প্লে স্টোরে নয়, এখানেই পাবেন'],
  trustBody:    ['It is published here instead, as a file you download and install yourself. Your phone will warn you about that, because a phone cannot tell one unknown file from another. What you can check is whether the file is exactly the one published — every release carries a SHA-256 fingerprint, and the install guide shows how to check it.',
                 'এটি প্লে স্টোরে নয়, এখানে একটি ফাইল হিসেবে দেওয়া হয় — আপনি নিজে ডাউনলোড করে ইনস্টল করবেন। এতে ফোন সতর্ক করবে, কারণ অচেনা ফাইলগুলোর মধ্যে ফোন তফাত করতে পারে না। তবে ফাইলটি হুবহু প্রকাশিত ফাইলটিই কি না, তা মিলিয়ে দেখা যায় — প্রতিটি রিলিজের সঙ্গে একটি SHA-256 ছাপ (ফাইলের নিজস্ব একটি লম্বা সংখ্যা) থাকে, আর ইনস্টলের পাতায় মেলানোর নিয়ম দেওয়া আছে।'],

  installLink:  ['Read the install guide', 'ইনস্টলের নিয়ম পড়ুন'],
  // The card beside it. Filled from the releases API like the download button; until
  // it answers the card says "latest" rather than a number it would have to remember.
  relTitle:     ['Release {v}', 'রিলিজ {v}'],
  relLatest:    ['Latest release', 'সর্বশেষ রিলিজ'],
  relVerifiable:['Verifiable', 'মিলিয়ে দেখা যায়'],
  // The release's own notes, as the app's update dialog shows them. They are written once,
  // in English, so the Bangla page says so rather than passing them off as its own words.
  relNotes:     ['What’s new',
                 'নতুন যা আছে'],
  relNotesLang: ['The notes are written in English.', 'বিবরণটি ইংরেজিতে লেখা।'],
  relSize:      ['File size', 'ফাইলের আকার'],
  relRequires:  ['Requires', 'যা লাগবে'],
  relAndroid:   ['Android 7.0 and up', 'অ্যান্ড্রয়েড ৭.০ বা তার পরের ভার্সন'],
  relHashWait:  ['Listed on the releases page', 'রিলিজ পাতায় দেওয়া আছে'],

  // -- install -----------------------------------------------------------------
  // One line in both languages: the longer Bangla wrapped to two, and the whole page
  // dropped 97px the moment the language changed.
  installTitle: ['Installing LedgerBook', 'LedgerBook ইনস্টল'],
  installLead:  ['Four steps, about two minutes. Your phone will show two warnings along ' +
                 'the way and both are expected — they appear for every app that does not ' +
                 'come from the Play Store, not because of anything about this one.',
                 'চার ধাপ, মোটামুটি দুই মিনিট। মাঝে ফোন দুবার সতর্ক করবে — দুটিই স্বাভাবিক। প্লে স্টোরের বাইরের যেকোনো অ্যাপেই এমন বার্তা আসে, এই অ্যাপের কোনো সমস্যার কারণে নয়।'],
  step1Head:    ['Download the file', 'ফাইলটি ডাউনলোড করুন'],
  step1Body:    ['Tap the download button. Chrome may say the file "might be harmful" — ' +
                 'it says that about every APK. Choose Download anyway.',
                 'ডাউনলোড বোতামে চাপুন। ক্রোম হয়তো বলবে ফাইলটি "might be harmful" — যেকোনো APK-তেই সে এটি বলে। Download anyway বেছে নিন।'],
  step2Head:    ['Open it', 'ফাইলটি খুলুন'],
  step2Body:    ['Open the downloaded file. Android says this source is not allowed to ' +
                 'install apps yet. Tap **Settings** — not Cancel — and turn on **Allow from ' +
                 'this source**. The install carries on by itself from there.',
                 'ডাউনলোড হওয়া ফাইলটি খুলুন। অ্যান্ড্রয়েড বলবে, এখান থেকে অ্যাপ ইনস্টলের অনুমতি এখনো নেই। **Settings**-এ চাপুন — Cancel নয় — আর **Allow from this source** চালু করুন। এরপর ইনস্টল নিজে থেকেই এগোবে।'],
  step3Head:    ['Install', 'ইনস্টল করুন'],
  step3Body:    ['Tap Install. Play Protect then says it has not seen this app before and ' +
                 'offers to scan it — choose **Scan app**. It takes about a minute and comes ' +
                 'back with **This app looks safe**, and then you tap Install again.',
                 'Install-এ চাপুন। Play Protect বলবে এই অ্যাপ সে আগে দেখেনি, আর স্ক্যান করতে চাইবে — **Scan app** বেছে নিন। মিনিটখানেক লাগে; তারপর দেখাবে **This app looks safe**। এবার আবার Install-এ চাপুন।'],
  step4Head:    ['Set your PIN', 'পিন ঠিক করুন'],
  step4Body:    ['Open LedgerBook. It asks what to call you, then how you would like to type your PIN — Number Pad or Keyboard — then for a four-digit PIN, typed twice. The PIN stays on this phone and is never copied — not even into a backup. There is nowhere to sign in to and no account to make.',
                 'LedgerBook খুলুন। প্রথমে জানতে চাইবে আপনাকে কী নামে ডাকবে, তারপর পিন কীভাবে দেবেন — নম্বর প্যাডে না কিবোর্ডে — তারপর চার অঙ্কের একটি পিন, দুবার। পিন এই ফোনেই থাকে, কোথাও কপি হয় না — ব্যাকআপেও না। সাইন ইন বা অ্যাকাউন্ট খোলার কোনো ঝামেলা নেই।'],

  // Captions under the step screenshots. They name the button to press, because a reader
  // matching the picture to their own screen is looking for exactly that.
  cap1:         ['Chrome says this about every APK. Choose Download anyway.',
                 'যেকোনো APK-তেই ক্রোম এটি বলে। Download anyway বেছে নিন।'],
  cap2:         ['Tap Settings on this one — not Cancel.',
                 'এখানে Settings-এ চাপুন — Cancel নয়।'],
  cap2b:        ['Turn on Allow from this source. The install goes on from here.',
                 'Allow from this source চালু করুন। ইনস্টল এখান থেকে নিজেই এগোবে।'],
  // The size comes from the release, like every other number here; until it does the
  // caption says only what to press.
  cap3:         ['Tap Install. The app is {size}.', 'Install-এ চাপুন। অ্যাপটি {size}।'],
  cap3Plain:    ['Tap Install.', 'Install-এ চাপুন।'],
  cap3b:        ['Play Protect has not seen it before. Choose Scan app.',
                 'Play Protect এটি আগে দেখেনি। Scan app বেছে নিন।'],
  cap3c:        ['What the scan came back with. Tap Install.',
                 'স্ক্যানের পর এটি দেখায়। Install-এ চাপুন।'],
  cap4a:        ['It asks what to call you. You can change this any time in Settings.',
                 'আপনাকে কী নামে ডাকবে, জানতে চায়। পরে যেকোনো সময় সেটিংস থেকে বদলানো যায়।'],
  cap4b:        ['Four digits. Step 2 of 3.',
                 'চার অঙ্ক। ধাপ ২/৩।'],
  cap4c:        ['The same four digits again. The PIN is never copied anywhere.',
                 'একই চার অঙ্ক আবার। পিন কোথাও কপি হয় না।'],

  // -- the install page's furniture --------------------------------------------
  stepWarning:  ['Warning', 'সতর্কতা'],
  warn1:        ['Expected warning 1 of 2', 'স্বাভাবিক সতর্কতা ১/২'],
  warn2:        ['Expected warning 2 of 2', 'স্বাভাবিক সতর্কতা ২/২'],
  // The small labels over each picture in steps 3 and 4, in the order they happen.
  // The letters of a step's pictures, in the reader's alphabet (site 2.25.26).
  letA:         ['a', 'ক'],
  letB:         ['b', 'খ'],
  letC:         ['c', 'গ'],
  s3a:          ['Tap Install', 'Install-এ চাপুন'],
  s3b:          ['Choose Scan app', 'Scan app বেছে নিন'],
  s3c:          ['Tap Install again', 'আবার Install-এ চাপুন'],
  s4a:          ['Tell it your name', 'নাম দিন'],
  s4b:          ['Create your PIN', 'পিন দিন'],
  s4c:          ['Confirm your PIN', 'পিন আবার দিন'],
  chipNoSignIn: ['No sign-in', 'সাইন ইন নেই'],
  chipNoAccount:['No account', 'অ্যাকাউন্ট নেই'],
  chipPinStays: ['PIN never leaves the phone', 'পিন ফোনের বাইরে যায় না'],
  installDone:  ['That’s it — the app is ready to use.', 'ব্যস — অ্যাপ এখন ব্যবহারের জন্য তৈরি।'],
  // Stepping through a step's pictures on a phone, where they show one at a time.
  galPrev:      ['Prev', 'আগের'],
  galNext:      ['Next', 'পরের'],
  // The fingerprint card. {v} is filled from the releases API, like every version here.
  hashTitle:    ['SHA-256 · Version {v}', 'SHA-256 · ভার্সন {v}'],
  hashCopy:     ['Copy', 'কপি'],
  hashCopied:   ['Copied', 'কপি হয়েছে'],

  verifyTitle:  ['Checking you got the right file', 'ঠিক ফাইলটিই পেলেন কি না দেখুন'],
  verifyBody:   ['Every release publishes the fingerprint of its own file. If the number ' +
                 'worked out from your copy matches the one below, the file is byte for byte ' +
                 'the one that was published. The app checks its own updates the same way: one ' +
                 'that does not match its fingerprint, or is signed with another key, is not ' +
                 'installed. This is optional — most people skip it.',
                 'প্রতিটি রিলিজের সঙ্গে তার ফাইলের একটি ছাপ (SHA-256) দেওয়া থাকে। আপনার ফাইল থেকে বের করা সংখ্যাটি নিচের সংখ্যার সঙ্গে মিললে, ফাইলটি হুবহু প্রকাশিত ফাইলটিই। অ্যাপ নিজের আপডেটও এভাবেই মিলিয়ে দেখে: ছাপ না মিললে, বা অন্য চাবিতে সই করা হলে, আপডেট ইনস্টল হয় না। এটি না করলেও চলে — বেশির ভাগ মানুষ এই ধাপ বাদ দেন।'],
  // How to work the number out. A computer is named, not an app: every one carries the
  // tool already, and no checksum app is vouched for here.
  // The words only; the two commands under them are code, the same in both languages, set
  // on lines of their own that do not wrap -- wrapped, "certutil -" broke at its hyphen and
  // read as two commands on a phone. The file name in them is filled from the release.
  verifyHow:    ['To work the number out, copy the file to a computer and run one of these in its folder:',
                 'সংখ্যাটি বের করতে ফাইলটি কম্পিউটারে নিন, আর যে ফোল্ডারে রেখেছেন সেখানে নিচের একটি কমান্ড চালান:'],
  verifyWin:    ['Windows', 'Windows'],
  verifyMac:    ['Mac or Linux', 'Mac বা Linux'],

  // -- permissions -------------------------------------------------------------
  permEyebrow:  ['Permissions', 'অনুমতি'],
  permTitle:    ['What it asks for, and why', 'কী কী অনুমতি চায়, আর কেন'],
  // Four since app 2.0.7, which added the battery one; the home page's stat says the same
  // figure, so the two change together.
  permSub:      ['Four permissions of its own, each with a single job. The Android libraries it is built on add seven routine ones, for the fingerprint lock and for background work such as reminders; none of them gives access to your ledger or to the internet.',
                 'অ্যাপের নিজের চারটি অনুমতি, প্রতিটির কাজ একটিই। এ ছাড়া যেসব অ্যান্ড্রয়েড লাইব্রেরি দিয়ে অ্যাপটি তৈরি, সেগুলো সাতটি সাধারণ অনুমতি যোগ করে — আঙুলের ছাপের তালা আর রিমাইন্ডারের মতো ব্যাকগ্রাউন্ড কাজের জন্য; এগুলোর কোনোটি দিয়ে আপনার খাতা বা ইন্টারনেটে যাওয়া যায় না।'],
  permOptional: ['Optional', 'ঐচ্ছিক'],
  permInternet: ['Internet', 'ইন্টারনেট'],
  permInternetW: ['Only to check for a newer version, and to download it when you say yes.',
                  'শুধু নতুন ভার্সন খুঁজতে, আর আপনি রাজি হলে সেটি ডাউনলোড করতে।'],
  permNotify:   ['Notifications', 'নোটিফিকেশন'],
  permNotifyW:  ['To remind you when a loan is due, a DPS instalment is near or a deposit matures, and to tell you about updates and backups.',
                 'ধার ফেরতের দিন এলে, DPS-এর কিস্তি কাছে এলে বা জমার মেয়াদ শেষ হলে মনে করিয়ে দিতে, আর আপডেট ও ব্যাকআপের খবর দিতে।'],
  // "Optional" is a badge beside the heading wherever this is shown, so the sentence
  // leaves it out.
  permInstall:  ['Install apps', 'অ্যাপ ইনস্টল'],
  permInstallW: ['To install the update it downloaded for you.',
                 'আপনার জন্য ডাউনলোড করা আপডেটটি ইনস্টল করতে।'],
  // REQUEST_IGNORE_BATTERY_OPTIMIZATIONS (app 2.0.7): asked only from Background Work on
  // the Settings and Backup pages, when a battery saver is holding the app back.
  permBattery:  ['Run in the background', 'ব্যাকগ্রাউন্ডে চলা'],
  permBatteryW: ['So a battery saver does not hold back the daily backup and the reminders. Asked only when you tap Background Work.',
                 'যাতে ব্যাটারি সেভার প্রতিদিনের ব্যাকআপ আর রিমাইন্ডার আটকে না দেয়। শুধু আপনি "ব্যাকগ্রাউন্ড কাজ"-এ চাপলেই চায়।'],

  // -- questions, on the home page ------------------------------------------------
  // What a first-time reader asks before installing a file from outside the Play Store.
  // Every answer is a thing the rest of the site already says; this only gathers it.
  faqEyebrow:   ['Questions', 'প্রশ্ন'],
  faqTitle:     ['Before you install', 'ইনস্টলের আগে'],
  faqQ1:        ['My phone warned me. Is it safe?', 'ফোন সতর্ক করল। এটি কি নিরাপদ?'],
  faqA1:        ['Android shows that warning for every app that does not come from the Play ' +
                 'Store, because it cannot tell one unknown file from another. Play Protect ' +
                 'then scans this one and says it looks safe. To be sure the file is exactly ' +
                 'the one published, the install guide shows how to check its SHA-256 fingerprint.',
                 'প্লে স্টোরের বাইরের যেকোনো অ্যাপেই অ্যান্ড্রয়েড এই সতর্কতা দেখায়, কারণ অচেনা ফাইলগুলোর মধ্যে সে তফাত করতে পারে না। এরপর Play Protect অ্যাপটি স্ক্যান করে জানায়, এটি নিরাপদ মনে হচ্ছে। ফাইলটি হুবহু প্রকাশিত ফাইলটিই কি না নিশ্চিত হতে চাইলে, ইনস্টলের পাতায় SHA-256 ছাপ মিলিয়ে দেখার নিয়ম আছে।'],
  faqQ2:        ['Does it cost anything?', 'টাকা লাগে?'],
  faqA2:        ['No. It is free, with no ads and no account to open.',
                 'না। এটি ফ্রি — কোনো বিজ্ঞাপন নেই, অ্যাকাউন্টও খুলতে হয় না।'],
  faqQ3:        ['What if I change or lose my phone?', 'ফোন বদলালে বা হারালে কী হবে?'],
  faqA3:        ['Your ledger is encrypted on this phone, so it does not move to a new one by itself. Before changing phones, create a backup file from the app’s Backup page, protected with a password if you like. On the new phone, install the app and set a PIN, then restore that backup file from the Backup page. Install the newest version there: a backup made by version 2.3.0 or later does not open in an older one, and one with a password made on Android 8 or newer needs Android 8 or newer to open. So that a lost phone does not mean lost books, keep a copy of the backup off the phone too, such as on Google Drive.',
                 'আপনার হিসাবের খাতা এই ফোনেই এনক্রিপ্ট করা থাকে, তাই নিজে থেকে নতুন ফোনে স্থানান্তরিত হয় না। ফোন পরিবর্তনের আগে অ্যাপের ব্যাকআপ পাতা থেকে একটি ব্যাকআপ ফাইল তৈরি করুন। চাইলে পাসওয়ার্ড দিয়ে ফাইলটি সুরক্ষিত রাখতে পারেন। নতুন ফোনে অ্যাপ ইনস্টল করে পিন সেট করুন। এরপর ব্যাকআপ পাতা থেকে আগের ব্যাকআপ ফাইলটি Restore করুন। নতুন ফোনে সর্বশেষ ভার্সনটিই ইনস্টল করুন: ২.৩.০ বা তার পরের ভার্সনে তৈরি ব্যাকআপ পুরোনো ভার্সনে খোলে না, আর অ্যান্ড্রয়েড ৮ বা তার নতুন ফোনে পাসওয়ার্ড দিয়ে তৈরি ব্যাকআপ খুলতেও অ্যান্ড্রয়েড ৮ বা তার নতুন ফোন লাগে। ফোন হারিয়ে গেলেও যেন হিসাব হারিয়ে না যায়, সেজন্য ব্যাকআপ ফাইলের একটি কপি ফোনের বাইরেও, যেমন Google Drive-এ সংরক্ষণ করে রাখুন।'],
  faqQ4:        ['Does it need the internet?', 'ইন্টারনেট লাগে?'],
  faqA4:        ['No. Everything works offline. It goes online only to check for a newer ' +
                 'version, and to download it when you say yes.',
                 'না। সব কাজ অফলাইনেই চলে। ইন্টারনেট লাগে শুধু নতুন ভার্সন এসেছে কি না দেখতে, আর আপনি রাজি হলে সেটি ডাউনলোড করতে।'],
  faqQ5:        ['Is there an iPhone version?', 'আইফোনে চলে?'],
  faqA5:        ['No. It is for Android only, version 7.0 and up.',
                 'না। শুধু অ্যান্ড্রয়েড ৭.০ বা তার পরের ভার্সনে চলে।'],
  faqQ6:        ['How do I get updates?', 'আপডেট পাব কীভাবে?'],
  faqA6:        ['The app tells you when a new version is out, downloads it when you say yes, ' +
                 'and installs it. You do not need to come back to this page.',
                 'নতুন ভার্সন এলে অ্যাপ নিজেই জানায়; আপনি রাজি হলে ডাউনলোড করে ইনস্টলও করে দেয়। এই পাতায় আর ফিরে আসতে হয় না।'],

  // -- features ----------------------------------------------------------------
  featTitle:    ['What it does', 'কী কী করে'],
  featLead:     ['Everything below is in the app today — there is no roadmap on this page, ' +
                 'because a feature you cannot use yet is not a feature.',
                 'নিচের সবকিছু আজকের অ্যাপেই আছে। "শিগগির আসছে" বলে কিছু রাখা হয়নি — যা এখনো ব্যবহার করা যায় না, তাকে সুবিধা বলা যায় না।'],

  shotsTitle:   ['A look at it', 'দেখতে কেমন'],
  // Shot on a phone with a made-up ledger on it, not the author's own. A page that
  // spends three paragraphs on where your money data does not go cannot illustrate
  // itself with somebody's real balances, bank suffixes and creditors' names.
  shotsLead:    ['Six screens, on a sample ledger made up for the purpose.',
                 'ছয়টি পাতা, একটি বানানো নমুনা খাতায় তোলা।'],
  // Added on a phone, where the six sit in a row wider than the screen.
  shotsSwipe:   [' Swipe to see them all.', ' সবগুলো দেখতে পাশে সোয়াইপ করুন।'],
  // The full-size view of a screenshot. Read out by screen readers, as the buttons'
  // labels; the glyphs on them say the same to everyone else.
  lbClose:      ['Close', 'বন্ধ করুন'],
  shotHome:     ["The first screen", "প্রথম পাতা"],
  shotTxn:      ["Every entry, filtered", 'সব এন্ট্রি, বাছাই করে দেখা'],
  shotAccounts: ["The accounts", "অ্যাকাউন্টগুলো"],
  shotLoans:    ["Who owes whom", 'কে কার কাছে কত পায়'],
  shotAnalytics:["Where the month went", 'মাসের টাকা কোথায় গেল'],
  shotBackup:   ["Backup and restore", 'ব্যাকআপ ও রিস্টোর'],
  shotInvest:   ["FDR and DPS together", 'FDR আর DPS একসঙ্গে'],
  // Money Flow, beside "Seeing where it went" (the gallery's 06-Money-Flow, app 2.1.3).
  shotFlow:     ["Money in and out, account by account", "অ্যাকাউন্ট ধরে টাকা আসা-যাওয়া"],

  featCta:      ['All of it, on your phone', 'সবকিছু, আপনার ফোনেই'],
  featBooksTitle:['Keeping the books', 'হিসাব রাখা'],
  f0Head:       ['What you have, on the first screen', 'আপনার কী আছে, প্রথম পাতাতেই'],
  f0Body:       ['The app opens on one figure — everything you own less everything you owe — with what others owe you and what you owe beside it, and this month’s income, spending and savings underneath. Income and Expense have their own buttons right there, and the other pages are a tile or the bottom bar away.',
                 'অ্যাপ খুললেই একটি অঙ্ক — আপনার যা আছে, তা থেকে আপনার দেনা বাদ দিয়ে। পাশে থাকে কে আপনাকে কত দেবে আর আপনি কাকে কত দেবেন, আর নিচে এই মাসের আয়, ব্যয় আর সঞ্চয়। আয় আর ব্যয়ের বোতাম সেখানেই, আর বাকি পাতাগুলোয় যাওয়া যায় একই স্ক্রিনের টাইল বা নিচের বার থেকে।'],
  f1Head:       ['Five kinds of entry', 'পাঁচ রকম এন্ট্রি'],
  // 1.1.97–1.1.99: the amount on its own card with quick adds, and the bill calculator on
  // Expense. The balance check is in fCheckBody since website 2.25.2.
  f1Body:       ['Income, expense, transfer between your own accounts, and cash in or out of the bank — each its own screen, asking only what that entry needs and offering only the accounts that fit it. Type the amount on its card or add ৳500, ৳1,000 or ৳5,000 in a tap, and add up a bill on Expense with + − × ÷.',
                 'আয়, ব্যয়, নিজের অ্যাকাউন্টের মধ্যে ট্রান্সফার, আর ব্যাংকে জমা বা ব্যাংক থেকে উত্তোলন — প্রতিটির আলাদা পাতা, যেখানে চাওয়া হয় শুধু দরকারি তথ্য, আর দেখায় শুধু মানানসই অ্যাকাউন্ট। অঙ্ক লিখুন তার কার্ডে, বা এক চাপে ৳৫০০, ৳১,০০০ বা ৳৫,০০০ যোগ করুন; ব্যয়ের পাতায় + − × ÷ দিয়ে বিলের হিসাবও করা যায়।'],
  // Split from f1Body and f2Body (website 2.25.2): the balance check (1.1.97–1.1.99), entries
  // dated ahead, and an account that still holds money asking for it to be moved first.
  fCheckHead:   ['Checked before it is saved or deleted',
                 'সেভ বা মোছার আগেই যাচাই'],
  fCheckBody:   ['An amount larger than the account holds is stopped before it is saved. Date an entry ahead and it waits out of the balance until its day, and the money it will need is kept for it. An account that still holds money cannot simply vanish: deleting it asks you to move that money first. An account that has gone below ৳0 is named on the Accounts page.',
                 'অ্যাকাউন্টে যত টাকা আছে তার বেশি দিলে সেভ হওয়ার আগেই আটকে যায়। সামনের কোনো তারিখে এন্ট্রি দিলে সেই দিন না আসা পর্যন্ত ব্যালেন্সে ধরা হয় না, আর তার জন্য দরকারি টাকা আলাদা করে রাখা হয়। যে অ্যাকাউন্টে এখনো টাকা আছে, সেটি সরাসরি মুছে ফেলা যায় না: মুছতে গেলে আগে সেই টাকা অন্য অ্যাকাউন্টে সরাতে বলে। ৳০-এর নিচে নেমে যাওয়া অ্যাকাউন্টের নাম অ্যাকাউন্টস পাতায় দেখায়।'],
  // 2.0.9–2.1.1: cards show their network, numbers their last four digits. 2.1.4: a credit card says Due or Credit.
  // 2.2.4: a bank account or wallet shares its details (AccountShareDialog: ticked lines, a preview, never the balance).
  // 2.2.3, in fExpBody, f9Body and fLookBody: the statement names its period and runs to today; a
  // reminder goes once its loan is paid or its deposit closed; the phone's larger text is followed.
  f2Head:       ['Bank, cards, wallet, cash and deposits',
                 'ব্যাংক, কার্ড, ওয়ালেট, নগদ আর জমা'],
  f2Body:       ['Accounts sit in groups — bank, cash, wallet and deposits — each in a colour you choose, with a total per group and one eye that hides all the figures. A credit or debit card shows its network — Visa, Mastercard, American Express or UnionPay — and only the last four digits of its number, though search finds the whole of it. A credit card says what is Due, or the Credit it holds once overpaid.',
                 'অ্যাকাউন্টগুলো ভাগ করা থাকে — ব্যাংক, নগদ, ওয়ালেট আর জমা; প্রতিটির রং আপনি বেছে নেন, প্রতিটি ভাগের মোট আলাদা দেখায়, আর চোখের চিহ্নে চাপলে সব টাকার অঙ্ক লুকিয়ে যায়। ক্রেডিট বা ডেবিট কার্ডে তার নেটওয়ার্ক দেখায় — Visa, Mastercard, American Express বা UnionPay — আর নম্বরের শুধু শেষ চার অঙ্ক; তবে সার্চে পুরো নম্বর দিয়েও খোঁজা যায়। ক্রেডিট কার্ডে দেখায় কত বকেয়া, আর দেনার চেয়ে বেশি শোধ করলে কত জমা আছে।'],
  fShareHead:   ['Share bank and wallet details',
                 'ব্যাংক ও ওয়ালেটের তথ্য শেয়ার করুন'],
  f2Share:      ['Tap a bank account or wallet with a saved number and share its details from the panel that opens — such as the name, the account number, and a bank’s branch and routing number. Details can be shared in English or Bangla. Tick what to send and preview it first. Your balance is never shared.',
                 'নম্বর সেভ করা ব্যাংক অ্যাকাউন্ট বা ওয়ালেটে চাপ দিলে যে প্যানেল খোলে, সেখান থেকেই তথ্য শেয়ার করতে পারবেন — যেমন নাম, অ্যাকাউন্ট নম্বর, ব্যাংকের শাখা ও রাউটিং নম্বর। ইংরেজি বা বাংলায় শেয়ার করা যায়। কোন তথ্য যাবে তা টিক দিয়ে বেছে নিন, পাঠানোর আগে প্রিভিউ দেখুন। আপনার ব্যালেন্স কখনোই শেয়ার হবে না।'],
  f3Head:       ['A trial balance that proves itself', 'রেওয়ামিল: হিসাব নিজেই মিলিয়ে দেখায়'],
  f3Body:       ['Every amount is written twice, once on each side. The Trial Balance page ' +
                 'adds both sides up and shows them agreeing — so if a total is ever wrong, ' +
                 'you find out on that page instead of months later. If a check cannot finish, ' +
                 'the page says so and offers Retry.',
                 'প্রতিটি অঙ্ক দুবার লেখা হয়, দুই দিকে একবার করে। রেওয়ামিল পাতা দুই দিকের যোগফল মিলিয়ে দেখায় — তাই কোনো হিসাব ভুল হলে কয়েক মাস পরে নয়, ওই পাতাতেই ধরা পড়ে। কোনো যাচাই শেষ না হলে পাতাটি তা জানায়, সঙ্গে থাকে "পুনরায় চেষ্টা" বোতাম।'],
  // Two cards added for app 1.1.99. Entries are never deleted -- the Edit page and the
  // detail dialog both reverse instead, behind the PIN -- and the exports carry every
  // transaction. The PDF has no password, so this says nothing about one. 2.1.7: the PDF's
  // heading carries the profile's phone and email under the name.
  fRevHead:     ['Mistakes are reversed, not erased',
                 'ভুল মুছে ফেলা নয়, রিভার্স করে সংশোধন'],
  fRevBody:     ['Open an entry and Reverse it — after your PIN or fingerprint, the app adds an opposite entry and both stay in the history. Edit corrects the entry itself and keeps no earlier version. If taking money back would leave a balance below ৳0, the app asks first; an edit that spends more than the account holds is stopped.',
                 'এন্ট্রি খুলে Reverse করুন — পিন বা আঙুলের ছাপ দেওয়ার পর অ্যাপ বিপরীত একটি এন্ট্রি তৈরি করে, আর দুটি এন্ট্রিই ইতিহাসে থেকে যায়। Edit করলে এন্ট্রিটিই ঠিক হয়, আগের রূপ থাকে না। টাকা ফিরে গিয়ে ব্যালেন্স ৳০-এর নিচে নামার মতো হলে অ্যাপ আগে অনুমতি চায়; অ্যাকাউন্টে যত টাকা আছে তার বেশি খরচের Edit সেভ হয় না।'],
  fExpHead:     ['Your books, to take away', 'আপনার হিসাব, সঙ্গে নিয়ে যান'],
  fExpBody:     ['Export a readable PDF report, or a CSV file that opens in Excel with Bangla intact — every transaction your filters keep, not only those on screen; a PDF’s table lists the newest 5,000. Your profile’s phone and email sit under your name, and the heading names the month, the dates or All Time; this month’s runs to today. Each export asks for your PIN or fingerprint first.',
                 'লেনদেন এক্সপোর্ট করুন সহজে পড়ার মতো PDF রিপোর্টে, অথবা CSV ফাইলে — যা Excel-এ খোলে, বাংলা লেখা ঠিক রেখেই। ফিল্টারে থাকা সব লেনদেনই যায়, শুধু স্ক্রিনেরগুলো নয়; PDF-এর তালিকায় থাকে সবচেয়ে নতুন ৫,০০০টি। নামের নিচে থাকে প্রোফাইলের ফোন নম্বর ও ইমেইল, শিরোনামে থাকে মাস, তারিখ, নাকি শুরু থেকে সব; চলতি মাসের হিসাব ধরা হয় আজ পর্যন্ত। প্রতিবার এক্সপোর্টের আগে পিন বা আঙুলের ছাপ চায়।'],

  featDepTitle: ['Deposits that earn', 'মুনাফা দেয় এমন জমা'],
  d0Head:       ['FDR profit, on its own schedule', 'FDR-এর মুনাফা, নিজের সময়মতো'],
  // 1.1.99: Every 1, 2, 3 or 4 months, or Other for any whole number of months.
  d0Body:       ['An FDR pays its profit into the account you link — every 1, 2, 3 or 4 months or any other number of months you set, all at maturity, or on the day it opens. Source tax comes off at your TIN rate, and each payment is dated to the period it was earned for. If the phone’s clock was set ahead and a profit came before its day, one tap takes it back, and it comes again when it is due.',
                 'FDR-এর মুনাফা জমা হয় আপনার বেছে নেওয়া অ্যাকাউন্টে — ১, ২, ৩ বা ৪ মাস পরপর, আপনার ঠিক করা যেকোনো মাস পরপর, মেয়াদ শেষে একসঙ্গে, অথবা খোলার দিনেই। উৎসে কর কাটা হয় আপনার TIN অনুযায়ী হারে, আর প্রতিটি মুনাফার তারিখ পড়ে যে সময়ের জন্য সেটি পাওয়া, সেই সময়ে। ফোনের ঘড়ি এগিয়ে থাকায় কোনো মুনাফা আগেভাগে বসে গেলে এক চাপে সেটি ফেরানো যায়; ঠিক দিনে সেটি আবার আসে।'],
  d1Head:       ['A DPS that grows on itself', 'DPS, যা নিজের মুনাফাতেই বাড়ে'],
  // 2.0.1: a DPS pays every 1, 2, 3 or 4 months, or any other number (it was 1, 3 or 6).
  // 2.3.0: instalments can be paid after maturity, and earn nothing (3b6b4152).
  d1Body:       ['Pay instalments every 1, 2, 3 or 4 months, or any other number of months you set — Pay lights up when one is due, and two unpaid ones raise a warning. Instalments left unpaid can still be paid after maturity; they earn no profit. Each year’s profit joins the deposit, so the next year earns on it too. A matured DPS can be paid back as a monthly pension.',
                 'কিস্তি দিন ১, ২, ৩ বা ৪ মাস পরপর, অথবা আপনার ঠিক করা যেকোনো মাস পরপর। কিস্তির সময় হলে "জমা দিন" বোতাম জ্বলে ওঠে, আর দুটি কিস্তি বাকি পড়লে সতর্ক করে। মেয়াদ শেষের পরেও বাকি কিস্তি জমা দেওয়া যায়, তবে সেগুলো কোনো মুনাফা পায় না। প্রতি বছরের মুনাফা জমার সঙ্গে যোগ হয়, তাই পরের বছর সেটির ওপরেও মুনাফা আসে। মেয়াদ শেষে চাইলে সেই টাকা মাসিক পেনশন হিসেবে নেওয়া যায়।'],
  // 2.1.4: a DPS with no rate shows its Balance; a take-back states its limit first.
  d2Head:       ['When the bank sets the rate later', 'ব্যাংক যখন হার পরে জানায়'],
  d2Body:       ['Some banks declare the final rate afterwards. Keep such a deposit without a rate and take each profit at the amount on your statement; add what the bank pays or takes back once the rate is declared — the app says up front the most it can take back. A DPS without a rate shows its Balance: what you paid in and the profit added, together. A wrong figure can be undone and entered again. Profit the bank adds to an FDR later first covers any excise duty the FDR still owes, as a month’s profit does.',
                 'কিছু ব্যাংক চূড়ান্ত হার পরে ঘোষণা করে। এমন জমা হার ছাড়াই রাখুন, আর প্রতিবারের মুনাফা লিখুন স্টেটমেন্টের অঙ্কে। হার ঘোষণার পর ব্যাংক বাড়তি যা দেয় বা ফেরত নেয়, সেটিও যোগ করা যায় — সবচেয়ে বেশি কত ফেরত নিতে পারে, অ্যাপ আগেই বলে দেয়। হার ছাড়া DPS-এ দেখায় তার ব্যালেন্স: আপনার জমা আর যোগ হওয়া মুনাফা মিলিয়ে। ভুল অঙ্ক দিলে বাতিল করে আবার লেখা যায়। ব্যাংক পরে FDR-এ বাড়তি মুনাফা দিলে, FDR-এর বাকি থাকা আবগারি শুল্ক আগে সেখান থেকে পূরণ হয় — মাসের মুনাফায় যেমন হয়।'],
  // 2.1.7: a monthly DPS closed early earns for the months each instalment was held.
  // 2.3.0: any DPS, each instalment from its own due day; Use the Bank's Figures in the close.
  // 2.2.3: the charges named (f3fc40b2, 5d23922e) and Edit Note on a deposit's entries (cb4e45a2);
  // in d2Body, an FDR adjustment fills its duty back first (98fb0085).
  d3Head:       ['Maturity, renewal, early close', 'মেয়াদ শেষ, নবায়ন, আগেই ভাঙা'],
  d3Body:       ['A matured FDR can be renewed where it stands, for a term in months or days. A deposit can also be closed early at a lower rate, with the bank’s fee and excise duty on lines of their own, so you can see where each taka went. A DPS closed early earns on each instalment for the months it was held, from its own due day, and can be closed with the bank’s own figures: turn on Use the Bank’s Figures and enter the profit and the amount taken back as the statement shows — the app says so if the profit is far above its reckoning. An excise duty, a DPS late fee or a closing fee is named for what it is in the list, search, Analytics and the reports, and every entry the app writes for a deposit takes a note of your own.',
                 'মেয়াদ শেষ হওয়া FDR সেখানেই নবায়ন করা যায়, মেয়াদ মাসে বা দিনে ঠিক করে। মেয়াদের আগেও কম হারে জমা ভাঙা যায়; ব্যাংকের ফি আর আবগারি শুল্ক আলাদা লাইনে দেখায়, তাই প্রতিটি টাকা কোথায় গেল বোঝা যায়। DPS আগে ভাঙলে প্রতিটি কিস্তি তার নিজের তারিখ থেকে যত মাস জমা ছিল, তত মাসের মুনাফা পায়; ব্যাংকের অঙ্কেও বন্ধ করা যায় — "ব্যাংকের অঙ্ক বসান" চালু করে স্টেটমেন্টের মুনাফা আর কেটে নেওয়া অঙ্ক লিখুন, মুনাফা অ্যাপের হিসাবের চেয়ে অনেক বেশি হলে অ্যাপ জানিয়ে দেয়। আবগারি শুল্ক, DPS-এর বিলম্ব ফি আর বন্ধের ফি তালিকা, সার্চ, বিশ্লেষণ আর রিপোর্টে নিজের নামেই দেখায়, আর জমার জন্য অ্যাপের লেখা প্রতিটি এন্ট্রিতে আপনি নিজের নোট দিতে পারেন।'],
  featSeeTitle: ['Seeing where it went', 'টাকা কোথায় গেল'],
  f4Head:       ['A month at a time', 'মাস ধরে ধরে'],
  // 1.1.99: the month's card is gold when it kept something and red when it overspent.
  // 2.1.7: a month not yet begun shows "—" for its daily average.
  f4Body:       ['Income against expense, what you saved and what share of what you earned that was, and the categories that took the most — for whichever month you pick, and a coming one once an entry is dated in it. The month’s card turns gold when it saved and red when it overspent, so you know before you read a figure. The daily average counts a finished month over all its days, and this one over the days so far; a month not yet begun shows none.',
                 'আয়ের পাশে ব্যয়, কত সঞ্চয় হলো আর সেটি আয়ের কত ভাগ, আর কোন খাতে সবচেয়ে বেশি খরচ — যে মাস বাছবেন তার জন্য, আর সামনের মাসে তারিখ দেওয়া এন্ট্রি থাকলে সেই মাসের জন্যও। মাসে সঞ্চয় হলে কার্ডটি সোনালি হয়, খরচ বেশি হলে লাল — অঙ্ক পড়ার আগেই বোঝা যায়। দৈনিক গড়: শেষ হওয়া মাসে পুরো মাসের দিন ধরে, চলতি মাসে আজ পর্যন্ত দিন ধরে; যে মাস এখনো শুরু হয়নি, তার গড় দেখায় না।'],
  f5Head:       ['Which account did the work', 'কোন অ্যাকাউন্ট দিয়ে কী হলো'],
  // 2.0.2: each account marked in its own colour. 2.1.2–2.1.3: the In, Out and No Change
  // tabs, their counts coloured green, red and blue.
  f5Body:       ['Money in and money out for each account side by side, each marked in its ' +
                 'own colour, so you can see which one everything actually runs through and ' +
                 'which is just sitting there. Tabs pick out the accounts money came into, the ' +
                 'ones it left and the ones it did not touch, counted in green, red and blue.',
                 'প্রতিটি অ্যাকাউন্টে কত টাকা ঢুকল আর কত বেরোল, পাশাপাশি, প্রতিটি নিজের রঙে — তাই বোঝা যায় কোন অ্যাকাউন্ট দিয়ে আসলে সব চলছে, আর কোনটি শুধু পড়ে আছে। ট্যাব দিয়ে আলাদা করে দেখা যায় কোন অ্যাকাউন্টে টাকা ঢুকেছে, কোনটি থেকে বেরিয়েছে, আর কোনটিতে কোনো বদল নেই — সংখ্যাগুলো সবুজ, লাল আর নীলে।'],

  featKeepTitle:['Loans, backups and safety',
                 'ধার, ব্যাকআপ আর নিরাপত্তা'],
  f6Head:       ['Who owes you, and whom you owe', 'কে আপনাকে দেবে, আপনি কাকে দেবেন'],
  // 1.1.98–1.1.99: Given and Taken tabs, the name optional with the number standing in,
  // a day's notice before the return date, and money lent or repaid checked against the
  // account it comes out of.
  f6Body:       ['Loans in both directions on Given and Taken tabs, each person known by their mobile number — the name is optional. Set a return date and get a day’s notice before it. Money lent or repaid is checked against the account it comes from, a repayment is dated the day it happened, and a mistyped amount can be fixed later.',
                 'দেওয়া আর নেওয়া — দুই দিকের ধার আলাদা ট্যাবে; প্রত্যেককে চেনা হয় মোবাইল নম্বর দিয়ে, নাম না দিলেও চলে। ফেরতের তারিখ দিলে তার এক দিন আগে মনে করিয়ে দেয়। ধার দেওয়া বা শোধের টাকা যে অ্যাকাউন্ট থেকে যায়, তার ব্যালেন্স দেখে নেওয়া হয়; শোধ যেদিন হয়েছে, সেই তারিখেই লেখা যায়, আর ভুল অঙ্ক পরে ঠিক করা যায়।'],
  f7Head:       ['Backups you hold yourself', 'ব্যাকআপ আপনার নিজের হাতে'],
  // 1.1.95–1.1.99: the daily backup keeps every copy of the last seven days, Restore
  // Latest brings back the newest, and a failed daily backup is said out loud.
  // 2.0.7–2.1.2: Undo Last Restore, retired by the first change after the restore; Background
  // Work for a battery saver that holds the daily backup back is in f7Pass.
  f7Body:       ['A backup is one file, kept where you choose — saved by you, or by the app every day into a folder that keeps the last seven days. Restore Latest brings back the newest copy: accounts, entries, loans and your profile; if it was the wrong file, Undo Last Restore puts back the ledger from before, until you change anything.',
                 'ব্যাকআপ মানে একটি ফাইল, যা থাকে আপনার বেছে নেওয়া জায়গায় — আপনি নিজে সেভ করতে পারেন, অথবা অ্যাপ প্রতিদিন একটি ফোল্ডারে রাখে, যেখানে শেষ সাত দিনের কপি থাকে। "সর্বশেষ কপি রিস্টোর" সবচেয়ে নতুন কপি থেকে অ্যাকাউন্ট, এন্ট্রি, ধার আর আপনার প্রোফাইল ফিরিয়ে আনে; ভুল ফাইল রিস্টোর হয়ে গেলে "শেষ রিস্টোর ফিরিয়ে নিন" আগের খাতা ফিরিয়ে দেয়, যতক্ষণ না আপনি নতুন কিছু বদলান।'],
  fPassHead:    ['A password for the backup',
                 'ব্যাকআপের পাসওয়ার্ড'],
  // 2.3.0: a password is at least 8 characters, not only numbers, and the bell says when the
  // daily backup's saved one is weaker than that.
  f7Pass:       ['A password locks the file — at least 8 characters, not only numbers. The daily backup keeps the one you saved, and you can change it any time; without one, anyone who has the file can open it. Nobody can recover a forgotten password. If a daily backup fails, a battery saver holds it back, or its saved password is weaker than that, the app tells you.',
                 'পাসওয়ার্ড দিলে ফাইলটি তালাবন্ধ থাকে — কমপক্ষে ৮টি অক্ষর, শুধু সংখ্যা নয়। প্রতিদিনের ব্যাকআপ আপনার সেভ করা পাসওয়ার্ডই ব্যবহার করে, আর যখন খুশি সেটি বদলানো যায়। পাসওয়ার্ড না দিলে ফাইলটি যার হাতে যাবে সে-ই খুলতে পারবে, আর পাসওয়ার্ড ভুলে গেলে কেউ সেটি ফিরিয়ে দিতে পারবে না। প্রতিদিনের ব্যাকআপ না হলে, ব্যাটারি সেভার আটকে দিলে, বা সেভ করা পাসওয়ার্ড এর চেয়ে দুর্বল হলে, অ্যাপ জানিয়ে দেয়।'],
  f8Head:       ['Locked on your phone',
                 'ফোনেই তালাবন্ধ'],
  // 2.3.0: five wrong PINs lock for 30 s, doubling each time to 4 h (AuthManager).
  // 1.1.96: fingerprint for exports and backups; a restore, and reversing an entry,
  // still take the PIN. Language, accent and text size are in fLookBody since website 2.25.2.
  f8Body:       ['The ledger itself is encrypted on the phone. A PIN or your fingerprint on the way in and a lock again a minute after you leave; exports and backups ask once more, as do reversing an entry and restoring from a file; Restore Latest and Undo Last Restore take the PIN alone. Five wrong PINs in a row lock it for 30 seconds, and each lockout after that is twice as long, up to four hours.',
                 'খাতাটি ফোনেই এনক্রিপ্ট করা। ঢুকতে লাগে পিন বা আঙুলের ছাপ, আর বেরোনোর এক মিনিট পর আবার তালা লাগে; এক্সপোর্ট, ব্যাকআপ, এন্ট্রি প্রত্যাহার আর ফাইল থেকে রিস্টোরের আগে আবার পিন বা আঙুলের ছাপ চায়; "সর্বশেষ কপি রিস্টোর" আর "শেষ রিস্টোর ফিরিয়ে নিন"-এ লাগে শুধু পিন। পরপর পাঁচবার ভুল পিন দিলে ৩০ সেকেন্ড বন্ধ থাকে, এরপর প্রতিবার সময় দ্বিগুণ হয়, সর্বোচ্চ চার ঘণ্টা।'],
  fLookHead:    ['Set it up your way',
                 'আপনার পছন্দমতো সাজিয়ে নিন'],
  // 2.3.0: the light theme offers Slate and Rainbow, the dark theme gold (Yellow) and Rainbow.
  fLookBody:    ['Bangla or English; light mode in slate or rainbow, dark mode in gold or rainbow; and the text size you like — change any of them whenever you want. Set to System, the text follows your phone’s settings, up to the app’s Large size; you can also pick Compact, Standard or Large yourself. Buttons are made easy to tap.',
                 'বাংলা বা ইংরেজি; লাইট মোডে স্লেট বা রংধনু, ডার্ক মোডে সোনালি বা রংধনু থিম; আর পছন্দমতো ফন্ট সাইজ —সবকিছুই পরিবর্তন করতে পারবেন যখন খুশি। ফন্ট সাইজ System-এ রাখলে লেখা ফোনের সেটিংস অনুযায়ী দেখাবে, তবে অ্যাপের "বড়" সাইজের চেয়ে বড় হবে না। চাইলে কমপ্যাক্ট, স্ট্যান্ডার্ড বা বড় সাইজও বেছে নিতে পারবেন। বোতামগুলোও সহজে ট্যাপ করার মতো করে তৈরি।'],
  // 1.1.69. Said as the release notes say it: what goes in the list, and that the list
  // is the phone's alone -- the privacy page's promise has to hold for it too.
  f9Head:       ['A list behind the bell', 'বেল আইকনে একটি তালিকা'],
  // 1.1.93–1.1.98: DPS instalments, profit waiting to be taken and failed backups joined
  // the list; loans show one card per person; Clear All comes with Undo.
  f9Body:       ['Loan dates, DPS instalments coming up, profit waiting to be taken, backups saved or failed, and app updates — in one list, with one card per person for loans. Clear it all at once, with Undo. A reminder clears by itself once its loan is paid or its deposit closed, and a loan reminder says who owes whom. It is kept on your phone only, and reminders can be switched off.',
                 'ধারের তারিখ, সামনের DPS কিস্তি, তোলার অপেক্ষায় থাকা মুনাফা, ব্যাকআপ সেভ হওয়া বা না হওয়া, আর অ্যাপের আপডেট — সব এক তালিকায়; ধারের বেলায় প্রত্যেক মানুষের জন্য একটি কার্ড। এক চাপে সব মোছা যায়, চাইলে আবার ফিরিয়েও আনা যায়। ধার শোধ হলে বা জমা বন্ধ হলে তার রিমাইন্ডার নিজেই সরে যায়, আর ধারের রিমাইন্ডারে লেখা থাকে কে কাকে দেবে। তালিকাটি শুধু আপনার ফোনেই থাকে, আর রিমাইন্ডার চাইলে বন্ধ করা যায়।'],

  // -- privacy -----------------------------------------------------------------
  privLead:     ['The short version: nothing is collected and nothing is reported, because there is nobody to report to. Your ledger is encrypted on the phone and never leaves it unless you export a report or make a backup yourself; Android’s own backup carries only the app’s settings and a few housekeeping marks, and has a section to itself below. The rest of this page is all of that spelled out, so you can check it rather than take it on trust.',
                 'সংক্ষেপে: কিছুই সংগ্রহ করা হয় না, কোথাও কিছু পাঠানোও হয় না — কারণ পাঠানোর মতো কোনো জায়গাই নেই। আপনার খাতা ফোনেই এনক্রিপ্ট করা থাকে, আর আপনি নিজে রিপোর্ট এক্সপোর্ট বা ব্যাকআপ না করলে ফোনের বাইরে যায় না। অ্যান্ড্রয়েডের নিজের ব্যাকআপ নেয় শুধু অ্যাপের সেটিংস আর অ্যাপ চালানোর কিছু ছোট তথ্য — নিচে সেটির আলাদা অংশ আছে। এই পাতার বাকি অংশ এসবেরই বিস্তারিত, যাতে শুধু বিশ্বাস না করে নিজে মিলিয়ে দেখতে পারেন।'],

  // The four answers under the lead: a label and the short answer to it.
  privSum1V:    ['Nothing', 'কিছুই না'],
  privSum2:     ['Network use', 'নেটওয়ার্ক ব্যবহার'],
  privSum2V:    ['Updates only',
                 'শুধু আপডেট'],
  privSum3:     ['Leaves on its own',
                 'নিজে থেকে ফোনের বাইরে যায়'],
  privSum3V:    ['Settings and app marks',
                 'সেটিংস ও অ্যাপের ছোট তথ্য'],
  privSum4:     ['To delete it all', 'সব মুছতে'],
  privSum4V:    ['Uninstall', 'আনইনস্টল'],
  privToc:      ['On this page', 'এই পাতায়'],
  privNo2:      ['No analytics', 'অ্যানালিটিক্স নেই'],
  privNo3:      ['No crash reports', 'ক্র্যাশ রিপোর্ট নেই'],
  privNo4:      ['No ads', 'বিজ্ঞাপন নেই'],
  privNet1:     ['Ask GitHub for the newest release', 'GitHub-এর কাছে নতুন রিলিজের খোঁজ নেওয়া'],
  privNet2:     ['Download it — only if you say yes', 'ডাউনলোড — শুধু আপনি রাজি হলে'],
  privGoes:     ['What goes', 'যা যায়'],
  privGoes1:    ['Language, theme, colour and text size',
                 'ভাষা, থিম, রং আর লেখার আকার'],
  privGoes2:    ['Reminder, TIN and PIN-entry settings',
                 'রিমাইন্ডার, TIN আর পিন দেওয়ার ধরনের সেটিংস'],
  privStays:    ['What does not go', 'যা যায় না'],
  privStays1:   ['Your ledger',
                 'আপনার খাতা'],
  privStays2:   ['Your PIN and profile',
                 'আপনার পিন আর প্রোফাইল'],
  privStaysNote: ['To move phones, export a backup file and restore it on the new one.',
                  'ফোন বদলালে একটি ব্যাকআপ ফাইল এক্সপোর্ট করে নতুন ফোনে রিস্টোর করুন।'],
  privCollectTitle:['What is collected', 'কী কী সংগ্রহ করা হয়'],
  privCollectBody:['**Nothing.** No account, no sign-in, no email address, no device identifier, no usage statistics, no crash reports, no advertising. There is no analytics library and no ad library in the app — the whole dependency list is Android’s own components, Kotlin, SQLCipher to encrypt the ledger, and Moshi, a library that reads and writes the backup file.',
                 '**কিছুই না।** অ্যাকাউন্ট নেই, সাইন ইন নেই, ইমেইল নেই, ফোনের কোনো পরিচয় নম্বর নেই, ব্যবহারের পরিসংখ্যান নেই, ক্র্যাশ রিপোর্ট নেই, বিজ্ঞাপন নেই। অ্যাপে অ্যানালিটিক্স বা বিজ্ঞাপনের কোনো লাইব্রেরিই নেই — অ্যাপ যা যা ব্যবহার করে তার পুরো তালিকা: অ্যান্ড্রয়েডের নিজের অংশগুলো, Kotlin, খাতা এনক্রিপ্ট করার জন্য SQLCipher, আর ব্যাকআপ ফাইল পড়া ও লেখার লাইব্রেরি Moshi।'],

  privWhereTitle:['Where your entries live', 'আপনার হিসাব কোথায় থাকে'],
  privWhereBody:['In a database inside the app’s own storage on your phone, which Android keeps other apps out of — encrypted with SQLCipher, under a key held in the phone’s Android Keystore that never leaves this device. It is never copied anywhere else unless you export it or make a backup yourself. Uninstalling the app deletes it.',
                 'আপনার ফোনে, অ্যাপের নিজের জায়গার ভেতরে একটি ডেটাবেসে — যেখানে অ্যান্ড্রয়েড অন্য কোনো অ্যাপকে ঢুকতে দেয় না। ডেটাবেসটি SQLCipher দিয়ে এনক্রিপ্ট (সংকেতে তালাবন্ধ) করা, আর তার চাবি থাকে ফোনের নিজস্ব সুরক্ষিত চাবির ঘরে (Android Keystore), যা এই ফোনের বাইরে কখনো যায় না। আপনি নিজে এক্সপোর্ট বা ব্যাকআপ না করলে এটি আর কোথাও কপি হয় না। অ্যাপ আনইনস্টল করলে খাতাটি মুছে যায়।'],

  privNetTitle: ['Every time it uses the network', 'যতবার নেটওয়ার্ক ব্যবহার করে'],
  privNetBody:  ['Twice, and both for the same errand: it asks GitHub what the newest release is, and if you say yes it downloads that file. Two files in the whole app can open a connection and both of them are that errand — so no entry of yours travels on a connection the app opens. Android’s backup does not use them either; it is the system copying the app’s settings, and it is the next section.',
                 'দুবার, আর দুবারই একই কাজে: GitHub-এর কাছে জানতে চায় সবচেয়ে নতুন রিলিজ কোনটি, আর আপনি রাজি হলে সেই ফাইলটি ডাউনলোড করে। পুরো অ্যাপে মাত্র দুটি ফাইল ইন্টারনেটে সংযোগ খুলতে পারে, আর দুটিই এই কাজের — তাই অ্যাপের কোনো সংযোগে আপনার হিসাবের কিছুই যায় না। অ্যান্ড্রয়েডের ব্যাকআপও এগুলো দিয়ে যায় না; সেটি সিস্টেম নিজে অ্যাপের সেটিংস কপি করে — পরের অংশে তার কথা।'],

  privAutoTitle: ['What Android’s backup carries',

                  'অ্যান্ড্রয়েডের ব্যাকআপ কী নেয়'],
  privAutoBody: ['Android backs up apps to your Google account, and LedgerBook lets it — but only the app’s settings, with a few housekeeping marks such as the date of your last export. The ledger is left out on purpose: it is encrypted under a key that cannot leave this phone, so a copy anywhere else could never be opened. Your PIN and your profile stay behind too. That is why moving to a new phone takes a backup file of your own: export it here, restore it there. Turn Android’s backup off in its own Settings and nothing goes at all; the app’s Backup page has the link.',
                 'অ্যান্ড্রয়েড অ্যাপগুলোর ব্যাকআপ আপনার Google অ্যাকাউন্টে রাখে, আর LedgerBook তা করতে দেয় — তবে শুধু অ্যাপের সেটিংস, আর শেষ এক্সপোর্টের তারিখের মতো অ্যাপ চালানোর কিছু ছোট তথ্য। খাতা ইচ্ছা করেই বাদ রাখা হয়েছে: সেটি এমন চাবিতে এনক্রিপ্ট করা যা এই ফোনের বাইরে যেতে পারে না, তাই অন্য কোথাও কপি গেলেও খোলা যেত না। আপনার পিন আর প্রোফাইলও ফোনেই থেকে যায়। এ কারণেই নতুন ফোনে যেতে নিজের একটি ব্যাকআপ ফাইল লাগে: এই ফোনে এক্সপোর্ট করুন, নতুন ফোনে রিস্টোর করুন। অ্যান্ড্রয়েডের সেটিংসে গিয়ে ব্যাকআপ বন্ধ করলে কিছুই যায় না; অ্যাপের ব্যাকআপ পাতায় সেখানে যাওয়ার লিংক আছে।'],

  privBackupTitle:['Backups you make yourself', 'আপনার নিজের নেওয়া ব্যাকআপ'],
  privBackupBody:['The backup you make from inside the app is a different thing: one file, written where you point it. Whether it carries a password is your choice — with one, it is encrypted and only that password opens it; without one, it is a plain file for a place you trust. Nobody is sent a copy and no service holds the password — which is the same sentence read the other way: lose the file and the password, and nobody can get them back for you either.',
                 'অ্যাপের ভেতর থেকে আপনি যে ব্যাকআপ নেন, সেটি আলাদা জিনিস: একটি ফাইল, যা সেভ হয় আপনার বেছে নেওয়া জায়গায়। পাসওয়ার্ড দেবেন কি না, তা আপনার ইচ্ছা — দিলে ফাইলটি এনক্রিপ্ট হয়, আর শুধু সেই পাসওয়ার্ডেই খোলে; না দিলে সাধারণ ফাইল, তাই ভরসার জায়গায় রাখুন। কারও কাছে কপি পাঠানো হয় না, কোনো সেবার কাছে পাসওয়ার্ডও জমা থাকে না। তার মানে উলটো কথাটিও সত্যি: ফাইল আর পাসওয়ার্ড হারালে কেউ আপনাকে সেগুলো ফিরিয়ে দিতে পারবে না।'],

  // The page itself, not the app: what a visit to it touches. Everything above is about
  // the app, and a privacy page that left out its own fonts and release lookup was
  // promising more than it said.
  privSiteTitle: ['This website', 'এই ওয়েবসাইট'],
  privSiteBody: ['The site is served by GitHub Pages, has no tracker and sets no cookie. Your browser fetches its fonts from Google Fonts and asks GitHub which release is the newest, so both see your IP address, as they would for any site that uses them; the download itself comes from GitHub too. The language and theme you choose, and the newest release it last found, are kept in your own browser and nowhere else.',
                 'সাইটটি চলে GitHub Pages-এ; এতে কোনো ট্র্যাকার নেই, কুকিও নেই। ফন্ট আসে Google Fonts থেকে, আর সবচেয়ে নতুন রিলিজ কোনটি, তা আপনার ব্রাউজার GitHub-এর কাছে জানতে চায় — তাই এই দুই জায়গা আপনার ঠিকানা (IP) দেখতে পায়, যেমন এদের ব্যবহার করা যেকোনো সাইটে দেখে; ডাউনলোডও আসে GitHub থেকে। আপনার বেছে নেওয়া ভাষা ও থিম, আর শেষবার পাওয়া নতুন রিলিজের তথ্য থাকে শুধু আপনার নিজের ব্রাউজারে।'],

  privDeleteTitle:['Getting rid of it all', 'সব মুছে ফেলা'],
  privDeleteBody:['Uninstall the app. That is the whole procedure for the ledger — no account to close and no request to send, because the app never sends a copy anywhere. The only thing kept elsewhere on its own is Android’s backup of the app’s settings in your Google account; remove it there, or switch that backup off first. Any backup files you made and reports you exported are yours to delete.',
                 'অ্যাপটি আনইনস্টল করুন। খাতা মুছতে এটুকুই যথেষ্ট — বন্ধ করার মতো কোনো অ্যাকাউন্ট নেই, কাউকে অনুরোধ পাঠাতেও হয় না, কারণ অ্যাপ খাতার কোনো কপি কোথাও পাঠায় না। নিজে থেকে বাইরে থাকে শুধু একটি জিনিস: আপনার Google অ্যাকাউন্টে অ্যান্ড্রয়েডের রাখা অ্যাপের সেটিংস; সেখান থেকে মুছে দিন, বা আগেই সেই ব্যাকআপ বন্ধ করুন। আপনার নিজের নেওয়া ব্যাকআপ ফাইল আর এক্সপোর্ট করা রিপোর্টগুলো আপনিই মুছবেন।'],

  // -- the band at the bottom of the home page --------------------------------
  ctaTitle:     ['Keep your books in your pocket', 'হিসাবের খাতা থাকুক আপনার পকেটে'],
  ctaFirst:     ['First time? It takes two minutes.', 'প্রথমবার? দুই মিনিটের কাজ।'],

  // -- footer ------------------------------------------------------------------
  footerNote:   ['Built for keeping one household’s books. No trackers on this page.',
                 'একটি পরিবারের হিসাব রাখার জন্য বানানো। এই পাতায় কোনো ট্র্যাকার নেই।'],
  // The website's own version, in every footer -- not the app's, which the download
  // button names. SITE_VERSION in site.js is the number.
  siteVersion:  ['Website v{v}', 'ওয়েবসাইট v{v}']
};
