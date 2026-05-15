import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPosts } from '../../services/blogService'

const handleScrollTop = () => window.scrollTo(0, 0)

const InsightDetail = () => {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts()
      .then((posts) => setPost(posts.find((item) => item.slug === slug) || null))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm text-[color:var(--color-paragraph)]">Loading...</p>
        </div>
      </section>
    )
  }

  if (!post) {
    return (
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h1 className="text-2xl font-semibold text-[color:var(--color-header)]">
            Insight not found
          </h1>
          <p className="mt-3 text-sm text-[color:var(--color-paragraph)]">
            The insight you are looking for does not exist or may have been moved.
          </p>
          <Link
            to="/insights"
            onClick={handleScrollTop}
            className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-header)]"
          >
            Back to Insights
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-4xl px-4">
        <div className="flex flex-col gap-4">
          <Link
            to="/insights"
            onClick={handleScrollTop}
            className="inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-header)]"
          >
            ← Back to Insights
          </Link>
          <span className="inline-flex w-fit items-center rounded-md bg-[color:var(--color-header)] px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white">
            {post.tag}
          </span>
          <h1 className="text-3xl font-semibold text-[color:var(--color-header)] sm:text-4xl">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[color:var(--color-paragraph)]">
            <span>{post.author}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>

        <img
          src={post.image}
          alt={post.title}
          className="mt-8 h-72 w-full rounded-3xl object-cover"
          loading="lazy"
        />

        <div className="mt-10 space-y-5 text-sm text-[color:var(--color-paragraph)]">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[color:var(--color-divider)] bg-[color:var(--color-muted)] p-6">
          <h2 className="text-base font-semibold text-[color:var(--color-header)]">
            Key takeaways
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-paragraph)]">
            {post.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[color:var(--color-header)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default InsightDetail
