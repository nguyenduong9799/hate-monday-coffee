/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Space Grotesk', 'sans-serif']
			}
		}
	},
	daisyui: {
		themes: [
			{
				light: {
					primary: '#9AB676',
					secondary: '#f6d860',
					accent: '#37cdbe',
					warning: '#FCDC2A',
					neutral: '#151614',
					error: '#F2613F',
					success: '#90D26D',
					info: '#5AB2FF',
					background: '#FFFFFF',
					'base-100': '#ffffff',
					'neutral-100': '#151614'
				}
			}
			// Add more custom themes if needed
		]
	},
	plugins: [require('daisyui')]
};
