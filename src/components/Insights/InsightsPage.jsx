import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../../services/blogService'

const handleScrollTop = () => window.scrollTo(0, 0)

const InsightsPage = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section className="bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 py-20 text-center">
          <p className="text-sm text-[color:var(--color-paragraph)]">Loading...</p>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-[color:var(--color-header)] sm:text-4xl">
            Insights & Updates
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-[color:var(--color-paragraph)]">
            Explore detailed articles from our team on GST, compliance, technology, and
            financial management.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-[color:var(--color-divider)] bg-[color:var(--color-muted)] px-6 py-12 text-center">
            <p className="text-sm text-[color:var(--color-paragraph)]">No insights yet.</p>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {posts.map((post) => (
            <article
              key={post.id}
              className="overflow-hidden rounded-2xl border border-[color:var(--color-divider)] bg-white"
            >
              <img
                src={post.image}
                alt={post.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="inline-flex items-center rounded-md bg-[color:var(--color-header)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
                  {post.tag}
                </span>
                <h2 className="mt-4 text-lg font-semibold text-[color:var(--color-header)]">
                  <Link
                    to={`/insights/${post.slug}`}
                    className="transition hover:text-[color:var(--color-accent)]"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm text-[color:var(--color-paragraph)]">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center justify-between text-xs text-[color:var(--color-paragraph)]">
                  <span>{post.author}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link
                  to={`/insights/${post.slug}`}
                  onClick={handleScrollTop}
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-header)]"
                >
                  Read Full Insight
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default InsightsPage
