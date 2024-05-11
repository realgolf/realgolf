<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '$lib/components/Nav/Nav.svelte';
	import ScrollUp from '$lib/components/ScrollUp.svelte';
	import '$lib/scss/app.scss';
	import Cookies from 'js-cookie';
	import { onMount } from 'svelte';
	import { locale } from 'svelte-i18n';

	import '$lib/i18n';
	import type { User } from '$lib/server/user/types';

	export let data;

	const all_users: User[] = data.all_users as User[];

	onMount(() => {
		const selectedLanguage = Cookies.get('selectedLanguage');

		if (selectedLanguage) {
			// Set the language when the component mounts
			locale.set(selectedLanguage);
		}

		const body = document.querySelector('body') as HTMLBodyElement;

		let theme = data.theme as string;
		if (theme === undefined) {
			theme = 'system';
		}
		localStorage.setItem('theme', theme);

		let rounded_corners = data.rounded_corners as boolean;
		if (rounded_corners === undefined) {
			rounded_corners = true;
		}
		localStorage.setItem('rounded_corners', JSON.stringify(rounded_corners));

		if (rounded_corners === undefined) {
			body.setAttribute('data-rounded-corners', 'true');
		} else {
			body.setAttribute('data-rounded-corners', JSON.stringify(rounded_corners));
		}

		let animation = data.animation as boolean;
		if (animation === undefined) {
			animation = true;
		}
		localStorage.setItem('animation', JSON.stringify(animation));

		if (animation === undefined) {
			body.setAttribute('data-animation', 'true');
		} else {
			body.setAttribute('data-animation', JSON.stringify(animation));
		}
	});
</script>

<svelte:head>
	<link rel="icon" href="/logo.PNG" />
</svelte:head>

<ScrollUp />

<Nav auth={data.auth} username={data.username} {all_users} />

<main>
	<slot />
</main>

<Footer />

<style lang="scss">
	main {
		max-width: 40rem;
		/* margin-inline: auto; */
		padding-inline: 1rem;

		@media screen and (max-width: 767px) {
			margin-bottom: 20px;
		}
	}
</style>
