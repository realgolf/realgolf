<script lang="ts">
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
</div>
{#if isOpen}
	<div class="dropdown-content">
		<div class="home row border-bottom">
			<a href="/">Home</a>
		</div>
		<div class="games row border-bottom">
			<h3>Games</h3>
			<a href="/games/4winning">4 Winning</a>
			<a href="/games/exact">Exact</a>
			<a href="/games/precision">Precision</a>
		</div>
		<div class="all row border-bottom">
			<a href="/imprint">Imprint</a>
		</div>
		<div class="external-links row">
			<a href="https://golf.moinjulian.com">Server</a>
			<a href="https://golf-faq.moinjulian.com">FAQ</a>
		</div>
	</div>
{/if}

<style lang="scss">
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
		z-index: 1;
		display: block;
		right: 0;
		left: auto;

		background-color: var(--nav-color);

		min-width: 200px;
		text-align: left;

		border: 2px solid var(--border-color);
		border-right: none;
		border-radius: 3px;

		.border-bottom {
			border-bottom: 2px solid var(--border-color);
		}

		.row {
			display: flex;
			flex-direction: column;
			padding-right: 30px;
			padding-left: 15px;
		}

		.home,
		.games,
		.all,
		.external-links {
			padding-top: 10px;
			padding-bottom: 10px;
		}
	}
</style>
