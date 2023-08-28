<script lang="ts">
  import { enhance } from "$app/forms";
  import GoBack from "$lib/components/GoBack.svelte";
  import { stringify } from "uuid";

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
  <title>Golf Games - Spiele</title>
</svelte:head>

<GoBack />

<h1>Spiele</h1>

{#if data.games && data.games.length > 0}
  {#if copyStatus === "success"}
    <p class="success">Kopieren erfolgreich</p>
  {:else if copyStatus === "error"}
    <p class="error">Kopieren fehlgeschlagen</p>
  {/if}
  {#each data.games as game}
    <div>
      <h2>{game.teams}</h2>
      <p>{game.data}</p>
      <p class="error">Bitte füge Sie diese Daten nur in {game.teams} ein!</p>
      <button on:click={() => copyData(game.data)}>Daten kopieren</button>
    </div>
  {/each}
{:else}
  <p class="error">Keine Spiele gefunden.</p>
{/if}

<style lang="scss">
  div {
    background-color: var(--nav-color);
    width: 90vw;
    padding: 50px 50px;
    border-radius: 5px;
    border: 3px solid var(--border-color);
    margin-right: auto;
    margin-bottom: 20px;
    button {
      margin: 10px 0px;
    }
    p {
      border: 3px solid var(--border-color);
      max-width: max-content;
      overflow-wrap: break-word; /* Erzwingt Wortumbrüche */
    }
  }
</style>
