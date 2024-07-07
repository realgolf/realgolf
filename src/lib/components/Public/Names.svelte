<script lang="ts">
	import { _ } from 'svelte-i18n';
	import type { PageData } from '../../../routes/[name]/$types';

	export let data: PageData;
	let pronoun: string;

	if (data.pronoun) {
		pronoun = data.pronoun;
	}
</script>

<div class="vcard-names">
	<span class="vcard-nickname"
		><span style="color: {data.user_role_data?.color};">
			[{data.user_role_data?.title}]
		</span>
		{data.user_username} -
		<span class:verified={data.verified} class:not_verified={!data.verified}>
			{data.verified ? $_('verified') : $_('not_verified')}
		</span></span
	>
	<br />
	<span class="vcard-fullname"
		>{data.user_name}
		{#if pronoun !== undefined && pronoun !== 'dont'}
			·
			{#if pronoun == 'custom' && data.custom_pronoun}
				{data.custom_pronoun}
			{:else}
				{pronoun}
			{/if}
		{/if}</span
	>
</div>

<style lang="scss">
	.vcard-names {
		line-height: 1;

		.vcard-fullname {
			line-height: 24px;
			color: grey !important;
		}

		.vcard-nickname {
			font-size: 2rem;
			font-weight: 400;
			line-height: 1.25;

			.verified {
				color: green;
			}

			.not_verified {
				color: red;
			}
		}
	}
</style>
