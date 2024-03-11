/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				'blue-velt': {
					'50': '#f3f7fc',
					'100': '#e7eff7',
					'200': '#c9dbee',
					'300': '#9abfdf',
					'400': '#649ccc',
					'500': '#4080b7',
					'600': '#2f669a',
					'700': '#27517d',
					'800': '#244668',
					'900': '#223c58',
					'950': '#0d1621',
				},


			},
			animation: {
				
				'infinite-scroll': 'infinite-scroll 20s linear infinite',
			  },
			  keyframes: {
				'infinite-scroll': {
				  from: { 
					transform: 'translateX(0)' 
				},
				  to: { transform: 'translateX(calc(-200px*4))' },
				}
			  },                  
		


		},
	},
	plugins: [],
}
