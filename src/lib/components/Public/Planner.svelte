<script lang="ts">
	import type { PageData } from '../../../routes/[name]/$types';

	export let data: PageData;
</script>

<div class="planner">
	<p>
		You can view all of {data.user_username} Planners
		<a href="/{data.user_username}/planner">here</a>. You can star them to let {data.user_username} know
		that you like his Planner and thinking aboout using it for your routine as well.
	</p>
</div>
