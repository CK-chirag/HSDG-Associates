import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => setIsMenuOpen((open) => !open)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <header className="w-full">
            <div className="bg-[color:var(--color-header)] text-white">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm">
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            className="flex items-center gap-2 transition-opacity hover:opacity-80"
                            href="tel:+919876543210"
                        >
                            <svg
                                aria-hidden="true"
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M2 5.5c0-.83.67-1.5 1.5-1.5h3.14c.7 0 1.32.44 1.54 1.1l1 3c.23.7-.05 1.46-.66 1.84l-1.7 1.06a14.1 14.1 0 006.22 6.22l1.06-1.7c.38-.61 1.14-.89 1.84-.66l3 1c.66.22 1.1.84 1.1 1.54V20.5c0 .83-.67 1.5-1.5 1.5h-1c-9.94 0-18-8.06-18-18v-1z"
                                />
                            </svg>
                            +91 78388 34303
                        </a>
                        <a
                            className="flex items-center gap-2 transition-opacity hover:opacity-80"
                            href="mailto:info@harishchoudhary.com"
                        >
                            <svg
                                aria-hidden="true"
                                className="h-4 w-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3 7.5A2.5 2.5 0 015.5 5h13A2.5 2.5 0 0121 7.5v9A2.5 2.5 0 0118.5 19h-13A2.5 2.5 0 013 16.5v-9z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 7l8 6 8-6"
                                />
                            </svg>
                            executive@hsdg.in
                        </a>
                    </div>
                    <span className="text-xs tracking-wide sm:text-sm">
                        Trusted CA Firm Since 2021
                    </span>
                </div>
            </div>

            <div className="border-b border-[color:var(--color-divider)] bg-white">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4">
                    <Link to="/">
                        <div className="flex items-center gap-3">
                            <div className="flex h-6 w-10 items-center justify-center text-white">
                                <img
                                    src="https://vectorseek.com/wp-content/uploads/2023/09/Institute-of-Chartered-Accountants-Logo-Vector.svg-.png"
                                    alt="HSDG & Associates"
                                    className="h-full w-full"
                                />
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-[color:var(--color-header)]">
                                    HSDG & Associates
                                </p>
                                <p className="text-xs text-[color:var(--color-paragraph)]">
                                    Chartered Accountants
                                </p>
                            </div>
                        </div>
                    </Link>

                    <div className="flex items-center gap-2">
                        <nav className="hidden items-center gap-5 text-sm font-medium text-[color:var(--color-header)] md:flex">
                            <Link
                                className="transition-colors hover:text-[color:var(--color-paragraph)]"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                className="transition-colors hover:text-[color:var(--color-paragraph)]"
                                to="/services"
                            >
                                Services
                            </Link>
                            <Link
                                className="transition-colors hover:text-[color:var(--color-paragraph)]"
                                to="/about-us"
                            >
                                About Us
                            </Link>
                            <Link
                                className="transition-colors hover:text-[color:var(--color-paragraph)]"
                                to="/industries"
                            >
                                Industries
                            </Link>
                            <Link
                                className="transition-colors hover:text-[color:var(--color-paragraph)]"
                                to="/foreign"
                            >
                                Foreign Desk
                            </Link>
                            <Link
                                className="transition-colors hover:text-[color:var(--color-paragraph)]"
                                to="/insights"
                            >
                                Insights
                            </Link>
                            <Link
                                className="transition-colors hover:text-[color:var(--color-paragraph)]"
                                to="/careers"
                            >
                                Careers
                            </Link>
                            <Link
                                className="transition-colors hover:text-[color:var(--color-paragraph)]"
                                to="/contact-us"
                            >
                                Contact Us
                            </Link>
                        </nav>
                        <button
                            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--color-divider)] text-[color:var(--color-header)] transition-colors hover:bg-[color:var(--color-divider)]/30 md:hidden"
                            type="button"
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                            onClick={toggleMenu}
                        >
                            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 18h18" />
                            </svg>
                        </button>
                        <a
                            href="https://wa.me/917838834303"
                            className="inline-flex items-center gap-2 ml-2 rounded-full bg-[color:var(--color-header)] px-5 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                        >
                            Get Consultation
                        </a>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="border-t border-[color:var(--color-divider)] bg-white md:hidden">
                        <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-sm font-medium text-[color:var(--color-header)]">
                            <Link className="py-1" to="/" onClick={closeMenu}>
                                Home
                            </Link>
                            <Link className="py-1" to="/services" onClick={closeMenu}>
                                Services
                            </Link>
                            <Link className="py-1" to="/about-us" onClick={closeMenu}>
                                About Us
                            </Link>
                            <Link className="py-1" to="/industries" onClick={closeMenu}>
                                Industries
                            </Link>
                            <Link className="py-1" to="/foreign" onClick={closeMenu}>
                                Foreign Desk
                            </Link>
                            <Link className="py-1" to="/insights" onClick={closeMenu}>
                                Insights
                            </Link>
                            <Link className="py-1" to="/careers" onClick={closeMenu}>
                                Careers
                            </Link>
                            <Link className="py-1" to="/contact-us" onClick={closeMenu}>
                                Contact Us
                            </Link>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
