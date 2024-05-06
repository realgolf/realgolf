<script lang="ts">
	import { faUsers } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _ } from 'svelte-i18n';
	import type { PageData } from '../../../../routes/[name]/$types';

	export let data: PageData;
</script>

{#if data.followers && data.following}
	<p class="followers">
		<span><Fa icon={faUsers} /></span>
		<a href="/{data.param_name}/followers">{data.followers.count} {$_("followers")}</a> ·
		<a href="/{data.param_name}/following">{data.following.count} {$_("following")}</a>
	</p>
{/if}

<style lang="scss">
	a {
		text-decoration: none !important;
	}
</style>
