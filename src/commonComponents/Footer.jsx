const Footer = () => {
	return (
		<footer className="bg-[color:var(--color-header)] text-white">
			<div className="mx-auto max-w-7xl px-4 py-12">
				<div className="grid gap-8 md:grid-cols-3">
					<div>
						<h3 className="text-white text-lg font-semibold tracking-wide">ADDRESS</h3>
						<div className="mt-4 flex gap-4">
							<div className="flex h-12 w-12 items-center justify-center rounded bg-white/10">
								<svg
									aria-hidden="true"
									className="h-6 w-6"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 21s7-6.1 7-12a7 7 0 10-14 0c0 5.9 7 12 7 12z"
									/>
									<circle cx="12" cy="9" r="2.5" />
								</svg>
							</div>
							<p className="text-sm leading-relaxed text-white/80">
								D-194, First Floor, Okhla Phase I, 
								<br />New Delhi - 110020
							</p>
						</div>
					</div>

					<div>
						<h3 className="text-white text-lg font-semibold tracking-wide">CONTACT NO.</h3>
						<div className="mt-4 flex gap-4">
							<div className="flex h-12 w-12 items-center justify-center rounded bg-white/10">
								<svg
									aria-hidden="true"
									className="h-6 w-6"
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
							</div>
							<div className="text-sm leading-relaxed text-white/80">
								<p className="font-medium text-white">011-41827784</p>
								<p>We feel happy to talk</p>
							</div>
						</div>
					</div>

					<div>
						<h3 className="text-white text-lg font-semibold tracking-wide">EMAIL</h3>
						<div className="mt-4 flex gap-4">
							<div className="flex h-12 w-12 items-center justify-center rounded bg-white/10">
								<svg
									aria-hidden="true"
									className="h-6 w-6"
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
							</div>
							<div className="text-sm leading-relaxed text-white/80">
								<p className="font-medium text-white">executive@hsdg.in</p>
								<p>Write Your Message</p>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-10 border-t border-white/15 pt-6">
					<div className="flex flex-col items-center justify-between gap-4 text-sm text-white/70 md:flex-row">
						<div className="flex flex-wrap items-center gap-5 text-white">
							<a className="transition-opacity hover:opacity-80" href="/">
								Home
							</a>
							<a className="transition-opacity hover:opacity-80" href="/about-us">
								About Us
							</a>
							<a className="transition-opacity hover:opacity-80" href="/about-us">
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
