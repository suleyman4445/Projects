import React, { useState } from "react";

const NAV_ITEMS = [
	{ label: "Create", href: "#create" },
	{ label: "Why Powtoon", href: "#why" },
	{ label: "Solutions", href: "#solutions" },
	{ label: "EDU", href: "#edu" },
	{ label: "Enterprise", href: "#enterprise" },
	{ label: "Pricing", href: "#pricing" },
	{ label: "Log In", href: "#login" },
];

const SOLUTIONS = [
	{
		title: "HR",
		description:
			"Recruit, onboard, and retain top talent with engaging HR videos.",
	},
	{
		title: "Internal Comms",
		description:
			"Inspire genuine employee engagement and enhance productivity.",
	},
	{
		title: "Marketing",
		description:
			"Create lead-generating campaigns and marketing strategies with measurable results.",
	},
	{
		title: "Education",
		description:
			"Empower teachers and students to tell creative stories and impress the class.",
	},
];

const FEATURES = [
	{
		icon: "🎨",
		title: "Creative Freedom",
		description:
			"Access powerful tools to design stunning visuals with ease and flexibility.",
	},
	{
		icon: "⚡",
		title: "Fast & Easy",
		description:
			"Quickly create engaging videos without needing advanced skills or software.",
	},
	{
		icon: "🤝",
		title: "Collaboration",
		description:
			"Work seamlessly with your team to create consistent, impactful messaging.",
	},
	{
		icon: "📊",
		title: "Performance Tracking",
		description:
			"Measure the impact of your content with built-in analytic tools.",
	},
];

const HOW_IT_WORKS_STEPS = [
	{
		number: 1,
		title: "Choose a Template",
		description:
			"Start with professionally designed templates tailored to your needs.",
	},
	{
		number: 2,
		title: "Customize Your Content",
		description:
			"Easily add text, images, animations, and audio using our intuitive editor.",
	},
	{
		number: 3,
		title: "Share and Inspire",
		description:
			"Publish your video in formats that suit your audience and platform.",
	},
];

const PRICING_PLANS = [
	{
		title: "Basic",
		price: "$0",
		duration: "Free Forever",
		features: [
			"Access to free templates",
			"Up to 5 mins video length",
			"Standard video quality",
			"Watermarked videos",
		],
		popular: false,
		ctaLabel: "Get Started",
	},
	{
		title: "Pro",
		price: "$19",
		duration: "Monthly",
		features: [
			"All Basic features",
			"Unlimited video length",
			"Full HD downloads",
			"No watermarks",
			"Priority support",
		],
		popular: true,
		ctaLabel: "Get Pro",
	},
	{
		title: "Enterprise",
		price: "Custom",
		duration: "Tailored",
		features: [
			"Custom branding",
			"Team collaboration tools",
			"Dedicated account manager",
			"Advanced analytics",
			"Bulk licensing",
		],
		popular: false,
		ctaLabel: "Contact Us",
	},
];

const CLIENT_LOGOS = [
	{ src: "client-logo1.png", alt: "Client Logo 1" },
	{ src: "client-logo2.png", alt: "Client Logo 2" },
	{ src: "client-logo3.png", alt: "Client Logo 3" },
	{ src: "client-logo4.png", alt: "Client Logo 4" },
	{ src: "client-logo5.png", alt: "Client Logo 5" },
	{ src: "client-logo6.png", alt: "Client Logo 6" },
];

const TESTIMONIALS = [
	{
		quote: "Our subscription to Powtoon has paid for itself 100 times over.",
		author: "Ryan Deiss, CEO, Digital Marketer",
	},
	{
		quote:
			"Powtoon helped us increase engagement by 40%. The videos are easy to create and look amazing.",
		author: "Sarah Lee, Marketing Manager",
	},
	{
		quote:
			"The education features empower teachers to create interactive lessons that students love.",
		author: "Mark Chen, Principal",
	},
];

const FAQS = [
	{
		question: "What is Powtoon?",
		answer:
			"Powtoon is a visual communication platform that allows users to create animated videos and presentations.",
	},
	{
		question: "How can I get started?",
		answer:
			"Simply sign up for an account and start creating your first video using our templates.",
	},
	{
		question: "Is there a free trial available?",
		answer: "Yes, we offer a free trial for new users to explore our features.",
	},
];

