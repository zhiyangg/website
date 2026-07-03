import type { ImageMetadata } from "astro";
import amdIcon from "../assets/logos/amd-icon.png";
import scotiabankIcon from "../assets/logos/scotiabank-icon.png";

export type Experience = {
	title: string;
	company: string;
	date: string;
	summary: string;
	technologies: string[];
	logo: ImageMetadata;
	companyLink: string;
};

export const current: Experience = {
	title: "Software Development Engineer 2",
	company: "AMD",
	date: "June 2026 - Present",
	summary:
		"Builds and maintains test automation for AMD GPU driver validation, expanding coverage across new hardware platforms.",
	technologies: ["C++", "Python", "PowerShell"],
	logo: amdIcon,
	companyLink: "https://www.amd.com",
};

export const previous: Experience[] = [
	{
		title: "Global Wholesale Operations Research Student",
		company: "Scotiabank",
		date: "Sep 2025 - Apr 2026",
		summary:
			"Built a cash break triage platform using Kafka for real-time ingestion and Gemini AI to classify discrepancies and generate recommended actions. Analysts review and act on structured outputs rather than investigate from scratch.",
		technologies: ["Kafka", "Node.js", "Gemini AI", "MongoDB", "React", "Docker"],
		logo: scotiabankIcon,
		companyLink: "https://www.scotiabank.com/ca/en/",
	},
	{
		title: "GPU Graphics Driver Validation & Debug Engineer Intern",
		company: "AMD",
		date: "May 2024 - Aug 2025",
		summary:
			"Validated AMD GPU drivers against pre-release Windows builds and triaged incoming driver bugs by bisecting commit history to isolate regression points. Routed confirmed issues to downstream driver teams with structured reproduction packages.",
		technologies: ["C++", "Python", "Regression Testing", "PowerShell"],
		logo: amdIcon,
		companyLink: "https://www.amd.com",
	},
];
