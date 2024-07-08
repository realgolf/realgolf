<script lang="ts">
	import FourWinningTable from '$lib/components/Archive/FourWinning_table.svelte';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';

	export let data;

	function go_back() {
		location.href = '/games';
	}
</script>

<svelte:head>
	<title>{$_('game')} - {data?.game.id}</title>
</svelte:head>

{#if $isLoading}
	<p>Loading...</p>
{:else}
	<button class="back" on:click={go_back}><Fa icon={faArrowLeft}></Fa></button>

	<h1>
		{#if data.game}
			{$_('public_game', {
				values: {
					game_name: data.game.name,
					game_date: new Date(data?.game.date).toLocaleDateString()
				}
			})}
		{:else}
			404 - {$_('game_not_found')}
		{/if}
	</h1>

	{#if data?.game.owner}
		<h2>{$_('owner')}</h2>
		<p>{data.game.owner}</p>
	{/if}

	{#if data?.game.type}
		<h2>{$_('type')}</h2>
		<p>{data.game.type}</p>
	{/if}

	{#if data.game}
		<p class="data">{data.game.data}</p>

		{#if data?.game?.teams.includes('4winning_')}
			<FourWinningTable measurement_units="yards" data={data.game.data} />
		{/if}
	{/if}

	<div class="comments">
		<h2>{$_('comments')}</h2>
		{#if data?.game?.comments.length === 0}
			<p>{$_('no_comments')}</p>
		{:else}
			{#each data?.game.comments as comment}
				<div class="comment">
					<p>{comment.content}</p>
					<p>{comment.date}</p>
				</div>
			{/each}
		{/if}
		<form method="POST" autocomplete="off" autocorrect="on" id="add_new_comment_form">
			<textarea name="comment" placeholder={$_('comment')}></textarea>
			<br />
			<button type="submit">{$_('submit')}</button>
		</form>
	</div>
{/if}

<style lang="scss">
	.back {
		background-color: transparent;
		border: none !important;
		outline: none !important;
	}

	.comments {
		width: 100%;

		.comment {
			border: 1px solid var(--border-color);
			margin: 10px 0;
			padding: 10px;
		}

		#add_new_comment_form {
			border-top: 2px solid var(--border-color);
			display: flex;
			flex-direction: column;
			margin-top: 20px;

			textarea {
				margin-top: 10px;
				margin-bottom: 10px;
				height: 3rem;
				padding-left: 5px;
			}
		}
	}
</style>
