module.exports = {
	/*
	** Headers of the page
	*/
	router: {
		linkActiveClass: 'nav__link--active'
	},
	mode: 'spa',
	head: {
		title: 'Portfolio Cyd Stumpel',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Portfolio Cyd Stumpel 2018' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Hind:400,500,600|PT+Mono'}
		]

	},
	/*
	** Global CSS
	*/
	css: [{
		src: '~assets/scss/app.scss',
		lang: 'scss'
	}],
	/*
	** Customize the progress bar color
	*/
	loading: { color: '#000' },
	/*
	** Build configuration
	*/
	plugins: [
		{
			src: '~plugins/svgicon.js',
			ssr: 'false'
		},
		{
			src: '~plugins/vue-translate-on-scroll',
			ssr: false
		},
		{
			src: '~plugins/slides',
			ssr: true
		}
	],
	build: {
		postcss: {
			plugins: {
				'postcss-cssnext': {
					browsers: ['last 2 versions', 'ie >= 9'],
					features: {
						customProperties: false
					}
				},
			}
		},
		/*
		** Run ESLint on save
		*/
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				});
			}
		}
	}
};
