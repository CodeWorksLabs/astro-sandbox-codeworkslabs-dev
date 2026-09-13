// @ts-check
import analytics from '@codeworkslabs/astro-analytics';
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://astro.sandbox.codeworkslabs.dev',
	integrations: [
		analytics({
			providers: [
				{ name: 'fathom', siteId: 'KVFDQBQP' },
				{
					name: 'plausible',
					scriptSrc: 'https://plausible.io/js/pa-vcAvq0UHdTBO2WXWvp6qy.js',
				},
				{
					name: 'google-analytics',
					measurementId: 'G-BZRRREHHE5',
					consent: {
						mode: 'immediate',
						initial: {
							analyticsStorage: 'granted',
							adStorage: 'denied',
							adUserData: 'denied',
							adPersonalization: 'denied',
						},
					},
				},
				{
					name: 'matomo',
					trackerUrl: 'https://matomo.codeworkslabs.net/matomo.php',
					scriptSrc: 'https://matomo.codeworkslabs.net/matomo.js',
					siteId: '2',
					eventCategory: 'Astro sandbox',
				},
				{
					name: 'umami',
					websiteId: 'd6954239-fe70-488b-b7b9-97a411f11029',
					scriptSrc: 'https://umami.codeworkslabs.net/script.js',
				},
			],
			events: true,
		}),
	],
});
