<script>
	import { faBars } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}
</script>

<div class="dropdown">
	<button class="dropdown-button" on:click={toggleDropdown}>
		<Fa icon={faBars} />
	</button>
	{#if isOpen}
		<div class="dropdown-content">
			<a href="/">Home</a>
			<br />
			<a href="/games/4winning">4 Winning</a>
		</div>
	{/if}
</div>

<style>
	/* Basic styling for the dropdown */
	.dropdown {
		position: relative;
		display: inline-block;
	}

	button {
		width: 1.5rem;
		height: 1.5rem;
		padding: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		background-color: var(--nav-color);
	}

	button :global(svg) {
		position: absolute;
		transition: opacity 250ms linear, rotate 250ms linear;
		color: var(--font-color);
	}

	.dropdown-content {
		position: absolute;
		background-color: var(--nav-color);
		min-width: 160px;
		z-index: 1;
		display: block;
		right: 0;
		left: auto;
	}
</style>
