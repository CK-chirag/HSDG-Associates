import { useEffect, useState } from 'react'
import { getJobs } from '../../services/jobsService'

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

const Careers = () => {
    const [jobs, setJobs] = useState([])
    const [expandedJob, setExpandedJob] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')
    const [submitStatus, setSubmitStatus] = useState('idle')

    useEffect(() => {
        loadJobs()
    }, [])

    const loadJobs = async () => {
        setJobs(await getJobs())
    }

    const toggleJob = (title) => {
        setExpandedJob((current) => (current === title ? null : title))
    }

    const handleApplicationSubmit = async (event) => {
        event.preventDefault()
        const formElement = event.currentTarget

        if (!WEB3FORMS_ACCESS_KEY) {
            setSubmitMessage('Web3Forms access key is missing. Please check your environment configuration.')
            setSubmitStatus('error')
            return
        }

        try {
            setIsSubmitting(true)
            setSubmitMessage('')
            setSubmitStatus('idle')

            const formData = new FormData(formElement)
            formData.append('access_key', WEB3FORMS_ACCESS_KEY)
            formData.append('subject', 'New Career Application - HSDG')
            formData.append('from_name', 'HSDG Careers Page')

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            })

            const result = await response.json()

            if (!result.success) {
                throw new Error(result.message || 'Unable to submit application right now.')
            }

            setSubmitMessage('Application submitted successfully. Our team will contact you soon.')
            setSubmitStatus('success')
            formElement.reset()

            setTimeout(() => {
                setSubmitMessage('')
                setSubmitStatus('idle')
            }, 5000)
            
        } catch (error) {
            setSubmitMessage(error.message || 'Unable to submit application right now.')
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="bg-white">
            <div className="bg-[color:var(--color-header)] py-16 text-white">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <div className="mx-auto mb-4 h-0.5 w-16 rounded-full bg-white/70" />
                    <h1 className="text-3xl font-semibold sm:text-4xl text-white/80">
                        Life at H S D G & Associates
                    </h1>
                    <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80">
                        A workplace where talent meets opportunity, and professional excellence is celebrated.
                    </p>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-paragraph)]">
                        Opportunities
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-header)]">
                        Current Openings
                    </h2>
                    <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-[color:var(--color-header)]/70" />
                </div>

                <div className="mt-10 space-y-6">
                    {jobs.length === 0 ? (
                        <p className="text-center text-sm text-[color:var(--color-paragraph)]">
                            No job openings published yet.
                        </p>
                    ) : (
                        jobs.map((opening) => (
                        <article
                            key={opening.id}
                            className="rounded-2xl border border-[color:var(--color-divider)] bg-white shadow-sm"
                        >
                            <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center">
                                <div>
                                    <h3 className="text-xl font-semibold text-[color:var(--color-header)]">
                                        {opening.title}
                                    </h3>
                                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[color:var(--color-paragraph)]">
                                        <span className="inline-flex items-center gap-2">
                                            <svg
                                                aria-hidden="true"
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <rect x="3" y="4" width="18" height="16" rx="2" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12h6" />
                                            </svg>
                                            {opening.department}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <svg
                                                aria-hidden="true"
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11z" />
                                                <circle cx="12" cy="10" r="2.5" />
                                            </svg>
                                            {opening.location}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <svg
                                                aria-hidden="true"
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <circle cx="12" cy="12" r="9" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                                            </svg>
                                            {opening.type}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <svg
                                                aria-hidden="true"
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7v10a5 5 0 0 0 10 0V7" />
                                            </svg>
                                            {opening.experience}
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-row flex-wrap gap-3 md:items-center md:justify-end">
                                    <button
                                        type="button"
                                        onClick={() => toggleJob(opening.title)}
                                        aria-expanded={expandedJob === opening.title}
                                        className="inline-flex h-10 items-center justify-center rounded-full border border-[color:var(--color-divider)] px-6 text-xs font-semibold text-[color:var(--color-header)] transition-colors hover:bg-[color:var(--color-divider)]/30"
                                    >
                                        {expandedJob === opening.title ? 'Hide Description' : 'View Description'}
                                    </button>
                                    <a
                                        href="#apply-now"
                                        className="inline-flex h-10 items-center justify-center rounded-full bg-[color:var(--color-header)] px-6 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            </div>
                            {expandedJob === opening.title && (
                                <div className="border-t border-[color:var(--color-divider)] px-6 py-4">
                                    <div className="space-y-5 text-sm text-[color:var(--color-paragraph)]">
                                        <div>
                                            <h4 className="text-sm font-semibold text-[color:var(--color-header)]">
                                                Overview of Job
                                            </h4>
                                            <p className="mt-2">{opening.overview}</p>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-[color:var(--color-header)]">
                                                What We Need
                                            </h4>
                                            <ul className="mt-2 list-disc space-y-1 pl-5">
                                                {opening.needs.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="text-sm font-semibold text-[color:var(--color-header)]">
                                                What You Will Do
                                            </h4>
                                            <ul className="mt-2 list-disc space-y-1 pl-5">
                                                {opening.work.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </article>
                        ))
                    )}
                </div>
            </div>

            <div id="apply-now" className="bg-[color:var(--color-divider)]/20 py-16">
                <div className="mx-auto max-w-4xl px-4">

                    {/* HEADER */}
                    <div className="text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-paragraph)]">
                            Apply Now
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-header)]">
                            Submit Your Application
                        </h2>

                        <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-[color:var(--color-header)]/70" />

                        <p className="mx-auto mt-4 max-w-2xl text-sm text-[color:var(--color-paragraph)]">
                            Join our team of professionals and take the next step in your career.
                        </p>
                    </div>

                    {/* FORM */}
                    <form
                        onSubmit={handleApplicationSubmit}
                        className="mt-10 rounded-2xl border border-[color:var(--color-divider)] bg-white p-6 shadow-sm"
                    >

                        <input type="checkbox" name="botcheck" className="hidden" tabIndex="-1" autoComplete="off" />

                        <div className="grid gap-6 md:grid-cols-2">

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
                                Full Name *
                                <input
                                    type="text"
                                    name="full_name"
                                    placeholder="John Doe"
                                    className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
                                    required
                                />
                            </label>

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
                                Email Address *
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
                                    required
                                />
                            </label>

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
                                Phone Number *
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="+91 98765 43210"
                                    className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
                                    required
                                />
                            </label>

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
                                Position Applied For *
                                <select
                                    name="position"
                                    className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Position</option>
                                    {jobs.map((opening) => (
                                        <option key={opening.title} value={opening.title}>
                                            {opening.title}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)] md:col-span-2">
                                Years of Experience *
                                <input
                                    type="text"
                                    name="experience"
                                    placeholder="e.g. 5 years or Fresher"
                                    className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
                                    required
                                />
                            </label>

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)] md:col-span-2">
                                Resume Link *
                                <input
                                    type="url"
                                    name="resume_link"
                                    placeholder="https://drive.google.com/..."
                                    className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
                                    required
                                />
                                <p className="mt-2 text-[11px] text-[color:var(--color-paragraph)] normal-case tracking-normal">
                                    Share a public link to your resume (Google Drive, Dropbox, OneDrive, etc.).
                                </p>
                            </label>
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-6 w-full rounded-full bg-[color:var(--color-header)] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                        </button>

                        {submitMessage && (
                            <p
                                className={`mt-3 rounded-lg border px-3 py-2 text-center text-xs ${
                                    submitStatus === 'success'
                                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                                        : 'border-red-200 bg-red-50 text-red-700'
                                }`}
                            >
                                {submitMessage}
                            </p>
                        )}

                        <p className="mt-3 text-center text-[11px] text-[color:var(--color-paragraph)]">
                            By submitting this form, you agree to our privacy policy and terms of service.
                        </p>

                    </form>

                </div>
            </div>


        </section>
    )
}

export default Careers
