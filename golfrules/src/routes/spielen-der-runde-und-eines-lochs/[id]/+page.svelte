<script lang="ts">
	import Toc from '$lib/components/TOC.svelte';
	import '$lib/scss/rules.scss';

	export let data;

	$: toc = data.toc;
	$: html_code = data.html_code;
	$: title = data.attributes.title;
</script>

<svelte:head>
	<title>Offizielles Golf Regelwerk | {title}</title>
</svelte:head>

<h1>
	{title}
</h1>

<Toc {toc}></Toc>

<article>
	{@html html_code}
</article>
