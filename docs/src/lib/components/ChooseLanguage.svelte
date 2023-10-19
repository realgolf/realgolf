<script lang="ts">
	import { faGlobe } from '@fortawesome/free-solid-svg-icons';
	import { onDestroy, onMount } from 'svelte';
	import Fa from 'svelte-fa';

	let isOpen = false;
	let blurBackground = false;

	function toggleDropdown() {
		isOpen = !isOpen;
		blurBackground = isOpen;
	}

	function closeDropdown() {
		isOpen = false;
	}

	onMount(() => {
		function closeDropdownOnClick(event: any) {
			if (
				event.target instanceof Element &&
				!event.target.closest('.dropdown') &&
				!event.target.closest('.dropdown-button') &&
				!event.target.closest('.dropdown-content')
			) {
				closeDropdown();
			}
		}

		window.addEventListener('click', closeDropdownOnClick);
		window.addEventListener('touchend', closeDropdownOnClick);

		onDestroy(() => {
			window.removeEventListener('click', closeDropdown);
		});
	});

	let languages = [
		{
			language: 'English',
			href: '/en'
		},
		{
			language: 'Deustch',
			href: '/de'
		}
	];
</script>

<div class="dropdown">
	<button class="dropdown-button" on:click|stopPropagation={toggleDropdown}>
		<Fa icon={faGlobe} />
	</button>
</div>
{#if isOpen}
	<div class="blurry-background" />
	<div class="dropdown-content">
		<button class="close-button" on:click={closeDropdown}>x</button>
		<div class="home row">
			{#each languages as { language, href }}
				<a {href}>{language}</a>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.dropdown {
		position: relative;
		display: inline-block;
	}

	button {
		width: max-content;
		height: max-content;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		position: relative;
		background-color: var(--nav-color);
	}

	button :global(svg) {
		transition: opacity 250ms linear, rotate 250ms linear;
		color: var(--font-color);
	}

	.blurry-background {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(110, 118, 129, 0.4);
		opacity: 50%;
		z-index: 998;
		display: block;
	}

	.dropdown-content {
		position: absolute;
		z-index: 999;
		display: block;
		right: 0;
		top: 0;
		left: auto;

		font-size: var(--small-font);

		box-shadow: 0px 0px 10px var(--shadow-color);

		background-color: var(--nav-color);

		height: auto;
		overflow-y: auto;

		max-width: auto;
		text-align: left;

		border: 2px solid var(--border-color);
		border-right: none;
		border-top-left-radius: 0.75rem;
		border-bottom-left-radius: 0.75rem;

		a {
			text-decoration: none;
			padding: 0.5rem;
		}

		.close-button {
			margin: 10px;

			&:hover {
				background-color: var(--label-color);
			}
		}

		.row {
			display: flex;
			flex-direction: column;
			padding-right: 30px;
			padding-left: 15px;
		}

		.home {
			padding-top: 10px;
			padding-bottom: 10px;
		}
	}
</style>
