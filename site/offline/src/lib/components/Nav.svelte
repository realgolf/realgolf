<script lang="ts">
	import { faHouse, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import ThemeToggler from './ThemeToggler.svelte';
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';

	type link = {
		path: string;
		name: string;
		icon: IconDefinition;
	};

	let links = [
		{
			path: '/',
			name: 'Home',
			icon: faHouse
		}
	];
</script>

<nav>
	<ul>
		{#each links as { path, name, icon }}
			<li class:current={$page.url.pathname === path || $page.url.pathname.startsWith(path + '/')}>
				<a href={path}>
					<Fa {icon} />
					<span class="name">{name}</span>
				</a>
			</li>
		{/each}
		<li>
			<ThemeToggler />
		</li>
	</ul>
</nav>

<style lang="scss">
	nav {
		padding-block: 1.25rem;
		background-color: var(--nav-color);
	}
	ul {
		list-style-type: none;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 1.25rem;
		a {
			position: relative;
			text-decoration: none;

			&::before {
				content: '';
				position: absolute;
				left: 0;
				bottom: -2px;
				width: 0;
				height: 2px;
				background-color: var(--highlight-color);
				transition: width 0.3s ease;
			}

			&:hover::before {
				width: 100%;
			}
		}

		li.current::after {
			content: '';
			position: absolute;
			left: 0;
			right: 0;
			bottom: -0.15rem;
			height: 0.1rem;
			border-radius: 100vw;
		}

		li:not(.current) .name {
			/* visually hidden */
			position: absolute;
			left: -100000px;
		}

		@media (max-width: 38rem) {
			nav {
				padding-block: 0.5rem;
			}

			li:not(.current) .name {
				/* visually hidden */
				position: absolute;
				left: -100000px;
			}
		}
	}
</style>
