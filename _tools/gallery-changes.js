// Website render only, never committed to the app: the site's changes to the gallery, applied
// to a worktree of the release tag (v2.3.0 since site 2.26.0). Usage: node gallery-changes.js <worktree>. Built for site
// 2.21.0-2.23.2; the month counted from the gallery's held clock (25 Oct 2026) since 2.25.1.
const fs = require('fs');
const root = process.argv[2] + '/app/src/test/java/com/ledgerbook/app/gallery/';
function edit(file, pairs) {
  const p = root + file;
  let s = fs.readFileSync(p, 'utf8');
  const crlf = s.includes('\r\n');
  s = s.replace(/\r\n/g, '\n');
  for (const [a, b] of pairs) {
    const n = s.split(a).length - 1;
    if (n !== 1) throw new Error(file + ': ' + n + ' x ' + a.slice(0, 70));
    s = s.replace(a, () => b);
  }
  fs.writeFileSync(p, crlf ? s.replace(/\n/g, '\r\n') : s);
}

edit('GalleryTest.kt', [
  ['  @get:Rule val composeTestRule = createComposeRule()\n',
`  @get:Rule val composeTestRule = createComposeRule()

  // Website render only (not committed): which scene is being drawn, so the site's scenes share
  // one ledger and the Bangla ones carry Bangla notes and names, as a Bangla owner would write them.
  @get:Rule val sceneName = org.junit.rules.TestName()
  protected val webScene: Boolean get() = sceneName.methodName in setOf(
    "home", "homeBangla", "webAnalytics", "webAnalyticsBangla", "webFlow", "webFlowBangla",
    "page", "pageBangla", "accountsAll", "accountsBangla", "tabInvest", "tabInvestBangla", "given", "bangla")
  private val bnNotes: Boolean get() = webScene && sceneName.methodName.let { it.contains("Bangla") || it == "bangla" }
  private fun w(en: String, bn: String) = if (bnNotes) bn else en
`],
  // Website render only (site 2.25.29): a fifth look, Rainbow on the light theme, which the light
  // pictures show -- the gallery draws only Yellow and Sky.
  ['    LightSky(false, ThemeColorMode.SKY, "light-sky")\n',
   '    LightSky(false, ThemeColorMode.SKY, "light-sky"),\n    LightRainbow(false, ThemeColorMode.RAINBOW, "light-rainbow")\n'],
  ['repository.insertAccount(BankAccount(accountName = "CITY BANK A/C", accountType = "Savings", accountNumberSuffix = "9032", balance = 68250.0,',
   'val city = repository.insertAccountReturningId(BankAccount(accountName = "CITY BANK A/C", accountType = "Savings", accountNumberSuffix = "9032", balance = 0.0,'],
  ['val cash = repository.insertAccountReturningId(BankAccount(accountName = "Cash in Hand",',
   'val cash = repository.insertAccountReturningId(BankAccount(accountName = w("Cash in Hand", "হাতে নগদ"),'],
  ['repository.insertAccount(BankAccount(accountName = "PRBL FDR", accountType = "FDR", accountNumberSuffix = "", balance = 100000.0,',
   'val fdr = repository.insertAccountReturningId(BankAccount(accountName = "PRBL FDR", accountType = "FDR", accountNumberSuffix = "", balance = 0.0,'],
  ['repository.insertAccount(BankAccount(accountName = "AIBL DPS", accountType = "DPS", accountNumberSuffix = "", balance = 15000.0,',
   'val dps = repository.insertAccountReturningId(BankAccount(accountName = "AIBL DPS", accountType = "DPS", accountNumberSuffix = "", balance = 0.0,'],
  // Website render only (site 2.25.9): the other kinds of deposit, a monthly-profit FDR and a DPS
  // paying its pension, in the same ledger as every scene, so Invest fills the screen.
  [`    val accounts = repository.accountsOnce()
    fun acc(id: Int) = accounts.first { it.id == id }`,
`    val mtb = repository.insertAccountReturningId(BankAccount(accountName = w("MTB Monthly FDR", "MTB মাসিক FDR"), accountType = "FDR", accountNumberSuffix = "", balance = 0.0, accentColorHex = "#F6BD3D", holderName = "Raahat", linkedAccountId = dbbl, tenureMonths = 12, interestRate = 9.0, startDate = now - 70 * day, maturityDate = now + 295 * day, payoutMode = "MONTHLY", profitCollectedCount = 2, preLedgerMonths = 0, schemeStatus = "ACTIVE"))
    val sibl = repository.insertAccountReturningId(BankAccount(accountName = "SIBL DPS", accountType = "DPS", accountNumberSuffix = "", balance = 0.0, accentColorHex = "#F6BD3D", holderName = "Raahat", linkedAccountId = dbbl, tenureMonths = 36, monthlyInstallmentPaisa = takaToPaisa(3000.0), interestRate = 8.0, startDate = now - 1125 * day, maturityDate = now - 30 * day, pensionMonthlyPaisa = takaToPaisa(2500.0), pensionMonths = 60, pensionPaidCount = 0, pensionStartDate = now - 5 * day, schemeStatus = "ACTIVE"))
    val accounts = repository.accountsOnce()
    fun acc(id: Int) = accounts.first { it.id == id }`],
  [`    val j = repository.journal
    // The salary first: the rent and Karim's loan below are paid out of it.
    j.postIncome("Salary", "", "Salary", now - 16 * day`,
`    val j = repository.journal
    // Website render only: opened through the journal, so Home's Invest and the hidden bank hold
    // what their rows say (a balance put straight on the row read ৳0 on Home).
    j.postOpeningBalance(acc(city), takaToPaisa(68250.0), now - 40 * day)
    j.postOpeningBalance(acc(fdr), takaToPaisa(100000.0), now - 18 * day)
    j.postOpeningBalance(acc(dps), takaToPaisa(15000.0), now - 75 * day)
    j.postOpeningBalance(acc(mtb), takaToPaisa(200000.0), now - 70 * day)
    j.postOpeningBalance(acc(sibl), takaToPaisa(120000.0), now - 95 * day)
    // The salary first: the rent and Karim's loan below are paid out of it.
    j.postIncome("Salary", "", "Salary", now - 16 * day`],
  ['"October rent"', 'w("October rent", "অক্টোবরের ভাড়া")'],
  ['"Lunch"', 'w("Lunch", "দুপুরের খাবার")'],
  ['    j.postExpense("Transport", "", "Transport", now - day, acc(bkash), takaToPaisa(250.0))\n',
`    j.postExpense("Transport", "", "Transport", now - day, acc(bkash), takaToPaisa(250.0))
    // Website render only: the month of the gallery's clock gets every kind of entry between its
    // 1st and now, so Home, Analytics and Money Flow read a lived-in month.
    val monthStart = java.util.Calendar.getInstance().apply {
      timeInMillis = now
      set(java.util.Calendar.DAY_OF_MONTH, 1); set(java.util.Calendar.HOUR_OF_DAY, 0)
      set(java.util.Calendar.MINUTE, 0); set(java.util.Calendar.SECOND, 0); set(java.util.Calendar.MILLISECOND, 0)
    }.timeInMillis
    fun t(f: Double) = monthStart + ((now - monthStart) * f).toLong()
    val st = com.ledgerbook.app.data.SourceType
    j.postIncome("Salary", "", "Salary", t(0.06), null, 0L, acc(dbbl), takaToPaisa(52000.0))
    j.postExpense("Rent", w("House rent", "বাসা ভাড়া"), "Rent", t(0.12), acc(dbbl), takaToPaisa(18000.0))
    j.postMove("Withdrawal", "", t(0.25), acc(dbbl), acc(cash), takaToPaisa(8000.0), sourceType = st.WITHDRAWAL)
    j.postIncome("Business", w("Design work", "ডিজাইনের কাজ"), "Business", t(0.3), acc(bkash), takaToPaisa(9500.0), null, 0L)
    j.postMove("Transfer", "", t(0.4), acc(dbbl), acc(bkash), takaToPaisa(3000.0), sourceType = st.TRANSFER)
    j.postExpense("Bills", w("Electricity", "বিদ্যুৎ বিল"), "Bills", t(0.45), acc(bkash), takaToPaisa(2400.0))
    j.postMove("Deposit", "", t(0.55), acc(cash), acc(dbbl), takaToPaisa(5000.0), sourceType = st.DEPOSIT)
    j.postExpense("Bazar", "", "Bazar", t(0.65), acc(cash), takaToPaisa(3600.0))
    j.postExpense("Food", "", "Food", t(0.8), acc(cash), takaToPaisa(780.0))
    j.postExpense("Transport", "", "Transport", t(0.9), acc(bkash), takaToPaisa(320.0))
    // Website render only: last month as far in as this one, so Analytics has a "vs" to give
    // (it compares the same days of each month, and those days of last month were empty).
    val prevStart = java.util.Calendar.getInstance().apply { timeInMillis = monthStart; add(java.util.Calendar.MONTH, -1) }.timeInMillis
    fun pt(f: Double) = prevStart + ((now - monthStart) * f).toLong()
    j.postIncome("Salary", "", "Salary", pt(0.05), null, 0L, acc(dbbl), takaToPaisa(50000.0))
    // Website render only (site 2.25.20): cash and bKash funded from the salary before last
    // month's spending, which they paid out of nothing until then -- Money Flow opened October
    // on Cash in Hand at -৳4,050 and bKash at -৳2,100.
    j.postMove("Withdrawal", "", pt(0.07), acc(dbbl), acc(cash), takaToPaisa(6000.0), sourceType = st.WITHDRAWAL)
    j.postMove("Transfer", "", pt(0.08), acc(dbbl), acc(bkash), takaToPaisa(3000.0), sourceType = st.TRANSFER)
    j.postExpense("Rent", "", "Rent", pt(0.1), acc(dbbl), takaToPaisa(18000.0))
    j.postExpense("Bills", "", "Bills", pt(0.35), acc(bkash), takaToPaisa(2100.0))
    j.postExpense("Bazar", "", "Bazar", pt(0.6), acc(cash), takaToPaisa(3100.0))
    j.postExpense("Food", "", "Food", pt(0.85), acc(cash), takaToPaisa(950.0))
`],
  [`personName = "Karim", phone = "01711111111", type = "GIVEN", totalPaisa = takaToPaisa(12000.0), paidPaisa = 0L, dueDate = now - 5 * day, note = "Short loan"),
      acc(dbbl), takaToPaisa(12000.0), now - 14 * day, "Short loan"`,
`personName = w("Karim", "করিম"), phone = "01711111111", type = "GIVEN", totalPaisa = takaToPaisa(12000.0), paidPaisa = 0L, dueDate = now - 5 * day, note = w("Short loan", "অল্প দিনের ধার")),
      acc(dbbl), takaToPaisa(12000.0), now - 14 * day, w("Short loan", "অল্প দিনের ধার")`],
  [`personName = "Salam", phone = "01933333333", type = "TAKEN", totalPaisa = takaToPaisa(8000.0), paidPaisa = 0L, dueDate = now + 9 * day, note = "Rent"),
      acc(cash), takaToPaisa(8000.0), now - 10 * day, "Rent"
    )`,
`personName = w("Salam", "সালাম"), phone = "01933333333", type = "TAKEN", totalPaisa = takaToPaisa(8000.0), paidPaisa = 0L, dueDate = now + 9 * day, note = w("Rent", "ভাড়া")),
      acc(cash), takaToPaisa(8000.0), now - 10 * day, w("Rent", "ভাড়া")
    )
    // Website render only: two more given, one part repaid, so the Loans page is not half empty.
    if (webScene) {
      repository.recordLoan(
        PersonLoan(personName = w("Nasir", "নাসির"), phone = "01822222222", type = "GIVEN", totalPaisa = takaToPaisa(6000.0), paidPaisa = 0L, dueDate = now + 14 * day, note = w("Medicine", "ওষুধ")),
        repository.accountsOnce().first { it.id == cash }, takaToPaisa(6000.0), now - 16 * day, w("Medicine", "ওষুধ")
      )
      val nasir = repository.personLoanDao.getAllLoansOnce().filter { it.phone == "01822222222" }
      repository.recordSettlement(nasir, nasir.first().personName, "GIVEN", 2000.0, repository.accountsOnce().first { it.id == cash }, now - 3 * day)
      repository.recordLoan(
        PersonLoan(personName = w("Rafiq", "রফিক"), phone = "01544444444", type = "GIVEN", totalPaisa = takaToPaisa(3500.0), paidPaisa = 0L, dueDate = now + 25 * day, note = w("Books", "বই")),
        repository.accountsOnce().first { it.id == bkash }, takaToPaisa(3500.0), now - 7 * day, w("Books", "বই")
      )
    }`],
]);
edit('Gallery05TransactionsTest.kt', [['    super.seedSample()\n    val accounts', '    super.seedSample()\n    if (webScene) return // website: the base ledger, no reversal on top\n    val accounts']]);
edit('Gallery07AccountsTest.kt', [['    super.seedSample()\n    val now', '    super.seedSample()\n    if (webScene) return // website: the same ledger as Home\n    val now']]);
edit('Gallery09LoansTest.kt', [
  ['    super.seedSample()\n    val now', '    super.seedSample()\n    if (webScene) return // website: the same ledger as Home\n    val now'],
  ['@Test fun bangla() = scene("09-Loans-Given", english = false, open = { ready() })', '@Test fun bangla() = scene("09-Loans-Given", english = false, open = { awaitTag("loan_card_করিম_GIVEN") })'],
]);
edit('Gallery03HomeTest.kt', [
  ['  @Test fun homeBangla() = scene("03-01-Home", english = false, open = ::showFigures) { Main() }\n',
`  @Test fun homeBangla() = scene("03-01-Home", english = false, open = ::showFigures) { Main() }
  // Website render only (not committed): the two pages inside MainScreen, title bar and all.
  @Test fun webAnalytics() = scene("06-Analytics") { Main(AppPage.STATISTICS) }
  @Test fun webAnalyticsBangla() = scene("06-Analytics", english = false) { Main(AppPage.STATISTICS) }
  @Test fun webFlow() = scene("06-Money-Flow") { Main(AppPage.MONEY_FLOW) }
  @Test fun webFlowBangla() = scene("06-Money-Flow", english = false) { Main(AppPage.MONEY_FLOW) }
`],
]);
console.log('ok');
