const ContactUs = () => {
	const offices = [
		{
			name: 'Faridabad',
			type: 'Branch Office',
			address: '4649, 3RD FLOOR, ACHIEVERS SOCIETY, SECTOR 49, FARIDABAD, HARYANA, INDIA, 121001',
			phone: '+91 98765 43210',
			email: 'faridabad@hsdg.in',
		},
		{
			name: 'Chandigarh',
			type: 'Branch Office',
			address: '1078, Sector 12A, Panchkula, Panchkula, Haryana, India, 134113',
			phone: '+91 98765 43211',
			email: 'chandigarh@hsdg.in',
		},
		{
			name: 'Sonipat',
			type: 'Branch Office',
			address: 'F4-11, White Lily Residence, Sector 27, Sonepat, Haryana, India, 131001',
			phone: '+91 7838834303',
			email: 'executive@hsdg.in',
		},
		{
			name: 'Jaipur',
			type: 'Branch Office',
			address: 'D 61 62, Back Side 80 Feet Road, Mahesh Nagar, Jaipur, Rajasthan, India, 302015',
			phone: '+91 98765 43210',
			email: 'faridabad@hsdg.in',
		},
		{
			name: 'Srinagar',
			type: 'Branch Office',
			address: 'Shahbad House, Baghat Barzulla, Near Gurudwara, Srinagar, Jammu and Kashmir, India, 190005',
			phone: '+91 98765 43211',
			email: 'chandigarh@hsdg.in',
		},
		{
			name: 'Ludhiana',
			type: 'Branch Office',
			address: 'GK Estate Colony, Mundiyan Kalan, Ludhiana, Punjab, India, 141015',
			phone: '+91 98765 43211',
			email: 'chandigarh@hsdg.in',
		},
	]

	return (
		<section className="bg-white">
			<div
				className="relative min-h-[280px] overflow-hidden bg-[color:var(--color-header)] text-white sm:min-h-[320px]"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-header)]/95 via-[color:var(--color-header)]/85 to-[color:var(--color-header)]/70" />
				<div className="relative mx-auto mt-10 flex h-full max-w-6xl items-center px-4 py-16">
					<div className="text-center w-full">
						<div className="mx-auto mb-4 h-0.5 w-16 rounded-full bg-white/70" />
						<h1 className="text-3xl font-semibold text-white sm:text-4xl">Contact Us</h1>
						<p className="mx-auto mt-3 max-w-2xl text-sm text-white/80">
							Let's Start a Conversation
						</p>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-5xl px-4 py-16">
				<div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-paragraph)]">
							Get in Touch
						</p>
						<h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-header)]">
							Send Us a Message
						</h2>
						<div className="mt-4 h-0.5 w-16 rounded-full bg-[color:var(--color-header)]/70" />

						<form className="mt-8 space-y-6">
							<div className="grid gap-6 sm:grid-cols-2">
								<label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
									Full Name
									<input
										type="text"
										placeholder="John Doe"
										className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] bg-[color:var(--color-divider)]/10 px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
										required
									/>
								</label>
								<label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
									Email Address
									<input
										type="email"
										placeholder="john@example.com"
										className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] bg-[color:var(--color-divider)]/10 px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
										required
									/>
								</label>
							</div>

							<div className="grid gap-6 sm:grid-cols-2">
								<label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
									Phone Number
									<input
										type="tel"
										placeholder="+91 98765 43210"
										className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] bg-[color:var(--color-divider)]/10 px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
										required
									/>
								</label>
								<label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
									Subject
									<input
										type="text"
										placeholder="How can we help?"
										className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] bg-[color:var(--color-divider)]/10 px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
										required
									/>
								</label>
							</div>

							<label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
								Message
								<textarea
									placeholder="Tell us about your requirements..."
									rows="5"
									className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] bg-[color:var(--color-divider)]/10 px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)] resize-none"
									required
								/>
							</label>

							<button
								type="submit"
								className="inline-flex items-center mt-8 gap-2 rounded-full bg-[color:var(--color-header)] px-8 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
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
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								Send Message
							</button>
						</form>
					</div>

					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-paragraph)]">
							Reach Us
						</p>
						<h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-header)]">
							Contact Details
						</h2>
						<div className="mt-4 h-0.5 w-16 rounded-full bg-[color:var(--color-header)]/70" />

						<div className="mt-8 space-y-6">
							<div className="flex items-start gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-header)] text-white">
									<svg
										aria-hidden="true"
										className="h-5 w-5"
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
								<div>
									<p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-paragraph)]">
										Phone
									</p>
									<a
										href="tel:011-41827784"
										className="mt-1 text-sm font-medium text-[color:var(--color-header)] hover:underline"
									>
										011-41827784
									</a>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-header)] text-white">
									<svg
										aria-hidden="true"
										className="h-5 w-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
										/>
									</svg>
								</div>
								<div>
									<p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-paragraph)]">
										Email
									</p>
									<a
										href="mailto:executive@hsdg.in"
										className="mt-1 text-sm font-medium text-[color:var(--color-header)] hover:underline"
									>
										executive@hsdg.in
									</a>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-header)] text-white">
									<svg
										aria-hidden="true"
										className="h-5 w-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11z"
										/>
										<circle cx="12" cy="10" r="2.5" />
									</svg>
								</div>
								<div>
									<p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-paragraph)]">
										Address
									</p>
									<p className="mt-1 text-sm font-medium text-[color:var(--color-header)]">
										D-194, First Floor
									</p>
									<p className="text-sm font-medium text-[color:var(--color-header)]">
										Okhla Phase I
									</p>
									<p className="text-sm font-medium text-[color:var(--color-header)]">
										New Delhi - 110020
									</p>
								</div>
							</div>

							<div className="flex items-start gap-4">
								<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-header)] text-white">
									<svg
										aria-hidden="true"
										className="h-5 w-5"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
									>
										<circle cx="12" cy="12" r="9" />
										<path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
									</svg>
								</div>
								<div>
									<p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-paragraph)]">
										Business Hours
									</p>
									<p className="mt-1 text-sm font-medium text-[color:var(--color-header)]">
										Mon - Fri: 9:00 AM - 6:00 PM
									</p>
									<p className="text-sm font-medium text-[color:var(--color-header)]">
										Saturday: 9:00 AM - 2:00 PM
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-[color:var(--color-header)] py-12 text-white">
				<div className="mx-auto max-w-4xl px-4 text-center">
					<div className="mx-auto mb-4 h-0.5 w-16 rounded-full bg-white/70" />
					<h2 className="text-2xl font-semibold text-white">Ready to Work Together?</h2>
					<p className="mx-auto mt-3 max-w-xl text-sm text-white/80">
						Schedule a consultation with our experts today.
					</p>
					<a
						href="tel:+917838834303"
						className="mt-6 inline-block rounded-full bg-white px-8 py-3 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)] transition-opacity hover:opacity-90"
					>
						Book Consultation
					</a>
				</div>
			</div>

			<div className="bg-[color:var(--color-divider)]/20 py-16">
				<div className="mx-auto max-w-6xl px-4">
					<div className="text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-paragraph)]">
							Our Presence
						</p>
						<h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-header)]">
							Office Locations
						</h2>
						<div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-[color:var(--color-header)]/70" />
					</div>

					<article
						className="mt-10 rounded-2xl border border-[color:var(--color-divider)] bg-white p-6 text-center shadow-sm"
					>
						<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-header)] text-white">
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
									d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11z"
								/>
								<circle cx="12" cy="10" r="2.5" />
							</svg>
						</div>
						<h3 className="mt-4 text-lg font-semibold text-[color:var(--color-header)]">
							New Delhi
						</h3>
						<p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-paragraph)]">
							Head Office
						</p>
						<div className="mx-auto my-4 h-px w-12 bg-[color:var(--color-divider)]" />
						<p className="text-sm text-[color:var(--color-paragraph)]">
							D-194, First Floor, Okhla Phase I, New Delhi - 110020
						</p>
					</article>

					<div className="mt-6 grid gap-6 md:grid-cols-3">
						{offices.map((office) => (
							<article
								key={office.name}
								className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-6 text-center shadow-sm"
							>
								<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-header)] text-white">
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
											d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11z"
										/>
										<circle cx="12" cy="10" r="2.5" />
									</svg>
								</div>
								<h3 className="mt-4 text-lg font-semibold text-[color:var(--color-header)]">
									{office.name}
								</h3>
								<p className="mt-1 text-xs font-semibold uppercase tracking-wide text-[color:var(--color-paragraph)]">
									{office.type}
								</p>
								<div className="mx-auto my-4 h-px w-12 bg-[color:var(--color-divider)]" />
								<p className="text-sm text-[color:var(--color-paragraph)]">{office.address}</p>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactUs
