<script lang="ts">
	import { browser } from '$app/environment';
	import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
	import { onDestroy, onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { fade } from 'svelte/transition';

	let show = false;
	let timer: number | null = null;
	let scroll_position = 0;

	onMount(() => {
		scroll_position = window.scrollY;
		if (browser) window.addEventListener('scroll', handle_scroll);
	});

	onDestroy(() => {
		if (browser) window.removeEventListener('scroll', handle_scroll);
	});

	function handle_scroll() {
		if (!browser) return;
		if (window.scrollY === 0) {
			show = false;
		} else if (window.scrollY < scroll_position) {
			show = true;
			scroll_position = window.scrollY;
			if (timer) clearTimeout(timer);
			timer = window.setTimeout(() => (show = false), 3000);
		}
		scroll_position = window.scrollY;
	}

	function scroll_to_top() {
		if (browser) window.scrollTo(0, 0);
	}
</script>

{#if show}
	<button on:click={scroll_to_top} aria-label="scroll up" transition:fade={{ duration: 150 }}>
		<Fa icon={faAngleUp} />
	</button>
{/if}

<style>
	button {
		position: fixed;
		bottom: 0.75rem;
		right: 0.75rem;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		display: grid;
		place-content: center;
		background: var(--accent-color);
		color: var(--inverted-font-color);
		box-shadow: none !important;
	}
</style>
