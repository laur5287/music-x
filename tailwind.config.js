// tailwind.config.js
const { nextui } = require("@nextui-org/react");
// const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{ts,tsx,js}',
		'./app/**/*.{ts,tsx,js}',
		'./node_modules/@nextui-org/theme/dist/components/(button).js',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {

			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			keyframes: {
				"accordion-down": {
					from: { height: 0 },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: 0 },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},

	darkMode: "class",
	plugins: [nextui({
		layout: {
			disabledOpacity: "0.3", // opacity-[0.3]
			radius: {
				small: "2px", // rounded-small
				medium: "4px", // rounded-medium
				large: "6px", // rounded-large
			},
			borderWidth: {
				small: "1px", // border-small
				medium: "1px", // border-medium
				large: "2px", // border-large
			},
		},
		themes: {
			light: {
				colors: {
					background: "#FFFFFF", // or DEFAULT
					foreground: "#11181C", // or 50 to 900 DEFAULT
					primary: {
						//... 50 to 900
						foreground: "#FFFFFF",
						DEFAULT: "#006FEE",
					},
					// ... rest of the colors
				},
			},
			dark: {
				colors: {
					background: "#000000", // or DEFAULT
					foreground: "#ECEDEE", // or 50 to 900 DEFAULT
					primary: {
						//... 50 to 900
						foreground: "#FFFFFF",
						DEFAULT: "#006FEE",
					},
				},
				// ... rest of the colors
			},
			mytheme: {
				// custom theme
				extend: "dark",
				colors: {
					primary: {
						DEFAULT: "#BEF264",
						foreground: "#000000",
					},
					focus: "#BEF264",
				},
			},
		},
	}), require("tailwindcss-animate")],
};