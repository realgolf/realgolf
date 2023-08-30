<script lang="ts">
	import {
		faHouse,
		faKey,
		faLock,
		faPlaneUp,
		faQuestionCircle,
		faSection,
		faServer,
		faTh,
		faUser,
		type IconDefinition
	} from '@fortawesome/free-solid-svg-icons';
	import ThemeToggler from './ThemeToggler.svelte';
	import { page } from '$app/stores';
	import Fa from 'svelte-fa';

	type link = {
		path: string;
		icon: IconDefinition;
		target: string;
		name: string;
	};

	const links: link[] = [
		{
			path: '/',
			icon: faQuestionCircle,
			target: '_self',
			name: 'FAQ'
		},
		{
			path: 'https://golf.moinjulian.com',
			icon: faServer,
			target: '_blank',
			name: 'Server'
		},
		{
			path: 'https://golf-offline.moinjulian.com',
			icon: faPlaneUp,
			target: '_blank',
			name: 'Offline'
		}
	];
</script>

<nav>
	<ul>
		{#each links as { path, icon, target, name }}
			<li>
				<a href={path} {target}>
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

		@media (max-width: 38rem) {
			padding-block: 0.5rem;
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
		}
	}
</style>
