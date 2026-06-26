export type OfficeLocation = {
	name: string;
	role: string;
	lat: number;
	lng: number;
};

// TODO: replace with real addresses/coordinates once provided.
// Placeholder coordinates are approximate (Markham + downtown Toronto) just to seed the map.
export const locations: OfficeLocation[] = [
	{
		name: "AMD — Building 1",
		role: "Software Development Engineer 2",
		lat: 43.8385,
		lng: -79.3267,
	},
	{
		name: "AMD — Building 2",
		role: "GPU Driver Validation & Debug Engineer Intern",
		lat: 43.836,
		lng: -79.331,
	},
	{
		name: "Scotiabank — Downtown Toronto",
		role: "Global Wholesale Operations Research Student",
		lat: 43.6481,
		lng: -79.3817,
	},
];
