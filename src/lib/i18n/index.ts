// src/lib/i18n/index.ts
import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'en';

register('de', () => import('../../locales/de.json'));
register('en', () => import('../../locales/en.json'));
register('es', () => import('../../locales/es.json'));
register('fr', () => import('../../locales/fr.json'));
register('it', () => import('../../locales/it.json'));
register('pt', () => import('../../locales/pt.json'));

init({
	fallbackLocale: defaultLocale,
	initialLocale: browser ? window.navigator.language.split('-')[0] : defaultLocale
});
