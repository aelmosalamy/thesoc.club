module.exports = {
	content: ['./src/**/*.{md,html,njk}'],
	// https://stackoverflow.com/questions/74997445/why-do-only-a-very-small-subset-of-tailwind-colours-render-in-my-app
	safelist: [
		{
			pattern: /^bg-/,
		},
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
