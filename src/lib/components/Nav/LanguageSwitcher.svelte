<script lang="ts">
	import { isoLangs } from '$lib/i18n/ISO_639-1';
	import { capitalizeFirstLetter } from '$lib/shared/utils/capitalizeFirstLetter';
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';
	import Cookies from 'js-cookie';
	import Fa from 'svelte-fa';
	import { locale, locales } from 'svelte-i18n';

	let isLanguageSwitcherOpen = false;

	function toggleLanguageSelector() {
		console.log('toggleLanguageSelector');
		isLanguageSwitcherOpen = !isLanguageSwitcherOpen;
		console.log('toggle success');
	}

	function closeLanguageSelector() {
		isLanguageSwitcherOpen = false;
	}

	// Function to handle changing the locale
	function changeLocale(newLocale: string) {
		locale.set(newLocale);
		Cookies.set('selectedLanguage', newLocale, { expires: 365 });
	}

	// Function to get the Native name of the language
	function getNativeLang(lang: string) {
		return capitalizeFirstLetter(
			(isoLangs as Record<string, { name: string; nativeName: string }>)[lang].nativeName
				.split(',')[0]
				.trim()
				.replace(/\s/g, '')
		);
	}
</script>

<div class="language-switcher">
	<button class="language-switcher-button" on:click|stopPropagation={toggleLanguageSelector}>
		<Fa icon={faGlobe} />
	</button>
</div>
{#if isLanguageSwitcherOpen}
	<div class="blurry-background" />
	<div class="language-switcher-content">
		<button class="close-button" on:click={closeLanguageSelector}>x</button>
		{#each $locales as lang}
			<button
				id={`language-button-${lang}`}
				class:current={lang === $locale}
				class="language-selector-btn"
				on:click={() => changeLocale(lang)}>{getNativeLang(lang)}</button
			>
		{/each}
	</div>
{/if}

<style lang="scss">
	@import '$lib/scss/Nav/LanguageSwitcher.scss';
</style>
