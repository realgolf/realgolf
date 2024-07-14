<script lang="ts">
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import { afterUpdate, onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	export let comments: any[];
	export let username: string;

	function modify_mentions() {
		if (comments) {
			comments.forEach((comment) => {
				if (comment.content) {
					comment.content = comment?.content.replace(/@(\w+)/g, '<b><a href="/$1">@$1</a></b>');
					comment.replies.forEach((reply) => {
						if (reply.content) {
							reply.content = reply?.content.replace(/@(\w+)/g, '<b><a href="/$1">@$1</a></b>');
						}
					});
				}
			});
		}

		console.log(comments);
		return comments;
	}

	onMount(() => {
		modify_mentions();

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

<div class="comments">
	<h2>{$_('comments')}</h2>
	{#if comments.length === 0}
		<p>{$_('no_comments')}</p>
	{:else}
		{#each comments as comment}
			{#if comment.content && comment.replies && comment.username && comment.date && comment.id && comment.replies.length >= 0}
				<div class="comment">
					<small>
						<span
							class="user"
							use:sanitizeHTML={[
								$_('user_commented_at', {
									values: {
										username: comment.username,
										date: new Date(comment.date?.toString()).toLocaleDateString()
									}
								})
							]}
						>
						</span>
						<span class="menu">
							{#if comment.username === username}
								<form action="?/edit_comment" method="POST">
									<input
										type="text"
										name="id"
										id="id"
										style="display: none;"
										bind:value={comment.id}
									/>
									<button>{$_('edit')}</button>
								</form>
							{/if}
							<form action="?/delete_comment" method="POST">
								<input
									type="text"
									name="id"
									id="id"
									style="display: none;"
									bind:value={comment.id}
								/>
								<button>{$_('delete')}</button>
							</form>
						</span>
					</small>
					<p use:sanitizeHTML={[comment.content]}></p>
					<div class="replies">
						{#each comment.replies as reply}
							{#if reply && reply.content && reply.username && reply.date}
								<div class="comment">
									<small>
										<span
											class="user"
											use:sanitizeHTML={[
												$_('user_replied_on', {
													values: {
														username: reply.username,
														date: new Date(reply.date?.toString()).toLocaleDateString()
													}
												})
											]}
										>
										</span>
										<span class="menu">
											{#if reply.username === username}
												<form action="?/edit_reply" method="POST">
													<input
														type="text"
														name="id"
														id="id"
														style="display: none;"
														bind:value={reply.id}
													/>
													<button>{$_('edit')}</button>
												</form>
											{/if}
											<form action="?/delete_reply" method="POST">
												<input
													type="text"
													name="reply_id"
													id="reply_id"
													style="display: none;"
													bind:value={reply.id}
												/>
												<input
													type="text"
													id="comment_id"
													name="comment_id"
													style="display: none;"
													bind:value={comment.id}
												/>
												<button>{$_('delete')}</button>
											</form>
										</span>
									</small>
									<p use:sanitizeHTML={[reply.content]}></p>
								</div>
							{/if}
						{/each}
						<form action="?/add_reply" method="POST" class="add_new">
							<input
								type="text"
								name="comment_id"
								id="comment_id"
								style="display: none;"
								bind:value={comment.id}
							/>
							<textarea name="reply" placeholder={$_('reply')} id="new_reply"></textarea>
							<button type="submit">{$_('submit')}</button>
						</form>
					</div>
				</div>
			{:else}
				<p class="error">500 - Internal Error</p>
			{/if}
		{/each}
	{/if}
	<form action="?/add_comment" method="POST" autocomplete="off" autocorrect="on" class="add_new">
		<textarea name="comment" placeholder={$_('comment')} id="new_comment"></textarea>
		<button type="submit">{$_('submit')}</button>
	</form>
</div>

<style lang="scss">
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

		.add_new {
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
