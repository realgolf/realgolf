<script lang="ts">
	export let href: string;
</script>

<a {href}><slot /></a>

<style lang="scss">
	a {
		text-decoration: none;
		display: block;
		padding-block: 1.25rem;
		border-bottom: 1px solid var(--border-color);

		&:global(.more_blog) {
			font-size: var(--small-font);
			text-decoration: underline;
		}

		&:hover {
			color: var(--font-color) !important;
		}
	}
</style>
