export interface GuitarProduct {
	id: number;
	name: string;
	type: string;
	price: string;
	image: string;
	label: string;
	description: string;
}

export const products: GuitarProduct[] = [
	{
		id: 1,
		name: 'Les Paul Standard',
		type: 'Electric guitar',
		price: '$2,499',
		image: 'assets/gibsonlespaul.jpg',
		label: 'Best seller',
		description: 'A powerful classic with a warm, full tone built for expressive leads and lasting stage presence.',
	},
	{
		id: 2,
		name: 'Player Stratocaster',
		type: 'Electric guitar',
		price: '$899',
		image: 'assets/fenderstrato.jpg',
		label: 'New arrival',
		description: 'A versatile, comfortable instrument with the clear, sparkling response that made the Stratocaster famous.',
	},
	{
		id: 3,
		name: 'SG Standard',
		type: 'Electric guitar',
		price: '$1,799',
		image: 'assets/gibsonsg.jpg',
		label: 'Limited stock',
		description: 'A lightweight rocker with fast access to the upper frets and a bold sound that cuts through any mix.',
	},
];
