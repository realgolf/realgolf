<script lang="ts">
	import { removeLastSymbol } from '$lib/shared/utils/removeLastSymbol';
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { _, isLoading } from 'svelte-i18n';

	export let data;
	let measurement_unit = data.measurement_unit as string;
	let measurement_unit_without_last_symbol = removeLastSymbol(measurement_unit);
</script>

<svelte:head>
	<title>RealGolf.Games - {$_('rules')}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{$_('rules')}</h1>

	<main>
		<p class="success">{$_('all_rules')}</p>
		<p class="success">{$_('read_carefully')}</p>

		<details>
			<summary>{$_('toc')}</summary>
			<ul class="no-bullets">
				<li><a href="#4-winning">4 Winning</a></li>
				<li><a href="#exact">Exact</a></li>
				<li><a href="#precision">Precision</a></li>
			</ul>
		</details>

		<h2 id="4-winning">4 Winning</h2>

		<p>
			{$_('4_winning_rules')}
		</p>

		<h2 id="exact">Exact</h2>

		<ul class="no-bullets">
			<li>{$_('exact_rule_1')}</li>
			<li>{$_('exact_rule_2')}</li>
			<li>{$_('exact_rule_3')}</li>
			<li>{$_('exact_rule_4')}</li>
		</ul>

		<h2 id="precision">Precision</h2>

		<p
			use:sanitizeHTML={[
				$_('precision_rules', {
					values: {
						measurement_unit: measurement_unit,
						measurement_unit_without_last_symbol: measurement_unit_without_last_symbol
					}
				})
			]}
		/>
	</main>
{/if}
