<script lang="ts">
	export let toc: any;
</script>

{#if toc.length > 0}
	<details class="toc" open>
		<summary>In this article</summary>
		<ol>
			{#each toc as h2Item}
				<li>
					<a tabindex="-1" href="#{h2Item.id}">{h2Item.text}</a>
					{#if h2Item.subheadings && h2Item.subheadings.length > 0}
						<ol>
							{#each h2Item.subheadings as h3Item}
								<li>
									<a tabindex="-1" href="#{h3Item.id}">{h3Item.text}</a>
								</li>
							{/each}
						</ol>
					{/if}
				</li>
			{/each}
		</ol>
	</details>
{/if}

<style lang="scss">
	.toc {
		margin-top: 1rem;
		margin-bottom: 1rem;

		ol {
			margin-top: 0.5rem;
		}
	}
</style>
