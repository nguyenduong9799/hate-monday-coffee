/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		fontSize: {
			sm: ['12px', '16px'],
			base: ['14px', '20px'],
			lg: ['16px', '24px'],
			xl: ['20px', '38px'],
			display: ['40px', '52px'],
			'display-l': ['54px', '72px'],
			h3: ['20px', '26px'],
			h1: ['32px', '42px']
		},
		extend: {
			fontFamily: {
				sans: ['Space Grotesk', 'sans-serif'],
				mono: ['Space Mono', 'mono']
			}
		},
		fontWeight: {
			thin: '100',
			extralight: '200',
			light: '300',
			normal: '400',
			medium: '500',
			semibold: '600',
			bold: '700',
			extrabold: '800',
			black: '900'
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
					background: '#FAFBF8',
					'base-100': '#ffffff',
					'base-200': '#F4F4F3',
					'neutral-000': '#ffffff',
					'neutral-50': '#F3F3F3',
					'neutral-100': '#151614',
					'neutral-600': '#737372'
				}
			}
			// Add more custom themes if needed
		]
	},
	plugins: [require('daisyui')]
};
