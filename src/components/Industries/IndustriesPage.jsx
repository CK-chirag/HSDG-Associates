import { Link } from 'react-router-dom'
import { industries } from './industriesData'
import { useEffect } from 'react'


const handleScrollTop = () => window.scrollTo(0, 0)

const IndustriesPage = () => {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[color:var(--color-header)] sm:text-4xl">
            Industry-Focused Advisory & Compliance
          </h1>
          <div className="mx-auto mt-4 max-w-3xl space-y-3 text-sm text-[color:var(--color-paragraph)]">
            <p>
              We deliver industry specific audit, tax, and advisory services aligned with regulations, business needs, and risk management helping companies handle compliance, reporting, and financial governance.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.slug}
              className="overflow-hidden rounded-2xl border border-[color:var(--color-divider)] bg-white"
            >
              <div className="h-52 w-full overflow-hidden">
                <img
                  src={industry.images[0]}
                  alt={industry.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h2 className="text-lg font-semibold text-[color:var(--color-header)]">
                  {industry.title}
                </h2>
                <p className="mt-3 text-sm text-[color:var(--color-paragraph)]">
                  {industry.overview[0]}
                </p>
                <Link
                  to={`/industries/${industry.slug}`}
                  onClick={handleScrollTop}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-header)]"
                >
                  View Industry Details
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesPage
