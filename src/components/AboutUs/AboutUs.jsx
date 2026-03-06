import { Assets } from "../../assets/assets";

const AboutUs = () => {
	const coreValues = [
		{
			title: 'Excellence',
			description:
				'Delivering exceptional service with unwavering commitment to quality and professional standards.',
			icon: (
				<svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 3l3 6 6 1-4 4 1 6-6-3-6 3 1-6-4-4 6-1 3-6z" />
				</svg>
			),
		},
		{
			title: 'Integrity',
			description:
				'Building trust through honest, transparent, and ethical practices in every engagement.',
			icon: (
				<svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4z" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-3.3 3.6-6 8-6s8 2.7 8 6" />
				</svg>
			),
		},
		{
			title: 'Precision',
			description:
				'Attention to detail and accuracy in all aspects of financial and legal advisory.',
			icon: (
				<svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<circle cx="12" cy="12" r="9" />
					<circle cx="12" cy="12" r="4" />
					<circle cx="12" cy="12" r="1" />
				</svg>
			),
		},
		{
			title: 'Growth',
			description:
				'Empowering clients to achieve sustainable growth and financial success.',
			icon: (
				<svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
					<path strokeLinecap="round" strokeLinejoin="round" d="M4 16l6-6 4 4 6-6" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M14 8h6v6" />
				</svg>
			),
		},
	]

	const practiceVerticals = [
		{
			title: 'Audit & Assurance',
			text: 'Statutory, internal, and concurrent audits',
			icon: (
				<svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
					<path strokeLinecap="round" strokeLinejoin="round" d="M6 18h12" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M10 14l-2 4" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M14 14l2 4" />
					<circle cx="12" cy="9" r="4" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6" />
				</svg>
			),
		},
		{
			title: 'Banking, Institutional',
			text: 'PSUs, autonomous bodies, govt entities',
			icon: (
				<svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
					<rect x="3" y="9" width="18" height="10" rx="1" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M7 9V5h10v4" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M7 13h2" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M11 13h2" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M15 13h2" />
				</svg>
			),
		},
		{
			title: 'Taxation & Regulatory',
			text: 'Direct/indirect tax, representations',
			icon: (
				<svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
					<path strokeLinecap="round" strokeLinejoin="round" d="M5 7h14" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M8 7v6a4 4 0 0 0 8 0V7" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M4 17h16" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 11v6" />
				</svg>
			),
		},
		{
			title: 'Corporate & Legal',
			text: 'Structuring, filings, due diligence',
			icon: (
				<svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
					<path strokeLinecap="round" strokeLinejoin="round" d="M5 20h14" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M7 20V8l5-3 5 3v12" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M9 15h6" />
				</svg>
			),
		},
		{
			title: 'Forensic & Special Audit',
			text: 'Investigation, fact-finding, review',
			icon: (
				<svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
					<circle cx="11" cy="11" r="6" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M16 16l4 4" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M11 8v6" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M8 11h6" />
				</svg>
			),
		},
		{
			title: 'International & Cross Border',
			text: 'India entry, compliance outsourcing',
			icon: (
				<svg aria-hidden="true" className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
					<circle cx="12" cy="12" r="9" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 3a14 14 0 0 1 0 18" />
					<path strokeLinecap="round" strokeLinejoin="round" d="M12 3a14 14 0 0 0 0 18" />
				</svg>
			),
		},
	]

	const teamMembers = [
		{
			name: 'CA Deepak Gupta',
			role: 'Managing Partner',
			image:
				Assets.pic8,
		},
		{
			name: 'CA Harvinder Singh',
			role: 'Founder and Partner',
			image:
				Assets.pic9,
		},
		{
			name: 'CA Jasmeet Kaur',
			role: 'Senior Partner',
			image:
				Assets.pic7,
		},
		{
			name: 'CA Versha',
			role: 'Senior Partner',
			image:
				Assets.pic6,
		},
		{
			name: 'CA Ankit Choudhary',
			role: 'Senior Partner',
			image:
				Assets.pic5,
		},
		{
			name: 'CA Sanjay',
			role: 'Senior Partner',
			image:
				Assets.pic4,
		},
		{
			name: 'CA Vasim Khan',
			role: 'Associate Partner',
			image:
				Assets.pic3,
		},
		{
			name: 'CS Uzma',
			role: 'Associate Partner',
			image:
				Assets.pic2
		},
		{
			name: 'Advocate Chandni Dugar',
			role: 'Associate Partner',
			image:
				Assets.pic1,
		},
	]

	return (
		<section className="bg-white">
			<div
				className="relative min-h-[320px] overflow-hidden bg-[color:var(--color-header)] text-white sm:min-h-[380px]"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-r from-[color:var(--color-header)]/95 via-[color:var(--color-header)]/80 to-transparent" />
				<div className="relative mx-auto flex h-full max-w-6xl items-center px-4 py-16">
					<div className="max-w-2xl">
						<p className="text-3xl font-semibold uppercase tracking-[0.25em] text-white/80">
							HSDG & Associates
						</p>
						<div className="mt-3 h-0.5 w-16 rounded-full bg-[color:var(--color-divider)]" />
						<h1 className="mt-5 mb-10 text-2xl font-semibold sm:text-xl text-white/80">
							Governance & Risk Framework
						</h1>
						<ul className="mt-5 space-y-2 text-sm text-white/85">
							<li className="flex items-start gap-2">
								<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/80" />
								<span>Effective Oversight</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/80" />
								<span>Ethical Conduct</span>
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/80" />
								<span>Responsible Decision-Making</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-6xl px-4 py-16">
				<div className="text-center">
					<h1 className="text-3xl font-semibold text-[color:var(--color-header)] sm:text-4xl">
						About HSDG & Associates
					</h1>
					<p className="mx-auto mt-4 max-w-3xl text-sm text-[color:var(--color-paragraph)]">
						Established in 2021, HSDG & Associates is a multidisciplinary professional firm
						structured to deliver integrated audit, regulatory, and advisory services through
						a partner-led engagement model.
					</p>
				</div>

				<div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-4 text-sm text-[color:var(--color-paragraph)]">
						<h2 className="text-xl font-semibold text-[color:var(--color-header)]">Who We Are</h2>
						<p>
							The firm brings together Chartered Accountants, Company Secretaries, Cost
							Accountants and Advocates under a single partnership framework, enabling
							seamless collaboration across financial, regulatory, corporate, and legal domains.
							This multidisciplinary structure allows the firm to address complex assignments
							with a comprehensive and coordinated approach, particularly in regulated and
							institution-driven environments.
						</p>
						<p>
							With presence across five cities and a professional team of 25+ members, HSDG &
							Associates is equipped to handle assignments requiring scale, consistency, and
							strict adherence to statutory and regulatory frameworks. The firm is oriented
							towards serving institutions, banks, government bodies, corporates, not-for-profit
							organisations, and overseas clients, with a strong emphasis on compliance,
							governance, and risk management.
						</p>
						<p>
							Engagements are driven by senior partners, supported by specialised teams, and
							executed through structured processes and internal review mechanisms. The firm
							places significant emphasis on professional ethics, independence, confidentiality,
							and quality control, aligned with applicable statutory requirements and
							professional standards.
						</p>
					</div>
					<div className="rounded-3xl border border-[color:var(--color-divider)] bg-[color:var(--color-divider)]/20 p-6">
						<h3 className="text-lg font-semibold text-[color:var(--color-header)]">
							At a Glance
						</h3>
						<div className="mt-4 grid gap-4 sm:grid-cols-2">
							<div className="rounded-2xl bg-white p-4 shadow-sm">
								<p className="text-2xl font-semibold text-[color:var(--color-header)]">2021</p>
								<p className="text-xs text-[color:var(--color-paragraph)]">Established</p>
							</div>
							<div className="rounded-2xl bg-white p-4 shadow-sm">
								<p className="text-2xl font-semibold text-[color:var(--color-header)]">25+</p>
								<p className="text-xs text-[color:var(--color-paragraph)]">Professionals</p>
							</div>
							<div className="rounded-2xl bg-white p-4 shadow-sm">
								<p className="text-2xl font-semibold text-[color:var(--color-header)]">7</p>
								<p className="text-xs text-[color:var(--color-paragraph)]">City Presence</p>
							</div>
							<div className="rounded-2xl bg-white p-4 shadow-sm">
								<p className="text-2xl font-semibold text-[color:var(--color-header)]">7+</p>
								<p className="text-xs text-[color:var(--color-paragraph)]">
									CA Partners
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white py-14">
				<div className="mx-auto max-w-6xl px-4">
					<div className="text-center">
						<p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-header)]">
							Our Principles
						</p>
						<h2 className="mt-3 text-2xl font-semibold text-[color:var(--color-header)] sm:text-3xl">
							Core Values
						</h2>
						<div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-[color:var(--color-header)]/70" />
					</div>
					<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{coreValues.map((value) => (
							<div
								key={value.title}
								className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-6 text-center shadow-sm"
							>
								<div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[color:var(--color-header)] text-white">
									{value.icon}
								</div>
								<h3 className="mt-5 text-base font-semibold text-[color:var(--color-header)]">
									{value.title}
								</h3>
								<p className="mt-3 text-sm text-[color:var(--color-paragraph)]">
									{value.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-[color:var(--color-divider)]/20 py-14">
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="text-2xl font-semibold text-[color:var(--color-header)]">
						Our Operating Model
					</h2>
					<p className="mt-4 max-w-4xl text-sm text-[color:var(--color-paragraph)]">
						HSDG & Associates follows a partner-led engagement model, under which senior
						partners retain direct responsibility for engagement planning, execution oversight,
						and final deliverables. Each assignment is structured through a multidisciplinary
						team framework, drawing upon expertise from Chartered Accountants, the Company
						Secretary, and legal professionals, as relevant to the scope and complexity of the
						engagement.
					</p>
					<div className="mt-6 grid gap-4 md:grid-cols-3">
						{[
							'Scope definition & risk assessment',
							'Structured planning, execution, documentation & reporting',
							'Multi-layer review and partner-level quality control',
						].map((item) => (
							<div
								key={item}
								className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-4 text-sm text-[color:var(--color-paragraph)]"
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-white py-14">
				<div className="mx-auto max-w-6xl px-4">
					<div className="text-center">
						<h2 className="text-2xl font-semibold text-[color:var(--color-header)]">
							Our Team
						</h2>
						<p className="mx-auto mt-3 max-w-2xl text-sm text-[color:var(--color-paragraph)]">
							A focused leadership and advisory team delivering reliable, partner-led execution.
						</p>
					</div>
					<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{teamMembers.map((member) => (
							<div key={member.name} className="text-center">
								<div className="overflow-hidden rounded-md border border-[color:var(--color-divider)] bg-white">
									<img
										src={member.image}
										alt={member.name}
										className="h-44 w-full object-contain"
										loading="lazy"
									/>
								</div>
								<p className="mt-3 text-sm font-semibold text-[color:var(--color-header)]">
									{member.name}
								</p>
								<p className="text-xs text-[color:var(--color-paragraph)]">{member.role}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-6xl px-4 py-16">
				<div className="text-center">
					<h2 className="text-2xl font-semibold text-[color:var(--color-header)]">
						Practice Verticals
					</h2>
					<p className="mx-auto mt-3 max-w-3xl text-sm text-[color:var(--color-paragraph)]">
						Our core service areas are organized into specialized practice verticals with
						focused expertise and disciplined execution.
					</p>
				</div>
				<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
					{practiceVerticals.map((item, index) => (
						<div
							key={item.title}
							className={`rounded-none border border-[color:var(--color-divider)] bg-[color:var(--color-header)] text-white shadow-sm ${index % 2 === 0
									? 'bg-[color:var(--color-header)]'
									: 'bg-[color:var(--color-header)]/85'
								}`}
						>
							<div className="flex h-full flex-col items-center justify-center px-5 py-8 text-center">
								<div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-white/30">
									{item.icon}
								</div>
								<h3 className="text-sm font-semibold uppercase tracking-wide text-white">
									{item.title}
								</h3>
								<p className="mt-2 text-xs text-white/80">{item.text}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="bg-[color:var(--color-divider)]/20 py-14">
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="text-2xl font-semibold text-[color:var(--color-header)]">
						Leadership & Professional Composition
					</h2>
					<p className="mt-4 text-sm text-[color:var(--color-paragraph)]">
						The firm is led by seven Chartered Accountant partners, supported by a Company
						Secretary and a legal professional, forming an integrated leadership structure.
						Our professional team includes qualified professionals, semi-qualified staff, and
						trainees, operating under defined supervision and review structures to maintain
						consistency and control across engagements.
					</p>
					<div className="mt-6 grid gap-4 sm:grid-cols-3">
						{[
							'Partner-led engagements with senior accountability',
							'Specialised teams across audit, tax, corporate and legal domains',
							'Layered review structure for scalability and discipline',
						].map((item) => (
							<div
								key={item}
								className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-4 text-sm text-[color:var(--color-paragraph)]"
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
