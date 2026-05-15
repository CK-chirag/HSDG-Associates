import { useEffect, useState } from 'react'
import { createPost, deletePost, getPosts } from '../services/blogService'

const TAGS = ['GST', 'Technology', 'Compliance', 'Audit', 'Advisory', 'Taxation']
const IMAGE_URL_PATTERN = /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i

const generateSlug = (title) =>
    title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-')

const today = () =>
    new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

export default function AdminDashboard() {
    const [posts, setPosts] = useState([])
    const [message, setMessage] = useState('')
    const [form, setForm] = useState({
        tag: 'GST',
        title: '',
        description: '',
        author: '',
        readTime: '',
        image: '',
        content: '',
        highlights: '',
    })

    useEffect(() => {
        loadPosts()
    }, [])

    const loadPosts = async () => {
        setPosts(await getPosts())
    }

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!IMAGE_URL_PATTERN.test(form.image)) {
            setMessage('Please enter a direct image URL ending in .jpg, .png, .webp, etc. Article page links will not display as images.')
            return
        }

        await createPost({
            tag: form.tag,
            title: form.title,
            description: form.description,
            author: form.author,
            readTime: form.readTime,
            image: form.image,
            slug: generateSlug(form.title),
            date: today(),
            content: form.content.split('\n').filter(Boolean),
            highlights: form.highlights.split('\n').filter(Boolean),
        })

        setMessage('Post published!')
        setForm({
            tag: 'GST',
            title: '',
            description: '',
            author: '',
            readTime: '',
            image: '',
            content: '',
            highlights: '',
        })
        await loadPosts()
        setTimeout(() => setMessage(''), 3000)
    }

    const handleDelete = async (id) => {
        if (window.confirm('Delete this post?')) {
            await deletePost(id)
            await loadPosts()
        }
    }

    const fieldClass =
        'mb-4 w-full rounded-xl border border-[color:var(--color-divider)] px-4 py-3 text-sm outline-none transition focus:border-[color:var(--color-header)]'

    return (
        <section className="bg-white py-14">
            <div className="mx-auto max-w-4xl px-4">
                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--color-paragraph)]">
                        Admin Panel
                    </p>
                    <h1 className="mt-2 text-3xl font-semibold text-[color:var(--color-header)] sm:text-4xl">
                        Publish Blog Posts
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-[color:var(--color-paragraph)]">
                        Create and manage insights posts without auth, directly from Firestore.
                    </p>
                </div>

                {message && (
                    <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                        {message}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 rounded-3xl border border-[color:var(--color-divider)] bg-white p-6 shadow-sm"
                >
                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Tag</label>
                    <select name="tag" value={form.tag} onChange={handleChange} className={fieldClass}>
                        {TAGS.map((tag) => (
                            <option key={tag} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Title</label>
                    <input
                        name="title"
                        placeholder="Post title"
                        value={form.title}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Short Description</label>
                    <input
                        name="description"
                        placeholder="One line shown on the card"
                        value={form.description}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Author</label>
                    <input
                        name="author"
                        placeholder="e.g. CA Priya Sharma"
                        value={form.author}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Read Time</label>
                    <input
                        name="readTime"
                        placeholder="e.g. 5 min read"
                        value={form.readTime}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Image URL</label>
                    <input
                        name="image"
                        placeholder="https://images.unsplash.com/..."
                        value={form.image}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />
                    <p className="mb-4 text-xs text-[color:var(--color-paragraph)]">
                        Use a direct image file URL, not a blog post page link.
                    </p>

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Content</label>
                    <p className="mb-2 text-xs text-[color:var(--color-paragraph)]">
                        One paragraph per line.
                    </p>
                    <textarea
                        name="content"
                        rows={7}
                        value={form.content}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                        placeholder={'First paragraph...\nSecond paragraph...\nThird paragraph...'}
                    />

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Key Takeaways</label>
                    <p className="mb-2 text-xs text-[color:var(--color-paragraph)]">One per line.</p>
                    <textarea
                        name="highlights"
                        rows={4}
                        value={form.highlights}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                        placeholder={'First takeaway...\nSecond takeaway...\nThird takeaway...'}
                    />

                    <button
                        type="submit"
                        className="mt-2 w-full rounded-xl bg-[color:var(--color-header)] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                        Publish Post
                    </button>
                </form>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-[color:var(--color-header)]">
                        Published Posts ({posts.length})
                    </h2>

                    {posts.length === 0 ? (
                        <p className="mt-3 text-sm text-[color:var(--color-paragraph)]">No posts yet.</p>
                    ) : (
                        <div className="mt-4 divide-y divide-[color:var(--color-divider)] rounded-3xl border border-[color:var(--color-divider)] bg-white">
                            {posts.map((post) => (
                                <div
                                    key={post.id}
                                    className="flex flex-wrap items-center justify-between gap-4 px-4 py-4"
                                >
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-sm font-semibold text-[color:var(--color-header)]">
                                                {post.title}
                                            </span>
                                            <span className="rounded-md bg-[color:var(--color-muted)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[color:var(--color-paragraph)]">
                                                {post.tag}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-xs text-[color:var(--color-paragraph)]">{post.slug}</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(post.id)}
                                        className="text-sm font-semibold text-red-600 transition hover:text-red-700"
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
