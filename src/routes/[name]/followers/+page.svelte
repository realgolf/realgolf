<script lang="ts">
	import { _, isLoading } from 'svelte-i18n';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{($_('users_followers'), { values: { user_name: data.username } })}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<h1>{($_('users_followers'), { values: { user_name: data.username } })}</h1>

	<div class="followers">
		{#if data.followerDetails.length > 0}
			{#each data.followerDetails as follower}
				<div class="follower">
					<a href={`/${follower.username}`}>{follower.name} <small>{follower.username}</small></a>
					{#if follower.bio}
						<br />
						<small class="bio">{follower.bio}</small>
					{/if}
				</div>
			{/each}
		{:else}
			<p>{($_('user_has_no_followers'), { values: { user_name: data.username } })}</p>
		{/if}
	</div>
{/if}

<style lang="scss">
	.followers {
		max-width: 90vw !important;
		margin: 0 auto;
		margin-left: 2vw;

		.follower {
			border-bottom: 2px solid var(--border-color);

			a {
				text-decoration: none !important;
				margin-left: 3rem;

				small {
					color: grey !important;
					font-size: 0.9rem;
				}
			}

			.bio {
				color: grey !important;
				margin-left: 3rem;
				margin-bottom: 1rem;
			}
		}
	}
</style>
