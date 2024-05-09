<script lang="ts">
    import { _, isLoading } from 'svelte-i18n';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<svelte:head>
    <title>{data.username} - {$_('trainings_planner')}</title>
</svelte:head>

{#if $isLoading}
    <p>Loading...</p>
{:else}
    <h1>{data.username}`s {$_('trainings_planner')}</h1>

    {#if data.planners}
        {#each data.planners as planner}
            <a href="/{data.username}/planner/{planner.id}" class="planner">
                <div>
                    <p>{planner.title} - {planner.id}</p>
                    <p>{planner.description}</p>
                </div>
            </a>
        {/each}
    {/if}
{/if}

<style lang="scss">
	@import "$lib/scss/Planner/Planners.scss";
</style>
