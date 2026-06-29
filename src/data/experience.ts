import type { ImageMetadata } from "astro";
import amdIcon from "../assets/logos/amd-icon.png";
import scotiabankIcon from "../assets/logos/scotiabank-icon.png";

export type Experience = {
	title: string;
	company: string;
	date: string;
	summary: string;
	technologies: string;
	logo: ImageMetadata;
	companyLink: string;
};

export const current: Experience = {
	title: "Software Development Engineer 2",
	company: "AMD",
	date: "June 2026 - Present",
	summary:
		"Design and implement validation and automation solutions that improve GPU driver quality, strengthen regression coverage, and increase release confidence across new platforms and OS releases.",
	technologies: "Automation, Validation Infrastructure, GPU Drivers",
	logo: amdIcon,
	companyLink: "https://www.amd.com",
};

export const previous: Experience[] = [
	{
		title: "Global Wholesale Operations Research Student",
		company: "Scotiabank",
		date: "Sep 2025 - Apr 2026",
		summary:
			"Developed an AI-driven reconciliation agent to detect, escalate, and assist in resolving cash breaks within Scotiabank's financial systems, reducing manual investigation time and improving accuracy of discrepancy detection.",
		technologies: "JavaScript, Node.js, Machine Learning, Backend Development",
		logo: scotiabankIcon,
		companyLink: "https://www.scotiabank.com/ca/en/",
	},
	{
		title: "GPU Graphics Driver Validation & Debug Engineer Intern",
		company: "AMD",
		date: "May 2024 - Aug 2025",
		summary:
			"Built system testing, automation, and telemetry for GPU driver validation, and worked on regression testing and issue resolution to improve efficiency across new OS releases.",
		technologies: "Systems Testing, Regression Testing, Debugging, C++",
		logo: amdIcon,
		companyLink: "https://www.amd.com",
	},
];
