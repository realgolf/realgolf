<script lang="ts">
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { _ } from 'svelte-i18n';
	import type { PageData } from '../../../routes/[name]/$types';

	export let data: PageData;

	let user_games = data.games;
	let user_games_length = user_games?.length;
</script>

<div class="games">
	<p
		use:sanitizeHTML={[
			$_('public_games_link', {
				values: { username: data.user_username, games_length: user_games_length }
			})
		]}
	/>
</div>
