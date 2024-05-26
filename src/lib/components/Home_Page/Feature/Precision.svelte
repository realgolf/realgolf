<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="feature">
	<h3>Precision</h3>
	<p>
		{$_('Precision_description')}
	</p>

	<img src="/home_page/Precision.png" alt={$_('Precision_picture_alt')} />
</div>

<style lang="scss">
	@import '$lib/scss/Home_page/main.scss';
</style>
