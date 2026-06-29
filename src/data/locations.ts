export type OfficeLocation = {
	name: string;
	role: string;
	lat: number;
	lng: number;
};

export const locations: OfficeLocation[] = [
	{
		name: "AMD — 160 McNabb St, Markham",
		role: "Software Development Engineer 2",
		lat: 43.8349051,
		lng: -79.324215,
	},
	{
		name: "AMD — 1 Commerce Valley Dr E, Markham",
		role: "GPU Driver Validation & Debug Engineer Intern",
		lat: 43.8388816,
		lng: -79.3796933,
	},
	{
		name: "Scotiabank — 44 King St W, Toronto",
		role: "Global Wholesale Operations Research Student",
		lat: 43.6491113,
		lng: -79.3799877,
	},
];
