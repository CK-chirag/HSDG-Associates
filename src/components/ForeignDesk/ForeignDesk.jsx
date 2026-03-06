const ForeignDesk = () => {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-[color:var(--color-divider)] bg-[linear-gradient(135deg,rgba(51,65,92,0.08),rgba(204,221,238,0.45))] p-8 lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-paragraph)]">
                Foreign Desk
              </p>
              <h1 className="mt-3 text-3xl font-semibold text-[color:var(--color-header)] sm:text-4xl">
                Cross-Border Advisory & International Compliance Services
              </h1>
              <div className="mt-5 space-y-3 text-sm text-[color:var(--color-paragraph)]">
                <p>
                  Our Foreign Desk provides regulatory, tax and structuring advisory in relation
                  to cross-border transactions and international business operations.
                </p>
                <p>
                  We assist foreign enterprises entering India, Indian businesses expanding
                  overseas, and Non-Resident Indians in navigating Indian regulatory and tax
                  frameworks. Our advisory integrates FEMA regulations, RBI reporting
                  requirements, corporate law compliance and international tax considerations.
                </p>
                <p>
                  We are presently engaged with clients having business or transactional exposure
                  in the United States, United Kingdom, Australia and the United Arab Emirates,
                  subject to applicable regulatory frameworks.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  'Regulatory-first structuring',
                  'Documentation-driven execution',
                  'Commercial alignment',
                  'Ongoing compliance oversight',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[color:var(--color-divider)] bg-white px-3 py-1 text-[11px] font-semibold text-[color:var(--color-header)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h2 className="text-base font-semibold text-[color:var(--color-header)]">
                  Countries currently engaged
                </h2>
                <div className="rounded-full bg-[color:var(--color-divider)]/40 p-2">
                  <svg
                    aria-hidden="true"
                    className="h-5 w-5 text-[color:var(--color-header)]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M2 12h20" />
                    <path d="M12 2a15 15 0 010 20" />
                    <path d="M12 2a15 15 0 000 20" />
                    <circle cx="12" cy="12" r="9" />
                  </svg>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  { code: 'us', name: 'United States' },
                  { code: 'gb', name: 'United Kingdom' },
                  { code: 'au', name: 'Australia' },
                  { code: 'ae', name: 'United Arab Emirates' },
                  { code: 'ca', name: 'Canada' },
                  { code: 'nz', name: 'New Zealand' },
                ].map((country) => (
                  <div
                    key={country.code}
                    className="flex items-center gap-3 rounded-xl border border-[color:var(--color-divider)] bg-[color:var(--color-background)] px-3 py-2"
                  >
                    <img
                      src={`https://flagcdn.com/w40/${country.code}.png`}
                      alt={country.name}
                      className="h-6 w-8 rounded-sm object-cover"
                      loading="lazy"
                    />
                    <span className="text-xs font-semibold text-[color:var(--color-header)]">
                      {country.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-xl border border-[color:var(--color-divider)] bg-[color:var(--color-divider)]/30 p-4">
                <p className="text-xs text-[color:var(--color-paragraph)]">
                  Engagements are executed through secure data-sharing protocols and defined
                  reporting structures.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-6">
            <div className="flex items-start gap-3">
              <span className="rounded-full bg-[color:var(--color-divider)]/50 p-2">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-[color:var(--color-header)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 7h18" />
                  <path d="M6 7v10" />
                  <path d="M18 7v10" />
                  <path d="M3 17h18" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-semibold text-[color:var(--color-header)]">
                  India-Inbound Advisory
                </h2>
                <p className="mt-2 text-sm text-[color:var(--color-paragraph)]">
                  Support to foreign entities establishing or investing in India:
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-paragraph)]">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Entry strategy and entity structuring</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>FDI compliance and RBI reporting</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>FEMA advisory and sectoral cap analysis</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Tax registrations and ongoing compliance</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Transfer pricing considerations</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-6">
            <div className="flex items-start gap-3">
              <span className="rounded-full bg-[color:var(--color-divider)]/50 p-2">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-[color:var(--color-header)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 12h16" />
                  <path d="M12 4v16" />
                  <path d="M4 8h16" />
                  <path d="M4 16h16" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-semibold text-[color:var(--color-header)]">
                  India-Outbound Advisory
                </h2>
                <p className="mt-2 text-sm text-[color:var(--color-paragraph)]">
                  Advisory to Indian enterprises expanding internationally:
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-paragraph)]">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Overseas Direct Investment (ODI) compliance</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>FEMA structuring and reporting support</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Cross-border tax and DTAA evaluation</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Documentation and transaction structuring</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-6">
            <div className="flex items-start gap-3">
              <span className="rounded-full bg-[color:var(--color-divider)]/50 p-2">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-[color:var(--color-header)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 3v18" />
                  <path d="M5 7h14" />
                  <path d="M7 17h10" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-semibold text-[color:var(--color-header)]">
                  NRI & Cross-Border Tax Advisory
                </h2>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-paragraph)]">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Residential status determination</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Indian tax return compliance</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Capital gains and repatriation advisory</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>DTAA interpretation and withholding analysis</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-6">
            <div className="flex items-start gap-3">
              <span className="rounded-full bg-[color:var(--color-divider)]/50 p-2">
                <svg
                  aria-hidden="true"
                  className="h-5 w-5 text-[color:var(--color-header)]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="4" width="18" height="14" rx="2" />
                  <path d="M7 20h10" />
                  <path d="M9 16v4" />
                  <path d="M15 16v4" />
                </svg>
              </span>
              <div>
                <h2 className="text-lg font-semibold text-[color:var(--color-header)]">
                  Outsourced Accounting & Compliance Support
                </h2>
                <p className="mt-2 text-sm text-[color:var(--color-paragraph)]">
                  We provide structured outsourcing support to overseas enterprises seeking
                  India-based accounting and compliance management.
                </p>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-paragraph)]">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Bookkeeping and financial statement preparation</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Accounts payable and receivable management</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Payroll processing and statutory compliance</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>GST and direct tax compliance management</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Periodic management reporting (MIS)</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>Coordination with overseas management teams</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-[color:var(--color-divider)] bg-white p-6">
          <h2 className="text-lg font-semibold text-[color:var(--color-header)]">Our Approach</h2>
          <ul className="mt-4 grid gap-3 text-sm text-[color:var(--color-paragraph)] sm:grid-cols-2">
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
              <span>Regulatory-first structuring</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
              <span>Documentation-driven execution</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
              <span>Alignment with commercial objectives</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
              <span>Ongoing compliance oversight</span>
            </li>
          </ul>
          <p className="mt-4 text-sm text-[color:var(--color-paragraph)]">
            All services are rendered in accordance with applicable laws and professional
            standards.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ForeignDesk
