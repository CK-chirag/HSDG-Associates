import { useEffect, useState } from 'react'
import { createJob, deleteJob, getJobs } from '../services/jobsService'

const generateSlug = (title) =>
    title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-')

export default function AdminJobs() {
    const [jobs, setJobs] = useState([])
    const [message, setMessage] = useState('')
    const [form, setForm] = useState({
        title: '',
        overview: '',
        needs: '',
        work: '',
        department: '',
        location: '',
        type: 'Full-time',
        experience: '',
    })

    useEffect(() => {
        loadJobs()
    }, [])

    const loadJobs = async () => {
        setJobs(await getJobs())
    }

    const handleChange = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        await createJob({
            title: form.title,
            slug: generateSlug(form.title),
            overview: form.overview,
            needs: form.needs.split('\n').filter(Boolean),
            work: form.work.split('\n').filter(Boolean),
            department: form.department,
            location: form.location,
            type: form.type,
            experience: form.experience,
        })

        setMessage('Job published!')
        setForm({
            title: '',
            overview: '',
            needs: '',
            work: '',
            department: '',
            location: '',
            type: 'Full-time',
            experience: '',
        })
        await loadJobs()
        setTimeout(() => setMessage(''), 3000)
    }

    const handleDelete = async (id) => {
        if (window.confirm('Delete this job?')) {
            await deleteJob(id)
            await loadJobs()
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
                        Publish Job Openings
                    </h1>
                    <p className="mx-auto mt-4 max-w-2xl text-sm text-[color:var(--color-paragraph)]">
                        Create and manage career openings without auth, directly from Firestore.
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
                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Job Title</label>
                    <input
                        name="title"
                        placeholder="Senior Chartered Accountant"
                        value={form.title}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Overview of Job</label>
                    <textarea
                        name="overview"
                        rows={4}
                        placeholder="Lead audit engagements and ensure compliance..."
                        value={form.overview}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">What We Need</label>
                    <p className="mb-2 text-xs text-[color:var(--color-paragraph)]">One requirement per line.</p>
                    <textarea
                        name="needs"
                        rows={4}
                        placeholder={'Strong experience in audit planning\nAbility to manage client relationships\nGood compliance knowledge'}
                        value={form.needs}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">What You Will Do</label>
                    <p className="mb-2 text-xs text-[color:var(--color-paragraph)]">One responsibility per line.</p>
                    <textarea
                        name="work"
                        rows={4}
                        placeholder={'Lead assignments end-to-end\nGuide juniors and review work\nCoordinate with clients'}
                        value={form.work}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Department</label>
                    <input
                        name="department"
                        placeholder="Audit & Assurance"
                        value={form.department}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Location</label>
                    <input
                        name="location"
                        placeholder="New Delhi"
                        value={form.location}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Job Type</label>
                    <select name="type" value={form.type} onChange={handleChange} className={fieldClass}>
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </select>

                    <label className="text-sm font-semibold text-[color:var(--color-header)]">Experience</label>
                    <input
                        name="experience"
                        placeholder="5-8 years"
                        value={form.experience}
                        onChange={handleChange}
                        required
                        className={fieldClass}
                    />

                    <button
                        type="submit"
                        className="mt-2 w-full rounded-xl bg-[color:var(--color-header)] px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                    >
                        Publish Job
                    </button>
                </form>

                <div className="mt-10">
                    <h2 className="text-xl font-semibold text-[color:var(--color-header)]">
                        Published Jobs ({jobs.length})
                    </h2>

                    {jobs.length === 0 ? (
                        <p className="mt-3 text-sm text-[color:var(--color-paragraph)]">No jobs yet.</p>
                    ) : (
                        <div className="mt-4 divide-y divide-[color:var(--color-divider)] rounded-3xl border border-[color:var(--color-divider)] bg-white">
                            {jobs.map((job) => (
                                <div
                                    key={job.id}
                                    className="flex flex-wrap items-center justify-between gap-4 px-4 py-4"
                                >
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-sm font-semibold text-[color:var(--color-header)]">
                                                {job.title}
                                            </span>
                                            <span className="rounded-md bg-[color:var(--color-muted)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[color:var(--color-paragraph)]">
                                                {job.department}
                                            </span>
                                        </div>
                                        <p className="mt-1 text-xs text-[color:var(--color-paragraph)]">{job.slug}</p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(job.id)}
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
