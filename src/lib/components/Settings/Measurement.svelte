<script lang="ts">
	import { capitalizeFirstLetter } from "$lib/shared/utils/capitalizeFirstLetter";
	import { _ } from "svelte-i18n";

    export let data;
</script>

<div class="measurement">
    <h2>{$_('measurement_unit')}</h2>
    <p class="underline">
        {$_('current_measurement_unit')}: {capitalizeFirstLetter(data.measurement_unit)}
    </p>
    <form action="?/measurement" method="POST" class="measurement-form">
        <label for="measurement-unit">{$_('select_measurement_unit')}:</label>
        <select id="measurement-unit" name="measurement-unit" bind:value={data.measurement_unit}>
            <option value="yards">Yards</option>
            <option value="meters">Meters</option>
        </select>
        <br />
        <button aria-label="update Measurement Unit">{$_('update')}</button>
    </form>
</div>