<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>Golf Games - Games</title>
</svelte:head>

{#if data.games && data.games.length > 0}
  <h1>Games:</h1>
  {#each data.games as game}
    <div>
      <h2>{game.teams}</h2>
      <p>Data: {game.data}</p>
    </div>
  {/each}
{:else}
  <p class="error">No games found.</p>
{/if}
