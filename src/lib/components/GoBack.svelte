<script lang="ts">
	// Importing necessary dependencies
	import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
	import Fa from 'svelte-fa';

	// Function to go back in history
	function go_back() {
		history.back();
	}
</script>

<!--Button to go back with a click event listener-->
<button on:click={go_back} aria-label="Go back"><Fa icon={faLeftLong} /></button>

<style>
	/* Styling for the button */
	button {
		text-decoration: underline;
		text-underline-offset: 0.1rem;
		font-size: var(--small-font);
		border: none !important;
		background-color: transparent !important;
		box-shadow: none !important;
		margin-top: 1rem;
	}
</style>
