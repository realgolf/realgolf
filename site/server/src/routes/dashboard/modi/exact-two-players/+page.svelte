<script lang="ts">
  import { onMount } from "svelte";
  import { enhance } from "$app/forms";
  import Exact from "$lib/components/Exact.svelte";
  import type { ActionData } from "./$types";

  let form: ActionData;

  interface Team {
    color: string;
    data: number[];
    points: number;
  }

  let teams: Team[] = [
    { color: "red", data: [], points: 0 },
    { color: "blue", data: [], points: 0 },
  ];

  function saveToDataBase() {
    // Extract data from localStorage
    const localStorageData = localStorage.getItem("exact_2_data");

    if (localStorageData) {
      teams = JSON.parse(localStorageData);
    }
  }

  function saveToLS() {
    let gameData = document.getElementById("game") as HTMLInputElement;

    localStorage.setItem("exact_2_data", gameData.value);

    location.reload();
  }
</script>

<Exact {teams} />

<p>Paste the data you got from <a href="/dashboard/games">Games</a> here:</p>
<input type="text" id="game" name="game" />
<button on:click={saveToLS}>Submit</button>
<br />
<button on:click={saveToDataBase}>Extract data for database.</button>

<form method="POST" autocomplete="off" use:enhance>
  <input
    type="text"
    name="team_data"
    id="team_data"
    value={JSON.stringify(teams)}
  />
  <button>Push to Database</button>
</form>

<style>
  button {
    margin-top: 2rem;
  }
</style>
