import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ pages: 'build', assets: 'build', fallback: null, precompress: false }),
		// paths: { base: dev ? '' : '/kittest' },
		appDir: 'internal'
	}
};

export default config;