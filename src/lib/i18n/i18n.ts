import { browser } from '$app/environment';
import { locale as currentLocale, init, register } from 'svelte-i18n';

const defaultLocale = 'fr';

register('en', () => import('./en.json'));
register('fr', () => import('./fr.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language : defaultLocale
});

export { currentLocale }; // Exporting locale to allow components to react to changes
