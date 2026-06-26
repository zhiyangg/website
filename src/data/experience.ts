import type { ImageMetadata } from "astro";
import amdIcon from "../assets/logos/amd-icon.png";
import scotiabankIcon from "../assets/logos/scotiabank-icon.png";

export type Experience = {
	title: string;
	company: string;
	date: string;
	summary: string;
	logo: ImageMetadata;
	companyLink: string;
};

export const current: Experience = {
	title: "Software Development Engineer 2",
	company: "AMD",
	date: "June 2026 - Present",
	summary:
		"Design and implementation of validation and automation solutions that improve GPU driver quality, strengthen regression coverage, and increase release confidence across new platform and OS releases.",
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
		logo: scotiabankIcon,
		companyLink: "https://www.scotiabank.com/ca/en/",
	},
	{
		title: "GPU Graphics Driver Validation & Debug Engineer Intern",
		company: "AMD",
		date: "May 2024 - Aug 2025",
		summary:
			"Responsible for system testing, automation, and telemetry in GPU driver validation. Worked on regression testing, issue resolution, and automation to enhance efficiency in new OS releases.",
		logo: amdIcon,
		companyLink: "https://www.amd.com",
	},
];
