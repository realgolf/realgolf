<script>
	import PostPreview from './PostPreview.svelte';

	export let data;
	const posts = data.blogs;
</script>

<svelte:head>
	<title>RealGolf.Games Blog - Updates and insides</title>
</svelte:head>

<main>
	<h1>RealGolf.Games Blog</h1>

	<p>
		Here you can find Blog Posts about new features of RealGolf Games or feature we are currently
		developing, as well as server or database outages so you are always up to date.
	</p>

	<ol class="no-bullets">
		{#each posts as post (post.id)}
			<PostPreview {post} />
		{/each}
	</ol>
</main>

<style>
	main {
		margin-left: 1rem;
	}

	ol {
		margin-top: 1rem;
	}
</style>
