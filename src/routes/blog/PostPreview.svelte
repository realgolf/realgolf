<script lang="ts">
	import PreviewCard from './PreviewCard.svelte';
	import type { posts } from './types';

	export let post: posts;

	$: draft = post.id.startsWith('_draft'); // Check if the post is a draft
</script>

<li>
	<PreviewCard href="/blog/{post.id}">
		<h2 class:draft>
			{post.title}
		</h2>
		<div class="date">
			{new Date(post.published).toLocaleDateString()}
		</div>
		<p>
			{post.description}
		</p>
		<div class="more_blog">More...</div>
	</PreviewCard>
</li>

<style lang="scss">
	.date {
		color: #999;
		font-size: var(--small-font);
		margin-bottom: 0.5rem;
	}

	.draft {
		opacity: 0.5;
		&::before {
			content: '[Draft] ';
		}
	}
</style>
