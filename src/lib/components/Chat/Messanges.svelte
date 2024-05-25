<script lang="ts">
	import { get_timestamp } from '$lib/shared/utils/getTimestamp';
	import type { message } from '$lib/types/server';
	export let messages: message[] = [];
	export let messages_element: HTMLElement;
</script>

<section bind:this={messages_element}>
	<ol>
		{#each messages as message}
			<li class:bot={message.bot}>
				{#if !message.bot}
					{#if message.message_type !== 'private_message'}
						<span class="author">
							{message.author} <small id="grey">- {get_timestamp()}</small>:
						</span> <span>{message.text}</span>
					{:else if message.message_type === 'private_message'}
						<span class="author"
							>Private <small class="grey">{get_timestamp()}</small>: {message.author} whispers:</span
						> <span>{message.text}</span>
					{/if}
				{:else}
					<span class="author">Chat Bot</span>: <span>{message.text}</span>
				{/if}
			</li>
		{/each}
	</ol>
</section>

<style>
	section {
		padding: 0.5rem;
		overflow-y: scroll;
		scroll-behavior: smooth;
	}

	ol {
		list-style-type: none;
	}

	li {
		margin-bottom: 0.5rem;
	}

	.author {
		color: var(--dark-font-color);
	}

	.bot {
		color: #52d869;
	}

	small#grey {
		color: grey;
	}
</style>
