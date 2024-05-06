<script lang="ts">
	import type { PageData } from '../../../routes/[name]/$types';

	export let data: PageData;
</script>

<div class="status" class:busy={data.user_status?.busy == true}>
	<p>{data.user_status?.emoji} {data.user_status?.text}</p>
</div>

<style lang="scss">
	@import '$lib/scss/Public/Status.scss';
</style>
