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

  // -- hero --------------------------------------------------------------------
  tagline:      ['Your money, your phone, nobody else.',
                 'আপনার টাকার হিসাব আপনার ফোনেই, আর কারও কাছে নয়।'],
  heroLead:     ['A double-entry ledger for everyday money. No account to open, no data ' +
                 'leaving your phone, and books that cannot quietly stop balancing.',
                 'দৈনন্দিন টাকার জন্য দুই-তরফা হিসাবের খাতা। অ্যাকাউন্ট খুলতে হয় না, ' +
                 'তথ্য ফোন ছেড়ে কোথাও যায় না, আর হিসাব কখনো চুপচাপ বেহিসেব হয়ে যায় না।'],
  download:     ['Download for Android', 'অ্যান্ড্রয়েডের জন্য ডাউনলোড'],
  downloadBusy: ['Finding the latest version…', 'সর্বশেষ ভার্সন খোঁজা হচ্ছে…'],
  downloadAlt:  ['Open the releases page', 'রিলিজ পাতা খুলুন'],
  versionLine:  ['Version {v} · {size} · Android 6.0 and up',
                 'ভার্সন {v} · {size} · অ্যান্ড্রয়েড ৬.০ বা তার পরে'],
  installFirst: ['First time? Read how to install — it takes two minutes.',
                 'প্রথমবার? ইনস্টল করার নিয়মটা পড়ে নিন — দুই মিনিটের কাজ।'],

  // -- why ---------------------------------------------------------------------
  whyTitle:     ['Why this one', 'কেন এটা'],
  why1Head:     ['It cannot send your money data anywhere',
                 'আপনার হিসাব কোথাও পাঠাতে পারে না'],
  why1Body:     ['Not a promise — a fact about how it is built. Two files in the whole ' +
                 'app touch the internet, and both of them are the thing that checks ' +
                 'whether a new version exists. There is no other path out.',
                 'এটা প্রতিশ্রুতি নয় — গঠনের সত্য। পুরো অ্যাপে মাত্র দুটো ফাইল ইন্টারনেট ছোঁয়, ' +
                 'আর দুটোই শুধু দেখে নতুন ভার্সন এসেছে কিনা। বেরোনোর আর কোনো পথই নেই।'],
  why2Head:     ['Every amount is written twice', 'প্রতিটা টাকা দুবার লেখা হয়'],
  why2Body:     ['Real double-entry, the way an accountant keeps books: money leaving one ' +
                 'place always arrives somewhere. The Trial Balance page shows the two ' +
                 'sides agreeing, so a wrong total is caught instead of carried.',
                 'সত্যিকারের দুই-তরফা হিসাব, হিসাবরক্ষক যেভাবে খাতা রাখেন: এক জায়গা থেকে টাকা ' +
                 'গেলে সেটা আরেক জায়গায় পৌঁছায়ই। ট্রায়াল ব্যালেন্স পাতা দুই দিকের মিল দেখায়, ' +
                 'তাই ভুল হিসাব বয়ে বেড়াতে হয় না, ধরা পড়ে যায়।'],
  why3Head:     ['It works with the phone in flight mode', 'ফ্লাইট মোডেও পুরোপুরি চলে'],
  why3Body:     ['Nothing waits on a network. Backups are encrypted files you keep ' +
                 'yourself, and you can lock the app with a PIN or your fingerprint.',
                 'কোনো কিছু নেটওয়ার্কের জন্য অপেক্ষা করে না। ব্যাকআপ এনক্রিপ্টেড ফাইল, যা আপনার ' +
                 'নিজের কাছেই থাকে, আর অ্যাপটা পিন বা আঙুলের ছাপ দিয়ে তালা দেওয়া যায়।'],

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

  // -- install -----------------------------------------------------------------
  installTitle: ['Installing LedgerBook', 'LedgerBook ইনস্টল করা'],
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
                 'install apps yet. Tap Settings — not Cancel — and turn on Allow from ' +
                 'this source. The install carries on by itself from there.',
                 'নামানো ফাইলটা খুলুন। অ্যান্ড্রয়েড বলবে এই উৎস থেকে অ্যাপ ইনস্টলের অনুমতি নেই। ' +
                 'Settings-এ চাপুন — Cancel নয় — আর Allow from this source চালু করুন। ' +
                 'এরপর ইনস্টল নিজে থেকেই এগোতে থাকবে।'],
  step3Head:    ['Install', 'ইনস্টল করুন'],
  step3Body:    ['Tap Install. Play Protect then says it has not seen this app before and ' +
                 'offers to scan it — choose Scan app. It takes about a minute and comes ' +
                 'back with This app looks safe, and then you tap Install again.',
                 'Install-এ চাপুন। এরপর Play Protect বলবে এই অ্যাপ সে আগে দেখেনি, আর পরীক্ষা ' +
                 'করার প্রস্তাব দেবে — Scan app বেছে নিন। প্রায় এক মিনিট লাগে, তারপর দেখাবে ' +
                 'This app looks safe, আর আপনি আবার Install-এ চাপবেন।'],
  step4Head:    ['Set your PIN', 'পিন ঠিক করুন'],
  step4Body:    ['Open LedgerBook. It asks what to call you, then for a four-digit PIN, ' +
                 'typed twice. The name, the PIN and everything you write after stay on ' +
                 'the phone; there is nowhere to sign in to.',
                 'LedgerBook খুলুন। প্রথমে জিজ্ঞেস করবে আপনাকে কী নামে ডাকবে, তারপর চার ' +
                 'সংখ্যার একটা পিন, দুবার লিখতে হবে। নাম, পিন আর এরপর যা লিখবেন সব ফোনেই ' +
                 'থাকে; সাইন ইন করার কোনো জায়গাই নেই।'],

  // Captions under the step screenshots. They name the button to press, because a reader
  // matching the picture to their own screen is looking for exactly that.
  cap1:         ['Chrome says this about every APK. Choose Download anyway.',
                 'ক্রোম প্রতিটা APK নিয়েই এটা বলে। Download anyway বেছে নিন।'],
  cap2:         ['Tap Settings on this one — not Cancel.',
                 'এখানে Settings-এ চাপুন — Cancel নয়।'],
  cap2b:        ['Turn on Allow from this source. The install goes on from here.',
                 'Allow from this source চালু করুন। ইনস্টল এখান থেকেই এগোবে।'],
  cap3:         ['Tap Install. The app is about 2.7 MB.',
                 'Install-এ চাপুন। অ্যাপটা প্রায় ২.৭ MB।'],
  cap3b:        ['Play Protect has not seen it before. Choose Scan app.',
                 'Play Protect এটা আগে দেখেনি। Scan app বেছে নিন।'],
  cap3c:        ['What the scan came back with. Tap Install.',
                 'পরীক্ষার পর যা দেখায়। Install-এ চাপুন।'],
  cap4:         ['Four digits, typed twice. Nothing leaves the phone.',
                 'চার সংখ্যা, দুবার লিখতে হবে। কিছুই ফোন ছেড়ে যায় না।'],

  verifyTitle:  ['Checking you got the right file', 'ঠিক ফাইলটাই পেয়েছেন কিনা দেখা'],
  verifyBody:   ['Every release publishes the fingerprint of its own file. If the number ' +
                 'your phone computes matches the one below, the file is byte for byte ' +
                 'the one that was published. This is optional — most people skip it.',
                 'প্রতিটা রিলিজের সাথে তার নিজের ফাইলের ছাপ প্রকাশ করা হয়। আপনার ফোনে হিসাব ' +
                 'করা সংখ্যাটা নিচেরটার সাথে মিললে ফাইলটা অক্ষরে অক্ষরে প্রকাশিত ফাইলটাই। ' +
                 'এটা ঐচ্ছিক — বেশিরভাগ মানুষ এই ধাপটা বাদ দেন।'],

  // -- permissions -------------------------------------------------------------
  permTitle:    ['What it asks for, and why', 'কী কী অনুমতি চায়, আর কেন'],
  permInternet: ['Internet', 'ইন্টারনেট'],
  permInternetW:['Only to check whether a newer version exists.',
                 'শুধু নতুন ভার্সন এসেছে কিনা দেখার জন্য।'],
  permNotify:   ['Notifications', 'নোটিফিকেশন'],
  permNotifyW:  ['To remind you when a loan is due, and when an update is out.',
                 'ধার ফেরতের তারিখ, আর নতুন ভার্সন এলে জানানোর জন্য।'],
  permContacts: ['Contacts', 'পরিচিতি'],
  permContactsW:['Optional. To pick a name when you record a loan, instead of typing it.',
                 'ঐচ্ছিক। ধার লেখার সময় নাম টাইপ না করে বেছে নেওয়ার জন্য।'],
  permInstall:  ['Install apps', 'অ্যাপ ইনস্টল'],
  permInstallW: ['To install the update it downloaded for you.',
                 'নিজে নামানো নতুন ভার্সনটা ইনস্টল করার জন্য।'],

  // -- features ----------------------------------------------------------------
  featTitle:    ['What it does', 'কী কী করে'],
  featLead:     ['Everything below is in the app today — there is no roadmap on this page, ' +
                 'because a feature you cannot use yet is not a feature.',
                 'নিচের সবকিছুই আজকের অ্যাপে আছে — এই পাতায় "আসছে" বলে কোনো অংশ নেই, ' +
                 'কারণ যেটা এখনো ব্যবহার করা যায় না সেটা সুবিধা নয়।'],

  featBooksTitle:['Keeping the books', 'হিসাব রাখা'],
  f1Head:       ['Five kinds of entry', 'পাঁচ রকম এন্ট্রি'],
  f1Body:       ['Income, expense, transfer between your own accounts, and cash in or out ' +
                 'of the bank. Each is its own screen asking only what that kind of entry ' +
                 'needs, so none of them is a general form with half the fields greyed out.',
                 'আয়, খরচ, নিজের অ্যাকাউন্টের মধ্যে ট্রান্সফার, আর ব্যাংক থেকে টাকা তোলা বা ' +
                 'জমা দেওয়া। প্রতিটার আলাদা পাতা, যেখানে শুধু ওই এন্ট্রির জন্য যা লাগে তাই ' +
                 'চাওয়া হয় — অর্ধেক ঘর নিষ্ক্রিয় করা কোনো সাধারণ ফর্ম নয়।'],
  f2Head:       ['Bank, mobile wallet and cash', 'ব্যাংক, মোবাইল ওয়ালেট আর নগদ'],
  f2Body:       ['Accounts are grouped the way you already think about them, each with a ' +
                 'colour you choose. Money can only move between accounts where that move ' +
                 'makes sense, so a slip of the thumb cannot invent a transfer.',
                 'অ্যাকাউন্টগুলো যেভাবে আপনি এমনিতেই ভাবেন সেভাবেই সাজানো, প্রতিটার রং ' +
                 'আপনার পছন্দে। যেখানে টাকা যাওয়া যুক্তিসঙ্গত শুধু সেখানেই যেতে পারে, তাই ' +
                 'আঙুলের ভুলে কোনো ট্রান্সফার তৈরি হয়ে যায় না।'],
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
  f6Body:       ['Loans in both directions, with the date it is due and a reminder when ' +
                 'that date comes. Pick the name from your contacts instead of typing it, ' +
                 'if you would rather.',
                 'দুই দিকেরই ধার, ফেরতের তারিখসহ, আর সেই তারিখ এলে মনে করিয়ে দেওয়া। চাইলে ' +
                 'নাম টাইপ না করে পরিচিতি থেকে বেছে নিতে পারেন।'],
  f7Head:       ['Backups you hold yourself', 'ব্যাকআপ আপনার নিজের হাতে'],
  f7Body:       ['A backup is an encrypted file written where you choose. There is no ' +
                 'cloud to sync with and no account to restore from — which also means ' +
                 'nobody can restore it but you.',
                 'ব্যাকআপ মানে একটা এনক্রিপ্টেড ফাইল, আপনি যেখানে বলবেন সেখানে লেখা হয়। ' +
                 'মেলানোর কোনো ক্লাউড নেই, ফিরিয়ে আনার কোনো অ্যাকাউন্ট নেই — অর্থাৎ আপনি ' +
                 'ছাড়া আর কেউ ওটা ফেরাতেও পারবে না।'],
  f8Head:       ['Locked, and in your language', 'তালাবদ্ধ, আর আপনার ভাষায়'],
  f8Body:       ['A PIN or your fingerprint on the way in. Bangla or English, light or ' +
                 'dark, and an accent colour — all switchable whenever you like, and all ' +
                 'remembered.',
                 'ঢোকার মুখে পিন বা আঙুলের ছাপ। বাংলা বা ইংরেজি, আলো বা অন্ধকার, আর একটা ' +
                 'পছন্দের রং — সবই যখন খুশি বদলানো যায়, আর মনে থাকে।'],

  // -- privacy -----------------------------------------------------------------
  privLead:     ['The short version: nothing is collected, because there is nowhere for it ' +
                 'to go. The rest of this page is that claim spelled out, so you can check ' +
                 'it rather than take it.',
                 'সংক্ষেপে: কিছুই সংগ্রহ করা হয় না, কারণ পাঠানোর কোনো জায়গাই নেই। এই পাতার ' +
                 'বাকিটা ওই কথাটারই খোলাসা, যাতে বিশ্বাস না করে মিলিয়ে দেখতে পারেন।'],

  privCollectTitle:['What is collected', 'কী কী সংগ্রহ করা হয়'],
  privCollectBody:['Nothing. No account, no sign-in, no email address, no device ' +
                 'identifier, no usage statistics, no crash reports, no advertising. There ' +
                 'is no analytics library and no ad library in the app — the whole ' +
                 'dependency list is Android’s own components, Kotlin, and one library for ' +
                 'reading a release’s version number.',
                 'কিছুই না। অ্যাকাউন্ট নেই, সাইন ইন নেই, ইমেইল নেই, ডিভাইসের পরিচয় নেই, ' +
                 'ব্যবহারের পরিসংখ্যান নেই, ক্র্যাশ রিপোর্ট নেই, বিজ্ঞাপন নেই। অ্যাপে কোনো ' +
                 'analytics বা বিজ্ঞাপনের লাইব্রেরিই নেই — পুরো তালিকাটা অ্যান্ড্রয়েডের নিজের ' +
                 'উপকরণ, কোটলিন, আর রিলিজের ভার্সন নম্বর পড়ার একটা লাইব্রেরি।'],

  privWhereTitle:['Where your entries live', 'আপনার হিসাব কোথায় থাকে'],
  privWhereBody:['In a database inside the app’s own storage on your phone, which Android ' +
                 'keeps other apps out of. It is never copied anywhere else unless you ' +
                 'write a backup yourself. Uninstalling the app deletes it.',
                 'আপনার ফোনে অ্যাপের নিজের জায়গার ভেতরে একটা ডেটাবেসে, যেখানে অ্যান্ড্রয়েড ' +
                 'অন্য অ্যাপকে ঢুকতে দেয় না। আপনি নিজে ব্যাকআপ না লিখলে সেটা আর কোথাও যায় না। ' +
                 'অ্যাপ আনইনস্টল করলে মুছে যায়।'],

  privNetTitle: ['Every time it uses the network', 'যতবার নেটওয়ার্ক ব্যবহার করে'],
  privNetBody:  ['Twice, and both for the same errand: it asks GitHub what the newest ' +
                 'release is, and if you say yes it downloads that file. Two files in the ' +
                 'whole app can open a connection and both of them are that errand — so ' +
                 'there is no path an entry could take out, whether or not anyone wanted ' +
                 'it to.',
                 'দুবার, আর দুবারই একই কাজে: গিটহাবকে জিজ্ঞেস করে সবচেয়ে নতুন রিলিজ কোনটা, ' +
                 'আর আপনি হ্যাঁ বললে সেই ফাইলটা নামায়। পুরো অ্যাপে মাত্র দুটো ফাইল সংযোগ খুলতে ' +
                 'পারে, আর দুটোই এই কাজেরই — তাই কেউ চাইলেও কোনো হিসাব বেরোনোর পথই নেই।'],

  privBackupTitle:['Backups', 'ব্যাকআপ'],
  privBackupBody:['A backup is an encrypted file, written where you point it. Nobody ' +
                 'receives a copy and no service holds a key — which is the same sentence ' +
                 'read the other way: lose the file and the password, and nobody can get ' +
                 'it back for you either.',
                 'ব্যাকআপ মানে একটা এনক্রিপ্টেড ফাইল, আপনি যেখানে দেখাবেন সেখানে লেখা হয়। ' +
                 'কেউ কোনো কপি পায় না, চাবি রাখার কোনো সেবাও নেই — উল্টো করে পড়লে কথাটা ' +
                 'একই: ফাইল আর পাসওয়ার্ড দুটোই হারালে কেউ সেটা আপনাকে ফিরিয়েও দিতে পারবে না।'],

  privDeleteTitle:['Getting rid of it all', 'সব মুছে ফেলা'],
  privDeleteBody:['Uninstall the app. That is the whole procedure — no account to close ' +
                 'and no request to send, because there was never a copy anywhere to ask ' +
                 'about. Any backup files you wrote are yours to delete.',
                 'অ্যাপটা আনইনস্টল করুন। এটুকুই পুরো নিয়ম — বন্ধ করার মতো অ্যাকাউন্ট নেই, ' +
                 'পাঠানোর মতো অনুরোধ নেই, কারণ কোথাও কোনো কপিই ছিল না যে জিজ্ঞেস করতে হবে। ' +
                 'আপনি যে ব্যাকআপ ফাইলগুলো লিখেছেন সেগুলো আপনারই, মুছে ফেলবেন।'],

  // -- footer ------------------------------------------------------------------
  footerNote:   ['Built for keeping one household’s books. No trackers on this page.',
                 'একটা সংসারের হিসাব রাখার জন্য বানানো। এই পাতায় কোনো ট্র্যাকার নেই।'],
  allVersions:  ['All versions', 'সব ভার্সন']
};
