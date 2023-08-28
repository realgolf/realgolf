<script lang="ts">
	export let title: string;
	export let link: string;
</script>

<div>
	<a href={link}>
		<h3>{title}</h3>
	</a>
</div>

<style lang="scss">
	div {
		background-color: var(--nav-color);
		width: max-content;
		padding: 50px 50px;
		border-radius: 5px;
		border: 1px solid var(--border-color);
		margin: 15px 30px;
		&:hover {
			cursor: pointer;
			box-shadow: 10px 10px 20px var(--border-color);
		}
		h3 {
			text-align: center;
		}
	}
</style>
