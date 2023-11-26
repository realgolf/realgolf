<script lang="ts">
	import { navigating } from '$app/stores';
</script>

{#if $navigating}
	<div />
{/if}

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		height: 0.5rem;
		background-color: var(--accent-color);
		z-index: 10;
		animation: grow 12s 200ms ease-out forwards;
	}

	@keyframes grow {
		0% {
			width: 0%;
		}
		50% {
			width: 90%;
		}
		100% {
			width: 95%;
		}
	}
</style>
