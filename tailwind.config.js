/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Space Grotesk", ...tailwind_theme.fontFamily.sans],
				mono: ['Space Grotesk', ...tailwind_theme.fontFamily.mono],

			  },
		}
	},
	daisyui: {
		themes: [
			{
				light: {
					primary: '#9AB676',
					secondary: '#f6d860',
					accent: '#37cdbe',
					neutral: '#D0D0D0',
					warning: '#FCDC2A',
					error: '#F2613F',
					success: '#90D26D',
					info: '#5AB2FF',
					background: '#FAFBF8',
					'base-100': '#ffffff'
				}
			}
			// Add more custom themes if needed
		]
	},
	plugins: [require("@tailwindcss/typography"), require('daisyui')]
};
