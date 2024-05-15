<script lang="ts">
	import type { PageData } from '../../../routes/[name]/$types';
	import Achievements from './Achievements.svelte';
	import Badges from './Badges.svelte';
	import Bio from './Bio.svelte';
	import Games from './Games.svelte';
	import Names from './Names.svelte';
	import OnePlayerPrecisionHighscore from './One_Player_Precision_Highscore.svelte';
	import Planner from './Planner.svelte';
	import Registration from './Registration.svelte';

	export let data: PageData;
</script>

<div class="info">
	<Names {data} />
	<Bio {data} />
	{#if data.badges && data.badges.length > 0}
		<Badges {data} />
	{/if}
	{#if data.achievements && data.achievements.length > 0}
		<Achievements {data} />
	{/if}

	{#if data.user_registration_date}
		<Registration {data} />
	{/if}

	<Games {data} />
	<Planner {data} />

	<OnePlayerPrecisionHighscore {data} />
</div>
