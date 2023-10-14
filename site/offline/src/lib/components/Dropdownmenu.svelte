<script lang="ts">
	import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
	import {
		faBars,
		faBullseye,
		faChessBoard,
		faCrosshairs,
		faGavel,
		faGolfBall,
		faHouse,
		faServer,
		faShip
	} from '@fortawesome/free-solid-svg-icons';
	import { onDestroy, onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import ThemeToggler from './ThemeToggler.svelte';

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
		window.addEventListener('click', (event) => {
			if (
				event.target instanceof Element &&
				!event.target.closest('.dropdown') &&
				!event.target.closest('.dropdown-button') &&
				!event.target.closest('.dropdown-content')
			) {
				closeDropdown();
			}
		});

		onDestroy(() => {
			window.removeEventListener('click', closeDropdown);
		});
	});
</script>

<div class="dropdown">
	<button class="dropdown-button" on:click|stopPropagation={toggleDropdown}>
		<Fa icon={faBars} />
		<span class="description">Menu</span>
	</button>
</div>
{#if isOpen}
	<div class="blurry-background" />
	<div class="dropdown-content">
		<button class="close-button" on:click={closeDropdown}>x</button>
		<div class="home row border-bottom">
			<a href="/"><span><Fa icon={faHouse} /></span>Home</a>
		</div>
		<div class="games row border-bottom">
			<a href="/games"><span><Fa icon={faGolfBall} /></span>Games</a>
			<div class="sublinks row">
				<a href="/games/4winning"><span><Fa icon={faChessBoard} /></span>4 Winning</a>
				<a href="/games/exact"><span><Fa icon={faBullseye} /></span>Exact</a>
				<a href="/games/precision"><span><Fa icon={faCrosshairs} /></span>Precision</a>
				<a href="/games/Sinking-Ships"><span><Fa icon={faShip} /></span>Sinking Ships</a>
			</div>
		</div>
		<div class="external-links row border-bottom">
			<a href="https://golf.moinjulian.com"><span><Fa icon={faServer} /></span>Server</a>
			<a href="https://golf.moinjulian.com/faq"><span><Fa icon={faQuestionCircle} /></span>FAQ</a>
		</div>
		<div class="copyright row border-bottom">
			<p><a href="/imprint"><Fa icon={faGavel} /> Imprint</a></p>
			<p>© 2023 Julian Hammer</p>
			<p>All rights reserved</p>
			<p>
				<a class="underline" target="_blank" href="https://github.com/MoinJulian/Golf">GitHub</a>
			</p>
		</div>
		<div class="row theme-toggler">
			<p><ThemeToggler /></p>
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

		span .description {
			font-size: var(--tiny-font);
		}
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
		// backdrop-filter: blur(2px);
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

		height: 100%;
		overflow-y: auto;

		max-width: 250px;
		text-align: left;

		border: 2px solid var(--border-color);
		border-right: none;
		border-top-left-radius: 0.75rem;
		border-bottom-left-radius: 0.75rem;

		a {
			text-decoration: none;

			span {
				margin-right: 0.5rem;
			}
		}

		.underline {
			text-decoration: underline !important;
		}

		.sublinks {
			margin-right: 0.5rem;
		}

		.close-button {
			margin: 10px;

			&:hover {
				background-color: var(--label-color);
			}
		}

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
		.external-links,
		.copyright,
		.theme-toggler {
			padding-top: 10px;
			padding-bottom: 10px;
		}
	}
</style>
