<script lang="ts">
  import { enhance } from "$app/forms";
  import GoBack from "$lib/components/GoBack.svelte";
  import { stringify } from "uuid";
  import type { ActionData } from "./$types.js";

  export let data;
  export let form: ActionData;

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

  let showMessage = true;

  setTimeout(() => {
    showMessage = false;
  }, 20000);
</script>

<svelte:head>
  <title>Golf Games - Games</title>
</svelte:head>

<GoBack />

<h1>Games</h1>

<form action="?/delete_all" method="POST" use:enhance autocomplete="off">
  <button>Delete All</button>
</form>

{#if showMessage == true && form?.message}
  <p class="success">{form?.message}</p>
{/if}

{#if showMessage == true && form?.error}
  <p class="error">{form?.error}</p>
{/if}

{#if data.games && data.games.length > 0}
  {#if copyStatus === "success"}
    <p class="success">Copy successful</p>
  {:else if copyStatus === "error"}
    <p class="error">Copy failed</p>
  {/if}
  {#each data.games as game}
    <div>
      <form action="?/rename" method="POST" use:enhance>
        <input
          type="text"
          name="name"
          id="name"
          class="headline"
          value={game.name}
        />
        <input class="hidden" type="text" name="id" value={game.id} />
        <button>Update Name</button>
      </form>
      <p>{game.data}</p>
      <p class="error">Please only paste the data in {game.teams}!</p>
      <button on:click={() => copyData(game.data)}>Copy Data</button>
      <form action="?/delete_game" method="POST" autocomplete="off" use:enhance>
        <input class="hidden" type="text" name="id" value={game.id} />
        <button>Delete Game</button>
      </form>
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

    .headline {
      margin-block: 0.5rem;
      line-height: 1.2;
      color: var(--h2-color);
    }

    .hidden {
      display: none;
    }
  }
</style>
