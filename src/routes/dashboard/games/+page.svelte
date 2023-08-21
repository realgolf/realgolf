<script lang="ts">
  export let data;

  let copyStatus: string | null = null;

  function copyData(gameData: string) {
    navigator.clipboard
      .writeText(gameData)
      .then(() => {
        copyStatus = "success";
        console.log("Data copied to clipboard");
      })
      .catch((error) => {
        copyStatus = "error";
        console.error("Error copying data:", error);
      });
    setTimeout(() => {
      copyStatus = "";
    }, 2000);
  }
</script>

<svelte:head>
  <title>Golf Games - Games</title>
</svelte:head>

{#if data.games && data.games.length > 0}
  <h1>Games:</h1>
  {#if copyStatus === "success"}
    <p class="success">Copy successful</p>
  {:else if copyStatus === "error"}
    <p class="error">Copy failed</p>
  {/if}
  {#each data.games as game}
    <div>
      <h2>{game.teams}</h2>
      <p class="success">Data:</p>
      <p>{game.data}</p>
      <button on:click={() => copyData(game.data)}>Copy Data</button>
    </div>
  {/each}
{:else}
  <p class="error">No games found.</p>
{/if}

<style lang="scss">
  div {
    background-color: var(--nav-color);
    width: 90vw;
    padding: 50px 50px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    margin-right: auto;
    margin-bottom: 20px;
    p {
      margin-top: 10px;
    }
  }
</style>
