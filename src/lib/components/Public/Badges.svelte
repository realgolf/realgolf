<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { PageData } from '../../../routes/[name]/$types';

	export let data: PageData;

	let activeBadgeIndex: number | null;

	function handleBadgeClick(index: number) {
		activeBadgeIndex = index === activeBadgeIndex ? null : index;
	}
</script>

{#if data.badges && data.badges.length > 0}
	<div class="highlights">
		<h3>{$_('highlights')}</h3>
		<div class="badges">
			{#each data.badges as badge, index}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<span
					style="border: 1px solid {badge.color}; width: max-content; border-radius: 2em; padding: 0 7px; color: {badge.color}; margin: 3px 5px; font-size: var(--tiny-font);"
					on:click={() => handleBadgeClick(index)}
				>
					{badge.title.toUpperCase()}
				</span>
			{/each}
		</div>
	</div>
{/if}

<style lang="scss">
	.highlights {
		margin-top: 20px;
		.badges {
			margin-top: 10px;
			display: flex;
			flex-direction: row;
		}
	}
</style>
