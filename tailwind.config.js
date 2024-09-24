/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,jsx}",
		"./components/**/*.{js,jsx}",
		"./app/**/*.{js,jsx}",
		"./src/**/*.{js,jsx}",
	],
	prefix: "",
	theme: {
		extend: {
			colors: {
				"primary-orange": {
					50: "#fff3f1",
					100: "#ffe3df",
					200: "#ffccc5",
					300: "#ffa99d",
					400: "#ff7764",
					500: "#ff472e",
					600: "#ed2f15",
					700: "#c8230d",
					800: "#a5210f",
					900: "#882214",
					950: "#4b0c04",
				},
				"primary-blue": {
					50: "#eef8ff",
					100: "#d9efff",
					200: "#bce4ff",
					300: "#8ed4ff",
					400: "#59baff",
					500: "#3da0ff",
					600: "#1b7bf5",
					700: "#1465e1",
					800: "#1751b6",
					900: "#19468f",
					950: "#142c57",
				},
			},
		},
	},

	plugins: [require("tailwindcss-animate")],
};
