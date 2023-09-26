<script>
	let isOpen = false;

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function closeDropdown() {
		isOpen = false;
	}
</script>

<div class="dropdown">
	<button class="dropdown-button" on:click={toggleDropdown}>Dropdown</button>
	{#if isOpen}
		<div class="dropdown-content">
			<a href="/games/4winning">4 Winning</a>
		</div>
	{/if}
</div>

<style>
	/* Basic styling for the dropdown */
	.dropdown {
		position: relative;
		display: inline-block;
	}

	.dropdown-button {
		background-color: redorange;
		color: #fff;
		padding: 10px 20px;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}

	.dropdown-content {
		position: absolute;
		background-color: #f9f9f9;
		min-width: 160px;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
		display: block;
	}

	.dropdown-content a {
		color: #333;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
	}

	.dropdown-content a:hover {
		background-color: #ddd;
	}
</style>
