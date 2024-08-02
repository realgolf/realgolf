<script lang="ts">
	export let data;
</script>

<ol class="no-bullets">
	{#each data.rules as rule}
		<li>
			<a href="/rules/{rule.id}">{rule.title}</a>
		</li>
	{/each}
</ol>
