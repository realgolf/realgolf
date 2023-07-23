<script lang="ts">
	import Fa from 'svelte-fa';
	import { faLeftLong } from '@fortawesome/free-solid-svg-icons';

	function go_back() {
		history.back();
	}
</script>

<button on:click={go_back} aria-label="Go back"><Fa icon={faLeftLong} /></button>

<style>
	button {
		text-decoration: underline;
		text-underline-offset: 0.1rem;
		font-size: var(--small-font);
		color: var(--secondary-font-color);
	}
</style>
