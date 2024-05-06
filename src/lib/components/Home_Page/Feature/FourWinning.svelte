<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="feature">
	<h3>4 Winning</h3>
	<p>
		{$_('4Winning_description')}
	</p>

	<img src="/home_page/4Winning.png" alt={$_("4Winning_picture_alt")} />
</div>

<style lang="scss">
	@import '$lib/scss/Home_page/feature.scss';
</style>