// Styles as JS object
const styles = {
	body: {
		margin: 0,
		fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
		background: "#ffffff",
		color: "#003366",
		lineHeight: 1.6,
		scrollBehavior: "smooth",
	},
	link: {
		textDecoration: "none",
		color: "inherit",
		cursor: "pointer",
	},
	navbar: {
		background: "#0078d7",
		color: "#ffffff",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: "15px 40px",
		position: "sticky",
		top: 0,
		zIndex: 1000,
		boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
	},
	logo: {
		height: 40,
	},
	navList: {
		display: "flex",
		gap: 25,
		alignItems: "center",
		margin: 0,
		padding: 0,
		listStyle: "none",
	},
	navItem: {
		color: "#ffffff",
		fontWeight: 600,
		fontSize: "0.95rem",
		padding: "6px 8px",
		borderRadius: 4,
		transition: "color 0.3s ease",
	},
	signupBtn: {
		backgroundColor: "#ffffff",
		color: "#0078d7",
		padding: "8px 15px",
		borderRadius: 6,
		fontWeight: 700,
		boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
		transition: "background-color 0.3s ease",
		cursor: "pointer",
	},
	signupBtnHover: {
		backgroundColor: "#e6f3ff",
	},
	hero: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		padding: "80px 10%",
		background: "linear-gradient(120deg, #0078d7, #00aaff)",
		color: "white",
		flexWrap: "wrap",
		gap: 40,
	},
	heroText: {
		maxWidth: 550,
	},
	heroH1: {
		fontSize: "3.4rem",
		fontWeight: 800,
		marginBottom: 24,
		lineHeight: 1.15,
	},
	highlight: {
		color: "#ffff66",
	},
	heroP: {
		fontSize: "1.25rem",
		marginBottom: 35,
		fontWeight: 500,
		maxWidth: 460,
		lineHeight: 1.4,
	},
	ctaButton: {
		backgroundColor: "#ffffff",
		color: "#0078d7",
		padding: "15px 30px",
		borderRadius: 10,
		fontSize: "1.1rem",
		fontWeight: 700,
		boxShadow: "0 6px 12px rgba(0,0,0,0.18)",
		display: "inline-block",
		transition: "background-color 0.3s ease, transform 0.2s ease",
		border: "none",
		cursor: "pointer",
	},
	ctaButtonHover: {
		backgroundColor: "#e0e8ff",
		transform: "translateY(-3px)",
	},
	heroImgWrapper: {
		maxWidth: 480,
		width: "100%",
		borderRadius: 18,
		boxShadow: "0 12px 25px rgba(0,0,0,0.15)",
		animation: "float 4s ease-in-out infinite",
	},
	trusted: {
		backgroundColor: "#f0f8ff",
		padding: "55px 10%",
		textAlign: "center",
		color: "#003366",
		fontWeight: 600,
		fontSize: "1.3rem",
		letterSpacing: "0.04em",
		marginTop: 20,
	},
	sectionTitle: {
		textAlign: "center",
		marginTop: 60,
		fontSize: "2.4rem",
		color: "#003366",
		fontWeight: 700,
		marginBottom: 40,
	},
	grid: {
		display: "grid",
		gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
		gap: 32,
		marginTop: 35,
	},
	card: {
		background: "#e6f3ff",
		padding: "28px 24px",
		borderRadius: 16,
		textAlign: "center",
		boxShadow: "0 5px 12px rgba(0,0,0,0.12)",
		transition: "transform 0.3s ease, box-shadow 0.3s ease",
		cursor: "default",
	},
	cardHover: {
		transform: "translateY(-8px)",
		boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
	},
	cardH3: {
		marginBottom: 14,
		fontSize: "1.3rem",
		color: "#004a99",
		fontWeight: 700,
	},
	cardP: {
		fontSize: "1rem",
		color: "#003366",
		fontWeight: 500,
	},
	featuresDetailed: {
		backgroundColor: "#f0f8ff",
		padding: "70px 10%",
		textAlign: "center",
	},
	featuresList: {
		display: "flex",
		flexWrap: "wrap",
		gap: 40,
		justifyContent: "center",
		maxWidth: 1000,
		marginLeft: "auto",
		marginRight: "auto",
	},
	featureItem: {
		background: "#fff",
		borderRadius: 16,
		padding: "30px 25px",
		width: 280,
		boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
		textAlign: "center",
		transition: "transform 0.3s ease",
		cursor: "default",
	},
	featureItemHover: {
		transform: "translateY(-6px)",
		boxShadow: "0 14px 30px rgba(0,0,0,0.15)",
	},
	featureIcon: {
		fontSize: 42,
		color: "#0078d7",
		marginBottom: 16,
	},
	featureTitle: {
		fontWeight: 700,
		fontSize: "1.3rem",
		marginBottom: 12,
		color: "#004a99",
	},
	featureDesc: {
		fontSize: "1rem",
		color: "#003366",
		fontWeight: 500,
		lineHeight: 1.4,
	},
	pricing: {
		padding: "80px 10%",
		backgroundColor: "#ffffff",
		textAlign: "center",
	},
	pricingCards: {
		display: "flex",
		flexWrap: "wrap",
		gap: 40,
		justifyContent: "center",
		maxWidth: 1100,
		marginLeft: "auto",
		marginRight: "auto",
	},
	pricingCard: {
		background: "#e6f3ff",
		borderRadius: 18,
		padding: "36px 28px",
		maxWidth: 320,
		boxShadow: "0 6px 15px rgba(0,0,0,0.10)",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		transition: "transform 0.3s ease",
		cursor: "default",
		position: "relative",
	},
	pricingCardHover: {
		transform: "translateY(-10px)",
		boxShadow: "0 18px 35px rgba(0,0,0,0.18)",
	},
	pricingCardPopular: {
		border: "3px solid #ffd700",
		boxShadow: "0 12px 30px rgba(255, 215, 0, 0.3)",
		zIndex: 10,
		transform: "scale(1.05)",
	},
	pricingPopularLabel: {
		position: "absolute",
		top: -15,
		right: -15,
		background: "#ffd700",
		color: "#003366",
		fontWeight: 700,
		fontSize: "0.85rem",
		padding: "6px 14px",
		borderRadius: 12,
		boxShadow: "0 3px 7px rgba(0,0,0,0.1)",
	},
	pricingTitle: {
		fontSize: "1.6rem",
		color: "#0078d7",
		marginBottom: 20,
		fontWeight: 800,
	},
	pricingPrice: {
		fontSize: "2.8rem",
		color: "#003366",
		fontWeight: 900,
		marginBottom: 10,
	},
	pricingDuration: {
		fontSize: "1rem",
		color: "#0078d7",
		marginBottom: 25,
		fontWeight: 600,
	},
	pricingFeatures: {
		textAlign: "left",
		color: "#003366",
		fontWeight: 600,
		marginBottom: 30,
	},
	pricingButton: {
		backgroundColor: "#0078d7",
		color: "white",
		padding: "13px 0",
		borderRadius: 10,
		fontWeight: 700,
		fontSize: "1.1rem",
		border: "none",
		cursor: "pointer",
		width: "100%",
		boxShadow: "0 6px 14px rgba(0, 120, 215, 0.6)",
		transition: "background-color 0.3s ease",
	},
	pricingButtonHover: {
		backgroundColor: "#005fa3",
	},
	howItWorks: {
		backgroundColor: "#f0f8ff",
		padding: "70px 10%",
		textAlign: "center",
	},
	howItWorksSteps: {
		display: "flex",
		maxWidth: 900,
		marginLeft: "auto",
		marginRight: "auto",
		gap: 40,
		flexWrap: "wrap",
		justifyContent: "center",
	},
	step: {
		background: "white",
		borderRadius: 14,
		padding: "25px 20px 30px",
		width: 250,
		boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
		transition: "box-shadow 0.3s ease",
		cursor: "default",
	},
	stepHover: {
		boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
	},
	stepNumber: {
		fontSize: "2.6rem",
		fontWeight: 900,
		color: "#0078d7",
		marginBottom: 12,
	},
	stepTitle: {
		fontWeight: 700,
		fontSize: "1.25rem",
		marginBottom: 10,
		color: "#004a99",
	},
	stepDesc: {
		color: "#003366",
		fontWeight: 500,
		fontSize: "1rem",
		lineHeight: 1.4,
	},
	clients: {
		padding: "50px 10%",
		backgroundColor: "#ffffff",
		textAlign: "center",
	},
	clientsLogos: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
		gap: 40,
		alignItems: "center",
	},
	clientLogo: {
		filter: "grayscale(100%)",
		opacity: 0.6,
		maxHeight: 50,
		maxWidth: 140,
		transition: "all 0.3s ease",
		objectFit: "contain",
		cursor: "pointer",
	},
	clientLogoHover: {
		filter: "none",
		opacity: 1,
		transform: "scale(1.1)",
	},
	callToAction: {
		background: "linear-gradient(120deg, #0078d7, #00aaff)",
		padding: "60px 10%",
		marginTop: 60,
		textAlign: "center",
		borderRadius: "28px 28px 0 0",
		color: "white",
	},
	ctaTitle: {
		fontSize: "2.6rem",
		fontWeight: 800,
		marginBottom: 20,
		textShadow: "0 3px 9px rgba(0,0,0,0.2)",
	},
	ctaDesc: {
		fontSize: "1.25rem",
		maxWidth: 650,
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 30,
		fontWeight: 500,
		textShadow: "0 1px 4px rgba(0,0,0,0.15)",
	},
	newsletter: {
		backgroundColor: "#f0f8ff",
		padding: "60px 10%",
		textAlign: "center",
		borderRadius: "0 0 28px 28px",
		marginBottom: 40,
	},
	newsletterTitle: {
		marginBottom: 20,
		fontWeight: 700,
		fontSize: "2rem",
		color: "#003366",
	},
	newsletterDesc: {
		marginBottom: 30,
		fontSize: "1.1rem",
		color: "#204060",
	},
	newsletterForm: {
		display: "flex",
		justifyContent: "center",
		maxWidth: 500,
		marginLeft: "auto",
		marginRight: "auto",
		gap: 12,
		flexWrap: "wrap",
	},
	newsletterInput: {
		flex: 1,
		minWidth: 200,
		padding: "14px 18px",
		borderRadius: 8,
		border: "2px solid #0078d7",
		fontSize: "1rem",
		outlineOffset: 3,
		transition: "outline-offset 0.3s ease",
	},
	newsletterInputFocus: {
		outlineOffset: 0,
		borderColor: "#005fa3",
	},
	newsletterButton: {
		backgroundColor: "#0078d7",
		color: "white",
		border: "none",
		fontWeight: 700,
		padding: "14px 30px",
		borderRadius: 8,
		cursor: "pointer",
		fontSize: "1.1rem",
		boxShadow: "0 5px 10px rgba(0,120,215,0.7)",
		transition: "background 0.3s ease",
	},
	newsletterButtonHover: {
		backgroundColor: "#005fa3",
	},
	testimonials: {
		background: "#ffffff",
		padding: "60px 10%",
		textAlign: "center",
	},
	testimonialBlockquote: {
		fontStyle: "italic",
		margin: "30px auto 10px",
		maxWidth: 700,
		fontWeight: 500,
		position: "relative",
		color: "#003366",
		fontSize: "1.1rem",
		lineHeight: 1.5,
	},
	testimonialQuoteMark: {
		content: '"“"',
		fontSize: "4rem",
		position: "absolute",
		left: -40,
		top: -20,
		color: "#0078d7",
		opacity: 0.2,
		fontFamily: "serif",
	},
	testimonialFooter: {
		marginTop: 20,
		color: "#0078d7",
		fontWeight: 700,
		fontSize: "1rem",
	},
	faq: {
		padding: "70px 10%",
		backgroundColor: "#f0f8ff",
		maxWidth: 900,
		marginLeft: "auto",
		marginRight: "auto",
		marginBottom: 80,
	},
	faqTitle: {
		textAlign: "center",
		marginBottom: 45,
		fontWeight: 700,
		fontSize: "2rem",
		color: "#003366",
	},
	faqItem: {
		background: "#ffffff",
		borderRadius: 12,
		padding: "20px 25px",
		marginBottom: 20,
		boxShadow: "0 8px 18px rgba(0, 0, 0, 0.09)",
		cursor: "pointer",
		transition: "background-color 0.3s ease",
	},
	faqItemHover: {
		backgroundColor: "#e6f3ff",
	},
	faqQuestion: {
		marginBottom: 10,
		fontWeight: 600,
		color: "#004a99",
		fontSize: "1.15rem",
		userSelect: "none",
	},
	faqAnswer: {
		margin: 0,
		color: "#003366",
		fontWeight: 500,
		fontSize: "1rem",
	},
	footer: {
		background: "#003366",
		color: "#ffffff",
		padding: "50px 10%",
		textAlign: "center",
	},
	footerLinks: {
		display: "flex",
		justifyContent: "center",
		gap: 60,
		flexWrap: "wrap",
		marginBottom: 30,
	},
	footerLinksSection: {
		minWidth: 140,
	},
	footerHeader: {
		marginBottom: 14,
		fontWeight: 700,
		fontSize: "1.1rem",
	},
	footerLink: {
		display: "block",
		color: "#ffffff",
		marginBottom: 10,
		fontSize: "0.95rem",
		transition: "color 0.3s ease",
	},
	footerLinkHover: {
		color: "#85b4ff",
	},
	footerCopyright: {
		fontSize: "0.9rem",
		fontWeight: 500,
		marginTop: 10,
		opacity: 0.8,
	},
};

