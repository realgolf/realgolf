<script lang="ts">
	import { get_timestamp } from '$lib/shared/utils/getTimestamp';
	import sanitizeHTML from '$lib/shared/utils/sanitizeHTML';
	import type { message } from '$lib/types/server';
	export let messages: message[] = [];
	export let messages_element: HTMLElement;
	export let username: string;

	function displayAuthorAndTarget(message: message) {
		const author = message.author === username ? 'You' : message.author;
		const target = message.target_name === username ? 'You' : message.target_name;
		const whisperText = author === 'You' ? 'whisper' : 'whispers';

		return `${author} ${whisperText} to ${target}`;
	}
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
							><span class="private">[Private]</span> <small id="grey">{get_timestamp()}</small>: {displayAuthorAndTarget(message)}:</span
						> <span>{message.text}</span>
					{/if}
				{:else}
					<span class="author">Chat Bot</span>: <span use:sanitizeHTML={[message.text]} />
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

	.private {
		color: #ff0000;
	}

	small#grey {
		color: grey;
	}
</style>
