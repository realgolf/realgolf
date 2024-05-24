<script lang="ts">
	import { get_timestamp } from '$lib/shared/utils/getTimestamp';
	import type { message } from '$lib/types/server';
	export let messages: message[] = [];
	export let messages_element: HTMLElement;
	export let role_color: string;
	export let role_title: string;
</script>

<section bind:this={messages_element}>
	<ol>
		{#each messages as message}
			<li class:bot={message.bot}>
				{#if !message.bot}
					<span class="author" style="color: {role_color};">[{role_title}] {message.author} <small id="grey">- {get_timestamp()}</small>:</span>
				{/if}
				<span>[BOT] ChatBot: {message.text}</span>
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
