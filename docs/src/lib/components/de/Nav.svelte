<script lang="ts">
	import { faHouse, type IconDefinition } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	// import Dropdownmenu from './Dropdownmenu.svelte';

	type link = {
		path: string;
		icon: IconDefinition;
	};

	let links: link[] = [
		{
			path: '/de',
			icon: faHouse
		}
	];
</script>

<nav>
	<ul>
		{#each links as { path, icon }}
			<li>
				<a href={path}>
					<Fa {icon} />
				</a>
			</li>
		{/each}
		<!-- <li>
			<Dropdownmenu />
		</li> -->
	</ul>
</nav>

<style lang="scss">
	nav {
		padding-block: 1.25rem;
		background-color: var(--background-color);
		border-bottom: 1px solid var(--border-color);

		@media (max-width: 38rem) {
			padding-block: 0.5rem;
		}

		ul {
			list-style-type: none;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			gap: 1.25rem;
			margin-right: 20px;
			margin-left: 20px;
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
