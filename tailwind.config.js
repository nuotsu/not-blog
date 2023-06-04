/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,svelte}'],
	theme: {
		extend: {
			fontFamily: {
				sans: `'TASA Orbital', san-serif`,
				serif: `'Instrument', serif`,
			},
			screens: {
				'xs': { min: '480px' },
				'<xs': { max: '479px' },
				'<sm': { max: '639px' },
				'<md': { max: '767px' },
				'<lg': { max: '1023px' },
				'<xl': { max: '1279px' },
			},
		},
	},
	plugins: [],
}
