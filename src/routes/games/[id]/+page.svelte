<script lang="ts">
	import FourWinningTable from '$lib/components/Archive/FourWinning_table.svelte';
	import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
	import { afterUpdate, onMount } from 'svelte';
	import Fa from 'svelte-fa';
	import { _, isLoading } from 'svelte-i18n';

	export let data;

	function go_back() {
		location.href = '/games';
	}

	onMount(() => {
		const textarea = document.getElementById('new_comment');

		textarea?.addEventListener('input', function () {
			this.style.height = 'auto'; // Reset height to auto to calculate new height
			this.style.height = this.scrollHeight + 'px'; // Set height to scrollHeight
		});
	});

	afterUpdate(() => {
		const textarea = document.getElementById('new_comment');

		textarea?.addEventListener('input', function () {
			this.style.height = 'auto'; // Reset height to auto to calculate new height
			this.style.height = this.scrollHeight + 'px'; // Set height to scrollHeight
		});
	});
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
					<small>
						<span class="user">
							<b>{comment.username}</b> commented on {new Date(
								comment.date?.toString()
							).toLocaleDateString()}
						</span>
						<span class="menu">
							<form action="?/edit_comment" method="POST">
								<button>{$_('edit')}</button>
							</form>
							<form action="?/delete_comment" method="POST">
								<button>{$_('delete')}</button>
							</form>
						</span>
					</small>
					<p>{comment.content}</p>
				</div>
			{/each}
		{/if}
		<form
			action="?/add_comment"
			method="POST"
			autocomplete="off"
			autocorrect="on"
			id="add_new_comment_form"
		>
			<textarea name="comment" placeholder={$_('comment')} id="new_comment"></textarea>
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

			small {
				color: #666;
				display: flex;
				flex-direction: row;
				justify-content: space-between;

				.menu {
					display: flex;
					flex-direction: row;

					button {
						background-color: transparent;
						border: none;
						color: var(--primary-color);
						cursor: pointer;
						margin-left: 10px;
						outline: none;
					}
				}
			}
		}

		#add_new_comment_form {
			border-top: 2px solid var(--border-color);
			display: flex;
			flex-direction: column;
			margin-top: 20px;

			textarea {
				margin-top: 10px;
				margin-bottom: 10px;
				min-height: 3rem;
				width: 100%;
				min-width: 100%;
				max-width: 100%;
				padding: 10px;
				overflow: hidden; /* Hides scrollbars */
				box-sizing: border-box; /* Ensures padding is included in width/height */
			}
		}
	}
</style>
