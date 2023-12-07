<script lang="ts">
  import { afterUpdate, onMount } from "svelte";
  import type { ActionData } from "./$types.js";
  import { teams } from "./teams";
  export let data;
  export let form: ActionData;

  let selectedTeam = "";
  let searchTerm = "";
  let filteredGames: string | any[] = [];

  onMount(() => {
    filteredGames = data.games;
  });

  // Funktion zum Filtern von Spielen basierend auf Suchbegriff und ausgewähltem Team
  function applyFilters(searchTerm: string) {
    if (searchTerm !== "") {
      filteredGames = data.games.filter(
        (game: { name: string | any[]; date: string | any[] }) => {
          return (
            game.name.includes(searchTerm) ||
            new Date(game.date as string)
              .toLocaleDateString()
              .includes(searchTerm)
          );
        }
      );
    } else if (selectedTeam !== "") {
      filteredGames = data.games.filter(
        (game: { teams: string }) => game.teams === selectedTeam
      );
    } else {
      filteredGames = data.games; // Keine Filter, zeige alle Spiele
    }
  }

  // Ereignishandler für die Änderung des ausgewählten Teams
  function handleTeamChange() {
    applyFilters(searchTerm); // Filter zurücksetzen
  }

  // Nach dem Update, die Filter anwenden
  afterUpdate(() => {
    applyFilters(searchTerm);
  });

  let copyStatus: string | null = null;

  function copyData(gameData: string) {
    navigator.clipboard
      .writeText(gameData)
      .then(() => {
        copyStatus = "success";
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
  <title>Real Golf - Games</title>
</svelte:head>

<h1>Games</h1>

<h2>You have saved: {data.games.length} games in the database.</h2>

<form action="?/delete_all" method="POST" autocomplete="off">
  <button>Delete All</button>
</form>

{#if showMessage == true && form?.message}
  <p class="success">{form?.message}</p>
{/if}

{#if showMessage == true && form?.error}
  <p class="error">{form?.error}</p>
{/if}

<label for="search">Search a game by name or date:</label>
<input type="search" id="search" bind:value={searchTerm} />
<p class="error">
  You can search by dates by the following terms: DD/MM/YYYY or just by Year,
  Month or Day, to get all values with this parameters
</p>

<label for="teamSelect">Select a Team:</label>
<select id="teamSelect" bind:value={selectedTeam} on:change={handleTeamChange}>
  <option value="">All Teams</option>
  {#each teams as team}
    <option value={team.teams}>{team.name}</option>
  {/each}
</select>

{#if filteredGames.length > 0}
  {#if copyStatus === "success"}
    <p class="success">Copy successful</p>
  {:else if copyStatus === "error"}
    <p class="error">Copy failed</p>
  {/if}
  {#each filteredGames as game (game.id)}
    <div>
      <form action="?/rename" method="POST">
        <input
          type="text"
          name="name"
          id="name"
          class="headline"
          bind:value={game.name}
        />
        <input class="hidden" type="text" name="id" value={game.id} />
        <button>Update Name</button>
      </form>
      <p>Created at the {new Date(game.date).toLocaleDateString()}</p>
      <p>{game.data}</p>
      <p class="error">Please only paste the data in {game.teams}!</p>
      <button on:click={() => copyData(game.data)}>Copy Data</button>
      <form action="?/delete_game" method="POST" autocomplete="off">
        <input class="hidden" type="text" name="id" value={game.id} />
        <button>Delete Game</button>
      </form>
    </div>
  {/each}
{:else}
  <p class="error">No games found for this search.</p>
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

  label {
    font-size: var(--medium-font);
  }

  select {
    color: var(--font-color);
    border: none;
    font-family: inherit;
    font-size: inherit;
    border-radius: 0.25rem;
    background: none;
    margin-bottom: 1.5rem;
    text-align: center;

    padding: 0.4rem 0.8rem;
    background-color: var(--accent-color);
    cursor: pointer;

    &:focus {
      outline: 0.1rem solid var(--font-color);
      outline-offset: 0.2rem;
    }
  }
</style>
