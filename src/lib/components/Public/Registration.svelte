<script lang="ts">
	import type { PageData } from '../../../routes/[name]/$types';

	export let data: PageData;

	import { _ } from 'svelte-i18n';
</script>

{#if data.user_registration_date}
	<div class="registration_date">
		<p>
			{$_('registration_date', {
				values: {
					date: data.user_registration_date.toLocaleDateString(),
					username: data.user_username
				}
			})}
		</p>
	</div>
{/if}
