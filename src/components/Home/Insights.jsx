import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getPosts } from '../../services/blogService'

const handleScrollTop = () => window.scrollTo(0, 0)

const Insights = () => {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		getPosts()
			.then((data) => setPosts(data.slice(0, 3)))
			.finally(() => setLoading(false))
	}, [])

	if (loading || posts.length === 0) {
		return null
	}

	return (
		<section className="bg-white py-12">
			<div className="mx-auto max-w-7xl px-4">
				<div className="text-center">
					<h2 className="text-2xl font-semibold text-[color:var(--color-header)] sm:text-3xl">
						Insights & Updates
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-[color:var(--color-paragraph)]">
						Stay informed with the latest news, updates, and expert insights on taxation,
						compliance, and financial management from our team of chartered accountants.
					</p>
				</div>

				<div className="mt-10 grid gap-6 lg:grid-cols-3">
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
								<h3 className="mt-4 text-base font-semibold text-[color:var(--color-header)]">
									<Link
										to={`/insights/${post.slug}`}
										className="transition hover:text-[color:var(--color-accent)]"
									>
										{post.title}
									</Link>
								</h3>
								<p className="mt-3 text-sm text-[color:var(--color-paragraph)]">
									{post.description}
								</p>
								<div className="mt-4 flex items-center gap-4 text-xs text-[color:var(--color-paragraph)]">
									<span className="flex items-center gap-2">
										<svg
											aria-hidden="true"
											className="h-3.5 w-3.5"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<circle cx="12" cy="8" r="4" />
											<path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
										</svg>
										{post.author}
									</span>
									<span className="flex items-center gap-2">
										<svg
											aria-hidden="true"
											className="h-3.5 w-3.5"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
										>
											<circle cx="12" cy="12" r="9" />
											<path d="M12 7v5l3 3" />
										</svg>
										{post.date}
									</span>
								</div>
								<Link
									to={`/insights/${post.slug}`}
									onClick={handleScrollTop}
									className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-[color:var(--color-header)]"
								>
									Read More
									<span aria-hidden="true">→</span>
								</Link>
							</div>
						</article>
					))}
				</div>

				<div className="mt-10 flex justify-center">
					<Link
						to="/insights"
						onClick={handleScrollTop}
						className="rounded-full border border-[color:var(--color-divider)] px-6 py-3 text-sm font-semibold text-[color:var(--color-header)] transition-colors hover:bg-[color:var(--color-divider)]/30"
					>
						View All Insights
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Insights