function Navbar() {
	return (
		<header style={styles.navbar}>
			<div style={{ cursor: "pointer" }}>
				<img src="powtoon-logo.png" alt="Powtoon Logo" style={{ height: 40 }} />
			</div>
			<nav aria-label="Main Navigation">
				<ul style={styles.navList}>
					{NAV_ITEMS.map(({ label, href }, i) => (
						<li key={i}>
							<a
								href={href}
								style={styles.navItem}
								onMouseOver={(e) =>
									(e.currentTarget.style.background = "rgba(255,255,255,0.15)")
								}
								onMouseOut={(e) =>
									(e.currentTarget.style.background = "transparent")
								}>
								{label}
							</a>
						</li>
					))}
					<li>
						<a
							href="#signup"
							style={styles.signupBtn}
							onMouseOver={(e) =>
								(e.currentTarget.style.background = "#e6f3ff")
							}
							onMouseOut={(e) => (e.currentTarget.style.background = "#fff")}>
							Sign Up
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

function Hero() {
	return (
		<section style={styles.hero} aria-label="Hero Section" id="create">
			<div style={styles.heroText}>
				<h1 style={styles.heroH1}>
					Make Anything <span style={styles.highlight}>Interesting</span>
				</h1>
				<p style={styles.heroP}>
					Create amazing videos and presentations that captivate, inspire, and
					ignite action.
				</p>
				<a
					href="#signup"
					style={styles.ctaButton}
					aria-label="Start Now"
					onMouseOver={(e) => {
						e.currentTarget.style.backgroundColor =
							styles.ctaButtonHover.backgroundColor;
						e.currentTarget.style.transform = styles.ctaButtonHover.transform;
					}}
					onMouseOut={(e) => {
						e.currentTarget.style.backgroundColor =
							styles.ctaButton.backgroundColor;
						e.currentTarget.style.transform = "none";
					}}>
					Start Now
				</a>
			</div>
			<div style={styles.heroImgWrapper}>
				<img
					src="hero-illustration.png"
					alt="Hero Animation"
					style={{ width: "100%", borderRadius: 18 }}
				/>
			</div>
		</section>
	);
}

function Trusted() {
	return (
		<section style={styles.trusted} aria-label="Trusted by Fortune 500">
			<h2>Used by 96% of Fortune 500 Companies</h2>
			<p>
				Break through the noise with visual communications that deliver results.
			</p>
		</section>
	);
}

function SolutionCard({ title, description }) {
	const [hover, setHover] = useState(false);

	return (
		<div
			style={{ ...styles.card, ...(hover ? styles.cardHover : {}) }}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			tabIndex={0}
			aria-label={`${title} Solutions`}>
			<h3 style={styles.cardH3}>{title}</h3>
			<p style={styles.cardP}>{description}</p>
		</div>
	);
}

function Solutions() {
	return (
		<section
			style={{ padding: "60px 10%", backgroundColor: "white" }}
			id="solutions"
			aria-label="Solutions for Teams">
			<h2 style={styles.sectionTitle}>Solutions for Every Team</h2>
			<div style={styles.grid}>
				{SOLUTIONS.map((item, i) => (
					<SolutionCard
						key={i}
						title={item.title}
						description={item.description}
					/>
				))}
			</div>
		</section>
	);
}

function FeatureItem({ icon, title, description }) {
	const [hover, setHover] = useState(false);
	return (
		<div
			style={{
				...styles.featureItem,
				...(hover ? styles.featureItemHover : {}),
			}}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			tabIndex={0}
			role="listitem">
			<div style={styles.featureIcon} aria-hidden="true">
				{icon}
			</div>
			<div style={styles.featureTitle}>{title}</div>
			<div style={styles.featureDesc}>{description}</div>
		</div>
	);
}

function Features() {
	return (
		<section
			style={styles.featuresDetailed}
			id="why"
			aria-label="Why Visual Communications">
			<h2 style={styles.sectionTitle}>Why Visual Communications?</h2>
			<div style={styles.featuresList} role="list">
				{FEATURES.map(({ icon, title, description }, i) => (
					<FeatureItem
						key={i}
						icon={icon}
						title={title}
						description={description}
					/>
				))}
			</div>
		</section>
	);
}

function HowItWorksStep({ number, title, description }) {
	const [hover, setHover] = useState(false);
	return (
		<div
			style={{ ...styles.step, ...(hover ? styles.stepHover : {}) }}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			tabIndex={0}
			aria-label={`Step ${number}: ${title}`}>
			<div style={styles.stepNumber}>{number}</div>
			<div style={styles.stepTitle}>{title}</div>
			<div style={styles.stepDesc}>{description}</div>
		</div>
	);
}

function HowItWorks() {
	return (
		<section style={styles.howItWorks} aria-label="How It Works">
			<h2 style={styles.sectionTitle}>How It Works</h2>
			<div style={styles.howItWorksSteps}>
				{HOW_IT_WORKS_STEPS.map(({ number, title, description }, i) => (
					<HowItWorksStep
						key={i}
						number={number}
						title={title}
						description={description}
					/>
				))}
			</div>
		</section>
	);
}

function PricingPlan({ title, price, duration, features, popular, ctaLabel }) {
	const [hover, setHover] = useState(false);
	return (
		<article
			style={{
				...styles.pricingCard,
				...(hover ? styles.pricingCardHover : {}),
				...(popular ? styles.pricingCardPopular : {}),
			}}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			tabIndex={0}
			aria-label={`${title} Plan`}>
			{popular && <div style={styles.pricingPopularLabel}>Most Popular</div>}
			<div style={styles.pricingTitle}>{title}</div>
			<div style={styles.pricingPrice}>{price}</div>
			<div style={styles.pricingDuration}>{duration}</div>
			<ul style={styles.pricingFeatures}>
				{features.map((feature, i) => (
					<li key={i}>{feature}</li>
				))}
			</ul>
			<button
				style={styles.pricingButton}
				aria-label={`Select ${title} Plan`}
				onMouseEnter={(e) =>
					(e.currentTarget.style.backgroundColor =
						styles.pricingButtonHover.backgroundColor)
				}
				onMouseLeave={(e) =>
					(e.currentTarget.style.backgroundColor =
						styles.pricingButton.backgroundColor)
				}>
				{ctaLabel}
			</button>
		</article>
	);
}

function Pricing() {
	return (
		<section style={styles.pricing} id="pricing" aria-label="Pricing Plans">
			<h2 style={styles.sectionTitle}>Choose Your Plan</h2>
			<div style={styles.pricingCards} role="list">
				{PRICING_PLANS.map(
					({ title, price, duration, features, popular, ctaLabel }, i) => (
						<PricingPlan
							key={i}
							title={title}
							price={price}
							duration={duration}
							features={features}
							popular={popular}
							ctaLabel={ctaLabel}
						/>
					)
				)}
			</div>
		</section>
	);
}

function Clients() {
	const [hoverIndex, setHoverIndex] = useState(null);
	return (
		<section style={styles.clients} aria-label="Trusted Clients and Partners">
			<h2 style={styles.sectionTitle}>Trusted by Leading Brands</h2>
			<div style={styles.clientsLogos} role="list" aria-live="polite">
				{CLIENT_LOGOS.map(({ src, alt }, i) => (
					<img
						key={i}
						src={src}
						alt={alt}
						role="listitem"
						style={{
							...styles.clientLogo,
							...(hoverIndex === i ? styles.clientLogoHover : {}),
						}}
						onMouseEnter={() => setHoverIndex(i)}
						onMouseLeave={() => setHoverIndex(null)}
					/>
				))}
			</div>
		</section>
	);
}

function CallToAction() {
	return (
		<section style={styles.callToAction} aria-label="Join Powtoon Now">
			<h2 style={styles.ctaTitle}>Ready to Make Your Story Stand Out?</h2>
			<p style={styles.ctaDesc}>
				Join millions who trust Powtoon to create engaging and captivating
				videos. Start your free trial today!
			</p>
			<a
				href="#signup"
				style={styles.ctaButton}
				aria-label="Start Your Free Trial"
				onMouseOver={(e) => {
					e.currentTarget.style.backgroundColor =
						styles.ctaButtonHover.backgroundColor;
					e.currentTarget.style.transform = styles.ctaButtonHover.transform;
				}}
				onMouseOut={(e) => {
					e.currentTarget.style.backgroundColor =
						styles.ctaButton.backgroundColor;
					e.currentTarget.style.transform = "none";
				}}>
				Get Started Free
			</a>
		</section>
	);
}

function Newsletter() {
	const [email, setEmail] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		if (email) {
			alert("Thank you for subscribing!");
			setEmail("");
		}
	}
	return (
		<section
			style={styles.newsletter}
			aria-label="Newsletter Subscription"
			id="signup">
			<h2 style={styles.newsletterTitle}>Stay Updated with Powtoon Insights</h2>
			<p style={styles.newsletterDesc}>
				Subscribe to our newsletter for tips, tutorials, and special offers
				delivered straight to your inbox.
			</p>
			<form
				style={styles.newsletterForm}
				aria-label="Newsletter signup form"
				onSubmit={handleSubmit}>
				<input
					type="email"
					style={styles.newsletterInput}
					placeholder="Enter your email address"
					aria-label="Email Address"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					onFocus={(e) =>
						(e.target.style.outlineOffset =
							styles.newsletterInputFocus.outlineOffset)
					}
					onBlur={(e) => (e.target.style.outlineOffset = "3px")}
				/>
				<button
					type="submit"
					style={styles.newsletterButton}
					aria-label="Subscribe to newsletter"
					onMouseOver={(e) =>
						(e.currentTarget.style.backgroundColor =
							styles.newsletterButtonHover.backgroundColor)
					}
					onMouseOut={(e) =>
						(e.currentTarget.style.backgroundColor =
							styles.newsletterButton.backgroundColor)
					}>
					Subscribe
				</button>
			</form>
		</section>
	);
}

function Testimonial({ quote, author }) {
	return (
		<blockquote
			tabIndex={0}
			style={{ ...styles.testimonialBlockquote, position: "relative" }}
			aria-label={`Testimonial: ${quote}`}>
			<span
				style={{
					position: "absolute",
					left: -40,
					top: -20,
					fontSize: "4rem",
					color: "#0078d7",
					opacity: 0.2,
					fontFamily: "serif",
					userSelect: "none",
				}}>
				“
			</span>
			{quote}
			<footer style={styles.testimonialFooter}>- {author}</footer>
		</blockquote>
	);
}

function Testimonials() {
	return (
		<section style={styles.testimonials} aria-label="Customer Testimonials">
			<h2 style={styles.sectionTitle}>Hear from Our Happy Customers</h2>
			{TESTIMONIALS.map(({ quote, author }, i) => (
				<Testimonial key={i} quote={quote} author={author} />
			))}
		</section>
	);
}

function FAQItem({ question, answer }) {
	const [expanded, setExpanded] = useState(false);
	return (
		<div
			tabIndex={0}
			style={{ ...styles.faqItem, ...(expanded ? styles.faqItemHover : {}) }}
			aria-expanded={expanded}
			role="button"
			onClick={() => setExpanded(!expanded)}
			onKeyDown={(e) => {
				if (e.key === "Enter" || e.key === " ") setExpanded(!expanded);
			}}>
			<h3 style={styles.faqQuestion}>{question}</h3>
			{expanded && <p style={styles.faqAnswer}>{answer}</p>}
		</div>
	);
}

function FAQ() {
	return (
		<section style={styles.faq} aria-label="Frequently Asked Questions">
			<h2 style={styles.faqTitle}>Frequently Asked Questions</h2>
			{FAQS.map(({ question, answer }, i) => (
				<FAQItem key={i} question={question} answer={answer} />
			))}
		</section>
	);
}

function Footer() {
	return (
		<footer style={styles.footer} aria-label="Footer">
			<div style={styles.footerLinks}>
				<div style={styles.footerLinksSection}>
					<h4 style={styles.footerHeader}>Company</h4>
					<a
						href="#"
						style={styles.footerLink}
						onMouseOver={(e) =>
							(e.currentTarget.style.color = styles.footerLinkHover.color)
						}
						onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
						About
					</a>
					<a
						href="#"
						style={styles.footerLink}
						onMouseOver={(e) =>
							(e.currentTarget.style.color = styles.footerLinkHover.color)
						}
						onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
						Careers
					</a>
					<a
						href="#"
						style={styles.footerLink}
						onMouseOver={(e) =>
							(e.currentTarget.style.color = styles.footerLinkHover.color)
						}
						onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
						Privacy Policy
					</a>
				</div>
				<div style={styles.footerLinksSection}>
					<h4 style={styles.footerHeader}>Solutions</h4>
					<a
						href="#"
						style={styles.footerLink}
						onMouseOver={(e) =>
							(e.currentTarget.style.color = styles.footerLinkHover.color)
						}
						onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
						HR
					</a>
					<a
						href="#"
						style={styles.footerLink}
						onMouseOver={(e) =>
							(e.currentTarget.style.color = styles.footerLinkHover.color)
						}
						onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
						IT
					</a>
					<a
						href="#"
						style={styles.footerLink}
						onMouseOver={(e) =>
							(e.currentTarget.style.color = styles.footerLinkHover.color)
						}
						onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
						Education
					</a>
					<a
						href="#"
						style={styles.footerLink}
						onMouseOver={(e) =>
							(e.currentTarget.style.color = styles.footerLinkHover.color)
						}
						onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
						Marketing
					</a>
				</div>
				<div style={styles.footerLinksSection}>
					<h4 style={styles.footerHeader}>Support</h4>
					<a
						href="#"
						style={styles.footerLink}
						onMouseOver={(e) =>
							(e.currentTarget.style.color = styles.footerLinkHover.color)
						}
						onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
						Knowledge Base
					</a>
					<a
						href="#"
						style={styles.footerLink}
						onMouseOver={(e) =>
							(e.currentTarget.style.color = styles.footerLinkHover.color)
						}
						onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
						Tutorials
					</a>
					<a
						href="#"
						style={styles.footerLink}
						onMouseOver={(e) =>
							(e.currentTarget.style.color = styles.footerLinkHover.color)
						}
						onMouseOut={(e) => (e.currentTarget.style.color = "#fff")}>
						Contact Us
					</a>
				</div>
			</div>
			<p style={styles.footerCopyright}>
				© 2011-2025 Powtoon.com, Inc. All rights reserved.
			</p>
		</footer>
	);
}

export default function PowtoonLandingPage() {
	return (
		<div style={styles.body}>
			<Navbar />
			<Hero />
			<Trusted />
			<Solutions />
			<Features />
			<HowItWorks />
			<Pricing />
			<Clients />
			<CallToAction />
			<Newsletter />
			<Testimonials />
			<FAQ />
			<Footer />
		</div>
	);
}
