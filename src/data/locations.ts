export type OfficeLocation = {
	name: string;
	role: string;
	lat: number;
	lng: number;
	current?: boolean;
};

export const locations: OfficeLocation[] = [
	{
		name: "AMD — Markham",
		role: "Software Development Engineer 2",
		lat: 43.8349051,
		lng: -79.324215,
		current: true,
	},
	{
		name: "AMD — Markham",
		role: "GPU Driver Validation & Debug Engineer Intern",
		lat: 43.8388816,
		lng: -79.3796933,
	},
	{
		name: "Scotiabank — Toronto",
		role: "Global Wholesale Operations Research Student",
		lat: 43.6491113,
		lng: -79.3799877,
	},
];
