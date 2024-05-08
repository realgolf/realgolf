<script lang="ts">
    export let data;

</script>
<svelte:head>
    <title>Trainings Plan - {data.id}</title>
</svelte:head>

<h1>{data.title} - {data.id}</h1>

<p class="date">{data.dateOfCreation?.toLocaleDateString()} - {data.dateOfLastEdit?.toLocaleDateString()}</p>

<style lang="scss">
    .date {
        font-size: 0.8em;
        color: #666;
    }
</style>