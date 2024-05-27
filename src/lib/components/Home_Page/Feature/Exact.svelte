<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="feature">
	<h3>Exact</h3>
	<p>
		{$_('Exact_description')}
	</p>

	<img src="/home_page/Exact.png" alt={$_("Exact_picture_alt")} />
</div>

<style lang="scss">
	@import '$lib/scss/Home_page/main.scss';
</style>
