<script lang="ts">
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { _ } from 'svelte-i18n';
	import type { PageData } from '../../../routes/[name]/$types';

	export let data: PageData;
</script>

<div class="planner">
	<p
		use:sanitizeHTML={[
			$_('public_description_of_planner', { values: { username: data.user_username } })
		]}
	/>
</div>
